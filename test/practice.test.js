import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createContext, runInContext } from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadApp() {
  const context = { console };
  context.globalThis = context;
  const ctx = createContext(context);
  [
    "js/questions.js",
    "js/exam-prep-common.js",
    "js/exam-prep-i1.js",
    "js/exam-prep-i2.js",
    "js/exam-prep-i3.js",
    "js/exam-prep-ii1.js",
    "js/exam-prep-ii2.js",
    "js/exam-prep-ii3.js",
    "js/catalog.js",
    "js/test-engine.js"
  ].forEach((file) => {
    runInContext(readFileSync(join(root, file), "utf8"), ctx, { filename: file });
  });
  return context;
}

const app = loadApp();
const { TestEngine, HazmatCatalog } = app;

const BOOK = "hazardous-materials-exam-prep";
const HANDOUTS = "instructor-handouts";

// Verified after import: 450 records, 399 eligible, 307 distinct once exact
// duplicates across exams are grouped. Handouts: 642 records, 639 unique
// scorable (one exact duplicate pair, one duplicate pair with conflicting keys).
const EXPECTED_EXAMS = [
  { id: "awareness-i1", prefix: "exam-i1", level: "awareness", eligible: 51, held: 24 },
  { id: "awareness-i2", prefix: "exam-i2", level: "awareness", eligible: 70, held: 5 },
  { id: "awareness-i3", prefix: "exam-i3", level: "awareness", eligible: 70, held: 5 },
  { id: "operations-ii1", prefix: "exam-ii1", level: "operations", eligible: 70, held: 5 },
  { id: "operations-ii2", prefix: "exam-ii2", level: "operations", eligible: 74, held: 1 },
  { id: "operations-ii3", prefix: "exam-ii3", level: "operations", eligible: 64, held: 11 }
];
const BOOK_DISTINCT = 307;
const HANDOUT_UNIQUE = 639;

function exam(id) {
  return HazmatCatalog.bookExamById(id).questions;
}

function book() {
  return exam("awareness-i1");
}

function byNumber(n, examId) {
  return exam(examId || "awareness-i1").find((question) => question.originalNumber === n);
}

function pools(ids, bookFilter) {
  return HazmatCatalog.poolsForSources(ids, { bookFilter });
}

test("imports all 75 exam questions once and maps each key by question number", () => {
  const questions = book();
  assert.equal(questions.length, 75);
  const numbers = Array.from(questions, (question) => question.originalNumber).sort((a, b) => a - b);
  assert.deepEqual(numbers, Array.from({ length: 75 }, (_, index) => index + 1));
  questions.forEach((question) => {
    assert.equal(question.answerKeyNumber, question.originalNumber);
    assert.equal(question.id, "exam-i1-" + question.originalNumber);
  });
  assert.match(byNumber(49).question, /terrorism involvement/);
  assert.match(byNumber(40).question, /pesticide labeling/);
  assert.match(byNumber(50).question, /unoccupied house/);
  assert.equal(byNumber(47).question, "The flammable range is the:");
  assert.equal(byNumber(43).originalNumber, 43);
  assert.match(byNumber(43).question, /hazard-control zone/);
});

test("keeps invalid and unresolved records out of scored tests", () => {
  const q9 = byNumber(9);
  assert.equal(q9.sourceAnswerLetter, "G");
  assert.equal(q9.correctChoiceId, null);
  assert.equal(TestEngine.isEligible(q9), false);

  [7, 8, 9, 10, 11, 26, 27, 28, 38, 40, 44, 45, 46, 48, 51, 52, 54, 56, 57, 59, 62, 68, 69, 70]
    .forEach((number) => {
      const question = byNumber(number);
      assert.equal(question.reviewStatus, "unresolved", "question " + number);
      assert.equal(TestEngine.isEligible(question), false, "question " + number);
    });

  const q44 = byNumber(44);
  assert.deepEqual(Array.from(q44.choices, (choice) => choice.text), ["", "", "", ""]);
  assert.equal(q44.sourceAnswerLetter, "C");
  assert.equal(q44.correctChoiceId, null);

  TestEngine.eligibleQuestions(book()).forEach((question) => {
    assert.equal(TestEngine.hasCompleteChoices(question), true);
    assert.ok(["A", "B", "C", "D"].includes(question.correctChoiceId));
    assert.notEqual(question.reviewStatus, "unresolved");
  });
});

