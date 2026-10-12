# HazMat Awareness / Operational — 100-Question Academy Practice

Study tool for Hartford County Regional Fire School Hazardous Materials Awareness / Operational material. Built for firefighter academy students preparing for the state exam.

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
styles.css          All styles
js/
  changelog.js      Release notes (version, date, items) — newest first
  questions.js      Instructor handout question bank
  exam-prep-*.js    Exam-prep book examinations I-1 … II-3
  catalog.js        Groups sources, exams, and duplicate questions
  test-engine.js    Test generation, eligibility, and scoring
  app.js            Application logic (study, exam, scoring, localStorage)
  validate.js       Dev-only data integrity checks
assets/illustrations/  Redrawn placards, labels, and cargo tank SVGs
source/
  *.pdf             Instructor-provided source PDF (not served to users)
```

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
4. Run `node --test test/practice.test.js`; the changelog test checks ordering, uniqueness, and formats.
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

Saved progress is stored in `localStorage` under the key `hazmat-study-v1`.

To clear in browser DevTools console:

```js
localStorage.removeItem("hazmat-study-v1");
```

Or use the "Clear Saved Progress" button on the home screen.

## Data Validation

To run integrity checks on the question bank, append `?validate=1` to the URL or call `window.__hazmatValidate()` in the browser console. This checks for duplicate IDs, missing fields, invalid answer keys, and count mismatches.
