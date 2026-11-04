#!/usr/bin/env node
/**
 * build-ff1-exams.mjs — Turns the verified Fire Fighter I transcription into
 * the three exam files the site loads.
 *
 *   source/firefighter-1-exam-prep/verified/*.json   page-by-page transcription
 *                                                    checked against the photos
 *   source/firefighter-1-exam-prep/review.json       editorial decisions per item
 *                                                    (holds, flags, illustration assets)
 *     -> js/exam-prep-ff1-i1.js, -ff1-i2.js, -ff1-i3.js
 *
 * Every record keeps the printed question number, the Appendix A key number
 * it was matched to (always the same number, matched by exam and number,
 * never by position), the printed page of the question and of the key, the
 * photo each came from, the source text, and the key's own answer letter and
 * citations. Nothing is generated: a question with a missing choice, an
 * unreadable key letter, or a required illustration that has no asset is
 * written out as unresolved and stays out of scored tests.
 *
 *   node scripts/build-ff1-exams.mjs          write the three files
 *   node scripts/build-ff1-exams.mjs --check  exit 1 if they are stale
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "source", "firefighter-1-exam-prep");
const verifiedDir = join(sourceDir, "verified");

const EXAMS = [
  { id: "i1", examId: "ff1-exam-i1", idPrefix: "ff1-i1", label: "Fire Fighter I — Examination I-1", short: "Examination I-1",
    subtitle: "150 Exam Items - Surveying Weaknesses", questionPages: [5, 24], keyPages: [87, 111],
    readingList: [
      "IFSTA, Essentials of Fire Fighting, Firefighter 1, 8th Edition, Chapters 1-6, 9-12.",
      "Jones and Bartlett Learning, Fundamentals of Fire Fighter Skills and Hazardous Materials Response, 5th Edition, Chapters 1-7, 12, 14-19."
    ] },
  { id: "i2", examId: "ff1-exam-i2", idPrefix: "ff1-i2", label: "Fire Fighter I — Examination I-2", short: "Examination I-2",
    subtitle: "150 Exam Items - Adding Difficulty and Depth", questionPages: [27, 45], keyPages: [115, 140],
    readingList: [
      "IFSTA, Essentials of Fire Fighting and Fire Department Operations, 8th Edition, Chapters 1, 4-6, 9, 11-15.",
      "Jones and Bartlett Learning, Fundamentals of Fire Fighter Skills, 5th Edition, Chapters 2, 3, 5, 6, 9-14, 16-19."
    ] },
  { id: "i3", examId: "ff1-exam-i3", idPrefix: "ff1-i3", label: "Fire Fighter I — Examination I-3", short: "Examination I-3",
    subtitle: "150 Exam Items - Confirming What You Mastered", questionPages: [49, 67], keyPages: [143, 168],
    readingList: [
      "IFSTA, Essentials of Fire Fighting and Fire Department Operations, 8th Edition, Chapters 6-9.",
      "Jones and Bartlett Learning, 5th Edition, Chapters 1, 3, 5, 7-9, 11, 12, 17, 19-21."
    ] }
];
const ITEMS = 150;
const CHOICES = ["A", "B", "C", "D"];
const PREFIX = {
  nfpa: "NFPA 1010",
  ifsta: "IFSTA, Essentials of Fire Fighting, 8th Edition, Firefighter 1",
  jb: "Jones and Bartlett, Fundamentals of Fire Fighter Skills and Hazardous Materials Response, 5th Edition"
};

function readJson(path, fallback) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

function js(value) {
  return JSON.stringify(value);
}

/* ── Gather the verified pages ─────────────────────────────────────── */

