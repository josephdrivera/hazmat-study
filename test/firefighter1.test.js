import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
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
    "js/exam-prep-ff1-i1.js",
    "js/exam-prep-ff1-i2.js",
    "js/exam-prep-ff1-i3.js",
    "js/catalog.js",
    "js/test-engine.js",
    "js/programs.js"
  ].forEach((file) => {
    runInContext(readFileSync(join(root, file), "utf8"), ctx, { filename: file });
  });
  return context;
}

const app = loadApp();
const { TestEngine, HazmatCatalog, ExamPrepBank, StudyPrograms } = app;

// Values built inside the vm context are not reference-equal to this realm's
// arrays, so deep comparisons go through JSON.
const plain = (value) => JSON.parse(JSON.stringify(value));

const FF1 = "fire-fighter-1-exam-prep";
const HAZMAT_BOOK = "hazardous-materials-exam-prep";
const HANDOUTS = "instructor-handouts";
const EXAMS = [
  { id: "ff1-exam-i1", prefix: "ff1-i1", questionPages: [5, 24], keyPages: [87, 111], flagged: 2 },
  { id: "ff1-exam-i2", prefix: "ff1-i2", questionPages: [27, 45], keyPages: [115, 140], flagged: 45 },
  { id: "ff1-exam-i3", prefix: "ff1-i3", questionPages: [49, 67], keyPages: [143, 168], flagged: 1 }
];

function ff1Source() {
  return HazmatCatalog.sourceById(FF1);
}

function examQuestions(id) {
  return HazmatCatalog.bookExamById(id).questions;
}

test("the generated Fire Fighter I exam files match the verified transcription", () => {
  execFileSync(process.execPath, [join(root, "scripts", "build-ff1-exams.mjs"), "--check"], { cwd: root });
});

test("the verified transcription covers every printed number once with complete choices and readable keys", () => {
  const dir = join(root, "source", "firefighter-1-exam-prep", "verified");
  const seen = { i1: { q: new Set(), k: new Set() }, i2: { q: new Set(), k: new Set() }, i3: { q: new Set(), k: new Set() } };
  readdirSync(dir).filter((f) => f.endsWith(".json")).forEach((file) => {
    const data = JSON.parse(readFileSync(join(dir, file), "utf8"));
    assert.ok(seen[data.exam], file + " exam");
    data.pages.forEach((page) => {
      assert.equal(typeof page.page, "number", file + " page number");
      assert.match(page.photo, /^IMG_\d+\.jpg$/, file + " photo");
      (page.questions || []).forEach((q) => {
        assert.ok(!seen[data.exam].q.has(q.n), `${file}: question ${q.n} transcribed twice`);
        seen[data.exam].q.add(q.n);
        assert.ok(q.stem && q.stem.trim(), `${file}: question ${q.n} stem`);
        ["A", "B", "C", "D"].forEach((id) => assert.ok(q.choices[id] && q.choices[id].trim(), `${file}: question ${q.n} choice ${id}`));
        assert.ok(!/\[unreadable\]/i.test(JSON.stringify(q)), `${file}: question ${q.n} has unreadable text`);
      });
      (page.entries || []).forEach((k) => {
        assert.ok(!seen[data.exam].k.has(k.n), `${file}: key ${k.n} transcribed twice`);
        seen[data.exam].k.add(k.n);
        assert.match(k.header, new RegExp("^" + k.n + "[.,]?\\s"), `${file}: key ${k.n} header`);
        assert.match(k.answer, /^[A-D]$/, `${file}: key ${k.n} answer`);
        assert.match(k.nfpa || "", /^NFPA 1010/, `${file}: key ${k.n} NFPA reference`);
      });
    });
  });
  Object.keys(seen).forEach((exam) => {
    assert.equal(seen[exam].q.size, 150, exam + " questions");
    assert.equal(seen[exam].k.size, 150, exam + " keys");
  });
});