test("imports all six book exams with 75 records each and per-exam eligibility", () => {
  assert.equal(HazmatCatalog.bookExams.length, 6);
  assert.deepEqual(Array.from(HazmatCatalog.bookExams, (e) => e.id), EXPECTED_EXAMS.map((e) => e.id));
  const source = HazmatCatalog.sourceById(BOOK);
  assert.equal(source.questions.length, 450);
  assert.equal(new Set(source.questions.map((q) => q.id)).size, 450);

  EXPECTED_EXAMS.forEach((expected) => {
    const questions = exam(expected.id);
    const info = HazmatCatalog.bookExamById(expected.id);
    assert.equal(info.level, expected.level, expected.id);
    assert.equal(info.meta.keyAppendix, expected.level === "awareness" ? "Appendix A" : "Appendix B");
    assert.equal(questions.length, 75, expected.id);
    const numbers = Array.from(questions, (q) => q.originalNumber).sort((a, b) => a - b);
    assert.deepEqual(numbers, Array.from({ length: 75 }, (_, i) => i + 1), expected.id);
    questions.forEach((q) => {
      assert.equal(q.id, expected.prefix + "-" + q.originalNumber);
      assert.equal(q.examId, expected.id);
      assert.equal(q.examLevel, expected.level);
      assert.equal(q.answerKeyNumber, q.originalNumber);
      assert.match(q.keyHeader, new RegExp("^" + q.originalNumber + "[.,]?\\s"), q.id);
      assert.equal(q.answerIndependentlyVerified, false);
      if (q.reviewStatus === "unresolved") {
        assert.equal(q.correctChoiceId, null, q.id + " unresolved items are never graded");
        assert.equal(TestEngine.isEligible(q), false, q.id);
      }
      if (TestEngine.isEligible(q)) {
        assert.equal(q.correctChoiceId, q.sourceAnswerLetter, q.id + " graded letter must be the key letter");
        assert.equal(TestEngine.hasCompleteChoices(q), true, q.id);
      }
    });
    const report = HazmatCatalog.examReport(info);
    assert.equal(report.imported, 75, expected.id);
    assert.equal(report.keysMatched, 75, expected.id);
    assert.equal(report.eligible, expected.eligible, expected.id + " eligible");
    assert.equal(report.held, expected.held, expected.id + " held");
    assert.equal(report.eligible + report.held, 75, expected.id + " every record is either eligible or held");
  });

  const overall = HazmatCatalog.bookReport();
  assert.equal(overall.imported, 450);
  assert.equal(overall.eligible, 399);
  assert.equal(overall.distinctEligible, BOOK_DISTINCT);
  assert.equal(overall.held, 51);
});

test("keeps the awareness I-1 corrections and holds the known problem items in the new exams", () => {
  // I-2
  assert.equal(byNumber(3, "awareness-i2").reviewStatus, "unresolved");
  assert.equal(byNumber(3, "awareness-i2").illustration.required, true);
  assert.equal(byNumber(9, "awareness-i2").correctChoiceId, null);
  assert.equal(byNumber(36, "awareness-i2").correctChoiceId, null);
  // I-3: source says 100 items, scan has 75
  assert.match(HazmatCatalog.bookExamById("awareness-i3").meta.sourceNotes.join(" "), /100/);
  assert.equal(byNumber(14, "awareness-i3").reviewStatus, "unresolved");
  assert.equal(byNumber(67, "awareness-i3").statements.length, 3);
  // II-1: key prints "Answer: 8" for Q75 — kept as source letter, not graded
  const ii1q75 = byNumber(75, "operations-ii1");
  assert.equal(ii1q75.sourceAnswerLetter, "8");
  assert.equal(ii1q75.correctChoiceId, null);
  assert.equal(TestEngine.isEligible(ii1q75), false);
  // II-2: conflicting "Level" choices held; restored Level letters flagged but eligible
  assert.equal(byNumber(34, "operations-ii2").reviewStatus, "unresolved");
  assert.equal(byNumber(9, "operations-ii2").reviewStatus, "needs_review");
  assert.equal(TestEngine.isEligible(byNumber(9, "operations-ii2")), true);
  assert.equal(byNumber(20, "operations-ii2").statements.length, 3);
  assert.match(byNumber(64, "operations-ii2").question, /_____ options available for _____ control/);
  // II-3: missing key answers stay unresolved, no transfer from II-1 duplicates
  [5, 12, 34, 55, 68, 72].forEach((n) => {
    const q = byNumber(n, "operations-ii3");
    assert.equal(q.reviewStatus, "unresolved", "II-3 Q" + n);
    assert.equal(q.sourceAnswerLetter, null, "II-3 Q" + n);
    assert.equal(q.correctChoiceId, null, "II-3 Q" + n);
  });
  const ii3q5 = byNumber(5, "operations-ii3");
  const ii1q6 = byNumber(6, "operations-ii1");
  assert.equal(ii3q5.canonicalKey, ii1q6.canonicalKey, "same question text in II-1 and II-3");
  assert.equal(TestEngine.isEligible(ii1q6), true);
  assert.equal(TestEngine.isEligible(ii3q5), false);
  [11, 20, 45, 63, 64].forEach((n) => {
    assert.equal(byNumber(n, "operations-ii3").reviewStatus, "unresolved", "II-3 Q" + n);
  });
});

