/**
 * catalog.js — Joins the instructor handout bank and the book exams into one
 * content catalog. UI code should read this instead of mixing question text
 * into the page.
 *
 * Book exams register themselves on EXAM_PREP_EXAMS / EXAM_PREP_META through
 * js/exam-prep-common.js; load each exam file before this one. Add an
 * instructor handout by extending QUESTION_BANK in js/questions.js.
 *
 * Every record gets a `canonicalKey` built from its normalized question,
 * statements, and choice texts. Records that share a key are exact duplicates
 * (the book repeats many items across exams). The test engine uses the key so
 * one canonical question never appears twice in a test and unique counts are
 * not inflated. Answer letters are never copied between duplicates; if two
 * eligible duplicates disagree on the answer, both are pulled from scored
 * tests and flagged for review.
 */
(function () {
  "use strict";

  var CHOICE_IDS = ["A", "B", "C", "D"];
  var BOOK_SOURCE_ID = "hazardous-materials-exam-prep";
  var BOOK_SOURCE_LABEL = "Hazardous Materials Exam Prep";
  var HANDOUT_SOURCE_ID = "instructor-handouts";

  function normalizeText(value) {
    return String(value == null ? "" : value)
      .toLowerCase()
      .replace(/[\u2018\u2019\u201c\u201d]/g, "")
      .replace(/[^a-z0-9%]+/g, " ")
      .trim();
  }

  function statementText(statement) {
    if (statement == null) return "";
    if (typeof statement === "string") return statement;
    return statement.text || "";
  }

  function canonicalKey(question) {
    var statements = (question.statements || []).map(function (statement) {
      return normalizeText(statementText(statement));
    });
    var choices = (question.choices || []).map(function (choice) {
      return normalizeText(choice && choice.text);
    });
    return [normalizeText(question.question)].concat(statements, ["#"], choices).join("|");
  }

  function handoutRecord(question) {
    var choices = CHOICE_IDS.map(function (id) {
      var text = question.choices && question.choices[id];
      return { id: id, text: typeof text === "string" ? text : "" };
    });
    var answer = question.correctAnswer;
    var complete = !!(question.question && String(question.question).trim())
      && choices.every(function (choice) { return choice.text.trim() !== ""; })
      && CHOICE_IDS.indexOf(answer) !== -1;

    return {
      id: "handout-" + question.id,
      sourceId: HANDOUT_SOURCE_ID,
      sourceLabel: "Instructor Handouts",
      examId: "handout-quiz-" + question.quiz,
      examLabel: "Quiz #" + question.quiz + " — " + question.quizTitle,
      originalNumber: question.originalNumber,
      question: question.question,
      statements: [],
      choices: choices,
      correctChoiceId: complete ? answer : null,
      sourceAnswerLetter: answer || null,
      illustration: null,
      references: question.objective
        ? [{ text: question.objective, incomplete: false }]
        : [],
      standard: "NFPA 472",
      standardSection: question.objective || "",
      topic: question.level || "",
      referenceId: null,
      reviewStatus: complete ? "source_imported" : "unresolved",
      reviewNotes: [
        "Imported from the instructor handout question bank already in this project. The handout answer key is the source for the letter and has not been re-verified here."
      ],
      issues: [],
      requiredCorrection: complete ? "" : "This handout item is missing question text, a choice, or a valid A–D answer.",
      originalSourceText: question.question || "",
      eligibleForScoredTest: complete,
      answerIndependentlyVerified: false,
      level: question.level,
      objective: question.objective,
      legacyId: question.id
    };
  }

  function groupExams(questions, metaById) {
    var exams = [];
    var index = {};
    questions.forEach(function (question) {
      var key = question.examId || "exam";
      if (index[key] == null) {
        index[key] = exams.length;
        var meta = metaById[key] || null;
        exams.push({
          id: key,
          label: question.examLabel || key,
          shortLabel: question.examShort || (meta && meta.shortLabel) || question.examLabel || key,
          level: question.examLevel || (meta && meta.level) || null,
          meta: meta,
          questions: []
        });
      }
      exams[index[key]].questions.push(question);
    });
    return exams;
  }

  /* ── Build the two sources ─────────────────────────────────────────── */

  var handoutQuestions = (globalThis.QUESTION_BANK || []).map(handoutRecord);

  var bookMeta = globalThis.EXAM_PREP_META || [];
  var bookMetaById = {};
  bookMeta.forEach(function (meta) { bookMetaById[meta.id] = meta; });

  var bookQuestions = [];
  (globalThis.EXAM_PREP_EXAMS || []).forEach(function (bank) {
    bookQuestions = bookQuestions.concat(bank || []);
  });

  var sources = [
    {
      id: HANDOUT_SOURCE_ID,
      label: "Instructor Handouts",
      exams: groupExams(handoutQuestions, {}),
      questions: handoutQuestions
    },
    {
      id: BOOK_SOURCE_ID,
      label: BOOK_SOURCE_LABEL,
      exams: groupExams(bookQuestions, bookMetaById),
      questions: bookQuestions
    }
  ];

  var allQuestions = handoutQuestions.concat(bookQuestions);

  var byId = {};
  allQuestions.forEach(function (question) {
    byId[question.id] = question;
  });

  /* ── Canonical keys and duplicate groups ───────────────────────────── */

  function baseEligible(question) {
    if (!question || question.eligibleForScoredTest !== true) return false;
    if (question.reviewStatus === "unresolved") return false;
    if (CHOICE_IDS.indexOf(question.correctChoiceId) === -1) return false;
    if (question.illustration && question.illustration.required && !question.illustration.asset) return false;
    return (question.choices || []).length === 4 && question.choices.every(function (choice) {
      return choice && typeof choice.text === "string" && choice.text.trim() !== "";
    });
  }

  var groupsByKey = {};
  allQuestions.forEach(function (question) {
    var key = canonicalKey(question);
    question.canonicalKey = key;
    if (!groupsByKey[key]) groupsByKey[key] = [];
    groupsByKey[key].push(question);
  });

  var duplicateGroups = [];
  Object.keys(groupsByKey).forEach(function (key) {
    var members = groupsByKey[key];
    if (members.length < 2) {
      members[0].duplicateGroupId = null;
      members[0].duplicateIds = [];
      members[0].duplicateConflict = false;
      return;
    }
    var groupId = "dup-" + (duplicateGroups.length + 1);
    var eligibleMembers = members.filter(baseEligible);
    var answers = {};
    eligibleMembers.forEach(function (member) { answers[member.correctChoiceId] = true; });
    var conflict = Object.keys(answers).length > 1;

    members.forEach(function (member) {
      member.duplicateGroupId = groupId;
      member.duplicateIds = members.filter(function (other) { return other !== member; })
        .map(function (other) { return other.id; });
      member.duplicateConflict = conflict;
      if (conflict && baseEligible(member)) {
        var others = eligibleMembers.filter(function (other) { return other !== member; }).map(function (other) {
          return other.id + " (answer " + other.correctChoiceId + ")";
        });
        member.eligibleForScoredTest = false;
        member.reviewStatus = "unresolved";
        member.issues = (member.issues || []).concat([{
          summary: "An identical question elsewhere in the catalog is keyed to a different answer letter.",
          excerpt: "This record: answer " + member.correctChoiceId + ". Duplicate(s): " + others.join("; ") + ".",
          correction: "Confirm the correct letter against the printed sources; until then neither copy is scored."
        }]);
        member.requiredCorrection = ((member.requiredCorrection || "") + " Resolve the conflicting duplicate answer.").trim();
      }
    });

    duplicateGroups.push({
      id: groupId,
      key: key,
      ids: members.map(function (member) { return member.id; }),
      sourceIds: unique(members.map(function (member) { return member.sourceId; })),
      examIds: unique(members.map(function (member) { return member.examId; })),
      answers: Object.keys(answers).sort(),
      conflict: conflict,
      question: members[0].question
    });
  });

  function unique(list) {
    var seen = {};
    return list.filter(function (item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }

  /* ── Book exam filters ─────────────────────────────────────────────── */

  var bookSource = sources[1];
  var bookExams = bookSource.exams;

  function bookFilterOptions() {
    var options = [
      { value: "all", label: "All book exams", kind: "group" },
      { value: "awareness", label: "Awareness only (I-1, I-2, I-3)", kind: "group" },
      { value: "operations", label: "Operations only (II-1, II-2, II-3)", kind: "group" }
    ];
    bookExams.forEach(function (exam) {
      options.push({ value: exam.id, label: exam.shortLabel, kind: "exam", level: exam.level });
    });
    return options;
  }

  function examIdsForBookFilter(filter) {
    var value = filter || "all";
    if (value === "all") return bookExams.map(function (exam) { return exam.id; });
    if (value === "awareness" || value === "operations") {
      return bookExams.filter(function (exam) { return exam.level === value; })
        .map(function (exam) { return exam.id; });
    }
    return bookExams.filter(function (exam) { return exam.id === value; })
      .map(function (exam) { return exam.id; });
  }

  function bookQuestionsForFilter(filter) {
    var wanted = {};
    examIdsForBookFilter(filter).forEach(function (id) { wanted[id] = true; });
    return bookQuestions.filter(function (question) { return wanted[question.examId]; });
  }

  function bookFilterLabel(filter) {
    var options = bookFilterOptions();
    for (var i = 0; i < options.length; i++) {
      if (options[i].value === (filter || "all")) return options[i].label;
    }
    return "All book exams";
  }

  function questionsForSources(sourceIds, options) {
    var wanted = {};
    (sourceIds || []).forEach(function (id) { wanted[id] = true; });
    var filter = options && options.bookFilter;
    var questions = [];
    sources.forEach(function (source) {
      if (!wanted[source.id]) return;
      questions = questions.concat(source.id === BOOK_SOURCE_ID ? bookQuestionsForFilter(filter) : source.questions);
    });
    return questions;
  }

  function poolsForSources(sourceIds, options) {
    var wanted = {};
    (sourceIds || []).forEach(function (id) { wanted[id] = true; });
    var filter = options && options.bookFilter;
    return sources.filter(function (source) {
      return wanted[source.id];
    }).map(function (source) {
      var isBook = source.id === BOOK_SOURCE_ID;
      return {
        sourceId: source.id,
        label: source.label,
        bookFilter: isBook ? (filter || "all") : null,
        questions: isBook ? bookQuestionsForFilter(filter) : source.questions
      };
    });
  }

  function sourceById(id) {
    for (var i = 0; i < sources.length; i++) {
      if (sources[i].id === id) return sources[i];
    }
    return null;
  }

  function bookExamById(id) {
    for (var i = 0; i < bookExams.length; i++) {
      if (bookExams[i].id === id) return bookExams[i];
    }
    return null;
  }

  /* ── Per-exam import reports ───────────────────────────────────────── */

  function examReport(exam) {
    var questions = exam.questions;
    var eligible = questions.filter(baseEligible);
    var keysMatched = questions.filter(function (q) {
      return q.answerKeyNumber === q.originalNumber && q.keyHeader;
    }).length;
    var withAnswer = questions.filter(function (q) {
      return CHOICE_IDS.indexOf(q.sourceAnswerLetter) !== -1;
    }).length;
    var seenKeys = {};
    var distinct = 0;
    eligible.forEach(function (q) {
      if (seenKeys[q.canonicalKey]) return;
      seenKeys[q.canonicalKey] = true;
      distinct += 1;
    });
    return {
      examId: exam.id,
      label: exam.label,
      shortLabel: exam.shortLabel,
      level: exam.level,
      expected: exam.meta && exam.meta.itemCount != null ? exam.meta.itemCount : null,
      imported: questions.length,
      keysMatched: keysMatched,
      keyAnswersReadable: withAnswer,
      eligible: eligible.length,
      distinctEligible: distinct,
      held: questions.filter(function (q) { return q.reviewStatus === "unresolved"; }).length,
      needsReview: questions.filter(function (q) { return q.reviewStatus === "needs_review"; }).length,
      missingIllustrations: questions.filter(function (q) {
        return q.illustration && q.illustration.required && !q.illustration.asset;
      }).length,
      citationIssues: questions.filter(function (q) {
        return (q.references || []).some(function (ref) { return ref && ref.incomplete; });
      }).length,
      duplicateGroups: duplicateGroups.filter(function (group) {
        return group.examIds.indexOf(exam.id) !== -1;
      }).length,
      duplicateConflicts: questions.filter(function (q) { return q.duplicateConflict; }).length
    };
  }

  function bookReport() {
    var exams = bookExams.map(examReport);
    var eligible = bookQuestions.filter(baseEligible);
    var seen = {};
    var distinct = 0;
    eligible.forEach(function (q) {
      if (seen[q.canonicalKey]) return;
      seen[q.canonicalKey] = true;
      distinct += 1;
    });
    return {
      exams: exams,
      imported: bookQuestions.length,
      eligible: eligible.length,
      distinctEligible: distinct,
      held: bookQuestions.filter(function (q) { return q.reviewStatus === "unresolved"; }).length,
      needsReview: bookQuestions.filter(function (q) { return q.reviewStatus === "needs_review"; }).length,
      duplicateGroups: duplicateGroups.filter(function (group) {
        return group.sourceIds.indexOf(BOOK_SOURCE_ID) !== -1;
      }).length
    };
  }

  globalThis.CONTENT_CATALOG = { sources: sources };
  globalThis.HazmatCatalog = {
    sources: sources,
    byId: byId,
    sourceById: sourceById,
    bookSourceId: BOOK_SOURCE_ID,
    handoutSourceId: HANDOUT_SOURCE_ID,
    bookExams: bookExams,
    bookExamById: bookExamById,
    bookFilterOptions: bookFilterOptions,
    bookFilterLabel: bookFilterLabel,
    examIdsForBookFilter: examIdsForBookFilter,
    bookQuestionsForFilter: bookQuestionsForFilter,
    questionsForSources: questionsForSources,
    poolsForSources: poolsForSources,
    duplicateGroups: duplicateGroups,
    canonicalKey: canonicalKey,
    normalizeText: normalizeText,
    examReport: examReport,
    bookReport: bookReport,
    handoutRecord: handoutRecord
  };
})();
