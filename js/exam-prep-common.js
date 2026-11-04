/**
 * exam-prep-common.js — Shared record factory for the PTS Publications exam
 * prep books. Two books are loaded today:
 *
 *   "Exam Prep: Hazardous Materials Awareness and Operations" (7th Ed., 2022)
 *     source id hazardous-materials-exam-prep, program hazmat, NFPA 1072.
 *   "Exam Prep: Fire Fighter I" (7th Ed., 2025)
 *     source id fire-fighter-1-exam-prep, program firefighter-1, NFPA 1001/1010.
 *
 * Each exam file calls ExamPrepBank.createExam(config) and gets helpers that
 * build records with one shape. A config without `source` is the HazMat book,
 * so the six HazMat exam files are unchanged. Answer letters and citations
 * always come from the exam's own answer key, matched by exam ID and the
 * leading exam question number. Nothing is copied between books.
 *
 * reviewStatus:
 *   source_imported — readable item; still not independently verified
 *   needs_review    — usable in a scored test, with a flagged citation or wording
 *   unresolved      — excluded from scored tests until corrected
 */
(function () {
  "use strict";

  var HAZMAT_SOURCE = {
    id: "hazardous-materials-exam-prep",
    label: "Hazardous Materials Exam Prep",
    programId: "hazmat",
    standard: "NFPA 1072",
    refs: {
      nfpa: "NFPA 1072",
      ifsta: "IFSTA, Hazardous Materials for First Responders, 5th Edition",
      jb: "Jones and Bartlett, Hazardous Materials Awareness and Operations, 3rd Ed"
    }
  };

  var FIRE_FIGHTER_1_SOURCE = {
    id: "fire-fighter-1-exam-prep",
    label: "Fire Fighter I Exam Prep",
    programId: "firefighter-1",
    standard: "NFPA 1001",
    edition: "Seventh Edition, 2025",
    refs: {
      nfpa: "NFPA 1010",
      ifsta: "IFSTA, Essentials of Fire Fighting, 8th Edition, Firefighter 1",
      jb: "Jones and Bartlett, Fundamentals of Fire Fighter Skills and Hazardous Materials Response, 5th Edition"
    }
  };

  var SOURCES = {};
  [HAZMAT_SOURCE, FIRE_FIGHTER_1_SOURCE].forEach(function (source) { SOURCES[source.id] = source; });

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
   * to attach a drawing from assets/illustrations/. `redrawn: false` marks a
   * faithful crop of the book's own figure rather than a redrawn graphic.
   */
  function image(description, file, alt, options) {
    var opts = options || {};
    return {
      required: true,
      asset: file ? ILLUSTRATION_DIR + file : null,
      alt: alt || null,
      description: description,
      redrawn: file ? opts.redrawn !== false : false,
      credit: opts.credit || null
    };
  }

  function toIllustration(spec) {
    if (!spec) return null;
    if (typeof spec === "string") return image(spec);
    return image(spec.description, spec.file, spec.alt, spec);
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
    var source = config.source || HAZMAT_SOURCE;
    var refs = source.refs;

    function item(spec) {
      var status = spec.status || "source_imported";
      var answer = spec.answer == null ? null : spec.answer;
      var eligible = spec.eligible === true && status !== "unresolved" && answer != null;
      return {
        id: idPrefix + "-" + spec.n,
        sourceId: source.id,
        sourceLabel: source.label,
        programId: source.programId,
        examId: examId,
        examLabel: config.examLabel,
        examShort: config.shortLabel,
        examLevel: config.level || null,
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
        standard: source.standard,
        standardSection: spec.section,
        topic: spec.topic,
        referenceId: spec.referenceId,
        sourcePage: spec.page == null ? null : spec.page,
        keyPage: spec.keyPage == null ? null : spec.keyPage,
        sourcePhoto: spec.photo || null,
        keyPhoto: spec.keyPhoto || null,
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

    /* A reference value is either the part after the standard prefix
       ("6.1.1", "page 34.") or, when the key printed something that does
       not start with the usual prefix, the whole citation. */
    function refText(prefix, value) {
      if (value == null) return null;
      if (typeof value === "string") {
        if (value.indexOf(prefix) === 0) return cite(value);
        return cite(prefix + ", " + value);
      }
      if (typeof value.t === "string" && value.t.indexOf(prefix) === 0) return cite(value.t, value.x);
      return cite(prefix + ", " + value.t, value.x);
    }

    /**
     * Compact record. Fields:
     *   n, key, q, c (4 strings), a (letter or null), r ([nfpa, ifsta, jb]),
     *   o (original OCR text), plus optional status, notes, issues, hold
     *   (true = exclude), image, statements, extraRefs, origCite, sourceAnswer,
     *   page, keyPage, photo, keyPhoto, explanation (plain-language "why",
     *   shown in the completion report when present; the source keys do not
     *   include one).
     */
    function rec(spec) {
      var parsed = parseKeyHeader(spec.key);
      var references = [];
      var r = spec.r || [];
      var nfpa = refText(refs.nfpa, r[0]);
      var ifsta = refText(refs.ifsta, r[1]);
      var jb = refText(refs.jb, r[2]);
      if (nfpa) references.push(nfpa);
      if (ifsta) references.push(ifsta);
      if (jb) references.push(jb);
      (spec.extraRefs || []).forEach(function (extra) { references.push(extra); });

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
        references: references,
        explanation: spec.explanation,
        originalCitation: spec.origCite,
        original: spec.o,
        page: spec.page,
        keyPage: spec.keyPage,
        photo: spec.photo,
        keyPhoto: spec.keyPhoto
      });
    }

    function register(questions, meta) {
      var entry = meta || {};
      if (!entry.sourceId) entry.sourceId = source.id;
      if (!entry.programId) entry.programId = source.programId;
      globalThis.EXAM_PREP_EXAMS = globalThis.EXAM_PREP_EXAMS || [];
      globalThis.EXAM_PREP_EXAMS.push(questions);
      globalThis.EXAM_PREP_META = globalThis.EXAM_PREP_META || [];
      globalThis.EXAM_PREP_META.push(entry);
    }

    return {
      item: item,
      rec: rec,
      choices: choices,
      cite: cite,
      image: image,
      redrawnNote: REDRAWN_NOTE,
      register: register,
      nfpa: refs.nfpa,
      ifsta: refs.ifsta,
      jb: refs.jb,
      sourceId: source.id,
      source: source,
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
    sources: SOURCES,
    HAZMAT_SOURCE: HAZMAT_SOURCE,
    FIRE_FIGHTER_1_SOURCE: FIRE_FIGHTER_1_SOURCE,
    SOURCE_ID: HAZMAT_SOURCE.id,
    SOURCE_LABEL: HAZMAT_SOURCE.label
  };
})();