export function loadVerified() {
  const byExam = {};
  EXAMS.forEach((exam) => { byExam[exam.id] = { questions: {}, keys: {}, questionPages: {}, keyPages: {}, pageNotes: [] }; });
  if (!existsSync(verifiedDir)) return byExam;
  readdirSync(verifiedDir).filter((f) => f.endsWith(".json")).sort().forEach((file) => {
    const data = readJson(join(verifiedDir, file), null);
    if (!data || !byExam[data.exam]) throw new Error(`${file}: unknown exam`);
    const bucket = byExam[data.exam];
    (data.pages || []).forEach((page) => {
      (page.pageNotes || []).forEach((note) => bucket.pageNotes.push({ page: page.page, note }));
      if (data.kind === "questions") {
        bucket.questionPages[page.page] = page.photo;
        (page.questions || []).forEach((q) => {
          if (bucket.questions[q.n]) {
            // The same number transcribed on two pages (an item that wraps). Merge notes; keep the first stem.
            const prev = bucket.questions[q.n];
            prev.notes = (prev.notes || []).concat(q.notes || [], [`Also printed on page ${page.page} (${page.photo}).`]);
            CHOICES.forEach((id) => { if (prev.choices[id] == null && q.choices && q.choices[id] != null) prev.choices[id] = q.choices[id]; });
            if (!prev.stem && q.stem) prev.stem = q.stem;
            return;
          }
          bucket.questions[q.n] = Object.assign({ page: page.page, photo: page.photo }, q);
        });
      } else if (data.kind === "keys") {
        bucket.keyPages[page.page] = page.photo;
        (page.entries || []).forEach((k) => {
          if (bucket.keys[k.n]) {
            const prev = bucket.keys[k.n];
            prev.notes = (prev.notes || []).concat(k.notes || [], [`Also printed on page ${page.page} (${page.photo}).`]);
            ["nfpa", "ifsta", "jb"].forEach((f) => { if (prev[f] == null && k[f] != null) prev[f] = k[f]; });
            if (prev.answer == null && k.answer != null) prev.answer = k.answer;
            return;
          }
          bucket.keys[k.n] = Object.assign({ page: page.page, photo: page.photo }, k);
        });
      } else {
        throw new Error(`${file}: unknown kind ${data.kind}`);
      }
    });
  });
  return byExam;
}

/* ── Build one record spec per printed number ─────────────────────── */

function refValue(kind, text) {
  if (text == null || String(text).trim() === "") return null;
  const value = String(text).trim();
  const prefix = PREFIX[kind];
  if (value.startsWith(prefix + ", ")) return value.slice(prefix.length + 2);
  if (value.startsWith(prefix + ",")) return value.slice(prefix.length + 1).trim();
  if (value === prefix) return null;
  return value; // printed with different wording; kept whole (rec() keeps whole strings that start with the prefix, else prefixes them)
}

function cleanRef(kind, text) {
  const v = refValue(kind, text);
  if (v == null) return null;
  // A citation that does not start with the standard prefix is kept verbatim with an incomplete flag only when it is clearly garbled.
  const prefix = PREFIX[kind];
  if (String(text).trim().startsWith(prefix)) return v;
  return { t: String(text).trim(), x: false, whole: true };
}