test("Fire Fighter I registers as its own book source under its own program", () => {
  const source = ff1Source();
  assert.ok(source, "source registered");
  assert.equal(source.kind, "book");
  assert.equal(source.programId, "firefighter-1");
  assert.equal(source.standard, "NFPA 1001");
  assert.equal(source.questions.length, 450);
  assert.equal(new Set(source.questions.map((q) => q.id)).size, 450);
  assert.deepEqual(plain(source.exams.map((e) => e.id)), EXAMS.map((e) => e.id));

  assert.deepEqual(plain(HazmatCatalog.sourcesForProgram("firefighter-1").map((s) => s.id)), [FF1]);
  assert.deepEqual(plain(HazmatCatalog.sourcesForProgram("hazmat").map((s) => s.id)), [HANDOUTS, HAZMAT_BOOK]);
  assert.equal(HazmatCatalog.bookSourceForProgram("firefighter-1").id, FF1);
  assert.equal(HazmatCatalog.programForSource(FF1), "firefighter-1");
  assert.equal(HazmatCatalog.programHasLevels("firefighter-1"), false);
  assert.equal(HazmatCatalog.programHasLevels("hazmat"), true);

  const program = StudyPrograms.get("firefighter-1");
  assert.equal(program.tests, true);
  assert.equal(program.sources, true);
  assert.equal(program.handouts, false);
  assert.equal(StudyPrograms.get("firefighter-2").tests, false, "Fire Fighter II stays off until its questions arrive");
});

test("every record keeps its printed number, matched key, pages, photos, and source-provided answer", () => {
  EXAMS.forEach((expected) => {
    const questions = examQuestions(expected.id);
    assert.equal(questions.length, 150, expected.id);
    const numbers = questions.map((q) => q.originalNumber).sort((a, b) => a - b);
    assert.deepEqual(plain(numbers), Array.from({ length: 150 }, (_, i) => i + 1), expected.id);
    questions.forEach((q) => {
      assert.equal(q.id, expected.prefix + "-" + q.originalNumber);
      assert.equal(q.sourceId, FF1);
      assert.equal(q.programId, "firefighter-1");
      assert.equal(q.examId, expected.id);
      assert.equal(q.examLevel, null, q.id + " has no awareness/operations level");
      assert.equal(q.answerKeyNumber, q.originalNumber);
      assert.match(q.keyHeader, new RegExp("^" + q.originalNumber + "[.,]?\\s"), q.id);
      assert.ok(q.sourcePage >= expected.questionPages[0] && q.sourcePage <= expected.questionPages[1], q.id + " question page " + q.sourcePage);
      assert.ok(q.keyPage >= expected.keyPages[0] && q.keyPage <= expected.keyPages[1], q.id + " key page " + q.keyPage);
      assert.match(q.sourcePhoto, /^IMG_\d+\.jpg$/, q.id);
      assert.match(q.keyPhoto, /^IMG_\d+\.jpg$/, q.id);
      assert.ok(q.originalSourceText.startsWith(q.originalNumber + ". "), q.id + " source text");
      assert.equal(q.standard, "NFPA 1001");
      assert.equal(q.answerIndependentlyVerified, false);
      assert.ok(["A", "B", "C", "D"].includes(q.sourceAnswerLetter), q.id + " key letter");
      assert.equal(q.correctChoiceId, q.sourceAnswerLetter, q.id + " graded letter is the key letter");
      assert.equal(TestEngine.hasCompleteChoices(q), true, q.id);
      const refs = q.references.map((r) => r.text);
      assert.ok(refs.length >= 2, q.id + " has citations");
      assert.match(refs[0], /^NFPA 1010, /, q.id + " first citation is the NFPA 1010 section");
      refs.forEach((text) => {
        assert.doesNotMatch(text, /1072|Hazardous Materials for First Responders|Awareness and Operations/, q.id + " must not inherit HazMat references");
      });
      assert.ok(refs.some((t) => /^IFSTA, Essentials of Fire Fighting, 8th Edition, Firefighter 1, /.test(t)) ||
        refs.some((t) => /^Jones and Bartlett, Fundamentals of Fire Fighter Skills and Hazardous Materials Response, 5th Edition, /.test(t)), q.id + " has a textbook citation");
    });
  });
});