test("groups exact duplicates across exams without inflating unique counts", () => {
  const groups = HazmatCatalog.duplicateGroups;
  const bookGroups = groups.filter((g) => g.sourceIds.includes(BOOK));
  assert.equal(bookGroups.length, 81);
  assert.equal(groups.filter((g) => g.sourceIds.length > 1).length, 0, "no cross-source duplicates");

  // II-1 Q7 and II-3 Q6 are the same question; both eligible, same answer, one canonical key.
  const a = byNumber(7, "operations-ii1");
  const b = byNumber(6, "operations-ii3");
  assert.equal(a.canonicalKey, b.canonicalKey);
  assert.equal(a.duplicateGroupId, b.duplicateGroupId);
  assert.ok(a.duplicateIds.includes(b.id));
  assert.equal(a.correctChoiceId, b.correctChoiceId);
  assert.equal(TestEngine.uniqueQuestions([a, b]).length, 1);
  assert.equal(TestEngine.countEligible([{ sourceId: BOOK, questions: [a, b] }]), 1);

  // Close paraphrases are not merged.
  const permeation = byNumber(29, "operations-ii2");
  const penetration = byNumber(26, "operations-ii2");
  assert.notEqual(permeation.canonicalKey, penetration.canonicalKey);

  // No eligible book group disagrees on its answer.
  bookGroups.forEach((g) => assert.equal(g.conflict, false, g.ids.join(",")));

  // The handout pair that disagrees is pulled from scoring and flagged, not auto-fixed.
  const conflict = groups.find((g) => g.conflict);
  assert.deepEqual(Array.from(conflict.ids), ["handout-156", "handout-237"]);
  conflict.ids.forEach((id) => {
    const q = HazmatCatalog.byId[id];
    assert.equal(TestEngine.isEligible(q), false, id);
    assert.equal(q.reviewStatus, "unresolved");
    assert.ok(q.sourceAnswerLetter, id + " keeps its own source letter");
    assert.ok(q.issues.some((issue) => /different answer letter/.test(issue.summary)));
  });
});

test("handout and book pools have separate eligible counts", () => {
  const handouts = TestEngine.countEligible(pools([HANDOUTS]));
  const prep = TestEngine.countEligible(pools([BOOK]));
  const both = TestEngine.countEligible(pools([HANDOUTS, BOOK]));
  assert.equal(handouts, HANDOUT_UNIQUE);
  assert.equal(prep, BOOK_DISTINCT);
  assert.equal(both, HANDOUT_UNIQUE + BOOK_DISTINCT);
  assert.equal(prep >= 150, true);
  assert.equal(handouts >= 150, true);
});

test("book filters narrow the pool before eligible counts", () => {
  const options = Array.from(HazmatCatalog.bookFilterOptions(), (o) => o.value);
  assert.deepEqual(options, ["all", "awareness", "operations"].concat(EXPECTED_EXAMS.map((e) => e.id)));
  assert.deepEqual(Array.from(HazmatCatalog.examIdsForBookFilter("awareness")), ["awareness-i1", "awareness-i2", "awareness-i3"]);
  assert.deepEqual(Array.from(HazmatCatalog.examIdsForBookFilter("operations")), ["operations-ii1", "operations-ii2", "operations-ii3"]);
  assert.deepEqual(Array.from(HazmatCatalog.examIdsForBookFilter("operations-ii2")), ["operations-ii2"]);
  assert.deepEqual(Array.from(HazmatCatalog.examIdsForBookFilter("nope")), []);

  const awareness = TestEngine.countEligible(pools([BOOK], "awareness"));
  const operations = TestEngine.countEligible(pools([BOOK], "operations"));
  assert.equal(awareness, 187);
  assert.equal(operations, 154);
  assert.ok(awareness + operations > BOOK_DISTINCT, "awareness and operations share questions");
  assert.equal(TestEngine.countEligible(pools([BOOK], "operations-ii2")), 74);
  assert.equal(TestEngine.countEligible(pools([BOOK], "awareness-i1")), 51);

  const onlyAwareness = TestEngine.generateTest(pools([BOOK], "awareness"), 150, TestEngine.lcg(5));
  assert.equal(onlyAwareness.ok, true);
  onlyAwareness.questions.forEach((q) => assert.equal(q.examLevel, "awareness"));

  const single = TestEngine.generateTest(pools([BOOK], "operations-ii2"), 150, TestEngine.lcg(5));
  assert.equal(single.ok, false);
  assert.match(single.message, /Only 74 unique questions/);

  const handoutsOnly = pools([HANDOUTS], "operations-ii2");
  assert.equal(handoutsOnly.length, 1);
  assert.equal(handoutsOnly[0].bookFilter, null);
  assert.equal(TestEngine.countEligible(handoutsOnly), HANDOUT_UNIQUE);
});

