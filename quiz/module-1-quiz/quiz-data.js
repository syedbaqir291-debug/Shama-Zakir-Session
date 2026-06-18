// ============================================================
// MODULE 1 — Introduction to Quality & Important Concepts
// Practice Quiz — Editable Question Bank
// ============================================================
// HOW TO EDIT / ADD QUESTIONS:
//   Each question is one object in the QUESTIONS array below:
//     {
//       category: "<one of the category names listed in CATEGORIES>",
//       question: "The question text",
//       options: ["Option A", "Option B", "Option C", "Option D"],
//       correct: 0,   // index (0-3) of the correct option above
//       explanation: "Why that answer is correct"
//     }
//   Add as many question objects as you like, separated by commas.
//   Leave QUESTIONS as [] (empty) if this module's quiz isn't ready
//   yet — the page will show a friendly "coming soon" message.
// ============================================================

const MODULE_1_QUIZ_CATEGORIES = [
  {
    "name": "Strategic planning, leadership, culture and QI alignment",
    "short": "Strategy & Culture",
    "icon": "🎯"
  },
  {
    "name": "Quality, QI, value, Donabedian measures and STEEEP",
    "short": "Quality, Value & STEEEP",
    "icon": "📊"
  },
  {
    "name": "Patient safety, non-punitive culture and systems thinking",
    "short": "Patient Safety",
    "icon": "🛡️"
  },
  {
    "name": "QI education, teamwork, change management and staff involvement",
    "short": "Teamwork & Change",
    "icon": "👥"
  },
  {
    "name": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "short": "QI Tools & PDSA",
    "icon": "🔧"
  },
  {
    "name": "IDS, value-based care, managed care and access",
    "short": "IDS & Value-Based Care",
    "icon": "🏥"
  }
];

