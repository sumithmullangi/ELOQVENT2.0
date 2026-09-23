import {
  InnovexTheme,
  InnovexJourneyStep,
  ElocutionPhase,
  EvaluationCriterion,
  ScheduleItem,
  FAQItem
} from '../types';

export const EVENT_METADATA = {
  name: 'ELOQVENT 2K26',
  tagline: 'Two Tracks. One Experience.',
  subtitle: 'A transformative national platform empowering collegiate thinkers to articulate high-impact ideas and engineer human-centred solutions for pressing societal challenges.',
  date: '[DATE TO BE PROVIDED]',
  venue: '[VENUE TO BE PROVIDED]',
  city: '[CITY TO BE PROVIDED]',
  organizer: '[ORGANIZER NAME]',
  contactEmail: '[EMAIL TO BE PROVIDED]',
  contactPhone: '[PHONE TO BE PROVIDED]',
  scoringNotice: 'SCORING DETAILS — TO BE PROVIDED',
  timeNotice: '[TIME TO BE PROVIDED]',
  socials: {
    instagram: '#',
    linkedin: '#',
    twitter: '#',
    youtube: '#'
  }
};

export const CORE_PILLARS = [
  {
    title: 'Communication',
    description: 'Mastering articulation, rhetorical clarity, and the power of persuasive discourse to move audiences.',
    icon: 'MessageSquare'
  },
  {
    title: 'Innovation',
    description: 'Applying empathy-driven, systemic frameworks to break down root causes and build viable prototypes.',
    icon: 'Lightbulb'
  },
  {
    title: 'Human-Centred Design',
    description: 'Grounding every solution in deep stakeholder empathy, contextual observation, and lived realities.',
    icon: 'Users'
  },
  {
    title: 'Social Impact',
    description: 'Targeting foundational societal challenges aligned with global sustainable development goals.',
    icon: 'Globe'
  },
  {
    title: 'Entrepreneurship',
    description: 'Formulating sustainable business models, unit economics, and scalable distribution strategies.',
    icon: 'TrendingUp'
  },
  {
    title: 'Sustainability',
    description: 'Designing circular, resilient, and enduring interventions that preserve ecosystems and communities.',
    icon: 'Leaf'
  }
];

export const ELOCUTION_PILLARS = [
  {
    title: 'Public Speaking',
    description: 'Commanding the stage with poise, vocal projection, and audience connection.',
    iconName: 'Mic'
  },
  {
    title: 'Articulation',
    description: 'Structuring complex concepts into clear, precise, and resonant verbal expressions.',
    iconName: 'Sparkles'
  },
  {
    title: 'Critical Thinking',
    description: 'Deconstructing contemporary themes, identifying nuances, and analyzing counter-arguments.',
    iconName: 'Brain'
  },
  {
    title: 'Debate & Rebuttal',
    description: 'Engaging in rigorous, civil, and fact-grounded intellectual dialectics.',
    iconName: 'Scale'
  },
  {
    title: 'Storytelling',
    description: 'Weaving data, human emotion, and narrative arcs to forge memorable speeches.',
    iconName: 'BookOpen'
  },
  {
    title: 'Persuasive Communication',
    description: 'Crafting compelling calls-to-action that inspire mindset shifts and tangible action.',
    iconName: 'Flame'
  }
];

export { ELOCUTION_PHASES } from './elocutionPhases';


export { INNOVEX_THEMES } from './innovexProcess';


export { INNOVEX_JOURNEY_STEPS } from './innovexJourney';


