/**
 * Release notes shown on the home screen and in the "What's new" splash.
 *
 * HOW TO SHIP AN UPDATE
 *   1. Add a new entry to the TOP of `versions` below.
 *   2. Bump the version number (MAJOR.MINOR.PATCH):
 *        - PATCH  typo fixes, small corrections to question text or keys
 *        - MINOR  new questions, new features, new illustrations
 *        - MAJOR  a change that resets or breaks saved progress
 *   3. Use today's date (YYYY-MM-DD) and write the items for students,
 *      not developers — say what changed for them.
 *   4. Run `node --test test/practice.test.js`; the changelog test checks
 *      the ordering, date format, and version format.
 *
 * The splash appears once per version. It is keyed on `current`, so a
 * visitor sees the newest entry the first time they load the site after
 * a release, then not again until the version changes.
 */
(function () {
  "use strict";

  var versions = [
    {
      version: "1.4.0",
      date: "2026-10-12",
      title: "Update notes and a what's-new message",
      items: [
        "Added this Updates section to the home screen so you can see what changed in each release.",
        "A short what's-new message now appears the first time you open the site after an update.",
        "The current version number is shown at the bottom of the home screen."
      ]
    },
    {
      version: "1.3.0",
      date: "2026-10-12",
      title: "Placards, labels, and cargo tank drawings",
      items: [
        "Added standardized drawings for the DOT placards, the Radioactive Yellow-III label, the NFPA 704 diamond, and the MC 306/307/312/331 cargo tanks that the exam-prep questions refer to.",
        "13 exam-prep questions that depend on a picture are now scorable in practice tests (I-1 #7, 26, 27, 28, 45, 54, 56, 57, 68; I-2 #3, 20; I-3 #32, 33).",
        "Hazardous Materials Exam Prep now has 412 scorable records, 319 distinct questions."
      ]
    },
    {
      version: "1.2.0",
      date: "2026-10-10",
      title: "100-question practice tests",
      items: [
        "Added a Generate 100 Questions button alongside the 10, 50, and 150 options.",
        "When a source has fewer questions than requested, the generator shows the available count and offers to generate all of them."
      ]
    },
    {
      version: "1.1.0",
      date: "2026-10-09",
      title: "All six exam-prep examinations and every handout quiz",
      items: [
        "Imported Hazardous Materials Exam Prep Examinations I-1, I-2, I-3, II-1, II-2, and II-3 with their answer keys.",
        "Added the remaining Instructor Handout quizzes (Quiz #3 through #14) for a total of 642 handout questions.",
        "Practice tests can draw from the handouts, the exam-prep book, or both, with a filter for individual book exams.",
        "Questions that repeat across exams are grouped so they never appear twice in one test.",
        "Added a Content review page that lists every held or flagged question and why."
      ]
    },
    {
      version: "1.0.0",
      date: "2026-10-04",
      title: "First release",
      items: [
        "Study mode for Instructor Handout Quiz #1 and Quiz #2.",
        "Practice and exam modes with scoring, missed-question review, and saved progress."
      ]
    }
  ];

  var changelog = {
    versions: versions,
    current: versions[0].version,
    latest: versions[0]
  };

  if (typeof globalThis !== "undefined") globalThis.HazmatChangelog = changelog;
  if (typeof window !== "undefined") window.HazmatChangelog = changelog;
})();
