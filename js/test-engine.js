/**
 * test-engine.js — Practice-test selection, grading, and import checks.
 *
 * No DOM. Loaded as a classic script in the browser and from the Node tests.
 * Question banks stay in js/questions.js and the js/exam-prep-*.js files.
 */
(function () {
  "use strict";

  var CHOICE_IDS = ["A", "B", "C", "D"];

  function lcg(seed) {
    var s = seed == null ? Math.floor(Math.random() * 233280) : seed;
    return function () {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  }

  function shuffle(arr, rng) {
    var a = arr.slice();
    var random = rng || Math.random;
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(random() * (i + 1));
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }

  function choiceText(question, choiceId) {
    if (!question || !choiceId || !question.choices) return "";
    for (var i = 0; i < question.choices.length; i++) {
      if (question.choices[i].id === choiceId) return question.choices[i].text || "";
    }
    return "";
  }

  function hasCompleteChoices(question) {
    if (!question || !question.choices || question.choices.length !== 4) return false;
    for (var i = 0; i < CHOICE_IDS.length; i++) {
      var choice = question.choices[i];
      if (!choice || choice.id !== CHOICE_IDS[i]) return false;
      if (typeof choice.text !== "string" || choice.text.trim() === "") return false;
    }
    return true;
  }

  function isEligible(question) {
    if (!question || question.eligibleForScoredTest !== true) return false;
    if (question.reviewStatus === "unresolved") return false;
    if (!question.question || String(question.question).trim() === "") return false;
    if (CHOICE_IDS.indexOf(question.correctChoiceId) === -1) return false;
    if (question.illustration && question.illustration.required && !question.illustration.asset) return false;
    return hasCompleteChoices(question);
  }

  function eligibleQuestions(questions) {
    return (questions || []).filter(isEligible);
  }

  /**
   * Identity used for "the same question". Exact duplicates across exams
   * share a canonicalKey (set by catalog.js); records without one fall back
   * to their id.
   */
  function uniqueKey(question) {
    return question.canonicalKey || question.id;
  }

  function uniqueQuestions(questions) {
    var seen = {};
    var out = [];
    (questions || []).forEach(function (question) {
      if (!question) return;
      var key = uniqueKey(question);
      if (seen[key]) return;
      seen[key] = true;
      out.push(question);
    });
    return out;
  }

  function countEligible(pools) {
    var all = [];
    (pools || []).forEach(function (pool) {
      all = all.concat(eligibleQuestions(pool.questions));
    });
    return uniqueQuestions(all).length;
  }

  function sourceCounts(questions) {
    var counts = [];
    var index = {};
    (questions || []).forEach(function (question) {
      var key = question.sourceId || "unknown";
      if (index[key] == null) {
        index[key] = counts.length;
        counts.push({
          sourceId: key,
          label: question.sourceLabel || key,
          count: 0
        });
      }
      counts[index[key]].count += 1;
    });
    return counts;
  }

  function takeUnique(questions, want, takenKeys) {
    var picked = [];
    for (var i = 0; i < questions.length && picked.length < want; i++) {
      var question = questions[i];
      var key = uniqueKey(question);
      if (takenKeys[key]) continue;
      takenKeys[key] = true;
      picked.push(question);
    }
    return picked;
  }

  /**
   * Select `count` unique eligible questions.
   * One pool: random sample.
   * Several pools: as even a split as the pools allow, then fill from
   * whichever pools still have questions. Never duplicates or invents items.
   * Duplicate copies of a question (same canonicalKey) are kept in the pool
   * until shuffling so any copy can be the one shown, but only one is picked.
   */
  function generateTest(pools, count, rng) {
    var random = rng || Math.random;
    var cleanPools = (pools || []).map(function (pool) {
      return {
        sourceId: pool.sourceId,
        label: pool.label,
        questions: eligibleQuestions(pool.questions)
      };
    }).filter(function (pool) {
      return pool.questions.length > 0;
    });

    var available = countEligible(cleanPools);
    var requested = count;
    if (!requested || requested < 1 || requested > available) {
      return {
        ok: false,
        available: available,
        requested: requested,
        message: "Only " + available + " unique questions are available from these sources",
        questions: [],
        sourceCounts: []
      };
    }

    var takenIds = {};
    var selected = [];

    if (cleanPools.length <= 1) {
      var only = cleanPools.length === 1 ? cleanPools[0].questions : [];
      selected = takeUnique(shuffle(only, random), requested, takenIds);
    } else {
      var shuffledPools = cleanPools.map(function (pool) {
        return {
          sourceId: pool.sourceId,
          label: pool.label,
          questions: shuffle(pool.questions, random)
        };
      });
      var base = Math.floor(requested / shuffledPools.length);
      var extra = requested % shuffledPools.length;
      var shortfall = 0;

      shuffledPools.forEach(function (pool, poolIndex) {
        var want = base + (poolIndex < extra ? 1 : 0);
        var picked = takeUnique(pool.questions, want, takenIds);
        selected = selected.concat(picked);
        if (picked.length < want) shortfall += want - picked.length;
      });

      if (shortfall > 0) {
        var remainder = [];
        shuffledPools.forEach(function (pool) {
          pool.questions.forEach(function (question) {
            if (!takenIds[uniqueKey(question)]) remainder.push(question);
          });
        });
        selected = selected.concat(takeUnique(shuffle(remainder, random), shortfall, takenIds));
      }

      selected = shuffle(selected, random);
    }

    if (selected.length !== requested || uniqueQuestions(selected).length !== requested) {
      return {
        ok: false,
        available: available,
        requested: requested,
        message: "Only " + available + " unique questions are available from these sources",
        questions: [],
        sourceCounts: []
      };
    }

    return {
      ok: true,
      available: available,
      requested: requested,
      message: "",
      questions: selected,
      sourceCounts: sourceCounts(selected)
    };
  }

  function gradeQuestion(question, choiceId) {
    if (!isEligible(question)) {
      return { graded: false, correct: false, status: "excluded" };
    }
    if (choiceId == null || choiceId === "") {
      return { graded: true, correct: false, status: "unanswered" };
    }
    var correct = choiceId === question.correctChoiceId;
    return { graded: true, correct: correct, status: correct ? "correct" : "incorrect" };
  }

  function gradeTest(questions, answers) {
    var list = questions || [];
    var given = answers || {};
    var correct = 0;
    var unanswered = 0;
    var results = list.map(function (question) {
      var result = gradeQuestion(question, given[question.id]);
      if (result.status === "unanswered") unanswered += 1;
      if (result.correct) correct += 1;
      return {
        id: question.id,
        status: result.status,
        correct: result.correct,
        selectedChoiceId: given[question.id] == null || given[question.id] === "" ? null : given[question.id],
        correctChoiceId: question.correctChoiceId
      };
    });
    var total = list.length;
    return {
      correct: correct,
      incorrect: total - correct,
      unanswered: unanswered,
      total: total,
      percentage: total === 0 ? 0 : Math.round((correct / total) * 100),
      results: results
    };
  }

  function missedQuestions(questions, answers) {
    return (questions || []).filter(function (question) {
      return gradeQuestion(question, (answers || {})[question.id]).correct !== true;
    });
  }

  function filterQuestions(questions, answers, flags, filter) {
    var given = answers || {};
    var marks = flags || {};
    return (questions || []).filter(function (question) {
      var status = gradeQuestion(question, given[question.id]).status;
      var marked = !!(marks.markedForReview && marks.markedForReview[question.id]);
      var guessed = !!(marks.guessed && marks.guessed[question.id]);
      if (filter === "missed") return status === "incorrect" || status === "unanswered";
      if (filter === "unanswered") return status === "unanswered";
      if (filter === "flagged") return marked || guessed;
      return true;
    });
  }

  function serializeSession(session) {
    return {
      questionIds: (session.questions || []).map(function (question) { return question.id; }),
      answers: session.answers || {},
      markedForReview: session.markedForReview || {},
      guessed: session.guessed || {},
      revealed: session.revealed || {},
      index: session.index || 0,
      mode: session.mode || "exam",
      sourceIds: session.sourceIds || [],
      bookFilter: session.bookFilter || "all",
      requestedCount: session.requestedCount,
      inProgress: !!session.inProgress,
      submitted: !!session.submitted
    };
  }

  function restoreSession(data, byId) {
    if (!data || !data.questionIds) return null;
    var questions = [];
    data.questionIds.forEach(function (id) {
      var question = byId[id];
      if (question) questions.push(question);
    });
    return {
      questions: questions,
      answers: data.answers || {},
      markedForReview: data.markedForReview || {},
      guessed: data.guessed || {},
      revealed: data.revealed || {},
      index: data.index || 0,
      mode: data.mode || "exam",
      sourceIds: data.sourceIds || [],
      bookFilter: data.bookFilter || "all",
      requestedCount: data.requestedCount,
      inProgress: !!data.inProgress,
      submitted: !!data.submitted
    };
  }

  function duplicateIds(records) {
    var seen = {};
    var dupes = [];
    (records || []).forEach(function (record) {
      if (seen[record.id]) dupes.push(record.id);
      seen[record.id] = true;
    });
    return dupes;
  }

  var TestEngine = {
    CHOICE_IDS: CHOICE_IDS,
    lcg: lcg,
    shuffle: shuffle,
    choiceText: choiceText,
    hasCompleteChoices: hasCompleteChoices,
    isEligible: isEligible,
    eligibleQuestions: eligibleQuestions,
    uniqueKey: uniqueKey,
    uniqueQuestions: uniqueQuestions,
    countEligible: countEligible,
    sourceCounts: sourceCounts,
    generateTest: generateTest,
    gradeQuestion: gradeQuestion,
    gradeTest: gradeTest,
    missedQuestions: missedQuestions,
    filterQuestions: filterQuestions,
    serializeSession: serializeSession,
    restoreSession: restoreSession,
    duplicateIds: duplicateIds
  };

  globalThis.TestEngine = TestEngine;
})();