test("lists every instructor handout quiz from the source packet", () => {
  const source = HazmatCatalog.sourceById("instructor-handouts");
  const expected = [
    [1, "General", 50],
    [2, "Hazardous Materials Properties and Effects", 50],
    [3, "Recognition and Identification", 50],
    [4, "Estimate Potential Harm and Planning the Response", 50],
    [5, "Implementing the Planned Response", 50],
    [6, "Terrorism", 50],
    [7, "Personal Protective Equipment", 50],
    [8, "Mass Decontamination", 32],
    [9, "Technical Decontamination", 50],
    [10, "Evidence Preservation and Sampling", 40],
    [11, "Product Control", 50],
    [12, "Air Monitoring and Sampling", 50],
    [13, "Victim Rescue and Recovery", 45],
    [14, "Response to Illicit Laboratories", 25]
  ];
  assert.equal(source.questions.length, 642);
  assert.equal(source.exams.length, 14);
  const actual = source.exams.map((exam) => [exam.id, exam.label, exam.questions.length]);
  const built = expected.map(([quiz, title, count]) => ["handout-quiz-" + quiz, "Quiz #" + quiz + " — " + title, count]);
  assert.equal(actual.length, built.length);
  actual.forEach((row, index) => {
    assert.equal(row[0], built[index][0]);
    assert.equal(row[1], built[index][1]);
    assert.equal(row[2], built[index][2]);
  });
  const cryogenic = source.questions.find((question) => question.legacyId === 101);
  assert.equal(cryogenic.originalNumber, 1);
  assert.equal(cryogenic.correctChoiceId, "D");
  assert.match(cryogenic.question, /cryogenic liquid has a boiling point lower than/);
  assert.equal(cryogenic.choices[3].text, "−150°F.");
  const illicit = source.questions.find((question) => question.legacyId === 642);
  assert.equal(illicit.originalNumber, 25);
  assert.equal(illicit.correctChoiceId, "B");
  assert.match(illicit.question, /live-human threats/);
});

test("generates unique questions and refuses a size the bank cannot fill", () => {
  const prep = pools([BOOK]);
  const tooBig = TestEngine.generateTest(prep, BOOK_DISTINCT + 1, TestEngine.lcg(3));
  assert.equal(tooBig.ok, false);
  assert.equal(tooBig.questions.length, 0);
  assert.match(tooBig.message, new RegExp("Only " + BOOK_DISTINCT + " unique questions are available"));

  [10, 50, 150].forEach((size) => {
    const result = TestEngine.generateTest(prep, size, TestEngine.lcg(3));
    assert.equal(result.ok, true, "size " + size);
    assert.equal(result.questions.length, size);
    assert.equal(new Set(result.questions.map((question) => question.id)).size, size);
    assert.equal(new Set(result.questions.map((question) => question.canonicalKey)).size, size,
      "no two copies of the same question in a " + size + "-question test");
    result.questions.forEach((question) => {
      assert.equal(question.sourceId, BOOK);
      assert.equal(TestEngine.isEligible(question), true);
    });
  });

  const everything = TestEngine.generateTest(prep, BOOK_DISTINCT, TestEngine.lcg(3));
  assert.equal(everything.ok, true);
  assert.equal(new Set(everything.questions.map((question) => question.canonicalKey)).size, BOOK_DISTINCT);
  const examsUsed = new Set(everything.questions.map((question) => question.examId));
  assert.equal(examsUsed.size, 6, "a full draw reaches every exam");

  const fifty = TestEngine.generateTest(prep, 50, TestEngine.lcg(3));
  const again = TestEngine.generateTest(prep, 50, TestEngine.lcg(3));
  assert.deepEqual(
    Array.from(again.questions, (question) => question.id),
    Array.from(fifty.questions, (question) => question.id)
  );
});

