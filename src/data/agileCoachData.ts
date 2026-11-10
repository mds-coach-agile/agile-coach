import {
  RoleComparisonData,
  RoleScenarioItem,
  CoachingStanceItem,
  ConflictLevelItem,
  QuizQuestion,
} from '../types';

export const ROLES_DATA: RoleComparisonData[] = [
  {
    id: 'agile-coach',
    title: 'Agile Coach',
    tagline: 'Organizational catalyst & behavioral guide',
    scope: 'Multiple teams, leadership & systemic culture',
    authorityStyle: 'Pure influence & psychological safety (no direct power)',
    primaryFocus: 'Long-term capability building, team autonomy & systems thinking',
    conflictResponse: 'Facilitates root cause discovery; helps parties resolve it themselves',
    keyQuestion: 'What needs to shift so this team can sustainably solve this without me?',
    successMetric: 'Autonomous teams that continuously improve without ongoing intervention',
    keyDeliverable: 'Coaching agreements, organizational retrospective findings, mindset shifts',
  },
  {
    id: 'scrum-master',
    title: 'Scrum Master',
    tagline: 'Process champion & team impediment remover',
    scope: '1–2 dedicated Scrum or Kanban teams',
    authorityStyle: 'Process leadership & servant leadership within the team boundary',
    primaryFocus: 'Delivery flow, sprint health, adherence to Scrum events & clearing blockers',
    conflictResponse: 'Addresses dysfunctions within sprint ceremonies; protects team focus',
    keyQuestion: 'What is blocking our sprint goal and how can we remove it today?',
    successMetric: 'Consistent sprint velocity, predictable cadence & healthy team retrospectives',
    keyDeliverable: 'Sprint burndowns, impediment backlog, ceremony facilitation notes',
  },
  {
    id: 'project-manager',
    title: 'Project / Delivery Manager',
    tagline: 'Plan custodian & delivery coordinator',
    scope: 'Specific project, budget, timeline & contractual scope',
    authorityStyle: 'Direct management authority or structural accountability',
    primaryFocus: 'Timeline adherence, budget, risk mitigation & executive reporting',
    conflictResponse: 'Escalates or arbitrates trade-offs between scope, time, and resources',
    keyQuestion: 'Are we on track to hit the agreed release milestone within budget?',
    successMetric: 'On-time, on-budget delivery against predetermined milestone criteria',
    keyDeliverable: 'Gantt charts, risk matrices, status reports, resource allocations',
  },
];

export const ROLE_SCENARIOS: RoleScenarioItem[] = [
  {
    id: 'velocity-drop',
    situation: 'Sprint velocity dropped 30% over two consecutive sprints',
    context: 'The engineering team seems fatigued and missed several user story commitments.',
    agileCoachAction:
      'Observes team interactions and retro dynamics; asks systemic questions about technical debt, psychological safety, and organizational pressure instead of diagnosing.',
    scrumMasterAction:
      'Facilitates a focused retrospective on blockers, checks daily standup impediment logs, and helps the team right-size story estimates for the next sprint.',
    projectManagerAction:
      'Analyses schedule variance, alerts stakeholders to potential milestone slip, and evaluates whether scope reduction or resource re-allocation is required.',
  },
  {
    id: 'architectural-dispute',
    situation: 'Two senior developers are deadlocked over microservices vs monolith architecture',
    context: 'Discussions in PR reviews have become tense and defensive, slowing down pull request approvals.',
    agileCoachAction:
      'Diagnoses conflict level (Level 2: Disagreement); coaches both engineers individually on emotional cues, then facilitates a structured trade-off exploration session.',
    scrumMasterAction:
      'Brings the team together in a time-boxed technical spikes session to let data and quick prototypes settle the debate rather than opinions.',
    projectManagerAction:
      'Requests a formal architectural decision record (ADR) by Friday and escalates to the Principal Architect or CTO if no consensus is reached.',
  },
  {
    id: 'scope-creep',
    situation: 'Product Owner adds 5 unplanned urgent requests mid-sprint',
    context: 'Developers feel pressured to accept the work and work overtime.',
    agileCoachAction:
      'Mentors the Product Owner on product value trade-offs and sustainable pace; coaches engineering leadership on enforcing clear boundary agreements.',
    scrumMasterAction:
      'Protects the Sprint Goal; reminds the PO that new scope requires swapping out equivalent points or waiting for the next Sprint Planning.',
    projectManagerAction:
      'Logs change requests, computes the cost and schedule impact, and asks sponsor for formal change approval.',
  },
];

