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

  // 1. Total count
  if (bank.length !== 100) {
    errors.push(`Expected 100 questions, found ${bank.length}`);
  }

  // 2. Quiz counts
  const q1 = bank.filter(q => q.quiz === 1);
  const q2 = bank.filter(q => q.quiz === 2);
  if (q1.length !== 50) errors.push(`Quiz #1: expected 50, found ${q1.length}`);
  if (q2.length !== 50) errors.push(`Quiz #2: expected 50, found ${q2.length}`);

  // 3. Check each question
  const seenIds = new Set();
  const seenOriginals = { 1: new Set(), 2: new Set() };

  bank.forEach((q, idx) => {
    const prefix = `Q${q.id} (index ${idx})`;

    // Duplicate global ID
    if (seenIds.has(q.id)) {
      errors.push(`${prefix}: duplicate id ${q.id}`);
    }
    seenIds.add(q.id);

    // Duplicate originalNumber within quiz
    if (seenOriginals[q.quiz]) {
      if (seenOriginals[q.quiz].has(q.originalNumber)) {
        errors.push(`${prefix}: duplicate originalNumber ${q.originalNumber} in Quiz #${q.quiz}`);
      }
      seenOriginals[q.quiz].add(q.originalNumber);
    }

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
    if (![1, 2].includes(q.quiz)) {
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
  const expected = Array.from({ length: 100 }, (_, i) => i + 1);
  if (JSON.stringify(ids) !== JSON.stringify(expected)) {
    warnings.push("IDs are not sequential 1–100");
  }

  // Report
  console.group("%c HAZMAT STUDY — DATA VALIDATION", "font-weight:bold; font-size:14px;");
  console.log(`Total questions: ${bank.length}`);
  console.log(`Quiz #1: ${q1.length} | Quiz #2: ${q2.length}`);

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