export function buildExam(exam, verified, review) {
  const specs = [];
  const problems = [];
  for (let n = 1; n <= ITEMS; n++) {
    const q = verified.questions[n];
    const k = verified.keys[n];
    const edit = (review.items || {})[`${exam.id}-${n}`] || {};
    const issues = [];
    const notes = [];
    let hold = false;

    if (!q) {
      issues.push({ summary: "This question was not found in the verified transcription.", correction: `Transcribe question ${n} from printed pages ${exam.questionPages[0]}-${exam.questionPages[1]}.` });
      hold = true;
    }
    if (!k) {
      issues.push({ summary: "No Appendix A key entry was found for this number.", correction: `Transcribe key entry ${n} from printed pages ${exam.keyPages[0]}-${exam.keyPages[1]}.` });
      hold = true;
    }
    const choices = q ? CHOICES.map((id) => (q.choices && q.choices[id] != null ? String(q.choices[id]) : "")) : ["", "", "", ""];
    const missing = CHOICES.filter((id, i) => choices[i].trim() === "");
    if (q && missing.length) {
      issues.push({ summary: `Choice${missing.length > 1 ? "s" : ""} ${missing.join(", ")} could not be read from the page.`, excerpt: (q.notes || []).join(" "), correction: `Re-check printed page ${q.page} (${q.photo}) for choice ${missing.join(", ")}.` });
      hold = true;
    }
    const unreadableText = q && (/\[unreadable\]/i.test(q.stem || "") || choices.some((c) => /\[unreadable\]/i.test(c)));
    if (unreadableText) {
      issues.push({ summary: "Part of the question text could not be read from the photo.", excerpt: (q.notes || []).join(" "), correction: `Re-photograph printed page ${q.page} (${q.photo}).` });
      hold = true;
    }
    const answer = k && k.answer != null ? String(k.answer).trim().toUpperCase() : null;
    if (k && !CHOICES.includes(answer)) {
      issues.push({ summary: "The key's answer letter could not be read.", excerpt: (k.notes || []).join(" "), correction: `Re-check printed page ${k.page} (${k.photo}) for the Answer line of entry ${n}.` });
      hold = true;
    }
    if (k && k.header && !new RegExp(`^${n}[.,]?\\s`).test(k.header)) {
      issues.push({ summary: "The key header does not start with this question number.", excerpt: k.header, correction: "Confirm the key entry number on the printed page." });
      hold = true;
    }
    const illustration = q && q.illustration ? { description: typeof q.illustration === "string" ? q.illustration : (q.illustration.description || "Illustration printed with this question.") } : null;
    if (illustration && edit.illustration) Object.assign(illustration, edit.illustration);
    if (illustration && !illustration.file) {
      issues.push({ summary: "This question depends on an illustration that has not been attached.", correction: `Crop the figure from printed page ${q.page} (${q.photo}) and attach it.` });
    }
    // The book sometimes prints one section number in the key header and another in the
    // Reference line. Neither is corrected; the item stays scorable but is flagged.
    if (k && k.header && k.nfpa) {
      const headerSection = (k.header.match(/^\d+[.,]?\s+(\d+(?:\.\d+)+)/) || [])[1];
      const refSection = (String(k.nfpa).replace(/^NFPA\s*\d+\s*,?\s*/i, "").match(/^(\d+(?:[.,]\s?\d+)+)/) || [])[1];
      const norm = (v) => (v || "").replace(/[,\s]/g, ".").split(".").filter(Boolean).map((x) => String(Number(x))).join(".");
      if (headerSection && refSection && norm(headerSection) !== norm(refSection)) {
        issues.push({ summary: `The key header cites section ${headerSection} but its Reference line prints ${refSection}.`, excerpt: `${k.header} / Reference: ${k.nfpa}`, correction: "Both numbers are kept as printed; confirm against NFPA 1010 before relying on the citation." });
      }
    }
    if (q) (q.notes || []).forEach((note) => notes.push(note));
    if (k) (k.notes || []).forEach((note) => notes.push("Key: " + note));
    (edit.notes || []).forEach((note) => notes.push(note));
    (edit.issues || []).forEach((issue) => issues.push(issue));
    if (edit.hold) hold = true;

    const refs = k ? [cleanRef("nfpa", k.nfpa), cleanRef("ifsta", k.ifsta), cleanRef("jb", k.jb)] : [null, null, null];
    const extraRefs = k ? (k.other || []).filter(Boolean) : [];
    const original = q ? [`${n}. ${q.stem || ""}`].concat(CHOICES.map((id, i) => (choices[i] ? `${id}. ${choices[i]}` : null)).filter(Boolean)).join(" ") : "";

    specs.push({
      n,
      key: k ? k.header : "",
      q: q ? q.stem || "" : "",
      c: choices,
      a: answer && CHOICES.includes(answer) ? answer : null,
      sourceAnswer: k && k.answer != null ? String(k.answer) : null,
      r: refs,
      extraRefs,
      o: original,
      statements: q && q.statements && q.statements.length ? q.statements : undefined,
      image: illustration,
      hold,
      status: edit.status || (hold ? "unresolved" : (issues.length ? "needs_review" : "source_imported")),
      notes,
      issues,
      page: q ? q.page : null,
      photo: q ? q.photo : null,
      keyPage: k ? k.page : null,
      keyPhoto: k ? k.photo : null
    });
    if (hold) problems.push(n);
  }
  return { specs, problems };
}

function specToSource(spec) {
  const lines = [];
  lines.push(`    rec({`);
  lines.push(`      n: ${spec.n},`);
  lines.push(`      key: ${js(spec.key)},`);
  lines.push(`      page: ${js(spec.page)}, photo: ${js(spec.photo)}, keyPage: ${js(spec.keyPage)}, keyPhoto: ${js(spec.keyPhoto)},`);
  lines.push(`      q: ${js(spec.q)},`);
  lines.push(`      c: [${spec.c.map(js).join(", ")}],`);
  lines.push(`      a: ${js(spec.a)},${spec.sourceAnswer !== spec.a ? ` sourceAnswer: ${js(spec.sourceAnswer)},` : ""}`);
  const r = spec.r.map((v) => {
    if (v == null) return "null";
    if (typeof v === "string") return js(v);
    return `{ t: ${js(v.t)}, x: ${v.x ? "true" : "false"} }`;
  });
  lines.push(`      r: [${r.join(", ")}],`);
  if (spec.extraRefs.length) lines.push(`      extraRefs: [${spec.extraRefs.map((t) => `cite(${js(t)})`).join(", ")}],`);
  if (spec.statements) lines.push(`      statements: ${js(spec.statements)},`);
  if (spec.image) {
    const img = spec.image;
    lines.push(`      image: { description: ${js(img.description)}${img.file ? `, file: ${js(img.file)}, alt: ${js(img.alt || "")}, redrawn: ${img.redrawn === true ? "true" : "false"}${img.credit ? `, credit: ${js(img.credit)}` : ""}` : ""} },`);
  }
  if (spec.hold) lines.push(`      hold: true,`);
  if (spec.status !== "source_imported") lines.push(`      status: ${js(spec.status)},`);
  if (spec.notes.length) lines.push(`      notes: ${js(spec.notes)},`);
  if (spec.issues.length) lines.push(`      issues: ${js(spec.issues)},`);
  lines.push(`      o: ${js(spec.o)}`);
  lines.push(`    })`);
  return lines.join("\n");
}