export const COACHING_STANCES_DATA: CoachingStanceItem[] = [
  {
    id: 'teacher',
    title: 'Teacher',
    subtitle: 'Imparting knowledge & foundational concepts',
    definition: 'Directly transferring knowledge, frameworks, and Agile basics when the team lacks necessary domain context.',
    stancePosture: 'Front of the room, structured instruction, authoritative on frameworks',
    idealSituation: 'A newly formed team doesn’t understand Definition of Done or the difference between estimate vs commitment.',
    antiPatternTrap: 'Remaining in Teacher mode too long, creating dependency where the team never thinks for themselves.',
    powerfulQuestions: [
      'What are the core principles behind this practice?',
      'How does the Scrum Guide define this ceremony’s specific output?',
    ],
    realWorldExample: 'Running an interactive 30-minute workshop on Story Splitting techniques for junior developers.',
  },
  {
    id: 'mentor',
    title: 'Mentor',
    subtitle: 'Sharing lived experience & guiding wisdom',
    definition: 'Sharing hard-earned experience and contextual battle stories to illuminate options without prescribing the answer.',
    stancePosture: 'Walking beside the person, "Here is what worked and failed for me in a similar scenario"',
    idealSituation: 'A junior Scrum Master struggles to handle a dominant voice during sprint retrospectives.',
    antiPatternTrap: 'Saying "Just do it the way I did it at my previous company" (context blindness).',
    powerfulQuestions: [
      'When I encountered this in past teams, we tried X. How might that adapt to your team?',
      'What resonated with you from that case study, and what feels risky here?',
    ],
    realWorldExample: 'Debriefing 1-on-1 with a Scrum Master after a tough retro to share facilitation micro-adjustments.',
  },
  {
    id: 'facilitator',
    title: 'Facilitator',
    subtitle: 'Guiding process while remaining neutral to outcome',
    definition: 'Designing the container and holding neutral space so the team can collaborate, debate, and own their own decisions.',
    stancePosture: 'Standing at the whiteboard, orchestrating divergent then convergent group dialogue',
    idealSituation: 'The team must choose an epic roadmap strategy or conduct a complex post-incident review.',
    antiPatternTrap: 'Steering the group toward your personal preferred technical conclusion under the guise of facilitation.',
    powerfulQuestions: [
      'What voices or perspectives have we not heard from yet?',
      'What is the common ground between these two opposing proposals?',
    ],
    realWorldExample: 'Guiding a 90-minute Liberating Structures session to prioritize technical debt items.',
  },
  {
    id: 'coach',
    title: 'Professional Coach',
    subtitle: 'Believing the coachee is creative, resourceful, and whole',
    definition: 'Reflecting observations, maintaining presence, and asking powerful inquiry questions that unlock team-generated solutions.',
    stancePosture: 'Sitting back, active listening, asking non-directive open-ended questions',
    idealSituation: 'The team realizes they have low motivation or communication friction, but knows the technical work well.',
    antiPatternTrap: 'Giving advice or disguised suggestions ("Have you considered doing X?").',
    powerfulQuestions: [
      'If nothing was standing in your way, what would the ideal outcome look like?',
      'What is the hardest truth the team is currently avoiding discussing?',
    ],
    realWorldExample: 'Asking a silent team: "What is happening right now in this room that no one is naming?"',
  },
];

