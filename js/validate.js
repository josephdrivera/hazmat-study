/**
 * validate.js — Development-only integrity checks for QUESTION_BANK.
 * Run in browser console via: window.__hazmatValidate()
 * Or add ?validate=1 to the URL.
 * Never shown in the normal student interface.
 */

function __hazmatValidate() {
  const errors = [];
  const warnings = [];
  const bank = typeof QUESTION_BANK !== "undefined" ? QUESTION_BANK : [];

  const EXPECTED_QUIZZES = {
    1: { count: 50, title: "General" },
    2: { count: 50, title: "Hazardous Materials Properties and Effects" },
    3: { count: 50, title: "Recognition and Identification" },
    4: { count: 50, title: "Estimate Potential Harm and Planning the Response" },
    5: { count: 50, title: "Implementing the Planned Response" },
    6: { count: 50, title: "Terrorism" },
    7: { count: 50, title: "Personal Protective Equipment" },
    8: { count: 32, title: "Mass Decontamination" },
    9: { count: 50, title: "Technical Decontamination" },
    10: { count: 40, title: "Evidence Preservation and Sampling" },
    11: { count: 50, title: "Product Control" },
    12: { count: 50, title: "Air Monitoring and Sampling" },
    13: { count: 45, title: "Victim Rescue and Recovery" },
    14: { count: 25, title: "Response to Illicit Laboratories" }
  };
  const expectedTotal = Object.values(EXPECTED_QUIZZES).reduce((sum, quiz) => sum + quiz.count, 0);

  // 1. Total count
  if (bank.length !== expectedTotal) {
    errors.push(`Expected ${expectedTotal} questions, found ${bank.length}`);
  }

  // 2. Quiz counts and titles
  Object.entries(EXPECTED_QUIZZES).forEach(([number, spec]) => {
    const quizNumber = Number(number);
    const found = bank.filter(q => q.quiz === quizNumber);
    if (found.length !== spec.count) {
      errors.push(`Quiz #${quizNumber}: expected ${spec.count}, found ${found.length}`);
    }
    if (found.some(q => q.quizTitle !== spec.title)) {
      errors.push(`Quiz #${quizNumber}: title does not match "${spec.title}"`);
    }
    for (let n = 1; n <= spec.count; n++) {
      if (!found.some(q => q.originalNumber === n)) {
        errors.push(`Quiz #${quizNumber}: missing question ${n}`);
      }
    }
  });

  // 3. Check each question
  const seenIds = new Set();
  const seenOriginals = {};

  bank.forEach((q, idx) => {
    const prefix = `Q${q.id} (index ${idx})`;

    // Duplicate global ID
    if (seenIds.has(q.id)) {
      errors.push(`${prefix}: duplicate id ${q.id}`);
    }
    seenIds.add(q.id);

    // Duplicate originalNumber within quiz
    if (!seenOriginals[q.quiz]) seenOriginals[q.quiz] = new Set();
    if (seenOriginals[q.quiz].has(q.originalNumber)) {
      errors.push(`${prefix}: duplicate originalNumber ${q.originalNumber} in Quiz #${q.quiz}`);
    }
    seenOriginals[q.quiz].add(q.originalNumber);

    // Valid correctAnswer
    if (!["A", "B", "C", "D"].includes(q.correctAnswer)) {
      errors.push(`${prefix}: invalid correctAnswer "${q.correctAnswer}"`);
    }

    // All four choices present
    ["A", "B", "C", "D"].forEach(letter => {
      if (!q.choices || typeof q.choices[letter] !== "string" || q.choices[letter].trim() === "") {
        errors.push(`${prefix}: missing or empty choice ${letter}`);
      }
    });

    // Non-empty level
    if (!q.level || q.level.trim() === "") {
      errors.push(`${prefix}: missing level`);
    }

    // Non-empty objective
    if (!q.objective || q.objective.trim() === "") {
      errors.push(`${prefix}: missing objective`);
    }

    // Quiz metadata
    if (!EXPECTED_QUIZZES[q.quiz]) {
      errors.push(`${prefix}: invalid quiz number ${q.quiz}`);
    }

    if (!q.quizTitle || q.quizTitle.trim() === "") {
      errors.push(`${prefix}: missing quizTitle`);
    }

    // Non-empty question text
    if (!q.question || q.question.trim() === "") {
      errors.push(`${prefix}: missing question text`);
    }

    // Check for extraction flags
    const allText = JSON.stringify(q);
    if (allText.includes("FLAG:") || allText.includes("EXTRACTION_FLAG")) {
      warnings.push(`${prefix}: contains extraction flag — review needed`);
    }
  });

  // 4. Sequential IDs
  const ids = bank.map(q => q.id);
  const expected = Array.from({ length: expectedTotal }, (_, i) => i + 1);
  if (JSON.stringify(ids) !== JSON.stringify(expected)) {
    warnings.push(`IDs are not sequential 1–${expectedTotal}`);
  }

  // Report
  console.group("%c HAZMAT STUDY — DATA VALIDATION", "font-weight:bold; font-size:14px;");
  console.log(`Total questions: ${bank.length}`);
  Object.keys(EXPECTED_QUIZZES).forEach((number) => {
    const found = bank.filter(q => q.quiz === Number(number)).length;
    console.log(`Quiz #${number}: ${found}`);
  });

  if (errors.length === 0 && warnings.length === 0) {
    console.log("%c ALL CHECKS PASSED", "color:green; font-weight:bold;");
  }

  if (errors.length > 0) {
    console.group(`%c ${errors.length} ERROR(S)`, "color:red; font-weight:bold;");
    errors.forEach(e => console.error(e));
    console.groupEnd();
  }

  if (warnings.length > 0) {
    console.group(`%c ${warnings.length} WARNING(S)`, "color:orange; font-weight:bold;");
    warnings.forEach(w => console.warn(w));
    console.groupEnd();
  }

  if (typeof HazmatCatalog !== "undefined" && typeof TestEngine !== "undefined") {
    const EXPECTED_EXAMS = [
      ["awareness-i1", "exam-i1", "awareness", "Appendix A"],
      ["awareness-i2", "exam-i2", "awareness", "Appendix A"],
      ["awareness-i3", "exam-i3", "awareness", "Appendix A"],
      ["operations-ii1", "exam-ii1", "operations", "Appendix B"],
      ["operations-ii2", "exam-ii2", "operations", "Appendix B"],
      ["operations-ii3", "exam-ii3", "operations", "Appendix B"]
    ];
    const book = HazmatCatalog.sourceById("hazardous-materials-exam-prep");
    const allBook = book ? book.questions : [];
    if (HazmatCatalog.bookExams.length !== EXPECTED_EXAMS.length) {
      errors.push(`Book exams: expected ${EXPECTED_EXAMS.length}, found ${HazmatCatalog.bookExams.length}`);
    }
    if (allBook.length !== EXPECTED_EXAMS.length * 75) {
      errors.push(`Book records: expected ${EXPECTED_EXAMS.length * 75}, found ${allBook.length}`);
    }
    const bookIds = new Set();
    allBook.forEach((q) => {
      if (bookIds.has(q.id)) errors.push(`Book: duplicate record id ${q.id}`);
      bookIds.add(q.id);
    });

    EXPECTED_EXAMS.forEach(([examId, idPrefix, level, appendix]) => {
      const exam = HazmatCatalog.bookExamById(examId);
      const label = exam ? exam.shortLabel : examId;
      if (!exam) {
        errors.push(`${examId}: exam not loaded`);
        return;
      }
      const questions = exam.questions;
      if (questions.length !== 75) {
        errors.push(`${label}: expected 75 questions, found ${questions.length}`);
      }
      if (exam.level !== level) errors.push(`${label}: level ${exam.level}, expected ${level}`);
      if (exam.meta && exam.meta.keyAppendix !== appendix) {
        errors.push(`${label}: key appendix ${exam.meta.keyAppendix}, expected ${appendix}`);
      }
      const numbers = new Set();
      questions.forEach((q) => {
        if (q.id !== `${idPrefix}-${q.originalNumber}`) {
          errors.push(`${label} Q${q.originalNumber}: id ${q.id} does not match ${idPrefix}-${q.originalNumber}`);
        }
        if (q.examId !== examId) errors.push(`${q.id}: examId ${q.examId}`);
        if (numbers.has(q.originalNumber)) {
          errors.push(`${label}: duplicate question ${q.originalNumber}`);
        }
        numbers.add(q.originalNumber);
        if (q.answerKeyNumber !== q.originalNumber) {
          errors.push(`${label} Q${q.originalNumber}: answer key number ${q.answerKeyNumber}`);
        }
        if (!q.keyHeader || !new RegExp(`^${q.originalNumber}[.,]?\\s`).test(q.keyHeader)) {
          errors.push(`${label} Q${q.originalNumber}: key header "${q.keyHeader}" does not start with the question number`);
        }
        if (q.reviewStatus === "unresolved" && TestEngine.isEligible(q)) {
          errors.push(`${label} Q${q.originalNumber}: unresolved item is eligible for a scored test`);
        }
        if (q.reviewStatus === "unresolved" && q.correctChoiceId != null) {
          errors.push(`${label} Q${q.originalNumber}: unresolved item carries a graded answer`);
        }
        if (q.illustration && q.illustration.required && !q.illustration.asset && TestEngine.isEligible(q)) {
          errors.push(`${label} Q${q.originalNumber}: item needing an illustration is eligible`);
        }
        if (TestEngine.isEligible(q)) {
          if (!TestEngine.hasCompleteChoices(q) || !["A", "B", "C", "D"].includes(q.correctChoiceId)) {
            errors.push(`${label} Q${q.originalNumber}: eligible item is incomplete`);
          }
          if (q.correctChoiceId !== q.sourceAnswerLetter) {
            errors.push(`${label} Q${q.originalNumber}: graded answer ${q.correctChoiceId} differs from source letter ${q.sourceAnswerLetter}`);
          }
        }
        if (q.answerIndependentlyVerified !== false) {
          errors.push(`${label} Q${q.originalNumber}: answers must stay marked as not independently verified`);
        }
      });
      for (let n = 1; n <= 75; n++) {
        if (!numbers.has(n)) errors.push(`${label}: missing question ${n}`);
      }
      const report = HazmatCatalog.examReport(exam);
      console.log(`${label}: ${report.imported} imported, ${report.eligible} eligible, ${report.held} held, ${report.needsReview} flagged`);
    });

    const i1 = HazmatCatalog.bookExamById("awareness-i1");
    const q9 = i1 && i1.questions.find((q) => q.originalNumber === 9);
    if (!q9 || q9.sourceAnswerLetter !== "G" || q9.correctChoiceId != null) {
      errors.push("Examination I-1 Q9: source answer G must stay ungraded");
    }

    const bookReport = HazmatCatalog.bookReport();
    console.log(`Book total: ${bookReport.eligible} eligible records, ${bookReport.distinctEligible} distinct eligible questions, ${bookReport.duplicateGroups} duplicate groups`);
    HazmatCatalog.duplicateGroups.forEach((group) => {
      if (group.conflict) {
        warnings.push(`Duplicate group ${group.id} (${group.ids.join(", ")}) has conflicting answers ${group.answers.join("/")}; all copies excluded from scoring`);
      }
    });

    const handouts = HazmatCatalog.sourceById("instructor-handouts");
    const handoutQuestions = handouts ? handouts.questions : [];
    if (handoutQuestions.length !== bank.length) {
      errors.push(`Instructor handouts catalog: expected ${bank.length}, found ${handoutQuestions.length}`);
    }
    if (handouts && handouts.exams.length !== Object.keys(EXPECTED_QUIZZES).length) {
      errors.push(`Instructor handouts: expected ${Object.keys(EXPECTED_QUIZZES).length} quizzes, found ${handouts.exams.length}`);
    }
    const handoutEligible = TestEngine.eligibleQuestions(handoutQuestions).length;
    handoutQuestions.forEach((q) => {
      if (q.reviewStatus === "unresolved" && TestEngine.isEligible(q)) {
        errors.push(`${q.id}: unresolved handout item is eligible for a scored test`);
      }
    });
    console.log(`Instructor handouts eligible: ${handoutEligible}`);
  }

  console.groupEnd();
  return { errors, warnings, total: bank.length };
}

// Auto-run if ?validate=1 in URL
if (typeof window !== "undefined") {
  window.__hazmatValidate = __hazmatValidate;
  if (new URLSearchParams(window.location.search).get("validate") === "1") {
    document.addEventListener("DOMContentLoaded", __hazmatValidate);
  }
}
