#!/usr/bin/env node
/**
 * parse-ocr.mjs — First pass over the OCR transcript of the PTS Publications
 * "Exam Prep: Fire Fighter I" (Seventh Edition, 2025) book photos.
 *
 * Reads the extracted-text Markdown (one section per printed page, each with
 * its photo file name) and writes one draft JSON file per examination with the
 * questions and the Appendix A key entries it could find. Every record keeps
 * the raw OCR lines and a list of flags, because the OCR is a draft: columns
 * interleave, choice labels disappear, and letters are misread. Nothing in the
 * draft is trusted until it has been checked against the page photo.
 *
 *   node scripts/ff1-import/parse-ocr.mjs <extracted-text.md> <out-dir>
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const [, , inputPath, outDir] = process.argv;
if (!inputPath || !outDir) {
  console.error("usage: parse-ocr.mjs <extracted-text.md> <out-dir>");
  process.exit(2);
}

const EXAMS = [
  { id: "i1", label: "Examination I-1", questionPages: [5, 24], keyPages: [87, 111] },
  { id: "i2", label: "Examination I-2", questionPages: [27, 45], keyPages: [115, 140] },
  { id: "i3", label: "Examination I-3", questionPages: [49, 67], keyPages: [143, 168] }
];
const ITEMS_PER_EXAM = 150;

/* ── Split the transcript into printed pages ───────────────────────── */