export const CONFLICT_LEVELS_DATA: ConflictLevelItem[] = [
  {
    level: 1,
    name: 'Problem to Solve',
    description: 'Information sharing and collaboration; focus is on the problem, not personalities.',
    typicalLanguage: 'Optimistic, clear, fact-oriented: "Let\'s look at the logs together."',
    coachResponse: 'Encourage collaboration, observe lightly, confirm they have psychological safety.',
  },
  {
    level: 2,
    name: 'Disagreement',
    description: 'Self-protection begins; guarded language, cautious sharing, initial camps forming.',
    typicalLanguage: 'Generalizations: "They always change the requirements on us at the last minute."',
    coachResponse: 'Slow down dialogue; ask parties to paraphrase each other before responding; focus on shared objectives.',
  },
  {
    level: 3,
    name: 'Contest',
    description: 'Winning becomes more important than solving the issue; faction building, distorted facts.',
    typicalLanguage: 'Us vs Them language: "Management will never approve this unless we force it through."',
    coachResponse: 'De-escalate alliances; conduct 1-on-1 coaching; create safe, neutral forums with strict ground rules.',
  },
  {
    level: 4,
    name: 'Crusade',
    description: 'Ideological warfare; opponents are seen as fundamentally flawed or incapable.',
    typicalLanguage: 'Morality and ideology: "They are incapable of writing clean code; they need to leave."',
    coachResponse: 'Intervene directly; separate parties if needed; engage leadership; shift to formal mediation.',
  },
  {
    level: 5,
    name: 'World War',
    description: 'Total destruction; goal is eliminating the other party even at massive personal/organizational cost.',
    typicalLanguage: 'Desperation and destruction: "Either they go or I resign today."',
    coachResponse: 'Ensure physical and psychological safety; immediate leadership intervention and team restructuring.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'roles',
    categoryLabel: 'Role Boundaries',
    scenario:
      'A Product Owner insists on assigning specific Jira tasks to individual developers during Sprint Planning because "velocity is too slow and people need direct accountability."',
    question: 'How should an Agile Coach best respond to this situation?',
    options: [
      {
        id: 'opt1',
        text: 'Step in, overrule the Product Owner, and reassign the tasks to the backlog.',
        isCorrect: false,
        rationale: 'An Agile Coach has no positional authority to overrule people; direct executive intervention violates coach neutrality and creates conflict.',
      },
      {
        id: 'opt2',
        text: 'Coach the Product Owner on self-organization, and coach the developers on how to pull work collectively based on team capacity.',
        isCorrect: true,
        rationale: 'Correct! Agile coaches educate on principles (self-management) and guide both sides toward sustainable autonomous team dynamics.',
      },
      {
        id: 'opt3',
        text: 'Tell the Scrum Master to document the Product Owner’s behavior as an impediment for HR escalation.',
        isCorrect: false,
        rationale: 'Escalating early misunderstandings of Scrum roles to HR erodes trust and misses the educational opportunity.',
      },
      {
        id: 'opt4',
        text: 'Agree with the PO since delivery speed is the ultimate metric in modern software projects.',
        isCorrect: false,
        rationale: 'Micro-assigning tasks destroys team accountability, collaboration, and ownership.',
      },
    ],
    coachingTakeaway:
      'Agile Coaches focus on systemic capability: teach the PO why team pull beats push, and coach developers to speak up about their capacity.',
  },
  {
    id: 'q2',
    category: 'stances',
    categoryLabel: 'Coaching Stances',
    scenario:
      'A team is holding a retrospective. They are clearly demoralized after a painful release, but every time a developer raises an issue, the tech lead explains away why it was unavoidable. The room goes silent.',
    question: 'Which stance and response should the coach adopt here?',
    options: [
      {
        id: 'opt1',
        text: 'Teacher: Launch into a 20-minute lecture on how retrospectives require blameless culture.',
        isCorrect: false,
        rationale: 'Lecturing an emotionally drained team increases detachment and shuts down active dialogue.',
      },
      {
        id: 'opt2',
        text: 'Professional Coach: Reflect what is happening in the room ("I notice silence after every comment. What is the elephant in the room?") and hold the pause.',
        isCorrect: true,
        rationale: 'Spot on! Professional coaching holds a mirror up to the team without judgment, allowing the group to confront uncomfortable dynamics safely.',
      },
      {
        id: 'opt3',
        text: 'Project Manager: End the retro immediately and reschedule with the engineering VP present.',
        isCorrect: false,
        rationale: 'Bypassing the team and calling in executives reinforces fear and destroys psychological safety.',
      },
      {
        id: 'opt4',
        text: 'Mentor: Interrupt the tech lead and describe how you handled your own tech lead when you were a junior developer 10 years ago.',
        isCorrect: false,
        rationale: 'Unsolicited storytelling shifts the spotlight away from the team\'s current emotional reality onto the coach.',
      },
    ],
    coachingTakeaway:
      'Silence is data. A coach observes verbal and non-verbal patterns, reflects them neutrally, and lets the team sit with the insight.',
  },
  {
    id: 'q3',
    category: 'roles',
    categoryLabel: 'Agile Coach vs Scrum Master',
    scenario:
      'A company has 8 Scrum teams working on the same digital platform. Cross-team dependencies are causing severe release delays, and teams blame each other during quarterly syncs.',
    question: 'How do the roles of the Scrum Master and Agile Coach differ in addressing this?',
    options: [
      {
        id: 'opt1',
        text: 'The Scrum Master resolves company-wide dependency architecture, while the Agile Coach facilitates individual daily standups.',
        isCorrect: false,
        rationale: 'This inverts the scopes. The Scrum Master works within team boundaries; the Agile Coach tackles multi-team systemic flow.',
      },
      {
        id: 'opt2',
        text: 'The Scrum Master coordinates their team’s external dependency blockers, while the Agile Coach helps leadership and all teams design an ongoing scaling and dependency-mapping framework.',
        isCorrect: true,
        rationale: 'Correct! The Scrum Master ensures their team’s impediments are raised, while the Agile Coach coaches the broader ecosystem on systemic flow and dependency reduction.',
      },
      {
        id: 'opt3',
        text: 'Both roles do the exact same thing; "Agile Coach" is merely an expensive job title for senior Scrum Masters.',
        isCorrect: false,
        rationale: 'While coaching skills overlap, an Agile Coach operates at enterprise/systemic scale, dealing with executive mindset, governance, and organizational design.',
      },
      {
        id: 'opt4',
        text: 'The Agile Coach takes over writing user stories for all 8 teams so they are standardized.',
        isCorrect: false,
        rationale: 'Neither role writes user stories for the team; that is the Product Owner and development team responsibility.',
      },
    ],
    coachingTakeaway:
      'Scrum Masters optimize single-team delivery flow; Agile Coaches optimize value streams across organizational systems.',
  },
  {
    id: 'q4',
    category: 'conflict',
    categoryLabel: 'Conflict Resolution',
    scenario:
      'In a sprint review, a QA engineer says: "The frontend devs don’t care about quality and never test their code before throwing it over the wall to us." A frontend dev snaps back: "QA just finds cosmetic nits to justify their existence."',
    question: 'What level of conflict (Speed Leas model) is this, and what is the best immediate coaching action?',
    options: [
      {
        id: 'opt1',
        text: 'Level 1 (Problem to solve): Let them keep arguing in public because healthy debate breeds innovation.',
        isCorrect: false,
        rationale: 'Personal attacks ("don’t care", "justify existence") are beyond Level 1 objective problem solving.',
      },
      {
        id: 'opt2',
        text: 'Level 3 (Contest): The focus has shifted from code bugs to winning and attacking character. Time-box the session, de-escalate, and hold 1-on-1 discovery conversations.',
        isCorrect: true,
        rationale: 'Correct! Language has escalated to generalizations and personal motivations (Level 3). The coach must de-escalate public shaming and examine team silos.',
      },
      {
        id: 'opt3',
        text: 'Level 5 (World War): Immediately report both employees for disciplinary termination.',
        isCorrect: false,
        rationale: 'Level 5 is total mutual destruction. This is interpersonal friction that can be de-escalated through proper coaching and pairing.',
      },
      {
        id: 'opt4',
        text: 'Assign a Project Manager to sit between them and inspect every Git commit manually.',
        isCorrect: false,
        rationale: 'Adding bureaucratic inspection treats the symptom while entrenching the hostility.',
      },
    ],
    coachingTakeaway:
      'Recognizing conflict level prevents miscalibration: don’t treat Level 3 personal contests as simple Level 1 technical bugs.',
  },
  {
    id: 'q5',
    category: 'stances',
    categoryLabel: 'Powerful Questions',
    scenario:
      'A development team complains: "Our retro action items never get done because sprint deadlines always push them aside."',
    question: 'Which question below is a genuine "Powerful Coaching Question" rather than a disguised piece of advice?',
    options: [
      {
        id: 'opt1',
        text: '"Don’t you think you should put retro action items directly into the sprint backlog with story points?"',
        isCorrect: false,
        rationale: 'This is advice disguised with a question mark ("Don\'t you think..."). It imposes the coach’s solution.',
      },
      {
        id: 'opt2',
        text: '"Why can’t you push back on your Product Owner when deadlines are unrealistic?"',
        isCorrect: false,
        rationale: '"Why" questions frequently induce defensiveness and accusation, closing down reflective thinking.',
      },
      {
        id: 'opt3',
        text: '"What would need to happen for continuous improvement to be treated with the same priority as customer features?"',
        isCorrect: true,
        rationale: 'Correct! It is open-ended, non-judgmental, forward-looking, and challenges the team to define their own systemic conditions.',
      },
      {
        id: 'opt4',
        text: '"Who specifically is skipping their assigned improvement tasks?"',
        isCorrect: false,
        rationale: 'Singling out individuals fosters blame rather than systemic problem-solving.',
      },
    ],
    coachingTakeaway:
      'Powerful questions begin with "What" or "How", contain zero hidden advice, and prompt deep reflection rather than defensiveness.',
  },
];

