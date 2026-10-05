/**
 * QUESTION_BANK — 100 questions from Hartford County Regional Fire School
 * Hazardous Materials Awareness / Operational / WMD
 *
 * Quiz #1 (id 1–50): General
 * Quiz #2 (id 51–100): Hazardous Materials Properties and Effects
 *
 * Source: Instructor-provided PDF (all_quiz_and_answer_sheets-2.pdf)
 * Answer keys: Quiz #1 Answer Key (PDF p.117), Quiz #2 Answer Key (PDF p.118)
 *
 * DO NOT paraphrase, reorder choices, or invent content.
 */

const QUESTION_BANK = [
  // ─── QUIZ #1 — GENERAL (Questions 1–50) ───────────────────────────────
  {
    id: 1,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 1,
    level: "Awareness",
    objective: "NFPA 472, 4.2.1",
    question: "The U.S. Department of Transportation's definition of hazardous materials specifies three entities against which a hazardous material poses an unreasonable risk. Which is one of these entities?",
    choices: {
      A: "Newly arriving emergency personnel",
      B: "Drivers and handlers of the material",
      C: "Receivers and shippers",
      D: "The environment"
    },
    correctAnswer: "D"
  },
  {
    id: 2,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 2,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1.1",
    question: "Approximately how many organic and inorganic substances are registered for commercial use in the United States?",
    choices: {
      A: "200,000",
      B: "600,000",
      C: "13,000,000",
      D: "40,000,000"
    },
    correctAnswer: "D"
  },
  {
    id: 3,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 3,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.1.2.2, 4.2.3, 5.2.3",
    question: "What information does the ERG provide to hazardous materials responders?",
    choices: {
      A: "Detailed information on material properties",
      B: "Initial actions to take at a hazardous materials incident",
      C: "Mitigation and recovery procedures",
      D: "Decontamination and environmental remediation procedures"
    },
    correctAnswer: "B"
  },
  {
    id: 4,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 4,
    level: "Awareness",
    objective: "NFPA 472, 1.2.1",
    question: "Which NFPA standard addresses competencies for hazardous materials/WMD responders?",
    choices: {
      A: "1500",
      B: "472",
      C: "1902",
      D: "1421"
    },
    correctAnswer: "B"
  },
  {
    id: 5,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 5,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1.1, 4.2.1",
    question: "What is the first defense against danger for fire fighters when responding to a hazardous materials incident?",
    choices: {
      A: "Proper selection of PPE",
      B: "Maintaining crew integrity",
      C: "Recognition and awareness of the situation",
      D: "Preparatory lessons learned in the classroom"
    },
    correctAnswer: "C"
  },
  {
    id: 6,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 6,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "Compliance with the standards of which agency is voluntary?",
    choices: {
      A: "National Fire Protection Association",
      B: "Department of Transportation",
      C: "Environmental Protection Agency",
      D: "Occupational Safety and Health Administration"
    },
    correctAnswer: "A"
  },
  {
    id: 7,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 7,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "Which entity creates consensus-based standards?",
    choices: {
      A: "Environmental Protection Agency",
      B: "National Fire Protection Association",
      C: "Congress",
      D: "Occupational Safety and Health Administration"
    },
    correctAnswer: "B"
  },
  {
    id: 8,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 8,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What is the acronym for the OSHA federal document containing hazardous materials response competencies?",
    choices: {
      A: "HAZEL",
      B: "HAZWOPER",
      C: "HADDOCK",
      D: "HAPPIER"
    },
    correctAnswer: "B"
  },
  {
    id: 9,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 9,
    level: "Awareness, Operations",
    objective: "NFPA 472 \u2013 4.1.1.3; 5.1.1.3; 6.1.1.3",
    question: "Which agency establishes requirements for fire department hazardous materials response?",
    choices: {
      A: "OSHA",
      B: "EPA",
      C: "USFA",
      D: "FSTC"
    },
    correctAnswer: "A"
  },
  {
    id: 10,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 5.1.1.1",
    question: "What level of hazardous materials training enables fire fighters to recognize a potential hazardous materials incident, isolate and deny entry to other responders and the public, evacuate persons in danger, and take defensive action?",
    choices: {
      A: "Awareness",
      B: "Initial responder",
      C: "Operations",
      D: "Field"
    },
    correctAnswer: "C"
  },
  {
    id: 11,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 11,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.1.1.1, 5.1.1.1",
    question: "Which action is an awareness level hazardous materials responder qualified to take?",
    choices: {
      A: "Implement protective actions.",
      B: "Assist with decontamination of victims.",
      C: "Conduct searches in a warm zone.",
      D: "Perform reconnaissance from a warm zone."
    },
    correctAnswer: "A"
  },
  {
    id: 12,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 12,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1.1",
    question: "Which action is within the awareness level scope of responsibility?",
    choices: {
      A: "Prepare for emergency decontamination of civilians.",
      B: "Perform passive mitigation.",
      C: "Determine appropriate actions based on the ERG.",
      D: "Perform defensive tactics."
    },
    correctAnswer: "C"
  },
  {
    id: 13,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 5.4.2",
    question: "According to NFPA standards, which item is a core competency for operations level hazardous materials responders?",
    choices: {
      A: "Preserve evidence",
      B: "Control leaking product",
      C: "Perform victim recovery",
      D: "Perform atmospheric monitoring"
    },
    correctAnswer: "A"
  },
  {
    id: 14,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 14,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.1.1.1, 5.1.1.1, 6.1.1.1",
    question: "According to NFPA standards, which item is a mission-specific competency for operations level hazardous materials responders?",
    choices: {
      A: "Scene survey and analysis",
      B: "Collection of data from reference sources",
      C: "Selection of the appropriate level of PPE",
      D: "Response to illicit laboratory incidents"
    },
    correctAnswer: "D"
  },
  {
    id: 15,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 15,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.1.1.1, 5.1.1.1, 6.1.1.1",
    question: "Which entity determines if a need exists to provide mission-specific competency training for local operations level hazardous materials responders?",
    choices: {
      A: "The National Fire Protection Association (NFPA)",
      B: "The State Fire Marshal",
      C: "The authority having jurisdiction (AHJ)",
      D: "The Environmental Protection Agency (EPA)"
    },
    correctAnswer: "C"
  },
  {
    id: 16,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 16,
    level: "Operations: Mission Specific",
    objective: "NFPA 472, 6.1.1.4",
    question: "When performing a mission-specific competency, operations level hazardous materials responders must:",
    choices: {
      A: "Be secured to a mechanical means of retrieval.",
      B: "Work in pairs.",
      C: "Work under the direct supervision of technician level personnel.",
      D: "Wear Level A protective clothing."
    },
    correctAnswer: "C"
  },
  {
    id: 17,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 17,
    level: "Technician",
    objective: "NFPA 472, 7.1.2.2",
    question: "Which responder level is trained to enter heavily contaminated areas for the purpose of stopping a hazardous materials release?",
    choices: {
      A: "Operations",
      B: "Advanced",
      C: "Awareness",
      D: "Technician"
    },
    correctAnswer: "D"
  },
  {
    id: 18,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 18,
    level: "Specialist Employee",
    objective: "NFPA 472, 9.2.1.2.2",
    question: "What level receives more advanced hazardous materials training than the Technician level?",
    choices: {
      A: "Specialist",
      B: "Interventionist",
      C: "Technologist",
      D: "Expert"
    },
    correctAnswer: "A"
  },
  {
    id: 19,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 19,
    level: "Hazardous Materials Officer",
    objective: "NFPA 472, 10.1.1.2",
    question: "The minimum level of hazardous materials training for a hazardous materials incident commander is:",
    choices: {
      A: "Operations.",
      B: "Awareness.",
      C: "Specialist.",
      D: "Technician."
    },
    correctAnswer: "A"
  },
  {
    id: 20,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "Which is a detailed profile of a chemical or chemical mixture provided by the manufacturer?",
    choices: {
      A: "Local Emergency Response Plan (LERP)",
      B: "Emergency Response Guide (ERG)",
      C: "The material safety data sheet (MSDS)",
      D: "NFPA 49 (Hazardous Chemicals Data)"
    },
    correctAnswer: "C"
  },
  {
    id: 21,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 21,
    level: "Incident Commander",
    objective: "NFPA 472, 8.4.1",
    question: "What law requires businesses that handle chemicals to report type, quantity, and storage methods to the local fire department?",
    choices: {
      A: "INSTEP",
      B: "HAMSTER",
      C: "ASTHMA",
      D: "EPCRA"
    },
    correctAnswer: "D"
  },
  {
    id: 22,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 22,
    level: "Awareness, Operations, Technician",
    objective: "NFPA 472, 3.3.4, 4.2.1, 5.1.2.2, 7.2.2",
    question: "What is the acronym for the detailed profile of a single chemical or mixture that is provided by the manufacturer and/or supplier of a chemical and is collected by the LEPC in a jurisdiction?",
    choices: {
      A: "INSECT",
      B: "MSDS",
      C: "UNLOCK",
      D: "ANDS"
    },
    correctAnswer: "B"
  },
  {
    id: 23,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 23,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What does the S stand for in SERC?",
    choices: {
      A: "Special",
      B: "System",
      C: "State",
      D: "Start"
    },
    correctAnswer: "C"
  },
  {
    id: 24,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 24,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "In general, which type of incident requires the most time, planning, and forethought?",
    choices: {
      A: "Structure fire",
      B: "Hazardous materials incident with rescue",
      C: "Structure fire with rescue",
      D: "Hazardous materials incident with no life hazard"
    },
    correctAnswer: "C"
  },
  {
    id: 25,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 25,
    level: "Awareness",
    objective: "NFPA 472, 4.2.1",
    question: "Which statement best describes the correct perspective to take at a hazardous materials/WMD incident?",
    choices: {
      A: "Take aggressive action to minimize the threat.",
      B: "Slow down and think before you act.",
      C: "Contain and confine, but provide for safety first.",
      D: "Risk a lot to save a lot."
    },
    correctAnswer: "B"
  },
  {
    id: 26,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 26,
    level: "Awareness",
    objective: "NFPA 472, 4.2.1",
    question: "When does the response to a hazardous materials incident begin?",
    choices: {
      A: "Not until everyone is assembled onsite and the planning and evaluation process has been completed",
      B: "Not until the first person trained in hazardous materials arrives on the scene",
      C: "When the first call is received by the communications center or other agency of notification",
      D: "With learning about the regulations, agencies involved, and potential hazards in the jurisdiction"
    },
    correctAnswer: "D"
  },
  {
    id: 27,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 5.3.1",
    question: "Incident planning should focus on both the real threats that exist in the department\u2019s community and:",
    choices: {
      A: "the real threats that exist in adjacent communities the department might assist.",
      B: "threats that are not real today, but that may become real as technology changes.",
      C: "model threats, which exercise all the available resources in a standard set of circumstances.",
      D: "random threats; always expect the unexpected, especially with the terrorism concerns of the new millennium."
    },
    correctAnswer: "A"
  },
  {
    id: 28,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 5.1.1.1, 5.1.2.2",
    question: "Core competencies of operations level hazardous materials/WMD responders are:",
    choices: {
      A: "Offensive.",
      B: "Indirect.",
      C: "Passive",
      D: "Defensive."
    },
    correctAnswer: "D"
  },
  {
    id: 29,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 29,
    level: "Operations \u2013 Mission Specific",
    objective: "NFPA 472, 6.1",
    question: "NFPA standards identify optional mission-specific competencies for __________ level hazardous materials/WMD responders.",
    choices: {
      A: "Operations",
      B: "Technician",
      C: "Awareness",
      D: "Specialist"
    },
    correctAnswer: "A"
  },
  {
    id: 30,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 30,
    level: "Awareness",
    objective: "NFPA 472, 4.1.2.2",
    question: "The DOT defines a Hazardous Materials as one that poses an unreasonable risk when:",
    choices: {
      A: "it is being transported.",
      B: "it is not properly contained or stored.",
      C: "it is used in a reasonable, controlled manner.",
      D: "it is exposed to common environmental conditions."
    },
    correctAnswer: "B"
  },
  {
    id: 31,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 31,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "The bulk of the new chemicals introduced each year fall into one of three categories, two of which are industrial chemicals and household cleaners. What is the third?",
    choices: {
      A: "Medicines",
      B: "Military products",
      C: "Fire suppression agents",
      D: "Lawn care products"
    },
    correctAnswer: "D"
  },
  {
    id: 32,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 32,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "Which statement best describes how hazardous materials regulations are created?",
    choices: {
      A: "They are created in each fire department separately by that department.",
      B: "They are issued by government bodies such as OSHA.",
      C: "They are formed by participation from industry manufacturers.",
      D: "They are laws, passed by the several states\u2019 legislatures."
    },
    correctAnswer: "B"
  },
  {
    id: 33,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 33,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What sub-organization within the NFPA produces the hazardous materials/WMD standards?",
    choices: {
      A: "Technical Committee on Hazardous Materials Response Personnel",
      B: "Special Task Force on Hazardous Materials Substances, Responses, and Disposal",
      C: "Scientific and Technical Committee for Field Applications",
      D: "Study Group on the Integration of Applicable Hazardous Materials Regulations"
    },
    correctAnswer: "A"
  },
  {
    id: 34,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 34,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "Each U.S. state has the right to adopt and supersede safety and health regulations put forth by federal OSHA. What are the states that choose that option called?",
    choices: {
      A: "OSHA-exempt states",
      B: "State-plan states",
      C: "Sub 6 states",
      D: "Compliant states"
    },
    correctAnswer: "B"
  },
  {
    id: 35,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 35,
    level: "Administration",
    objective: "NFPA 472, 2.2",
    question: "The NFPA has produced three standards on various aspects of hazardous materials and emergency responses to them. What is one of these standards?",
    choices: {
      A: "1901",
      B: "1002",
      C: "473",
      D: "10"
    },
    correctAnswer: "C"
  },
  {
    id: 36,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 36,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1.1",
    question: "What level of hazardous materials training enables first responders to recognize a potential hazardous materials emergency, protect themselves, isolate the area, and call for assistance?",
    choices: {
      A: "Awareness",
      B: "Operations",
      C: "Scout",
      D: "Field"
    },
    correctAnswer: "A"
  },
  {
    id: 37,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 37,
    level: "Administration",
    objective: "NFPA 472, 2.3.1",
    question: "After the initial training requirements, what is the OSHA requirement for refresher training?",
    choices: {
      A: "There is no requirement for refresher training.",
      B: "Once every two years",
      C: "Annually",
      D: "Annually if no responses occurred during the year"
    },
    correctAnswer: "C"
  },
  {
    id: 38,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 38,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What committees gather and disseminate information about hazardous materials to the public?",
    choices: {
      A: "IOSCO regional committees",
      B: "USFA annual planning committees",
      C: "Industry self-monitoring committees",
      D: "Local emergency planning committees"
    },
    correctAnswer: "D"
  },
  {
    id: 39,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 39,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "The __________ serves as the liaison between local and state levels of authority.",
    choices: {
      A: "local emergency planning committee",
      B: "state emergency response commission",
      C: "federal coordination and reporting hotline",
      D: "regional hazardous materials team"
    },
    correctAnswer: "B"
  },
  {
    id: 40,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 5.3.1",
    question: "Hazardous materials response agencies should focus incident-planning activities on __________ hazards in the jurisdiction.",
    choices: {
      A: "residential",
      B: "potential",
      C: "vulnerable",
      D: "target"
    },
    correctAnswer: "D"
  },
  {
    id: 41,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 41,
    level: "Operations",
    objective: "NFPA 472, 5.3.1",
    question: "In hazardous materials pre-incident planning, once the agency has identified the threats in its jurisdiction, what should the agency do next?",
    choices: {
      A: "Take no further action.",
      B: "Determine how it will respond.",
      C: "Run full-scale drill exercises.",
      D: "Run table-top drill exercises."
    },
    correctAnswer: "B"
  },
  {
    id: 42,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 42,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1.1",
    question: "What is the NFPA standard for competence of responders to hazardous materials/weapons of mass destruction incidents?",
    choices: {
      A: "470",
      B: "471",
      C: "472",
      D: "473"
    },
    correctAnswer: "C"
  },
  {
    id: 43,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 43,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "How are standards for hazardous materials developed?",
    choices: {
      A: "They are created in each fire department, separately, by that department.",
      B: "They are formed by participation from industry manufacturers.",
      C: "They are laws, passed by the several states\u2019 legislatures.",
      D: "They are issued by nongovernmental agencies such as NFPA."
    },
    correctAnswer: "D"
  },
  {
    id: 44,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 44,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What section of 29 CFR 1910.120 covers emergency response?",
    choices: {
      A: "H",
      B: "M",
      C: "P",
      D: "Q"
    },
    correctAnswer: "D"
  },
  {
    id: 45,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 45,
    level: "Technician",
    objective: "NFPA 472, 7.1.1.1",
    question: "Which tactical activity requires technician level training?",
    choices: {
      A: "Basic hazard and risk assessment",
      B: "Planning a response to a leak",
      C: "Performing decontamination",
      D: "Plugging or patching"
    },
    correctAnswer: "D"
  },
  {
    id: 46,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 46,
    level: "Definitions",
    objective: "NFPA 472, 3.3",
    question: "What federal agency enforces and publicizes laws and regulations governing transportation of goods?",
    choices: {
      A: "OSA",
      B: "OPA",
      C: "DOT",
      D: "DOHA"
    },
    correctAnswer: "C"
  },
  {
    id: 47,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 47,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What federal agency regulates and governs issues related to hazardous materials in the environment?",
    choices: {
      A: "OSHA",
      B: "DOA",
      C: "DOE",
      D: "EPA"
    },
    correctAnswer: "D"
  },
  {
    id: 48,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 48,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.1.1.1, 5.1.1.1",
    question: "What dictates the actions taken at a hazardous materials incident?",
    choices: {
      A: "The chemical involved",
      B: "The level of protection",
      C: "The type of equipment",
      D: "The type of decontamination"
    },
    correctAnswer: "A"
  },
  {
    id: 49,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 49,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What NFPA standard addresses competencies for emergency medical personnel working a hazardous materials/WMD incident?",
    choices: {
      A: "470",
      B: "471",
      C: "472",
      D: "473"
    },
    correctAnswer: "D"
  },
  {
    id: 50,
    quiz: 1,
    quizTitle: "General",
    originalNumber: 50,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.1.1.1, 5.1.2.2, 6.1.1.1",
    question: "The following is a list of actions that might be taken on a hazardous materials incident. Which action is appropriate for operations level responders but not for awareness level responders?",
    choices: {
      A: "Avoid contact with the material.",
      B: "Take steps to contain the release.",
      C: "Eliminate ignition sources.",
      D: "Use the ERG to identify the material."
    },
    correctAnswer: "B"
  },

  // ─── QUIZ #2 — HAZARDOUS MATERIALS PROPERTIES AND EFFECTS (Questions 51–100) ──
  {
    id: 51,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "The measurable characteristics of a chemical are called __________ properties.",
    choices: {
      A: "molecular",
      B: "empirical",
      C: "reactivity",
      D: "physical"
    },
    correctAnswer: "D"
  },
  {
    id: 52,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "A ________ change occurs when a chemical undergoes a change at the molecular level, usually with a release of some form of energy.",
    choices: {
      A: "physical",
      B: "electrical",
      C: "morphological",
      D: "chemical"
    },
    correctAnswer: "D"
  },
  {
    id: 53,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "Rusting is an example of what type of change?",
    choices: {
      A: "Chemical",
      B: "Physical",
      C: "Mechanical",
      D: "Combustive"
    },
    correctAnswer: "A"
  },
  {
    id: 54,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the expansion ratio of propane?",
    choices: {
      A: "27:1",
      B: "80:1",
      C: "120:1",
      D: "270:1"
    },
    correctAnswer: "D"
  },
  {
    id: 55,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the flash point of gasoline?",
    choices: {
      A: "\u221280\u00b0F",
      B: "\u221245\u00b0F",
      C: "25\u00b0F",
      D: "75\u00b0F"
    },
    correctAnswer: "B"
  },
  {
    id: 56,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the approximate flash point of diesel fuel?",
    choices: {
      A: "120\u00b0F",
      B: "240\u00b0F",
      C: "360\u00b0F",
      D: "485\u00b0F"
    },
    correctAnswer: "A"
  },
  {
    id: 57,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is it called when there is too much fuel in a fuel/air mixture?",
    choices: {
      A: "Too lean",
      B: "Condensation",
      C: "Too rich",
      D: "Saturated"
    },
    correctAnswer: "C"
  },
  {
    id: 58,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 8,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "How is flammable range related to the relative danger of a substance?",
    choices: {
      A: "The higher the bottom number, the more dangerous the substance is.",
      B: "The narrower the range, the more dangerous the substance is.",
      C: "The wider the range, the more dangerous the substance is.",
      D: "There is no relationship between these quantities."
    },
    correctAnswer: "C"
  },
  {
    id: 59,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What does it mean if a substance\u2019s vapor density is 2.3?",
    choices: {
      A: "It will float in air.",
      B: "It has a relatively high boiling point.",
      C: "It has an extraordinarily high boiling point.",
      D: "It will sink in air."
    },
    correctAnswer: "D"
  },
  {
    id: 60,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What mnemonic helps fire fighters remember a set of lighter-than-air gases?",
    choices: {
      A: "RISING POP",
      B: "4H MEDIC ANNA",
      C: "OH ME TOO",
      D: "BRAIN 2 ME"
    },
    correctAnswer: "B"
  },
  {
    id: 61,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "Normal Temperature and Pressure (NTP) for vapor pressures assume a standard ambient temperature of:",
    choices: {
      A: "0\u00b0C.",
      B: "20\u00b0C.",
      C: "70\u00b0C.",
      D: "100\u00b0C."
    },
    correctAnswer: "B"
  },
  {
    id: 62,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "__________ is to liquids as vapor density is to gases.",
    choices: {
      A: "Specific gravity",
      B: "Volatility",
      C: "Viscosity",
      D: "Molecular weight"
    },
    correctAnswer: "A"
  },
  {
    id: 63,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What will a liquid with a specific gravity of 0.7 do in water?",
    choices: {
      A: "Float on top",
      B: "Sink to the bottom",
      C: "Mix",
      D: "Dissolve"
    },
    correctAnswer: "A"
  },
  {
    id: 64,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "Corrosives can be broken down into:",
    choices: {
      A: "Polars and non-polars.",
      B: "Chlorine-based and hydrogen-based corrosives.",
      C: "Acids and bases.",
      D: "Liquids and solids."
    },
    correctAnswer: "C"
  },
  {
    id: 65,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "At what pH is a substance neither acidic nor basic?",
    choices: {
      A: "0",
      B: "1",
      C: "7",
      D: "15"
    },
    correctAnswer: "C"
  },
  {
    id: 66,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 5.2.2",
    question: "How is the LD50 typically expressed?",
    choices: {
      A: "Milligrams per kilogram",
      B: "Milligrams per cubic meter",
      C: "Milligrams per liter",
      D: "Parts per million"
    },
    correctAnswer: "A"
  },
  {
    id: 67,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 17,
    level: "Awareness",
    objective: "NFPA 472, 4.2.3, 4.4.1",
    question: "Which term refers to the residue of a chemical that has been released and has come into contact with people, the environment, and animals?",
    choices: {
      A: "Infection",
      B: "Transfer",
      C: "Exposure",
      D: "Contamination"
    },
    correctAnswer: "D"
  },
  {
    id: 68,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 18,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "Which term refers to a material capable of posing an unreasonable risk to health, safety, or the environment?",
    choices: {
      A: "Contaminant",
      B: "Hazardous material",
      C: "Class II substance",
      D: "Toxin"
    },
    correctAnswer: "B"
  },
  {
    id: 69,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 19,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "What is secondary contamination?",
    choices: {
      A: "Contamination with a Class II substance or radioactivity",
      B: "Contamination with small amounts that do not cause harm",
      C: "Contact with another benign substance",
      D: "A contaminated person or object contaminating someone else, such as a rescuer"
    },
    correctAnswer: "D"
  },
  {
    id: 70,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What mnemonic helps fire fighters remember the seven categories of harm that can be caused by terrorism agents or other hazardous materials?",
    choices: {
      A: "WAFFLES",
      B: "PANOPRY",
      C: "TRACEMP or TEAMCPR",
      D: "CALLUPP"
    },
    correctAnswer: "C"
  },
  {
    id: 71,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 21,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What type of changes can chemicals undergo when subjected to outside influences, such as heat, cold, and pressure?",
    choices: {
      A: "Thermoplastic",
      B: "Physical",
      C: "Thermodynamic",
      D: "Spatial"
    },
    correctAnswer: "B"
  },
  {
    id: 72,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 5.2.2",
    question: "When the letters LD or LC are followed by a number, what does that number indicate?",
    choices: {
      A: "The average short-term exposure limit",
      B: "The percentage of test subjects that will die when exposed to a specified amount",
      C: "The lethal amount for all subjects of a specific test group",
      D: "The average permissible exposure limit"
    },
    correctAnswer: "B"
  },
  {
    id: 73,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "When a chemical change occurs, the event is usually accompanied by:",
    choices: {
      A: "the release of some form of energy.",
      B: "at least one of the substances boiling.",
      C: "a momentary pseudo- or cold boil.",
      D: "the evolution of some kind of gas."
    },
    correctAnswer: "A"
  },
  {
    id: 74,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the temperature at which a liquid continuously gives off vapors?",
    choices: {
      A: "Evaporation point",
      B: "Flash point",
      C: "Boiling point",
      D: "Condensation point"
    },
    correctAnswer: "C"
  },
  {
    id: 75,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "Flammable liquids with low boiling points are dangerous because:",
    choices: {
      A: "a relatively low temperature can start the liquid boiling.",
      B: "once one of these substances begins to boil, it is very difficult to make it stop.",
      C: "a low boiling point translates into a tendency for early explosion in a fire.",
      D: "they may produce large volumes of flammable vapor at relatively low temperatures."
    },
    correctAnswer: "D"
  },
  {
    id: 76,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 26,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the temperature at which a flammable liquid will ignite without the need for an external ignition source?",
    choices: {
      A: "Fire point",
      B: "Flash point",
      C: "Self-sustaining temperature",
      D: "Ignition temperature"
    },
    correctAnswer: "D"
  },
  {
    id: 77,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is it called when there is not enough fuel in a fuel/air mixture?",
    choices: {
      A: "Too rich",
      B: "Starvation",
      C: "Too lean",
      D: "Pre-ignition"
    },
    correctAnswer: "C"
  },
  {
    id: 78,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What characteristic of a gas is quantified as its vapor density?",
    choices: {
      A: "Its tendency to dissipate in open air",
      B: "Its weight relative to air",
      C: "How much moisture it contains",
      D: "How thickly it boils"
    },
    correctAnswer: "B"
  },
  {
    id: 79,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 29,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the vapor density of air?",
    choices: {
      A: "14.7",
      B: "3.1",
      C: "1.7",
      D: "1"
    },
    correctAnswer: "D"
  },
  {
    id: 80,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 30,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What does the C stand for in 4H MEDIC ANNA?",
    choices: {
      A: "Contain",
      B: "Cervical",
      C: "Casualties",
      D: "Carbon monoxide"
    },
    correctAnswer: "D"
  },
  {
    id: 81,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 31,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "How does the vapor pressure of a liquid relate to its rate of evaporation?",
    choices: {
      A: "There is no relationship between these two quantities.",
      B: "Vapor pressure and rate of evaporation are synonymous.",
      C: "The greater the vapor pressure, the slower a liquid will evaporate.",
      D: "The greater the vapor pressure, the faster a liquid will evaporate."
    },
    correctAnswer: "D"
  },
  {
    id: 82,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "Vapor pressures are usually reported in references at an assumed standard temperature of 20\u00baC. Approximately what temperature is that, in everyday terms?",
    choices: {
      A: "Room temperature",
      B: "Too hot to touch, but below boiling",
      C: "Right at the boiling point of water",
      D: "Just above freezing"
    },
    correctAnswer: "A"
  },
  {
    id: 83,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 33,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What quantity is the weight of a liquid as compared to an equal volume of water?",
    choices: {
      A: "Vapor density",
      B: "Atmospheric pressure",
      C: "Specific gravity",
      D: "Buoyancy"
    },
    correctAnswer: "C"
  },
  {
    id: 84,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 34,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the specific gravity of water?",
    choices: {
      A: "10",
      B: "7",
      C: "1",
      D: "0"
    },
    correctAnswer: "C"
  },
  {
    id: 85,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 35,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "What term refers to the ability of a material to cause damage on contact to skin, eyes, or other body parts?",
    choices: {
      A: "Organicity",
      B: "Volatility",
      C: "Corrosivity",
      D: "Reactivity"
    },
    correctAnswer: "C"
  },
  {
    id: 86,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 36,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "Which of the following pH values would indicate a strong acid?",
    choices: {
      A: "9.5",
      B: "7.0",
      C: "4.3",
      D: "1.7"
    },
    correctAnswer: "D"
  },
  {
    id: 87,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is one toxic chemical found in most smoke caused by fire?",
    choices: {
      A: "Sodium",
      B: "Xenon",
      C: "Cyanide",
      D: "Acetic acid"
    },
    correctAnswer: "C"
  },
  {
    id: 88,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 38,
    level: "Operations",
    objective: "NFPA 472, 5.2.2",
    question: "Which is a type of radiation?",
    choices: {
      A: "Omega",
      B: "Delta",
      C: "Alpha",
      D: "Theta"
    },
    correctAnswer: "C"
  },
  {
    id: 89,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 39,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.4.1, 5.2.3",
    question: "What is an etiological agent?",
    choices: {
      A: "A biohazard agent causing illness or death",
      B: "A substance that gives off radiation",
      C: "A dangerous material registered with the EPA",
      D: "A substance that can cause harm to humans"
    },
    correctAnswer: "A"
  },
  {
    id: 90,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 40,
    level: "Awareness",
    objective: "NFPA 472, 5.2.3",
    question: "________ identify(ies) the hazard as a liquid, solid, or gas.",
    choices: {
      A: "Matter properties",
      B: "State of matter",
      C: "Physical matter",
      D: "Chemical matter"
    },
    correctAnswer: "B"
  },
  {
    id: 91,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 41,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What term describes the volume increase that occurs when a liquid material changes to a gas?",
    choices: {
      A: "Off-gassing",
      B: "Liquefaction",
      C: "Expansion ratio",
      D: "Vapor pressure"
    },
    correctAnswer: "C"
  },
  {
    id: 92,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 42,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the term for a catastrophic failure of a pressurized cylinder of liquid?",
    choices: {
      A: "BEDEL",
      B: "PLUME",
      C: "CLOPE",
      D: "BLEVE"
    },
    correctAnswer: "D"
  },
  {
    id: 93,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 43,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "A change in the state of a material is known as a ________ change.",
    choices: {
      A: "physical",
      B: "chemical",
      C: "property",
      D: "matter"
    },
    correctAnswer: "A"
  },
  {
    id: 94,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 44,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "The alteration of the molecular nature of a material is known as a ________ change.",
    choices: {
      A: "physical",
      B: "chemical",
      C: "property",
      D: "matter"
    },
    correctAnswer: "B"
  },
  {
    id: 95,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 45,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the boiling point of water?",
    choices: {
      A: "112\u00baF",
      B: "112\u00baC",
      C: "212\u00baF",
      D: "212\u00baC"
    },
    correctAnswer: "C"
  },
  {
    id: 96,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 46,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the standard atmospheric pressure at sea level?",
    choices: {
      A: "1 psi",
      B: "7.7 psi",
      C: "12.8 psi",
      D: "14.7 psi"
    },
    correctAnswer: "D"
  },
  {
    id: 97,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 47,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is one of the most important aspects to consider when looking at the fire potential of a flammable liquid?",
    choices: {
      A: "Flammable range",
      B: "Explosive range",
      C: "Propagation rating",
      D: "Flame spread rating"
    },
    correctAnswer: "A"
  },
  {
    id: 98,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 48,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the temperature at which a liquid fuel gives off sufficient vapor such that when an ignition source is present the vapors will ignite?",
    choices: {
      A: "Flammable range",
      B: "Flash point",
      C: "Fire point",
      D: "Ignition temperature"
    },
    correctAnswer: "B"
  },
  {
    id: 99,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 49,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "What is the temperature at which sustained combustion will occur?",
    choices: {
      A: "Flammable range",
      B: "Flash point",
      C: "Fire point",
      D: "Ignition temperature"
    },
    correctAnswer: "C"
  },
  {
    id: 100,
    quiz: 2,
    quizTitle: "Hazardous Materials Properties and Effects",
    originalNumber: 50,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "Which term refers to the concentration of a gas or vapor in air that will burn if provided with a source of ignition?",
    choices: {
      A: "Flash point",
      B: "Vaporization range",
      C: "Flammable range",
      D: "Combustible limits"
    },
    correctAnswer: "C"
  }
];
