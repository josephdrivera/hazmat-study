/**
 * QUESTION_BANK — instructor handouts from Hartford County Regional Fire School
 * Hazardous Materials Awareness / Operational / WMD
 *
 * Quiz #1 (id 1–50): General — 50 questions
 * Quiz #2 (id 51–100): Hazardous Materials Properties and Effects — 50 questions
 * Quiz #3 (id 101–150): Recognition and Identification — 50 questions
 * Quiz #4 (id 151–200): Estimate Potential Harm and Planning the Response — 50 questions
 * Quiz #5 (id 201–250): Implementing the Planned Response — 50 questions
 * Quiz #6 (id 251–300): Terrorism — 50 questions
 * Quiz #7 (id 301–350): Personal Protective Equipment — 50 questions
 * Quiz #8 (id 351–382): Mass Decontamination — 32 questions
 * Quiz #9 (id 383–432): Technical Decontamination — 50 questions
 * Quiz #10 (id 433–472): Evidence Preservation and Sampling — 40 questions
 * Quiz #11 (id 473–522): Product Control — 50 questions
 * Quiz #12 (id 523–572): Air Monitoring and Sampling — 50 questions
 * Quiz #13 (id 573–617): Victim Rescue and Recovery — 45 questions
 * Quiz #14 (id 618–642): Response to Illicit Laboratories — 25 questions
 *
 * Source: all_quiz_and_answer_sheets.pdf (answer keys on PDF pages 117–130).
 * Quizzes 1 and 2 were already in this file and match that source.
 * Quizzes 3–14 were imported from the same PDF without paraphrasing.
 * Two line-break hyphens were rejoined: "air-purifying" and "live-human".
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
  },

  // ─── QUIZ #3 — RECOGNITION AND IDENTIFICATION ───
  {
    id: 101,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 1,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.5",
    question: "A cryogenic liquid has a boiling point lower than:",
    choices: {
      A: "100°F.",
      B: "32°F.",
      C: "0°F.",
      D: "−150°F."
    },
    correctAnswer: "D"
  },
  {
    id: 102,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 2,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.1.2.2",
    question: "How large must the capacity of a liquid storage container be to qualify as a bulk storage container?",
    choices: {
      A: "More than 119 gallons",
      B: "More than 499 gallons",
      C: "1000 gallons or more",
      D: "2500 gallons or more"
    },
    correctAnswer: "A"
  },
  {
    id: 103,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2, 5.2.1.4",
    question: "What is the term for an engineered catch basin around a 5000-gallon liquid container that is designed to contain product if the container fails?",
    choices: {
      A: "Auxiliary Diking",
      B: "Moller wall",
      C: "Confinement barrier",
      D: "Secondary containment"
    },
    correctAnswer: "D"
  },
  {
    id: 104,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.4",
    question: "Above-ground storage tanks (ASTs) are:",
    choices: {
      A: "pressurized.",
      B: "non-pressurized.",
      C: "either pressurized or non-pressurized.",
      D: "neither pressurized nor non-pressurized."
    },
    correctAnswer: "C"
  },
  {
    id: 105,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.4",
    question: "What do large, above-ground, horizontal storage tanks typically hold?",
    choices: {
      A: "Nonflammable liquids",
      B: "Silica or aluminum grains",
      C: "Flammable or combustible liquids",
      D: "Liquid foodstuffs, such as milk or juice"
    },
    correctAnswer: "C"
  },
  {
    id: 106,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.4",
    question: "How many gallons can be stored in pressurized horizontal tanks?",
    choices: {
      A: "10 or less",
      B: "10 to 100",
      C: "100 to 1000",
      D: "More than 1000"
    },
    correctAnswer: "D"
  },
  {
    id: 107,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.2, 5.2.1.2.1",
    question: "Are intermodal tanks shipping or storage vehicles?",
    choices: {
      A: "Neither",
      B: "Shipping",
      C: "Storage",
      D: "Both"
    },
    correctAnswer: "D"
  },
  {
    id: 108,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 8,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.2, 5.2.1.2.1",
    question: "Are intermodal tanks pressurized or non-pressurized?",
    choices: {
      A: "They are neither pressurized nor non-pressurized.",
      B: "They can be either pressurized or non-pressurized.",
      C: "Pressurized only",
      D: "Non-pressurized only"
    },
    correctAnswer: "B"
  },
  {
    id: 109,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.2, 5.2.1.2.1",
    question: "What is one type of intermodal tank designation?",
    choices: {
      A: "TXD-IM-3",
      B: "U-Z751",
      C: "IM-101",
      D: "Type 7"
    },
    correctAnswer: "C"
  },
  {
    id: 110,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.5",
    question: "Closed-head drums have a permanently attached lid with one or more small openings. What are these small openings called?",
    choices: {
      A: "Bungs",
      B: "Ports",
      C: "Bobs",
      D: "Eyes"
    },
    correctAnswer: "A"
  },
  {
    id: 111,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.5",
    question: "How is the lid on an open-head drum fastened?",
    choices: {
      A: "Hooks welded to the sides grip it.",
      B: "Crimping the lid flange over the drum lip",
      C: "By being twisted onto a thread encircling the body",
      D: "By a ring and tightening hardware"
    },
    correctAnswer: "D"
  },
  {
    id: 112,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.5",
    question: "What kind of container holds from 5 to 15 gallons of corrosive liquid?",
    choices: {
      A: "Bung",
      B: "Dewar flask",
      C: "Carboy",
      D: "Tote bag"
    },
    correctAnswer: "C"
  },
  {
    id: 113,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.5",
    question: "What would be a typical pressure reading, in psi, on a standard oxygen cylinder used in the medical field?",
    choices: {
      A: "20,000",
      B: "2000",
      C: "200",
      D: "20"
    },
    correctAnswer: "B"
  },
  {
    id: 114,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 14,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.5",
    question: "What is the term for gaseous substances that have been chilled until they liquefy?",
    choices: {
      A: "Antigens",
      B: "Thermogens",
      C: "Cryogens",
      D: "Barogens"
    },
    correctAnswer: "C"
  },
  {
    id: 115,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.5",
    question: "What do Dewar containers hold?",
    choices: {
      A: "Bulk amounts of distilled spirits",
      B: "Substances that cannot come into contact with foodstuffs",
      C: "Anything that is transported by passenger jet",
      D: "Cryogenic liquids"
    },
    correctAnswer: "D"
  },
  {
    id: 116,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "What is the expansion ratio of cryogenic helium?",
    choices: {
      A: "1500:1",
      B: "750:1",
      C: "300:1",
      D: "19:1"
    },
    correctAnswer: "B"
  },
  {
    id: 117,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 17,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.3",
    question: "What is the purpose of the rings around an MC-312 corrosives tanker?",
    choices: {
      A: "Cooling",
      B: "Heating",
      C: "Structural stability",
      D: "Vapor collection"
    },
    correctAnswer: "C"
  },
  {
    id: 118,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 18,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.1",
    question: "What is the approximate maximum capacity of a rail tank car, in gallons?",
    choices: {
      A: "10,000",
      B: "15,000",
      C: "20,000",
      D: "30,000"
    },
    correctAnswer: "D"
  },
  {
    id: 119,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 19,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.1",
    question: "Which type of railcar design should a fire fighter be able to identify?",
    choices: {
      A: "Carboy",
      B: "Ballast regulator",
      C: "Mixed cargo",
      D: "Special use"
    },
    correctAnswer: "D"
  },
  {
    id: 120,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.5",
    question: "What is the function of a Dewar container?",
    choices: {
      A: "To keep contents hot",
      B: "To minimize sloshing of contents",
      C: "To keep contents cold",
      D: "To hold contents in negative pressure"
    },
    correctAnswer: "C"
  },
  {
    id: 121,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 21,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.1.2.2",
    question: "How large must the internal capacity of a solids storage container be for it to qualify as a bulk storage container?",
    choices: {
      A: "More than 351 pounds",
      B: "More than 405 pounds",
      C: "More than 599 pounds",
      D: "More than 882 pounds"
    },
    correctAnswer: "D"
  },
  {
    id: 122,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.4",
    question: "What does the A stand for in AST?",
    choices: {
      A: "Air",
      B: "Automatic",
      C: "Alerting",
      D: "Above"
    },
    correctAnswer: "D"
  },
  {
    id: 123,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.4",
    question: "Which one of these materials are non-pressurized horizontal storage tanks typically made of?",
    choices: {
      A: "Steel",
      B: "Zinc",
      C: "Manganese",
      D: "Iron"
    },
    correctAnswer: "A"
  },
  {
    id: 124,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.4",
    question: "Which is an indentifying characteristic of pressurized horizontal tanks?",
    choices: {
      A: "Red stenciling",
      B: "Wheels at one end",
      C: "Access hatches down the side",
      D: "Rounded ends"
    },
    correctAnswer: "D"
  },
  {
    id: 125,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 25,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.4, 5.2.1.2.2",
    question: "What is the name of the bulk storage vessel, described as a portable plastic tank surrounded by a stainless steel web, which can hold a few hundred gallons?",
    choices: {
      A: "Cistern",
      B: "Vault",
      C: "Tote",
      D: "Magazine"
    },
    correctAnswer: "C"
  },
  {
    id: 126,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 26,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.2, 5.2.1.2.1",
    question: "About how much do intermodal tanks hold, in gallons?",
    choices: {
      A: "60,000",
      B: "6000",
      C: "600",
      D: "60"
    },
    correctAnswer: "B"
  },
  {
    id: 127,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.2, 5.2.1.2.1",
    question: "What do intermodal tanks look like?",
    choices: {
      A: "Round horizontal tanks in a box-like steel framework",
      B: "Similar to a standard MC-306 over-the-road trailer",
      C: "Car-size rectangular boxes",
      D: "Short, squat, round tanks, chest-high, with a lifting ring at the top"
    },
    correctAnswer: "A"
  },
  {
    id: 128,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.2",
    question: "What is distinctive about IMO Type 5 containers?",
    choices: {
      A: "They are open to the air.",
      B: "They are vacuum containers.",
      C: "They are high-pressure vessels.",
      D: "They are designed for prolonged immersion in saltwater."
    },
    correctAnswer: "C"
  },
  {
    id: 129,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 29,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.5",
    question: "Which statement about drum construction is correct?",
    choices: {
      A: "Regulations pertaining to drum construction vary by state.",
      B: "NIOSH establishes specifications for drum construction.",
      C: "By international treaty, all drums everywhere are made of the same materials and in the same way.",
      D: "It is determined by the type of the material it will contain."
    },
    correctAnswer: "D"
  },
  {
    id: 130,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 30,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.5",
    question: "Closed-head drums usually have bungs of this size.",
    choices: {
      A: "12 inches",
      B: "8 inches",
      C: "6 inches",
      D: "2 inches"
    },
    correctAnswer: "D"
  },
  {
    id: 131,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 31,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.5",
    question: "A thick glass carboy protected by a wooden or foam crate will typically contain:",
    choices: {
      A: "flammable liquids.",
      B: "pesticides.",
      C: "strong bases.",
      D: "strong acids."
    },
    correctAnswer: "D"
  },
  {
    id: 132,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.5",
    question: "What is the maximum design pressure for a large, fixed-site, compressed-gas cylinder, in psi?",
    choices: {
      A: "Up to 2000",
      B: "5000 or more",
      C: "Between 10,000 and 15,000",
      D: "Up to and over 15,000"
    },
    correctAnswer: "B"
  },
  {
    id: 133,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 33,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.5",
    question: "What type of container holds cryogens?",
    choices: {
      A: "Carboy",
      B: "Pressure stick",
      C: "Dewar container",
      D: "Vacuum tube"
    },
    correctAnswer: "C"
  },
  {
    id: 134,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 34,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "If a volume of cryogenic helium is allowed to warm and vaporize entirely in its container, what kind of pressure (in psi) could that generate?",
    choices: {
      A: "800",
      B: "2500",
      C: "14,500",
      D: "125,000"
    },
    correctAnswer: "C"
  },
  {
    id: 135,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 35,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.3",
    question: "What does MC-306 refer to?",
    choices: {
      A: "The tag on gas pumps that says \"this device must start on zero\"",
      B: "The grounding harness woven into gasoline-dispensing device hoses",
      C: "The test all gasoline products undergo to determine their octane value",
      D: "The familiar oval-shaped highway gasoline tanker"
    },
    correctAnswer: "D"
  },
  {
    id: 136,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 36,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.3",
    question: "Which one of these materials is most likely to be transported in a highway tanker that is narrower than most tankers and has several reinforcing rings around the circumference?",
    choices: {
      A: "Petroleum products",
      B: "Non-potable water",
      C: "Concentrated sulfuric acid",
      D: "Rebar"
    },
    correctAnswer: "C"
  },
  {
    id: 137,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.3",
    question: "What do tube trailers carry?",
    choices: {
      A: "Lengths of pipe",
      B: "Lengths of rod",
      C: "Cable",
      D: "Compressed gas"
    },
    correctAnswer: "D"
  },
  {
    id: 138,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 38,
    level: "Awareness",
    objective: "NFPA 472, 4.2.1",
    question: "What is the DOT hazard class for toxic substances?",
    choices: {
      A: "8",
      B: "6",
      C: "4",
      D: "1"
    },
    correctAnswer: "B"
  },
  {
    id: 139,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 39,
    level: "Awareness",
    objective: "NFPA 472, 4.2.1",
    question: "What is the term for any material that poses an unreasonable risk to human health, safety, or the environment?",
    choices: {
      A: "Hazardous good",
      B: "Dangerous material",
      C: "Hazardous material",
      D: "Dangerous commodity"
    },
    correctAnswer: "C"
  },
  {
    id: 140,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 4.2.1",
    question: "Which of the following is a significant drawback to using the senses to detect the presence of hazardous materials?",
    choices: {
      A: "They are unreliable.",
      B: "They become insensitive with prolonged exposure.",
      C: "Sensory inputs are easily confused.",
      D: "Their use involves potential exposure to the hazard."
    },
    correctAnswer: "D"
  },
  {
    id: 141,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 41,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.1.2.2, 5.2.1.1.5",
    question: "Drums, bags, and carboys are examples of ________ containers.",
    choices: {
      A: "non-bulk",
      B: "bulk",
      C: "flammable-materials",
      D: "dry-bulk"
    },
    correctAnswer: "A"
  },
  {
    id: 142,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 42,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.5, 5.2.1.3.2",
    question: "Which signal word indicates that the material is highly toxic by all routes of entry?",
    choices: {
      A: "Caution",
      B: "Danger-Poison",
      C: "Danger",
      D: "Warning"
    },
    correctAnswer: "B"
  },
  {
    id: 143,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 43,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.5, 5.2.1.3.2",
    question: "Which signal word indicates the material may cause severe eye damage or skin irritation?",
    choices: {
      A: "Caution",
      B: "Danger-Poison",
      C: "Danger",
      D: "Warning"
    },
    correctAnswer: "C"
  },
  {
    id: 144,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 44,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.5, 5.2.1.3.2",
    question: "Which signal word indicates the material is moderately toxic?",
    choices: {
      A: "Caution",
      B: "Danger-Poison",
      C: "Danger",
      D: "Warning"
    },
    correctAnswer: "D"
  },
  {
    id: 145,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 45,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.1, 5.2.1.1.5, 5.2.1.3.2",
    question: "Which signal word indicates the material has minor toxicity and may cause minor eye damage and skin irritation?",
    choices: {
      A: "Caution",
      B: "Danger-Poison",
      C: "Danger",
      D: "Warning"
    },
    correctAnswer: "A"
  },
  {
    id: 146,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 46,
    level: "Awareness",
    objective: "NFPA 472, 4.2.1",
    question: "What is the most common method of transporting hazardous materials?",
    choices: {
      A: "Rail",
      B: "Road",
      C: "Air",
      D: "Sea"
    },
    correctAnswer: "B"
  },
  {
    id: 147,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 47,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.3",
    question: "Which tanker is used to transport ammonia, butane, or propane?",
    choices: {
      A: "MC-306",
      B: "MC-312",
      C: "MC-331",
      D: "MC-338"
    },
    correctAnswer: "C"
  },
  {
    id: 148,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 48,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.3",
    question: "Which tanker is used to transport cryogenic materials?",
    choices: {
      A: "MC-306",
      B: "MC-312",
      C: "MC-331",
      D: "MC-338"
    },
    correctAnswer: "D"
  },
  {
    id: 149,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 49,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.1.1",
    question: "What is the internal working pressure of a pressurized railcar?",
    choices: {
      A: "100 to 500 psi",
      B: "500 to 1000 psi",
      C: "1000 to 2500 psi",
      D: "5000 to 6000 psi"
    },
    correctAnswer: "A"
  },
  {
    id: 150,
    quiz: 3,
    quizTitle: "Recognition and Identification",
    originalNumber: 50,
    level: "Operations",
    objective: "NFPA 472, 5.2.1.3.1",
    question: "Pipeline warning signs include a warning symbol, the pipeline owner's name, and a/an:",
    choices: {
      A: "UN ID number.",
      B: "emergency contact number.",
      C: "ERG guide number.",
      D: "hazard statement."
    },
    correctAnswer: "B"
  },

  // ─── QUIZ #4 — ESTIMATE POTENTIAL HARM AND PLANNING THE RESPONSE ───
  {
    id: 151,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2, 5.3.2, 5.4.3",
    question: "When choosing a route along which to respond to a reported hazardous materials incident, how should the approach be planned?",
    choices: {
      A: "From upwind and upgrade",
      B: "From upwind and downgrade",
      C: "From downwind and upgrade",
      D: "From downwind and downgrade"
    },
    correctAnswer: "A"
  },
  {
    id: 152,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "On which type of hazardous materials incident should early responders establish a plan for decontamination?",
    choices: {
      A: "On incidents involving gases or vapors",
      B: "On incidents where direct contact with the material is likely",
      C: "On incidents involving offensive operations",
      D: "On all incidents"
    },
    correctAnswer: "D"
  },
  {
    id: 153,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 5.2.4",
    question: "Which is a commonly used resource to determine the size of a vapor cloud?",
    choices: {
      A: "A scientific functions-capable calculator",
      B: "Specialized computer software",
      C: "Pre-incident plan",
      D: "GPS triangulation"
    },
    correctAnswer: "B"
  },
  {
    id: 154,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2, 5.3.3",
    question: "Which is a critical factor in determining the appropriate level of PPE?",
    choices: {
      A: "The experience of the fire fighters on hand",
      B: "The availability of protective gear available",
      C: "The physical state and characteristics of the material",
      D: "The responders' experience with this material"
    },
    correctAnswer: "C"
  },
  {
    id: 155,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2, 5.3.2",
    question: "Which is a defensive action?",
    choices: {
      A: "Plugging",
      B: "Patching",
      C: "Diking",
      D: "Product transfer"
    },
    correctAnswer: "C"
  },
  {
    id: 156,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 3.3.15.4",
    question: "Which function should occur in the warm zone?",
    choices: {
      A: "Command post",
      B: "Decontamination corridor",
      C: "Triage area",
      D: "Staging area"
    },
    correctAnswer: "B"
  },
  {
    id: 157,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 5.2.4",
    question: "What does the R stand for in ERG?",
    choices: {
      A: "Radiological",
      B: "Response",
      C: "Region",
      D: "Rules"
    },
    correctAnswer: "B"
  },
  {
    id: 158,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 8,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "What is the first priority on any hazardous material incident?",
    choices: {
      A: "Safety of responders",
      B: "Rescue of victims",
      C: "Stop leak",
      D: "Confine material"
    },
    correctAnswer: "A"
  },
  {
    id: 159,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 5.2.2, 5.3.4",
    question: "Which is a critical factor in determining the decontamination methods employed for a specific incident?",
    choices: {
      A: "Level of PPE",
      B: "Area exposed",
      C: "Specific hazard(s) involved",
      D: "Incident commander's preference"
    },
    correctAnswer: "C"
  },
  {
    id: 160,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 5.2.4",
    question: "What can be used to determine the pH of a hazardous material?",
    choices: {
      A: "Litmus paper",
      B: "Organic paper",
      C: "M-8 paper",
      D: "M-9 tape"
    },
    correctAnswer: "A"
  },
  {
    id: 161,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 6.7",
    question: "What does the abbreviation TLV stand for?",
    choices: {
      A: "Type limit variable",
      B: "Total limit viability",
      C: "Time length variable",
      D: "Threshold limit value"
    },
    correctAnswer: "D"
  },
  {
    id: 162,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 6.7",
    question: "Which value is the maximum concentration to which an adult can be exposed 8 hours per day, 40 hours per week?",
    choices: {
      A: "Time-weighted average",
      B: "Long-term exposure limit",
      C: "Working exposure limit",
      D: "Ceiling level"
    },
    correctAnswer: "A"
  },
  {
    id: 163,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 6.7",
    question: "______ is an atmospheric concentration of any substance that poses an immediate threat to life.",
    choices: {
      A: "Ceiling level",
      B: "Immediately Dangerous to Life and Health (IDLH)",
      C: "Short-term exposure limit",
      D: "Maximum exposure limit"
    },
    correctAnswer: "B"
  },
  {
    id: 164,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 6.7",
    question: "Which Threshold Limit Value sets a maximum concentration above which no exposure of any duration should be permitted?",
    choices: {
      A: "Ceiling",
      B: "Maximum exposure limit",
      C: "Short-term exposure limit",
      D: "Permissible exposure limit"
    },
    correctAnswer: "A"
  },
  {
    id: 165,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 6.7",
    question: "Which threshold limit value is the maximum concentration at which exposure should not exceed 15 minutes and should not be repeated more than four times per day?",
    choices: {
      A: "Time-weighted average",
      B: "Immediately dangerous to life and health (IDLH)",
      C: "Short-term exposure limit",
      D: "Permissible exposure limit"
    },
    correctAnswer: "C"
  },
  {
    id: 166,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 16,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "In the yellow and blue-bordered sections of the ERG, how are materials that are included in the Table of Initial Isolation and Protective Distances identified?",
    choices: {
      A: "They are in bold print.",
      B: "They are italicized.",
      C: "They are highlighted.",
      D: "They are underlined."
    },
    correctAnswer: "C"
  },
  {
    id: 167,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 17,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "Materials are listed in the green section of the ERG because of their:",
    choices: {
      A: "flammability or explosion hazard.",
      B: "toxicity.",
      C: "reactivity.",
      D: "instability."
    },
    correctAnswer: "B"
  },
  {
    id: 168,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 18,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "In the ERG, the Initial Isolation and Protective Action Distances are found on pages that have __________ borders.",
    choices: {
      A: "red",
      B: "yellow",
      C: "blue",
      D: "green"
    },
    correctAnswer: "D"
  },
  {
    id: 169,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 19,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "The ERG refers to the _______ as the area downwind of the spill or leak where steps must be taken to protect the public.",
    choices: {
      A: "Evacuation area",
      B: "Protective action distance",
      C: "Initial isolation zone",
      D: "Exclusion zone"
    },
    correctAnswer: "B"
  },
  {
    id: 170,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 20,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "What term does the ERG use for the distance from a spill or leak that all persons should be evacuated in all directions?",
    choices: {
      A: "Exclusion zone",
      B: "Protective area",
      C: "Contaminated area",
      D: "Initial isolation zone"
    },
    correctAnswer: "D"
  },
  {
    id: 171,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 21,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "As it applies to hazardous materials response strategy, what does the term \"isolation\" mean?",
    choices: {
      A: "Taking steps to control the direction of a material release and minimize downwind exposures",
      B: "Use of appropriate personal protective equipment to prevent direct contact with the material",
      C: "Preventing spread of a material beyond a specified zone or perimeter",
      D: "Keeping responders and the public a safe distance away from the hazard"
    },
    correctAnswer: "D"
  },
  {
    id: 172,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 22,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "What is the most effective way to maintain the security of an isolation perimeter?",
    choices: {
      A: "Posting security personnel",
      B: "Placing traffic cones, signage, and barrier tape",
      C: "Erecting barricades",
      D: "Using emergency vehicles to block access points"
    },
    correctAnswer: "A"
  },
  {
    id: 173,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 23,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "If it is necessary to isolate a hazardous materials incident, it will also be necessary to:",
    choices: {
      A: "Take protective actions.",
      B: "Deny entry.",
      C: "Contain the material.",
      D: "Evacuate."
    },
    correctAnswer: "B"
  },
  {
    id: 174,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 24,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "Relocation of people who are threatened by a potential hazard is called:",
    choices: {
      A: "Evacuation.",
      B: "Isolation.",
      C: "Decontamination.",
      D: "Rescue."
    },
    correctAnswer: "A"
  },
  {
    id: 175,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 5.2.1",
    question: "How can a thermal imaging camera be useful at a hazardous materials spill?",
    choices: {
      A: "To detect the direction of travel of a plume",
      B: "To predict the direction of travel of vapor or smoke",
      C: "To indicate the level of material remaining in a container",
      D: "To assist in material identification"
    },
    correctAnswer: "C"
  },
  {
    id: 176,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 26,
    level: "Technician",
    objective: "NFPA 472, 7.1.2.2",
    question: "What is the term for the amount of solute dissolved in a given amount of solution?",
    choices: {
      A: "Dispersion",
      B: "Concentration",
      C: "Diffusion",
      D: "pH"
    },
    correctAnswer: "B"
  },
  {
    id: 177,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 6.7",
    question: "How is the concentration of a gas typically expressed?",
    choices: {
      A: "PPM",
      B: "As a percentage",
      C: "pH",
      D: "Units of weight per unit of volume"
    },
    correctAnswer: "B"
  },
  {
    id: 178,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 28,
    level: "Operations",
    objective: "Appears in appendix of NFPA 472",
    question: "What is the purpose of a secondary device?",
    choices: {
      A: "Initiate detonation of the primary device",
      B: "Kill and injure emergency personnel",
      C: "Backup in case of failure of the primary device",
      D: "Create misdirection or a diversion"
    },
    correctAnswer: "B"
  },
  {
    id: 179,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 29,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What does the A stand for in the EVADE acronym?",
    choices: {
      A: "Avoid touching anything that might conceal an explosive device.",
      B: "Assist victims cautiously.",
      C: "Assess the scene for likely locations of secondary devices.",
      D: "Assume the presence of a secondary device at all scenes."
    },
    correctAnswer: "B"
  },
  {
    id: 180,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 30,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What does the EVADE acronym address?",
    choices: {
      A: "Decontamination",
      B: "Nerve agent poisoning",
      C: "Scene assessment",
      D: "Secondary devices"
    },
    correctAnswer: "D"
  },
  {
    id: 181,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 31,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What does the D stand for in the EVADE acronym?",
    choices: {
      A: "Deny entry.",
      B: "Do not become part of the problem.",
      C: "Designate and enforce scene control zones.",
      D: "Dike, dam, dilute, and divert."
    },
    correctAnswer: "C"
  },
  {
    id: 182,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 6.6.4.1",
    question: "Diversion of material is an example of which mode of operation?",
    choices: {
      A: "Offensive",
      B: "Confinement",
      C: "Combined",
      D: "Defensive"
    },
    correctAnswer: "D"
  },
  {
    id: 183,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 33,
    level: "Operations",
    objective: "NFPA 472, 6.6.4.1",
    question: "Dilution of material is an example of which mode of operation?",
    choices: {
      A: "Offensive",
      B: "Confinement",
      C: "Combined",
      D: "Defensive"
    },
    correctAnswer: "D"
  },
  {
    id: 184,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 34,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What service does the NFPA perform with regard to hazardous materials PPE?",
    choices: {
      A: "Creates standards",
      B: "Testing and certification",
      C: "Recommendations for usage",
      D: "All of the above."
    },
    correctAnswer: "A"
  },
  {
    id: 185,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 35,
    level: "Operations",
    objective: "NFPA 472, 6.2",
    question: "Where will you find recommendations for levels of hazardous materials PPE to be used under specific conditions?",
    choices: {
      A: "HAZWOPER regulations, Appendix B",
      B: "Emergency Response Guide (ERG)",
      C: "NFPA standards",
      D: "Material safety data sheets"
    },
    correctAnswer: "D"
  },
  {
    id: 186,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 36,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "For which situation will structural firefighting protective clothing provide you with adequate protection?",
    choices: {
      A: "You will be exposed to splashes of the material.",
      B: "You will have to handle the material.",
      C: "There are high atmospheric concentrations of the material.",
      D: "None of the above."
    },
    correctAnswer: "D"
  },
  {
    id: 187,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 5.3.3",
    question: "What is a proximity suit designed for?",
    choices: {
      A: "Limited exposures to high temperatures",
      B: "Protection from radiological hazards",
      C: "Protection from both chemical and heat hazards",
      D: "Hazardous materials support work, such as decontamination"
    },
    correctAnswer: "A"
  },
  {
    id: 188,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 38,
    level: "Operations",
    objective: "NFPA 472, 6.2.3.1",
    question: "Which term describes when a chemical passes through a material on a molecular level?",
    choices: {
      A: "Degradation",
      B: "Permeation",
      C: "Infiltration",
      D: "Impregnation"
    },
    correctAnswer: "B"
  },
  {
    id: 189,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 39,
    level: "Operations",
    objective: "NFPA 472, 6.2.3.1",
    question: "Signs that chemical protective clothing is undergoing the process of __________ include discoloration, charring, swelling, and shrinking.",
    choices: {
      A: "degradation",
      B: "corrosion",
      C: "decomposition",
      D: "deterioration"
    },
    correctAnswer: "A"
  },
  {
    id: 190,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 5.3.3",
    question: "An EPA Level _____ chemical-protective suit is one that is designed to protect the wearer from gases, vapors, and liquids.",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "A"
  },
  {
    id: 191,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 41,
    level: "Operations",
    objective: "NFPA 472, 5.3.3",
    question: "Which EPA level of protective equipment is required when working with highly toxic vapors?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "A"
  },
  {
    id: 192,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 42,
    level: "Operations",
    objective: "NFPA 472, 5.3.3",
    question: "You have responded to a hazardous materials incident involving a substance that has been positively identified. It is determined that this substance is harmful by inhalation but not by skin contact. What is the minimum EPA level of PPE for this situation?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "B"
  },
  {
    id: 193,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 43,
    level: "Operations",
    objective: "NFPA 472, 5.3.3",
    question: "What is the highest level of EPA chemical protective clothing that permits the use of an air-purifying respirator?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "C"
  },
  {
    id: 194,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 44,
    level: "Operations",
    objective: "NFPA 472, 5.3.3",
    question: "The use of EPA Level _____ protective clothing should only be used in situations where there is no atmospheric hazard.",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "D"
  },
  {
    id: 195,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 45,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "Which form of decontamination typically consists of removing contaminated clothing and dousing the victim with large volumes of water?",
    choices: {
      A: "Technical",
      B: "Mass",
      C: "Emergency",
      D: "Formal"
    },
    correctAnswer: "C"
  },
  {
    id: 196,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 46,
    level: "Operations",
    objective: "NFPA 472, 5.2.3, 5.3.4",
    question: "A victim of a motor vehicle accident involving hazardous materials is transported by ambulance to a hospital. This action will result in ______ of ambulance personnel and the medical care facility.",
    choices: {
      A: "Exposure",
      B: "Contamination",
      C: "Secondary contamination",
      D: "Infection"
    },
    correctAnswer: "C"
  },
  {
    id: 197,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 47,
    level: "Operations",
    objective: "NFPA 472, 5.2.3, 5.3.4",
    question: "Which is the best example of secondary contamination?",
    choices: {
      A: "Exposure to alpha radiation from broken transport packaging",
      B: "Contact occurring during operations by emergency personnel to resolve the incident",
      C: "Contact with material outside of its containment vessel or packaging",
      D: "Contact with runoff from firefighting operations on an ignited material"
    },
    correctAnswer: "D"
  },
  {
    id: 198,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 48,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "At a hazardous materials incident, what are the hot, warm, and cold zones?",
    choices: {
      A: "Control zones",
      B: "Isolation perimeters",
      C: "Protective action distances",
      D: "Groups or divisions"
    },
    correctAnswer: "A"
  },
  {
    id: 199,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 49,
    level: "Operations",
    objective: "NFPA 472, 5.3.3",
    question: "For hazardous materials responders, what is the most important element of personal protective equipment?",
    choices: {
      A: "Vapor protection",
      B: "Respiratory protection",
      C: "Splash protection",
      D: "Thermal protection"
    },
    correctAnswer: "B"
  },
  {
    id: 200,
    quiz: 4,
    quizTitle: "Estimate Potential Harm and Planning the Response",
    originalNumber: 50,
    level: "Technician",
    objective: "NFPA 472, 7.2.2",
    question: "Which is one of the three general types of IDLH atmospheres?",
    choices: {
      A: "Corrosive",
      B: "Oxygen-deficient",
      C: "Oxygen-enriched",
      D: "Combustible"
    },
    correctAnswer: "B"
  },

  // ─── QUIZ #5 — IMPLEMENTING THE PLANNED RESPONSE ───
  {
    id: 201,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 1,
    level: "Awareness",
    objective: "NFPA 472, 4.1.2.2",
    question: "Which term refers to assessing what is happening at the scene and then using that information to devise a plan of action?",
    choices: {
      A: "Hazard assessment",
      B: "Size-up",
      C: "Evaluation",
      D: "Command"
    },
    correctAnswer: "B"
  },
  {
    id: 202,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 2,
    level: "Awareness",
    objective: "NFPA 472, 4.1.2.2",
    question: "Which of the following is the starting point for making plans to bring an emergency situation under control?",
    choices: {
      A: "Size-up",
      B: "Salvage",
      C: "Forcible entry",
      D: "Ventilation"
    },
    correctAnswer: "A"
  },
  {
    id: 203,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 3,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What does the S in the acronym SIN stand for?",
    choices: {
      A: "Situational awareness",
      B: "Safety",
      C: "Size-up",
      D: "Spill"
    },
    correctAnswer: "B"
  },
  {
    id: 204,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 4,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What does the I in the acronym SIN stand for?",
    choices: {
      A: "Incident",
      B: "Information",
      C: "Identify",
      D: "Isolate"
    },
    correctAnswer: "D"
  },
  {
    id: 205,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 5,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "What is the first step after determining that a hazardous material is present?",
    choices: {
      A: "Establish control of the scene.",
      B: "Look up the substance in the ERG.",
      C: "Call CHEMTREC.",
      D: "Rescue endangered people."
    },
    correctAnswer: "A"
  },
  {
    id: 206,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 6,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "Once you have determined that a substance is leaking from a container, what should you do next?",
    choices: {
      A: "Isolate the material.",
      B: "Identify the material.",
      C: "Contain the spill.",
      D: "Consult the ERG."
    },
    correctAnswer: "A"
  },
  {
    id: 207,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 7,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "As it applies to hazardous materials response, what does the term \"isolation\" mean?",
    choices: {
      A: "Taking steps to control the direction of a material and subsequent exposure contact",
      B: "Use of appropriate personal protective equipment to prevent direct contact with the material",
      C: "Preventing spread of a material beyond a specified zone or perimeter",
      D: "Establishing a perimeter around the incident and controlling access"
    },
    correctAnswer: "D"
  },
  {
    id: 208,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 8,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "What is the purpose of an isolation perimeter?",
    choices: {
      A: "To mark the transition from the cold zone into the warm zone",
      B: "To prevent access by unauthorized personnel into the emergency scene",
      C: "To mark the transition from the warm zone into the hot zone",
      D: "To prevent spread of material from inside the perimeter to outside the perimeter"
    },
    correctAnswer: "B"
  },
  {
    id: 209,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 9,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "Where in the ERG can you find evacuation distances for small spills or fires?",
    choices: {
      A: "In the orange-bordered pages",
      B: "In the Material Name Index",
      C: "In the Emergency Response Index",
      D: "In the green-bordered pages"
    },
    correctAnswer: "A"
  },
  {
    id: 210,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "A gasoline tanker has overturned in a tunnel and is spilling gasoline onto the highway. What level of hazardous materials incident is this?",
    choices: {
      A: "Level IV",
      B: "Level III",
      C: "Level II",
      D: "Level I"
    },
    correctAnswer: "C"
  },
  {
    id: 211,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which is a level III hazardous materials incident?",
    choices: {
      A: "Any significant flammable liquid spill",
      B: "A leaking 1-ton (910-kg) cylinder",
      C: "One requiring large-scale evacuation",
      D: "One that can be handled by the local jurisdiction"
    },
    correctAnswer: "C"
  },
  {
    id: 212,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which job function is part of the ICS command staff?",
    choices: {
      A: "Support",
      B: "Service",
      C: "Public Information",
      D: "Communication"
    },
    correctAnswer: "C"
  },
  {
    id: 213,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which job function is part of the ICS command staff?",
    choices: {
      A: "Operations",
      B: "Liaison",
      C: "Resource",
      D: "Agency Representative"
    },
    correctAnswer: "B"
  },
  {
    id: 214,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "The safety officer position is part of which ICS organizational element?",
    choices: {
      A: "The medical unit",
      B: "The operations section",
      C: "The safety branch",
      D: "The command staff"
    },
    correctAnswer: "D"
  },
  {
    id: 215,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "To whom do individuals on the command staff directly report?",
    choices: {
      A: "The staging manager",
      B: "The operations section chief",
      C: "The planning director",
      D: "The incident commander"
    },
    correctAnswer: "D"
  },
  {
    id: 216,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which position is responsible for monitoring activities to ensure the safety of personnel?",
    choices: {
      A: "Operations section chief",
      B: "Safety officer",
      C: "Medical officer",
      D: "Compensation/claims unit leader"
    },
    correctAnswer: "B"
  },
  {
    id: 217,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 17,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which position has the authority to immediately terminate any unsafe work practice?",
    choices: {
      A: "Safety officer",
      B: "Medical unit leader",
      C: "Division or group supervisor",
      D: "All of the above."
    },
    correctAnswer: "A"
  },
  {
    id: 218,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 18,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "In the ICS, who is the point of contact for representatives from outside agencies?",
    choices: {
      A: "Public information officer",
      B: "Liaison officer",
      C: "Staging area manager",
      D: "Incident commander"
    },
    correctAnswer: "B"
  },
  {
    id: 219,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 19,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "In the ICS, who does a representative from an outside agency report to?",
    choices: {
      A: "Liaison officer",
      B: "Command staff",
      C: "Resources section chief",
      D: "Operations section chief"
    },
    correctAnswer: "A"
  },
  {
    id: 220,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which position serves as a point of contact between the ICS and the news media?",
    choices: {
      A: "Media unit leader",
      B: "Liaison officer",
      C: "Company officer",
      D: "Public information officer"
    },
    correctAnswer: "D"
  },
  {
    id: 221,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 21,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "The operations function is part of which ICS organizational element?",
    choices: {
      A: "General staff",
      B: "Tactical group",
      C: "Unified command",
      D: "Command staff"
    },
    correctAnswer: "A"
  },
  {
    id: 222,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "The Planning Section is part of which ICS element?",
    choices: {
      A: "Command staff",
      B: "General staff",
      C: "Logistics section",
      D: "Sit-stat group"
    },
    correctAnswer: "B"
  },
  {
    id: 223,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "When should divisions and groups be established?",
    choices: {
      A: "When the number of resources exceeds manageable span of control",
      B: "When the incident extends beyond the initial operational period",
      C: "When the incident is not readily divided either functionally or geographically",
      D: "When the incident straddles jurisdictional boundaries"
    },
    correctAnswer: "A"
  },
  {
    id: 224,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "What is the ICS term for a functionally defined area of operations?",
    choices: {
      A: "Branch",
      B: "Sector",
      C: "Division",
      D: "Group"
    },
    correctAnswer: "D"
  },
  {
    id: 225,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "What is the ICS term for a geographically defined area of operations?",
    choices: {
      A: "Group",
      B: "Division",
      C: "Sector",
      D: "Branch"
    },
    correctAnswer: "B"
  },
  {
    id: 226,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 26,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "At hazardous materials incidents, an assistant safety officer (ASO) may be appointed within the hazardous materials group or branch. For whose safety is this second safety officer responsible?",
    choices: {
      A: "The response team",
      B: "The civilians at risk",
      C: "Everyone present",
      D: "The Hazardous Materials Branch/Group"
    },
    correctAnswer: "D"
  },
  {
    id: 227,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "When are branches established?",
    choices: {
      A: "When the number of groups and divisions exceeds span of control",
      B: "When both divisions and groups must report to the same supervisor",
      C: "When the incident is not readily divided either functionally or geographically",
      D: "When both groups and divisions are established for the same incident"
    },
    correctAnswer: "A"
  },
  {
    id: 228,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which element is between a section and a division on the ICS organizational chart?",
    choices: {
      A: "Branch",
      B: "Group",
      C: "Unit",
      D: "Strike team"
    },
    correctAnswer: "A"
  },
  {
    id: 229,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 29,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Who does the Hazardous Materials Branch Director report to?",
    choices: {
      A: "Incident commander",
      B: "Operations Section Chief",
      C: "Logistics Section Chief",
      D: "Resource unit leader"
    },
    correctAnswer: "B"
  },
  {
    id: 230,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 30,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which ICS section is responsible for the collection, evaluation, dissemination, and use of information relevant to the incident?",
    choices: {
      A: "Strategy",
      B: "Staging",
      C: "Planning",
      D: "Logistics"
    },
    correctAnswer: "C"
  },
  {
    id: 231,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 31,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which ICS section tracks the status of incident resources?",
    choices: {
      A: "Logistics",
      B: "Planning",
      C: "Staging",
      D: "Documentation"
    },
    correctAnswer: "B"
  },
  {
    id: 232,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which ICS section is responsible for providing needed services, facilities, supplies, and other forms of support?",
    choices: {
      A: "Planning",
      B: "Logistics",
      C: "Resources",
      D: "Facilities"
    },
    correctAnswer: "B"
  },
  {
    id: 233,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 33,
    level: "Operations",
    objective: "NFPA 472, 5.4.3",
    question: "Which ICS section is responsible for the accounting and financial aspects of an incident?",
    choices: {
      A: "Cost unit",
      B: "Finance/administration",
      C: "Planning",
      D: "Logistics"
    },
    correctAnswer: "B"
  },
  {
    id: 234,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 34,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "An intrinsically safe electrical device is one that:",
    choices: {
      A: "will not ignite a flammable atmosphere.",
      B: "meets or exceeds NFPA standards.",
      C: "is safe for use around or in water.",
      D: "is electrically fully isolated."
    },
    correctAnswer: "A"
  },
  {
    id: 235,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 35,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "Which control zone immediately surrounds the contaminated area?",
    choices: {
      A: "Red",
      B: "Target",
      C: "Restricted",
      D: "Hot"
    },
    correctAnswer: "D"
  },
  {
    id: 236,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 36,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "In general, a hazardous material in which state of matter will usually require the largest hot zone?",
    choices: {
      A: "Liquid",
      B: "Gas",
      C: "Solid",
      D: "Particulate"
    },
    correctAnswer: "B"
  },
  {
    id: 237,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "Which function should occur in the warm zone?",
    choices: {
      A: "Command post",
      B: "Decontamination corridor",
      C: "Triage area",
      D: "Staging area"
    },
    correctAnswer: "D"
  },
  {
    id: 238,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 38,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "Another term for the warm zone is the __________ zone.",
    choices: {
      A: "support",
      B: "contamination reduction",
      C: "exclusion",
      D: "isolation perimeter"
    },
    correctAnswer: "B"
  },
  {
    id: 239,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 39,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "Which function should occur in the cold zone?",
    choices: {
      A: "Forward access point",
      B: "Safe haven",
      C: "Personnel staging",
      D: "Decontamination corridor"
    },
    correctAnswer: "C"
  },
  {
    id: 240,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "Which statement about emergency decontamination is the most correct?",
    choices: {
      A: "Its use should be restricted to life-threatening situations.",
      B: "It is an accelerated trip through the decontamination corridor.",
      C: "It is done outside of the decontamination corridor.",
      D: "It should be thorough enough to remove all contaminants."
    },
    correctAnswer: "C"
  },
  {
    id: 241,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 41,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1",
    question: "For which situation is shelter-in-place the best option?",
    choices: {
      A: "When the majority of the exposed population is outdoors",
      B: "For a slow-spreading toxic plume",
      C: "When a toxic release is probable but has not yet occurred",
      D: "When the exposed population is patients in a health care facility"
    },
    correctAnswer: "D"
  },
  {
    id: 242,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 42,
    level: "Operations",
    objective: "NFPA 472, 5.1.2.2",
    question: "A minimum of _____ personnel are necessary to perform work in the hot zone.",
    choices: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    correctAnswer: "A"
  },
  {
    id: 243,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 43,
    level: "Operations, Technician",
    objective: "NFPA 472, 6.2, 7.3.3",
    question: "Backup team personnel should wear PPE __________ hot zone entry personnel.",
    choices: {
      A: "One level higher than",
      B: "The same level as",
      C: "One level lower than",
      D: "Two levels lower than"
    },
    correctAnswer: "B"
  },
  {
    id: 244,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 44,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1",
    question: "Which is one of the \"shuns\" of evacuation?",
    choices: {
      A: "Evaluation",
      B: "Information",
      C: "Habitation",
      D: "Persuasion"
    },
    correctAnswer: "C"
  },
  {
    id: 245,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 45,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1",
    question: "Levels of contaminant necessitate that you wear PPE while performing an evacuation. Which operational mode is this?",
    choices: {
      A: "Rescue",
      B: "Offensive",
      C: "Defensive",
      D: "Evacuation"
    },
    correctAnswer: "A"
  },
  {
    id: 246,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 46,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1",
    question: "Which of the following refers to when a responder protects people from a hazardous materials incident by keeping them in a safe atmosphere without evacuating them?",
    choices: {
      A: "Zone exclusion",
      B: "Shelter-in-place",
      C: "Straddling the warm zone",
      D: "Modular local protection"
    },
    correctAnswer: "B"
  },
  {
    id: 247,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 47,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1",
    question: "When people are being sheltered-in-place, what should be done with the ventilation system?",
    choices: {
      A: "It should be turned off.",
      B: "It should be set to re-circulate.",
      C: "It should be set to evacuate.",
      D: "It should be set to fresh air exchange."
    },
    correctAnswer: "A"
  },
  {
    id: 248,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 48,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1",
    question: "In the sequence of evacuation, when is the safe area selected and arranged?",
    choices: {
      A: "Concurrently with the issuing of the evacuation order",
      B: "Within 30 minutes of giving the evacuation order",
      C: "Not until everyone is first out of the danger area",
      D: "Before the evacuation order is given"
    },
    correctAnswer: "D"
  },
  {
    id: 249,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 49,
    level: "Awareness",
    objective: "NFPA 472, 4.1.1",
    question: "What resource gives information on the necessary initial distances of evacuation for hazardous materials incidents?",
    choices: {
      A: "USFA Table 1.6",
      B: "The ERG",
      C: "The Wilt evacuation distances wheel",
      D: "Either NFPA 1001 or 1003"
    },
    correctAnswer: "B"
  },
  {
    id: 250,
    quiz: 5,
    quizTitle: "Implementing the Planned Response",
    originalNumber: 50,
    level: "Operations",
    objective: "NFPA 472, 5.4.4",
    question: "Weakness, dizziness, and sweating are typical of heat:",
    choices: {
      A: "exhaustion.",
      B: "stroke.",
      C: "cramps.",
      D: "exposure."
    },
    correctAnswer: "A"
  },

  // ─── QUIZ #6 — TERRORISM ───
  {
    id: 251,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 1,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Part of the definition of terrorism requires that such activity:",
    choices: {
      A: "Be in furtherance of political or social objectives.",
      B: "Be preceded by a threat, warning, or previous similar event.",
      C: "Originate with an organized, recognized group.",
      D: "Result in actual loss of life, injury, or property damage."
    },
    correctAnswer: "A"
  },
  {
    id: 252,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 2,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What has been the largest terrorist event in the history of the United States?",
    choices: {
      A: "The Alfred P. Murrah Building bombing in Oklahoma City",
      B: "The Kobar Towers military housing bombing in Dhahran",
      C: "The World Trade Center attack in New York",
      D: "The bombing of Pan Am flight 103 over Lockerbie"
    },
    correctAnswer: "C"
  },
  {
    id: 253,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 3,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Which is an example of a symbolic terrorist target?",
    choices: {
      A: "Urban highway",
      B: "Foreign embassy",
      C: "Water treatment facility",
      D: "Hydrocarbon fuel refinery"
    },
    correctAnswer: "B"
  },
  {
    id: 254,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 4,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Terrorists have used explosive devices in thousands of attacks, but in recent years there has been a new trend in their use. What is this trend?",
    choices: {
      A: "Biological cores",
      B: "Suicide bombings",
      C: "Radioactive cladding",
      D: "Implosion devices"
    },
    correctAnswer: "B"
  },
  {
    id: 255,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 5,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What is the term for terrorism that electronically targets computers or the Internet?",
    choices: {
      A: "Computerrorism",
      B: "Cyberterrorism",
      C: "Data terrorism",
      D: "Electronic terrorism"
    },
    correctAnswer: "B"
  },
  {
    id: 256,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 6,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "How can pipe bombs be modified to enhance their injurious effect?",
    choices: {
      A: "Set them to explode at dusk.",
      B: "Coat them with powdered neon.",
      C: "Pack them with nails.",
      D: "Use PVC piping."
    },
    correctAnswer: "C"
  },
  {
    id: 257,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 7,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "When should fire fighters handle a potentially explosive device?",
    choices: {
      A: "When doing so will eliminate a threat to life",
      B: "Only when the building cannot be evacuated easily",
      C: "At no time",
      D: "Only when the timer is visible and the bomb squad clearly will not arrive in time"
    },
    correctAnswer: "C"
  },
  {
    id: 258,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 8,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "When responding to a terrorist event, you should be particularly alert for the possibility of:",
    choices: {
      A: "Secondary events designed to harm or hamper emergency responders.",
      B: "The use of sets and accelerants.",
      C: "The occurrence of backdrafts, BLEVEs, or other unusual events.",
      D: "Signs and symptoms of critical incident stress."
    },
    correctAnswer: "A"
  },
  {
    id: 259,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 9,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What is one potential means for dispersing a chemical agent over a wide area?",
    choices: {
      A: "Crop-dusting aircraft",
      B: "Steam radiators",
      C: "Railway tank cars",
      D: "55-gallon drums"
    },
    correctAnswer: "A"
  },
  {
    id: 260,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 10,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Under what circumstances is it sufficient to rely on odor to detect a chemical agent?",
    choices: {
      A: "Under no circumstances",
      B: "Only when the agent is known to be larger than 2 microns",
      C: "For known, familiar substances",
      D: "For odorized gases, such as natural gas"
    },
    correctAnswer: "A"
  },
  {
    id: 261,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 11,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "How do the pupils present in victims of nerve agent exposure?",
    choices: {
      A: "Widely dilated",
      B: "Normal",
      C: "Unequal",
      D: "Pinpoint"
    },
    correctAnswer: "D"
  },
  {
    id: 262,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 12,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What acronym is used to remember the symptoms of nerve agent exposure?",
    choices: {
      A: "CRAMPS NH",
      B: "SLUDGE",
      C: "BARKSEAL",
      D: "NEWS"
    },
    correctAnswer: "B"
  },
  {
    id: 263,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 13,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Which chemical is classified as a pulmonary agent?",
    choices: {
      A: "Phosgene",
      B: "Toluene",
      C: "Naptha",
      D: "Anthracite"
    },
    correctAnswer: "A"
  },
  {
    id: 264,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 14,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Which is a sign of exposure to cyanide gas?",
    choices: {
      A: "Gasping for air",
      B: "Collapsing suddenly",
      C: "Sweating profusely",
      D: "Vomiting with great force"
    },
    correctAnswer: "A"
  },
  {
    id: 265,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 15,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What kind of agent is anthrax?",
    choices: {
      A: "Blood agent",
      B: "Infectious disease",
      C: "Chemical Asphyxiant",
      D: "Neurotransmitter"
    },
    correctAnswer: "B"
  },
  {
    id: 266,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 16,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "How many anthrax spores are needed to cause an anthrax infection?",
    choices: {
      A: "1 to 10",
      B: "100 to 1000",
      C: "2000 to 4000",
      D: "8000 to 10,000"
    },
    correctAnswer: "D"
  },
  {
    id: 267,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 17,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "How infectious is smallpox?",
    choices: {
      A: "It is not at all infectious.",
      B: "It is highly infectious.",
      C: "It can be infectious, but only in warm, moist environments.",
      D: "It can be infectious, but only to people with compromised immune systems."
    },
    correctAnswer: "B"
  },
  {
    id: 268,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 18,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "If smallpox was eradicated from the world in 1980, why is it a threat today?",
    choices: {
      A: "It was premature to declare eradication in 1980.",
      B: "It has a spore form that can lie dormant for a decade or more.",
      C: "It was not eradicated; rather everyone was either immune or vaccinated.",
      D: "Some countries kept samples of it alive."
    },
    correctAnswer: "D"
  },
  {
    id: 269,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 19,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Where is the bacterium that causes plague commonly found?",
    choices: {
      A: "On rodents",
      B: "In rotting wood",
      C: "In decomposing animals",
      D: "In animal stool"
    },
    correctAnswer: "A"
  },
  {
    id: 270,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 20,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What part of the body does bubonic plague attack?",
    choices: {
      A: "The liver and kidneys",
      B: "The lymph nodes",
      C: "The immune system",
      D: "The brain"
    },
    correctAnswer: "B"
  },
  {
    id: 271,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 21,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What is the term for the time period between infection and when a person first begins to show symptoms?",
    choices: {
      A: "Latent period",
      B: "Dormancy period",
      C: "Metastatic period",
      D: "Incubation period"
    },
    correctAnswer: "D"
  },
  {
    id: 272,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 22,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Under what circumstances are alpha particles the most harmful to the human body?",
    choices: {
      A: "When the skin is wet",
      B: "When they are ingested or inhaled",
      C: "When the victim has no shielding other than clothing",
      D: "When the emanating source is wet"
    },
    correctAnswer: "B"
  },
  {
    id: 273,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 23,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Which type of radiation is the most harmful to the human body?",
    choices: {
      A: "Gamma",
      B: "Beta",
      C: "Delta",
      D: "Omega"
    },
    correctAnswer: "A"
  },
  {
    id: 274,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 24,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What are two symptoms of low-level exposure to radiation?",
    choices: {
      A: "Nausea and vomiting",
      B: "Sweating and itching",
      C: "Skin tingling and warm feeling",
      D: "Abdominal cramping and pressure"
    },
    correctAnswer: "A"
  },
  {
    id: 275,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 25,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Of the following actions, what is the best way to limit exposure to radioactivity?",
    choices: {
      A: "Stay at distances from the source that are between the radioactive nodes (every 1.3 meters).",
      B: "Stay in continual motion during exposure.",
      C: "Stay as far away from the source of the radiation as possible.",
      D: "Have a fine fog fire stream keep the radioactive source moist."
    },
    correctAnswer: "C"
  },
  {
    id: 276,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 26,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "If radioactive contamination is suspected, everyone who enters the area should be equipped with a:",
    choices: {
      A: "Type III PASS device.",
      B: "Personal dosimeter.",
      C: "Litmus strip.",
      D: "Lead shield."
    },
    correctAnswer: "B"
  },
  {
    id: 277,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 27,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Which is the best reason for establishing a perimeter around a known or suspected terrorist incident scene?",
    choices: {
      A: "To demarcate the C and D zones for limited-access purposes",
      B: "To form a ring mobile command post structure to manage the incident",
      C: "To deny exit to those who may be contaminated, prior to their decontamination",
      D: "To afford a 360-degree reconnaissance platform from which to monitor events inside the perimeter"
    },
    correctAnswer: "C"
  },
  {
    id: 278,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 28,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "If fire fighters notice dead or dying animals as they approach the scene of a known or suspected terrorist incident, what should they suspect?",
    choices: {
      A: "Possible chemical release",
      B: "Possible biological release",
      C: "Possible radiation release",
      D: "Nerve agent dispersal"
    },
    correctAnswer: "A"
  },
  {
    id: 279,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 29,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What is the lead agency for crisis management during a terrorist incident?",
    choices: {
      A: "FEMA",
      B: "Local law enforcement",
      C: "Local fire/EMS",
      D: "The FBI"
    },
    correctAnswer: "D"
  },
  {
    id: 280,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 30,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "One of the FBI classifications for terrorism is:",
    choices: {
      A: "Domestic.",
      B: "Political.",
      C: "State-sponsored.",
      D: "Individual."
    },
    correctAnswer: "A"
  },
  {
    id: 281,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 31,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Water supply, power distribution, and transportation are examples of ________ targets.",
    choices: {
      A: "Eco-terrorism",
      B: "Infrastructure",
      C: "Symbolic",
      D: "Civilian"
    },
    correctAnswer: "B"
  },
  {
    id: 282,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 32,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Shopping malls, schools, and stadiums are examples of ________ targets.",
    choices: {
      A: "Infrastructure",
      B: "Symbolic",
      C: "Civilian",
      D: "Eco-terrorism"
    },
    correctAnswer: "C"
  },
  {
    id: 283,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 33,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Spiking trees and vandalizing research laboratories are examples of:",
    choices: {
      A: "Agro-terrorism",
      B: "Cyber-terrorism",
      C: "International terrorism",
      D: "Eco-terrorism"
    },
    correctAnswer: "D"
  },
  {
    id: 284,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 34,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Attacks on agriculture or the food supply are examples of:",
    choices: {
      A: "Agro-terrorism",
      B: "Cyber-terrorism",
      C: "Eco-terrorism",
      D: "International terrorism"
    },
    correctAnswer: "A"
  },
  {
    id: 285,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 35,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "On the Homeland Security color-code system, what is the color code for the lowest risk?",
    choices: {
      A: "Red",
      B: "Green",
      C: "Yellow",
      D: "Orange"
    },
    correctAnswer: "B"
  },
  {
    id: 286,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 36,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Which of the following can be used to create explosives?",
    choices: {
      A: "ARGO",
      B: "PATP",
      C: "ANFO",
      D: "TADP"
    },
    correctAnswer: "C"
  },
  {
    id: 287,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 37,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What is another term for a joint command structure?",
    choices: {
      A: "Combined command",
      B: "Combined operating system",
      C: "Shared authority command",
      D: "Unified command"
    },
    correctAnswer: "D"
  },
  {
    id: 288,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 38,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What is the first priority following an explosion?",
    choices: {
      A: "Rescuer safety",
      B: "Scene safety",
      C: "Victim rescue",
      D: "Establishing incident command"
    },
    correctAnswer: "A"
  },
  {
    id: 289,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 39,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Which of the following is classified as a choking agent?",
    choices: {
      A: "Sarin",
      B: "Chlorine",
      C: "Carbon Monoxide",
      D: "Carbon Dioxide"
    },
    correctAnswer: "B"
  },
  {
    id: 290,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 40,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What is the most common method of dispersing chemical agents?",
    choices: {
      A: "Water streams",
      B: "Catalysts",
      C: "Air flow",
      D: "Desiccants"
    },
    correctAnswer: "C"
  },
  {
    id: 291,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 41,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "To be effective, liquid nerve agents must be in ________ form.",
    choices: {
      A: "dried",
      B: "liquid",
      C: "solid",
      D: "aerosol"
    },
    correctAnswer: "D"
  },
  {
    id: 292,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 42,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "An agent that takes weeks to evaporate is said to be:",
    choices: {
      A: "Persistent.",
      B: "Stable.",
      C: "Volatile.",
      D: "Hydrogenated."
    },
    correctAnswer: "A"
  },
  {
    id: 293,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 43,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What kit did the U.S. military develop as an antidote to nerve agent exposure?",
    choices: {
      A: "Pam-2",
      B: "Mark 1",
      C: "P-tab",
      D: "Physostygmine"
    },
    correctAnswer: "B"
  },
  {
    id: 294,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 44,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Which blister agent causes immediate pain upon contact with skin?",
    choices: {
      A: "VX",
      B: "Phosgene",
      C: "Lewisite",
      D: "Sulfur mustard"
    },
    correctAnswer: "C"
  },
  {
    id: 295,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 45,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "The highest potential for infection by biological agents is by:",
    choices: {
      A: "Absorption.",
      B: "Injection.",
      C: "Ingestion.",
      D: "Inhalation."
    },
    correctAnswer: "D"
  },
  {
    id: 296,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 46,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Which of the following is contagious?",
    choices: {
      A: "Smallpox",
      B: "Anthrax",
      C: "Bubonic plague",
      D: "Bacillus"
    },
    correctAnswer: "A"
  },
  {
    id: 297,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 47,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What term refers to the use of gloves, masks, gowns, and eye protection to prevent exposure to a biological agent?",
    choices: {
      A: "Shielding",
      B: "Universal precautions",
      C: "Universal protections",
      D: "Protective measures"
    },
    correctAnswer: "B"
  },
  {
    id: 298,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 48,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "Packing radioactive material around an explosive device creates what is known as a ________ bomb.",
    choices: {
      A: "rad",
      B: "Truck",
      C: "Dirty",
      D: "Neutron"
    },
    correctAnswer: "C"
  },
  {
    id: 299,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 49,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "When can the presence of chemical, biological, or radiological agents be ruled out?",
    choices: {
      A: "No spilled materials",
      B: "No signs or symptoms present",
      C: "Property owner confirms none on property",
      D: "Confirmation is provided by detection equipment."
    },
    correctAnswer: "D"
  },
  {
    id: 300,
    quiz: 6,
    quizTitle: "Terrorism",
    originalNumber: 50,
    level: "Awareness",
    objective: "NFPA 472, 4.4.2",
    question: "What type of team conducts a quick evaluation of the area to identify the number of people involved?",
    choices: {
      A: "Recon",
      B: "Rescue",
      C: "Survey",
      D: "Search"
    },
    correctAnswer: "A"
  },

  // ─── QUIZ #7 — PERSONAL PROTECTIVE EQUIPMENT ───
  {
    id: 301,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "The majority of chemical-protective clothing is:",
    choices: {
      A: "Designed to be disposed of after a single use.",
      B: "Fully encapsulating.",
      C: "Designed for use on one specific material.",
      D: "Reusable."
    },
    correctAnswer: "A"
  },
  {
    id: 302,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "Which statement about decontamination of disposable chemical-protective equipment is correct?",
    choices: {
      A: "No decontamination is needed prior to disposal.",
      B: "Only gross decontamination is required.",
      C: "It should be decontaminated sufficiently so that removal is safe for the wearer.",
      D: "Decontamination should be thorough and complete."
    },
    correctAnswer: "C"
  },
  {
    id: 303,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "In general, chemical-protective garments should be tested at _____-month intervals.",
    choices: {
      A: "6",
      B: "12",
      C: "18",
      D: "24"
    },
    correctAnswer: "B"
  },
  {
    id: 304,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "Which method is used to test a Level A suit?",
    choices: {
      A: "A reagent solution",
      B: "Ultrasonic scanning",
      C: "Ultraviolet light",
      D: "Pressurization with air"
    },
    correctAnswer: "D"
  },
  {
    id: 305,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "The level of protection that structural firefighting protective clothing provides first responders at a hazardous materials incident is best described as:",
    choices: {
      A: "Excellent.",
      B: "Good.",
      C: "Limited.",
      D: "Non-existent."
    },
    correctAnswer: "C"
  },
  {
    id: 306,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 6,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What does the A stand for in TRACEMP?",
    choices: {
      A: "Assessment",
      B: "Asphyxiating",
      C: "Airborne",
      D: "Atmospheric"
    },
    correctAnswer: "A"
  },
  {
    id: 307,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 7,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What does the E stand for in TRACEMP?",
    choices: {
      A: "Etiological/biological",
      B: "Explosive",
      C: "Evacuation",
      D: "Environment"
    },
    correctAnswer: "A"
  },
  {
    id: 308,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 8,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What does the P stand for in TRACEMP?",
    choices: {
      A: "Psychological",
      B: "Poison",
      C: "Permeation",
      D: "Personal protective equipment"
    },
    correctAnswer: "A"
  },
  {
    id: 309,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "A Level B protective ensemble consists of:",
    choices: {
      A: "Full turnouts with SCBA.",
      B: "Liquid splash protection and SCBA.",
      C: "Ordinary work uniform and an APR or PAPR.",
      D: "Vapor protection with SCBA."
    },
    correctAnswer: "B"
  },
  {
    id: 310,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 5.2.3",
    question: "Which material is a simple Asphyxiant?",
    choices: {
      A: "Nitrogen",
      B: "Carbon monoxide",
      C: "Benzene",
      D: "Hydrazine"
    },
    correctAnswer: "A"
  },
  {
    id: 311,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 11,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What is the subject of the acronym TRACEMP?",
    choices: {
      A: "Methods of terrorist attack",
      B: "Symptoms of radiation sickness",
      C: "Symptoms of chemical agent poisoning",
      D: "Potential hazards at a hazardous materials incident"
    },
    correctAnswer: "D"
  },
  {
    id: 312,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 6.2.3.1",
    question: "Chemicals pass into and through a material on a molecular level by which process?",
    choices: {
      A: "Absorption",
      B: "Permeation",
      C: "Diffusion",
      D: "Infiltration"
    },
    correctAnswer: "B"
  },
  {
    id: 313,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "What is the process by which a hazardous chemical flows through closures, seams, or pinholes in a material?",
    choices: {
      A: "Leakage",
      B: "Seepage",
      C: "Penetration",
      D: "Intrusion"
    },
    correctAnswer: "C"
  },
  {
    id: 314,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "What is one drawback of vapor-protective clothing?",
    choices: {
      A: "It must be used with a supplied-air respirator.",
      B: "It does not protect against liquid splashes.",
      C: "It cannot be used in IDLH atmospheres.",
      D: "It retains the wearer's body heat."
    },
    correctAnswer: "D"
  },
  {
    id: 315,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "According to the HAZWOPER regulation, Level _____ is the minimum level of protection to be worn when operating in an unknown environment.",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "B"
  },
  {
    id: 316,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "When atmospheric conditions at a hazardous materials incident are unknown, what is the minimum level of respiratory protection for operations level responders?",
    choices: {
      A: "Positive pressure SCBA",
      B: "Air-purifying respirator (APR)",
      C: "HEPA filter mask",
      D: "Powered air-purifying respirator (PAPR)"
    },
    correctAnswer: "A"
  },
  {
    id: 317,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 17,
    level: "Operations",
    objective: "NFPA 472, 5.3.3",
    question: "When referring to a breathing apparatus, what does the S stand for in SARs?",
    choices: {
      A: "Self",
      B: "Supplemental",
      C: "Simple",
      D: "Supplied"
    },
    correctAnswer: "D"
  },
  {
    id: 318,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 18,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 6.2.3.1",
    question: "According to the EPA classification system, what is the level of protection afforded a suit that fully encapsulates the wearer and SCBA?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "A"
  },
  {
    id: 319,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 19,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "What is Level D protection?",
    choices: {
      A: "Chemical splash-protective clothing",
      B: "Standard work clothing",
      C: "Any type of clothing worn with respiratory protection",
      D: "Vapor-protective clothing"
    },
    correctAnswer: "B"
  },
  {
    id: 320,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "Standard firefighting turnouts provide some protection against which forms of radiation?",
    choices: {
      A: "Alpha only",
      B: "Alpha and beta",
      C: "Gamma only",
      D: "None of the above."
    },
    correctAnswer: "B"
  },
  {
    id: 321,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 21,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "Which level of protective equipment permits the use of an air-purifying respirator?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "C"
  },
  {
    id: 322,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.3.4, 5.4.4",
    question: "You are working at a hazardous materials incident. In your position, there is no potential for harmful exposure to the substance. What is the minimum level of PPE for this situation?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "C"
  },
  {
    id: 323,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "What distinguishes Level B from Level C protection?",
    choices: {
      A: "Respiratory protection",
      B: "Vapor protection",
      C: "Flame resistance",
      D: "Splash protection"
    },
    correctAnswer: "A"
  },
  {
    id: 324,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "Level _____ PPE should be used when the hazardous material identified requires the highest level of protection for skin, eyes, and lungs.",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "A"
  },
  {
    id: 325,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "Level _____ PPE should only be used when the atmosphere contains no known hazard and when there is no potential for splashes, immersion, or inhalation of hazardous levels of chemicals.",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "D"
  },
  {
    id: 326,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 26,
    level: "Operations, HazMat Safety Officer",
    objective: "NFPA 472, 5.2.3, 5.4.3, 11.3.7",
    question: "What is the primary role of the medical monitoring station?",
    choices: {
      A: "To evaluate the medical status of personnel engaged in operations",
      B: "To develop the incident medical plan",
      C: "To provide treatment for exposed personnel",
      D: "To evaluate and monitor the incident for medical hazards"
    },
    correctAnswer: "A"
  },
  {
    id: 327,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 6.2.3.1",
    question: "The HAZWOPER regulations are located in:",
    choices: {
      A: "OSHA 29 CFR 1910.120.",
      B: "OSHA 29 CFR 1910.134.",
      C: "NFPA 471.",
      D: "NFPA 472."
    },
    correctAnswer: "A"
  },
  {
    id: 328,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 6.2.3.1",
    question: "When should the pre-entrance medical monitoring be completed?",
    choices: {
      A: "Within the last year",
      B: "Just prior to donning PPE",
      C: "When first reporting for duty",
      D: "Immediately upon arrival"
    },
    correctAnswer: "B"
  },
  {
    id: 329,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 29,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "High temperature-protective equipment is designed to provide how much protection from hazardous materials?",
    choices: {
      A: "Complete",
      B: "Full liquid-splash protection",
      C: "None",
      D: "Full vapor/gas/mist protection"
    },
    correctAnswer: "C"
  },
  {
    id: 330,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 30,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "What is the process by which a hazardous chemical moves through a given material on the molecular level?",
    choices: {
      A: "Penetration",
      B: "Permeation",
      C: "Saturation",
      D: "Seepage"
    },
    correctAnswer: "B"
  },
  {
    id: 331,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 31,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "What is the term for the physical destruction or decomposition of a clothing material due to chemical exposure, general use, or ambient conditions?",
    choices: {
      A: "Disintegration",
      B: "Degradation",
      C: "Deterioration",
      D: "Impregnation"
    },
    correctAnswer: "B"
  },
  {
    id: 332,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "Who is qualified to use high temperature-protective clothing?",
    choices: {
      A: "Any fire fighter",
      B: "Fire fighters who are specifically trained in its use",
      C: "Any responder trained and qualified to work in a fully encapsulated suit",
      D: "Hazardous materials specialists and technicians only"
    },
    correctAnswer: "D"
  },
  {
    id: 333,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 33,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "Which statement about chemical-protective clothing is correct?",
    choices: {
      A: "It must be discarded if contaminated.",
      B: "It must provide thermal protection.",
      C: "It should be disposed of after a single use.",
      D: "The clothing must be compatible with the chemical to which it will be exposed."
    },
    correctAnswer: "D"
  },
  {
    id: 334,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 34,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "What is the most common problem associated with wearing chemical-protective clothing?",
    choices: {
      A: "Claustrophobia",
      B: "Heat-related stressors",
      C: "Strains and sprains",
      D: "Abrasions"
    },
    correctAnswer: "B"
  },
  {
    id: 335,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 35,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "In which hazardous materials situation will structural firefighting protective clothing provide you with adequate protection?",
    choices: {
      A: "You will be exposed to splashes of the material.",
      B: "You will have to handle the material.",
      C: "There are high atmospheric concentrations of the material.",
      D: "None of the above."
    },
    correctAnswer: "D"
  },
  {
    id: 336,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 36,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "Which statement about chemical-protective clothing is correct?",
    choices: {
      A: "It must be discarded if contaminated.",
      B: "It must provide thermal protection.",
      C: "It should be disposed of after a single use.",
      D: "It may be either encapsulating or non-encapsulating."
    },
    correctAnswer: "D"
  },
  {
    id: 337,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4",
    question: "How can you check the compatibility of a particular chemical-protective suit with a specific material?",
    choices: {
      A: "Check the suit's NFPA PPE classification label.",
      B: "Check the compatibility chart supplied by the manufacturer.",
      C: "Refer to the material compatibility table in the ERG.",
      D: "Check the suit's EPA PPE classification label."
    },
    correctAnswer: "B"
  },
  {
    id: 338,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 38,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "What level of chemical protection should be used only when there is no atmospheric hazard?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "D"
  },
  {
    id: 339,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 39,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.4.1",
    question: "When doffing the Level C chemical-protective clothing ensemble, what is the last piece of equipment removed?",
    choices: {
      A: "Suit",
      B: "Respirator",
      C: "Gloves",
      D: "Boots"
    },
    correctAnswer: "B"
  },
  {
    id: 340,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 6.2.3.1",
    question: "What is a limitation of forced-air cooling systems used with fully encapsulating PPE?",
    choices: {
      A: "Limited operational time",
      B: "Limited mobility",
      C: "Significant added weight",
      D: "Reduced air time"
    },
    correctAnswer: "B"
  },
  {
    id: 341,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 41,
    level: "Operations",
    objective: "NFPA 472, 6.2.3.1",
    question: "Which cooling technology involves a vest designed to wick perspiration away from the body?",
    choices: {
      A: "Forced-air cooling",
      B: "Fluid-chilled systems",
      C: "Phase-change cooling technology",
      D: "Gel-pack vests"
    },
    correctAnswer: "C"
  },
  {
    id: 342,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 42,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "A/An __________ garment provides full body protection from gases, vapors, and liquids.",
    choices: {
      A: "Chemical-protective",
      B: "Vapor-protective",
      C: "Isolation",
      D: "Atmospheric"
    },
    correctAnswer: "B"
  },
  {
    id: 343,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 43,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 5.4.4, 6.2.3.1",
    question: "You have responded to a hazardous materials incident involving a substance that has been positively identified. It is determined that an air-purifying respirator is effective with this substance and that it does not present a hazard to exposed skin. What is the minimum level of PPE for this situation?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "C"
  },
  {
    id: 344,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 44,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.4.1, 6.2.1.2, 6.6.3.2",
    question: "Who has the ultimate authority and responsibility to approve the level of PPE required for a given activity?",
    choices: {
      A: "Hazardous Materials Branch officer",
      B: "Incident commander",
      C: "Operations officer",
      D: "Safety officer"
    },
    correctAnswer: "B"
  },
  {
    id: 345,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 45,
    level: "Awareness",
    objective: "NFPA 472, 4.4.1",
    question: "Which level of PPE is normally worn as a work uniform in industrial settings?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "D"
  },
  {
    id: 346,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 46,
    level: "Operations",
    objective: "NFPA 472, 5.3.3, 6.2.3.1",
    question: "What chemical-protective clothing is a single-piece garment that totally encloses the wearer?",
    choices: {
      A: "Splash suit",
      B: "Encapsulating suit",
      C: "Proximity suit",
      D: "Chemical-protective suit"
    },
    correctAnswer: "B"
  },
  {
    id: 347,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 47,
    level: "Operations",
    objective: "Appears only in appendix of NFPA 472",
    question: "What does the C in CBRN stand for?",
    choices: {
      A: "Chemical",
      B: "Criminal",
      C: "Containment",
      D: "Command"
    },
    correctAnswer: "A"
  },
  {
    id: 348,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 48,
    level: "Operations",
    objective: "Appears only in appendix of NFPA 472",
    question: "What is the NFPA standard on liquid splash-protective clothing for hazardous materials emergencies?",
    choices: {
      A: "1992",
      B: "1991",
      C: "1990",
      D: "1900"
    },
    correctAnswer: "B"
  },
  {
    id: 349,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 49,
    level: "Operations",
    objective: "Appears only in appendix of NFPA 472",
    question: "What is the NFPA standard on vapor-protective ensembles for hazardous materials emergencies?",
    choices: {
      A: "1992",
      B: "1991",
      C: "1990",
      D: "1900"
    },
    correctAnswer: "B"
  },
  {
    id: 350,
    quiz: 7,
    quizTitle: "Personal Protective Equipment",
    originalNumber: 50,
    level: "Operations",
    objective: "NFPA 472, 6.2.3.1",
    question: "What level of chemical-protective clothing would a fire fighter wear if he or she needed a high level of respiratory protection, but less skin protection?",
    choices: {
      A: "A",
      B: "B",
      C: "C",
      D: "D"
    },
    correctAnswer: "B"
  },

  // ─── QUIZ #8 — MASS DECONTAMINATION ───
  {
    id: 351,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "Which technique is most commonly used for mass decontamination?",
    choices: {
      A: "Simple removal of clothing",
      B: "Evaporation",
      C: "Absorption",
      D: "Water showers"
    },
    correctAnswer: "D"
  },
  {
    id: 352,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2, 6.4.1.2.2",
    question: "From the following list, which is the primary difference between mass decontamination and emergency decontamination?",
    choices: {
      A: "The degree of thoroughness",
      B: "The types of decontaminating agents used",
      C: "The speed at which it is set up and accomplished",
      D: "The need to identify the contaminant"
    },
    correctAnswer: "C"
  },
  {
    id: 353,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "__________ decontamination is performed on a large number of victims in a short amount of time.",
    choices: {
      A: "Gross",
      B: "Mass",
      C: "Field",
      D: "Primary"
    },
    correctAnswer: "A"
  },
  {
    id: 354,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "How many apparatus, at a minimum, are required to perform rapid mass decontamination?",
    choices: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    correctAnswer: "A"
  },
  {
    id: 355,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.4.1.2.2",
    question: "How many steps are there in the decontamination technique known as disposal?",
    choices: {
      A: "11",
      B: "8",
      C: "5",
      D: "2"
    },
    correctAnswer: "D"
  },
  {
    id: 356,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.2.2",
    question: "When preparing to perform mass decontamination, which action should be taken first?",
    choices: {
      A: "Select and don the appropriate level of PPE.",
      B: "Establish the ICS to manage the situation.",
      C: "Direct the victims to the decontamination corridor.",
      D: "Attempt to identify the contaminant."
    },
    correctAnswer: "D"
  },
  {
    id: 357,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.2.2",
    question: "Which statement about mass decontamination is correct?",
    choices: {
      A: "It is executed quickly.",
      B: "It is thorough.",
      C: "It consists of treating large numbers of people in a formal decontamination process.",
      D: "It should be performed by technical specialists."
    },
    correctAnswer: "A"
  },
  {
    id: 358,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 8,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.2.2",
    question: "When preparing to perform mass decontamination, which action should be taken second?",
    choices: {
      A: "Attempt to identify the contaminant.",
      B: "Establish the decontamination process.",
      C: "Decontaminate the entry team.",
      D: "Select and don the appropriate level of PPE."
    },
    correctAnswer: "D"
  },
  {
    id: 359,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "How many victims are treated in a mass decontamination?",
    choices: {
      A: "At least 10",
      B: "At least 15",
      C: "At least 25",
      D: "It varies, depending on the situation."
    },
    correctAnswer: "D"
  },
  {
    id: 360,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "What is the most important factor in determining the best method of removing a contaminant from affected victims?",
    choices: {
      A: "The number of victims",
      B: "The nature of the contaminant",
      C: "The duration of the exposure",
      D: "The intensity of the exposure"
    },
    correctAnswer: "B"
  },
  {
    id: 361,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "What nozzle pressure should be used for personnel decontamination in a decontamination corridor?",
    choices: {
      A: "5-15 psi",
      B: "15-30 psi",
      C: "30-50 psi",
      D: "50-75 psi"
    },
    correctAnswer: "C"
  },
  {
    id: 362,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "A victim who is able to walk without assistance is:",
    choices: {
      A: "Ambulatory.",
      B: "Minor/delayed.",
      C: "Non-ambulatory.",
      D: "Uncontaminated."
    },
    correctAnswer: "A"
  },
  {
    id: 363,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "Ideal water temperature for mass decontamination is ____ degrees F.",
    choices: {
      A: "70",
      B: "80",
      C: "90",
      D: "100"
    },
    correctAnswer: "A"
  },
  {
    id: 364,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "In general, what is the best and quickest way to decontaminate a large group of people?",
    choices: {
      A: "Evaporation",
      B: "Chemical degradation",
      C: "Water spray",
      D: "Absorption"
    },
    correctAnswer: "B"
  },
  {
    id: 365,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.4.1.2.2",
    question: "Which is the process of adding a substance to a contaminant to weaken its concentration?",
    choices: {
      A: "Imbibition",
      B: "Dilution",
      C: "Emulsification",
      D: "Neutralization"
    },
    correctAnswer: "B"
  },
  {
    id: 366,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "For which substance would decontamination with water be the most effective?",
    choices: {
      A: "Nerve agent",
      B: "Benzene",
      C: "Toluene",
      D: "Hydrochloric acid"
    },
    correctAnswer: "D"
  },
  {
    id: 367,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 17,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.4.1.2.2",
    question: "Contaminated items that cannot be properly decontaminated should first be:",
    choices: {
      A: "disposed of.",
      B: "rinsed.",
      C: "isolated.",
      D: "bagged."
    },
    correctAnswer: "C"
  },
  {
    id: 368,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 18,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "How should mass decontamination of victims be performed?",
    choices: {
      A: "Shower with clothing in place",
      B: "Removal of clothes prior to shower",
      C: "Removal of clothes during shower",
      D: "Removal of clothes after shower"
    },
    correctAnswer: "B"
  },
  {
    id: 369,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 19,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.4.1.2.2",
    question: "Which method of decontamination should never be used on human skin?",
    choices: {
      A: "Disinfection",
      B: "Dilution",
      C: "Absorption",
      D: "Neutralization"
    },
    correctAnswer: "D"
  },
  {
    id: 370,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "Using soap and water as a mass decontamination method is called:",
    choices: {
      A: "Emulsification.",
      B: "Washing.",
      C: "Neutralization.",
      D: "Suffusion."
    },
    correctAnswer: "B"
  },
  {
    id: 371,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 21,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.4.1, 5.3.4",
    question: "In the yellow- and blue-bordered sections of the ERG, how are materials identified that have predetermined evacuation distances?",
    choices: {
      A: "They are in bold print.",
      B: "They are italicized.",
      C: "They are highlighted.",
      D: "They are underlined."
    },
    correctAnswer: "C"
  },
  {
    id: 372,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 22,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.2, 4.4.1, 5.3.4",
    question: "The ERG is intended to serve as a reference for the first _____ minutes of a hazardous materials incident.",
    choices: {
      A: "15",
      B: "30",
      C: "45",
      D: "60"
    },
    correctAnswer: "A"
  },
  {
    id: 373,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 23,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.2, 4.4.1, 5.3.4",
    question: "What information does a diamond-shaped placard on a transport vehicle provide?",
    choices: {
      A: "Which ERG initial-action guide to refer to",
      B: "The UN commodity number",
      C: "The specific material identity",
      D: "The hazard class of the material"
    },
    correctAnswer: "D"
  },
  {
    id: 374,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 24,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.2, 4.4.1, 5.3.4",
    question: "Where are you are likely to encounter an NFPA 704 symbol?",
    choices: {
      A: "Railcar",
      B: "Trailer",
      C: "Intermodal container",
      D: "Industrial complex"
    },
    correctAnswer: "D"
  },
  {
    id: 375,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 25,
    level: "Awareness",
    objective: "NFPA 472, 4.2.2, 4.4.1",
    question: "What is the shape of an NFPA 704 symbol?",
    choices: {
      A: "Triangle",
      B: "Diamond",
      C: "Square",
      D: "Circle"
    },
    correctAnswer: "B"
  },
  {
    id: 376,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 26,
    level: "Awareness",
    objective: "NFPA 472, 4.2.2, 4.4.1",
    question: "Which information is provided by an NFPA 704 symbol?",
    choices: {
      A: "Material identification",
      B: "Isolation distances",
      C: "Specific toxic effects",
      D: "Material properties"
    },
    correctAnswer: "D"
  },
  {
    id: 377,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "When managing a crowd of contaminated victims, your biggest challenge will most likely be:",
    choices: {
      A: "Controlling the crowd.",
      B: "Providing medical care.",
      C: "Containing runoff.",
      D: "Finding an adequate water supply."
    },
    correctAnswer: "A"
  },
  {
    id: 378,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "Which statement about the use of barriers to direct a moving crowd is correct?",
    choices: {
      A: "Experience has shown it is likely to cause panic and injuries.",
      B: "It is an effective way to direct the group.",
      C: "It is generally considered an ineffectual tactic.",
      D: "It is impractical in most cases."
    },
    correctAnswer: "B"
  },
  {
    id: 379,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 29,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "When should law enforcement officers be used to control and direct a crowd?",
    choices: {
      A: "As soon as they are available",
      B: "When it is time for decontamination to begin",
      C: "After decontamination is complete",
      D: "Once transportation of victims begins"
    },
    correctAnswer: "A"
  },
  {
    id: 380,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 30,
    level: "Awareness",
    objective: "NFPA 472, 4.2.2, 4.4.1",
    question: "Which source is only useful for understanding the broad hazards of a particular facility or material?",
    choices: {
      A: "MSDS",
      B: "ERG",
      C: "NFPA 704",
      D: "ATSDR"
    },
    correctAnswer: "C"
  },
  {
    id: 381,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 31,
    level: "Awareness, Operations",
    objective: "NFPA 472, 4.2.2, 4.4.1, 5.3.4",
    question: "Which hazardous materials information system contains the least amount of information?",
    choices: {
      A: "ERG",
      B: "MSDS",
      C: "NFPA 704",
      D: "CHEMTREC"
    },
    correctAnswer: "C"
  },
  {
    id: 382,
    quiz: 8,
    quizTitle: "Mass Decontamination",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.3.2",
    question: "After processing through mass decontamination, victims should be:",
    choices: {
      A: "Processed through technical decontamination.",
      B: "Medically evaluated.",
      C: "Debriefed and released.",
      D: "Transported to a medical facility."
    },
    correctAnswer: "B"
  },

  // ─── QUIZ #9 — TECHNICAL DECONTAMINATION ───
  {
    id: 383,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "When should the decontamination corridor be established?",
    choices: {
      A: "Before personnel begin working in the hot zone",
      B: "As soon as it is confirmed that a release has occurred",
      C: "When personnel are preparing to exit the hot zone",
      D: "As soon as an exposure has occurred"
    },
    correctAnswer: "A"
  },
  {
    id: 384,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "Which is one of the major categories of decontamination?",
    choices: {
      A: "Natural",
      B: "Passive",
      C: "Technical",
      D: "Specific"
    },
    correctAnswer: "C"
  },
  {
    id: 385,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1,",
    question: "Which is a common technique used for gross decontamination?",
    choices: {
      A: "Simple removal of clothing",
      B: "Stepping close to a powerful heat source for a few seconds",
      C: "Evaporation",
      D: "A shower system"
    },
    correctAnswer: "D"
  },
  {
    id: 386,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "Which form of decontamination is the most thorough?",
    choices: {
      A: "Mass",
      B: "Primary",
      C: "Technical",
      D: "Secondary"
    },
    correctAnswer: "C"
  },
  {
    id: 387,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "What is a disadvantage of the isolation and disposal method of decontamination?",
    choices: {
      A: "The cost of replacing disposed equipment",
      B: "It is more time-consuming than other decontamination methods.",
      C: "It is manpower intensive.",
      D: "There is a higher possibility of exposure during decontamination."
    },
    correctAnswer: "A"
  },
  {
    id: 388,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "When should a responder undergoing decontamination remove SCBA?",
    choices: {
      A: "After gross decontamination",
      B: "Just before beginning technical decontamination",
      C: "When at the tool drop",
      D: "After removal of outer PPE"
    },
    correctAnswer: "D"
  },
  {
    id: 389,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "Mass decontamination is a way of performing ________ decontamination quickly on a large number of victims at a hazardous materials incident.",
    choices: {
      A: "gross",
      B: "technical",
      C: "formal",
      D: "emergency"
    },
    correctAnswer: "A"
  },
  {
    id: 390,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 8,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "Which method of decontamination may produce heat?",
    choices: {
      A: "Disinfection",
      B: "Solidification",
      C: "Evaporation",
      D: "Neutralization"
    },
    correctAnswer: "D"
  },
  {
    id: 391,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "Absorption as a decontamination technique requires which type of surface to be effective?",
    choices: {
      A: "Flat",
      B: "Porous",
      C: "Electrically chargeable",
      D: "Concave"
    },
    correctAnswer: "A"
  },
  {
    id: 392,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "How should absorbent materials that are saturated with hazardous liquids be disposed of?",
    choices: {
      A: "By incineration",
      B: "By deep burial at a standard dump",
      C: "By standard burial at a designated hazardous materials burial facility",
      D: "According to applicable laws and regulations"
    },
    correctAnswer: "D"
  },
  {
    id: 393,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "For what type of hazardous material is disinfection an effective decontamination strategy?",
    choices: {
      A: "Weak carbon-based acids",
      B: "Pathogens",
      C: "Strong organic bases",
      D: "Organophosphates"
    },
    correctAnswer: "B"
  },
  {
    id: 394,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "What is the first step to take with an item that cannot be decontaminated?",
    choices: {
      A: "Disposal",
      B: "Containment",
      C: "Packaging",
      D: "Isolation"
    },
    correctAnswer: "D"
  },
  {
    id: 395,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "How should contaminated tools and equipment be contained?",
    choices: {
      A: "Wrapped and bound securely with duct tape or equivalent",
      B: "Wrapped and bound with non-sticky tape, such as barrier tape",
      C: "In bags, barrels, or buckets",
      D: "In a salvage cover"
    },
    correctAnswer: "C"
  },
  {
    id: 396,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "What is the main advantage of solidification of a hazardous liquid?",
    choices: {
      A: "To neutralize its chemical properties",
      B: "To make it easier to handle",
      C: "To contain it",
      D: "To prevent evaporation"
    },
    correctAnswer: "B"
  },
  {
    id: 397,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "Which method of decontamination should never be used for personnel decontamination?",
    choices: {
      A: "Disinfection",
      B: "Dilution",
      C: "Absorption",
      D: "Neutralization"
    },
    correctAnswer: "D"
  },
  {
    id: 398,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "For which item is isolation and disposal an appropriate decontamination technique?",
    choices: {
      A: "Clothing",
      B: "Animal carcasses",
      C: "Human blood",
      D: "Radioactive material"
    },
    correctAnswer: "A"
  },
  {
    id: 399,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 17,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "Which is a chemical decontamination process?",
    choices: {
      A: "Adsorption",
      B: "Ionization",
      C: "Oxidation",
      D: "Sterilization"
    },
    correctAnswer: "B"
  },
  {
    id: 400,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 18,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.4.1.2.2",
    question: "For what type of material is neutralization most often used?",
    choices: {
      A: "Poisons",
      B: "Flammable liquids",
      C: "Radioactive isotopes",
      D: "Corrosives"
    },
    correctAnswer: "D"
  },
  {
    id: 401,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 19,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "Which is one of the major categories of decontamination?",
    choices: {
      A: "Initial",
      B: "Precautionary",
      C: "Civilian",
      D: "Gross"
    },
    correctAnswer: "D"
  },
  {
    id: 402,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "What is one reason that identification of the hazardous material should precede the initiation of any decontamination procedures?",
    choices: {
      A: "Some people may not require as full a decontamination effort as others with certain materials.",
      B: "Some materials are water reactive and may require special decontamination procedures.",
      C: "Decontamination is expensive and should not be set up, carried out at all, or carried out in full measure unless absolutely necessary.",
      D: "Decontamination is a frightening process to civilians and as abbreviated a procedure that will work with the chemical involved as possible should be used."
    },
    correctAnswer: "B"
  },
  {
    id: 403,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 21,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.1, 6.4.1.2.2",
    question: "What is the major difference between emergency decontamination and gross decontamination?",
    choices: {
      A: "Gross is performed by decontamination personnel; emergency is performed by oneself.",
      B: "The location where the decontamination procedure is performed",
      C: "The duration of the decontamination procedure",
      D: "Gross is for responders; emergency is for victims of the incident."
    },
    correctAnswer: "B"
  },
  {
    id: 404,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.6.4.2",
    question: "When is technical decontamination performed relative to gross decontamination?",
    choices: {
      A: "At the same time",
      B: "Before",
      C: "After",
      D: "It varies, depending on the circumstances."
    },
    correctAnswer: "C"
  },
  {
    id: 405,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.6.4.2",
    question: "The technical decontamination process typically consists of how many steps?",
    choices: {
      A: "1",
      B: "2",
      C: "3",
      D: "It varies, depending on the circumstances."
    },
    correctAnswer: "D"
  },
  {
    id: 406,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.5.1",
    question: "What are the two procedures of gross decontamination?",
    choices: {
      A: "Removing outer clothing and continuous shower of water",
      B: "Continuous shower of water and brushing with chemically neutral soap",
      C: "Brushing with chemically neutral soap and intermittent sprays of water",
      D: "Intermittent sprays of water and removing outer clothing"
    },
    correctAnswer: "A"
  },
  {
    id: 407,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.5.1",
    question: "How does gross decontamination differ from emergency decontamination?",
    choices: {
      A: "Only gross decontamination involves a continuous shower of water.",
      B: "Only gross decontamination involves removing the outer clothing.",
      C: "Gross decontamination occurs in the decontamination corridor.",
      D: "Emergency decontamination is controlled through the decontamination corridor."
    },
    correctAnswer: "C"
  },
  {
    id: 408,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 26,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "In what decontamination procedure is a spongy material mixed with a liquid hazardous material and then the contaminated mixture is collected and disposed of?",
    choices: {
      A: "Adduction",
      B: "Absorption",
      C: "Sublimation",
      D: "Imbibition"
    },
    correctAnswer: "B"
  },
  {
    id: 409,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "What process involves a contaminant adhering to the surface of another material?",
    choices: {
      A: "Adsorption",
      B: "Adduction",
      C: "Attenuation",
      D: "Imbibition"
    },
    correctAnswer: "A"
  },
  {
    id: 410,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "Which material is most commonly used for dilution during decontamination?",
    choices: {
      A: "Tri-sodium phosphate",
      B: "Water",
      C: "Sawdust",
      D: "Soap"
    },
    correctAnswer: "B"
  },
  {
    id: 411,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 29,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "Which form of chemical degradation occurs naturally and requires no intervention by responders?",
    choices: {
      A: "In situ",
      B: "Dilution",
      C: "Evaporation",
      D: "Retention"
    },
    correctAnswer: "C"
  },
  {
    id: 412,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 30,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "In which process is a hazardous liquid turned into a solid?",
    choices: {
      A: "Sublimation",
      B: "Settling",
      C: "Solidification",
      D: "Annealing"
    },
    correctAnswer: "C"
  },
  {
    id: 413,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 31,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "Which form of decontamination is used to kill microorganisms on tools and equipment?",
    choices: {
      A: "Disinfection",
      B: "Sanitization",
      C: "Sterilization",
      D: "Lysis"
    },
    correctAnswer: "C"
  },
  {
    id: 414,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "Which statement about dilution of a hazardous material with water is correct?",
    choices: {
      A: "It increases the volume of contaminated material.",
      B: "It is a useful tactic for large-scale spills.",
      C: "It has the added advantage of suppressing vapor production.",
      D: "It is useful tactic for managing contaminated runoff."
    },
    correctAnswer: "A"
  },
  {
    id: 415,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 33,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "What is the term for the process of reducing and preventing the spread of hazardous materials by persons and equipment?",
    choices: {
      A: "Dispersion",
      B: "Suppression",
      C: "Decontamination",
      D: "Submersion"
    },
    correctAnswer: "C"
  },
  {
    id: 416,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 34,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "What is the term for the transfer of a hazardous material from its source to people, animals, the environment, or equipment?",
    choices: {
      A: "Exposure",
      B: "Infection",
      C: "Contact hazard",
      D: "Contamination"
    },
    correctAnswer: "D"
  },
  {
    id: 417,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 35,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.3.5.1",
    question: "Mass decontamination is the process of:",
    choices: {
      A: "Treating large numbers of people in a formal decontamination process.",
      B: "Performing gross decontamination on a large number of people at one time.",
      C: "Decontaminating a large area.",
      D: "Decontaminating all exposures with a single method."
    },
    correctAnswer: "B"
  },
  {
    id: 418,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 36,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "In what control zone is the decontamination corridor established?",
    choices: {
      A: "Hot",
      B: "Warm",
      C: "Cold",
      D: "Red"
    },
    correctAnswer: "B"
  },
  {
    id: 419,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "What type of decontamination is used in potentially life-threatening situations to rapidly remove the bulk of contaminants?",
    choices: {
      A: "Fine decontamination",
      B: "Gross decontamination",
      C: "Emergency decontamination",
      D: "Technical decontamination"
    },
    correctAnswer: "C"
  },
  {
    id: 420,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 38,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 5.4.2",
    question: "How should evidence be decontaminated?",
    choices: {
      A: "Evidence should not be subject to any decontamination process.",
      B: "Evidence must be thoroughly decontaminated.",
      C: "Decontaminate the outer and inner bag.",
      D: "Decontaminate the outer bag only."
    },
    correctAnswer: "D"
  },
  {
    id: 421,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 39,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "In what type of decontamination would soil or sawdust be used?",
    choices: {
      A: "Absorption",
      B: "Adsorption",
      C: "Dilution",
      D: "Emulsification"
    },
    correctAnswer: "A"
  },
  {
    id: 422,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "In what type of decontamination would sand or activated charcoal be used?",
    choices: {
      A: "Absorption",
      B: "Adsorption",
      C: "Dilution",
      D: "Emulsification"
    },
    correctAnswer: "B"
  },
  {
    id: 423,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 41,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "HEPA vacuum cleaners are used to remove hazardous materials that are _____ microns and larger.",
    choices: {
      A: "0.1",
      B: "2",
      C: "0.3",
      D: "1"
    },
    correctAnswer: "C"
  },
  {
    id: 424,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 42,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.6.4.2",
    question: "From the following list, which item is removed last during the decontamination process?",
    choices: {
      A: "Protective suit",
      B: "Boots",
      C: "Gloves",
      D: "Personal clothing"
    },
    correctAnswer: "D"
  },
  {
    id: 425,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 43,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.6.4.2",
    question: "Where should fire fighters proceed after thorough decontamination?",
    choices: {
      A: "Medical station",
      B: "Cold zone",
      C: "Staging area",
      D: "Command post"
    },
    correctAnswer: "A"
  },
  {
    id: 426,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 44,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 5.4.2",
    question: "The __________ is the written record of the location, disposition, and access to a piece of evidence.",
    choices: {
      A: "Evidence disposition log",
      B: "Affidavit of possession",
      C: "Statement of evidence",
      D: "Chain of custody"
    },
    correctAnswer: "D"
  },
  {
    id: 427,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 45,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "What is the planned and systematic process of reducing contamination to a level that is as low as reasonably achievable?",
    choices: {
      A: "Fine decontamination",
      B: "Gross decontamination",
      C: "Emergency decontamination",
      D: "Technical decontamination"
    },
    correctAnswer: "D"
  },
  {
    id: 428,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 46,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "What is the subject of the acronym ALARA?",
    choices: {
      A: "Levels of contaminants",
      B: "Strategic priorities at a hazardous materials incident",
      C: "Methods of terrorist attack",
      D: "Indications of criminal activity"
    },
    correctAnswer: "A"
  },
  {
    id: 429,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 47,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "Which method of decontamination consists primarily of removing all PPE and placing it directly into bags for disposal?",
    choices: {
      A: "Gross",
      B: "Dry",
      C: "Secondary",
      D: "Informal"
    },
    correctAnswer: "B"
  },
  {
    id: 430,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 48,
    level: "Operations",
    objective: "NFPA 472, 5.3.4, 6.4.1.2.2",
    question: "Which method of decontamination makes use of chemical-specific cleaning solutions?",
    choices: {
      A: "Gross",
      B: "Technical",
      C: "Secondary",
      D: "Mass"
    },
    correctAnswer: "B"
  },
  {
    id: 431,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 49,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "Which is a physical method of decontamination?",
    choices: {
      A: "Adsorption",
      B: "Sterilization",
      C: "Neutralization",
      D: "Solidification"
    },
    correctAnswer: "A"
  },
  {
    id: 432,
    quiz: 9,
    quizTitle: "Technical Decontamination",
    originalNumber: 50,
    level: "Operations",
    objective: "NFPA 472, 5.3.4",
    question: "Which decontamination method results in a liquid being drawn into a solid material?",
    choices: {
      A: "Absorption",
      B: "Dilution",
      C: "Adsorption",
      D: "Retention"
    },
    correctAnswer: "A"
  },

  // ─── QUIZ #10 — EVIDENCE PRESERVATION AND SAMPLING ───
  {
    id: 433,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which term refers to all of the information that is gathered and used by an investigator to determine the cause of an incident?",
    choices: {
      A: "Evidence",
      B: "Cause",
      C: "Proof",
      D: "Documentation"
    },
    correctAnswer: "A"
  },
  {
    id: 434,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which is an indicator that a letter/package may contain explosives or chemical or biological agents?",
    choices: {
      A: "Machine-printed address label",
      B: "Sent by private carrier, not government postal service",
      C: "Appears to be professionally packaged and wrapped",
      D: "Excessive postage"
    },
    correctAnswer: "D"
  },
  {
    id: 435,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "When managing a suspected terrorist/criminal incident, special emphasis should be placed on:",
    choices: {
      A: "Broad application of strategic priorities.",
      B: "Modified operational tactics.",
      C: "Manageable span of control.",
      D: "Preservation of evidence."
    },
    correctAnswer: "D"
  },
  {
    id: 436,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 6.5.2.1, 6.5.3.1",
    question: "You are called to investigate an unusual odor. Upon arrival you find a house with a secure fence, an alarm system, and blacked-out windows. What do these clues indicate?",
    choices: {
      A: "Illegal waste dumping",
      B: "Illicit laboratory",
      C: "A safe house",
      D: "Toxic agent release"
    },
    correctAnswer: "B"
  },
  {
    id: 437,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Careful observation of the signs and symptoms of victim exposed to a WMD agent may provide you with insight into the:",
    choices: {
      A: "Possible perpetrators.",
      B: "Source of materials.",
      C: "Specific agent involved.",
      D: "Intended target."
    },
    correctAnswer: "C"
  },
  {
    id: 438,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which classification of crimes consists of the intentional release or disposal of hazardous materials and waste into the environment?",
    choices: {
      A: "Terrorist",
      B: "WMD",
      C: "Environmental",
      D: "Industrial"
    },
    correctAnswer: "C"
  },
  {
    id: 439,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.5.4.1",
    question: "Which instrument is usually included in the monitoring/detection equipment used at a terrorist/criminal toxic release incident?",
    choices: {
      A: "Mass spectrometer",
      B: "Photo-ionization meter",
      C: "Gas chromatograph",
      D: "Spectroscope"
    },
    correctAnswer: "B"
  },
  {
    id: 440,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 8,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which has investigative authority for any suspicious letter or package that is sent through the postal system?",
    choices: {
      A: "Postal Inspection Service",
      B: "Postmaster General",
      C: "Local law enforcement agency",
      D: "Federal Bureau of Investigation"
    },
    correctAnswer: "A"
  },
  {
    id: 441,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which has investigative authority for any intentional release or attack involving hazardous materials or a WMD?",
    choices: {
      A: "Environmental Protection Agency",
      B: "Department of Defense",
      C: "Department of Homeland Security",
      D: "Federal Bureau of Investigation"
    },
    correctAnswer: "D"
  },
  {
    id: 442,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Who has investigative authority for large-scale environmental crimes?",
    choices: {
      A: "Environmental Protection Agency",
      B: "Department of Defense",
      C: "Department of Homeland Security",
      D: "Federal Bureau of Investigation"
    },
    correctAnswer: "A"
  },
  {
    id: 443,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "When managing a suspected terrorist/criminal incident, special emphasis should be placed on:",
    choices: {
      A: "Assessment of need for additional resources.",
      B: "Notification of suspicion of terrorist/criminal activity.",
      C: "Preparations for mass decontamination.",
      D: "Securing the scene."
    },
    correctAnswer: "D"
  },
  {
    id: 444,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which statement about evidence at suspected terrorist/criminal incidents is correct?",
    choices: {
      A: "Avoid moving or disturbing evidence.",
      B: "Carefully move evidence samples to a safe area.",
      C: "Collect and preserve evidence samples.",
      D: "Rescue operations should be modified to preserve evidence."
    },
    correctAnswer: "A"
  },
  {
    id: 445,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which is an example of physical evidence?",
    choices: {
      A: "Witness statement",
      B: "Burn pattern",
      C: "Computer modeling",
      D: "Security camera video"
    },
    correctAnswer: "B"
  },
  {
    id: 446,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which type of evidence consists of a minute quantity of physical evidence that is conveyed from one place to another?",
    choices: {
      A: "Demonstrative",
      B: "Indirect",
      C: "Trace",
      D: "Circumstantial"
    },
    correctAnswer: "C"
  },
  {
    id: 447,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "An investigator using a computer model to show how fire could spread through a building is an example of __________ evidence.",
    choices: {
      A: "Demonstrative",
      B: "Deductive",
      C: "Inferred",
      D: "Forensic"
    },
    correctAnswer: "A"
  },
  {
    id: 448,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Statements made by suspects, victims, or witnesses are __________ evidence.",
    choices: {
      A: "Observational",
      B: "Direct",
      C: "Hearsay",
      D: "Circumstantial"
    },
    correctAnswer: "B"
  },
  {
    id: 449,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 17,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "A witness states that he observed a man remove a gas can from the trunk of his car, enter a building, and return without the gas can. Shortly thereafter, the building began burning. Which type of evidence is this?",
    choices: {
      A: "Observational",
      B: "Direct",
      C: "Forensic",
      D: "Circumstantial"
    },
    correctAnswer: "D"
  },
  {
    id: 450,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 18,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "In general, what is the primary responsibility of hazardous materials responders with regard to evidence?",
    choices: {
      A: "Collection",
      B: "Determination of admissibility",
      C: "Determination of relevance",
      D: "Preservation"
    },
    correctAnswer: "D"
  },
  {
    id: 451,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 19,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "When working at a scene where terrorist/criminal activities may have occurred, what actions should hazardous materials responders take with potential evidence?",
    choices: {
      A: "Prevent contamination of evidence.",
      B: "Do not use flash photography.",
      C: "Collect evidence samples.",
      D: "Decontaminate evidence samples."
    },
    correctAnswer: "A"
  },
  {
    id: 452,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "When should hazardous materials responders move evidence?",
    choices: {
      A: "As early as possible in the incident",
      B: "Never",
      C: "Only when necessary in order to preserve it",
      D: "Immediately after decontamination"
    },
    correctAnswer: "C"
  },
  {
    id: 453,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 21,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "At a suspected terrorist/criminal incident, who is responsible for determining which evidence is relevant?",
    choices: {
      A: "First responders",
      B: "Fire officer",
      C: "Investigator",
      D: "Police officer"
    },
    correctAnswer: "C"
  },
  {
    id: 454,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "At the scene of a suspected terrorist/criminal incident, you have discovered potential evidence. Which step should be taken first?",
    choices: {
      A: "Photograph the evidence.",
      B: "Put the evidence in a container.",
      C: "Sketch, mark, and label the location of the evidence.",
      D: "Tag the evidence."
    },
    correctAnswer: "A"
  },
  {
    id: 455,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Before moving evidence, which step should be taken first?",
    choices: {
      A: "Tag the evidence.",
      B: "Make sure at least one witness is present.",
      C: "Document the chain of custody.",
      D: "Soak up excess fluid with a sponge or cotton batting."
    },
    correctAnswer: "B"
  },
  {
    id: 456,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "What is the process of maintaining continuous possession of a piece of evidence?",
    choices: {
      A: "Custodianship of evidence",
      B: "Evidence management",
      C: "Collection curation",
      D: "Chain of custody"
    },
    correctAnswer: "D"
  },
  {
    id: 457,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "When should a first responder at a suspected terrorist/criminal incident collect evidence?",
    choices: {
      A: "As early as possible in the incident",
      B: "When directed to by the law enforcement agency having jurisdiction",
      C: "On any incident of suspect origin",
      D: "Before beginning overhaul operations"
    },
    correctAnswer: "B"
  },
  {
    id: 458,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 26,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "The __________ log is the written record of each person who handled the evidence, and the date and time on which it was transferred from one person to another.",
    choices: {
      A: "evidence disposition",
      B: "evidence management",
      C: "custodianship of evidence",
      D: "chain of custody"
    },
    correctAnswer: "D"
  },
  {
    id: 459,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Until findings are ready to be made public, what is the correct response to inquiries about the cause of an incident?",
    choices: {
      A: "\"The incident is under investigation.\"",
      B: "\"No Comment.\"",
      C: "\"The incident is of suspicious origin.\"",
      D: "\"The incident is of unknown origin.\""
    },
    correctAnswer: "A"
  },
  {
    id: 460,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which statement about interviewing a witness is correct?",
    choices: {
      A: "Establish an emotional rapport with the witness early in the interview.",
      B: "Close the interview by giving the witness a summary of the known facts of the incident.",
      C: "The interview should be performed by an investigator or law enforcement officer.",
      D: "Do not let the witness leave the scene without an interview."
    },
    correctAnswer: "C"
  },
  {
    id: 461,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 29,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "The FBI has a _____-step process for collection of evidence.",
    choices: {
      A: "3",
      B: "6",
      C: "9",
      D: "12"
    },
    correctAnswer: "D"
  },
  {
    id: 462,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 30,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "What is the process of collecting portions of a hazardous material/WMD for the purposes of field screening, laboratory testing, and, ultimately, criminal prosecution?",
    choices: {
      A: "Evidence sampling",
      B: "Forensic sample recovery",
      C: "Evidence collection",
      D: "Physical evidence analysis"
    },
    correctAnswer: "A"
  },
  {
    id: 463,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 31,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "When managing a possible criminal incident, which action should be taken first?",
    choices: {
      A: "Establish unified command.",
      B: "Secure the scene.",
      C: "Cover vulnerable evidence.",
      D: "Identify possible witnesses."
    },
    correctAnswer: "B"
  },
  {
    id: 464,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "What is the goal of field screening evidence?",
    choices: {
      A: "To conclusively identify a material",
      B: "To preserve potential evidence",
      C: "To identify immediate hazards",
      D: "To prevent secondary contamination"
    },
    correctAnswer: "C"
  },
  {
    id: 465,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 33,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "What kind of evidence is used to validate a theory or to show how something could have occurred?",
    choices: {
      A: "Circumstantial",
      B: "Demonstrative",
      C: "Direct",
      D: "Theoretical"
    },
    correctAnswer: "B"
  },
  {
    id: 466,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 34,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "What kind of evidence includes facts that can be observed or reported first hand?",
    choices: {
      A: "Narrative",
      B: "Objective",
      C: "Direct",
      D: "Sworn"
    },
    correctAnswer: "C"
  },
  {
    id: 467,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 35,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which is the best container for transporting noncorrosive evidence?",
    choices: {
      A: "Unused paint can with an airtight lid",
      B: "Tupperware",
      C: "Plastic bag",
      D: "Paper bag"
    },
    correctAnswer: "A"
  },
  {
    id: 468,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 36,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "How many containers will be needed for each piece of evidence that must undergo decontamination?",
    choices: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    correctAnswer: "C"
  },
  {
    id: 469,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "When it is suspected that an explosive device is present, hazardous materials responders should coordinate their actions with the __________ to conduct an assessment of the scene and plan a response.",
    choices: {
      A: "Federal Bureau of Investigation (FBI)",
      B: "explosive ordnance disposal team (EOD)",
      C: "Operations Section Chief (OSC)",
      D: "Bureau of Explosives (BOE)"
    },
    correctAnswer: "B"
  },
  {
    id: 470,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 38,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "What is one potential means for dispersing a chemical agent over a wide area?",
    choices: {
      A: "Crop-dusting aircraft",
      B: "Steam radiators",
      C: "Railway tank cars",
      D: "55-gallon drums"
    },
    correctAnswer: "A"
  },
  {
    id: 471,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 39,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "The most likely cause of dead or dying animals at or near the scene of a known or suspected terrorist incident is:",
    choices: {
      A: "Blast wave effects.",
      B: "Biological agent release.",
      C: "Radiation release.",
      D: "Chemical release."
    },
    correctAnswer: "D"
  },
  {
    id: 472,
    quiz: 10,
    quizTitle: "Evidence Preservation and Sampling",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1",
    question: "Which statement about evidence taken from a suspected terrorist/crime scene is correct?",
    choices: {
      A: "It should not undergo decontamination.",
      B: "It should undergo gross decontamination.",
      C: "It should undergo technical decontamination.",
      D: "It should undergo decontamination at a lab."
    },
    correctAnswer: "C"
  },

  // ─── QUIZ #11 — PRODUCT CONTROL ───
  {
    id: 473,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which is the term for attempting to keep the hazardous materials on the site or within the immediate area of the release?",
    choices: {
      A: "Adsorption",
      B: "Confinement",
      C: "Remediation",
      D: "Containment"
    },
    correctAnswer: "B"
  },
  {
    id: 474,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "What are actions that stop a hazardous material from leaking or escaping its container?",
    choices: {
      A: "Confinement",
      B: "Containment",
      C: "Control",
      D: "Mitigation"
    },
    correctAnswer: "B"
  },
  {
    id: 475,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which is a confinement tactic?",
    choices: {
      A: "Plugging",
      B: "Patching",
      C: "Diking",
      D: "Righting an overturned container"
    },
    correctAnswer: "C"
  },
  {
    id: 476,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which is a containment tactic?",
    choices: {
      A: "Plugging",
      B: "Damming",
      C: "Diking",
      D: "Vapor control"
    },
    correctAnswer: "A"
  },
  {
    id: 477,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "In a hazardous materials situation that is dangerous and unstable and responders cannot be properly protected, which action is appropriate?",
    choices: {
      A: "Withdraw to a safe distance.",
      B: "Minimize spread of the material.",
      C: "Attempt to stabilize the situation.",
      D: "Stop release of the material."
    },
    correctAnswer: "A"
  },
  {
    id: 478,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "What term means areas in the terrain or places in a structure where materials might be contained or confined?",
    choices: {
      A: "Declivity",
      B: "Anchor point",
      C: "Topographic basin",
      D: "Natural control points"
    },
    correctAnswer: "D"
  },
  {
    id: 479,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "In which process is a material used to soak up and hold a liquid hazardous material like a sponge holds water?",
    choices: {
      A: "Adduction",
      B: "Absorption",
      C: "Abduction",
      D: "Osmosis"
    },
    correctAnswer: "B"
  },
  {
    id: 480,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 8,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which item is an absorbent commonly used in hazardous materials operations?",
    choices: {
      A: "Mortar",
      B: "Soil",
      C: "Baking soda",
      D: "Stone tailings"
    },
    correctAnswer: "B"
  },
  {
    id: 481,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.4.4.1",
    question: "When applying foam to a pool of burning fuel, it is important to avoid:",
    choices: {
      A: "Directing the foam onto any surface other than the liquid.",
      B: "Using standard fog or smooth-bore nozzles to apply the foam.",
      C: "Agitating the surface of the liquid.",
      D: "Using alcohol-resistant formulations."
    },
    correctAnswer: "C"
  },
  {
    id: 482,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Absorption is a difficult technique for operations level responders at a hazardous materials incident because:",
    choices: {
      A: "it is a precise, technically advanced procedure.",
      B: "it must be performed by personnel in Level A PPE.",
      C: "it requires being in close proximity to the hazardous material.",
      D: "the absorbents are difficult to handle."
    },
    correctAnswer: "C"
  },
  {
    id: 483,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "How does a spill boom control a hazardous material?",
    choices: {
      A: "It forms a barrier to the movement of the material.",
      B: "It absorbs the material.",
      C: "It reduces agitation of liquid within the boom perimeter.",
      D: "It covers the material."
    },
    correctAnswer: "A"
  },
  {
    id: 484,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "The concept of adsorption is most similar to:",
    choices: {
      A: "Burial.",
      B: "A sponge.",
      C: "Velcro.",
      D: "Diffusion."
    },
    correctAnswer: "C"
  },
  {
    id: 485,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which method of product control results in one material physically adhering to another?",
    choices: {
      A: "Absorption",
      B: "Dilution",
      C: "Adsorption",
      D: "Retention"
    },
    correctAnswer: "C"
  },
  {
    id: 486,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which is a common adsorbent material?",
    choices: {
      A: "Nitric acid",
      B: "Sawdust",
      C: "Peat moss",
      D: "Activated carbon"
    },
    correctAnswer: "D"
  },
  {
    id: 487,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "What type of dam should be constructed for a material that has a specific gravity greater than 1?",
    choices: {
      A: "Scherring",
      B: "Overflow",
      C: "Separation",
      D: "Gravity"
    },
    correctAnswer: "B"
  },
  {
    id: 488,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which type of dam is used to contain materials lighter than water?",
    choices: {
      A: "Underflow",
      B: "Gravity",
      C: "Separation",
      D: "Split"
    },
    correctAnswer: "A"
  },
  {
    id: 489,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 17,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which item will be needed to build a dam in a flowing stream that is contaminated with a hazardous liquid?",
    choices: {
      A: "Plastic sheeting",
      B: "Rebar",
      C: "PVC pipe",
      D: "Rip-rap"
    },
    correctAnswer: "C"
  },
  {
    id: 490,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 18,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "What term means the placement of material to form a barrier that keeps a hazardous material from entering an unwanted area?",
    choices: {
      A: "Diking",
      B: "Scherring dam",
      C: "Retention",
      D: "Diversion"
    },
    correctAnswer: "A"
  },
  {
    id: 491,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 19,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which protective action uses water or another liquid to reduce the concentration of a hazardous material?",
    choices: {
      A: "Dispersion",
      B: "Adsorption",
      C: "Dilution",
      D: "Suppression"
    },
    correctAnswer: "C"
  },
  {
    id: 492,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which is a concern with using dilution at a hazardous materials spill?",
    choices: {
      A: "Once water is added, the identity of the hazardous material may be masked.",
      B: "Chemical treatments may not be effective on diluted solution of the product.",
      C: "Once water is added, it cannot be removed.",
      D: "The diluted product may overwhelm containment measures."
    },
    correctAnswer: "D"
  },
  {
    id: 493,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 21,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "How much water is needed to effectively dilute a hazardous material?",
    choices: {
      A: "A volume equal to twice that of the material to be diluted",
      B: "A volume equal to three times that of the material to be diluted",
      C: "A volume equal to four times that of the material to be diluted",
      D: "It varies, depending on the material to be diluted."
    },
    correctAnswer: "D"
  },
  {
    id: 494,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which is the first step in dike construction?",
    choices: {
      A: "Determine which diking material will be compatible with the spilled material.",
      B: "Dig a shallow depression.",
      C: "Determine the number and location of the pipes.",
      D: "Spread out the plastic sheeting."
    },
    correctAnswer: "A"
  },
  {
    id: 495,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which is the first step in a dilution operation?",
    choices: {
      A: "Determine material compatibility.",
      B: "Assess the viability of the proposed operation.",
      C: "Ensure adequate water supply.",
      D: "Build containment for the diluted product."
    },
    correctAnswer: "B"
  },
  {
    id: 496,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "What is the technique of redirecting the flow of a liquid away from an area?",
    choices: {
      A: "Diversion",
      B: "Damming",
      C: "Diking",
      D: "Detainment"
    },
    correctAnswer: "A"
  },
  {
    id: 497,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "You have used sandbags to create a barrier to prevent a hazardous liquid from entering a storm drain. Which product control tactic is this?",
    choices: {
      A: "Damming",
      B: "Diversion",
      C: "Diking",
      D: "Retention"
    },
    correctAnswer: "B"
  },
  {
    id: 498,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 26,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "You have dug a shallow pit to collect and hold a hazardous liquid. Which control tactic is this?",
    choices: {
      A: "Containment",
      B: "Detainment",
      C: "Diking",
      D: "Retention"
    },
    correctAnswer: "D"
  },
  {
    id: 499,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which control tactic should always be considered in transportation emergencies or incidents at fixed facilities?",
    choices: {
      A: "Damming",
      B: "Retention",
      C: "Remote valve shut-off",
      D: "Diffusion"
    },
    correctAnswer: "C"
  },
  {
    id: 500,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Where are remote shut-off valves located on MC-306 cargo tanks?",
    choices: {
      A: "Next to the air coupling",
      B: "At the front of the tank",
      C: "Near the front of the cab",
      D: "In the valve box"
    },
    correctAnswer: "C"
  },
  {
    id: 501,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 29,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Where are shut-off valves located on MC-331 cargo tanks?",
    choices: {
      A: "In the vent housing",
      B: "At both ends of the tank",
      C: "Near the front of the cab",
      D: "In the valve box"
    },
    correctAnswer: "B"
  },
  {
    id: 502,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 30,
    level: "Operations",
    objective: "NFPA 472, 6.6.4.1",
    question: "What is an identifying characteristic of a cargo tank truck designed to carry liquefied gases such as LPG?",
    choices: {
      A: "External structural rings",
      B: "Top-mount valve controls",
      C: "Insulated tank shell",
      D: "Rounded tank ends"
    },
    correctAnswer: "D"
  },
  {
    id: 503,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 31,
    level: "Operations",
    objective: "NFPA 472, 6.6.4.1",
    question: "Which is an identifying characteristic of a cargo tank truck designed to carry liquids at atmospheric pressure?",
    choices: {
      A: "Oval/elliptical cross-sectional tank shape",
      B: "Circumferential rollover protection",
      C: "External ring stiffeners",
      D: "Top-mounted loading control valves"
    },
    correctAnswer: "A"
  },
  {
    id: 504,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 6.6.4.1",
    question: "Which cargo tanks are certified to transport flammable and combustible liquids chemicals transported at low pressure (under 25 psi)?",
    choices: {
      A: "MC-307/DOT-407",
      B: "MC-306/DOT-406",
      C: "MC-331/DOT-431",
      D: "MC-312/DOT-412"
    },
    correctAnswer: "A"
  },
  {
    id: 505,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 33,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which tactic lowers the concentration of a vapor cloud by spreading it out?",
    choices: {
      A: "Diffusion",
      B: "Ventilation",
      C: "Vapor dispersion",
      D: "Gas retention"
    },
    correctAnswer: "C"
  },
  {
    id: 506,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 34,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Vapor dispersion with fans or fog streams should only be attempted after:",
    choices: {
      A: "an opposing dispersing stream is ready.",
      B: "a containment basin is dug.",
      C: "the ground has been treated with lime.",
      D: "the hazardous material is accurately identified."
    },
    correctAnswer: "D"
  },
  {
    id: 507,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 35,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which issue requires particular attention with considering attempting dispersal of flammable vapors?",
    choices: {
      A: "Turbulence created by the dispersal may increase vapor production.",
      B: "Personnel may be directly exposed to the material.",
      C: "Water fog will cause a reaction with many flammable liquids.",
      D: "Dispersal may cause the vapors to ignite."
    },
    correctAnswer: "D"
  },
  {
    id: 508,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 36,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "When foam is applied to a hazardous materials spill, what happens to the volume of the spill?",
    choices: {
      A: "It decreases.",
      B: "It increases.",
      C: "It remains the same.",
      D: "It depends on the substance involved."
    },
    correctAnswer: "B"
  },
  {
    id: 509,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "The most common method of vapor suppression is application of:",
    choices: {
      A: "Plastic or other impermeable sheet material.",
      B: "Sawdust or other particulate absorbent.",
      C: "Firefighting foam.",
      D: "An inert, heavier-than-air gas."
    },
    correctAnswer: "C"
  },
  {
    id: 510,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 38,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Why should foam be applied so that it flows gently across a liquid?",
    choices: {
      A: "So as not to directly upset the burning surface",
      B: "To prevent disruption of the foam blanket",
      C: "To prevent entraining additional air",
      D: "Because liquid agitation will increase the temperature"
    },
    correctAnswer: "A"
  },
  {
    id: 511,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 39,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "AFFF works primarily by:",
    choices: {
      A: "Displacing oxygen with an inert gas.",
      B: "Inhibiting the chemical chain reaction.",
      C: "Cooling the fuel.",
      D: "Forming a blanket to suppress vapors."
    },
    correctAnswer: "D"
  },
  {
    id: 512,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which statement about regular protein foam is correct?",
    choices: {
      A: "It is effective on polar solvents.",
      B: "It has a longer shelf life than synthetic foam.",
      C: "It is not effective on class B fires.",
      D: "It has good expansion properties."
    },
    correctAnswer: "D"
  },
  {
    id: 513,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 41,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which statement about fluoroprotein foam is correct?",
    choices: {
      A: "It has poor vapor-suppressing performance.",
      B: "It is effective on Class B fires.",
      C: "It is effective as a Class A wetting agent.",
      D: "It is not available in a polar solvent-resistant formula."
    },
    correctAnswer: "B"
  },
  {
    id: 514,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 42,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "For which application is high-expansion foam most appropriate?",
    choices: {
      A: "Vapor suppression of polar solvents",
      B: "When foam with high water content is required",
      C: "Use as a wetting agent",
      D: "For flooding a large area with foam"
    },
    correctAnswer: "D"
  },
  {
    id: 515,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 43,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "What foam application method should be used on a pooled liquid fire on the ground producing an intense thermal column?",
    choices: {
      A: "Bounce-off method",
      B: "Rain-down method",
      C: "Roll-in method",
      D: "Subsurface injection method"
    },
    correctAnswer: "C"
  },
  {
    id: 516,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 44,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "What foam application method should be used on open-top storage tank fires?",
    choices: {
      A: "Bounce-off method",
      B: "Rain-down method",
      C: "Roll-in method",
      D: "Subsurface injection method"
    },
    correctAnswer: "A"
  },
  {
    id: 517,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 45,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "In addition to extinguishing flammable liquid fires, what are Class B foams used for on hazardous materials incidents?",
    choices: {
      A: "To break down the surface tension of fuels",
      B: "As an emulsifier for heavy hydrocarbon fuels",
      C: "To suppress vapor production of un-ignited fuels",
      D: "As a decontamination agent"
    },
    correctAnswer: "C"
  },
  {
    id: 518,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 46,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "In which method of foam application is a bank of foam formed on the ground in front of the flammable liquid pool and pushed over the pool by the continued application of foam?",
    choices: {
      A: "Bounce-off method",
      B: "Rain-down method",
      C: "Roll-in method",
      D: "Subsurface injection method"
    },
    correctAnswer: "C"
  },
  {
    id: 519,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 47,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which foam application method is particularly well suited to transport vehicle accidents?",
    choices: {
      A: "Bounce-off method",
      B: "Rain-down method",
      C: "Roll-in method",
      D: "Subsurface injection method"
    },
    correctAnswer: "A"
  },
  {
    id: 520,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 48,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "An aboveground storage tank has leaked flammable liquid into the surrounding diked containment area. A foam stream is directed against the side of the tank. Foam is running down the side of the tank and covering the spilled fuel in the containment area. Which foam application method does this describe?",
    choices: {
      A: "Subsurface injection method",
      B: "Rain-down method",
      C: "Roll-in method",
      D: "Bounce-off method"
    },
    correctAnswer: "D"
  },
  {
    id: 521,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 49,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "A fire fighter is directing a foam stream over an aboveground open-top storage tank, letting the foam gently fall onto the surface of the liquid in the tank. Which foam application method does this describe?",
    choices: {
      A: "Bounce-off method",
      B: "Roll-in method",
      C: "Rain-down method",
      D: "Aerial method"
    },
    correctAnswer: "C"
  },
  {
    id: 522,
    quiz: 11,
    quizTitle: "Product Control",
    originalNumber: 50,
    level: "Operations",
    objective: "NFPA 472, 6.6.3.1, 6.6.4.1",
    question: "Which foam application method is the least effective when burning fuel is producing a strong thermal column?",
    choices: {
      A: "Bounce-off method",
      B: "Roll-in method",
      C: "Subsurface injection method",
      D: "Rain-down method"
    },
    correctAnswer: "D"
  },

  // ─── QUIZ #12 — AIR MONITORING AND SAMPLING ───
  {
    id: 523,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "An organic substance is one that:",
    choices: {
      A: "occurs naturally.",
      B: "contains carbon.",
      C: "is produced by living organisms.",
      D: "can react with oxygen."
    },
    correctAnswer: "B"
  },
  {
    id: 524,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is the term for compounds that are capable of vaporizing into the atmosphere under normal environmental conditions?",
    choices: {
      A: "Volatile organic compounds",
      B: "Ambient-reactive compounds",
      C: "Highly soluble liquids",
      D: "Monomeric liquids"
    },
    correctAnswer: "A"
  },
  {
    id: 525,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which instrument gives real-time measurements of organic vapors or mists in very low concentrations?",
    choices: {
      A: "Flame ionization detector (FID)",
      B: "Gas chromatography (GC)",
      C: "Photo-ionization detector (PID)",
      D: "Gas spectrometer"
    },
    correctAnswer: "C"
  },
  {
    id: 526,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which instrument can be used to identify the components of a mixed air sample that may contain several different chemicals?",
    choices: {
      A: "Ionic vapor detector",
      B: "Gas chromatography (GC)",
      C: "Photo-ionization detector (PID)",
      D: "Raman spectroscope"
    },
    correctAnswer: "B"
  },
  {
    id: 527,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "The reagent in __________ will undergo a particular color change when exposed to the contaminant it is designed to detect.",
    choices: {
      A: "a colorimetric tube",
      B: "gas chromatography (GC)",
      C: "a Fourier Transform Infrared spectroscope",
      D: "a mass spectrometer"
    },
    correctAnswer: "A"
  },
  {
    id: 528,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which device is designed solely to detect flammable or explosive atmospheres?",
    choices: {
      A: "Combustible gas indicator",
      B: "Vapor ionization detector",
      C: "Ionic vapor detector",
      D: "Colorimetric tube"
    },
    correctAnswer: "A"
  },
  {
    id: 529,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "A __________ is a versatile detection device typically equipped with a combination of toxic gas sensors and the ability to detect flammable gases and vapors.",
    choices: {
      A: "combustible gas indicator",
      B: "vapor ionization detector",
      C: "multi-gas meter",
      D: "colorimetric tube"
    },
    correctAnswer: "C"
  },
  {
    id: 530,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 8,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is used to measure the pH of corrosive liquids and gases?",
    choices: {
      A: "Colorimetric tube",
      B: "Chemical test strips",
      C: "Reagent strips",
      D: "Litmus paper"
    },
    correctAnswer: "D"
  },
  {
    id: 531,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "A __________ is clipped to a front shirt pocket and measures exposure to a specific contaminant.",
    choices: {
      A: "chemical test strip",
      B: "specialized detection device",
      C: "specific sampling card",
      D: "personal dosimeter"
    },
    correctAnswer: "D"
  },
  {
    id: 532,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "This detection device is dipped into an unknown liquid, allowing the chemical to come into contact with several small \"windows,\" each with specific reagents designed to identify the presence of different chemical classifications.",
    choices: {
      A: "General assay kit",
      B: "Chemical test strip",
      C: "Broad-spectrum sampling paper",
      D: "Litmus paper"
    },
    correctAnswer: "B"
  },
  {
    id: 533,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which statement about detection/monitoring devices is correct?",
    choices: {
      A: "The multi-gas meter has replaced most other detection equipment.",
      B: "Misinterpreted monitor readings can result in poor decisions.",
      C: "The device's features determine how the device fits into your operational plan.",
      D: "Most modern detectors are designed so that service can be performed in-house."
    },
    correctAnswer: "B"
  },
  {
    id: 534,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is the term for observing and understanding the visual cues available and using that information to orient yourself and make rapid decisions about your current situation?",
    choices: {
      A: "Size-up",
      B: "Incident action plan (IAP)",
      C: "Strategy",
      D: "Situational awareness"
    },
    correctAnswer: "D"
  },
  {
    id: 535,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Situational awareness begins with:",
    choices: {
      A: "Knowing your objective and your tactics.",
      B: "Obtaining information about the situation.",
      C: "Maintaining a manageable span of control.",
      D: "Establishing a clear chain of command."
    },
    correctAnswer: "B"
  },
  {
    id: 536,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Of the 10 basic rules for detection and monitoring, which comes first?",
    choices: {
      A: "Develop an overall monitoring plan.",
      B: "Confirm all readings are obtained and recorded when appropriate.",
      C: "Properly prepare the instrument for use.",
      D: "Prioritize your monitoring areas."
    },
    correctAnswer: "D"
  },
  {
    id: 537,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Of the 10 basic rules for detection and monitoring, which comes first?",
    choices: {
      A: "Select the proper personal protective equipment (PPE) for the task.",
      B: "Research and understand the nature of any identified atmospheric contamination.",
      C: "Attempt to identify the source and nature of potential contamination prior to entry.",
      D: "Select the appropriate instrument(s) for the task."
    },
    correctAnswer: "C"
  },
  {
    id: 538,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which procedure ensures that a particular instrument will detect the gas or vapor it is intended to detect at a certain level?",
    choices: {
      A: "Calibration",
      B: "Standardization",
      C: "Fresh-air setup",
      D: "Bump test"
    },
    correctAnswer: "A"
  },
  {
    id: 539,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 17,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is the term for a quick field test to ensure that a gas detector will detect the gases it is intended to?",
    choices: {
      A: "Calibration",
      B: "Quick check",
      C: "Fresh-air setup",
      D: "Bump test"
    },
    correctAnswer: "D"
  },
  {
    id: 540,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 18,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which test involves releasing a gas near the inlet port of a monitor/detector to see if the device detects it correctly?",
    choices: {
      A: "Fresh-air setup",
      B: "Alarm check",
      C: "Bump test",
      D: "Calibration"
    },
    correctAnswer: "C"
  },
  {
    id: 541,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 19,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "The time it takes for a gas detector to draw in an air sample, process the sample, and give a reading is the __________ time.",
    choices: {
      A: "lag",
      B: "reaction",
      C: "detection",
      D: "processing"
    },
    correctAnswer: "B"
  },
  {
    id: 542,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "The __________ time of a gas detector is how much time it takes it to clear a reading so a new reading can be taken.",
    choices: {
      A: "response",
      B: "recovery",
      C: "clearing",
      D: "reset"
    },
    correctAnswer: "B"
  },
  {
    id: 543,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 21,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which item is required to zero a gas detector?",
    choices: {
      A: "Calibration gas",
      B: "Bump gas",
      C: "Zeroing gas",
      D: "Clean atmosphere"
    },
    correctAnswer: "D"
  },
  {
    id: 544,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "A gas monitor is sampling a combustible gas for which it has not been calibrated. Which statement about this situation is correct?",
    choices: {
      A: "Measurements and alarms will not be affected.",
      B: "The monitor will go into alarm mode regardless of the concentration.",
      C: "Accurate readings can be obtained through the use of a correction factor.",
      D: "The monitor will not be useful in this situation."
    },
    correctAnswer: "C"
  },
  {
    id: 545,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What function does the relative response factor perform?",
    choices: {
      A: "Corrects readings for differing combustible gases",
      B: "Reduces recovery time",
      C: "Makes it possible to zero the sensors",
      D: "Adjusts for differences in ambient pressures"
    },
    correctAnswer: "A"
  },
  {
    id: 546,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "When performing atmospheric monitoring of a building, where should you start?",
    choices: {
      A: "Around the outside of the building",
      B: "At the point of entry",
      C: "At the lowest part of the building",
      D: "At the highest part of the building"
    },
    correctAnswer: "A"
  },
  {
    id: 547,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which is a hazard unique to Raman spectroscopy?",
    choices: {
      A: "Exposure to isotope",
      B: "Static electricity is generated.",
      C: "Close proximity to the sample material is required.",
      D: "Laser-induced eye damage"
    },
    correctAnswer: "D"
  },
  {
    id: 548,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 26,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which type of gas detector operates by using an ultraviolet light lamp to break down the sample gas into electrically charged particles, which produce a current that is amplified and displayed by the instrument?",
    choices: {
      A: "Transform infrared spectroscopy",
      B: "Ionization detector",
      C: "Gas chromatography",
      D: "Photo-ionization detector"
    },
    correctAnswer: "D"
  },
  {
    id: 549,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What does VOC stand for?",
    choices: {
      A: "Vessel overturn cage",
      B: "Volatile organic compound",
      C: "Viable operational command",
      D: "Vapor outlet control"
    },
    correctAnswer: "B"
  },
  {
    id: 550,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Most combustible-gas indicators begin to alarm when the concentration of combustible gas reaches what level?",
    choices: {
      A: "100% of the LEL/LFL",
      B: "10% of the UEL/UFL",
      C: "10% of the LEL/LFL",
      D: "100% of the UEL/UFL"
    },
    correctAnswer: "C"
  },
  {
    id: 551,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 29,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which factor complicates the use of a combustible gas indicator?",
    choices: {
      A: "The instrument is calibrated for only one specific gas.",
      B: "Readings must be corrected for altitude.",
      C: "Flammable limits for a specific gas can vary significantly.",
      D: "The instrument can sense only one specific gas."
    },
    correctAnswer: "A"
  },
  {
    id: 552,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 30,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is the minimum concentration of atmospheric oxygen necessary for a combustible gas indicator to function properly?",
    choices: {
      A: "10%",
      B: "15%",
      C: "17%",
      D: "19.5%"
    },
    correctAnswer: "A"
  },
  {
    id: 553,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 31,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which technique can identify the various components of a gas mixture, but not the amounts of each component?",
    choices: {
      A: "Gas chromatography",
      B: "Ionization detector",
      C: "Transform infrared spectroscopy",
      D: "Photo-ionization detector"
    },
    correctAnswer: "A"
  },
  {
    id: 554,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which instrument uses a tiny hydrogen flame to break down a sample gas into electrically charged particles to determine the concentration of each component of the gaseous mixture?",
    choices: {
      A: "Raman spectroscopy",
      B: "Flame ionization detector",
      C: "Transform infrared spectroscopy",
      D: "Gas chromatography"
    },
    correctAnswer: "B"
  },
  {
    id: 555,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 33,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Ambient air at sea level contains _____% oxygen.",
    choices: {
      A: "18",
      B: "19.5",
      C: "20.9",
      D: "23.5"
    },
    correctAnswer: "C"
  },
  {
    id: 556,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 34,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "An oxygen-deficient atmosphere is defined as an oxygen concentration below _____%.",
    choices: {
      A: "18",
      B: "19.5",
      C: "20.9",
      D: "23.5"
    },
    correctAnswer: "B"
  },
  {
    id: 557,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 35,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "An oxygen-enriched atmosphere is defined as an oxygen concentration above _____%.",
    choices: {
      A: "18",
      B: "19.5",
      C: "20.9",
      D: "23.5"
    },
    correctAnswer: "D"
  },
  {
    id: 558,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 36,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is the primary toxic effect of carbon monoxide?",
    choices: {
      A: "Interferes with the blood's ability to carry oxygen",
      B: "Inhibits cellular metabolism and reproduction",
      C: "Disrupts transmission of nervous system impulses",
      D: "Directly toxic to liver and kidney tissue"
    },
    correctAnswer: "A"
  },
  {
    id: 559,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is the minimum concentration of carbon monoxide at which all emergency personnel should wear SCBA?",
    choices: {
      A: "35 ppm",
      B: "475 ppm",
      C: "1000 ppm",
      D: "2000 ppm"
    },
    correctAnswer: "A"
  },
  {
    id: 560,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 38,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is the most commonly encountered source of carbon monoxide?",
    choices: {
      A: "Decomposing organic materials",
      B: "Combustion",
      C: "Hydrocarbon liquid vapors",
      D: "Endothermic chemical reactions"
    },
    correctAnswer: "B"
  },
  {
    id: 561,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 39,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which gas is sometimes referred to as \"sewer gas\"?",
    choices: {
      A: "Sulfur Dioxide",
      B: "Hydrogen Cyanide",
      C: "Hydrogen Sulfide",
      D: "Carbon Dioxide"
    },
    correctAnswer: "C"
  },
  {
    id: 562,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which statement about carbon monoxide is correct?",
    choices: {
      A: "It has the odor of sour milk.",
      B: "It tends to settle in low areas.",
      C: "It is visible under some circumstances.",
      D: "It has a wide flammable range."
    },
    correctAnswer: "D"
  },
  {
    id: 563,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 41,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which statement about hydrogen sulfide is correct?",
    choices: {
      A: "It is usually the product of incomplete combustion.",
      B: "It tends to rise and dissipate.",
      C: "It blocks the cells from using oxygen.",
      D: "It can be reliably detected by odor."
    },
    correctAnswer: "C"
  },
  {
    id: 564,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 42,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "A typical four-gas monitor checks for which of the following?",
    choices: {
      A: "Fluorine",
      B: "Chlorine",
      C: "Carbon dioxide",
      D: "Hydrogen sulfide"
    },
    correctAnswer: "D"
  },
  {
    id: 565,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 43,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which statement about electrochemical sensors is correct?",
    choices: {
      A: "They eliminate the need for bump testing.",
      B: "They are considered an unreliable technology.",
      C: "Exposure to some gases may result in false readings.",
      D: "Shelf life is indefinite, depending on frequency of use."
    },
    correctAnswer: "C"
  },
  {
    id: 566,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 44,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which type of gas detector uses a hand-powered bellows pump to draw a sample?",
    choices: {
      A: "Colorimetric tube",
      B: "Vapor ionization detector",
      C: "Combustible gas indicator",
      D: "Multi-gas monitor"
    },
    correctAnswer: "A"
  },
  {
    id: 567,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 45,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What does pH measure?",
    choices: {
      A: "The relative strength of an oxidizer",
      B: "The concentration of hydrogen ions",
      C: "The tendency of a material to react with other materials",
      D: "The relative volatility of a material"
    },
    correctAnswer: "B"
  },
  {
    id: 568,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 46,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is a neutral pH?",
    choices: {
      A: "0",
      B: "1",
      C: "5",
      D: "7"
    },
    correctAnswer: "D"
  },
  {
    id: 569,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 47,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "Which pH is acidic?",
    choices: {
      A: "2",
      B: "7",
      C: "9",
      D: "10"
    },
    correctAnswer: "A"
  },
  {
    id: 570,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 48,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "A material with a pH of ____ is the most corrosive.",
    choices: {
      A: "5",
      B: "7",
      C: "9",
      D: "12"
    },
    correctAnswer: "D"
  },
  {
    id: 571,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 49,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What is a spectra?",
    choices: {
      A: "An infrared radiation source",
      B: "A radiation detection device",
      C: "A material's unique molecular fingerprint",
      D: "A broad-spectrum laser"
    },
    correctAnswer: "C"
  },
  {
    id: 572,
    quiz: 12,
    quizTitle: "Air Monitoring and Sampling",
    originalNumber: 50,
    level: "Operations",
    objective: "NFPA 472, 6.7.1.2.2, 6.7.3.1, 6.7.3.2",
    question: "What special capability does Fourier Transform Infrared spectroscopy provide?",
    choices: {
      A: "Specific identification of many substances by name",
      B: "Measurement of the percentage LEL for any flammable gases",
      C: "Liquid, mist, dust, and gas sampling",
      D: "Nondestructive sampling"
    },
    correctAnswer: "A"
  },

  // ─── QUIZ #13 — VICTIM RESCUE AND RECOVERY ───
  {
    id: 573,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "In most hazardous materials situations, at least _____ trained responders are required to make a rescue attempt, not including the supervisor.",
    choices: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctAnswer: "D"
  },
  {
    id: 574,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which statement about managing a hazardous materials incident victim rescue is correct?",
    choices: {
      A: "There are situations where a single rescuer without PPE should take immediate action to attempt victim rescue.",
      B: "The risk to rescuers should not vary regardless of the victim's status.",
      C: "The first step is to evaluate if a rescue attempt has a good chance of success.",
      D: "Operations should be conducted on the assumption that the victim is viable."
    },
    correctAnswer: "C"
  },
  {
    id: 575,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "An entry team entering a hazardous materials hot zone to attempt victim rescue should have at least _____ members, not including the supervisor.",
    choices: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctAnswer: "A"
  },
  {
    id: 576,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "An ambulatory victim is one who:",
    choices: {
      A: "does not require decontamination.",
      B: "is unable to walk.",
      C: "needs ambulance transport.",
      D: "can walk without assistance."
    },
    correctAnswer: "D"
  },
  {
    id: 577,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "At what point should some form of decontamination process be established when an entry team is going to attempt victim rescue at a hazardous materials incident?",
    choices: {
      A: "When the entry team is preparing to exit the hot zone",
      B: "Before personnel enter the hot zone",
      C: "After the backup team has been established",
      D: "When it is determined that exposure has occurred"
    },
    correctAnswer: "B"
  },
  {
    id: 578,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "At what point should a backup team be established when an entry team is going to attempt victim rescue at a hazardous materials incident?",
    choices: {
      A: "When the entry team is preparing to exit the hot zone",
      B: "Before the entry team enters the hot zone",
      C: "As soon as it is determined that there are victims",
      D: "When it is determined that exposure has occurred"
    },
    correctAnswer: "B"
  },
  {
    id: 579,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is the term for establishing priority of care for multiple victims by sorting them according to the severity of their injuries?",
    choices: {
      A: "Triage",
      B: "Trauma level",
      C: "Primary survey",
      D: "Prioritization"
    },
    correctAnswer: "A"
  },
  {
    id: 580,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 8,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is the correct START triage category for a patient who is unable to follow simple commands?",
    choices: {
      A: "Minor",
      B: "Delayed",
      C: "Immediate",
      D: "Serious"
    },
    correctAnswer: "C"
  },
  {
    id: 581,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is the correct START triage category for a patient who was in close proximity to a hazardous materials release and feels mildly ill?",
    choices: {
      A: "Minor",
      B: "Delayed",
      C: "Immediate",
      D: "Serious"
    },
    correctAnswer: "B"
  },
  {
    id: 582,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is the correct START triage category for a patient who has no spontaneous respirations after the airway has been opened?",
    choices: {
      A: "Minor",
      B: "Delayed",
      C: "Immediate",
      D: "Deceased"
    },
    correctAnswer: "D"
  },
  {
    id: 583,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is the correct START triage category for a patient with a capillary refill time of 3 seconds?",
    choices: {
      A: "Minor",
      B: "Delayed",
      C: "Immediate",
      D: "Serious"
    },
    correctAnswer: "C"
  },
  {
    id: 584,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "In which situation would it be appropriate to assign a victim to lead other victims to safety?",
    choices: {
      A: "When the means of egress is clear and free from danger",
      B: "Whenever all the victims are ambulatory",
      C: "Whenever the situation is immediately unstable",
      D: "There are no situations in which this is appropriate."
    },
    correctAnswer: "A"
  },
  {
    id: 585,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which factor simplifies victim rescue?",
    choices: {
      A: "Search is required prior to rescue.",
      B: "All the victims can move under their own power.",
      C: "Victims must be decontaminated.",
      D: "Some victims must be carried."
    },
    correctAnswer: "B"
  },
  {
    id: 586,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "In a multiple-casualty situation, it is imperative to rescue which victims first?",
    choices: {
      A: "Those who are the most severely injured",
      B: "Those who are most accessible",
      C: "Those who are the most immediately threatened",
      D: "Those who have the best chance of survival"
    },
    correctAnswer: "D"
  },
  {
    id: 587,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "In a multiple-casualty situation, the first patients to transport are those who are __________ tagged.",
    choices: {
      A: "black",
      B: "yellow",
      C: "orange",
      D: "red"
    },
    correctAnswer: "D"
  },
  {
    id: 588,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "In a multiple-casualty situation, what is the operational mode when there is no chance of rescuing a victim alive?",
    choices: {
      A: "Defensive",
      B: "Removal",
      C: "Recovery",
      D: "Safe"
    },
    correctAnswer: "C"
  },
  {
    id: 589,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 17,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "In general, when should definitive medical care begin for a contaminated victim of a hazardous materials incident?",
    choices: {
      A: "As soon as the victim is accessed",
      B: "Prior to removal from hot zone",
      C: "After decontamination",
      D: "After transportation to a medical facility"
    },
    correctAnswer: "C"
  },
  {
    id: 590,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 18,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "If a hazardous materials entry team has 5 members, how many members should the backup team have?",
    choices: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctAnswer: "D"
  },
  {
    id: 591,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 19,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which statement about emergency decontamination is the most correct?",
    choices: {
      A: "It is the rapid removal of the bulk of the contamination from an individual in a life-threatening situation.",
      B: "It is an accelerated trip through the technical decontamination corridor.",
      C: "It should be delayed until the identity and properties of the material are known.",
      D: "It should be thorough enough to remove all contaminants."
    },
    correctAnswer: "A"
  },
  {
    id: 592,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "During emergency decontamination, what attention should be paid to the runoff water?",
    choices: {
      A: "None; this is by definition an emergency situation.",
      B: "Decontamination should be delayed until containment for runoff can be arranged.",
      C: "Runoff should not be allowed to pool around the victim, but should be swept or directed toward a drain or runoff grade.",
      D: "An effort should be made to divert it from drains, streams, or ponds."
    },
    correctAnswer: "D"
  },
  {
    id: 593,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 21,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What type of search is a rapidly conducted search, focusing on those victims who are easily seen, lightly trapped, or otherwise easily accessible?",
    choices: {
      A: "Primary search",
      B: "Hasty search",
      C: "Secondary search",
      D: "Initial search"
    },
    correctAnswer: "A"
  },
  {
    id: 594,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which statement about a secondary search is correct?",
    choices: {
      A: "It is a hasty search conducted prior to incident stabilization.",
      B: "It is a thorough, extensive search.",
      C: "It is conducted only when there is reason to believe that there may be victims.",
      D: "Bodies should be recovered as they are found."
    },
    correctAnswer: "B"
  },
  {
    id: 595,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which is a correct principle of air management when performing search and rescue in a hazardous materials environment?",
    choices: {
      A: "You should exit the hot zone when your cylinder pressure drops to 50%.",
      B: "All members of the team should exit the IDLH area as soon the first low-pressure alarm sounds.",
      C: "You should exit the hot zone before your low-air alarm rings.",
      D: "Each member of the team should exit individually as warranted by their air supply."
    },
    correctAnswer: "C"
  },
  {
    id: 596,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "When balancing risk and benefit, how much risk to the safety of responders is acceptable when there is no potential to save lives?",
    choices: {
      A: "None",
      B: "A little",
      C: "A lot",
      D: "Unlimited"
    },
    correctAnswer: "A"
  },
  {
    id: 597,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "When balancing risk and benefit, how much risk to the safety of responders is acceptable when there is potential to save lives?",
    choices: {
      A: "None",
      B: "A little",
      C: "A lot",
      D: "Unlimited"
    },
    correctAnswer: "C"
  },
  {
    id: 598,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 26,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "When an emergency situation threatens the lives of both victims and rescuers, the first priority is to:",
    choices: {
      A: "Attempt to stabilize the dangerous condition.",
      B: "Quickly remove the victim from the dangerous area.",
      C: "Shelter-in-place.",
      D: "Remove the danger from the victim."
    },
    correctAnswer: "B"
  },
  {
    id: 599,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 27,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which tactic protects people from a hazardous materials incident by keeping them in a safe atmosphere without evacuating them?",
    choices: {
      A: "Shelter deployment",
      B: "Shelter-in-place",
      C: "Area of rescue assistance",
      D: "Designated safety zone"
    },
    correctAnswer: "B"
  },
  {
    id: 600,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 28,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Having occupants remain inside a structure for protection from a hazardous materials release is an example of:",
    choices: {
      A: "Sheltering-in-place.",
      B: "Occupying a designated safety zone.",
      C: "An area of rescue assistance.",
      D: "Shelter deployment."
    },
    correctAnswer: "A"
  },
  {
    id: 601,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 29,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is the simplest rescue technique for a victim who is responsive and able to walk without assistance?",
    choices: {
      A: "One-person walking assist",
      B: "Simple victim carry",
      C: "Self-assist",
      D: "Exit assist"
    },
    correctAnswer: "D"
  },
  {
    id: 602,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 30,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Under what circumstances is the two-person extremity carry (sit pick) particularly useful?",
    choices: {
      A: "Victims who are disabled or paralyzed",
      B: "Victims who must be kept low",
      C: "Carries over long distances",
      D: "Carries through narrow, tight spaces"
    },
    correctAnswer: "D"
  },
  {
    id: 603,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 31,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is a drawback of the two-person seat carry?",
    choices: {
      A: "It is suitable only for lightweight victims.",
      B: "It is difficult to travel long distances.",
      C: "It is difficult to move through doors or down stairs.",
      D: "A high level of coordination is required."
    },
    correctAnswer: "C"
  },
  {
    id: 604,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 32,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "For which situation is the two-person seat carry particularly useful?",
    choices: {
      A: "Victims who are disabled or paralyzed",
      B: "Victims who are unconscious",
      C: "Carries up or down stairs",
      D: "Victims with extremity fractures"
    },
    correctAnswer: "A"
  },
  {
    id: 605,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 33,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "When is the two-person chair carry particularly useful?",
    choices: {
      A: "Across open fields",
      B: "Carrying up or down stairs",
      C: "Victims with unstable airways",
      D: "Going under low obstacles"
    },
    correctAnswer: "B"
  },
  {
    id: 606,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 34,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which carry works best for children and conscious, small adults?",
    choices: {
      A: "Chair",
      B: "Cradle-in-arms",
      C: "Extremities",
      D: "Seat"
    },
    correctAnswer: "B"
  },
  {
    id: 607,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 35,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "When using the clothes drag, what supports the victim's head?",
    choices: {
      A: "The rescuer's arms",
      B: "The victim's arms",
      C: "The rescuer's hands",
      D: "A roll of blanket"
    },
    correctAnswer: "A"
  },
  {
    id: 608,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 36,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Under what circumstances is the blanket drag particularly useful?",
    choices: {
      A: "Victim is not dressed.",
      B: "Victim has a leg injury.",
      C: "Victim is not breathing.",
      D: "Victim is a child."
    },
    correctAnswer: "A"
  },
  {
    id: 609,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 37,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which lift/carry/drag can be accomplished by one rescuer?",
    choices: {
      A: "Seat",
      B: "Extremities",
      C: "Standing",
      D: "Chair"
    },
    correctAnswer: "C"
  },
  {
    id: 610,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 38,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "When using a webbing sling drag, what helps support the victim's head and neck?",
    choices: {
      A: "The webbing sling",
      B: "The rescuer's hands",
      C: "The victim's forearms",
      D: "A roll of blanket"
    },
    correctAnswer: "A"
  },
  {
    id: 611,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 39,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which drag provides particularly secure, quick, and efficient removal from a dangerous area?",
    choices: {
      A: "Standing",
      B: "Blanket",
      C: "Lower extremities",
      D: "Webbing sling"
    },
    correctAnswer: "D"
  },
  {
    id: 612,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 40,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is an advantage of the fire fighter drag?",
    choices: {
      A: "It uses the victim's SCBA harness to provide a secure grip.",
      B: "It can be used when the victim is heavier than the rescuer.",
      C: "The victim can assist with the procedure.",
      D: "No equipment is required."
    },
    correctAnswer: "B"
  },
  {
    id: 613,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 41,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is the first step when performing a one-rescuer emergency drag from a vehicle?",
    choices: {
      A: "Rotate the patient 90 degrees so that his or her back is facing out the door.",
      B: "Lean the patient back as far as possible.",
      C: "Grasp the patient under the arms.",
      D: "Stabilize the cervical spine."
    },
    correctAnswer: "C"
  },
  {
    id: 614,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 42,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "A long backboard rescue from a vehicle requires a minimum of _____ rescuers.",
    choices: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctAnswer: "C"
  },
  {
    id: 615,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 43,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "What is the first step when performing a long backboard rescue from a vehicle?",
    choices: {
      A: "Rotate the patient's feet and legs toward the centerline of the vehicle.",
      B: "Place a backboard on the seat against the victim's buttocks.",
      C: "Lift and turn the patient's torso.",
      D: "Support the victim's head and cervical spine."
    },
    correctAnswer: "D"
  },
  {
    id: 616,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 44,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "How does the fire fighter move when performing the fire fighter drag?",
    choices: {
      A: "Crawling on hands and knees",
      B: "Walking forward",
      C: "Walking backward",
      D: "Facing opposite the direction of travel"
    },
    correctAnswer: "A"
  },
  {
    id: 617,
    quiz: 13,
    quizTitle: "Victim Rescue and Recovery",
    originalNumber: 45,
    level: "Operations",
    objective: "NFPA 472, 6.8.1.2.2, 6.8.3.1, 6.8.4.1",
    question: "Which lift/drag requires two rescuers?",
    choices: {
      A: "Seat",
      B: "Webbing sling",
      C: "Slide",
      D: "Blanket"
    },
    correctAnswer: "A"
  },

  // ─── QUIZ #14 — RESPONSE TO ILLICIT LABORATORIES ───
  {
    id: 618,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 1,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "What is the term for any unlicensed or illegal structure, vehicle, facility, or physical location that may be used to manufacture, process, culture, or synthesize an illegal drug, hazardous material, or weapon of mass destruction (WMD) device or agent?",
    choices: {
      A: "Criminal cell",
      B: "Clandestine facility",
      C: "Illegal manufacturing facility",
      D: "Illicit laboratory"
    },
    correctAnswer: "D"
  },
  {
    id: 619,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 2,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Which substance is produced by the majority of illegal labs in North America?",
    choices: {
      A: "Methamphetamine (meth)",
      B: "Soman",
      C: "Anthrax",
      D: "Crack cocaine"
    },
    correctAnswer: "A"
  },
  {
    id: 620,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 3,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Which statement about the production of illegal chemical agents is correct?",
    choices: {
      A: "The recipes are classified and difficult to obtain.",
      B: "The area required for the production process is too large to fit in most residential structures.",
      C: "Ingredients are regulated and difficult to obtain.",
      D: "The production process is too complicated and difficult to be accomplished in an improvised, makeshift lab."
    },
    correctAnswer: "C"
  },
  {
    id: 621,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 4,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "The Drug Enforcement Administration (DEA) defines a/an __________ as \"an illicit operation consisting of a sufficient combination of apparatus and chemicals that either has been or could be used in the manufacture or synthesis of controlled substances.\"",
    choices: {
      A: "illegal drug manufacturer",
      B: "clandestine drug laboratory",
      C: "criminal manufacturing facility",
      D: "illicit laboratory"
    },
    correctAnswer: "B"
  },
  {
    id: 622,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 5,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Which odor is commonly associated with illegal drug production?",
    choices: {
      A: "Ammonia",
      B: "Isopropyl alcohol",
      C: "Gasoline",
      D: "Chlorine"
    },
    correctAnswer: "A"
  },
  {
    id: 623,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 6,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Drain cleaners, iodine crystals, table salt, aluminum foil, camera batteries, blenders, and food processors are most commonly associated with the production of illegal:",
    choices: {
      A: "Explosives.",
      B: "Biological agents.",
      C: "Drugs.",
      D: "Chemical agent."
    },
    correctAnswer: "C"
  },
  {
    id: 624,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 7,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Which is a precursor in methamphetamine production recipes?",
    choices: {
      A: "Cough syrup",
      B: "Cold medicine",
      C: "Oven cleaner",
      D: "Tri-sodium phosphate (TSP)"
    },
    correctAnswer: "B"
  },
  {
    id: 625,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 8,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "Which is the most common methamphetamine production method?",
    choices: {
      A: "Red P",
      B: "Birch reduction",
      C: "\"Nazi method\"",
      D: "P2P"
    },
    correctAnswer: "A"
  },
  {
    id: 626,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 9,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "The majority of materials commonly used in illegal methamphetamine production are:",
    choices: {
      A: "Usually stolen from pharmaceutical companies.",
      B: "Unstable and difficult to handle.",
      C: "Regulated and difficult to obtain.",
      D: "Common and have legitimate uses."
    },
    correctAnswer: "D"
  },
  {
    id: 627,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 10,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Which is a common clue to the presence of a meth lab?",
    choices: {
      A: "Empty automotive antifreeze containers",
      B: "Odor of rotten eggs",
      C: "Empty aspirin bottles",
      D: "Lithium batteries"
    },
    correctAnswer: "D"
  },
  {
    id: 628,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 11,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Which statement about lithium and sodium metal is correct?",
    choices: {
      A: "They may react violently with water.",
      B: "They may ignite upon exposure to air.",
      C: "They will not burn.",
      D: "They are liquids in normal ambient temperatures."
    },
    correctAnswer: "A"
  },
  {
    id: 629,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 12,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "In an illegal laboratory, you find videotapes, photographs, maps, and blueprints. What should you suspect?",
    choices: {
      A: "Fireworks manufacturing",
      B: "Drug manufacturing",
      C: "Terrorist activity",
      D: "Espionage"
    },
    correctAnswer: "C"
  },
  {
    id: 630,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 13,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "You discover an illegal laboratory, which you suspect is producing explosives. Which action should you take first?",
    choices: {
      A: "Attempt to identify the specific product.",
      B: "Exit the area and establish an isolation perimeter.",
      C: "Sketch and photograph the area.",
      D: "Take steps to protect evidence from contamination."
    },
    correctAnswer: "B"
  },
  {
    id: 631,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 14,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Petri dishes, microscopes, and incubators are signs of illegal ________ production.",
    choices: {
      A: "chemical-agent",
      B: "drug",
      C: "biological-agent",
      D: "explosive"
    },
    correctAnswer: "C"
  },
  {
    id: 632,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 15,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Laboratory equipment, solvents, acids, and oxidizers are signs of illegal ________ production.",
    choices: {
      A: "chemical-agent",
      B: "drug",
      C: "biological-agent",
      D: "explosive"
    },
    correctAnswer: "A"
  },
  {
    id: 633,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 16,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Biological warfare agents are generally categorized in one of _____ ways.",
    choices: {
      A: "2",
      B: "4",
      C: "6",
      D: "8"
    },
    correctAnswer: "B"
  },
  {
    id: 634,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 17,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "Which is one of the categories of biological warfare agent?",
    choices: {
      A: "Pathogen",
      B: "IIA",
      C: "Airborne",
      D: "Bacterial"
    },
    correctAnswer: "D"
  },
  {
    id: 635,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 18,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What type of biological agent is ricin?",
    choices: {
      A: "Blood borne",
      B: "Virus",
      C: "Toxin",
      D: "IIB"
    },
    correctAnswer: "C"
  },
  {
    id: 636,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 19,
    level: "Awareness, Operations",
    objective: "No applicable NFPA 472 reference",
    question: "What type of biological agent is anthrax?",
    choices: {
      A: "Bacterial",
      B: "IA",
      C: "Toxin",
      D: "Etiological"
    },
    correctAnswer: "A"
  },
  {
    id: 637,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 20,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Which hazard is unique to illicit laboratories?",
    choices: {
      A: "Mines and booby traps",
      B: "Secondary devices",
      C: "Crowd-control issues",
      D: "Illegal storage of hazardous substances"
    },
    correctAnswer: "A"
  },
  {
    id: 638,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 21,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "When managing a terrorist/criminal incident, particular emphasis needs to be placed on:",
    choices: {
      A: "Use of appropriate PPE.",
      B: "Prompt notification of law enforcement authorities.",
      C: "Preparations for mass decontamination.",
      D: "Protection of the environment."
    },
    correctAnswer: "B"
  },
  {
    id: 639,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 22,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "When managing a terrorist/criminal incident, particular emphasis needs to be placed on:",
    choices: {
      A: "Broad application of strategic priorities.",
      B: "Modified operational tactics.",
      C: "Manageable span of control.",
      D: "Scene and evidence security."
    },
    correctAnswer: "D"
  },
  {
    id: 640,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 23,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Which statement about evidence when working at a possible terrorist/criminal scene is correct?",
    choices: {
      A: "Avoid handling or disturbing evidence.",
      B: "Carefully move evidence samples to a safe area.",
      C: "Collect and preserve evidence samples.",
      D: "Rescue operations should be modified to preserve evidence."
    },
    correctAnswer: "A"
  },
  {
    id: 641,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 24,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1, 6.9.3.5",
    question: "When operating at an illicit laboratory, which level of PPE should be used?",
    choices: {
      A: "Level A",
      B: "Level B",
      C: "Structural turnouts with SCBA",
      D: "It should be based on detection and sampling results."
    },
    correctAnswer: "D"
  },
  {
    id: 642,
    quiz: 14,
    quizTitle: "Response to Illicit Laboratories",
    originalNumber: 25,
    level: "Operations",
    objective: "NFPA 472, 6.5.1.2.2, 6.5.2.1, 6.9.2.1",
    question: "Which physical property is of particular interest to law enforcement officers dealing with live-human threats at an illicit laboratory?",
    choices: {
      A: "Specific gravity",
      B: "UFL and LFL",
      C: "Vapor density",
      D: "pH"
    },
    correctAnswer: "B"
  }
];

globalThis.QUESTION_BANK = QUESTION_BANK;