export const LEARNING_MODULES = [
  {
    id: 'fundamentals',
    number: '01',
    title: 'The Agile Coach Identity',
    subtitle: 'Beyond the Scrum Master title',
    description: 'Understand the mandate of an Agile Coach: developing self-sufficient, high-performing teams through mindset transformation and systemic awareness.',
    readTime: '4 min read',
    keyPoints: [
      'Catalyst vs manager: why authority is absent by design',
      'Systemic perspective: seeing the forest beyond sprint burndowns',
      'The ultimate objective: working oneself out of a job',
    ],
  },
  {
    id: 'role-boundaries',
    number: '02',
    title: 'Triad of Roles: Coach, SM & PM',
    subtitle: 'Clarifying overlaps & borders',
    description: 'Map out the complementary differences between an Agile Coach, a Scrum Master, and a Project/Delivery Manager to prevent confusion.',
    readTime: '6 min read',
    keyPoints: [
      'Scope comparison: enterprise vs team vs deliverable',
      'Authority styles: influence, servant leadership, structural control',
      'Handling project crises: who owns what response',
    ],
  },
  {
    id: 'stances',
    number: '03',
    title: 'The 4 Coaching Stances',
    subtitle: 'Lyssa Adkins framework',
    description: 'Learn when to instruct as a Teacher, guide as a Mentor, remain neutral as a Facilitator, or inquire as a Professional Coach.',
    readTime: '5 min read',
    keyPoints: [
      'Recognizing situational readiness of coachees',
      'Mastering powerful non-directive inquiries',
      'Avoiding the habitual Teacher trap',
    ],
  },
  {
    id: 'conflict-dynamics',
    number: '04',
    title: 'Conflict & Team Facilitation',
    subtitle: 'Speed Leas 5 levels of conflict',
    description: 'Diagnose team tensions before they become toxic. Navigate disagreements with psychological safety and structured dialogue tools.',
    readTime: '5 min read',
    keyPoints: [
      'Classifying conflict: from problem-solving to factional war',
      'De-escalation mechanisms for each tier',
      'Constructive retrospective agreements',
    ],
  },
];
