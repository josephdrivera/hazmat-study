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
  questions.js      100-question data bank (Quiz #1 + #2)
  app.js            Application logic (study, exam, scoring, localStorage)
  validate.js       Dev-only data integrity checks
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
