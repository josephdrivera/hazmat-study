/**
 * Hazardous Materials Awareness — Examination I-1
 *
 * Source: PTS Publications exam prep, Seventh Edition 2022.
 * 75 items plus the book answer key. Answers are source-provided and have
 * not been independently verified. Add another exam by pushing another
 * array onto EXAM_PREP_EXAMS before catalog.js loads.
 *
 * reviewStatus:
 *   source_imported — readable item; still not independently verified
 *   needs_review    — usable in a scored test, with a flagged citation or wording
 *   unresolved      — excluded from scored tests until corrected
 */
(function () {
  "use strict";

  var EXAM_ID = "awareness-i1";
  var bank = globalThis.ExamPrepBank.createExam({
    examId: EXAM_ID,
    examLabel: "Hazardous Materials Awareness — Examination I-1",
    shortLabel: "Examination I-1",
    level: "awareness",
    idPrefix: "exam-i1"
  });
  var SOURCE_ID = bank.sourceId;
  var item = bank.item;
  var choices = bank.choices;
  var cite = bank.cite;
  var image = bank.image;
  var nfpa = bank.nfpa;
  var ifsta = bank.ifsta;
  var jb = bank.jb;

  var questions = [
    item({
      n: 1,
      keyHeader: "1. 4.2.1 RECOGNIZE & ID 2",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "2",
      question: "The two types of potential hazards found in each guide of the Emergency Response Guidebook are:",
      choices: choices(
        "reactivity and solubility.",
        "spill and leak.",
        "corrosive and flammable.",
        "health and fire."
      ),
      answer: "D",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-11) (B-7), 4.3.1 (A-1-3) (B-1-5), 5.3.1 (A-6) (B-1)."),
        cite(jb + ", page 37. Fig. 2-28"),
        cite(ifsta + ", page 119.")
      ],
      original: "1. The two types of potential hazards found in each guide of the Emergency Response Guidebook are: A. reactivity and solubility. B. spill and leak. C. corrosive and flammable. D. health and fire."
    }),
    item({
      n: 2,
      keyHeader: "2. 4.2.1 RECOGNIZE & ID 7",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "7",
      question: "The fact that a product is water reactive would be indicated in the _____ quadrant of the National Fire Protection Association 704 System.",
      choices: choices("blue", "red", "white", "yellow"),
      answer: "C",
      eligible: true,
      status: "needs_review",
      notes: ["A blank was restored where a word is missing between \"the\" and \"quadrant.\" The missing word was not guessed."],
      issues: [{
        summary: "The stem is missing the word before \"quadrant.\"",
        excerpt: "would be indicated in the quadrant of the National Fire Protection Association 704 System.",
        correction: "Confirm the printed stem. A blank was inserted; the missing word was not filled in."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-4) (B-5)."),
        cite(jb + ", page 28. Table 2-1"),
        cite(ifsta + ", page 87.")
      ],
      original: "2. The fact that a product is water reactive would be indicated in the quadrant of the National Fire Protection Association 704 System. A. blue B. red C. white D. yellow"
    }),
    item({
      n: 3,
      keyHeader: "3. 4.2.1 RECOGNIZE & ID 8",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "8",
      question: "United Nations/Department of Transportation placards indicate general hazard recognition by:",
      choices: choices(
        "using the numbers 0-4 to indicate relative risk.",
        "always indicating the product name.",
        "giving the UN hazard class number.",
        "the shape of the placard."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-4) (B-5)."),
        cite(jb + ", pages 34-35."),
        cite(ifsta + ", pages 73, 77.")
      ],
      original: "3. United Nations/Department of Transportation placards indicate general hazard recognition by: A. using the numbers 0-4 to indicate relative risk B. always indicating the product name. C. giving the UN hazard class number. D. the shape of the placard."
    }),
    item({
      n: 4,
      keyHeader: "4. 4.2.1 RECOGNIZE & ID 13",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "13",
      question: "Local emergency response personnel can gain valuable information if the _____ is utilized in preincident planning.",
      choices: choices(
        "Emergency Response Guide",
        "Local Emergency Planning Committee",
        "Shipping Paper",
        "Bill of Lading"
      ),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-1) (B-2)."),
        cite(ifsta + ", page 103."),
        cite(jb + ", page 12.")
      ],
      original: "4. Local emergency response personnel can gain valuable information ifthe ____iis utilized in preincident planning."
    }),
    item({
      n: 5,
      keyHeader: "5. 4.2.1 RECOGNIZE & ID 14",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "14",
      question: "When transporting hazardous materials, shipping papers should contain:",
      choices: choices(
        "hazard class of the material.",
        "CHEMTREC® phone number.",
        "antidotes for the material.",
        "recommended protective actions."
      ),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-7, 8, 12) (B-1, 5), 5.3.1 (A-8)."),
        cite(ifsta + ", page 99."),
        cite(jb + ", page 29.")
      ],
      original: "5. When transporting hazardous materials shipping papers should contain: A. hazard class of the material. B. CHEMTREC® phone number. C. antidotes for the material. D. recommended protective actions."
    }),
    item({
      n: 6,
      keyHeader: "6. 4.2.1 RECOGNIZE & ID 15",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "15",
      question: "On a placard, the number at the bottom of the diamond indicates the:",
      choices: choices(
        "hazard class.",
        "guide number from the DOT Emergency Response Guidebook to be used.",
        "United Nations product identification number.",
        "relative risk."
      ),
      answer: "A",
      eligible: true,
      status: "needs_review",
      notes: ["The question and choices are readable. The book citations on the answer key are not."],
      issues: [{
        summary: "Book citations are corrupted.",
        excerpt: "IFSTA ... pe. 3, Ed, page 34-35 5 | 4 / Jones and Bartlett ... p . Fig, 225",
        correction: "Restore the IFSTA and Jones and Bartlett page and figure citations from the book. The NFPA 1072 line is readable."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-6, 7, 10) (B-1, 5)."),
        cite(ifsta + ", page unreadable.", true),
        cite(jb + ", page and figure unreadable.", true)
      ],
      originalCitation: "IFSTA, Hazardous Materials for First Responders, 5th Edition, pe. 3, Ed, page 34-35 5 | 4. Jones and Bartlett, Hazardous Materials Awareness and Operations, p . Fig, 225",
      original: "6. On a placard, the number at the bottom of the diamond indicates the: A. hazard class. B. guide number from the DOT Emergency Response Guidebook to be used. C. United Nations product identification number. D. relative risk."
    }),
    item({
      n: 7,
      keyHeader: "7. 4.2.1 RECOGNIZE & ID 17",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "17",
      question: "Position #1 is the information and degree of hazard relating to a chemical's:",
      choices: choices(
        "flammability (red).",
        "health (blue).",
        "special information (white).",
        "reactivity (yellow)."
      ),
      answer: null,
      sourceAnswer: "B",
      eligible: false,
      status: "unresolved",
      illustration: image("Numbered NFPA 704 placard used for questions 7–10. No matching image is in this project. Position numbers were not assigned."),
      notes: ["Excluded because the numbered placard is missing. The source key says B. That letter was not applied to a scored item."],
      issues: [{
        summary: "Requires the numbered NFPA 704 illustration.",
        excerpt: "Directions: Given the illustration below of a National Fire Protection Association 704 placard, answer this and the following three questions.",
        correction: "Add the original numbered NFPA 704 illustration and its accessible description. Do not invent which corner is position 1, 2, 3, or 4."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-4) (B- )", true),
        cite(ifsta + ", page 87."),
        cite(jb + ", page 27. Fig. 2-1", true)
      ],
      originalCitation: "NFPA 1072, 4.2.1 (A- 4) (B- ). Jones and Bartlett ... page 27. Fig, 2.",
      original: "7. Position #1 is the information and degree of hazard relating to a chemical's: A. flammability (red). B. health (blue). C. special information (white). D. reactivity (yellow)."
    }),
    item({
      n: 8,
      keyHeader: "8. 4.2.1 RECOGNIZE & ID 18",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "18",
      question: "Position #2 is the information and degree of hazard relating to a chemical's:",
      choices: choices(
        "flammability (red).",
        "health (titre).",
        "reactivity (yellow).",
        "special information (ye)."
      ),
      answer: null,
      sourceAnswer: "A",
      eligible: false,
      status: "unresolved",
      illustration: image("Same numbered NFPA 704 placard as questions 7–10. Image not in this project."),
      notes: ["Choice B keeps the unreadable color word \"titre.\" Choice D keeps \"(ye).\" Neither was rewritten."],
      issues: [{
        summary: "Requires the placard, and two choice colors are unreadable.",
        excerpt: "B. health (titre). D. special Inforrriation (ye),",
        correction: "Add the original illustration. Confirm choice B and choice D from the book before this item is scored."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-4) (B-5)."),
        cite(ifsta + ", page 87."),
        cite(jb + ", page 27. Fig. 2-1", true)
      ],
      original: "8. Position #2 Is the Information and degree of hazard relating to a chemicals: A. flammability (red). B. health (titre). C. reactivity (yellow). D. special Inforrriation (ye),"
    }),
    item({
      n: 9,
      keyHeader: "9. 4.2.1 RECOGNIZE & ID 19",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "19",
      question: "Position #3 is the information and degree of hazard relating to a chemical's:",
      choices: choices(
        "special information (white).",
        "health (flue).",
        "reactivity (yellow).",
        "flammability (rad)."
      ),
      answer: null,
      sourceAnswer: "G",
      eligible: false,
      status: "unresolved",
      illustration: image("Same numbered NFPA 704 placard as questions 7–10. Image not in this project."),
      notes: ["The key reads Answer: G. G is not an A–D choice. It was not changed to C or to any other letter."],
      issues: [{
        summary: "The printed answer is G, which is not a valid A–D choice. The placard is also missing.",
        excerpt: "9. 4.2.1 RECOGNIZE & ID 19 ... Answer: G",
        correction: "Confirm the answer letter from a clean copy of the key. Add the original illustration. Do not treat G as C."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-4) (B-5)."),
        cite(ifsta + ", page 87."),
        cite(jb + ", page 27. Fig. 2-15", true)
      ],
      original: "9. Position #3 Is the Information and degree of hazard relating to a chemicals: A. special information (white), B. health (flue), C. reactivity (yellow). D. flarmrmability (rad). Answer: G"
    }),
    item({
      n: 10,
      keyHeader: "10. 4.2.1 RECOGNIZE & ID 20",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "20",
      question: "Position #4 is the information and degree of hazard relating to a chemical's:",
      choices: choices(
        "health (blue).",
        "flammability (red).",
        "reactivity (yellow).",
        "special information (umits)."
      ),
      answer: null,
      sourceAnswer: "D",
      eligible: false,
      status: "unresolved",
      illustration: image("Same numbered NFPA 704 placard as questions 7–10. Image not in this project."),
      notes: ["Choice D keeps the unreadable word \"umits.\" It was not changed to white."],
      issues: [{
        summary: "Requires the placard, and choice D is unreadable.",
        excerpt: "D. special information (umits).",
        correction: "Add the original illustration and confirm choice D from the book."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-4) (B-5)."),
        cite(ifsta + ", page 87."),
        cite(jb + ", page 27. Fig. 2-15", true)
      ],
      original: "10. Position #4 Is the information and degree of hazard relating to a chemicals: A. health (blue). B. flammability (red). C. reactivity (yellow). D. special information (umits)."
    }),
    item({
      n: 11,
      keyHeader: "11. 4.2.1 RECOGNIZE & ID 22",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "22",
      question: "The National Fire Protection Association (NFPA) lists standard _____ for identifying chemical hazards of materials at fixed facilities.",
      choices: choices("704", "1991", "472", "1919, 120"),
      answer: null,
      sourceAnswer: "A",
      eligible: false,
      status: "unresolved",
      notes: ["Choice D is the corrupted string from the scan. It was not repaired. A blank marks the missing standard number in the stem."],
      issues: [{
        summary: "Choice D is corrupted.",
        excerpt: "C. 472 DO, 1919,120",
        correction: "Replace choice D with the text printed in a clean copy. Do not guess a standard number."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-4) (B-5)."),
        cite(ifsta + ", page 86."),
        cite(jb + ", page 26.")
      ],
      original: "11. The National Fire Protection Association (NFPA) lists standard for identifying chemical hazards of matorlals at fixed facilities. A. 704 B. 1991 C. 472 DO, 1919,120"
    }),
    item({
      n: 12,
      keyHeader: "12. 4.2.1 RECOGNIZE & ID 24",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "24",
      question: "A substance that readily yields oxygen to support combustion of fuels would be labeled Hazard Class:",
      choices: choices("3", "5", "7", "9"),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-9) (B-5)."),
        cite(ifsta + ", pages 83."),
        cite(jb + ", pages 37, 35. Fig. 2-25")
      ],
      original: "12. A substance that readily yields oxygen to support combustion of fuels, would be labeled Hazard Class: A. 3. B. 5. C. 7. D. 9."
    }),
    item({
      n: 13,
      keyHeader: "13. 4.2.1 RECOGNIZE & ID 25",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "25",
      question: "A container of flammable solids would receive a United Nations label or placard with a hazardous classification number of:",
      choices: choices("1", "2", "3", "4"),
      answer: "D",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-9) (B-5), 5.2.1 (A-1) (B-5)."),
        cite(ifsta + ", page 83."),
        cite(jb + ", pages 37, 35. Fig. 2-25")
      ],
      original: "13. A container of flammable solids would receive a United Nations Label or placard with a hazardous classification number of: A. 1. B. 2. C. 3. D. 4."
    }),
    item({
      n: 14,
      keyHeader: "14. 4.2.1 RECOGNIZE & ID 27",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "27",
      question: "Within the United Nations/Department of Transportation system, a container labeled with a Hazard Class 4 contains a:",
      choices: choices(
        "combustible liquid.",
        "flammable gas.",
        "flammable solid.",
        "flammable liquid."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-9) (B-5), 5.2.1 (A-1) (B-5)."),
        cite(ifsta + ", page 83."),
        cite(jb + ", pages 37, 35. Fig. 2-25")
      ],
      original: "14. Within the United Nations/Department of Transportation System, a container labeled with a Hazard Class 4 contains a: A. combustible liquid. B. flarnmable gas. C. flammable solid. D. flammable liquid."
    }),
    item({
      n: 15,
      keyHeader: "15. 4.2.1 RECOGNIZE & ID 28",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "28",
      question: "Of the references listed below, the most specific source of information on a hazardous material is the:",
      choices: choices(
        "Department of Transportation Emergency Response Guidebook.",
        "Safety Data Sheet.",
        "Department of Transportation Placards.",
        "National Fire Protection Association 704 System."
      ),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-11) (B-3), 4.3.1 (A-1) (B-2)."),
        cite(ifsta + ", page 83."),
        cite(jb + ", page 25.")
      ],
      original: "15. Of the references listed below, the most specific source of information on a hazardous material is the: A. Department of Transportation Emergency Response Guidebook. B. Safety Data Sheet. C. Department of Transportation Placards. D. National Fire Protection Association 704 System."
    }),
    item({
      n: 16,
      keyHeader: "16. 4.2.1 RECOGNIZE & ID 29",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "29",
      question: "Composition, hazards, and first aid measures are all parts of the:",
      choices: choices(
        "Dangerous Cargo Manifest.",
        "Emergency Response Guidebook.",
        "Safety Data Sheet.",
        "United Nations Identification System."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-11) (B-1), 4.3.1 (A-1) (B-2)."),
        cite(ifsta + ", page 88."),
        cite(jb + ", page 25.")
      ],
      original: "16. Composition, hazards, and first aid measures are all parts of the: A. Dangerous Cargo Manifest. B. Emergency Response Guidebook. C. Safety Data Sheet. D. United Nations Identification Systerm"
    }),
    item({
      n: 17,
      keyHeader: "17. 4.2.1 RECOGNIZE & ID 42",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "42",
      question: "An Air Bill may be in the:",
      choices: choices(
        "cockpit.",
        "flight attendant area.",
        "overhead compartment.",
        "cargo hold."
      ),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-1, 2) (B-1, 5), 4.3.1 (A-1)."),
        cite(ifsta + ", page 99."),
        cite(jb + ", page 30.")
      ],
      original: "17. An Air Bill may be in the: A. cockpit. B. flight attendant area. C. overhead compartment. D. cargo hold."
    }),
    item({
      n: 18,
      keyHeader: "18. 4.2.1 RECOGNIZE & ID 45",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "45",
      question: "The Environmental Protection Agency signal word Caution indicates:",
      choices: choices(
        "danger level of toxicity.",
        "intermediate level of toxicity.",
        "minor level of toxicity.",
        "moderate level of toxicity."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-2) (B-1)."),
        cite(ifsta + ", page 97."),
        cite(jb + ", page 49.")
      ],
      original: "18. The Environmental Protection Agency signal word - Caution - indicates: A. danger Level of toxicity. B. intermediate level of toxicity. C. minor Level of toxicity. D. moderate level of toxicity."
    }),
    item({
      n: 19,
      keyHeader: "19. 4.2.1 RECOGNIZE & ID 53",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "53",
      question: "The National Fire Protection Association 704 system is designed for:",
      choices: choices(
        "occupational exposures.",
        "biological agents.",
        "transportation.",
        "fixed facilities."
      ),
      answer: "D",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-4) (B-1)."),
        cite(ifsta + ", page 87."),
        cite(jb + ", pages 26-27.")
      ],
      original: "19. The National Fire Protection Association 704 system is designed for: A. occupational exposures. B. biological agents. C. transportation. D. fixed facilities."
    }),
    item({
      n: 20,
      keyHeader: "20. 4.2.1 RECOGNIZE & ID 55",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "55",
      question: "The Department of Transportation Hazard Class 8 consists of:",
      choices: choices(
        "flammable liquids.",
        "explosives.",
        "corrosives.",
        "poisons."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-2) (B-7)."),
        cite(ifsta + ", page 73."),
        cite(jb + ", pages 38, 35. Fig. 3-29, Fig. 2-25")
      ],
      original: "20. The Department of Transportation Hazard Class 8 consists of: A. flammable liquids. B. explosives. C. corrosives. D. poisons."
    }),
    item({
      n: 21,
      keyHeader: "21. 4.2.1 RECOGNIZE & ID 60",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "60",
      question: "If a chemical name is highlighted in the Emergency Response Guidebook, the table of initial isolation and protective action distances are found in the _____ section.",
      choices: choices("white", "green", "yellow", "blue"),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-9) (B-7)."),
        cite(ifsta + ", pages 125-126. Fig. 3.", true),
        cite(jb + ", pages 36, 38. Fig. 2-29")
      ],
      notes: ["The IFSTA figure number is cut off after \"Fig. 3.\""],
      issues: [{
        summary: "The IFSTA figure number is incomplete.",
        excerpt: "IFSTA ... pages 125-126. Fig. 3.",
        correction: "Complete the IFSTA figure number from the book."
      }],
      status: "needs_review",
      original: "21. If a chemical name is highlighted in the Emergency Response Guidebook, the table of initial isolation and protective action distances are found in the A. white B. green C. yellow D. blue"
    }),
    item({
      n: 22,
      keyHeader: "22. 4.2.1 RECOGNIZE & ID 70",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "70",
      question: "The Department of Transportation Hazard Class 7 consists of:",
      choices: choices(
        "oxidizers.",
        "poisons.",
        "radioactive substances.",
        "corrosives."
      ),
      answer: "C",
      eligible: true,
      status: "needs_review",
      notes: ["The key header is damaged. The trailing reference id 70 was kept. It is not the exam question number. The NFPA citation line is incomplete."],
      issues: [{
        summary: "The NFPA citation and key header are damaged.",
        excerpt: "22: 4.2.1 RECOGNIZE & ID 70 ofe ! 2, 4.2.1 (A- 2, ~ 7).",
        correction: "Restore the NFPA 1072 citation for question 22 from a clean key. Keep 70 as the reference id, not the question number."
      }],
      references: [
        cite(nfpa + ", 4.2.1, remainder of this citation is unreadable.", true),
        cite(ifsta + ", pages 73, 76, 78, 84. Fig. 2.37, Fig. 2.40, Table 2.5", true),
        cite(jb + ", pages 37, 35. Fig. 2-25")
      ],
      originalCitation: "22: 4.2.1 RECOGNIZE & ID 70 ofe ! 2, 4.2.1 (A- 2, ~ 7). IFSTA ... fot First Responders ... pages 73, 76, 78,84, Fig. 2.37, Fig 2.40 Table 2.5",
      original: "22. The Department of Transportation Hazard Class 7 consists of: A. oxidizers. B. poisons. C. radioactive substances. D. corrosives."
    }),
    item({
      n: 23,
      keyHeader: "23. 4.2.1 RECOGNIZE & ID 72",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "72",
      question: "One resource that deals with protective action distances involving toxic gas is the:",
      choices: choices(
        "DOT Emergency Response Guidebook.",
        "Material Safety Data Sheet.",
        "NFPA Hazardous Materials Data Base.",
        "Fire Chief's Handbook."
      ),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-9) (B-7), 4.3.1 (A-1) (B-3)."),
        cite(ifsta + ", page 120."),
        cite(jb + ", pages 36, 38. Fig. 2-29")
      ],
      original: "23. One resource that deals with protective action distances involving toxic gas is the: A. DOT Emergency Response Guidebook. B. Material Safety Data Sheet. C. NFPA Hazardous Materials Data Base. D. Fire Chief's Handbook."
    }),
    item({
      n: 24,
      keyHeader: "24. 4.2.1 RECOGNIZE & ID 73",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "73",
      question: "Upon arrival at a hazardous material incident involving a truck, you locate the 4-digit ID number on an orange panel. You should look first in the Emergency Response Guidebook for guidance in the:",
      choices: choices(
        "green-bordered section.",
        "blue-bordered section.",
        "yellow-bordered section.",
        "orange-bordered section."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-9) (B-7), 4.3.1 (A-1) (B-1)."),
        cite(ifsta + ", page 118."),
        cite(jb + ", pages 35, 36.")
      ],
      original: "24. Upon arrival at a hazardous material incident involving a truck, you locate the 4-digit ID number on an orange panel. You should look first in the Emergency Response Guidebook for guidance in the: A. green-bordered section. B. blue-bordered section. C. yellow-bordered section. D. orange-bordered section."
    }),
    item({
      n: 25,
      keyHeader: "25. 4.2.1 RECOGNIZE & ID 82",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "82",
      question: "_____ radioactive materials can be packaged in small containers as well as those weighing over 100 tons.",
      choices: choices("Type C", "Industrial", "Type A", "Type B"),
      answer: "D",
      eligible: true,
      status: "needs_review",
      notes: ["The word before \"radioactive\" is missing. It was turned into a blank and not guessed."],
      issues: [{
        summary: "The first word of the stem is missing.",
        excerpt: "25. radioactive materials can be packaged in small containers as well as those weighing over 100 tons.",
        correction: "Restore the word that precedes \"radioactive\" from the book."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-10) (B-6)."),
        cite(ifsta + ", page 274."),
        cite(jb + ", page 98.")
      ],
      original: "25. radioactive materials can be packaged in small containers as well as those weighing over 100 tons. A. Type C B. Industrial C. Type A D. Type B"
    }),
    item({
      n: 26,
      keyHeader: "26. 4.2.1 RECOGNIZE & ID 87",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "87",
      question: "The placard drawing below represents which hazard class?",
      choices: choices("Explosives", "Nonflammable gas", "Flammable solid", "Oxidizer"),
      answer: null,
      sourceAnswer: "B",
      eligible: false,
      status: "unresolved",
      illustration: image("Placard drawing for question 26. No matching image is in this project."),
      issues: [{
        summary: "Requires the original placard drawing.",
        excerpt: "26. The placard drawing below represents which hazard class? BACKGROUND",
        correction: "Add the original placard image and an accessible description. Do not substitute a different placard."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-4, 6, 10) (B-1, 5), 5.2.1 (A-1, 3) (B-5)."),
        cite(ifsta + ", page 75."),
        cite(jb + ", page 35. Fig. 2-25")
      ],
      original: "26. The placard drawing below represents which hazard class? A. Explosives B. Nonflammable gas C. Flammable solid D. Oxidizer"
    }),
    item({
      n: 27,
      keyHeader: "27. 4.2.1 RECOGNIZE & ID 93",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "93",
      question: "The placard drawing below represents:",
      choices: choices("Poisons", "Oxidizer", "Flammable gases", "Corrosives"),
      answer: null,
      sourceAnswer: "D",
      eligible: false,
      status: "unresolved",
      illustration: image("Placard drawing for question 27. No matching image is in this project."),
      notes: ["The scan numbered this item 7. It was restored to exam question 27 to match the answer key. The placard is still missing."],
      issues: [{
        summary: "Requires the original placard. The printed number was 7.",
        excerpt: "7. The placard drawing below represents:",
        correction: "Add the original placard. The exam number 27 comes from the answer key, not from the stray 7 in the question text."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-3) (B-5)."),
        cite(ifsta + ", pages 75, 197. Table 4.14, Fig. 4.75"),
        cite(jb + ", page 35. Fig. 2-25")
      ],
      original: "7. The placard drawing below represents: A. Poisons B. Oxidizer C. Flammable gases D. Corrosives"
    }),
    item({
      n: 28,
      keyHeader: "28. 4.2.1 RECOGNIZE & ID 94",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "94",
      question: "The placard illustration below represents:",
      choices: choices(
        "Flammable gases",
        "Corrosives",
        "Flammable liquids/combustibles",
        "Explosives"
      ),
      answer: null,
      sourceAnswer: "C",
      eligible: false,
      status: "unresolved",
      illustration: image("Placard illustration for question 28. No matching image is in this project."),
      issues: [{
        summary: "Requires the original placard illustration.",
        excerpt: "28. The placard illustration below represents: BACKGROUND",
        correction: "Add the original placard image and an accessible description."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-3) (B-5)."),
        cite(ifsta + ", pages 75, 184-186. Tables 4.6, 4.7"),
        cite(jb + ", page 35. Fig. 2-25")
      ],
      original: "28. The placard illustration below represents: A. Flammable gases B. Corrosives C. Flammable liquids/combustibles D. Expiosives"
    }),
    item({
      n: 29,
      keyHeader: "29. 4.2.1 RECOGNIZE & ID 95",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "95",
      question: "The Department of Transportation Hazard Class 2 includes:",
      choices: choices(
        "flammable solids.",
        "poison liquid.",
        "nonflammable gases.",
        "corrosive poisons."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-1) (B-1, 7), 5.2.1 (A-1) (B-5)."),
        cite(ifsta + ", page 82. Table 2.5"),
        cite(jb + ", pages 37, 35. Fig. 2-25")
      ],
      original: "29. The Department of Transportation Hazard Class 2 includes: A. flammable solids. B. poison liquid. C. nonflammable gases. D. corrosive poisons."
    }),
    item({
      n: 30,
      keyHeader: "30. 4.2.1 RECOGNIZE & ID 96",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "96",
      question: "The Department of Transportation (DOT) Hazard Class 6 includes:",
      choices: choices(
        "liquid poisons.",
        "military agents.",
        "flammable solids.",
        "poison gases."
      ),
      answer: "A",
      eligible: true,
      status: "needs_review",
      issues: [{
        summary: "The NFPA citation line is cut off, and one section number may be damaged.",
        excerpt: "NFPA 1072, 4.2.1 (A- 2) (B- 1,7), 5.2.4 (A- 1) (B- 5",
        correction: "Restore the closing of the NFPA citation. Do not change 5.2.4 unless a clean key shows a different section."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-2) (B-1, 7), 5.2.4 (A-1) (B-5", true),
        cite(ifsta + ", pages 82, 75, 76, 78. Table 2.5"),
        cite(jb + ", pages 37, 35. Fig. 2-25")
      ],
      originalCitation: "NFPA 1072, 4.2.1 (A- 2) (B- 1,7), 5.2.4 (A- 1) (B- 5 / IFSTA ... 5th Lattion page 82,75,76,78. Table 2.5",
      original: "30. The Department of Transportation (DOT) Hazard Class 6 includes: A. liquid poisons. B. military agents. C. flammable solids. D. poison gases."
    }),
    item({
      n: 31,
      keyHeader: "31. 4.2.1 RECOGNIZE & ID 97",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "97",
      question: "The Department of Transportation (DOT) Hazard Class 1 includes:",
      choices: choices(
        "flammable solids.",
        "explosives.",
        "corrosives.",
        "nonflammable gases."
      ),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-2) (B-1, 7), 5.2.1 (A-1) (B-5)."),
        cite(ifsta + ", pages 82, 75, 76, 78. Table 2.5"),
        cite(jb + ", pages 37, 35. Fig. 2-25")
      ],
      original: "31. The Department of Transportation (DOT) Hazard Class 1 includes: A. flammable solids. B. explosives. C. corrosives. D. nonflammable gases."
    }),
    item({
      n: 32,
      keyHeader: "32. 4.2.1 RECOGNIZE & ID 98",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "98",
      question: "Placards that contain the Department of Transportation Class Number 6 at the bottom identify:",
      choices: choices(
        "corrosives.",
        "oxidizers.",
        "an infectious substance hazards.",
        "explosives."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-2) (B-1, 7), 5.2.1 (A-1) (B-5)."),
        cite(ifsta + ", page 84."),
        cite(jb + ", page 35.")
      ],
      original: "32. Piacards that contain the Department of Transportation Class Number 6 at the bottoms identify: A. corrosives. B. oxidizers. C. an infectious substance hazards. D. explosives."
    }),
    item({
      n: 33,
      keyHeader: "33. 4.2.1 RECOGNIZE & ID 99",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "99",
      question: "The National Fire Protection Association 704 System indicates hazardous materials as:",
      choices: choices(
        "potential hazards.",
        "a chemical name.",
        "a five-digit number.",
        "the name of the product."
      ),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-2), 5.2.1 (A-1)."),
        cite(ifsta + ", page 87."),
        cite(jb + ", page 25.")
      ],
      original: "33. The National Fire Protection Association 704 System indicates hazardous materials as: A. potential hazards. B. a chemical name. C. a five-digit number. D. the name of the product."
    }),
    item({
      n: 34,
      keyHeader: "34. 4.2.1 RECOGNIZE & ID 100",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "100",
      question: "According to the National Fire Protection Association 704 System, the most dangerous chemical would have a placard showing which number sets?",
      choices: choices("4, 4, 2", "3, 2, 1", "0, 2, 4", "3, 3, 2"),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-4) (B-1, 5), 5.2.1 (A-1)."),
        cite(ifsta + ", page 87."),
        cite(jb + ", pages 26-27.")
      ],
      original: "34. ... which number sets? A. 4,4, 2 B. 3, 2, 1 C. 0,2, 4 D. 3,3,2"
    }),
    item({
      n: 35,
      keyHeader: "35. 4.2.1 RECOGNIZE & ID 102",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "102",
      question: "A substance that readily yields oxygen to support combustion of fuels would be labeled _____ under the United Nations labeling system.",
      choices: choices("3", "5", "7", "9"),
      answer: "B",
      eligible: true,
      status: "needs_review",
      notes: ["The stem does not say what is being labeled. A blank was added where that word is missing."],
      issues: [{
        summary: "The stem is missing the labeled item, such as a class or number.",
        excerpt: "would be labeled under the United Nations Labeling System.",
        correction: "Restore the missing word from the book. The blank was not filled with a guessed term."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-9) (B-1, 5), 5.2.1 (A-1)."),
        cite(ifsta + ", page 56."),
        cite(jb + ", page 37.")
      ],
      original: "35. A substance that readily yields oxygen to support combustion of fuels would be labeled under the United Nations Labeling System. A. 3 B. 5 C. 7 D. 9"
    }),
    item({
      n: 36,
      keyHeader: "36. 4.2.1 RECOGNIZE & ID 103",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "103",
      question: "During the size up of a facility, the firefighter should utilize the National Fire Protection Association 704 System to identify the:",
      choices: choices(
        "amount of product stored.",
        "flammability of the material.",
        "signs and symptoms of exposure.",
        "specific chemicals stored."
      ),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-2) (B-1), 5.2.1 (A-5)."),
        cite(ifsta + ", page 87."),
        cite(jb + ", pages 26-27.")
      ],
      original: "36. During the size up of a facility, the firefighter should utilize the National Fire Protection Association 704 System to identify the: A. amount of product stored. B. flammability of the material. C. signs and symptoms of exposure. D. specific chemicals stored."
    }),
    item({
      n: 37,
      keyHeader: "37. 4.2.1 RECOGNIZE & ID 104",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "104",
      question: "The person responsible for control of the air-bill papers is the:",
      choices: choices("pilot.", "co-pilot.", "flight attendant.", "material owner."),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-7) (B-1), 5.2.1 (A-5) (B-5)."),
        cite(ifsta + ", page 99."),
        cite(jb + ", page 30.")
      ],
      original: "37. The person responsibie for control of the air-bill papers is the: A. pilot. B. co-pilot. C. flight attendant. D. material owner."
    }),
    item({
      n: 38,
      keyHeader: "38. 4.2.1 RECOGNIZE & ID 105",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "105",
      question: "Shipping papers are referred to as _____ and usually stored _____.",
      choices: choices(
        "dangerous cargo manifest; in the cockpit",
        "waybill; in the cargo compartment",
        "air bill; in the cockpit",
        "bill of lading; in the cargo compartment."
      ),
      answer: null,
      sourceAnswer: "C",
      eligible: false,
      status: "unresolved",
      notes: ["This is a draft stem. The transportation mode is missing, so the blanks were not filled in."],
      issues: [{
        summary: "The stem does not say which transportation mode it is asking about.",
        excerpt: "38. Shipping papers are referred to as and usually stored",
        correction: "Restore the transportation mode and the full sentence from the book before scoring this item."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-7) (B-4), 5.2.1 (A-5), remainder unreadable.", true),
        cite(ifsta + ", page unreadable.", true),
        cite(jb + ", pages 30, 46.", true)
      ],
      originalCitation: "Reference: NFPA 1072, 4.2.1 (A- 7) (B- 4), 5.2.1 (A 5) ong gy / IFSTA ... B® / Jones and Bartlett ... page 30, 46.",
      original: "38. Shipping papers are referred to as and usually stored A. dangerous cargo manifest; in the cockpit B. waybill; in the cargo compartment C. air bill; in the cockpit D. bill of lading; in the cargo compartment."
    }),
    item({
      n: 39,
      keyHeader: "39. 4.2.1 RECOGNIZE & ID 108",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "108",
      question: "Directions: Read the statements below and select the correct answer from alternatives A–D.",
      statements: [
        { number: 1, text: "If placards are clearly displayed on the transportation mode, shipping papers are not required." },
        { number: 2, text: "If a transportation mode is not carrying hazardous materials, there is no requirement for specific information to be provided on shipping papers." },
        { number: 3, text: "Shipping papers must contain the proper name of the chemical amount and weight." }
      ],
      choices: choices(
        "All three statements are true.",
        "Statements 1 and 2 are false; statement 3 is true.",
        "Statements 1 and 3 are true; statement 2 is false.",
        "Statement 1 is false; statements 2 and 3 are true."
      ),
      answer: "D",
      eligible: true,
      references: [
        cite(nfpa + ", 4.2.1 (A-6) (B-1), 5.2.1 (A-1) (B-2), 5.3.1 (A-8)."),
        cite(ifsta + ", page 99."),
        cite(jb + ", page 29.")
      ],
      original: "39. Statement 1: If placards are ciearly dispiayed on the transportation mode, shipping papers are not required. Statement 2: If a transportation mode is not carrying hazardous materials, there is no requirement for specific information to be provided on shipping papers. Statement 3: Shipping papers must contain the proper name of the chemical amount and weight."
    }),
    item({
      n: 40,
      keyHeader: "40. 4.2.1 RECOGNIZE & ID 109",
      section: "4.2.1",
      topic: "RECOGNIZE & ID",
      referenceId: "109",
      question: "Directions: Read the following statements regarding pesticide labeling and select the correct answer from alternatives A–D.",
      statements: [
        {
          number: 1,
          text: "Environmental Protection Agency labels on pesticides must contain one of the signal words DANGER, WARNING, or CAUTION. The word DANGER is used on labeling for packages containing highly toxic materials."
        },
        {
          number: 2,
          text: "",
          missing: true
        },
        {
          number: 3,
          text: "The signal words EXTREMELY FLAMMABLE are also displayed if package contents have a flash point below 70°F."
        }
      ],
      choices: choices(
        "Statement 1 is true; statements 2 and 3 are false.",
        "Statements 1 and 2 are true; statement 3 is false.",
        "Statements 1 and 3 are true; statement 2 is false.",
        "All three statements are true."
      ),
      answer: null,
      sourceAnswer: "B",
      eligible: false,
      status: "unresolved",
      notes: ["Statement 2 has no label. The DANGER sentence was left inside statement 1. That split was not treated as verified."],
      issues: [{
        summary: "Statement 2 is missing its label, so the three statements are not separated.",
        excerpt: "Statement 1: ... CAUTION. The word DANGER is used on labeling for packages containing highly toxic materials. Statement 3: The signal words EXTREMELY FLAMMABLE...",
        correction: "Mark the statement boundaries from a clean copy, including statement 2, before this item is scored."
      }],
      references: [
        cite(nfpa + ", 4.2.1 (A-2) (B-1), 5.2.1 (A-1)."),
        cite(ifsta + ", page 96."),
        cite(jb + ", pages 49, 48.")
      ],
      original: "40. Statement 1: Environmental Protection Agency labels on pesticides must contain one of the signal words DANGER, WARNING or CAUTION. The word DANGER is used on labeling for packages containing highly toxic materials. Statement 3: The signal words EXTREMELY FLAMMABLE are also displayed if package contents have a flash point below 70oF."
    }),
    item({
      n: 41,
      keyHeader: "41. 4.3.1 INIT PROT ACT 8",
      section: "4.3.1",
      topic: "INIT PROT ACT",
      referenceId: "8",
      question: "You would expect to find the emergency action for a spill or leak in the _____ section of the Emergency Response Guidebook.",
      choices: choices("blue.", "yellow.", "green.", "orange."),
      answer: "D",
      eligible: true,
      references: [
        cite(nfpa + ", 4.3.1 (A-1) (B-1, 2)."),
        cite(ifsta + ", pages 118."),
        cite(jb + ", pages 35-36.")
      ],
      original: "41. You would expect to find the emergency action for a spill or leak in the section of the Emergency Response Guidebook. A. blue. B. yellow. C. green. D. orange."
    }),
    item({
      n: 42,
      keyHeader: "42. 4.3.1 INIT PROT ACT 9",
      section: "4.3.1",
      topic: "INIT PROT ACT",
      referenceId: "9",
      question: "To establish an isolation perimeter for an incident inside a building, you should:",
      choices: choices(
        "post personnel at the entrance to deny access.",
        "limit access at the nearest intersection.",
        "evacuate the building starting with the lowest floor.",
        "perform air monitoring to each floor and then deny access to that floor."
      ),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 4.3.1 (A-3) (B-4)."),
        cite(ifsta + ", page 128."),
        cite(jb + ", page 110.")
      ],
      original: "42. To establish an isolation perimeter for an incident inside a building, you should: A. post personnel at the entrance to deny access. B. limit access at the nearest intersection. C. evacuate the building starting with the lowest floor. D. perform air monitoring to each floor and then deny access to that floor."
    }),
    item({
      n: 43,
      keyHeader: "43. 4.3.1 INIT PROT ACT 13",
      section: "4.3.1",
      topic: "INIT PROT ACT",
      referenceId: "13",
      question: "To avoid hazards, which action would be instituted in the hazard-control zone?",
      choices: choices(
        "Firefighters should prevent unauthorized personnel from entering.",
        "The command post should be established in the warm zone.",
        "Establish the following zones: restricted, limited, unlimited.",
        "The zone should be selected as small as possible and only expanded if necessary."
      ),
      answer: "A",
      eligible: true,
      status: "needs_review",
      notes: ["Recovered from a block the scan numbered 3 and mixed with question 44. These four lettered actions were kept with this stem. The notification fragments were not used as choices."],
      issues: [{
        summary: "The scan mixed this item with question 44 and numbered it 3.",
        excerpt: "3. To avoid hazards, which action would be instituted in the hazard-control zone? A. Firefighters should prevent unauthorized personnel from entering. ... D. The zone should be selected as small as possible and only expanded if necessary. Which information should be provided during the notifications?",
        correction: "Confirm against a clean copy that these four choices, in this order, belong to question 43."
      }],
      references: [
        cite(nfpa + ", 4.3.1 (A-2) (B-1, 4-6)."),
        cite(ifsta + ", page 128."),
        cite(jb + ", page 138.")
      ],
      original: "3. To avoid hazards, which action would be instituted in the hazard-control zone? A. Firefighters should prevent unauthorized personnel from entering. Cost estimate for cleanup B. The command post should be established in the warm zone. Name of supervisor C. Establish the following zones: restricted, limited, unlimited. Container type D. The zone should be selected as small as possible and only expanded if necessary. Which information should be provided during the notifications? Name of the hospital receiving patients"
    }),
    item({
      n: 44,
      keyHeader: "44. 5.2.1 ID POT HAZARD 4",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "4",
      question: "Which information should be provided during the notifications?",
      choices: choices("", "", "", ""),
      answer: null,
      sourceAnswer: "C",
      eligible: false,
      status: "unresolved",
      notes: ["Choice order is unknown. Fragments were not assigned to A–D. The key letter C was not used to grade a reconstructed choice list."],
      issues: [{
        summary: "The A–D choice order is unknown.",
        excerpt: "Fragments printed in the mixed block: Cost estimate for cleanup; Name of supervisor; Container type; Name of the hospital receiving patients. Key says Answer: C.",
        correction: "Enter the four choices in the book's A–D order. Do not grade this item from the fragment list."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-2) (B-1)."),
        cite(ifsta + ", page 114."),
        cite(jb + ", page 20.")
      ],
      original: "Which information should be provided during the notifications? Cost estimate for cleanup / Name of supervisor / Container type / Name of the hospital receiving patients. Answer key 44: Answer: C"
    }),
    item({
      n: 45,
      keyHeader: "45. 5.2.1 ID POT HAZARD 8",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "8",
      question: "The hazard class represented by the placard illustration below is:",
      choices: choices(
        "radioactives.",
        "poison gases.",
        "flammable liquids.",
        "corrosives."
      ),
      answer: null,
      sourceAnswer: "A",
      eligible: false,
      status: "unresolved",
      illustration: image("Placard illustration for question 45. The scan shows the word BACKGROUND where the art would be. No image is in this project."),
      issues: [{
        summary: "Requires the original placard illustration.",
        excerpt: "45. The hazard class represented by the placard illustration below is: BACKGROUND",
        correction: "Add the original placard and an accessible description."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-1, 3, 4, 8, 10) (B-1, 2, 5), 4.2.1 (A-10) (B-5)."),
        cite(ifsta + ", pages 194-196. Fig. 4.75, 4.76. Tables 4.12, 4.13."),
        cite(jb + ", page 35. Fig. 2-25")
      ],
      original: "45. The hazard class represented by the placard illustration below is: A. radioactives. B. poison gases. C. flammable liquids. D. corrosives."
    }),
    item({
      n: 46,
      keyHeader: "46. 5.2.1 ID POT HAZARD 9",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "9",
      question: "Which label indicates the product is a gas?",
      choices: choices("", "", "", ""),
      answer: null,
      sourceAnswer: "D",
      eligible: false,
      status: "unresolved",
      illustration: image("Four label images used as choices. Readable fragments include EXPLOSIVES, COMBUSTIBLE, ORANGE, HALF RED, FLAMMABLE, and RED. The images are not in this project, and the fragments were not turned into A–D choices."),
      issues: [{
        summary: "The choices are images, not text.",
        excerpt: "46. Which label indicates the product is a gas? EXPLOSIVES COMBUSTIBLE ... FLAMMABLE RED BACKGROUND",
        correction: "Add the four original labels in A–D order with text alternatives. The key letter D was not matched to a guessed image."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-1, 3, 4, 8(a, d, n)), remainder unreadable.", true),
        cite(ifsta + ", pages and figures unreadable.", true),
        cite(jb + ", page 35. Fig. 2-25")
      ],
      originalCitation: "IFSTA ... Table 4.7, Fig. 4.6.6, Fig. 4.6.8 ... pages 186-186.",
      original: "46. Which label indicates the product is a gas? [image choices] EXPLOSIVES COMBUSTIBLE 1.2B ORANGE HALF RED FLAMMABLE RED"
    }),
    item({
      n: 47,
      keyHeader: "47. 5.2.1 ID POT HAZARD 13",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "13",
      question: "The flammable range is the:",
      choices: choices(
        "weight of a substance compared to the weight of an equal volume of water.",
        "percentage of gas or vapor concentration in air.",
        "minimum temperature at which a liquid gives off vapors.",
        "minimum temperature at which a liquid fuel gives off enough vapors to form an ignitable mixture with air near its surface."
      ),
      answer: "B",
      eligible: true,
      status: "needs_review",
      notes: ["The question number was missing in the scan, immediately after the image item. It was restored as question 47 from the answer key. These four choices were kept with this stem."],
      issues: [{
        summary: "The printed question number is missing.",
        excerpt: "The flammable range is the: A. weight of a substance... D. minimum temperature at which a liquid fuel gives off enough vapors...",
        correction: "Confirm this stem and these four choices are question 47 in a clean copy."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-1, 8(d, e, f, 1)).", true),
        cite(ifsta + ", pages 156, 157. Fig. 4.", true),
        cite(jb + ", page 54.")
      ],
      original: "The flammable range is the: A. weight of a substance compared to the weight of an equal volume of water. B. percentage of gas or vapor concentration in air. C. minimum temperature at which a liquid gives off vapors. D. minimum temperature at which a liquid fuel gives off enough vapors to form an ignitable mixture with air near its surface."
    }),
    item({
      n: 48,
      keyHeader: "48. 5.2.1 ID POT HAZARD 21",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "21",
      question: "What are some of the signs and symptoms of body irritants?",
      choices: choices("", "", "", ""),
      answer: null,
      sourceAnswer: "B",
      eligible: false,
      status: "unresolved",
      notes: ["One readable fragment is \"Unexplained skin, eye, or airway irritation.\" Its letter is not verified. The key says B. The other choices are unreadable and were not invented."],
      issues: [{
        summary: "The choices are mostly unreadable.",
        excerpt: "48, What are soma of the signs and symptoms of body irritante? A. While vapar loud ide / Unexpiainad skin, eys, or alrvay Irritation",
        correction: "Restore all four choices and their letters. The readable symptom was not assigned to a letter."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-8(i, m), 9, 10(a, b), 11) (B-2-5, 8).", true),
        cite(ifsta + ", page 172."),
        cite(jb + ", page 69.")
      ],
      original: "48, What are soma of the signs and symptoms of body irritante? A. While vapar loud ide. Unexpiainad skin, eys, or alrvay Irritation"
    }),
    item({
      n: 49,
      keyHeader: "49. 5.2.1 ID POT HAZARD 22",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "22",
      question: "What is a factor that should raise your awareness of terrorism involvement?",
      choices: choices("Occupancy", "Location of caller", "Time of day", "Day of week"),
      answer: "A",
      eligible: true,
      status: "needs_review",
      notes: ["The scan numbered this item 40. Exam number 49 was restored from the answer key. Question 40 remains the pesticide-label item."],
      issues: [{
        summary: "The printed number was 40.",
        excerpt: "40, What ls a factor that shauld raise your awareness of terrorism involvement?",
        correction: "Confirm the clean copy numbers this terrorism item as 49."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-4, 9, 11, 12) (B-3, 4, 8)."),
        cite(ifsta + ", pages 364-366."),
        cite(jb + ", page 87.")
      ],
      original: "40, What ls a factor that shauld raise your awareness of terrorism involvement? A. Occupnney B. Location of caller C. Time of day D. Day of week"
    }),
    item({
      n: 50,
      keyHeader: "50. 5.2.1 ID POT HAZARD 27",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "27",
      question: "In the course of extinguishing a small fire in an unoccupied house you discover the presence of chemicals and glass jars, a clue to activity that is indicative of:",
      choices: choices(
        "bomb making.",
        "warfare agent research.",
        "drug making.",
        "terrorism agent production."
      ),
      answer: "C",
      eligible: true,
      status: "needs_review",
      notes: ["The scan numbered this item 60. Exam number 50 was restored from the answer key."],
      issues: [{
        summary: "The printed number was 60.",
        excerpt: "60. In the course of extinguishing a small fire in an unoceupled house you discover the presence of chomicals and glass jars",
        correction: "Confirm the clean copy numbers this item as 50."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-1, 2, 4, 8(a, b, c, h, i, m, n), 9, 10(a, d), 11, 12) (B-1-5, 8)."),
        cite(ifsta + ", page 628."),
        cite(jb + ", page 93.")
      ],
      original: "60. In the course of extinguishing a small fire in an unoceupled house you discover the presence of chomicals and glass jars, a clue to activity that Is Indicative of: A. bomb making, B. warfare agent research, C. drug making. D. terrorism agent production."
    }),
    item({
      n: 51,
      keyHeader: "51. 5.2.1 ID POT HAZARD 28",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "28",
      question: "Which is recognized as a biological agent?",
      choices: choices("", "Phosgene", "V-agent", "Anthrax"),
      answer: null,
      sourceAnswer: "D",
      eligible: false,
      status: "unresolved",
      notes: ["Choice A is unreadable (\"Lowlslte\"). It was not rewritten. The key says D."],
      issues: [{
        summary: "Choice A is unreadable.",
        excerpt: "A. Lowlslte ) B. Phosgene C. V-agont D. Anthrax",
        correction: "Restore choice A from the book. Do not substitute a chemical name."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-10(b)) (B-7, 8)."),
        cite(ifsta + ", page 176. Fig. 4.54"),
        cite(jb + ", pages 32, 93-94.")
      ],
      original: "51. Which is recognizod as a biological agent? A. Lowlslte B. Phosgene C. V-agont D. Anthrax"
    }),
    item({
      n: 52,
      keyHeader: "52. 5.2.1 ID POT HAZARD 33",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "33",
      question: "Directions: Read the statements below and select the correct answer from alternatives A–D.",
      statements: [
        { number: 1, text: "Examples of nerve agents are sarin, soman, and V agentX." },
        { number: 2, text: "The most toxic, least volatile nerve agent is V agent/VX." },
        { number: 3, text: "Nerve agents are highly effective due to their high vapor pressure." }
      ],
      choices: choices(
        "Statement 1 is false; statements 2 and 3 are true.",
        "Statements 1 and 2 are true; statement 3 is false.",
        "Statements 1 and 3 are true; statement 2 is false.",
        "All three statements are true."
      ),
      answer: null,
      sourceAnswer: "B",
      eligible: false,
      status: "unresolved",
      notes: ["Statement 1 keeps the scan text \"V agentX.\" It was not changed to VX. The statement 1 label was missing and was restored only as a label, not as a correction of the agent name."],
      issues: [{
        summary: "Statement 1's agent name is unresolved.",
        excerpt: "Examplos of nerve agents are sarin, soman, and V agentX. Statomont2: The most toxic, least volatile nerve agent Is V agent/VXx.",
        correction: "Confirm statement 1's agent name and the statement boundaries from the book before scoring."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-10(a, b)) (B-8)."),
        cite(ifsta + ", page 393."),
        cite(jb + ", page 92. Table 4-2")
      ],
      original: "52. Diroctlona: Read the staternants below and select the correct answer from Examplos of nerve agents are sarin, soman, and V agentX. Statomont2: The most toxic, least volatile nerve agent Is V agent/VXx, Statomont 3: Nerve agents are highly effective due to thelr high vapor prossuro."
    }),
    item({
      n: 53,
      keyHeader: "53. 5.2.1 ID POT HAZARD 42",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "42",
      question: "A recon team is sent to observe a tank truck that has rolled over. The team reports that the vehicle is an MC 312. The container most probably contains a:",
      choices: choices(
        "flammable liquid.",
        "corrosive liquid.",
        "poison gas.",
        "flammable solid."
      ),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-2) (B-1), 4.2.1 (A-3)."),
        cite(ifsta + ", pages 248-249. Fig. 5.", true),
        cite(jb + ", page 78. Fig. 4-16")
      ],
      notes: ["The IFSTA figure number is cut off after \"Fig. 5.\""],
      issues: [{
        summary: "The IFSTA figure number is incomplete.",
        excerpt: "IFSTA ... pages 248-249. Fig. 5.",
        correction: "Complete the IFSTA figure number from the book."
      }],
      status: "needs_review",
      original: "53. A rocon toam ls sont to observo a tank truck that has roiled over. The team reports hat tho vehiclo Is an MC 312. The coritainer most probably contains a: A. flammablo liquid. B. corrosive liquid. C. polson gas. D. flammable solid."
    }),
    item({
      n: 54,
      keyHeader: "54. 5.2.1 ID POT HAZARD 44",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "44",
      question: "A single manhole assembly protected by a flash box and rollover protection is an identification feature of an _____ carrier shown in the picture.",
      choices: choices(
        "MC 306/DOT 406",
        "MC 307/DOT 407",
        "MC 312/DOT 412",
        "MC 331"
      ),
      answer: null,
      sourceAnswer: "B",
      eligible: false,
      status: "unresolved",
      illustration: image("Carrier picture for question 54. No matching image is in this project."),
      notes: ["The key header is damaged. Reference id 44 was read from \"ID POT HAZARD 44\" and was not used as the exam number."],
      issues: [{
        summary: "Requires the carrier picture. The citation block is also unreadable.",
        excerpt: "54. A single manhoie assembly protected by a flash box and roll-over protection is an identification feature of an carrier shown in the picture.",
        correction: "Add the original picture. Restore the citations from a clean key. Do not copy question 55's pages onto this item."
      }],
      references: [
        cite("Citations for question 54 are unreadable on the key.", true)
      ],
      originalCitation: "§4, 5.2.1 1D POT HAZARD 44 ... ESTA. Mazerdous Matortats ... pag 6-247.",
      original: "54. A single manhoie assembly protected by a flash box and roll-over protection is an identification feature of an carrier shown in the picture. A. MC 306/DOT 406 B. MC 307/DOT 407 C. MC 312/DOT 412 D. MC 331"
    }),
    item({
      n: 55,
      keyHeader: "55. 5.2.1 ID POT HAZARD 48",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "48",
      question: "A tank carrier designed to carry flammable liquids, combustible liquids, Class B poisons, and liquid food products with vapor pressures up to 4 psi, is an:",
      choices: choices(
        "MC 306/DOT 406.",
        "MC 307/DOT 407.",
        "MC 312/DOT 412.",
        "MC 331/DOT 407."
      ),
      answer: "A",
      eligible: true,
      status: "needs_review",
      notes: ["Choice D is printed as MC 331/DOT 407. That pairing was not corrected."],
      issues: [{
        summary: "Choice D's tank designation needs to be checked against the book.",
        excerpt: "D. MC 331/DOT 407.",
        correction: "Confirm whether choice D is printed as MC 331/DOT 407."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-2) (B-1), 4.2.1 (A-3).", true),
        cite(ifsta + ", pages 246-247."),
        cite(jb + ", page 78. Fig. 4.", true)
      ],
      originalCitation: "Reference: NFPA 1072, 6.2.1 (A- 2) (B- 1). 4.2.1 (A- 3). The leading 6.2.1 may be a damaged 5.2.1.",
      original: "55. A tank carrier designed to carry flammable liquids, combustible liquids, Class B poisons, and liquid food products with vapor pressures up to 4 psi, is an: A. MC 306/DOT 406. B. MC 307/DOT 407. C. MC 312/DOT 412. D. MC 331/DOT 407."
    }),
    item({
      n: 56,
      keyHeader: "56. 5.2.1 ID POT HAZARD 49",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "49",
      question: "A non-insulated, single-shell vessel illustrated below, which carries gases that have been liquefied, is a:",
      choices: choices(
        "MC 306/DOT 406.",
        "MC 307/DOT 407.",
        "MC 312/DOT 412.",
        "MC 331."
      ),
      answer: null,
      sourceAnswer: "D",
      eligible: false,
      status: "unresolved",
      illustration: image("Vessel illustration for question 56. No matching image is in this project."),
      issues: [{
        summary: "Requires the original vessel illustration.",
        excerpt: "56. A non-insulated, single-shell vessel illustrated below, which carries gases that have been liquefied, is a:",
        correction: "Add the original illustration and an accessible description."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-2) (B-1), 4.2.1 (A-3).", true),
        cite(ifsta + ", page 243."),
        cite(jb + ", page 79. Fig. 4.17")
      ],
      original: "56. A non-insulated, single-shell vessel illustrated below, which carries gases that have been liquefied, is a: A. MC 306/DOT 406. B. MC 307/DOT 407. C. MC 312/DOT 412. D. MC 331."
    }),
    item({
      n: 57,
      keyHeader: "57. 5.2.1 ID POT HAZARD 54",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "54",
      question: "Viewed from the rear, a liquid carrier has an elliptical shape. This shape, pictured below, indicates what type of carrier?",
      choices: choices(
        "MC 307/DOT 407",
        "MC 312/DOT 412",
        "MC 306/DOT 406",
        "MC 331"
      ),
      answer: null,
      sourceAnswer: "C",
      eligible: false,
      status: "unresolved",
      illustration: image("Rear view of a liquid carrier for question 57. No matching image is in this project."),
      issues: [{
        summary: "Requires the original carrier picture.",
        excerpt: "57. Viewed from the rear, a liquid carrier has an elliptical shape. This shape, pictured below, indicates what type of carrier?",
        correction: "Add the original picture and an accessible description."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-2) (B-1).", true),
        cite(ifsta + ", page 247. Fig. 5.46."),
        cite(jb + ", page 78. Fig. 4.43", true)
      ],
      original: "57. Viewed from the rear, a liquid carrier has an elliptical shape. This shape, pictured below, indicates what type of carrier? A. MC 307/DOT 407 B. MC 312/DOT 412 C. MC 306/DOT 406 D. MC 331"
    }),
    item({
      n: 58,
      keyHeader: "58. 5.2.1 ID POT HAZARD 58",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "58",
      question: "A cryogenic liquid tank will have:",
      choices: choices(
        "a single uninsulated shell.",
        "an enclosed dome.",
        "a double shell with insulation.",
        "fittings and valves visible on top of the tank car."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-2) (B-1)."),
        cite(ifsta + ", page 231."),
        cite(jb + ", page 23.")
      ],
      original: "58. A cryogenic liquid tank will have: A. a single uninsulated shell. B. an enclosed dome. C. a doubie shell with insulation. D. fittings and valves visible on top of the tank car."
    }),
    item({
      n: 59,
      keyHeader: "59. 5.2.1 ID POT HAZARD 61",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "61",
      question: "A rail car with exposed fittings is a _____ car.",
      choices: choices(
        "non-pressure or low-pressure tank",
        "pressure or high-pressure tank",
        "",
        "cryogenic liquid tank"
      ),
      answer: null,
      sourceAnswer: "A",
      eligible: false,
      status: "unresolved",
      notes: ["Choice C is unreadable. The scan fragment was not used as the choice."],
      issues: [{
        summary: "Choice C is unreadable.",
        excerpt: "C. a hope or low-pressure ta",
        correction: "Restore choice C from the book. Do not reuse the unreadable fragment as the choice."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-2, 3) (B-1, 5)."),
        cite(ifsta + ", page 256."),
        cite(jb + ", page 81. Fig. 4-22")
      ],
      original: "59. A rail car with exposed fittings is a car. A. non-pressure or low-pressure tank B. pressure or high-pressure tank C. a hope or low-pressure ta D. cryogenic liquid tank"
    }),
    item({
      n: 60,
      keyHeader: "60. 5.2.1 ID POT HAZARD 72",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "72",
      question: "A tank carrier designed to haul various chemicals whose pressures are less than 35 psi would be an:",
      choices: choices(
        "MC 306/DOT 406.",
        "MC 307/DOT 407.",
        "MC 312/DOT 412.",
        "MC 331."
      ),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-2, 8(m)) (B-1)."),
        cite(ifsta + ", page 246."),
        cite(jb + ", page 78. Fig. 4-15")
      ],
      original: "60. A tank carrier designed to haul various chemicals whose pressures are less than 35 psi would be an: A. MC 306/DOT 406. B. MC 307/DOT 407. C. MC 312/DOT 412. D. MC 331."
    }),
    item({
      n: 61,
      keyHeader: "61. 5.2.1 ID POT HAZARD 74",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "74",
      question: "On pesticide labels for materials originating in Canada, the product will have _____ which is like the Environmental Protection Agency registration number in the United States.",
      choices: choices(
        "pest control product number",
        "poison control number",
        "Department of Transportation (DOT) hazard class number",
        "United Nations (UN) identification number"
      ),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-2, 6(a), 7, 8(m), 12) (B-1, 8)."),
        cite(ifsta + ", page 93."),
        cite(jb + ", page 49.")
      ],
      original: "61. On pesticide labels for materials originating in Canada, the product will have which is like the Environmental Protection Agency registration number in the United States. A. pest control product number B. poison control number C. Department of Transportation (DOT) hazard class number D. United Nations (UN) identification number"
    }),
    item({
      n: 62,
      keyHeader: "62. 5.2.1 ID POT HAZARD 77",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "77",
      question: "Type _____ packaging contains low-level commercial radioactive shipments in cardboard boxes, wooden crates, and metal drums.",
      choices: choices("A", "B", "", "D"),
      answer: null,
      sourceAnswer: "A",
      eligible: false,
      status: "unresolved",
      notes: ["Choice C appears to read C, but that reading is not verified. The citations are mixed with the answer line."],
      issues: [{
        summary: "Choice C is not verified, and the citation block is damaged.",
        excerpt: "A. A B. B c.c D. D ... answer: A",
        correction: "Confirm choice C and restore the citations. The source answer line appears to say A."
      }],
      references: [
        cite(nfpa + ", 5.2.1 citation unreadable.", true),
        cite(ifsta + ", page 274."),
        cite(jb + ", page 97. Fig. 4-43", true)
      ],
      originalCitation: "Reference: NFPA 1072, 5.2.1(A-2,8() (B- 1) ... answer: A ... page 97. Fig. 4-43",
      original: "62. Type . packaging contains low-level commercial radioactive shipments in cardboard boxes, wooden crates, and metal drums. A. A B. B c.c D. D"
    }),
    item({
      n: 63,
      keyHeader: "63. 5.2.1 ID POT HAZARD 80",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "80",
      question: "A specialized intermodal tank container which transports gases in high-pressure cylinders is:",
      choices: choices(
        "a tube module/trailer.",
        "a cryogenic intermodal tank.",
        "an IM 101.",
        "an IM 102."
      ),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-2) (B-1)."),
        cite(ifsta + ", pages 250, 266. Table 5.7"),
        cite(jb + ", pages 79-80. Fig. 4-19")
      ],
      original: "63. A specialized intermodal tank container which transports gases in high-pressure cylinders is: A. a tube module/trailer. B. a cryogenic intermodal tank. C. an IM 101. D. an IM 102."
    }),
    item({
      n: 64,
      keyHeader: "64. 5.2.1 ID POT HAZARD 81",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "81",
      question: "A specialized intermodal tank container which carries refrigerated liquid gases, oxygen, or helium would be an example of:",
      choices: choices(
        "tube modules.",
        "IM 101.",
        "IM 102.",
        "cryogenic intermodal tanks/IM type 7."
      ),
      answer: "D",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-2, 8(i)) (B-1)."),
        cite(ifsta + ", pages 269-270. Fig. 5.88"),
        cite(jb + ", pages 75-76. Fig. 4-8")
      ],
      original: "64. A specialized intermodal tank container which carries refrigerated liquid gases, oxygen, or helium would be an example of: A. tube modules. B. iM 101. C. IM 102. D. cryogenic intermodal tanks/IM type 7."
    }),
    item({
      n: 65,
      keyHeader: "65. 5.2.1 ID POT HAZARD 82",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "82",
      question: "Cryogenic liquid intermodal, IMO type 7, containers are:",
      choices: choices(
        "non-pressure tanks that are highly insulated.",
        "atmospheric pressure non-insulated tanks.",
        "very low-pressure highly insulated tanks.",
        "diverse in pressure ratings as high as 600 psi."
      ),
      answer: "D",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-2, 8(m)) (B-1)."),
        cite(ifsta + ", page 235."),
        cite(jb + ", page 75. Fig. 4-8")
      ],
      original: "65. Cryogenic liquid intermodal, IMO type 7, containers are: A. non-pressure tanks that are highly insulated. B. atmospheric pressure non-insulated tanks. C. very low-pressure highly insulated tanks. D. diverse in pressure ratings as high as 600 psi."
    }),
    item({
      n: 66,
      keyHeader: "66. 5.2.1 ID POT HAZARD 83",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "83",
      question: "Directions: Read the following statements and choose the correct answer from choices A–D below.",
      statements: [
        { number: 1, text: "There are many types of intermodal containers, or freight containers, that can be used interchangeably on multiple modes of transportation (highway, rail, ship)." },
        { number: 2, text: "Cryogenic liquids cannot be shipped in intermodal containers because they are too unstable for this type of shipment." },
        { number: 3, text: "Radioactive material containers are shipped in either Type A or Type B containers." }
      ],
      choices: choices(
        "All three statements are true.",
        "Statement 1 is false; statements 2 and 3 are true.",
        "Statements 1 and 3 are true; statement 2 is false.",
        "Statements 1 and 3 are false; statement 2 is true."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-2) (B-1)."),
        cite(ifsta + ", pages 274, 264. Fig. 5.81"),
        cite(jb + ", page 73.")
      ],
      original: "66. Statement 1: There are many types of intermodal containers, or freight containers that can be used interchangeably on multiple modes of transportation (highway, rail, ship). Statement 2: Cryogenic liquids cannot be shipped in intermodal containers because they are too unstable for this type of shipment. Statement 3: Radioactive material containers are shipped in either Type A or Type B containers."
    }),
    item({
      n: 67,
      keyHeader: "67. 5.2.1 ID POT HAZARD 88",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "88",
      question: "The products that IM 102 intermodal portable tanks typically carry are:",
      choices: choices(
        "nonregulated materials.",
        "flammable gases.",
        "hydrogen.",
        "radioactive materials."
      ),
      answer: "A",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-2, 3) (B-1)."),
        cite(ifsta + ", pages 266-267. Table 5.7, Table 5.8"),
        cite(jb + ", pages 74, 76. Fig. 4-5")
      ],
      original: "67. The products that IM 102 intermodal portable tanks typically carry are: A. nonregulated materials. B. flammable gases. C. hydrogen. D. radioactive materials."
    }),
    item({
      n: 68,
      keyHeader: "68. 5.2.1 ID POT HAZARD 89",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "89",
      question: "The item that is represented by the vertical stripes indicates the:",
      choices: choices(
        "radioactive levels.",
        "Hazard Class.",
        "maximum radiation levels.",
        "number of radioactive atoms."
      ),
      answer: null,
      sourceAnswer: "A",
      eligible: false,
      status: "unresolved",
      illustration: image("Label or placard with vertical stripes. The scan says the top half background is yellow and the bottom half background color is unreadable. No image is in this project."),
      issues: [{
        summary: "Requires the striped-label illustration.",
        excerpt: "68. The item that is represented by the vertical stripes indicates the: Top half Background is Yellow / Bottom half Background",
        correction: "Add the original illustration, including the bottom-half color, and an accessible description."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-3, 8(i)) (B-1, 5)."),
        cite(ifsta + ", pages 194, 195. Fig. 4.76."),
        cite(jb + ", pages 95, 96. Fig. 4-42")
      ],
      original: "68. The item that is represented by the vertical stripes indicates the: Top half Background is Yellow Bottom half Background A. radioactive levels. B. Hazard Class. C. maximum radiation levels. D. number of radioactive atoms."
    }),
    item({
      n: 69,
      keyHeader: "69. 5.2.1 ID POT HAZARD 93",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "93",
      question: "What type of container is used to ship materials of radioactivity by air?",
      choices: choices("Industrial", "Type A", "Type C", "Extruded"),
      answer: null,
      sourceAnswer: "C",
      eligible: false,
      status: "unresolved",
      notes: ["Choice D is stored as the scan reading \"Extruded\" and still needs to be checked. It was not corrected. Choice C's \"Type C\" comes from \"Type ©\" and is also flagged."],
      issues: [{
        summary: "Choice D needs verification, and choice C's letter is uncertain.",
        excerpt: "A. Industrial B. Type A Cc. Type © D. Extrudeg",
        correction: "Confirm choices C and D from the book before scoring."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-2, 3, 8(i)) (B-1).", true),
        cite(ifsta + ", page 96."),
        cite(jb + ", page 97. Fig. 4-45")
      ],
      original: "69. What type of container is used to ship materials of radioactivity by air? A. Industrial B. Type A Cc. Type © D. Extrudeg"
    }),
    item({
      n: 70,
      keyHeader: "70. 5.2.1 ID POT HMA",
      section: "5.2.1",
      topic: "ID POT HMA",
      referenceId: null,
      question: "Draft: an intermodal container that can hold high-pressure gases at 3,000 psi.",
      choices: choices(
        "cryogenic intermodal tank.",
        "tube module intermodal container.",
        "pressure intermodal tank.",
        "non-pressure intermodal tank."
      ),
      answer: null,
      sourceAnswer: "B",
      eligible: false,
      status: "unresolved",
      notes: ["The stem is a draft of the only recoverable wording. It is not a finished question. The topic code is cut off at \"ID POT HMA\" and was not expanded. The reference id could not be read."],
      issues: [{
        summary: "The stem is corrupted.",
        excerpt: "70. Ap intermodal container that can hold high pressure gases 3000 psi or high tenormodal container that can hold high p",
        correction: "Replace the draft stem with the printed question. Restore the topic code and reference id from the key."
      }],
      references: [
        cite(nfpa + ", citation unreadable.", true),
        cite(ifsta + ", page 266.", true),
        cite(jb + ", pages 79-80. Fig. 4-19", true)
      ],
      originalCitation: "70. 5.2.1 ID POT HMA ... NFPA 1072, 6.2.1 (A- 2) (B- 1). IFSTA ... page 266.",
      original: "70. Ap intermodal container that can hold high pressure gases 3000 psi or high tenormodal container that can hold high p A. cryogenic intermodal tank. B. tube module intermodal CONtaing C. pressure intermodal tank. D. non-pressure intermodal tank."
    }),
    item({
      n: 71,
      keyHeader: "71. 5.2.1 ID POT HAZARD 104",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "104",
      question: "Emergency centers such as _____ are principal agencies providing immediate technical assistance to an emergency responder.",
      choices: choices(
        "Occupational Safety and Health Administration",
        "National Fire Protection Association",
        "National Center for Disease Control",
        "CHEMTREC®"
      ),
      answer: "D",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-6(a)) (B-5), 5.3.1 (A-1, 7, 10), 4.3.1 (A-1), 4.4.1 (A-2).", true),
        cite(ifsta + ", page 204."),
        cite(jb + ", page 82.")
      ],
      notes: ["Choice C is printed as National Center for Disease Control. It was not changed to Centers for Disease Control and Prevention. Part of the NFPA citation is hard to read and is marked incomplete."],
      issues: [{
        summary: "Part of the NFPA citation is difficult to read.",
        excerpt: "NFPA 1072, 5.2.1 (A- 6(a)) (B- 5), 6.3.1 (A- 1,7,10), 4.3. 1A 1), 4.4.1 (A- 2)",
        correction: "Confirm the NFPA section numbers. The readable book pages were kept."
      }],
      status: "needs_review",
      original: "71. Emergency centers such as the are principal agencies providing immediate technical assistance to an emergency responder. A. Occupational Safety and Health Administration B. National Fire Protection Association C. National Center for Disease Contro! D. CHEMTREC@"
    }),
    item({
      n: 72,
      keyHeader: "72. 5.2.1 ID POT HAZARD 110",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "110",
      question: "Beta particles are:",
      choices: choices(
        "having weight and mass.",
        "ionizing radiation like X-rays.",
        "deadly radiation.",
        "large particles that easily pass through protective gear."
      ),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-8).", true),
        cite(ifsta + ", page 534. Table 11.1."),
        cite(jb + ", page 61.")
      ],
      original: "72. Beta particies are: A. having weight and mass. B. ionizing radiation like X-rays. C. deadly radiation. D. large particles that easily pass through protective gear."
    }),
    item({
      n: 73,
      keyHeader: "73. 5.2.1 ID POT HAZARD 111",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "111",
      question: "The CHEMTREC® organization is available _____ hours per day to provide information about:",
      choices: choices(
        "24, certain chemicals.",
        "24, many chemicals.",
        "during normal business, only liquid chemicals.",
        "during normal business, selected chemicals."
      ),
      answer: "B",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-6(a)) (B-5), 5.3.1 (A-1, 7, 10)."),
        cite(ifsta + ", page 204."),
        cite(jb + ", page 82.")
      ],
      original: "73. The CHEMTREC@ organization is available hours per day to provide information about: A. 24, certain chemicals. B. 24, many chemicals. C. during normal business, only liquid chemicals. D. during normal business, selected chemicals."
    }),
    item({
      n: 74,
      keyHeader: "74. 5.2.1 ID POT HAZARD 118",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "118",
      question: "The Chemical Transportation Emergency Center and the Canadian Transport Emergency Centre can usually provide:",
      choices: choices(
        "authorization for cleanup.",
        "previous incidents and exposures.",
        "technical information.",
        "advice on remediation contractors."
      ),
      answer: "C",
      eligible: true,
      references: [
        cite(nfpa + ", 5.2.1 (A-4, 6(a)) (B-5), 5.3.1 (A-1, 10)."),
        cite(ifsta + ", page 205."),
        cite(jb + ", page 82.")
      ],
      original: "74. The Chemical Transportation Emergency Center and the Canadian Transport Emergency Centre can usually provide: A. authorization for cleanup. B. previous incidents and exposures. C. technical information. D. advice on remediation contractors."
    }),
    item({
      n: 75,
      keyHeader: "75. 5.2.1 ID POT HAZARD 119",
      section: "5.2.1",
      topic: "ID POT HAZARD",
      referenceId: "119",
      question: "In an emergency at a facility with bulk chemical storage, where the Safety Data Sheet is not available on site, the firefighter may obtain information from:",
      choices: choices(
        "an Environmental Protection Association Alert.",
        "the chemical abstract services.",
        "the Department of Transportation.",
        "CHEMTREC®."
      ),
      answer: "D",
      eligible: true,
      status: "needs_review",
      notes: ["Choice names were kept as printed, including Environmental Protection Association and chemical abstract services. The Jones and Bartlett page is unreadable."],
      issues: [{
        summary: "The Jones and Bartlett page is unreadable.",
        excerpt: "Jones and Bartlett, Hazardous Materials Awareness and Operations, 3rq Ed / Page go",
        correction: "Restore the Jones and Bartlett page from the key. The organization names in the choices were not rewritten."
      }],
      references: [
        cite(nfpa + ", 5.2.1 (A-4, 5, 6(a)) (B-5), 5.3.1 (A-1, 7, 10).", true),
        cite(ifsta + ", page 204."),
        cite(jb + ", page unreadable.", true)
      ],
      originalCitation: "Jones and Bartlett, Hazardous Materials Awareness and Operations, 3rq Ed / Answer: D / Page go",
      original: "75. in an emergency at a facility with bulk chemical storage, where the Safety Data Sheet is not available on site, the firefighter may obtain information from: A. an Environmental Protection Association Alert. B. the chemical abstract services. C. the Department of Transportation. D. CHEMTREC"
    })
  ];

  var meta = {
    id: EXAM_ID,
    sourceId: SOURCE_ID,
    title: "Hazardous Materials Awareness — Examination I-1",
    shortLabel: "Examination I-1",
    level: "awareness",
    keyAppendix: "Appendix A",
    itemCount: 75,
    answerNote: "Answer letters and citations come from the Examination I-1 key. They have not been independently verified.",
    readingList: [
      "IFSTA, Hazardous Materials for First Responders, 5th Edition, Chapters 1–5.",
      "Jones and Bartlett Learning, Hazardous Materials Awareness and Operations, 3rd Ed, Chapters 2–6."
    ],
    directions: "Examination I-1 has 75 items. The book says to remove it from the manual so guessed and missed items can be scored and researched anywhere, and to take it in a quiet place without interruptions. Review the Time Management Chart and the directions in Phase III, then practice them on each examination. Mark one answer, A–D. The book's research note says changed answers are often incorrect, and the first choice is often the correct one. Mark guesses. Score the exam from the key, then review missed and guessed items.",
    excludedNote: "The Examination I-2 cover page is not part of this question bank."
  };

  bank.register(questions, meta);
})();