test("import counts: 450 eligible, none held, printed section mismatches flagged but still scorable", () => {
  const report = HazmatCatalog.bookReport(FF1);
  assert.equal(report.sourceId, FF1);
  assert.equal(report.imported, 450);
  assert.equal(report.eligible, 450);
  assert.equal(report.distinctEligible, 450);
  assert.equal(report.held, 0);
  assert.equal(report.needsReview, 48);
  EXAMS.forEach((expected) => {
    const exam = HazmatCatalog.bookExamById(expected.id);
    const r = HazmatCatalog.examReport(exam);
    assert.equal(r.imported, 150, expected.id);
    assert.equal(r.keysMatched, 150, expected.id);
    assert.equal(r.keyAnswersReadable, 150, expected.id);
    assert.equal(r.eligible, 150, expected.id);
    assert.equal(r.held, 0, expected.id);
    assert.equal(r.needsReview, expected.flagged, expected.id + " flagged");
    assert.equal(r.missingIllustrations, 0, expected.id);
    assert.equal(r.duplicateConflicts, 0, expected.id);
  });
  const flagged = ff1Source().questions.filter((q) => q.reviewStatus === "needs_review");
  flagged.forEach((q) => {
    assert.ok(q.issues.length, q.id + " flagged items explain why");
    assert.match(q.issues[0].summary, /key header cites section .* Reference line prints/, q.id);
    assert.equal(TestEngine.isEligible(q), true, q.id + " flagged items stay in tests");
  });
  // The book's own inconsistencies, kept as printed.
  const byId = HazmatCatalog.byId;
  assert.match(byId["ff1-i1-76"].issues[0].excerpt, /6\.3\.02 .* 6\.3\.3/);
  assert.match(byId["ff1-i2-30"].issues[0].excerpt, /6\.3\.08 .* 6\.3\.10/);
  assert.match(byId["ff1-i3-84"].issues[0].excerpt, /6\.3\.18 .* 6\.18/);
});

test("an item with a missing choice, an unreadable key, or a missing figure is held out of scored tests", () => {
  const bank = ExamPrepBank.createExam({
    source: ExamPrepBank.FIRE_FIGHTER_1_SOURCE,
    examId: "ff1-exam-test", examLabel: "Test", shortLabel: "Test", idPrefix: "ff1-test"
  });
  const held = bank.rec({ n: 1, key: "1. 6.1.1 GEN KNOWLEDGE 1", q: "Stem", c: ["a", "b", "c", "d"], a: "B", r: ["6.1.1", "page 1.", "page 2."], o: "1. Stem", hold: true,
    issues: [{ summary: "Choice D could not be read.", correction: "Re-check the page." }] });
  assert.equal(held.sourceId, FF1);
  assert.equal(held.reviewStatus, "unresolved");
  assert.equal(held.correctChoiceId, null);
  assert.equal(held.sourceAnswerLetter, "B", "the key letter is kept for the review inventory");
  assert.equal(TestEngine.isEligible(held), false);
  assert.equal(TestEngine.gradeQuestion(held, "B").graded, false);

  const noKey = bank.rec({ n: 2, key: "2. 6.1.1 GEN KNOWLEDGE 2", q: "Stem", c: ["a", "b", "c", "d"], a: null, r: ["6.1.1"], o: "2. Stem" });
  assert.equal(TestEngine.isEligible(noKey), false);

  const needsFigure = bank.rec({ n: 3, key: "3. 6.3.20 HOIST KNOTS 1", q: "The _____ is tied as illustrated below:", c: ["a", "b", "c", "d"], a: "D", r: ["6.3.20"], o: "3.",
    image: { description: "A knot drawing." } });
  assert.equal(TestEngine.isEligible(needsFigure), false, "no asset, not scorable");

  const withFigure = bank.rec({ n: 4, key: "4. 6.3.20 HOIST KNOTS 2", q: "The _____ is tied as illustrated below:", c: ["a", "b", "c", "d"], a: "D", r: ["6.3.20"], o: "4.",
    image: { description: "A knot drawing.", file: "ff1-i3-106-knot.jpg", alt: "A knot.", redrawn: false } });
  assert.equal(TestEngine.isEligible(withFigure), true);
  assert.equal(withFigure.illustration.redrawn, false);

  const flagged = bank.rec({ n: 5, key: "5. 6.1.1 GEN KNOWLEDGE 5", q: "Stem", c: ["a", "b", "c", "d"], a: "A", r: ["6.1.1"], o: "5.", status: "needs_review",
    issues: [{ summary: "Printed oddity." }] });
  assert.equal(TestEngine.isEligible(flagged), true, "flagged items stay scorable");
});