function parsePages(markdown) {
  const pages = [];
  let current = null;
  markdown.split(/\r?\n/).forEach((line) => {
    const head = /^## Printed book page (\S+)\s*$/.exec(line);
    if (head) {
      current = { page: head[1], photo: null, lines: [] };
      pages.push(current);
      return;
    }
    if (!current) return;
    const photo = /^Source photo:\s*`([^`]+)`/.exec(line);
    if (photo) {
      current.photo = photo[1];
      return;
    }
    if (line.trim() === "---") return;
    current.lines.push(line.replace(/\s+$/, ""));
  });
  return pages;
}

function pagesInRange(pages, [from, to]) {
  return pages.filter((p) => /^\d+$/.test(p.page) && Number(p.page) >= from && Number(p.page) <= to);
}

function isNoise(line, page) {
  const text = line.trim();
  if (text === "") return true;
  if (text === String(page)) return true;
  if (/^PHASE I, FIREFIGHTER I, EXAMINATION/i.test(text)) return true;
  if (/^EXAM PREP: FIRE FIGHTER I/i.test(text)) return true;
  if (/^APPENDIX A/i.test(text)) return true;
  return false;
}

/* ── Questions ─────────────────────────────────────────────────────── */

const CHOICE_RE = /^([A-D])[.,]\s*(.*)$/;
const INLINE_CHOICE_SPLIT = /\s+(?=[A-D]\.\s)/;

function newQuestion(n, stem, page, photo) {
  return { n, page: Number(page), photo, stem: stem.trim(), choices: {}, extra: [], flags: [], raw: [] };
}

function parseQuestions(pages, exam) {
  const out = [];
  const preamble = [];
  const postamble = [];
  let current = null;
  let expected = 1;
  const illustrations = [];

  pagesInRange(pages, exam.questionPages).forEach((page) => {
    page.lines.forEach((line) => {
      const text = line.trim();
      const note = /^\[Illustration present in the source:(.*)\]$/.exec(text);
      if (note) {
        illustrations.push({ page: Number(page.page), photo: page.photo, note: note[1].trim() });
        return;
      }
      if (isNoise(text, page.page)) return;

      const start = /^(\d{1,3})\.\s+(.*)$/.exec(text);
      if (start) {
        const n = Number(start[1]);
        // Reading lists and directions also start with "1." so a question
        // only starts when the number continues the sequence.
        if (n === expected || (n > expected && n <= expected + 2 && current)) {
          if (n !== expected) {
            out.push({ n: expected, page: Number(page.page), photo: page.photo, stem: "", choices: {}, extra: [], flags: ["missing_in_ocr"], raw: [] });
          }
          current = newQuestion(n, start[2], page.page, page.photo);
          current.raw.push(line);
          out.push(current);
          expected = n + 1;
          return;
        }
      }

      if (!current) {
        preamble.push(line);
        return;
      }
      if (expected > ITEMS_PER_EXAM && !CHOICE_RE.test(text) && !/^[A-D][.,]/.test(text) &&
          Object.keys(current.choices).length >= 4) {
        postamble.push(line);
        return;
      }
      current.raw.push(line);

      if (CHOICE_RE.test(text)) {
        text.split(INLINE_CHOICE_SPLIT).forEach((piece) => {
          const m = CHOICE_RE.exec(piece.trim());
          if (!m) {
            current.extra.push(piece.trim());
            current.flags.push("unlabeled_fragment");
            return;
          }
          if (current.choices[m[1]] != null) {
            current.extra.push(piece.trim());
            current.flags.push("duplicate_label_" + m[1]);
            return;
          }
          current.choices[m[1]] = m[2].trim();
        });
        return;
      }

      if (Object.keys(current.choices).length === 0) {
        current.stem = (current.stem + " " + text).trim();
        return;
      }
      current.extra.push(text);
      current.flags.push("unlabeled_line_after_choices");
    });
  });

  out.forEach((q) => {
    ["A", "B", "C", "D"].forEach((id) => {
      if (q.choices[id] == null) q.flags.push("missing_choice_" + id);
    });
    if (!q.stem) q.flags.push("empty_stem");
    if (/_{2,}|\.{4,}/.test(q.stem)) q.flags.push("blank_in_stem");
    if (/illustrat|shown below|pictured|figure|diagram/i.test(q.stem)) q.flags.push("may_need_illustration");
    q.flags = Array.from(new Set(q.flags));
  });

  return { questions: out, preamble, postamble, illustrations };
}

/* ── Answer keys ───────────────────────────────────────────────────── */

const HEADER_RE = /^(\d{1,3})[.,]?\s+(\d+(?:\s?\.\s?\d+)+)\s+(.*?)\s+(\d+)\s*$/;
const ANSWER_RE = /^Answer\s*[:.]?\s*([A-Da-d0-9]?)\s*\.?$/;

function splitRefs(lines) {
  const segments = [];
  lines.forEach((line) => {
    const text = line.trim();
    if (!text) return;
    if (/^Reference\s*:/i.test(text) || /^IFSTA/i.test(text) || /^Jones/i.test(text) || /^NFPA/i.test(text) ||
        segments.length === 0) {
      segments.push(text);
    } else {
      segments[segments.length - 1] += " " + text;
    }
  });
  const refs = { nfpa: null, ifsta: null, jb: null, other: [] };
  segments.forEach((segment) => {
    const cleaned = segment.replace(/^Reference\s*:\s*/i, "").trim();
    if (/^NFPA/i.test(cleaned) && refs.nfpa == null) refs.nfpa = cleaned;
    else if (/^IFSTA/i.test(cleaned) && refs.ifsta == null) refs.ifsta = cleaned;
    else if (/^Jones/i.test(cleaned) && refs.jb == null) refs.jb = cleaned;
    else refs.other.push(cleaned);
  });
  return refs;
}

function parseKeys(pages, exam) {
  const out = [];
  let current = null;
  let expected = 1;
  let refLines = [];

  function finish() {
    if (!current) return;
    current.refs = splitRefs(refLines);
    if (current.answer == null) current.flags.push("missing_answer");
    if (current.refs.nfpa == null) current.flags.push("missing_nfpa_ref");
    if (current.refs.ifsta == null && current.refs.jb == null) current.flags.push("missing_text_refs");
    current.flags = Array.from(new Set(current.flags));
    refLines = [];
  }

  pagesInRange(pages, exam.keyPages).forEach((page) => {
    page.lines.forEach((line) => {
      const text = line.trim();
      if (isNoise(text, page.page)) return;
      const header = HEADER_RE.exec(text);
      if (header) {
        const n = Number(header[1]);
        if (n === expected || (n > expected && n <= expected + 3 && current)) {
          finish();
          while (expected < n) {
            out.push({ n: expected, page: Number(page.page), photo: page.photo, header: "", section: "", topic: "", referenceId: "",
              refs: { nfpa: null, ifsta: null, jb: null, other: [] }, answer: null, flags: ["missing_in_ocr"], raw: [] });
            expected += 1;
          }
          current = {
            n,
            page: Number(page.page),
            photo: page.photo,
            header: text,
            section: header[2].replace(/\s+/g, ""),
            topic: header[3].trim(),
            referenceId: header[4],
            refs: null,
            answer: null,
            flags: [],
            raw: [line]
          };
          out.push(current);
          expected = n + 1;
          return;
        }
      }
      if (!current) return;
      current.raw.push(line);
      const answer = ANSWER_RE.exec(text);
      if (answer) {
        const letter = answer[1].toUpperCase();
        if (current.answer != null) current.flags.push("second_answer_line");
        if (/^[A-D]$/.test(letter)) current.answer = letter;
        else {
          current.answer = null;
          current.flags.push("unreadable_answer");
        }
        return;
      }
      refLines.push(text);
    });
  });
  finish();
  return out;
}

/* ── Run ───────────────────────────────────────────────────────────── */

const pages = parsePages(readFileSync(inputPath, "utf8"));
mkdirSync(outDir, { recursive: true });

const pageMap = pages.map((p) => ({ page: p.page, photo: p.photo }));
writeFileSync(join(outDir, "pages.json"), JSON.stringify(pageMap, null, 2) + "\n");

const summary = [];
EXAMS.forEach((exam) => {
  const q = parseQuestions(pages, exam);
  const keys = parseKeys(pages, exam);
  const data = {
    exam: exam.id,
    label: exam.label,
    questionPages: exam.questionPages,
    keyPages: exam.keyPages,
    preamble: q.preamble,
    postamble: q.postamble,
    illustrations: q.illustrations,
    questions: q.questions,
    keys
  };
  writeFileSync(join(outDir, `exam-${exam.id}.json`), JSON.stringify(data, null, 2) + "\n");

  const qNumbers = new Set(q.questions.map((x) => x.n));
  const kNumbers = new Set(keys.map((x) => x.n));
  const missingQ = [];
  const missingK = [];
  for (let n = 1; n <= ITEMS_PER_EXAM; n++) {
    if (!qNumbers.has(n)) missingQ.push(n);
    if (!kNumbers.has(n)) missingK.push(n);
  }
  const flaggedQ = q.questions.filter((x) => x.flags.length);
  const flaggedK = keys.filter((x) => x.flags.length);
  summary.push(
    `${exam.label}: ${q.questions.length} questions (${flaggedQ.length} flagged; missing ${missingQ.join(",") || "none"}), ` +
    `${keys.length} key entries (${flaggedK.length} flagged; missing ${missingK.join(",") || "none"})`
  );
  const flagCounts = {};
  flaggedQ.concat(flaggedK).forEach((x) => x.flags.forEach((f) => { flagCounts[f] = (flagCounts[f] || 0) + 1; }));
  summary.push("  flags: " + Object.entries(flagCounts).map(([k, v]) => `${k}=${v}`).join(" "));
});
console.log(summary.join("\n"));