const MODULE_1_QUIZ_QUESTIONS = [
  {
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "A quality professional was asked to assist with strategic planning. Which of the following should have the primary impact on the quality and performance improvement goals?",
    "options": [
      "Report of major competitors’ performance",
      "Results of gap analysis",
      "Financial statement of the organization",
      "Findings from a staff needs assessment"
    ],
    "correct": 1,
    "explanation": "A gap analysis identifies the distance between current performance and desired strategic goals, providing the most direct data for setting quality and improvement targets."
  },
  {
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "When a CEO directs a quality improvement council to develop objectives for a goal, the council must ensure that they:",
    "options": [
      "State the end result or desired outcome.",
      "Tie the objectives to the organization’s financial performance.",
      "Use the Plan-Do-Study-Act cycle of continuous improvement.",
      "Keep the objectives specific to the short term."
    ],
    "correct": 0,
    "explanation": "Effective objectives must be outcome-oriented, clearly stating the desired end result to ensure measurement and accountability."
  },
  {
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "If a healthcare quality professional identifies a gap in practice compared to regulatory requirements, the next step should be to:",
    "options": [
      "Meet with staff to determine the barriers to compliance.",
      "Provide educational training to the manager.",
      "Inform the staff that current practice is non-compliant.",
      "Initiate an audit collection tool to determine the rate."
    ],
    "correct": 0,
    "explanation": "Identifying barriers is critical to understanding why a gap exists before attempting to fix it with training or process changes."
  },
  {
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "An organization’s culture is most effectively assessed by examining which of the following?",
    "options": [
      "Involvement of departments in strategic planning.",
      "Collaboration of medical staff and administration.",
      "Number of performance improvement activities.",
      "Behavioral alignment with the core values."
    ],
    "correct": 3,
    "explanation": "Culture is the ‘way we do things around here,’ which is best reflected in how staff behaviors align with stated organizational values."
  },
  {
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "Staff struggling with a transition to new values after a merger most likely indicates a:",
    "options": [
      "Incomplete data integration.",
      "Staff transition program training incomplete.",
      "Lack of buy-in of the new mission and vision.",
      "Continued support of both mission statements."
    ],
    "correct": 2,
    "explanation": "Successful cultural transitions require belief and ‘buy-in’ from the staff regarding the new mission and vision of the merged entity."
  },
  {
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "When allocating limited resources to meet strategic objectives, management decisions should be driven by:",
    "options": [
      "Outcome data.",
      "Local competition.",
      "Consultant recommendations.",
      "Accreditation standards."
    ],
    "correct": 0,
    "explanation": "Data-driven decision making, specifically using outcome data, ensures that resources are allocated where they will have the most significant impact on quality."
  },
  {
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "Performance Improvement (PI) plans are most successful when they are first linked with:",
    "options": [
      "Organizational structure.",
      "Strategic goals.",
      "Core values.",
      "Bylaws."
    ],
    "correct": 1,
    "explanation": "PI plans must align with the organization’s high-level strategic goals to ensure they receive leadership support and resources."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Which of the following describes the three primary quality management activities?",
    "options": [
      "Measurement, assessment, and improvement of outcomes",
      "Define goals, assessment, and review results",
      "Assessment, improvement, and strategic planning",
      "Review trends, assessment, and stakeholder accountability"
    ],
    "correct": 0,
    "explanation": "The standard quality cycle involves measuring performance, assessing the data against standards, and implementing improvements."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Which of the following serves as an outcome indicator for a radiology unit?",
    "options": [
      "Contrast-induced complications",
      "Utilization of CT scan for low back pain",
      "Mammography result turnaround time",
      "‘Time-out’ performed for interventional cases"
    ],
    "correct": 0,
    "explanation": "Complications are clinical outcomes resulting from the care provided, whereas the others are process or structural measures."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "What is the primary purpose of patient safety goals?",
    "options": [
      "Promote specific improvements in safety",
      "Assist surveyors during the accreditation process",
      "Aggregate safety data to improve performance",
      "Evaluate safety-related near misses"
    ],
    "correct": 0,
    "explanation": "Patient safety goals (like those from TJC) are designed to highlight and drive specific, actionable improvements in high-risk areas of care."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Care that does not vary in quality because of personal characteristics such as gender or ethnicity is defined as:",
    "options": [
      "Efficient",
      "Equitable",
      "Effective",
      "Evidence-based"
    ],
    "correct": 1,
    "explanation": "Equity is one of the six domains of quality defined by the IOM (STEEEP), referring to the delivery of fair and impartial care."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Which are the most important characteristics of quality metrics?",
    "options": [
      "Random, unbiased, and reactive",
      "Statistical, random, and feasible",
      "Repeatable, reliable, and reactive",
      "Valid, reliable, and feasible"
    ],
    "correct": 3,
    "explanation": "Quality metrics must measure what they intend to (validity), do so consistently (reliability), and be practical to collect (feasible)."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "A study of clinic waiting times measures which of the following types of quality indicators?",
    "options": [
      "Satisfaction",
      "Outcome",
      "Process",
      "Structural"
    ],
    "correct": 2,
    "explanation": "Waiting time is a process measure, as it reflects the efficiency of the workflow within the care delivery system."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "Which question demonstrates a culture of safety during a daily briefing?",
    "options": [
      "‘Do we have available beds in the ICU?’",
      "‘Did anything happen last night that could lead to a central line infection?’",
      "‘Who is the last person that committed a medication error?’",
      "‘What was the patient’s intake and output?’"
    ],
    "correct": 1,
    "explanation": "Focusing on potential risks and systems (proactive) rather than blaming individuals (punitive) characterizes a safety culture."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "The best method to achieve a reduction in medical errors is to:",
    "options": [
      "Establish disciplinary measures for practitioners.",
      "Counsel employees to be more careful.",
      "Encourage reporting of actual and potential errors.",
      "Change the process for reporting errors."
    ],
    "correct": 2,
    "explanation": "Robust reporting allows for the identification of systemic flaws that lead to errors, which can then be redesigned for safety."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "How can a manager best build psychological safety among their team?",
    "options": [
      "Conducting collaborative debriefs after errors.",
      "Making schedule changes without staff input.",
      "Allowing discussion of management-created agendas only.",
      "Posting goals in the breakroom."
    ],
    "correct": 0,
    "explanation": "Psychological safety is fostered when team members feel safe to discuss errors and failures without fear of retribution."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "To assess a facility’s patient safety culture, who should be surveyed?",
    "options": [
      "All staff and physicians",
      "All patients and their families",
      "A stratified sample of physicians and nurses",
      "A random sample of leaders and staff"
    ],
    "correct": 0,
    "explanation": "Safety culture involves every individual in the organization, so surveying all staff and physicians provides the most comprehensive view."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "When errors occur despite appropriate processes, leaders should focus on:",
    "options": [
      "Staff complaints.",
      "Patient satisfaction.",
      "Time constraints.",
      "Human factors."
    ],
    "correct": 3,
    "explanation": "Human factors engineering looks at how humans interact with systems and how to design those systems to minimize human error."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "A patient was accidentally given two doses of a sedative. Which system would have best prevented this error?",
    "options": [
      "Automated dispensing machine (ADM)",
      "Radio frequency identification (RFID)",
      "Computerized provider order entry (CPOE)",
      "Barcode medication administration (BCMA)"
    ],
    "correct": 3,
    "explanation": "BCMA ensures the ‘five rights’ at the bedside, preventing the administration of a second (un-ordered) dose by scanning the patient and medication."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "To achieve a low rate of harm despite inherent risks, an organization must apply:",
    "options": [
      "95% accreditation standards.",
      "Effective physician leadership.",
      "Principles of high reliability.",
      "Zero-tolerance for defect policy."
    ],
    "correct": 2,
    "explanation": "High Reliability Organizations (HROs) maintain safe operations in complex environments by applying specific principles like preoccupation with failure."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "A nurse discovers an IV error before starting the infusion. The quality professional should:",
    "options": [
      "Encourage the nurse to report the near-miss.",
      "Recommend additional safety training.",
      "Perform no action as no harm occurred.",
      "Report the nurse to the manager."
    ],
    "correct": 0,
    "explanation": "Near-miss reporting is vital for identifying system vulnerabilities before they reach a patient and cause harm."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "Which response by leadership best demonstrates a safety culture regarding a rise in patient falls?",
    "options": [
      "Acknowledge the injuries as systems errors.",
      "Hold the unit manager responsible.",
      "Require training of involved staff.",
      "Place involved staff on a corrective plan."
    ],
    "correct": 0,
    "explanation": "A safety culture prioritizes systems thinking over individual blame, recognizing that most errors are caused by flawed system designs."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "What is the most important factor in a project to reduce post-operative infections?",
    "options": [
      "Evidence-based literature",
      "A multidisciplinary team",
      "Staff education",
      "Data collection tools"
    ],
    "correct": 1,
    "explanation": "Infection prevention involves multiple departments (surgery, nursing, sterile processing); therefore, a multidisciplinary team is essential for success."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Which team role is responsible for maintaining improvements after a quality initiative is implemented?",
    "options": [
      "Champion",
      "Process Owner",
      "Sponsor",
      "Facilitator"
    ],
    "correct": 1,
    "explanation": "The Process Owner has the long-term responsibility for the performance and sustainability of the specific process being improved."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Based on adult learning principles, a facilitation training session is most effective when:",
    "options": [
      "Participants study techniques after class.",
      "Participants practice facilitation during class.",
      "Concepts are taught and tested at the end.",
      "Handouts are provided for later reference."
    ],
    "correct": 1,
    "explanation": "Adults learn best through active participation and the immediate application of new skills."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "A consistent communication plan for process improvement helps to facilitate:",
    "options": [
      "Project success",
      "Clinical relevance",
      "Buy-in from leadership",
      "Decreased costs"
    ],
    "correct": 0,
    "explanation": "Clear and consistent communication keeps all stakeholders informed and aligned, which is a key driver of overall project success."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "The primary benefit of the initial phase of brainstorming is that it:",
    "options": [
      "Fosters discussion of ideas",
      "Allows input from all team members",
      "Defines problem-solving roles",
      "Focuses on identifying best solutions"
    ],
    "correct": 1,
    "explanation": "Brainstorming is designed to generate a high volume of ideas by encouraging every team member to contribute without judgment."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "To gain employee support for a customer service change, a manager should first:",
    "options": [
      "Include service in performance reviews.",
      "Demonstrate the need for change.",
      "Seek authorization from the board.",
      "Empower the employees."
    ],
    "correct": 1,
    "explanation": "According to change management models (like Kotter’s), establishing a sense of urgency or ‘need for change’ is the necessary first step."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "What is an important responsibility for each individual team member in a project?",
    "options": [
      "Investigate all existing data alone.",
      "Complete assignments between meetings.",
      "Review team progress periodically.",
      "Teach skills to the team during meetings."
    ],
    "correct": 1,
    "explanation": "Teams progress efficiently when members fulfill their individual commitments and action items between scheduled meetings."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Effective learning in a ‘learning organization’ is best exemplified by:",
    "options": [
      "Taking a posttest after reading a bulletin.",
      "Auditing staff performance after training.",
      "Watching a video on patient admission.",
      "Using root cause analysis results to change processes."
    ],
    "correct": 3,
    "explanation": "A learning organization uses information from failures and analysis to actively transform processes and improve safety."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "Which approach is best for facilitating acceptance of a major change in a billing process?",
    "options": [
      "Immediate implementation",
      "Medical staff education",
      "A pilot project",
      "Long-range planning"
    ],
    "correct": 2,
    "explanation": "Piloting allows for testing a change on a small scale, reducing risk and allowing staff to see the benefits before a full rollout."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "When a team is frustrated because they don’t know what they are supposed to accomplish, what should be explored first?",
    "options": [
      "Clarity of team goals",
      "Effectiveness of the team leader",
      "Clarity of team roles",
      "Effectiveness of the facilitator"
    ],
    "correct": 0,
    "explanation": "A team cannot function without a clear aim or charter; goal clarity is the foundation of team effectiveness."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "According to adult learning principles, what is the first step in preparing a presentation on documentation?",
    "options": [
      "Determine the audience’s knowledge and expectations",
      "Develop an evaluation tool",
      "Present an inservice for the staff",
      "Obtain administrative support"
    ],
    "correct": 0,
    "explanation": "Understanding the baseline knowledge and needs of the audience ensures the training is relevant and effective."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Which characteristics are most appropriate for a physician champion of healthcare quality?",
    "options": [
      "Credible member of medical staff and autocratic",
      "Popular member of medical staff and transactional",
      "Respected member of medical staff and participatory",
      "Senior member of medical staff and democratic"
    ],
    "correct": 2,
    "explanation": "Physician champions need clinical respect (credibility) and a participatory style to engage peers in improvement efforts."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "To determine how much variability is due to random variation vs. unique events, which tool is most appropriate?",
    "options": [
      "Scatter diagram",
      "Pareto chart",
      "Control chart",
      "Cause and effect diagram"
    ],
    "correct": 2,
    "explanation": "Control charts distinguish between ‘common cause’ (random) and ‘special cause’ (unique events) variation."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which of the following should be used to determine how data changes over time?",
    "options": [
      "Control chart",
      "Histogram",
      "Stratification chart",
      "Frequency plot"
    ],
    "correct": 0,
    "explanation": "Control charts (and run charts) are time-series tools used to monitor performance trends and stability over time."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which tool best demonstrates length-of-stay (LOS) data over a period?",
    "options": [
      "Gantt chart",
      "Pareto chart",
      "Flowchart",
      "Run chart"
    ],
    "correct": 3,
    "explanation": "A run chart is ideal for showing continuous data like LOS over time to identify trends or shifts."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "A chart used to display the expected range of variation in a stable process is called a:",
    "options": [
      "Control chart",
      "Histogram",
      "Run chart",
      "Scattergram"
    ],
    "correct": 0,
    "explanation": "Control charts use statistical limits (Upper/Lower Control Limits) to define the expected range of common cause variation."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which tool should be used to determine the root cause of variations in a process?",
    "options": [
      "Ishikawa diagram",
      "Histogram",
      "Shewhart chart",
      "Scatter plot"
    ],
    "correct": 0,
    "explanation": "The Ishikawa (Fishbone) diagram is a brainstorming tool used to categorize potential causes of a problem or variation."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Stakeholders for process improvement are typically selected during which phase of the PDSA model?",
    "options": [
      "Plan",
      "Do",
      "Study",
      "Act"
    ],
    "correct": 0,
    "explanation": "The ‘Plan’ phase involves defining the problem, setting aims, and identifying the necessary team members and stakeholders."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which tool depicts a sequence of events in a process?",
    "options": [
      "Flowchart",
      "Pareto diagram",
      "Run chart",
      "Scatter diagram"
    ],
    "correct": 0,
    "explanation": "A flowchart provides a visual map of the steps, sequences, and decisions within a specific process."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which model is at the core of the Institute for Healthcare Improvement (IHI) collaborative approach?",
    "options": [
      "DMAIC",
      "Six Sigma",
      "Lean",
      "PDSA"
    ],
    "correct": 3,
    "explanation": "The IHI ‘Model for Improvement’ is built upon the PDSA (Plan-Do-Study-Act) cycle for rapid-cycle testing of changes."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "After pilot testing is complete and determined to be effective, what is the next step in rapid-cycle methodology?",
    "options": [
      "Benchmarking",
      "Spreading change",
      "Setting aims",
      "Defining scope"
    ],
    "correct": 1,
    "explanation": "Once a change is proven effective in a small pilot, the next step is to spread that change across the rest of the organization."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "A quality professional assisting a team with data analysis should enhance the team’s understanding by:",
    "options": [
      "Directing the team to collect as much data as possible.",
      "Collecting all raw data collection tools.",
      "Publishing raw data in tables.",
      "Using visual, graphical methods to present the data."
    ],
    "correct": 3,
    "explanation": "Visualizations like charts and graphs make patterns and trends easier for team members to understand compared to raw data tables."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "If a physician complains about lab delays, but the lab chief says times are adequate, what should the quality manager do first?",
    "options": [
      "Facilitate a meeting between them.",
      "Revise the process immediately.",
      "Ask the physician about other concerns.",
      "Review data related to lab reporting times."
    ],
    "correct": 3,
    "explanation": "Objective data should be reviewed first to determine the actual performance before taking action or facilitating conflict resolution."
  },
  {
    "category": "IDS, value-based care, managed care and access",
    "question": "Which strategy is most likely to improve rural patient access to mental healthcare?",
    "options": [
      "Medical home model for care coordination.",
      "Implementation of a telemedicine program.",
      "Health insurance exchange education.",
      "Health coaching for behavior modification."
    ],
    "correct": 1,
    "explanation": "Telemedicine overcomes geographic barriers, making it a primary strategy for improving access in rural areas."
  },
  {
    "category": "IDS, value-based care, managed care and access",
    "question": "What represents an unintended consequence of payer-driven quality initiatives?",
    "options": [
      "Improved patient care",
      "Improved population health",
      "Increased use of healthcare services",
      "Increased use of performance data"
    ],
    "correct": 2,
    "explanation": "Unintended consequences of incentive programs often include ‘gaming’ the system or over-utilization of specific services to meet metric targets."
  },
  {
    "category": "IDS, value-based care, managed care and access",
    "question": "To improve population health by reducing readmission rates, which is most important?",
    "options": [
      "Transition of care programs",
      "Local resource directory",
      "Creation of disease registries",
      "Health information exchange"
    ],
    "correct": 0,
    "explanation": "Effective transition of care (discharge planning, follow-up) is the primary mechanism for preventing avoidable hospital readmissions."
  },
  {
    "category": "IDS, value-based care, managed care and access",
    "question": "To assist a physician with a pay-for-performance program, the quality professional should begin by:",
    "options": [
      "Suggesting the physician take a course.",
      "Obtaining a copy of the current measures.",
      "Writing a plan to improve office processes.",
      "Researching benchmarking data for the area."
    ],
    "correct": 1,
    "explanation": "One cannot improve performance without first knowing the specific metrics and definitions being used for evaluation."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which phase of the change process involves the most energy and is critical for influencing peers?",
    "options": [
      "Investing in staff who can influence peers",
      "Progressive discipline",
      "Delayed implementation",
      "Emphasizing non-compliance consequences"
    ],
    "correct": 0,
    "explanation": "In change management, leveraging early adopters and ‘opinion leaders’ is the most effective way to diffuse change through an organization."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "A hospital leadership’s initial reaction to medication errors is to counsel nurses, but the quality team finds systemic contributing factors. Which action best reflects systems thinking?",
    "options": [
      "Ask pharmacy staff to work faster during peak hours to reduce delays.",
      "Provide disciplinary action to nurses who failed to administer antibiotics on time.",
      "Send a reminder memo to all nursing staff about timely administration.",
      "Analyze the full medication-use process and identify interdependent workflow gaps."
    ],
    "correct": 3,
    "explanation": "Systems thinking involves evaluating how different parts of the organization interact and redesigning processes to prevent errors rather than focusing on individual blame."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "In developing educational training in quality improvement, what components should be included?",
    "options": [
      "Performance appraisal results",
      "Discussion of specific past incidents only",
      "Individual focus of activities",
      "Quality definitions and principles"
    ],
    "correct": 3,
    "explanation": "Slide 73 indicates that quality definitions and principles are essential components to include in educational training for quality improvement."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "Which of the following is the best method to achieve a reduction in medical errors?",
    "options": [
      "Encourage patients, families, and staff to report actual and potential errors",
      "Establish disciplinary measures for clinical practitioners who commit errors",
      "Counsel employees to be more careful when providing care",
      "Increase the frequency of performance appraisals"
    ],
    "correct": 0,
    "explanation": "Encouraging a culture of reporting errors and near-misses is the most effective way to identify system failures and implement preventive measures."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Quality teams can be an important component in an organization’s performance improvement program by providing an avenue for:",
    "options": [
      "Staff involvement",
      "Reporting to the governing body",
      "Administrative support",
      "Credentialing and re-appointment"
    ],
    "correct": 0,
    "explanation": "Quality teams serve as a primary vehicle for staff involvement in the improvement process, which is essential for TQM and CQI."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Which team composition provides the best mix of high-level support and frontline engagement for an ED-to-inpatient flow project?",
    "options": [
      "Housekeeping supervisor as process owner and quality professional as team leader",
      "Inpatient unit manager as team facilitator and ED manager as project sponsor",
      "Staff nurse ED as champion and CNO as project sponsor",
      "Staff nurse inpatient unit as facilitator and quality professional as champion"
    ],
    "correct": 2,
    "explanation": "The CNO (Chief Nursing Officer) provides executive sponsorship while a staff nurse champion ensures buy-in from those performing the work."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "A facility’s performance on a clinical outcome measure has deteriorated. The healthcare quality professional’s initial action should be to:",
    "options": [
      "Re-educate staff on appropriate clinical outcomes",
      "Assess data entry errors in areas of deficiency",
      "Review current best practices on areas of deterioration",
      "Analyze related process measure performance"
    ],
    "correct": 3,
    "explanation": "When an outcome is poor, you must look at the processes that lead to that outcome to identify where the failure is occurring."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "What is the primary purpose of a Diagnosis-Related Group (DRG)?",
    "options": [
      "To identify the specific ICD-10 code for a disease",
      "To track the number of outpatient visits per month",
      "To determine hospital payment packages based on case complexity",
      "To provide a medical diagnosis for individual patients"
    ],
    "correct": 2,
    "explanation": "DRGs are used to group hospital cases into payment categories based on diagnosis, complexity, and resource use."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "According to the IHI Model for Improvement, what are the three fundamental questions?",
    "options": [
      "Who is involved? What is the cost? When will it end?",
      "Is it Specific? Is it Measurable? Is it Achievable?",
      "What are we trying to accomplish? How will we know that a change is an improvement? What change can we make that will result in improvement?",
      "What is the plan? How do we do it? When do we study it?"
    ],
    "correct": 2,
    "explanation": "These are the three foundational questions of the IHI Model for Improvement, used before starting the PDSA cycles."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Which measure is used to ensure that improving one part of a system does not cause a negative impact in another part?",
    "options": [
      "Balancing measure",
      "Outcome measure",
      "Structural measure",
      "Process measure"
    ],
    "correct": 0,
    "explanation": "Balancing measures look at the system as a whole to ensure that improvements in one area (e.g., reducing length of stay) don’t degrade another (e.g., increasing readmission rates)."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "The review of the ‘timeliness of high-risk screening for diabetes’ addresses which focus?",
    "options": [
      "Process of care",
      "Outcome of care",
      "Structural capacity",
      "Patient experience"
    ],
    "correct": 0,
    "explanation": "Timeliness of a screening activity describes whether a care step was performed correctly and on time, which is a process measure."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "A process has 5 sequential steps with reliabilities of 99%, 95%, 95%, 90%, and 93%. What is the approximate reliability of the entire process?",
    "options": [
      "95%",
      "75%",
      "90%",
      "83%"
    ],
    "correct": 1,
    "explanation": "Process reliability is calculated by multiplying the individual step reliabilities: 0.99 x 0.95 x 0.95 x 0.90 x 0.93 ≈ 0.75 or 75%."
  },
  {
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "When assessing organizational culture and its impact on quality, the primary focus should be on:",
    "options": [
      "The annual budget allocated to quality departments",
      "The hierarchy shown on the organizational chart",
      "The number of policies written in the last year",
      "Compliance with the mission and vision statements"
    ],
    "correct": 3,
    "explanation": "Culture is reflected in whether daily behaviors and decisions align with the organization’s mission and vision."
  },
  {
    "category": "Patient safety, non-punitive culture and systems thinking",
    "question": "In systems thinking, leaders study patterns of behavior by examining:",
    "options": [
      "Isolated components and individual errors",
      "Equipment maintenance logs only",
      "Departmental silos and hierarchy charts",
      "Interrelationships, decision patterns, and staff attitudes"
    ],
    "correct": 3,
    "explanation": "Slide 148 notes that systems thinking focuses on interrelationships and how mental models or attitudes drive system behavior."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "A quality professional wants to map internal customer relationships. Which question is most effective to ask employees?",
    "options": [
      "What is your job title?",
      "Who is your direct supervisor?",
      "Who in your workday do you serve?",
      "How many patients do you see per day?"
    ],
    "correct": 2,
    "explanation": "Asking ‘Who do you serve?’ identifies internal customers—those who rely on an individual’s work output within the organization."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which of the following describes a ‘Leading Measure’?",
    "options": [
      "The final outcome after a month is over",
      "A check performed before the result happens to prevent problems",
      "The total number of errors reported last year",
      "The mortality rate for the previous quarter"
    ],
    "correct": 1,
    "explanation": "A leading measure tracks actions or indicators that happen before the final result, allowing for intervention to ensure success."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "In the PDSA cycle, what occurs during the ‘Study’ phase?",
    "options": [
      "Identify the problem and plan the change",
      "Compare data to predictions and summarize learning",
      "Implement the change hospital-wide",
      "Carry out the test on a small scale"
    ],
    "correct": 1,
    "explanation": "The ‘Study’ phase involves analyzing the results of the test and comparing them against the original predictions to see what was learned."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Philip Crosby is best known for which quality philosophy?",
    "options": [
      "The Juran Trilogy",
      "Zero Defects and ‘Do it right the first time’",
      "14 points for management",
      "Statistical Process Control charts"
    ],
    "correct": 1,
    "explanation": "Crosby championed ‘Zero Defects’ and the idea that quality is ‘free’ because doing things right the first time prevents scrap and rework costs."
  },
  {
    "category": "QI tools, pioneers, variation, PDSA and IHI Model for Improvement",
    "question": "Which tool is used to visualize the root causes of a specific quality event?",
    "options": [
      "Run Chart",
      "Control Chart",
      "Histogram",
      "Ishikawa Diagram"
    ],
    "correct": 3,
    "explanation": "The Ishikawa (Fishbone) diagram is the standard tool for identifying and organizing potential root causes."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "A SMART Aim must be ‘Time-bound.’ What is the primary purpose of this?",
    "options": [
      "To ensure the project never ends",
      "To reduce the cost of the project",
      "To limit the number of staff involved",
      "To create a sense of urgency and a defined timeline for evaluation"
    ],
    "correct": 3,
    "explanation": "Being time-bound ensures there is a clear deadline to create urgency and a point at which the team evaluates success."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "What is the key difference between a Clinical Audit and Quality Improvement (QI)?",
    "options": [
      "Audit generates new knowledge, while QI compares to targets.",
      "QI is only for research purposes, while Audit is for practice.",
      "Audit identifies gaps against a target, while QI tests interventions to close gaps.",
      "There is no difference between the two."
    ],
    "correct": 2,
    "explanation": "As shown in the slide examples, Clinical Audit identifies if a gap exists, whereas QI focuses on testing changes to improve performance."
  },
  {
    "category": "IDS, value-based care, managed care and access",
    "question": "Which type of Integrated Delivery System (IDS) integrates organizations at the same care level, such as multiple hospitals joining for resource sharing?",
    "options": [
      "Vertical IDS",
      "Diagonal IDS",
      "Horizontal IDS",
      "Circular IDS"
    ],
    "correct": 2,
    "explanation": "Horizontal integration occurs between similar organizations at the same level of care (e.g., a hospital chain)."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "In the context of redesigning an organization, ‘Paradigm Shift’ refers to:",
    "options": [
      "Reducing the number of staff to save money",
      "A fundamental change in how healthcare is delivered, such as moving from fee-for-service to value-based care",
      "Merging two departments under one manager",
      "Implementing a new electronic record system"
    ],
    "correct": 1,
    "explanation": "A paradigm shift is a fundamental change in approach or underlying assumptions, as exemplified by the move to value-based care."
  },
  {
    "category": "Quality, QI, value, Donabedian measures and STEEEP",
    "question": "Which Donabedian measure is ‘Percentage of surgical patients receiving prophylactic antibiotics on time’?",
    "options": [
      "Structure",
      "Outcome",
      "Process",
      "Balancing"
    ],
    "correct": 2,
    "explanation": "This measures whether a specific care action (giving antibiotics) was performed correctly according to protocol."
  },
  {
    "category": "Strategic planning, leadership, culture and QI alignment",
    "question": "The ‘IHI Model for Improvement’ emphasizes ‘Iterative learning.’ This is best represented by:",
    "options": [
      "One large-scale implementation",
      "Writing a long project report at the end",
      "Sequential PDSA cycles (ramps) building on each other",
      "Conducting a single annual audit"
    ],
    "correct": 2,
    "explanation": "Iterative learning means testing, studying, modifying, and testing again through sequential PDSA cycles."
  },
  {
    "category": "IDS, value-based care, managed care and access",
    "question": "According to the slide on ‘Transition to Value-Based Healthcare,’ the focus shifts from volume of services to:",
    "options": [
      "Number of billing codes used",
      "Total revenue per admission",
      "Patient outcomes and experience",
      "Number of diagnostic tests performed"
    ],
    "correct": 2,
    "explanation": "Value-based healthcare prioritizes patient outcomes, safety, and efficiency over the sheer number of procedures or visits."
  },
  {
    "category": "QI education, teamwork, change management and staff involvement",
    "question": "Which quality pioneer is known as the ‘Father of Statistical Quality Control’ and developed the PDCA cycle?",
    "options": [
      "Kaoru Ishikawa",
      "W. Edwards Deming",
      "Joseph Juran",
      "Walter A. Shewhart"
    ],
    "correct": 3,
    "explanation": "Shewhart developed Statistical Process Control and the original Plan-Do-Check-Act cycle in the 1920s."
  }
];
