/**
 * programs.js — The study programs the portal can switch between.
 *
 * A program groups a set of question sources (handouts, exam-prep books),
 * a chapter library under content/<id>/, a glossary filter, and a resource
 * list. `sources` says the program has question banks to study; `handouts`
 * says one of them is the instructor handout packet; `tests` turns on the
 * practice-test builder. `hidden` keeps a program's data in place but takes
 * it out of the header switch and search. Fire Fighter II is hidden until it
 * is in use.
 */
(function () {
  "use strict";

  var list = [
    {
      id: "hazmat",
      short: "HazMat",
      label: "Hazardous Materials",
      sub: "Awareness / Operations",
      eyebrow: "Hazardous Materials · Awareness / Operations",
      lede: "Hartford County Regional Fire School handouts and the PTS exam-prep book, in one place. Study by quiz or exam, read the chapter notes, or build a practice test from any mix.",
      accent: "amber",
      standards: "NFPA 472 · NFPA 1072 / 470",
      tests: true,
      sources: true,
      handouts: true,
      chapterRange: "Chapters 29 to 36 of the collected textbook",
      testsDesc: "Pick sources, book exams, and a level. 10 to 150 questions, each used once. Practice shows the answer as you go. Exam hides it until you submit.",
      testsNote: ""
    },
    {
      id: "firefighter-1",
      short: "Fire Fighter I",
      label: "Fire Fighter I",
      sub: "NFPA 1001",
      eyebrow: "Fire Fighter I · NFPA 1001",
      lede: "The three Fire Fighter I exam-prep examinations from the PTS book, with the book's own answer keys, plus chapter notes from the collected textbook and the midterm question ranges for each chapter.",
      accent: "ember",
      standards: "NFPA 1001 / 1010",
      tests: true,
      sources: true,
      handouts: false,
      chapterRange: "Chapters 1 to 27 of the collected textbook",
      testsDesc: "Pick one, two, or all three book examinations. 10 to 150 questions, each used once. Practice shows the book's answer as you go. Exam hides it until you submit.",
      testsNote: ""
    },
    {
      id: "firefighter-2",
      hidden: true, // kept for later; not shown in the header until its course material is in use
      short: "Fire Fighter II",
      label: "Fire Fighter II",
      sub: "NFPA 1001",
      eyebrow: "Fire Fighter II · NFPA 1001",
      lede: "Fire Fighter II chapters as the course reaches them. One chapter is in the library so far.",
      accent: "ember",
      standards: "NFPA 1001 / 1010",
      tests: false,
      sources: false,
      handouts: false,
      chapterRange: "Chapter 28 of the collected textbook",
      testsNote: "Practice tests for Fire Fighter II will be added when its exam questions are supplied."
    }
  ];

  var byId = {};
  list.forEach(function (program) { byId[program.id] = program; });

  globalThis.StudyPrograms = {
    list: list,
    visible: list.filter(function (program) { return !program.hidden; }),
    byId: byId,
    defaultId: "hazmat",
    get: function (id) { return byId[id] || byId["hazmat"]; }
  };
})();