export const EVALUATION_ELOCUTION: EvaluationCriterion[] = [
  {
    category: 'Clarity of Expression & Articulation',
    description: 'Precision of language, phonetics, vocal projection, tone modulation, and command of vocabulary.',
    keyIndicators: ['Enunciation & diction', 'Pacing and pause control', 'Linguistic sophistication without ambiguity'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  },
  {
    category: 'Content Structure & Logical Flow',
    description: 'Coherent arrangement of introductory hook, premise expansion, evidentiary backing, and conclusion.',
    keyIndicators: ['Logical transitions between arguments', 'Relevance to assigned theme/motion', 'Depth of contextual analysis'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  },
  {
    category: 'Critical Thinking & Originality',
    description: 'Ability to examine issues from multiple perspectives, challenge assumptions, and provide novel insights.',
    keyIndicators: ['Depth of independent thought', 'Avoidance of cliches', 'Nuanced understanding of societal trade-offs'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  },
  {
    category: 'Debate, Rebuttal & Agility',
    description: 'Effectiveness in deconstructing opposing viewpoints and defending arguments under strict time constraints.',
    keyIndicators: ['Responsiveness to counter-points', 'Factual grounding during rebuttals', 'Composure during questioning'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  },
  {
    category: 'Audience Engagement & Stage Presence',
    description: 'Non-verbal communication, posture, eye contact, charisma, and emotional resonance with the jury and hall.',
    keyIndicators: ['Eye contact & body language', 'Confidence and poise', 'Rhetorical impact & memorable delivery'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  }
];

export const EVALUATION_INNOVEX: EvaluationCriterion[] = [
  {
    category: 'Empathy Depth & Problem Grounding',
    description: 'Evidence of authentic stakeholder immersion, user research rigor, and contextual understanding of lived pain points.',
    keyIndicators: ['Thoroughness of empathy mapping', 'Clarity of persona and stakeholder context', 'Depth of field observations'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  },
  {
    category: 'Root Cause Analysis Rigor',
    description: 'Systemic deconstruction of the underlying problem using first-principles tools (5-Whys, Fishbone, Causal Loops).',
    keyIndicators: ['Distinction between symptoms and causes', 'Systemic thinking depth', 'Validity of causal linkages'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  },
  {
    category: 'Innovation & Solution Viability',
    description: 'Ingenuity, novelty, and technical feasibility of the proposed product, service, or policy intervention.',
    keyIndicators: ['Frugality & elegance of design', 'Prototype / architecture fidelity', 'Technological and operational feasibility'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  },
  {
    category: 'Business Model & Financial Sustainability',
    description: 'Robustness of the revenue streams, cost structures, unit economics, and operational self-sufficiency.',
    keyIndicators: ['Lean business canvas clarity', 'Realistic unit economics and cost estimates', 'Long-term financial independence'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  },
  {
    category: 'Scalability & Measurable Social Impact',
    description: 'Potential for widespread geographic or demographic scaling and measurable positive delta on human lives/ecosystems.',
    keyIndicators: ['Impact metrics definition', 'Scalability roadmap feasibility', 'Environmental and circular sustainability'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  },
  {
    category: 'Pitch Quality & Jury Defense',
    description: 'Effectiveness of presentation storytelling, demonstration of deliverables, and competence during jury interrogation.',
    keyIndicators: ['Narrative coherence & visual quality', 'Prototype demonstration clarity', 'Robustness in answering jury questions'],
    weightage: 'SCORING DETAILS — TO BE PROVIDED'
  }
];

export const EVENT_SCHEDULE: ScheduleItem[] = [
  // Day 1
  {
    id: 's-d1-01',
    day: 'Day 1',
    time: '[TIME TO BE PROVIDED]',
    title: 'Registration & Welcome Kit Distribution',
    track: 'All',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Verification of participant credentials, allocation of ID badges, and distribution of event toolkits.'
  },
  {
    id: 's-d1-02',
    day: 'Day 1',
    time: '[TIME TO BE PROVIDED]',
    title: 'Grand Inauguration & Thematic Orientation',
    phaseOrStep: 'Phase 1 (Elocution) / Orientation (Innovex)',
    track: 'All',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Opening remarks by dignitaries, unveiling of ELOQVENT 2K26 vision, release of detailed problem statements and thematic frameworks.'
  },
  {
    id: 's-d1-03',
    day: 'Day 1',
    time: '[TIME TO BE PROVIDED]',
    title: 'Innovex Stage 1: Empathy & Root Cause Immersion',
    phaseOrStep: 'Steps 01 - 03 (Understand, Discover, Root Cause)',
    track: 'Innovex',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Teams conduct stakeholder empathy mapping, symptom trees, and 5-Whys root cause synthesis with assigned mentors.'
  },
  {
    id: 's-d1-04',
    day: 'Day 1',
    time: '[TIME TO BE PROVIDED]',
    title: 'Elocution Stage 1: Interactive Expression Development',
    phaseOrStep: 'Phase 2',
    track: 'Elocution',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Round 1 of articulation and impromptu speech dynamics across parallel auditorium tracks.'
  },
  {
    id: 's-d1-05',
    day: 'Day 1',
    time: '[TIME TO BE PROVIDED]',
    title: 'Innovex Stage 2: Ideation & Frugal Solution Architecture',
    phaseOrStep: 'Steps 04 - 05 (Ideate, Develop Solution)',
    track: 'Innovex',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Teams generate divergent concepts, select highest-impact vectors, and begin building mockups and value proposition canvases.'
  },
  {
    id: 's-d1-06',
    day: 'Day 1',
    time: '[TIME TO BE PROVIDED]',
    title: 'Elocution Stage 2: Structured Debate & Dialectics',
    phaseOrStep: 'Phase 3',
    track: 'Elocution',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Rigorous debate face-offs on contemporary socio-technological motions with timed rebuttals.'
  },
  {
    id: 's-d1-07',
    day: 'Day 1',
    time: '[TIME TO BE PROVIDED]',
    title: 'Day 1 Evaluation & Interim Feedback Deliberation',
    phaseOrStep: 'Phase 4 (Elocution) / Mid-Review (Innovex)',
    track: 'All',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Jury panels evaluate Day 1 performance, distribute constructive feedback scorecards, and announce qualifiers for Day 2.'
  },
  // Day 2
  {
    id: 's-d2-01',
    day: 'Day 2',
    time: '[TIME TO BE PROVIDED]',
    title: 'Day 2 Briefing & Advanced Stage Warm-up',
    track: 'All',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Recap of Day 1 progress, rubric recalibration, and instructions for championship rounds.'
  },
  {
    id: 's-d2-02',
    day: 'Day 2',
    time: '[TIME TO BE PROVIDED]',
    title: 'Innovex Stage 3: Sustainable Business Modelling & Scalability',
    phaseOrStep: 'Step 06 (Build Sustainable Model)',
    track: 'Innovex',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Teams finalize unit economics, operational roadmaps, ecological impact assessments, and pitch slide decks.'
  },
  {
    id: 's-d2-03',
    day: 'Day 2',
    time: '[TIME TO BE PROVIDED]',
    title: 'Elocution Stage 3: Advanced Communication Enhancement',
    phaseOrStep: 'Phase 5',
    track: 'Elocution',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'High-level prepared keynote delivery on strategic vision, policy discourse, and socio-economic transformation.'
  },
  {
    id: 's-d2-04',
    day: 'Day 2',
    time: '[TIME TO BE PROVIDED]',
    title: 'Innovex Final Stage: Grand Impact Pitch & Jury Defense',
    phaseOrStep: 'Step 07 (Pitch for Impact)',
    track: 'Innovex',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Finalist teams pitch live before a grand panel of industry leaders, venture philanthropists, and academic domain experts.'
  },
  {
    id: 's-d2-05',
    day: 'Day 2',
    time: '[TIME TO BE PROVIDED]',
    title: 'Elocution Championship: Final Elocution Assessment',
    phaseOrStep: 'Phase 6',
    track: 'Elocution',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Grand finale oration round with instant cross-examination by the Chief Jury.'
  },
  {
    id: 's-d2-06',
    day: 'Day 2',
    time: '[TIME TO BE PROVIDED]',
    title: 'Valedictory Ceremony, Award Announcements & Closing',
    track: 'All',
    venue: '[VENUE TO BE PROVIDED]',
    description: 'Celebration of participant achievements, trophy and certificate distribution, keynote by Chief Guest, and formal conclusion.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is ELOQVENT 2K26 and how are the two tracks structured?',
    answer: 'ELOQVENT 2K26 is a premier inter-collegiate national symposium offering two interconnected tracks: ELOCUTION (focused on articulation, debate, storytelling, and persuasive rhetoric) and INNOVEX (focused on human-centred design, root cause discovery, sustainable business modelling, and social impact prototyping). Participants may apply for either track according to their interest and eligibility.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Where and when will ELOQVENT 2K26 take place?',
    answer: 'The event dates are [DATE TO BE PROVIDED] and the venue is [VENUE TO BE PROVIDED]. Keep an eye on this official portal for upcoming announcements or register now to receive real-time email updates once the scheduling is formalized.'
  },
  {
    id: 'faq-3',
    category: 'Registration & Eligibility',
    question: 'Who is eligible to participate in ELOQVENT 2K26?',
    answer: 'Undergraduate and postgraduate students actively enrolled in recognized universities and colleges are eligible. Valid student identification is required during on-site registration. Individual participation is standard for Elocution, while Innovex accommodates both individuals and teams.'
  },
  {
    id: 'faq-4',
    category: 'Registration & Eligibility',
    question: 'Can a single student register for both Elocution and Innovex?',
    answer: 'While participants may submit interest for both tracks, scheduling overlaps during Day 1 and Day 2 break-out sessions require primary commitment to one main track. Dual-track registration guidelines will be finalized: [TO BE PROVIDED].'
  },
  {
    id: 'faq-5',
    category: 'Innovex',
    question: 'What are the official themes for the INNOVEX track?',
    answer: 'INNOVEX features 5 core challenge domains: 1) Healthcare and Well-being, 2) Smart and Sustainable Agriculture, 3) Water and Sanitation, 4) Waste Management and Circular Economy, and 5) Education and Inclusive Learning.'
  },
  {
    id: 'faq-6',
    category: 'Innovex',
    question: 'What is the required deliverable format for INNOVEX submissions?',
    answer: 'Teams will submit and present: an Empathy & Root Cause Canvas, a Solution Prototype / Blueprint, a Lean Social Business Model Canvas with basic unit economics, and an Executive Pitch Deck for the final jury defense.'
  },
  {
    id: 'faq-7',
    category: 'Elocution',
    question: 'What speech formats and phases are part of the ELOCUTION track?',
    answer: 'ELOCUTION progresses through 6 distinct phases: Phase 1 (Orientation), Phase 2 (Interactive Expression Development), Phase 3 (Structured Debate & Dialectics), Phase 4 (Day 1 Evaluation), Phase 5 (Advanced Communication Enhancement), and Phase 6 (Final Elocution Assessment & Jury Q&A).'
  },
  {
    id: 'faq-8',
    category: 'Evaluation & Awards',
    question: 'How are participants evaluated and when are scoring details published?',
    answer: 'Evaluation is performed by distinguished juries across criteria such as clarity of articulation, root cause analysis rigor, innovation viability, social sustainability, and stage presence. Detailed scoring point distributions are currently marked as [SCORING DETAILS — TO BE PROVIDED] and will be shared during the official orientation.'
  },
  {
    id: 'faq-9',
    category: 'Registration & Eligibility',
    question: 'Is there a registration fee?',
    answer: 'Official registration fee details, sponsorship subsidies, and travel allowances are [TO BE PROVIDED]. There are no upfront payment requirements during this preliminary registration stage.'
  }
];