test("question 106 of Examination I-3 shows the book's own knot figure", () => {
  const q = HazmatCatalog.byId["ff1-i3-106"];
  assert.ok(q.illustration && q.illustration.required);
  assert.equal(q.illustration.asset, "assets/illustrations/ff1-i3-106-knot.jpg");
  assert.equal(q.illustration.redrawn, false, "a crop of the printed figure, not a redrawing");
  assert.ok(existsSync(join(root, q.illustration.asset)), "the figure file is in the project");
  assert.ok(q.illustration.alt && !/bowline|sheet bend|clove|figure-eight/i.test(q.illustration.alt), "alt text does not name the answer");
  assert.equal(TestEngine.isEligible(q), true);
  assert.equal(q.sourcePage, 61);
  const others = ff1Source().questions.filter((x) => x.illustration && x.id !== q.id);
  assert.equal(others.length, 0, "no other Fire Fighter I item depends on a figure");
});

test("Fire Fighter I pools never mix with HazMat and the book filter works per program", () => {
  const pools = HazmatCatalog.poolsForSources([FF1], { bookFilter: "all", levelFilter: "both" });
  assert.equal(pools.length, 1);
  assert.equal(pools[0].programId, "firefighter-1");
  assert.equal(TestEngine.countEligible(pools), 450);
  pools[0].questions.forEach((q) => assert.equal(q.sourceId, FF1));

  const rng = TestEngine.lcg(7);
  const full = TestEngine.generateTest(pools, 150, rng);
  assert.equal(full.ok, true);
  assert.equal(full.questions.length, 150);
  assert.equal(new Set(full.questions.map((q) => q.id)).size, 150);
  full.questions.forEach((q) => assert.equal(q.programId, "firefighter-1"));
  assert.equal(TestEngine.generateTest(pools, 451, rng).ok, false, "cannot exceed the bank");

  assert.deepEqual(plain(HazmatCatalog.bookFilterOptions(FF1).map((o) => o.value)), ["all", "ff1-exam-i1", "ff1-exam-i2", "ff1-exam-i3"], "no awareness/operations groups for this book");
  assert.deepEqual(plain(HazmatCatalog.examIdsForBookFilter("ff1-exam-i2", FF1)), ["ff1-exam-i2"]);
  assert.equal(HazmatCatalog.normalizeBookFilter(["ff1-exam-i1", "ff1-exam-i2", "ff1-exam-i3"], FF1), "all");
  assert.deepEqual(plain(HazmatCatalog.normalizeBookFilter(["ff1-exam-i3", "ff1-exam-i1"], FF1)), ["ff1-exam-i1", "ff1-exam-i3"]);
  assert.equal(HazmatCatalog.bookFilterLabel(["ff1-exam-i1", "ff1-exam-i3"], FF1), "Examinations I-1, I-3");
  assert.equal(HazmatCatalog.bookQuestionsForFilter("ff1-exam-i2", FF1).length, 150);
  assert.deepEqual(plain(HazmatCatalog.examIdsForBookFilter("awareness", FF1)), [], "HazMat level groups mean nothing here");
  assert.deepEqual(plain(HazmatCatalog.examIdsForBookFilter("ff1-exam-i1")), [], "a Fire Fighter I exam id is not a HazMat book filter");

  const scoped = HazmatCatalog.poolsForSources([FF1], { bookFilter: ["ff1-exam-i1", "ff1-exam-i3"], levelFilter: "both" });
  assert.equal(TestEngine.countEligible(scoped), 300);
  const drawn = TestEngine.generateTest(scoped, 100, TestEngine.lcg(3)).questions;
  assert.ok(drawn.every((q) => q.examId !== "ff1-exam-i2"));
  assert.ok(drawn.some((q) => q.examId === "ff1-exam-i1") && drawn.some((q) => q.examId === "ff1-exam-i3"));

  const mixed = HazmatCatalog.poolsForSources([HANDOUTS, HAZMAT_BOOK, FF1], { bookFilter: "all", levelFilter: "both" });
  assert.equal(mixed.length, 3, "the catalog itself can serve all three; the builder only offers one program at a time");
  HazmatCatalog.duplicateGroups.forEach((group) => {
    const programs = new Set(group.sourceIds.map((id) => HazmatCatalog.programForSource(id)));
    assert.equal(programs.size, 1, "duplicate group " + group.id + " spans programs");
  });
});

