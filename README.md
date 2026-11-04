# Academy Study — HazMat, Fire Fighter I, and Fire Fighter II

Study portal for Hartford County Regional Fire School material. Built for firefighter academy students preparing for the state exams. Three programs share one shell: HazMat Awareness / Operations (instructor handouts, the PTS exam-prep book, practice tests), Fire Fighter I (the PTS exam-prep book's three examinations, chapter notes, practice tests), and Fire Fighter II (chapter notes, with practice questions to follow).

This is a private study copy. The deployment is meant to stay access-restricted to its owner; the exam-prep banks are transcribed from books the owner holds and are not for public distribution.

Every question and answer key is taken word for word from its printed source. Chapter notes are study aids written from the collected textbook chapters and are labeled as such.

## Running Locally

No build step required. Open `index.html` directly in a browser, or serve it:

```bash
# Option A: Python
python3 -m http.server 8080

# Option B: npx
npx serve .

# Option C: VS Code Live Server extension
```

Then visit `http://localhost:8080`.

## File Structure

```
index.html          Main page (single-page app, all views)
styles.css          All styles, light and dark themes
js/
  changelog.js      Release notes (version, date, items) — newest first
  programs.js       The three programs the header switches between
  questions.js      Instructor handout question bank (HazMat)
  exam-prep-i*.js, exam-prep-ii*.js   HazMat exam-prep book, Examinations I-1 … II-3 (hand-written records)
  exam-prep-ff1-*.js                   GENERATED Fire Fighter I exam-prep book, Examinations I-1 … I-3
                                       (run scripts/build-ff1-exams.mjs)
  catalog.js        Groups sources, exams, and duplicate questions
  test-engine.js    Test generation, eligibility, and scoring
  markdown.js       Small Markdown renderer for chapter and resource pages
  content.js        GENERATED bundle of content/ (run scripts/build-content.mjs)
  portal.js         Shell: theme, program switch, dashboard, chapters, glossary, resources, search
  app.js            HazMat study, practice tests, results, report, localStorage
  validate.js       Dev-only data integrity checks
content/
  firefighter-1/    chapter-NN.md, one per textbook chapter
  firefighter-2/    chapter-28.md
  hazmat/           chapter-29.md … chapter-36.md
  resources/        Reference pages (*.md) and links.json (verified external links)
  glossary/         terms.json
scripts/
  build-content.mjs      Bundles content/ into js/content.js
  build-ff1-exams.mjs    Builds js/exam-prep-ff1-*.js from source/firefighter-1-exam-prep/
  ff1-import/parse-ocr.mjs  First-pass parser for the book's OCR transcript (draft only)
assets/illustrations/  Redrawn placards, labels, and cargo tank SVGs (HazMat); a cropped
                       photograph of the knot figure for Fire Fighter I I-3 question 106
source/
  website-brief-*.md            The class brief
  firefighter-1-exam-prep/      Fire Fighter I import: ocr-draft/ (parser output, untrusted),
                                verified/ (page-by-page transcription checked against the photos),
                                review.json (illustration assets, source notes), IMPORT-REPORT.md
test/
  practice.test.js      HazMat banks, filters, generation, grading
  firefighter1.test.js  Fire Fighter I import, program isolation, scoring
  content.test.js       Chapter, glossary, resource, and markdown checks
```

## Chapter Notes, Glossary, and Resources

Study content lives in `content/` as Markdown with a small front-matter block (see any `chapter-NN.md`). `status` is one of `notes`, `starter`, or `needs-materials` and is shown on every card, so an unfinished chapter never looks complete. `verify` lists wording that still needs checking against the source; it renders as a red "Needs verification" box.

After editing anything under `content/`, rebuild the bundle:

```bash
node scripts/build-content.mjs
```

The test suite fails if `js/content.js` is out of date. External links go in `content/resources/links.json` with the date they were last checked.

## Fire Fighter I Exam-Prep Import

The three Fire Fighter I examinations come from photographs of the PTS book (not in this repo). The pipeline is:

1. `scripts/ff1-import/parse-ocr.mjs <extracted-text.md> source/firefighter-1-exam-prep/ocr-draft` turns the OCR transcript into draft JSON with per-item flags. The draft is never loaded by the site.
2. Each printed page was checked against its photo and recorded in `source/firefighter-1-exam-prep/verified/*.json` (questions by page, Appendix A key entries by page). Answers are matched by exam and printed question number, never by position.
3. `source/firefighter-1-exam-prep/review.json` holds editorial decisions: illustration assets, source notes, and any item to hold out of scored tests.
4. `node scripts/build-ff1-exams.mjs` writes `js/exam-prep-ff1-i1.js`, `-i2.js`, `-i3.js`. `--check` exits 1 when they are stale; the tests run it.

An item with a missing choice, an unreadable key letter, or a figure without an attached asset is written as `unresolved` and stays out of scored tests. Key entries whose heading and Reference line print different NFPA section numbers are `needs_review`: still in tests, listed in content review, nothing corrected.

## Where Question Data Lives

All 100 questions are in `js/questions.js` as the `QUESTION_BANK` array. Each question object contains:

- `id` — Global sequential ID (1–100)
- `quiz` — Quiz number (1 or 2)
- `quizTitle` — Quiz title string
- `originalNumber` — Question number within its quiz (1–50)
- `level` — Exact Level string from the PDF
- `objective` — Exact Objective string from the PDF
- `question` — Question text
- `choices` — Object with A, B, C, D keys
- `correctAnswer` — Letter of the correct answer

## Adding Another Quiz Later

1. Open `js/questions.js`
2. Add new question objects to the `QUESTION_BANK` array
3. Use `id` values starting from 101, set `quiz: 3`, set `quizTitle`
4. Update the filter dropdowns in `index.html` to include Quiz #3
5. Update the home screen quiz links section
6. Update the exam logic if the exam should include the new quiz

## Shipping an Update

Every change that reaches users gets a version number and an entry in `js/changelog.js`. The home screen shows the entries under **Updates**, and the newest entry is shown once as a "What's new" splash the first time someone loads the site after a release (tracked per browser in `localStorage` under `hazmat-study-seen-version`).

1. Add a new object to the **top** of the `versions` array in `js/changelog.js`.
2. Bump the version (`MAJOR.MINOR.PATCH`):
   - `PATCH` — typo fixes, corrections to question text or answer keys
   - `MINOR` — new questions, features, or illustrations
   - `MAJOR` — anything that resets or breaks saved progress
3. Set `date` to today (`YYYY-MM-DD`) and write `items` for students — what changed for them.
4. Run `node --test`; the changelog test checks ordering, uniqueness, and formats.
5. Commit and push. The splash shows automatically because its key is the current version.

## Deploying to Vercel

This is a static site with no build step.

**Option A: Import Git repo**
1. Push this repo to GitHub
2. Import the repo on [vercel.com/new](https://vercel.com/new)
3. No framework preset needed — Vercel auto-detects static files
4. Deploy

**Option B: Drag and drop**
1. Visit [vercel.com/new](https://vercel.com/new)
2. Drag the project folder into the deploy area
3. Done

No environment variables or external services are required.

## Clearing Local Data (Development)

HazMat study answers and the practice-test session are stored in `localStorage` under `hazmat-study-v1` (unchanged since 1.x, so progress survives the 2.0 redesign). The active program, chapter progress, recent chapters, and test history are under `academy-study-v2`; the theme choice is under `academy-study-theme`.

To clear in browser DevTools console:

```js
localStorage.removeItem("hazmat-study-v1");
localStorage.removeItem("academy-study-v2");
```

Or use the "Clear Saved Progress" button on the home screen.

## Data Validation

To run integrity checks on the question bank, append `?validate=1` to the URL or call `window.__hazmatValidate()` in the browser console. This checks for duplicate IDs, missing fields, invalid answer keys, and count mismatches.
