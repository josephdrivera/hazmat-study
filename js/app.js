/* ═══════════════════════════════════════════════════════
   app.js — HazMat Awareness / Operational Study Portal
   ═══════════════════════════════════════════════════════
   Sections:
     1. State & Constants
     2. Utility helpers
     3. View management
     4. Study Mode
     5. Practice Exam Mode
     6. Results
     7. Missed-question review
     8. localStorage persistence
     9. Keyboard shortcuts
    10. Modal system
    11. Initialization
   ═══════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ─── 1. STATE & CONSTANTS ──────────────────────── */

  var STORAGE_KEY = "hazmat-study-v1";

  var state = {
    activeTab: "handouts",
    studyBank: "handout",

    // Study Mode
    studyFiltered: [],
    studyIndex: 0,
    studyAnswers: {},
    studyFilterLevel: "all",
    studyFilterQuiz: "all",
    studyFilterExam: "all",
    studyShuffled: false,
    studySeed: null,

    // Practice test
    examQuestions: [],
    examAnswers: {},
    examIndex: 0,
    examInProgress: false,
    examSubmitted: false,
    examMode: "exam",
    examMarked: {},
    examGuessed: {},
    examRevealed: {},
    examSourceIds: [],
    examBookFilter: "all",
    examRequestedCount: 0,
    examSourceCounts: [],

    // Review
    missedQuestions: [],
    missedIndex: 0,
    missedSource: "",
    reviewFilter: "all"
  };

  /* ─── 2. UTILITY HELPERS ────────────────────────── */

  function $(id) { return document.getElementById(id); }

  function choiceEntries(q) {
    if (!q || !q.choices) return [];
    if (Array.isArray(q.choices)) return q.choices;
    return ["A", "B", "C", "D"].map(function (id) {
      return { id: id, text: q.choices[id] || "" };
    });
  }

  function correctChoice(q) {
    if (!q) return null;
    return q.correctChoiceId || q.correctAnswer || null;
  }

  function questionLabel(q) {
    if (q.quiz) return "Quiz #" + q.quiz + " — " + q.quizTitle;
    return q.examLabel || q.sourceLabel || "Question";
  }

  function levelText(q) {
    if (!q) return "";
    if (q.level) return q.level;
    var parts = [];
    if (q.examLevel) parts.push(q.examLevel.charAt(0).toUpperCase() + q.examLevel.slice(1));
    if (q.topic) parts.push(q.topic);
    return parts.join(" · ");
  }

  function examKicker(q) {
    var parts = [q.sourceLabel || ""];
    if (q.examShort) parts.push(q.examShort);
    parts.push("Original #" + q.originalNumber);
    return parts.filter(Boolean).join(" · ");
  }

  function renderStatements(el, q) {
    var statements = (q && q.statements) || [];
    var visible = statements.filter(function (statement) {
      return statement && statement.text;
    });
    if (!visible.length) {
      el.hidden = true;
      el.innerHTML = "";
      return;
    }
    el.hidden = false;
    el.innerHTML = visible.map(function (statement) {
      return "<li>" + escapeHtml(statement.text) + "</li>";
    }).join("");
  }

  function referenceHtml(q) {
    var lines = (q.references || []).filter(function (ref) { return ref && ref.text; });
    var html = "<p class=\"answer-note\">Source-provided answer. It has not been independently verified.</p>";
    if (!lines.length) return html;
    html += "<ul>";
    lines.forEach(function (ref) {
      html += "<li>" + escapeHtml(ref.text);
      if (ref.incomplete) html += " <span class=\"ref-flag\">Part of this citation could not be read.</span>";
      html += "</li>";
    });
    html += "</ul>";
    return html;
  }

  function bookQuestions() {
    var source = HazmatCatalog.sourceById("hazardous-materials-exam-prep");
    return source ? source.questions : [];
  }

  function filterQuestions() {
    if (state.studyBank === "exam-prep") {
      var scoped = HazmatCatalog.bookQuestionsForFilter(state.studyFilterExam);
      var eligible = TestEngine.uniqueQuestions(TestEngine.eligibleQuestions(scoped));
      if (state.studyShuffled) return shuffleArray(eligible, state.studySeed);
      return eligible;
    }
    var list = QUESTION_BANK.slice();
    if (state.studyFilterQuiz !== "all") {
      var q = parseInt(state.studyFilterQuiz);
      list = list.filter(function (item) { return item.quiz === q; });
    }
    if (state.studyFilterLevel !== "all") {
      var lev = state.studyFilterLevel;
      list = list.filter(function (item) {
        return item.level.indexOf(lev) !== -1;
      });
    }
    if (state.studyShuffled) {
      list = shuffleArray(list, state.studySeed);
    }
    return list;
  }

  function shuffleArray(arr, seed) {
    var a = arr.slice();
    var s = seed || Math.random();
    // Simple seeded shuffle (Fisher-Yates with LCG)
    function rand() {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    }
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }

  function getBand(pct) {
    if (pct < 70) return { label: "Below passing range", cls: "below" };
    if (pct < 80) return { label: "Passing range", cls: "passing" };
    if (pct < 90) return { label: "Target range", cls: "target" };
    return { label: "Strong range", cls: "strong" };
  }

  function getResultBand(pct) {
    if (pct < 70) return { label: "NOT PASSING YET", cls: "below" };
    if (pct < 80) return { label: "PASSING RANGE", cls: "passing" };
    if (pct < 90) return { label: "TARGET MET", cls: "target" };
    return { label: "STRONG PERFORMANCE", cls: "strong" };
  }

  /* ─── 3. VIEW MANAGEMENT ────────────────────────── */

  var views = ["view-home", "view-study", "view-exam", "view-results", "view-missed", "view-review"];

  function showView(id) {
    views.forEach(function (v) {
      var el = $(v);
      if (el) el.classList.toggle("active", v === id);
    });
    window.scrollTo(0, 0);
  }

  /* ─── 4. STUDY MODE ─────────────────────────────── */

  function enterStudy(quizFilter) {
    state.studyBank = "handout";
    state.activeTab = "handouts";
    state.studyFilterQuiz = quizFilter || state.studyFilterQuiz || "all";
    $("filter-quiz").hidden = false;
    $("filter-level").hidden = false;
    $("filter-exam").hidden = true;
    $("filter-quiz").value = state.studyFilterQuiz;
    $("filter-level").value = state.studyFilterLevel;
    $("filter-shuffle").checked = state.studyShuffled;
    rebuildStudyList();
    showView("view-study");
  }

  function enterExamPrepStudy(examFilter) {
    var filter = typeof examFilter === "string" ? examFilter : (state.studyFilterExam || "all");
    if (state.studyBank !== "exam-prep" || filter !== state.studyFilterExam) state.studyIndex = 0;
    state.studyBank = "exam-prep";
    state.studyFilterExam = filter;
    state.activeTab = "exam-prep";
    $("filter-quiz").hidden = true;
    $("filter-level").hidden = true;
    $("filter-exam").hidden = false;
    $("filter-exam").value = filter;
    if ($("filter-exam").value !== filter) {
      $("filter-exam").value = "all";
      state.studyFilterExam = "all";
    }
    $("filter-shuffle").checked = state.studyShuffled;
    rebuildStudyList();
    saveState();
    showView("view-study");
  }

  function rebuildStudyList() {
    state.studyFiltered = filterQuestions();
    if (state.studyFiltered.length === 0) {
      state.studyIndex = 0;
    } else if (state.studyIndex >= state.studyFiltered.length) {
      state.studyIndex = 0;
    }
    renderStudyQuestion();
    renderStudyProgress();
  }

  function renderStudyQuestion() {
    var list = state.studyFiltered;
    if (list.length === 0) {
      $("study-header").textContent = "";
      $("study-question").textContent = "No questions match the current filters.";
      $("study-choices").innerHTML = "";
      $("study-feedback").innerHTML = "";
      $("study-meta").innerHTML = "";
      $("study-statements").hidden = true;
      $("study-statements").innerHTML = "";
      $("study-level-tag").textContent = "";
      $("study-level-tag").className = "question-level-tag";
      return;
    }

    var q = list[state.studyIndex];
    var correct = correctChoice(q);
    $("study-header").textContent = questionLabel(q) + "\u2003\u2003Question " + (state.studyIndex + 1) + " of " + list.length;
    $("study-question").textContent = q.question;
    renderStatements($("study-statements"), q);
    renderLevelTag($("study-level-tag"), levelText(q));

    var answered = state.studyAnswers[q.id];
    var isAnswered = answered !== undefined;

    var html = "";
    choiceEntries(q).forEach(function (choice) {
      var cls = "choice";
      if (isAnswered) {
        cls += " choice--locked";
        if (choice.id === correct) cls += " choice--correct";
        else if (choice.id === answered && answered !== correct) cls += " choice--incorrect";
      }
      html += '<div class="' + cls + '" data-letter="' + choice.id + '" role="button" tabindex="0">';
      html += '<span class="choice-letter">' + choice.id + '.</span>';
      html += '<span class="choice-text">' + escapeHtml(choice.text) + '</span>';
      html += '</div>';
    });
    $("study-choices").innerHTML = html;

    var fb = $("study-feedback");
    if (isAnswered) {
      if (answered === correct) {
        fb.textContent = "Correct";
        fb.className = "feedback feedback--correct";
      } else {
        fb.textContent = "Incorrect \u2014 Source answer: " + correct;
        fb.className = "feedback feedback--incorrect";
      }
    } else {
      fb.textContent = "";
      fb.className = "feedback";
    }

    if (q.level) {
      $("study-meta").innerHTML =
        '<span>Level: ' + escapeHtml(q.level) + '</span>' +
        '<span>Objective: ' + escapeHtml(q.objective || "") + '</span>';
    } else if (isAnswered) {
      $("study-meta").innerHTML = referenceHtml(q);
    } else {
      $("study-meta").innerHTML = "<span>" + escapeHtml((q.examShort ? q.examShort + " · " : "") +
        "Original question " + q.originalNumber) + "</span>";
    }

    // Nav state
    $("study-prev").disabled = state.studyIndex === 0;
    $("study-next").disabled = state.studyIndex >= list.length - 1;
  }

  function renderStudyProgress() {
    var list = state.studyFiltered;
    var answered = 0;
    var correct = 0;
    list.forEach(function (q) {
      if (state.studyAnswers[q.id] !== undefined) {
        answered++;
        if (state.studyAnswers[q.id] === correctChoice(q)) correct++;
      }
    });

    var pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    var band = answered > 0 ? getBand(pct) : null;

    var parts = [];
    parts.push(answered + " / " + list.length + " answered");
    if (answered > 0) {
      parts.push(correct + " correct");
      parts.push(pct + "%");
    }

    var html = parts.join('<span style="color:var(--border);">\u2003\u00b7\u2003</span>');
    if (band) {
      html += '<span style="color:var(--border);">\u2003\u00b7\u2003</span>';
      html += '<span class="band band--' + band.cls + '">' + band.label + '</span>';
    }
    $("study-progress").innerHTML = html;
  }

  function studySelectAnswer(letter) {
    var list = state.studyFiltered;
    if (list.length === 0) return;
    var q = list[state.studyIndex];
    if (state.studyAnswers[q.id] !== undefined) return; // already answered
    state.studyAnswers[q.id] = letter;
    renderStudyQuestion();
    renderStudyProgress();
    saveState();
  }

  function studyNextUnanswered() {
    var list = state.studyFiltered;
    for (var i = 0; i < list.length; i++) {
      var idx = (state.studyIndex + 1 + i) % list.length;
      if (state.studyAnswers[list[idx].id] === undefined) {
        state.studyIndex = idx;
        renderStudyQuestion();
        return;
      }
    }
  }

  function studyGetMissed() {
    return state.studyFiltered.filter(function (q) {
      var a = state.studyAnswers[q.id];
      return a !== undefined && a !== correctChoice(q);
    });
  }

  /* ─── 5. PRACTICE TESTS ─────────────────────────── */

  function selectedSourceIds() {
    var selected = document.querySelector('input[name="test-source"]:checked');
    var value = selected ? selected.value : "instructor-handouts";
    if (value === "both") {
      return ["instructor-handouts", "hazardous-materials-exam-prep"];
    }
    return [value];
  }

  function selectedTestMode() {
    var selected = document.querySelector('input[name="test-mode"]:checked');
    return selected ? selected.value : "practice";
  }

  function bookSelected(ids) {
    return (ids || selectedSourceIds()).indexOf(HazmatCatalog.bookSourceId) !== -1;
  }

  function selectedBookFilter() {
    var select = $("test-book-filter");
    var value = select && select.value ? select.value : "all";
    state.examBookFilter = value;
    return value;
  }

  function poolOptions() {
    return { bookFilter: selectedBookFilter() };
  }

  function currentPools() {
    return HazmatCatalog.poolsForSources(selectedSourceIds(), poolOptions());
  }

  function setBookFilterValue(value) {
    var select = $("test-book-filter");
    if (!select) return;
    select.value = value || "all";
    if (select.value !== (value || "all")) select.value = "all";
    state.examBookFilter = select.value;
  }

  function fillBookFilterSelect(select) {
    if (!select) return;
    select.replaceChildren();
    HazmatCatalog.bookFilterOptions().forEach(function (entry) {
      var option = document.createElement("option");
      option.value = entry.value;
      option.textContent = entry.label;
      select.appendChild(option);
    });
  }

  function examAnsweredCount() {
    var n = 0;
    state.examQuestions.forEach(function (q) {
      if (state.examAnswers[q.id] !== undefined && state.examAnswers[q.id] !== "") n++;
    });
    return n;
  }

  function sourceCountText(counts) {
    return (counts || []).map(function (entry) {
      return entry.label + " " + entry.count;
    }).join(" · ");
  }

  function updateResumeButton() {
    var btn = $("btn-resume");
    if (!btn) return;
    if (state.examQuestions.length > 0 && (state.examInProgress || state.examSubmitted)) {
      btn.hidden = false;
      btn.textContent = state.examInProgress
        ? "Resume " + state.examQuestions.length + "-question test"
        : "Review last " + state.examQuestions.length + "-question test";
    } else {
      btn.hidden = true;
    }
  }

  function refreshEligibility() {
    var ids = selectedSourceIds();
    $("book-filter-row").hidden = !bookSelected(ids);
    var pools = HazmatCatalog.poolsForSources(ids, poolOptions());
    var available = TestEngine.countEligible(pools);
    var parts = pools.map(function (pool) {
      var eligible = TestEngine.eligibleQuestions(pool.questions);
      var distinct = TestEngine.uniqueQuestions(eligible).length;
      var label = pool.label;
      if (pool.sourceId === HazmatCatalog.bookSourceId && pool.bookFilter && pool.bookFilter !== "all") {
        label += " — " + HazmatCatalog.bookFilterLabel(pool.bookFilter);
      }
      var count = String(distinct);
      if (distinct !== eligible.length) count += " distinct of " + eligible.length + " eligible records";
      return label + ": " + count;
    });
    var text = "Eligible: " + available + " unique question" + (available === 1 ? "" : "s");
    if (parts.length) text += " (" + parts.join("; ") + ")";
    $("eligible-count").textContent = text;
    $("test-limit-message").hidden = true;
    $("btn-generate-all").hidden = true;
  }

  function showLimit(available) {
    $("test-limit-message").hidden = false;
    $("test-limit-message").textContent = "Only " + available + " unique questions are available from these sources";
    var allBtn = $("btn-generate-all");
    if (available > 0) {
      allBtn.hidden = false;
      allBtn.textContent = "Generate all " + available + " available questions";
    } else {
      allBtn.hidden = true;
    }
  }

  function requestExam(count) {
    var pools = currentPools();
    var available = TestEngine.countEligible(pools);
    if (count > available) {
      showLimit(available);
      return;
    }
    $("test-limit-message").hidden = true;
    $("btn-generate-all").hidden = true;
    if (state.examInProgress) {
      showModal(
        "Start a new " + count + "-question test? The test in progress will be replaced.",
        [
          { label: "Keep current test", cls: "btn--nav", action: hideModal },
          { label: "Start new test", cls: "btn--primary", action: function () {
            hideModal();
            startGeneratedTest(count);
          }}
        ]
      );
      return;
    }
    startGeneratedTest(count);
  }

  function startGeneratedTest(count) {
    var ids = selectedSourceIds();
    var bookFilter = selectedBookFilter();
    var pools = HazmatCatalog.poolsForSources(ids, { bookFilter: bookFilter });
    var result = TestEngine.generateTest(pools, count);
    if (!result.ok) {
      showLimit(result.available);
      return;
    }
    beginTest(result.questions, {
      mode: selectedTestMode(),
      sourceIds: ids,
      bookFilter: bookFilter,
      requestedCount: count,
      sourceCounts: result.sourceCounts
    });
  }

  function beginTest(questions, options) {
    state.examQuestions = questions.slice();
    state.examAnswers = {};
    state.examMarked = {};
    state.examGuessed = {};
    state.examRevealed = {};
    state.examIndex = 0;
    state.examInProgress = true;
    state.examSubmitted = false;
    state.examMode = options.mode || "exam";
    state.examSourceIds = options.sourceIds || [];
    state.examBookFilter = options.bookFilter || "all";
    state.examRequestedCount = options.requestedCount || questions.length;
    state.examSourceCounts = options.sourceCounts || TestEngine.sourceCounts(questions);
    saveState();
    updateResumeButton();
    showView("view-exam");
    renderExamQuestion();
    renderExamNavigator();
  }

  function resumeExam() {
    if (state.examQuestions.length === 0) return;
    if (state.examSubmitted) {
      showResults();
      return;
    }
    if (!state.examInProgress) return;
    showView("view-exam");
    renderExamQuestion();
    renderExamNavigator();
  }

  var renderingChoices = false;
  var choiceFromKeyboard = false;
  var choicePointer = { down: false, moved: false, x: 0, y: 0 };
  var lastTypingAt = 0;

  function renderExamChoices(q) {
    var selected = state.examAnswers[q.id];
    var revealed = state.examMode === "practice" && !!state.examRevealed[q.id];
    var correct = correctChoice(q);
    var html = '<fieldset class="choices" autocomplete="off"><legend class="sr-only">Answer choices</legend>';
    choiceEntries(q).forEach(function (choice) {
      var cls = "choice";
      if (revealed) {
        cls += " choice--locked";
        if (choice.id === correct) cls += " choice--correct";
        else if (choice.id === selected && selected !== correct) cls += " choice--incorrect";
      } else if (choice.id === selected) {
        cls += " choice--selected";
      }
      html += '<label class="' + cls + '">';
      html += '<input type="radio" name="exam-choice-' + q.id + '" data-qid="' + q.id + '" value="' + choice.id + '"' +
        (choice.id === selected ? " checked" : "") +
        (revealed ? " disabled" : "") + ">";
      html += '<span class="choice-letter">' + choice.id + ".</span>";
      html += '<span class="choice-text">' + escapeHtml(choice.text) + "</span>";
      html += "</label>";
    });
    html += "</fieldset>";
    renderingChoices = true;
    choicePointer.down = false;
    choicePointer.moved = false;
    choiceFromKeyboard = false;
    $("exam-choices").innerHTML = html;
    setTimeout(function () {
      syncExamRadios();
      renderingChoices = false;
    }, 0);
  }

  function syncExamRadios() {
    var q = state.examQuestions[state.examIndex];
    if (!q) return;
    var selected = state.examAnswers[q.id];
    $("exam-choices").querySelectorAll("input[type='radio']").forEach(function (input) {
      var on = input.value === selected;
      input.checked = !!on;
      var label = input.closest(".choice");
      if (label && !label.classList.contains("choice--correct") && !label.classList.contains("choice--incorrect")) {
        label.classList.toggle("choice--selected", on);
      }
    });
  }

  function blurExamChoices() {
    var active = document.activeElement;
    if (active && active.closest && active.closest("#exam-choices")) active.blur();
  }

  function renderExamQuestion() {
    var list = state.examQuestions;
    if (list.length === 0) return;
    var q = list[state.examIndex];
    var modeLabel = state.examMode === "practice" ? "Practice" : "Exam";
    var counts = sourceCountText(state.examSourceCounts);
    $("exam-header").textContent = list.length + " questions · " + modeLabel + (counts ? " · " + counts : "");
    $("exam-kicker").textContent = examKicker(q);
    $("exam-question").textContent = q.question;
    renderStatements($("exam-statements"), q);
    renderLevelTag($("exam-level-tag"), levelText(q));
    renderExamChoices(q);

    var answeredCount = examAnsweredCount();
    $("exam-progress-text").textContent = "Question " + (state.examIndex + 1) + " of " + list.length +
      " · " + answeredCount + " of " + list.length + " answered";
    $("exam-progress-fill").style.width = (answeredCount / list.length * 100) + "%";

    $("exam-mark").checked = !!state.examMarked[q.id];
    $("exam-guess").checked = !!state.examGuessed[q.id];

    var revealed = state.examMode === "practice" && !!state.examRevealed[q.id];
    var checkBtn = $("exam-check");
    checkBtn.hidden = state.examMode !== "practice" || revealed;
    checkBtn.disabled = state.examAnswers[q.id] == null;

    var fb = $("exam-feedback");
    var refs = $("exam-references");
    if (revealed) {
      var grade = TestEngine.gradeQuestion(q, state.examAnswers[q.id]);
      if (grade.correct) {
        fb.textContent = "Correct";
        fb.className = "feedback feedback--correct";
      } else {
        fb.textContent = "Incorrect — Source answer: " + correctChoice(q);
        fb.className = "feedback feedback--incorrect";
      }
      refs.innerHTML = referenceHtml(q);
    } else {
      fb.textContent = "";
      fb.className = "feedback";
      refs.innerHTML = "";
    }

    $("exam-prev").disabled = state.examIndex === 0;
    $("exam-next").disabled = state.examIndex >= list.length - 1;
  }

  function renderExamNavigator() {
    var html = "";
    for (var i = 0; i < state.examQuestions.length; i++) {
      var q = state.examQuestions[i];
      var cls = "nav-dot";
      if (i === state.examIndex) cls += " nav-dot--current";
      else if (state.examAnswers[q.id] !== undefined) cls += " nav-dot--answered";
      if (state.examMarked[q.id]) cls += " nav-dot--marked";
      if (state.examGuessed[q.id]) cls += " nav-dot--guessed";
      html += '<button type="button" class="' + cls + '" data-idx="' + i + '">' + (i + 1) + "</button>";
    }
    $("exam-navigator").innerHTML = html;
  }

  function examSelectAnswer(letter) {
    var q = state.examQuestions[state.examIndex];
    if (!q || state.examRevealed[q.id]) return;
    state.examAnswers[q.id] = letter;
    renderingChoices = true;
    $("exam-choices").querySelectorAll("input[type='radio']").forEach(function (input) {
      input.checked = input.value === letter;
      var label = input.closest(".choice");
      if (label) label.classList.toggle("choice--selected", input.value === letter);
    });
    renderingChoices = false;
    $("exam-check").disabled = false;
    var answeredCount = examAnsweredCount();
    $("exam-progress-text").textContent = "Question " + (state.examIndex + 1) + " of " + state.examQuestions.length +
      " · " + answeredCount + " of " + state.examQuestions.length + " answered";
    $("exam-progress-fill").style.width = (answeredCount / state.examQuestions.length * 100) + "%";
    renderExamNavigator();
    saveState();
  }

  function checkPracticeAnswer() {
    var q = state.examQuestions[state.examIndex];
    if (!q || state.examMode !== "practice") return;
    if (state.examAnswers[q.id] == null) return;
    state.examRevealed[q.id] = true;
    renderExamQuestion();
    saveState();
  }

  function submitExam() {
    var total = state.examQuestions.length;
    var unanswered = total - examAnsweredCount();
    if (unanswered > 0) {
      showModal(
        "You still have " + unanswered + " unanswered question" + (unanswered > 1 ? "s" : "") + ". Unanswered questions are counted as incorrect.",
        [
          { label: "Return to test", cls: "btn--nav", action: hideModal },
          { label: "Submit anyway", cls: "btn--primary", action: finalizeExam }
        ]
      );
    } else {
      finalizeExam();
    }
  }

  function finalizeExam() {
    hideModal();
    state.examInProgress = false;
    state.examSubmitted = true;
    updateResumeButton();
    saveState();
    showResults();
  }

  function currentGrade() {
    return TestEngine.gradeTest(state.examQuestions, state.examAnswers);
  }

  /* ─── 6. RESULTS ────────────────────────────────── */

  function showResults() {
    var grade = currentGrade();
    var band = getResultBand(grade.percentage);
    $("results-score").textContent = grade.percentage + "%";
    $("results-counts").innerHTML =
      grade.correct + " correct of " + grade.total + "<br>" +
      grade.incorrect + " incorrect<br>" +
      grade.unanswered + " unanswered, counted as incorrect";
    var bandEl = $("results-band");
    bandEl.textContent = band.label;
    bandEl.className = "results-band results-band--" + band.cls;
    $("results-retry-missed").hidden = grade.correct === grade.total;
    showView("view-results");
  }

  function retryMissed() {
    var missed = TestEngine.missedQuestions(state.examQuestions, state.examAnswers);
    if (!missed.length) return;
    beginTest(missed, {
      mode: state.examMode,
      sourceIds: state.examSourceIds,
      bookFilter: state.examBookFilter,
      requestedCount: missed.length,
      sourceCounts: TestEngine.sourceCounts(missed)
    });
  }

  function retakeTest() {
    state.examAnswers = {};
    state.examMarked = {};
    state.examGuessed = {};
    state.examRevealed = {};
    state.examIndex = 0;
    state.examInProgress = true;
    state.examSubmitted = false;
    saveState();
    updateResumeButton();
    resumeExam();
  }

  function generateAnother() {
    var count = state.examRequestedCount || state.examQuestions.length;
    state.activeTab = "tests";
    selectTab("tests");
    showView("view-home");
    if (state.examSourceIds.length === 1) {
      var radio = document.querySelector('input[name="test-source"][value="' + state.examSourceIds[0] + '"]');
      if (radio && !radio.disabled) radio.checked = true;
    } else if (state.examSourceIds.length > 1) {
      var both = document.querySelector('input[name="test-source"][value="both"]');
      if (both && !both.disabled) both.checked = true;
    }
    var modeRadio = document.querySelector('input[name="test-mode"][value="' + state.examMode + '"]');
    if (modeRadio) modeRadio.checked = true;
    setBookFilterValue(state.examBookFilter);
    refreshEligibility();
    requestExam(count);
  }

  /* ─── 7. REVIEW ─────────────────────────────────── */

  function practiceFlags() {
    return { markedForReview: state.examMarked, guessed: state.examGuessed };
  }

  function enterMissedReview(source) {
    state.missedSource = source === "study" ? "study" : "practice";
    state.reviewFilter = source === "study" ? "missed" : "all";
    rebuildReviewList();
    if (state.missedQuestions.length === 0 && state.missedSource === "study") return;
    state.missedIndex = 0;
    showView("view-missed");
    renderMissedQuestion();
  }

  function rebuildReviewList() {
    if (state.missedSource === "study") {
      state.missedQuestions = studyGetMissed();
      $("review-filters").hidden = true;
      return;
    }
    $("review-filters").hidden = false;
    state.missedQuestions = TestEngine.filterQuestions(
      state.examQuestions,
      state.examAnswers,
      practiceFlags(),
      state.reviewFilter
    );
    document.querySelectorAll("#review-filters [data-filter]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-filter") === state.reviewFilter);
    });
  }

  function renderMissedQuestion() {
    var list = state.missedQuestions;
    $("missed-statements").hidden = true;
    $("missed-references").innerHTML = "";
    if (list.length === 0) {
      $("missed-counter").textContent = "No questions in this filter";
      $("missed-header").textContent = "";
      $("missed-question").textContent = "Nothing matches this filter.";
      $("missed-choices").innerHTML = "";
      $("missed-meta").innerHTML = "";
      $("missed-level-tag").textContent = "";
      $("missed-prev").disabled = true;
      $("missed-next").disabled = true;
      return;
    }
    var q = list[state.missedIndex];
    var correct = correctChoice(q);
    var fromStudy = state.missedSource === "study";
    var userAnswer = fromStudy ? state.studyAnswers[q.id] : state.examAnswers[q.id];

    $("missed-counter").textContent = (fromStudy ? "Missed question " : "Question ") +
      (state.missedIndex + 1) + " of " + list.length;
    $("missed-header").textContent = questionLabel(q) + "\u2003\u2003Original #" + q.originalNumber;
    $("missed-question").textContent = q.question;
    renderStatements($("missed-statements"), q);
    renderLevelTag($("missed-level-tag"), levelText(q));

    var html = "";
    choiceEntries(q).forEach(function (choice) {
      var cls = "choice choice--locked";
      if (choice.id === correct) cls += " choice--correct";
      if (choice.id === userAnswer && userAnswer !== correct) cls += " choice--incorrect";
      html += '<div class="' + cls + '">';
      html += '<span class="choice-letter">' + choice.id + ".</span>";
      html += '<span class="choice-text">' + escapeHtml(choice.text) + "</span>";
      html += "</div>";
    });
    html += '<div class="missed-answer-row">';
    html += '<span class="missed-your-answer">Your answer: ' + (userAnswer || "\u2014") + "</span>";
    html += '<span class="missed-correct-answer">Source answer: ' + (correct || "\u2014") + "</span>";
    html += "</div>";
    $("missed-choices").innerHTML = html;

    if (fromStudy) {
      $("missed-meta").innerHTML =
        "<span>Level: " + escapeHtml(q.level || "") + "</span>" +
        "<span>Objective: " + escapeHtml(q.objective || "") + "</span>";
    } else {
      var flags = [];
      if (state.examMarked[q.id]) flags.push("Marked for review");
      if (state.examGuessed[q.id]) flags.push("Marked as guessed");
      $("missed-references").innerHTML = referenceHtml(q);
      $("missed-meta").innerHTML = flags.length ? "<span>" + flags.join(" · ") + "</span>" : "";
    }

    $("missed-prev").disabled = state.missedIndex === 0;
    $("missed-next").disabled = state.missedIndex >= list.length - 1;
  }

  function reviewCardHtml(q) {
    var excluded = q.reviewStatus === "unresolved" || !q.eligibleForScoredTest;
    var html = '<article class="review-card">';
    html += "<h3>Question " + q.originalNumber;
    html += excluded
      ? ' <span class="status-pill">Excluded from scored tests</span>'
      : ' <span class="status-pill status-pill--flag">Flagged, still in tests</span>';
    html += "</h3>";
    html += '<p class="source-note">Key: ' + escapeHtml(q.keyHeader || "") + "</p>";
    if (q.sourceAnswerLetter) {
      html += "<p>Source answer letter: " + escapeHtml(q.sourceAnswerLetter) + ".</p>";
    }
    if (q.illustration && q.illustration.required && !q.illustration.asset) {
      html += "<p><strong>Needs an illustration that is not in the import.</strong> " +
        escapeHtml(q.illustration.description || "") + "</p>";
    }
    (q.issues || []).forEach(function (issue) {
      html += "<p><strong>" + escapeHtml(issue.summary) + "</strong></p>";
      if (issue.excerpt) html += '<p class="review-excerpt">' + escapeHtml(issue.excerpt) + "</p>";
      if (issue.correction) html += "<p>" + escapeHtml(issue.correction) + "</p>";
    });
    (q.reviewNotes || []).forEach(function (note) {
      html += '<p class="source-note">' + escapeHtml(note) + "</p>";
    });
    if (q.duplicateIds && q.duplicateIds.length) {
      html += '<p class="source-note">Same question as: ' + escapeHtml(q.duplicateIds.join(", ")) + ".</p>";
    }
    if (q.originalSourceText) {
      html += "<details><summary>Source excerpt</summary><p class=\"review-excerpt\">" +
        escapeHtml(q.originalSourceText) + "</p></details>";
    }
    html += "</article>";
    return html;
  }

  function renderContentReview() {
    var report = HazmatCatalog.bookReport();
    $("review-summary").textContent = report.imported + " imported records across " + report.exams.length +
      " exams. " + report.eligible + " can be used in a scored test (" + report.distinctEligible +
      " distinct questions after duplicates across exams are grouped). " + report.held +
      " are held for review and excluded; " + report.needsReview +
      " are flagged but still in tests. Source answers are not independently verified.";
    var html = "";
    HazmatCatalog.bookExams.forEach(function (exam) {
      var examReport = HazmatCatalog.examReport(exam);
      var flagged = exam.questions.filter(function (q) {
        return q.reviewStatus !== "source_imported" || (q.issues && q.issues.length);
      });
      html += '<h3 class="review-exam-heading">' + escapeHtml(exam.label) + "</h3>";
      html += '<p class="source-note">' + examReport.imported + " imported · " + examReport.eligible +
        " eligible · " + examReport.held + " held for review · " + examReport.needsReview +
        " flagged but in tests · " + examReport.missingIllustrations + " need illustrations · " +
        examReport.citationIssues + " with citation issues · in " + examReport.duplicateGroups +
        " duplicate groups.</p>";
      flagged.forEach(function (q) { html += reviewCardHtml(q); });
    });
    $("review-list").innerHTML = html;
    showView("view-review");
  }

  function renderExamPrepIntro() {
    var report = HazmatCatalog.bookReport();
    var exams = HazmatCatalog.bookExams;
    if (!exams.length) {
      $("exam-prep-title").textContent = "No book exams loaded";
      $("exam-prep-summary").textContent = "";
      return;
    }
    $("exam-prep-title").textContent = exams.length === 1
      ? exams[0].label
      : exams.length + " book examinations: " + exams.map(function (exam) {
        return exam.shortLabel.replace(/^Examination\s+/, "");
      }).join(", ");
    $("exam-prep-summary").textContent = report.imported + " imported records. " + report.eligible +
      " have a complete question, four choices, and a source answer; " + report.distinctEligible +
      " of those are distinct once duplicate questions across exams are grouped. " + report.held +
      " records are held for review. Source answers are not independently verified.";

    var list = $("exam-prep-exams");
    list.replaceChildren();
    exams.forEach(function (exam) {
      var r = HazmatCatalog.examReport(exam);
      var button = document.createElement("button");
      button.type = "button";
      button.className = "btn btn--secondary";
      var title = document.createElement("strong");
      title.textContent = exam.shortLabel + " — " + (exam.level === "operations" ? "Operations" : "Awareness");
      var detail = document.createElement("span");
      detail.textContent = r.imported + " imported · " + r.eligible + " eligible · " + r.held + " held for review";
      button.appendChild(title);
      button.appendChild(detail);
      button.addEventListener("click", function () { enterExamPrepStudy(exam.id); });
      list.appendChild(button);
    });

    var html = '<table class="exam-report"><thead><tr><th>Exam</th><th>Imported</th><th>Eligible</th>' +
      "<th>Held</th><th>Flagged</th></tr></thead><tbody>";
    report.exams.forEach(function (r) {
      html += "<tr><td>" + escapeHtml(r.shortLabel) + "</td><td>" + r.imported + "</td><td>" + r.eligible +
        "</td><td>" + r.held + "</td><td>" + r.needsReview + "</td></tr>";
    });
    html += "<tr><th>All exams</th><th>" + report.imported + "</th><th>" + report.eligible + " (" +
      report.distinctEligible + " distinct)</th><th>" + report.held + "</th><th>" + report.needsReview +
      "</th></tr></tbody></table>";
    exams.forEach(function (exam) {
      var meta = exam.meta;
      if (!meta) return;
      html += "<h4>" + escapeHtml(exam.label) + "</h4>";
      if (meta.directions) html += "<p>" + escapeHtml(meta.directions) + "</p>";
      if (meta.answerNote) html += '<p class="source-note">' + escapeHtml(meta.answerNote) + "</p>";
      if (meta.readingList && meta.readingList.length) {
        html += "<ol>";
        meta.readingList.forEach(function (line) { html += "<li>" + escapeHtml(line) + "</li>"; });
        html += "</ol>";
      }
      if (meta.excludedNote) html += "<p>" + escapeHtml(meta.excludedNote) + "</p>";
      (meta.sourceNotes || []).forEach(function (note) {
        html += '<p class="source-note">' + escapeHtml(note) + "</p>";
      });
    });
    $("exam-prep-intro").innerHTML = html;
  }

  /* ─── 8. LOCALSTORAGE PERSISTENCE ───────────────── */

  function applySession(session) {
    state.examQuestions = session.questions || [];
    state.examAnswers = session.answers || {};
    state.examMarked = session.markedForReview || {};
    state.examGuessed = session.guessed || {};
    state.examRevealed = session.revealed || {};
    state.examIndex = session.index || 0;
    state.examMode = session.mode || "exam";
    state.examSourceIds = session.sourceIds || [];
    state.examBookFilter = session.bookFilter || "all";
    state.examRequestedCount = session.requestedCount || state.examQuestions.length;
    state.examInProgress = !!session.inProgress;
    state.examSubmitted = !!session.submitted;
    state.examSourceCounts = TestEngine.sourceCounts(state.examQuestions);
    if (state.examIndex >= state.examQuestions.length) state.examIndex = 0;
  }

  function saveState() {
    try {
      var data = {
        studyBank: state.studyBank,
        studyAnswers: state.studyAnswers,
        studyIndex: state.studyIndex,
        studyFilterLevel: state.studyFilterLevel,
        studyFilterQuiz: state.studyFilterQuiz,
        studyFilterExam: state.studyFilterExam,
        studyShuffled: state.studyShuffled,
        studySeed: state.studySeed,
        examBookFilter: state.examBookFilter,
        practiceSession: TestEngine.serializeSession({
          questions: state.examQuestions,
          answers: state.examAnswers,
          markedForReview: state.examMarked,
          guessed: state.examGuessed,
          revealed: state.examRevealed,
          index: state.examIndex,
          mode: state.examMode,
          sourceIds: state.examSourceIds,
          bookFilter: state.examBookFilter,
          requestedCount: state.examRequestedCount,
          inProgress: state.examInProgress,
          submitted: state.examSubmitted
        })
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // localStorage unavailable
    }
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      state.studyBank = data.studyBank || "handout";
      state.studyAnswers = data.studyAnswers || {};
      state.studyIndex = data.studyIndex || 0;
      state.studyFilterLevel = data.studyFilterLevel || "all";
      state.studyFilterQuiz = data.studyFilterQuiz || "all";
      state.studyFilterExam = data.studyFilterExam || "all";
      state.studyShuffled = data.studyShuffled || false;
      state.studySeed = data.studySeed || null;
      state.examBookFilter = data.examBookFilter || "all";

      if (data.practiceSession && data.practiceSession.questionIds) {
        var session = TestEngine.restoreSession(data.practiceSession, HazmatCatalog.byId);
        if (session && session.questions.length === data.practiceSession.questionIds.length) {
          applySession(session);
        }
        return;
      }

      if (data.examQuestionIds && data.examQuestionIds.length) {
        var ids = data.examQuestionIds.map(function (id) {
          var text = String(id);
          if (text.indexOf("handout-") === 0 || text.indexOf("exam-") === 0) return text;
          return "handout-" + text;
        });
        var answers = {};
        Object.keys(data.examAnswers || {}).forEach(function (key) {
          var mapped = key.indexOf("handout-") === 0 || key.indexOf("exam-") === 0 ? key : "handout-" + key;
          answers[mapped] = data.examAnswers[key];
        });
        var legacy = TestEngine.restoreSession({
          questionIds: ids,
          answers: answers,
          index: data.examIndex || 0,
          mode: "exam",
          sourceIds: ["instructor-handouts"],
          requestedCount: ids.length,
          inProgress: !!data.examInProgress,
          submitted: false
        }, HazmatCatalog.byId);
        if (legacy && legacy.questions.length === ids.length) applySession(legacy);
      }
    } catch (e) {
      // corrupted or unavailable
    }
  }

  function clearProgress() {
    showModal(
      "This will erase all saved progress, including study answers and any in-progress exam. This cannot be undone.",
      [
        { label: "Cancel", cls: "btn--nav", action: hideModal },
        { label: "Clear Progress", cls: "btn--primary btn--danger", action: function () {
          hideModal();
          try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
          state.studyAnswers = {};
          state.studyIndex = 0;
          state.studyFilterLevel = "all";
          state.studyFilterQuiz = "all";
          state.studyFilterExam = "all";
          state.studyShuffled = false;
          state.studySeed = null;
          state.studyBank = "handout";
          state.examQuestions = [];
          state.examAnswers = {};
          state.examMarked = {};
          state.examGuessed = {};
          state.examRevealed = {};
          state.examIndex = 0;
          state.examInProgress = false;
          state.examSubmitted = false;
          state.examSourceIds = [];
          state.examBookFilter = "all";
          state.examRequestedCount = 0;
          state.examSourceCounts = [];
          setBookFilterValue("all");
          updateResumeButton();
          refreshEligibility();
        }}
      ]
    );
  }

  /* ─── 9. KEYBOARD SHORTCUTS ─────────────────────── */

  function isModalOpen() {
    return !$("modal-overlay").classList.contains("hidden");
  }

  function isInputFocused() {
    var el = document.activeElement;
    if (!el) return false;
    var tag = el.tagName;
    if (tag === "TEXTAREA" || tag === "SELECT") return true;
    if (tag === "INPUT") {
      var type = (el.type || "").toLowerCase();
      return type !== "radio" && type !== "checkbox";
    }
    return false;
  }

  function answerLetter(key) {
    if (key === "a" || key === "A") return "A";
    if (key === "b" || key === "B") return "B";
    if (key === "c" || key === "C") return "C";
    if (key === "d" || key === "D") return "D";
    return null;
  }

  function navShortcutAllowed(e) {
    if (!e.isTrusted || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return false;
    if (!document.hasFocus()) return false;
    return !!document.querySelector(".view.active");
  }

  function letterShortcutAllowed(e) {
    if (!navShortcutAllowed(e)) return false;
    var target = e.target;
    if (!target || !target.closest) return false;
    if (!target.closest("#exam-choices") && !target.closest("#study-choices")) return false;
    if (Date.now() - lastTypingAt < 350) return false;
    return true;
  }

  function moveExamChoice(direction) {
    var q = state.examQuestions[state.examIndex];
    if (!q || state.examRevealed[q.id]) return;
    var ids = ["A", "B", "C", "D"];
    var focused = document.activeElement && document.activeElement.value;
    var start = ids.indexOf(focused);
    if (start === -1) start = ids.indexOf(state.examAnswers[q.id]);
    if (start === -1) start = 0;
    else start = (start + direction + ids.length) % ids.length;
    var letter = ids[start];
    examSelectAnswer(letter);
    var radio = $("exam-choices").querySelector('input[value="' + letter + '"]');
    if (radio) radio.focus();
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isModalOpen()) {
      e.preventDefault();
      hideModal();
      return;
    }

    if (!answerLetter(e.key) && e.key && e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
      lastTypingAt = Date.now();
    }

    if (isModalOpen() || isInputFocused()) return;
    if (!navShortcutAllowed(e)) return;

    var activeView = document.querySelector(".view.active");
    var viewId = activeView.id;
    var inExamChoices = e.target.closest && e.target.closest("#exam-choices");

    if (inExamChoices && (e.key === " " || e.key === "Spacebar")) {
      choiceFromKeyboard = true;
      return;
    }

    if (viewId === "view-study") {
      var studyLetter = answerLetter(e.key);
      if (studyLetter && letterShortcutAllowed(e)) { e.preventDefault(); studySelectAnswer(studyLetter); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); studyPrev(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); studyNext(); }
    } else if (viewId === "view-exam") {
      var examLetter = answerLetter(e.key);
      if (examLetter && letterShortcutAllowed(e)) { e.preventDefault(); examSelectAnswer(examLetter); }
      else if (inExamChoices && e.key === "ArrowDown") { e.preventDefault(); moveExamChoice(1); }
      else if (inExamChoices && e.key === "ArrowUp") { e.preventDefault(); moveExamChoice(-1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); examPrev(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); examNext(); }
      else if (e.key === "Enter" && (inExamChoices || e.target.id === "exam-check")) {
        e.preventDefault();
        checkPracticeAnswer();
      }
    } else if (viewId === "view-missed") {
      if (e.key === "ArrowLeft") { e.preventDefault(); missedPrev(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); missedNext(); }
    }
  });

  /* ─── 10. MODAL SYSTEM ──────────────────────────── */

  function showModal(message, buttons) {
    $("modal-message").textContent = message;
    var actionsEl = $("modal-actions");
    actionsEl.innerHTML = "";
    buttons.forEach(function (b) {
      var btn = document.createElement("button");
      btn.className = "btn " + b.cls;
      btn.textContent = b.label;
      btn.addEventListener("click", b.action);
      actionsEl.appendChild(btn);
    });
    $("modal-overlay").classList.remove("hidden");
  }

  function hideModal() {
    $("modal-overlay").classList.add("hidden");
  }

  // Close modal on overlay click
  $("modal-overlay").addEventListener("click", function (e) {
    if (e.target === $("modal-overlay")) hideModal();
  });

  /* ─── HELPER: escape HTML ───────────────────────── */
  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str == null ? "" : String(str)));
    return div.innerHTML;
  }

  /* ─── HELPER: render level tag ──────────────────── */
  function renderLevelTag(el, level) {
    el.textContent = level || "";
    el.className = "question-level-tag";
    if (!level) return;
    var lev = level.toLowerCase();
    if (lev.indexOf("operations") !== -1 && lev.indexOf("awareness") !== -1) {
      // Both — use operations style as it's the higher level
      el.classList.add("question-level-tag--operations");
    } else if (lev.indexOf("operations") !== -1) {
      el.classList.add("question-level-tag--operations");
    } else if (lev.indexOf("awareness") !== -1) {
      el.classList.add("question-level-tag--awareness");
    }
  }

  /* ─── NAV HELPERS ───────────────────────────────── */

  function studyPrev() {
    if (state.studyIndex > 0) {
      state.studyIndex--;
      renderStudyQuestion();
      saveState();
    }
  }

  function studyNext() {
    if (state.studyIndex < state.studyFiltered.length - 1) {
      state.studyIndex++;
      renderStudyQuestion();
      saveState();
    }
  }

  function examPrev() {
    if (state.examIndex > 0) {
      blurExamChoices();
      state.examIndex--;
      renderExamQuestion();
      renderExamNavigator();
      saveState();
    }
  }

  function examNext() {
    if (state.examIndex < state.examQuestions.length - 1) {
      blurExamChoices();
      state.examIndex++;
      renderExamQuestion();
      renderExamNavigator();
      saveState();
    }
  }

  function missedPrev() {
    if (state.missedIndex > 0) {
      state.missedIndex--;
      renderMissedQuestion();
    }
  }

  function missedNext() {
    if (state.missedIndex < state.missedQuestions.length - 1) {
      state.missedIndex++;
      renderMissedQuestion();
    }
  }

  /* ─── 11. INITIALIZATION ────────────────────────── */

  var SOURCE_TABS = [
    { id: "handouts", tab: "tab-handouts", panel: "panel-handouts" },
    { id: "exam-prep", tab: "tab-exam-prep", panel: "panel-exam-prep" },
    { id: "tests", tab: "tab-tests", panel: "panel-tests" }
  ];

  function selectTab(id) {
    state.activeTab = id;
    SOURCE_TABS.forEach(function (tab) {
      var selected = tab.id === id;
      var tabEl = $(tab.tab);
      tabEl.setAttribute("aria-selected", selected ? "true" : "false");
      tabEl.tabIndex = selected ? 0 : -1;
      $(tab.panel).hidden = !selected;
    });
  }

  function configureSources() {
    var unavailable = [];
    HazmatCatalog.sources.forEach(function (source) {
      var count = TestEngine.eligibleQuestions(source.questions).length;
      var input = document.querySelector('input[name="test-source"][value="' + source.id + '"]');
      if (!input) return;
      input.disabled = count === 0;
      if (count === 0) {
        input.checked = false;
        unavailable.push(source.label + " has no questions that can be scored yet.");
      }
    });
    var both = document.querySelector('input[name="test-source"][value="both"]');
    var ready = HazmatCatalog.sources.filter(function (source) {
      return TestEngine.eligibleQuestions(source.questions).length > 0;
    });
    if (both) both.disabled = ready.length < 2;
    var note = $("source-unavailable");
    note.hidden = unavailable.length === 0;
    note.textContent = unavailable.join(" ");
    if (!document.querySelector('input[name="test-source"]:checked:not(:disabled)')) {
      var first = document.querySelector('input[name="test-source"]:not(:disabled)');
      if (first) first.checked = true;
    }
  }

  function renderHandoutQuizzes() {
    var groups = [];
    var index = {};
    (QUESTION_BANK || []).forEach(function (question) {
      if (index[question.quiz] == null) {
        index[question.quiz] = groups.length;
        groups.push({ quiz: question.quiz, title: question.quizTitle, count: 0 });
      }
      groups[index[question.quiz]].count += 1;
    });

    var desc = $("source-handout-desc");
    if (desc) {
      desc.textContent = QUESTION_BANK.length + " questions from the academy quiz sheets.";
    }

    var list = $("handout-quizzes");
    if (list) {
      list.replaceChildren();
      groups.forEach(function (group) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn--secondary";
        var title = document.createElement("strong");
        title.textContent = "Quiz #" + group.quiz;
        var detail = document.createElement("span");
        detail.textContent = group.title + " — " + group.count + " Questions";
        button.appendChild(title);
        button.appendChild(detail);
        button.addEventListener("click", function () { enterStudy(String(group.quiz)); });
        list.appendChild(button);
      });
    }

    var select = $("filter-quiz");
    if (!select) return;
    var current = state.studyFilterQuiz || "all";
    select.replaceChildren();
    var all = document.createElement("option");
    all.value = "all";
    all.textContent = "Entire handout";
    select.appendChild(all);
    groups.forEach(function (group) {
      var option = document.createElement("option");
      option.value = String(group.quiz);
      option.textContent = "Quiz #" + group.quiz + " — " + group.title;
      select.appendChild(option);
    });
    select.value = current;
    if (select.value !== String(current)) {
      select.value = "all";
      state.studyFilterQuiz = "all";
    }
  }

  function renderBookFilters() {
    fillBookFilterSelect($("test-book-filter"));
    setBookFilterValue(state.examBookFilter);

    var studySelect = $("filter-exam");
    fillBookFilterSelect(studySelect);
    if (studySelect) {
      studySelect.value = state.studyFilterExam || "all";
      if (studySelect.value !== (state.studyFilterExam || "all")) {
        studySelect.value = "all";
        state.studyFilterExam = "all";
      }
    }
  }

  function init() {
    loadState();
    renderHandoutQuizzes();
    renderBookFilters();
    renderExamPrepIntro();
    configureSources();
    refreshEligibility();
    updateResumeButton();
    selectTab("handouts");

    SOURCE_TABS.forEach(function (tab) {
      $(tab.tab).addEventListener("click", function () { selectTab(tab.id); });
    });
    $("tab-handouts").parentElement.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var tabs = SOURCE_TABS.map(function (tab) { return $(tab.tab); });
      var index = tabs.indexOf(document.activeElement);
      if (index === -1) return;
      e.preventDefault();
      var next = e.key === "ArrowRight" ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      selectTab(SOURCE_TABS[next].id);
    });

    $("btn-study").addEventListener("click", function () { enterStudy("all"); });
    $("btn-resume").addEventListener("click", resumeExam);
    $("btn-study-exam").addEventListener("click", function () { enterExamPrepStudy("all"); });
    $("btn-review-content").addEventListener("click", renderContentReview);
    $("btn-clear-progress").addEventListener("click", clearProgress);

    $("test-generate").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-count]");
      if (!btn) return;
      requestExam(parseInt(btn.getAttribute("data-count"), 10));
    });
    $("btn-generate-all").addEventListener("click", function () {
      var available = TestEngine.countEligible(currentPools());
      if (available > 0) requestExam(available);
    });
    document.querySelectorAll('input[name="test-source"]').forEach(function (input) {
      input.addEventListener("change", refreshEligibility);
    });
    $("test-book-filter").addEventListener("change", function () {
      state.examBookFilter = this.value || "all";
      refreshEligibility();
      saveState();
    });

    // ── STUDY ──
    $("study-home").addEventListener("click", function () {
      selectTab(state.studyBank === "exam-prep" ? "exam-prep" : "handouts");
      showView("view-home");
    });
    $("study-prev").addEventListener("click", studyPrev);
    $("study-next").addEventListener("click", studyNext);
    $("study-next-unanswered").addEventListener("click", studyNextUnanswered);
    $("study-review-missed").addEventListener("click", function () { enterMissedReview("study"); });

    $("study-choices").addEventListener("click", function (e) {
      var el = e.target.closest(".choice");
      if (el && el.dataset.letter) studySelectAnswer(el.dataset.letter);
    });

    // Filters
    $("filter-level").addEventListener("change", function () {
      state.studyFilterLevel = this.value;
      state.studyIndex = 0;
      rebuildStudyList();
      saveState();
    });

    $("filter-quiz").addEventListener("change", function () {
      state.studyFilterQuiz = this.value;
      state.studyIndex = 0;
      rebuildStudyList();
      saveState();
    });

    $("filter-exam").addEventListener("change", function () {
      state.studyFilterExam = this.value || "all";
      state.studyIndex = 0;
      rebuildStudyList();
      saveState();
    });

    $("filter-shuffle").addEventListener("change", function () {
      state.studyShuffled = this.checked;
      if (state.studyShuffled && !state.studySeed) {
        state.studySeed = Math.random();
      }
      if (!state.studyShuffled) {
        state.studySeed = null;
      }
      state.studyIndex = 0;
      rebuildStudyList();
      saveState();
    });

    // ── EXAM ──
    $("exam-home").addEventListener("click", function () {
      if (state.examInProgress) {
        showModal("Leave the test? Your answers are saved and you can resume later.", [
          { label: "Stay", cls: "btn--nav", action: hideModal },
          { label: "Leave test", cls: "btn--primary", action: function () {
            hideModal();
            selectTab("tests");
            showView("view-home");
          }}
        ]);
      } else {
        selectTab("tests");
        showView("view-home");
      }
    });
    $("exam-prev").addEventListener("click", examPrev);
    $("exam-next").addEventListener("click", examNext);
    $("exam-submit").addEventListener("click", submitExam);
    $("exam-check").addEventListener("click", checkPracticeAnswer);
    $("exam-mark").addEventListener("change", function () {
      var q = state.examQuestions[state.examIndex];
      if (!q) return;
      if (this.checked) state.examMarked[q.id] = true;
      else delete state.examMarked[q.id];
      renderExamNavigator();
      saveState();
    });
    $("exam-guess").addEventListener("change", function () {
      var q = state.examQuestions[state.examIndex];
      if (!q) return;
      if (this.checked) state.examGuessed[q.id] = true;
      else delete state.examGuessed[q.id];
      renderExamNavigator();
      saveState();
    });

    $("exam-choices").addEventListener("pointerdown", function (e) {
      choicePointer.down = true;
      choicePointer.moved = false;
      choicePointer.x = e.clientX;
      choicePointer.y = e.clientY;
    });
    $("exam-choices").addEventListener("pointermove", function (e) {
      if (!choicePointer.down) return;
      var dx = e.clientX - choicePointer.x;
      var dy = e.clientY - choicePointer.y;
      if (dx * dx + dy * dy > 144) choicePointer.moved = true;
    });
    $("exam-choices").addEventListener("click", function (e) {
      if (!choicePointer.moved) return;
      e.preventDefault();
      e.stopPropagation();
      choicePointer.down = false;
      choicePointer.moved = false;
      syncExamRadios();
    });
    $("exam-choices").addEventListener("change", function (e) {
      var input = e.target;
      if (!input || input.type !== "radio") return;
      var q = state.examQuestions[state.examIndex];
      var sameQuestion = q && input.getAttribute("data-qid") === String(q.id);
      var fromPointer = choicePointer.down && !choicePointer.moved;
      var allowed = !renderingChoices && sameQuestion && (fromPointer || choiceFromKeyboard);
      choicePointer.down = false;
      choicePointer.moved = false;
      choiceFromKeyboard = false;
      if (!allowed) {
        syncExamRadios();
        return;
      }
      examSelectAnswer(input.value);
      if (fromPointer) blurExamChoices();
    });

    $("exam-navigator").addEventListener("click", function (e) {
      var dot = e.target.closest(".nav-dot");
      if (dot && dot.dataset.idx !== undefined) {
        blurExamChoices();
        state.examIndex = parseInt(dot.dataset.idx);
        renderExamQuestion();
        renderExamNavigator();
        saveState();
      }
    });

    $("results-review-all").addEventListener("click", function () { enterMissedReview("practice"); });
    $("results-retry-missed").addEventListener("click", retryMissed);
    $("results-retake").addEventListener("click", retakeTest);
    $("results-another").addEventListener("click", generateAnother);
    $("results-home").addEventListener("click", function () {
      selectTab("tests");
      showView("view-home");
    });

    $("missed-back").addEventListener("click", function () {
      if (state.missedSource === "study") showView("view-study");
      else showView("view-results");
    });
    $("missed-prev").addEventListener("click", missedPrev);
    $("missed-next").addEventListener("click", missedNext);
    $("review-filters").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      state.reviewFilter = btn.getAttribute("data-filter");
      rebuildReviewList();
      state.missedIndex = 0;
      renderMissedQuestion();
    });
    $("review-home").addEventListener("click", function () {
      selectTab("exam-prep");
      showView("view-home");
    });

    showView("view-home");
  }

  // Boot
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
