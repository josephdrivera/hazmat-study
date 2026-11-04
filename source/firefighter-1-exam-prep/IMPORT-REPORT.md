# Fire Fighter I exam-prep import report

Date: 2026-11-04
Source: PTS Publications, *Exam Prep: Fire Fighter I*, Seventh Edition (2025). 159 photographs (IMG_3016.jpg to IMG_3176.jpg, pages xi to 168), the OCR transcript built from them, and the searchable scan.
Basis: a private study copy of a book its owner holds. The deployment is to stay access-restricted; nothing here establishes publication rights.

## Counts

| Exam | Expected | Questions verified | Keys verified | Records written | Eligible | Flagged, still in tests | Held out |
| --- | --- | --- | --- | --- | --- | --- | --- |
| I-1 (pages 5-24, key 87-111) | 150 | 150 | 150 | 150 | 150 | 2 | 0 |
| I-2 (pages 27-45, key 115-140) | 150 | 150 | 150 | 150 | 150 | 45 | 0 |
| I-3 (pages 49-67, key 143-168) | 150 | 150 | 150 | 150 | 150 | 1 | 0 |
| Total | 450 | 450 | 450 | 450 | 450 | 48 | 0 |

Distinct eligible questions: 450 (no exact duplicates within the book, none shared with the HazMat banks). Missing numbers: none. Duplicate numbers: none. Key conflicts: none.

## How it was verified

1. The OCR transcript was parsed into draft JSON (`ocr-draft/`) with per-item flags. The draft flagged 143 questions (missing or duplicated choice labels, interleaved columns, dropped blanks) and 30 key entries (missing or doubled Answer lines, garbled citations). The draft is never loaded by the site.
2. Every printed question page and key page was read from its photograph (three overlapping bands per page at 1600 px, plus half-page crops) and recorded page by page in `verified/`. Examination I-1 and I-3 questions were checked by the main session; I-2 questions and all three answer keys were checked by transcription agents, and the four answer letters they changed from the draft were re-checked against the photographs by the main session.
3. Answers were matched by exam and printed question number only. No letter was copied between questions or exams.
4. `scripts/build-ff1-exams.mjs` generated the three exam files from `verified/` plus `review.json`. `--check` is part of the test suite.

## OCR corrections

The draft disagreed with the photographs on 4 answer letters, all caused by two key entries merging into one in the OCR:

| Exam | Entry | Draft | Photograph |
| --- | --- | --- | --- |
| I-2 | 105 | D | C |
| I-2 | 143 | A | C |
| I-3 | 71 | B | A |
| I-3 | 123 | C | D |

The draft also lacked a readable answer for I-1 50; I-2 11, 106, 144; I-3 23, 55, 60, 62, 85, 109, 110, 113, 120, 133, 144, 145. All were read from the photographs.

Question-side corrections (roughly 230 across the three exams) were of these kinds: choices listed under the wrong question because the OCR read two-column choices row by row; dropped choice labels; fill-in blanks dropped from stems; wrapped choices split in two; misread letters (`dathering`, `Eneraized`, `belayıng`); truncated words (`double t` for `double hitch.`); and trailing periods. Two choices were restored from the photograph that the draft had lost entirely (I-1 6A, I-2 89A-C). Every stem and choice in the verified files appears in the OCR draft except the handful of misreads listed in the per-page `ocrCorrections` and `notes` fields.

## Items flagged but still in tests (48)

The book prints one NFPA 1010 section number in a key heading and a different one in that entry's Reference line. Both numbers are kept as printed and the item carries an issue note in content review:

- I-1 entries 76 and 77: heading 6.3.02, Reference 6.3.3.
- I-2 entries 30 to 73: heading 6.3.08, Reference 6.3.10 (44 entries).
- I-2 entry 147: heading 6.3.12, Reference 6.3.11.
- I-3 entry 84: heading 6.3.18, Reference 6.18.

Other printed oddities kept as printed and noted on the record (not flagged): I-1 71 stem ("types in Is use"), I-1 64 stem has no blank where one is implied, I-1 66 choice C printed on a line marked "qq", I-3 70 "fluoroidiocarbons", I-3 107 "bright", I-3 141 double period, several choices without a trailing period, I-3 117-122 topic "AIR MONITORNG", I-3 114 Reference "6.3,20", I-2 key entries 92 and 93 "pages 363, 363", I-1 key 19 Jones and Bartlett citation ends at "page" with no number.

## Illustrations

One item depends on a figure: I-3 question 106, the knot drawing on printed page 61. A cropped photograph of the book's figure (`assets/illustrations/ff1-i3-106-knot.jpg`) is attached, marked as not redrawn, with alt text that does not name the answer. No other Fire Fighter I item refers to a figure, table, or picture.

## Page gaps

Printed pages 4, 26, 46, 48, 68, 72, 78, 84, 86, 112, 114, and 142 were not photographed. Joseph confirmed from the physical book on 2026-11-04 that all twelve are blank. The exam and key boundaries confirmed from the photographs are: I-1 questions 5-24 and keys 87-111; I-2 questions 27-45 and keys 115-140; I-3 questions 49-67 (150 is on page 67) and keys 143-168.

## Unresolved items

None. Every one of the 450 items has a complete stem, four labeled choices, a readable key letter, and its citations. Nothing needs a re-photograph.

## Site integration

- New source `fire-fighter-1-exam-prep` under program `firefighter-1`, standard NFPA 1001, citations NFPA 1010 / IFSTA Essentials 8th / Jones and Bartlett Fundamentals 5th. Nothing inherited from the HazMat source.
- The test builder, study mode, content review, resume banner, and dashboard are scoped to the program on screen. A session records its program; the resume banner shows only on that program's home.
- HazMat records, ids, report counts (450 imported, 412 eligible, 319 distinct, 38 held), saved answers, and in-progress tests are unchanged. Older saved builder choices migrate to the HazMat slot.
- Tests: 39 pass (`node --test`), including build freshness, transcription completeness, registration, isolation, key matching, illustration gating, unresolved exclusion, scoring, session program, and HazMat preservation.
- Browser-checked locally: program switching, each exam in study mode, builder with one and three exams, a 10-question practice test, instant feedback with citations, submit, results, Full Review, content review, persistence after reload, resume banner per program, HazMat test with both sources and the Operations level, phone width.
- Not done, by instruction: no deploy, no push, no commit. Fire Fighter II stays off. The academy midterm is not imported (not supplied).