test("balances both sources and fills from the larger bank", () => {
  const result = TestEngine.generateTest(pools([HANDOUTS, BOOK]), 150, TestEngine.lcg(9));
  assert.equal(result.ok, true);
  assert.equal(result.questions.length, 150);
  assert.equal(new Set(result.questions.map((question) => question.id)).size, 150);
  assert.equal(new Set(result.questions.map((question) => question.canonicalKey)).size, 150);
  const counts = Object.fromEntries(result.sourceCounts.map((entry) => [entry.sourceId, entry.count]));
  assert.equal(counts[BOOK], 75);
  assert.equal(counts[HANDOUTS], 75);

  const narrow = TestEngine.generateTest(pools([HANDOUTS, BOOK], "awareness-i1"), 150, TestEngine.lcg(9));
  assert.equal(narrow.ok, true);
  const narrowCounts = Object.fromEntries(narrow.sourceCounts.map((entry) => [entry.sourceId, entry.count]));
  assert.equal(narrowCounts[BOOK], 51);
  assert.equal(narrowCounts[HANDOUTS], 99);
  narrow.questions.filter((q) => q.sourceId === BOOK).forEach((q) => assert.equal(q.examId, "awareness-i1"));
});

test("grades by choice id and counts blank answers as incorrect", () => {
  const question = byNumber(1);
  assert.equal(TestEngine.gradeQuestion(question, "D").correct, true);
  assert.equal(TestEngine.gradeQuestion(question, "A").status, "incorrect");
  assert.equal(TestEngine.gradeQuestion(question, null).status, "unanswered");
  assert.equal(TestEngine.gradeQuestion(byNumber(9), "A").graded, false);

  const grade = TestEngine.gradeTest([question, byNumber(5)], {
    [question.id]: "D"
  });
  assert.equal(grade.correct, 1);
  assert.equal(grade.unanswered, 1);
  assert.equal(grade.incorrect, 1);
  assert.equal(grade.total, 2);
  assert.equal(grade.percentage, 50);
});

test("restores the same question order and supports missed retry plus filters", () => {
  const generated = TestEngine.generateTest(pools([HANDOUTS]), 10, TestEngine.lcg(4));
  const session = {
    questions: generated.questions,
    answers: { [generated.questions[0].id]: generated.questions[0].correctChoiceId },
    markedForReview: { [generated.questions[1].id]: true },
    guessed: { [generated.questions[2].id]: true },
    revealed: {},
    index: 3,
    mode: "practice",
    sourceIds: [HANDOUTS],
    requestedCount: 10,
    inProgress: true,
    submitted: false
  };
  const saved = TestEngine.serializeSession(session);
  const restored = TestEngine.restoreSession(saved, HazmatCatalog.byId);
  assert.deepEqual(restored.questions.map((question) => question.id), saved.questionIds);
  assert.equal(restored.index, 3);
  assert.equal(restored.mode, "practice");
  assert.equal(restored.bookFilter, "all");
  assert.equal(restored.answers[generated.questions[0].id], generated.questions[0].correctChoiceId);

  const bookRun = TestEngine.generateTest(pools([BOOK], "operations"), 10, TestEngine.lcg(4));
  const bookSaved = TestEngine.serializeSession({
    questions: bookRun.questions, sourceIds: [BOOK], bookFilter: "operations", requestedCount: 10, inProgress: true
  });
  assert.equal(bookSaved.bookFilter, "operations");
  const bookRestored = TestEngine.restoreSession(bookSaved, HazmatCatalog.byId);
  assert.equal(bookRestored.bookFilter, "operations");
  assert.deepEqual(Array.from(bookRestored.questions, (q) => q.id), Array.from(bookRun.questions, (q) => q.id));
  assert.ok(bookRestored.questions.some((q) => q.id.indexOf("exam-ii") === 0));

  const missed = TestEngine.missedQuestions(generated.questions, session.answers);
  assert.equal(missed.length, 9);
  assert.equal(missed.some((question) => question.id === generated.questions[0].id), false);

  const flagged = TestEngine.filterQuestions(
    generated.questions,
    session.answers,
    { markedForReview: session.markedForReview, guessed: session.guessed },
    "flagged"
  );
  assert.equal(flagged.length, 2);
});