test("scoring uses the book's key letter and a restored session remembers its program", () => {
  const questions = examQuestions("ff1-exam-i1").slice(0, 25);
  const perfect = {};
  questions.forEach((q) => { perfect[q.id] = q.correctChoiceId; });
  const grade = TestEngine.gradeTest(questions, perfect);
  assert.equal(grade.percentage, 100);
  assert.equal(grade.correct, 25);
  const wrong = {};
  questions.forEach((q) => { wrong[q.id] = q.correctChoiceId === "A" ? "B" : "A"; });
  assert.equal(TestEngine.gradeTest(questions, wrong).correct, 0);

  const saved = TestEngine.serializeSession({
    questions, answers: perfect, index: 3, mode: "practice", programId: "firefighter-1",
    sourceIds: [FF1], bookFilter: "ff1-exam-i1", requestedCount: 25, inProgress: true
  });
  assert.equal(saved.programId, "firefighter-1");
  const restored = TestEngine.restoreSession(JSON.parse(JSON.stringify(saved)), HazmatCatalog.byId);
  assert.equal(restored.programId, "firefighter-1");
  assert.deepEqual(plain(restored.questions.map((q) => q.id)), plain(questions.map((q) => q.id)));
  assert.equal(restored.bookFilter, "ff1-exam-i1");
});

test("the HazMat catalog is unchanged by the second book", () => {
  assert.equal(HazmatCatalog.sources[0].id, HANDOUTS);
  assert.equal(HazmatCatalog.sources[1].id, HAZMAT_BOOK);
  assert.equal(HazmatCatalog.bookSourceId, HAZMAT_BOOK);
  assert.equal(HazmatCatalog.bookExams.length, 6);
  const report = HazmatCatalog.bookReport();
  assert.equal(report.sourceId, HAZMAT_BOOK);
  assert.equal(report.imported, 450);
  assert.equal(report.eligible, 412);
  assert.equal(report.distinctEligible, 319);
  assert.equal(report.held, 38);
  assert.deepEqual(plain(HazmatCatalog.bookFilterOptions().map((o) => o.value).slice(0, 3)), ["all", "awareness", "operations"]);
  assert.equal(HazmatCatalog.normalizeBookFilter(["awareness-i1", "awareness-i2", "awareness-i3"]), "awareness");
  const hazmatPools = HazmatCatalog.poolsForSources([HANDOUTS, HAZMAT_BOOK], { bookFilter: "all", levelFilter: "both" });
  hazmatPools.forEach((pool) => pool.questions.forEach((q) => assert.notEqual(q.sourceId, FF1)));
  HazmatCatalog.sourceById(HAZMAT_BOOK).questions.forEach((q) => {
    assert.equal(q.programId, "hazmat");
    assert.equal(q.standard, "NFPA 1072");
  });
  HazmatCatalog.sourceById(HANDOUTS).questions.forEach((q) => assert.equal(q.programId, "hazmat"));

  const html = readFileSync(join(root, "index.html"), "utf8");
  ["ff1-i1", "ff1-i2", "ff1-i3"].forEach((name) => {
    const at = html.indexOf(`src="js/exam-prep-${name}.js"`);
    assert.ok(at > 0 && at < html.indexOf('src="js/catalog.js"'), name + " loads before the catalog");
  });
});
