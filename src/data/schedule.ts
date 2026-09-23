export interface SchedulePhaseItem {
  id: string;
  day: 'Day 1' | 'Day 2';
  track: 'All' | 'Elocution' | 'Innovex';
  phaseOrStep?: string;
  title: string;
  summary: string;
  focusHighlights: string[];
  time: string;
  venue: string;
  isEvaluationCheckpoint?: boolean;
}

export const EVENT_SCHEDULE_ITEMS: SchedulePhaseItem[] = [
  // ==========================================
  // DAY 1 PHASES
  // ==========================================
  {
    id: 'sch-d1-01',
    day: 'Day 1',
    track: 'All',
    phaseOrStep: 'Opening Assembly',
    title: 'Grand Inauguration & Thematic Orientation',
    summary: 'Joint opening symposium, orientation address, thematic domain releases, and track methodology briefings for all delegates.',
    focusHighlights: [
      'Official opening address & symposium vision',
      'Release of thematic challenge frameworks',
      'Track rules, code of conduct & orientation'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]'
  },
  {
    id: 'sch-d1-02',
    day: 'Day 1',
    track: 'Elocution',
    phaseOrStep: 'Phase 1 & Phase 2',
    title: 'Orientation & Interactive Expression Development',
    summary: 'Phase 1 participant orientation followed by Phase 2 interactive speechcraft, impromptu articulation, and verbal agility rounds.',
    focusHighlights: [
      'Oratorical briefing & speech structure dynamics',
      'Impromptu speaking & theme deconstruction',
      'Vocal modulation, enunciation & pacing development'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]'
  },
  {
    id: 'sch-d1-03',
    day: 'Day 1',
    track: 'Innovex',
    phaseOrStep: 'Steps 01 – 03',
    title: 'Empathy Research & Root Cause Discovery',
    summary: 'Teams conduct stakeholder empathy mapping, symptom trees, and first-principles root cause analysis across their chosen challenge theme.',
    focusHighlights: [
      'Stakeholder immersion & persona definition',
      'Separation of surface symptoms from structural causes',
      '5-Whys causal chain synthesis & evidence-backed problem definition'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]'
  },
  {
    id: 'sch-d1-04',
    day: 'Day 1',
    track: 'Elocution',
    phaseOrStep: 'Phase 3',
    title: 'Structured Debate & Dialectics Practice',
    summary: 'Rigorous debate face-offs on contemporary socio-technological motions with timed speeches, structured cross-examinations, and rebuttals.',
    focusHighlights: [
      'Parliamentary & structured debate face-offs',
      'Evidentiary argumentation & fallacy deconstruction',
      'Spontaneous rebuttal defense under timed conditions'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]'
  },
  {
    id: 'sch-d1-05',
    day: 'Day 1',
    track: 'Innovex',
    phaseOrStep: 'Steps 04 – 05',
    title: 'Ideation & Frugal Solution Architecture',
    summary: 'Teams generate cross-disciplinary concepts, prioritize high-impact vectors, and build initial functional prototypes or service blueprints.',
    focusHighlights: [
      'Divergent brainstorming & "How Might We" formulation',
      'Concept convergence on impact vs. feasibility matrix',
      'Frugal physical mockup, wireframe, or service workflow development'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]'
  },
  {
    id: 'sch-d1-06',
    day: 'Day 1',
    track: 'Elocution',
    phaseOrStep: 'Phase 4 (Checkpoint)',
    title: 'Day 1 Evaluation & Interim Adjudication',
    summary: 'Formal debate-based evaluation assessing communication effectiveness, critical thinking, articulation, argument structure, and confidence.',
    focusHighlights: [
      'Comprehensive debate-based jury assessment',
      'Adjudication across 8 core elocution criteria',
      'Formative jury feedback & progression deliberation'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]',
    isEvaluationCheckpoint: true
  },
  {
    id: 'sch-d1-07',
    day: 'Day 1',
    track: 'Innovex',
    phaseOrStep: 'Day 1 Mid-Point Checkpoint',
    title: 'Interim Solution Review & Mentorship Feedback',
    summary: 'Mid-point review assessing problem definition validity, root cause depth, and preliminary prototype architecture feasibility.',
    focusHighlights: [
      'Validation of problem-solution fit',
      'Expert mentor deconstruction of causal logic',
      'Strategic guidance for Day 2 business modelling'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]',
    isEvaluationCheckpoint: true
  },

  // ==========================================
  // DAY 2 PHASES
  // ==========================================
  {
    id: 'sch-d2-01',
    day: 'Day 2',
    track: 'All',
    phaseOrStep: 'Championship Assembly',
    title: 'Day 2 Assembly & Rubric Recalibration',
    summary: 'Opening briefing for championship rounds, final stage requirements recap, and jury panel introductions.',
    focusHighlights: [
      'Day 1 progression review & Day 2 briefing',
      'Grand finale adjudication guidelines',
      'Championship round staging & order'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]'
  },
  {
    id: 'sch-d2-02',
    day: 'Day 2',
    track: 'Elocution',
    phaseOrStep: 'Phase 5',
    title: 'Advanced Communication Enhancement',
    summary: 'High-level prepared orations and complex policy keynotes emphasizing rhetorical resonance, storytelling arcs, and persuasive mastery.',
    focusHighlights: [
      'Thematic policy & vision keynotes',
      'Advanced narrative architecture & emotional resonance',
      'Strategic rhetorical delivery & audience connection'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]'
  },
  {
    id: 'sch-d2-03',
    day: 'Day 2',
    track: 'Innovex',
    phaseOrStep: 'Step 06',
    title: 'Sustainable Business Modelling & Scalability',
    summary: 'Teams formulate Lean Social Business Model Canvases, unit economics, ecological lifecycle strategies, and 3-year phased scaling roadmaps.',
    focusHighlights: [
      'Lean Social Business Canvas formulation',
      'Unit economics, revenue logic & operational feasibility',
      'Ecological sustainability & UN SDG alignment'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]'
  },
  {
    id: 'sch-d2-04',
    day: 'Day 2',
    track: 'Elocution',
    phaseOrStep: 'Phase 6 (Championship)',
    title: 'Final Elocution Assessment & Grand Jury Defense',
    summary: 'Championship oratorical showdown with final speeches followed by instant, rigorous cross-examination by the Chief Jury Panel.',
    focusHighlights: [
      'Grand finale keynote addresses',
      'Instant cross-examination & jury questioning',
      'Holistic adjudication across all 8 criteria'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]',
    isEvaluationCheckpoint: true
  },
  {
    id: 'sch-d2-05',
    day: 'Day 2',
    track: 'Innovex',
    phaseOrStep: 'Step 07 (Championship)',
    title: 'Grand Impact Pitch & Live Jury Defense',
    summary: 'Finalist teams pitch their complete innovation journey, present working prototypes, and defend business and impact claims before the executive jury.',
    focusHighlights: [
      'Executive pitch deck delivery & prototype demonstration',
      'Rigorous defense of technical, financial, and impact claims',
      'Adjudication across 13 core INNOVEX criteria'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]',
    isEvaluationCheckpoint: true
  },
  {
    id: 'sch-d2-06',
    day: 'Day 2',
    track: 'All',
    phaseOrStep: 'Valedictory & Awards',
    title: 'Valedictory Ceremony, Award Announcements & Closing',
    summary: 'Joint symposium celebration, recognition of delegate achievements across both tracks, awards ceremony, and official conclusion.',
    focusHighlights: [
      'Chief Guest address & reflections',
      'Track 01 & Track 02 winner announcements',
      'Presentation of honors, certificates & valedictory closing'
    ],
    time: '[TIME TO BE PROVIDED]',
    venue: '[VENUE TO BE PROVIDED]'
  }
];

export const SCHEDULE_NOTICE = {
  headline: 'Detailed timings will be confirmed by the organizers.',
  description: 'ELOQVENT 2K26 is structured as a two-day symposium spanning both tracks. Specific session hour-by-hour allocations, report times, and break intervals will be published prior to event commencement.'
};
