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
    // Study Mode
    studyFiltered: [],       // filtered/shuffled question list
    studyIndex: 0,
    studyAnswers: {},        // { questionId: "A" | "B" | ... }
    studyFilterLevel: "all",
    studyFilterQuiz: "all",
    studyShuffled: false,
    studySeed: null,

    // Exam Mode
    examAnswers: {},
    examIndex: 0,
    examInProgress: false,
    examSubmitted: false,
    examMissed: [],

    // Missed review
    missedQuestions: [],
    missedIndex: 0,
    missedSource: ""         // "study" or "exam"
  };

  /* ─── 2. UTILITY HELPERS ────────────────────────── */

  function $(id) { return document.getElementById(id); }

  function filterQuestions() {
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

  var views = ["view-home", "view-study", "view-exam", "view-results", "view-missed"];

  function showView(id) {
    views.forEach(function (v) {
      var el = $(v);
      if (el) el.classList.toggle("active", v === id);
    });
    window.scrollTo(0, 0);
  }

  /* ─── 4. STUDY MODE ─────────────────────────────── */

  function enterStudy(quizFilter) {
    state.studyFilterQuiz = quizFilter || state.studyFilterQuiz || "all";
    $("filter-quiz").value = state.studyFilterQuiz;
    $("filter-level").value = state.studyFilterLevel;
    $("filter-shuffle").checked = state.studyShuffled;
    rebuildStudyList();
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
      $("study-level-tag").textContent = "";
      $("study-level-tag").className = "question-level-tag";
      return;
    }

    var q = list[state.studyIndex];
    var quizLabel = "Quiz " + q.quiz + " \u2014 " + q.quizTitle.toUpperCase();
    $("study-header").textContent = quizLabel + "\u2003\u2003Question " + (state.studyIndex + 1) + " of " + list.length;
    $("study-question").textContent = q.question;
    renderLevelTag($("study-level-tag"), q.level);

    var answered = state.studyAnswers[q.id];
    var isAnswered = answered !== undefined;

    // Choices
    var html = "";
    ["A", "B", "C", "D"].forEach(function (letter) {
      var cls = "choice";
      if (isAnswered) {
        cls += " choice--locked";
        if (letter === q.correctAnswer) cls += " choice--correct";
        else if (letter === answered && answered !== q.correctAnswer) cls += " choice--incorrect";
      } else if (letter === answered) {
        cls += " choice--selected";
      }
      html += '<div class="' + cls + '" data-letter="' + letter + '" role="button" tabindex="0">';
      html += '<span class="choice-letter">' + letter + '.</span>';
      html += '<span class="choice-text">' + escapeHtml(q.choices[letter]) + '</span>';
      html += '</div>';
    });
    $("study-choices").innerHTML = html;

    // Feedback
    var fb = $("study-feedback");
    if (isAnswered) {
      if (answered === q.correctAnswer) {
        fb.textContent = "Correct";
        fb.className = "feedback feedback--correct";
      } else {
        fb.textContent = "Incorrect \u2014 Correct answer: " + q.correctAnswer;
        fb.className = "feedback feedback--incorrect";
      }
    } else {
      fb.textContent = "";
      fb.className = "feedback";
    }

    // Meta
    $("study-meta").innerHTML =
      '<span>Level: ' + escapeHtml(q.level) + '</span>' +
      '<span>Objective: ' + escapeHtml(q.objective) + '</span>';

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
        if (state.studyAnswers[q.id] === q.correctAnswer) correct++;
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
      return a !== undefined && a !== q.correctAnswer;
    });
  }

  /* ─── 5. PRACTICE EXAM MODE ─────────────────────── */

  function enterExam() {
    if (!state.examInProgress) {
      state.examAnswers = {};
      state.examIndex = 0;
      state.examInProgress = true;
      state.examSubmitted = false;
      state.examMissed = [];
      saveState();
    }
    showView("view-exam");
    renderExamQuestion();
    renderExamNavigator();
  }

  function renderExamQuestion() {
    var q = QUESTION_BANK[state.examIndex];
    $("exam-header").textContent = "Question " + (state.examIndex + 1) + " of 100";
    $("exam-question").textContent = q.question;
    renderLevelTag($("exam-level-tag"), q.level);

    var selected = state.examAnswers[q.id];
    var html = "";
    ["A", "B", "C", "D"].forEach(function (letter) {
      var cls = "choice";
      if (letter === selected) cls += " choice--selected";
      html += '<div class="' + cls + '" data-letter="' + letter + '" role="button" tabindex="0">';
      html += '<span class="choice-letter">' + letter + '.</span>';
      html += '<span class="choice-text">' + escapeHtml(q.choices[letter]) + '</span>';
      html += '</div>';
    });
    $("exam-choices").innerHTML = html;

    // Progress bar
    var answeredCount = Object.keys(state.examAnswers).length;
    $("exam-progress-fill").style.width = (answeredCount / 100 * 100) + "%";

    // Nav
    $("exam-prev").disabled = state.examIndex === 0;
    $("exam-next").disabled = state.examIndex >= 99;
  }

  function renderExamNavigator() {
    var html = "";
    for (var i = 0; i < 100; i++) {
      var q = QUESTION_BANK[i];
      var cls = "nav-dot";
      if (i === state.examIndex) cls += " nav-dot--current";
      else if (state.examAnswers[q.id] !== undefined) cls += " nav-dot--answered";
      html += '<button class="' + cls + '" data-idx="' + i + '">' + (i + 1) + '</button>';
    }
    $("exam-navigator").innerHTML = html;
  }

  function examSelectAnswer(letter) {
    var q = QUESTION_BANK[state.examIndex];
    state.examAnswers[q.id] = letter;
    renderExamQuestion();
    renderExamNavigator();
    saveState();
  }

  function submitExam() {
    var unanswered = 100 - Object.keys(state.examAnswers).length;
    if (unanswered > 0) {
      showModal(
        "You still have " + unanswered + " unanswered question" + (unanswered > 1 ? "s" : "") + ".",
        [
          { label: "Return to Exam", cls: "btn--nav", action: hideModal },
          { label: "Submit Anyway", cls: "btn--primary", action: finalizeExam }
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
    $("btn-exam").textContent = "100-Question Practice Exam";

    var correct = 0;
    state.examMissed = [];
    QUESTION_BANK.forEach(function (q) {
      var a = state.examAnswers[q.id];
      if (a === q.correctAnswer) {
        correct++;
      } else {
        state.examMissed.push(q);
      }
    });

    saveState();
    showResults(correct, 100);
  }

  /* ─── 6. RESULTS ────────────────────────────────── */

  function showResults(correct, total) {
    var pct = Math.round((correct / total) * 100);
    var incorrect = total - correct;
    var band = getResultBand(pct);

    $("results-score").textContent = pct + "%";
    $("results-counts").innerHTML = correct + " correct<br>" + incorrect + " incorrect";

    var bandEl = $("results-band");
    bandEl.textContent = band.label;
    bandEl.className = "results-band results-band--" + band.cls;

    $("results-review-missed").style.display = incorrect > 0 ? "" : "none";

    showView("view-results");
  }

  /* ─── 7. MISSED-QUESTION REVIEW ─────────────────── */

  function enterMissedReview(source) {
    if (source === "study") {
      state.missedQuestions = studyGetMissed();
      state.missedSource = "study";
    } else {
      state.missedQuestions = state.examMissed;
      state.missedSource = "exam";
    }
    if (state.missedQuestions.length === 0) return;
    state.missedIndex = 0;
    showView("view-missed");
    renderMissedQuestion();
  }

  function renderMissedQuestion() {
    var list = state.missedQuestions;
    if (list.length === 0) return;
    var q = list[state.missedIndex];

    $("missed-counter").textContent = "Missed Question " + (state.missedIndex + 1) + " of " + list.length;

    var quizLabel = "Quiz #" + q.quiz + " \u2014 " + q.quizTitle;
    $("missed-header").textContent = quizLabel + "\u2003\u2003Original #" + q.originalNumber;
    $("missed-question").textContent = q.question;
    renderLevelTag($("missed-level-tag"), q.level);

    var userAnswer = (state.missedSource === "study") ? state.studyAnswers[q.id] : state.examAnswers[q.id];

    var html = "";
    ["A", "B", "C", "D"].forEach(function (letter) {
      var cls = "choice choice--locked";
      if (letter === q.correctAnswer) cls += " choice--correct";
      if (letter === userAnswer && userAnswer !== q.correctAnswer) cls += " choice--incorrect";
      html += '<div class="' + cls + '">';
      html += '<span class="choice-letter">' + letter + '.</span>';
      html += '<span class="choice-text">' + escapeHtml(q.choices[letter]) + '</span>';
      html += '</div>';
    });

    // Show your answer vs correct answer beneath choices
    html += '<div class="missed-answer-row">';
    html += '<span class="missed-your-answer">Your answer: ' + (userAnswer || "\u2014") + '</span>';
    html += '<span class="missed-correct-answer">Correct answer: ' + q.correctAnswer + '</span>';
    html += '</div>';

    $("missed-choices").innerHTML = html;

    $("missed-meta").innerHTML =
      '<span>Level: ' + escapeHtml(q.level) + '</span>' +
      '<span>Objective: ' + escapeHtml(q.objective) + '</span>';

    $("missed-prev").disabled = state.missedIndex === 0;
    $("missed-next").disabled = state.missedIndex >= list.length - 1;
  }

  /* ─── 8. LOCALSTORAGE PERSISTENCE ───────────────── */

  function saveState() {
    try {
      var data = {
        studyAnswers: state.studyAnswers,
        studyIndex: state.studyIndex,
        studyFilterLevel: state.studyFilterLevel,
        studyFilterQuiz: state.studyFilterQuiz,
        studyShuffled: state.studyShuffled,
        studySeed: state.studySeed,
        examAnswers: state.examAnswers,
        examIndex: state.examIndex,
        examInProgress: state.examInProgress
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
      state.studyAnswers = data.studyAnswers || {};
      state.studyIndex = data.studyIndex || 0;
      state.studyFilterLevel = data.studyFilterLevel || "all";
      state.studyFilterQuiz = data.studyFilterQuiz || "all";
      state.studyShuffled = data.studyShuffled || false;
      state.studySeed = data.studySeed || null;
      state.examAnswers = data.examAnswers || {};
      state.examIndex = data.examIndex || 0;
      state.examInProgress = data.examInProgress || false;
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
          state.studyShuffled = false;
          state.studySeed = null;
          state.examAnswers = {};
          state.examIndex = 0;
          state.examInProgress = false;
          state.examSubmitted = false;
          state.examMissed = [];
          $("btn-exam").textContent = "100-Question Practice Exam";
        }}
      ]
    );
  }

  /* ─── 9. KEYBOARD SHORTCUTS ─────────────────────── */

  function isModalOpen() {
    return !$("modal-overlay").classList.contains("hidden");
  }

  function isInputFocused() {
    var tag = document.activeElement && document.activeElement.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
  }

  document.addEventListener("keydown", function (e) {
    // Escape closes modal
    if (e.key === "Escape" && isModalOpen()) {
      e.preventDefault();
      hideModal();
      return;
    }

    if (isModalOpen() || isInputFocused()) return;

    var activeView = document.querySelector(".view.active");
    if (!activeView) return;
    var viewId = activeView.id;

    if (viewId === "view-study") {
      if (e.key === "a" || e.key === "A") { e.preventDefault(); studySelectAnswer("A"); }
      else if (e.key === "b" || e.key === "B") { e.preventDefault(); studySelectAnswer("B"); }
      else if (e.key === "c" || e.key === "C") { e.preventDefault(); studySelectAnswer("C"); }
      else if (e.key === "d" || e.key === "D") { e.preventDefault(); studySelectAnswer("D"); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); studyPrev(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); studyNext(); }
    } else if (viewId === "view-exam") {
      if (e.key === "a" || e.key === "A") { e.preventDefault(); examSelectAnswer("A"); }
      else if (e.key === "b" || e.key === "B") { e.preventDefault(); examSelectAnswer("B"); }
      else if (e.key === "c" || e.key === "C") { e.preventDefault(); examSelectAnswer("C"); }
      else if (e.key === "d" || e.key === "D") { e.preventDefault(); examSelectAnswer("D"); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); examPrev(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); examNext(); }
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
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /* ─── HELPER: render level tag ──────────────────── */
  function renderLevelTag(el, level) {
    el.textContent = level;
    el.className = "question-level-tag";
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
      state.examIndex--;
      renderExamQuestion();
      renderExamNavigator();
      saveState();
    }
  }

  function examNext() {
    if (state.examIndex < 99) {
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

  function init() {
    loadState();

    // Update exam button text if exam in progress
    if (state.examInProgress) {
      $("btn-exam").textContent = "Resume Practice Exam";
    }

    // ── HOME ──
    $("btn-study").addEventListener("click", function () { enterStudy("all"); });
    $("btn-exam").addEventListener("click", enterExam);
    $("btn-quiz1").addEventListener("click", function () { enterStudy("1"); });
    $("btn-quiz2").addEventListener("click", function () { enterStudy("2"); });
    $("btn-clear-progress").addEventListener("click", clearProgress);

    // ── STUDY ──
    $("study-home").addEventListener("click", function () { showView("view-home"); });
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
        showModal("Leave the exam? Your answers are saved and you can resume later.", [
          { label: "Stay", cls: "btn--nav", action: hideModal },
          { label: "Leave Exam", cls: "btn--primary", action: function () {
            hideModal();
            showView("view-home");
          }}
        ]);
      } else {
        showView("view-home");
      }
    });
    $("exam-prev").addEventListener("click", examPrev);
    $("exam-next").addEventListener("click", examNext);
    $("exam-submit").addEventListener("click", submitExam);

    $("exam-choices").addEventListener("click", function (e) {
      var el = e.target.closest(".choice");
      if (el && el.dataset.letter) examSelectAnswer(el.dataset.letter);
    });

    $("exam-navigator").addEventListener("click", function (e) {
      var dot = e.target.closest(".nav-dot");
      if (dot && dot.dataset.idx !== undefined) {
        state.examIndex = parseInt(dot.dataset.idx);
        renderExamQuestion();
        renderExamNavigator();
        saveState();
      }
    });

    // ── RESULTS ──
    $("results-review-missed").addEventListener("click", function () { enterMissedReview("exam"); });
    $("results-restart").addEventListener("click", function () {
      state.examAnswers = {};
      state.examIndex = 0;
      state.examInProgress = false;
      state.examSubmitted = false;
      state.examMissed = [];
      $("btn-exam").textContent = "100-Question Practice Exam";
      saveState();
      enterExam();
    });
    $("results-home").addEventListener("click", function () { showView("view-home"); });

    // ── MISSED ──
    $("missed-back").addEventListener("click", function () {
      if (state.missedSource === "study") showView("view-study");
      else showView("view-results");
    });
    $("missed-prev").addEventListener("click", missedPrev);
    $("missed-next").addEventListener("click", missedNext);

    // Show home
    showView("view-home");
  }

  // Boot
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
