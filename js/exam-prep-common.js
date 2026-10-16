/**
 * exam-prep-common.js — Shared record factory for the PTS Publications
 * "Exam Prep: Hazardous Materials Awareness and Operations" (7th Ed., 2022).
 *
 * Each exam file calls ExamPrepBank.createExam(config) and gets helpers that
 * build records with one shape. Answer letters and citations always come from
 * the exam's own answer key (Appendix A for Awareness, Appendix B for
 * Operations), matched by exam ID and the leading exam question number.
 *
 * reviewStatus:
 *   source_imported — readable item; still not independently verified
 *   needs_review    — usable in a scored test, with a flagged citation or wording
 *   unresolved      — excluded from scored tests until corrected
 */
(function () {
  "use strict";

  var SOURCE_ID = "hazardous-materials-exam-prep";
  var SOURCE_LABEL = "Hazardous Materials Exam Prep";
  var NFPA = "NFPA 1072";
  var IFSTA = "IFSTA, Hazardous Materials for First Responders, 5th Edition";
  var JB = "Jones and Bartlett, Hazardous Materials Awareness and Operations, 3rd Ed";

  function choices(a, b, c, d) {
    return [
      { id: "A", text: a == null ? "" : a },
      { id: "B", text: b == null ? "" : b },
      { id: "C", text: c == null ? "" : c },
      { id: "D", text: d == null ? "" : d }
    ];
  }

  function cite(text, incomplete) {
    return { text: text, incomplete: !!incomplete };
  }

  var ILLUSTRATION_DIR = "assets/illustrations/";
  var REDRAWN_NOTE = "The illustration shown is a redrawn standardized graphic that matches the " +
    "answer key, not the book's original art.";

  /**
   * Illustration record. With only a description the item still needs its
   * picture and is excluded from scored tests. Pass a file name and alt text
   * to attach a drawing from assets/illustrations/.
   */
  function image(description, file, alt) {
    return {
      required: true,
      asset: file ? ILLUSTRATION_DIR + file : null,
      alt: alt || null,
      description: description,
      redrawn: !!file
    };
  }

  function toIllustration(spec) {
    if (!spec) return null;
    if (typeof spec === "string") return image(spec);
    return image(spec.description, spec.file, spec.alt);
  }

  function parseKeyHeader(header) {
    var match = /^\s*\d+[.,]?\s+(\d+(?:\.\d+)+)\s+(.*?)\s+(\d+)\s*$/.exec(header || "");
    if (!match) return { section: "", topic: "", referenceId: null };
    return { section: match[1], topic: match[2], referenceId: match[3] };
  }

  /**
   * Statements may be written either as { number, text, missing } objects or
   * as plain strings such as "Statement 2: ...". The renderer only reads
   * objects, so every entry is normalized here. A leading "Statement N:" label
   * on a string is used for the number and removed from the displayed text,
   * because the <ol> already numbers each statement.
   */
  function normalizeStatements(statements) {
    return (statements || []).map(function (statement, index) {
      if (statement && typeof statement === "object") {
        return {
          number: statement.number || index + 1,
          text: statement.text || "",
          missing: statement.missing === true
        };
      }
      var text = statement == null ? "" : String(statement).trim();
      var number = index + 1;
      var match = /^Statement\s+(\d+)\s*[:.]\s*/i.exec(text);
      if (match) {
        number = parseInt(match[1], 10);
        text = text.slice(match[0].length).trim();
      }
      return { number: number, text: text, missing: text === "" };
    });
  }

  function createExam(config) {
    var examId = config.examId;
    var idPrefix = config.idPrefix;

    function item(spec) {
      var status = spec.status || "source_imported";
      var answer = spec.answer == null ? null : spec.answer;
      var eligible = spec.eligible === true && status !== "unresolved" && answer != null;
      return {
        id: idPrefix + "-" + spec.n,
        sourceId: SOURCE_ID,
        sourceLabel: SOURCE_LABEL,
        examId: examId,
        examLabel: config.examLabel,
        examShort: config.shortLabel,
        examLevel: config.level,
        originalNumber: spec.n,
        answerKeyNumber: spec.n,
        keyHeader: spec.keyHeader,
        question: spec.question,
        statements: normalizeStatements(spec.statements),
        choices: spec.choices,
        correctChoiceId: eligible ? answer : (status === "unresolved" ? null : answer),
        sourceAnswerLetter: spec.sourceAnswer == null ? answer : spec.sourceAnswer,
        illustration: spec.illustration || null,
        references: spec.references || [],
        explanation: spec.explanation || null,
        originalCitation: spec.originalCitation || "",
        standard: NFPA,
        standardSection: spec.section,
        topic: spec.topic,
        referenceId: spec.referenceId,
        reviewStatus: status,
        reviewNotes: spec.notes || [],
        issues: spec.issues || [],
        requiredCorrection: (spec.issues || []).map(function (issue) {
          return issue.correction;
        }).filter(Boolean).join(" "),
        originalSourceText: spec.original,
        eligibleForScoredTest: eligible,
        answerIndependentlyVerified: false
      };
    }

    function refText(prefix, value) {
      if (value == null) return null;
      if (typeof value === "string") return cite(prefix + ", " + value);
      return cite(prefix + ", " + value.t, value.x);
    }

    /**
     * Compact record. Fields:
     *   n, key, q, c (4 strings), a (letter or null), r ([nfpa, ifsta, jb]),
     *   o (original OCR text), plus optional status, notes, issues, hold
     *   (true = exclude), image, statements, extraRefs, origCite, sourceAnswer,
     *   explanation (plain-language "why", shown in the completion report
     *   when present; the source keys do not include one).
     */
    function rec(spec) {
      var parsed = parseKeyHeader(spec.key);
      var refs = [];
      var r = spec.r || [];
      var nfpa = refText(NFPA, r[0]);
      var ifsta = refText(IFSTA, r[1]);
      var jb = refText(JB, r[2]);
      if (nfpa) refs.push(nfpa);
      if (ifsta) refs.push(ifsta);
      if (jb) refs.push(jb);
      (spec.extraRefs || []).forEach(function (extra) { refs.push(extra); });

      var status = spec.status || (spec.hold ? "unresolved" : "source_imported");
      var c = spec.c || [];
      return item({
        n: spec.n,
        keyHeader: spec.key,
        section: parsed.section,
        topic: parsed.topic,
        referenceId: parsed.referenceId,
        question: spec.q,
        statements: spec.statements,
        choices: choices(c[0], c[1], c[2], c[3]),
        answer: spec.hold ? null : spec.a,
        sourceAnswer: spec.sourceAnswer == null ? spec.a : spec.sourceAnswer,
        eligible: !spec.hold,
        status: status,
        illustration: toIllustration(spec.image),
        notes: spec.notes,
        issues: spec.issues,
        references: refs,
        explanation: spec.explanation,
        originalCitation: spec.origCite,
        original: spec.o
      });
    }

    function register(questions, meta) {
      globalThis.EXAM_PREP_EXAMS = globalThis.EXAM_PREP_EXAMS || [];
      globalThis.EXAM_PREP_EXAMS.push(questions);
      globalThis.EXAM_PREP_META = globalThis.EXAM_PREP_META || [];
      globalThis.EXAM_PREP_META.push(meta);
    }

    return {
      item: item,
      rec: rec,
      choices: choices,
      cite: cite,
      image: image,
      redrawnNote: REDRAWN_NOTE,
      register: register,
      nfpa: NFPA,
      ifsta: IFSTA,
      jb: JB,
      sourceId: SOURCE_ID,
      examId: examId
    };
  }

  globalThis.ExamPrepBank = {
    createExam: createExam,
    choices: choices,
    cite: cite,
    image: image,
    redrawnNote: REDRAWN_NOTE,
    parseKeyHeader: parseKeyHeader,
    SOURCE_ID: SOURCE_ID,
    SOURCE_LABEL: SOURCE_LABEL
  };
})();