export function renderExamFile(exam, built, meta) {
  const header = `/**
 * ${exam.label} — generated by scripts/build-ff1-exams.mjs. Do not edit by hand;
 * change source/firefighter-1-exam-prep/verified/*.json or review.json and rebuild.
 *
 * Source: PTS Publications, Exam Prep: Fire Fighter I, Seventh Edition (2025).
 * Questions from printed pages ${exam.questionPages[0]}-${exam.questionPages[1]}; Appendix A key entries from
 * printed pages ${exam.keyPages[0]}-${exam.keyPages[1]}. Every answer letter and citation is the book's
 * own, matched by exam and printed question number. ${built.problems.length} of ${ITEMS} items are
 * held out of scored tests (see each record's issues).
 */
(function () {
  "use strict";

  var bank = globalThis.ExamPrepBank.createExam({
    source: globalThis.ExamPrepBank.FIRE_FIGHTER_1_SOURCE,
    examId: ${js(exam.examId)},
    examLabel: ${js(exam.label)},
    shortLabel: ${js(exam.short)},
    idPrefix: ${js(exam.idPrefix)}
  });
  var rec = bank.rec;
  var cite = bank.cite;

  var questions = [
`;
  const body = built.specs.map(specToSource).join(",\n");
  const footer = `
  ];

  var meta = ${JSON.stringify(meta, null, 4).replace(/\n/g, "\n  ")};

  bank.register(questions, meta);
})();
`;
  return header + body + footer;
}

export function buildAll() {
  const verified = loadVerified();
  const review = readJson(join(sourceDir, "review.json"), { items: {} });
  const files = {};
  const report = [];
  EXAMS.forEach((exam) => {
    const built = buildExam(exam, verified[exam.id], review);
    const meta = {
      id: exam.examId,
      sourceId: "fire-fighter-1-exam-prep",
      programId: "firefighter-1",
      shortLabel: exam.short,
      subtitle: exam.subtitle,
      keyAppendix: "Appendix A",
      itemCount: ITEMS,
      questionPages: exam.questionPages,
      keyPages: exam.keyPages,
      readingList: exam.readingList,
      directions: "The book's directions: take the examination without studying first, mark answers in ink, mark any guessed item with an X, then score it against Appendix A and research every missed or guessed item in the cited pages.",
      answerNote: "Answer letters and page citations are transcribed from the book's Appendix A and have not been independently verified.",
      sourceNotes: (review.sourceNotes && review.sourceNotes[exam.id]) || []
    };
    files[`js/exam-prep-ff1-${exam.id}.js`] = renderExamFile(exam, built, meta);
    report.push({ exam: exam.short, imported: built.specs.length, held: built.problems.length, heldNumbers: built.problems,
      eligible: built.specs.filter((s) => !s.hold).length,
      verifiedQuestions: Object.keys(verified[exam.id].questions).length,
      verifiedKeys: Object.keys(verified[exam.id].keys).length });
  });
  return { files, report };
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  const { files, report } = buildAll();
  const check = process.argv.includes("--check");
  let stale = false;
  Object.entries(files).forEach(([rel, content]) => {
    const path = join(root, rel);
    const current = existsSync(path) ? readFileSync(path, "utf8") : null;
    if (current !== content) {
      stale = true;
      if (!check) writeFileSync(path, content);
    }
  });
  report.forEach((r) => {
    console.log(`${r.exam}: ${r.verifiedQuestions} questions and ${r.verifiedKeys} keys verified, ${r.imported} records written, ${r.eligible} scorable, ${r.held} held` + (r.heldNumbers.length ? ` (${r.heldNumbers.join(", ")})` : ""));
  });
  if (check && stale) {
    console.error("js/exam-prep-ff1-*.js is stale; run: node scripts/build-ff1-exams.mjs");
    process.exit(1);
  }
}
