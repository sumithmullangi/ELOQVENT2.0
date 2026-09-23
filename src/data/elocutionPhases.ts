import { ElocutionPhase } from '../types';

export interface ElocutionProgressionStage {
  stage: string;
  label: string;
  phaseNumber: number;
  tagline: string;
  day: 'Day 1' | 'Day 2';
  isCheckpoint?: boolean;
}

export const ELOCUTION_PROGRESSION_ARC: ElocutionProgressionStage[] = [
  { stage: '01', label: 'ORIENT', phaseNumber: 1, tagline: 'Inauguration & Governance Foundations', day: 'Day 1' },
  { stage: '02', label: 'EXPRESS', phaseNumber: 2, tagline: 'Spontaneous Speaking & JAM Drills', day: 'Day 1' },
  { stage: '03', label: 'ARGUE', phaseNumber: 3, tagline: 'Structured Dialectics & Debate Practice', day: 'Day 1' },
  { stage: '04', label: 'EVALUATE', phaseNumber: 4, tagline: 'Formal Day 1 Jury Adjudication', day: 'Day 1', isCheckpoint: true },
  { stage: '05', label: 'ENHANCE', phaseNumber: 5, tagline: 'Mastery & Advanced Narrative Building', day: 'Day 2' },
  { stage: '06', label: 'PERFORM', phaseNumber: 6, tagline: 'Grand Finale Keynote & Jury Defense', day: 'Day 2' }
];

export const ELOCUTION_SKILLS = [
  {
    num: '01',
    title: 'Public Speaking',
    subtitle: 'Stage Command & Vocal Dynamics',
    description: 'Commanding the auditorium with projection, poise, pacing, eye contact, and authentic audience connection.',
    iconName: 'Mic'
  },
  {
    num: '02',
    title: 'Articulation',
    subtitle: 'Clarity in Complex Subject Matter',
    description: 'Structuring complex policy, ethical, and socio-economic concepts into clear, precise, and resonant verbal expressions.',
    iconName: 'Sparkles'
  },
  {
    num: '03',
    title: 'Critical Thinking',
    subtitle: 'First-Principles Motion Analysis',
    description: 'Deconstructing contemporary themes, analyzing underlying assumptions, and formulating evidence-backed premises.',
    iconName: 'Brain'
  },
  {
    num: '04',
    title: 'Debate & Rebuttal',
    subtitle: 'Agile Dialectics & Cross-Examination',
    description: 'Engaging in rigorous, civil, and fact-grounded intellectual exchanges under strict time pressure and counter-arguments.',
    iconName: 'Scale'
  },
  {
    num: '05',
    title: 'Storytelling',
    subtitle: 'Narrative Arcs & Emotional Resonance',
    description: 'Weaving data, human emotion, and real-world case studies into memorable, persuasive narrative structures.',
    iconName: 'BookOpen'
  },
  {
    num: '06',
    title: 'Persuasive Communication',
    subtitle: 'Action-Oriented Calls to Action',
    description: 'Crafting compelling appeals that inspire mindset shifts, mobilize stakeholders, and champion sustainable reform.',
    iconName: 'Flame'
  }
];

export const ELOCUTION_PHASES: ElocutionPhase[] = [
  {
    phase: 1,
    title: 'Inauguration & Thematic Orientation',
    day: 'Day 1',
    objective: 'Establish the intellectual and ethical grounding of the track through formal inauguration and expert address.',
    format: 'Plenary briefing, track orientation, and thematic keynote on public administration, civic responsibility, and inclusive governance frameworks.',
    evaluationFocus: ['Understanding of themes', 'Briefing adherence', 'Readiness assessment'],
    duration: '[TIME TO BE PROVIDED]'
  },
  {
    phase: 2,
    title: 'Interactive Expression Development',
    day: 'Day 1',
    objective: 'Develop spontaneous thinking, rapid perspective framing, and vocal projection.',
    format: 'Individual extempore rounds, Just-A-Minute (JAM) sessions, thematic debate prompts, and guided group discussions.',
    evaluationFocus: ['Clarity of thought', 'Vocal modulation & articulation', 'Perspective formation & spontaneity'],
    duration: '[TIME TO BE PROVIDED]'
  },
  {
    phase: 3,
    title: 'Structured Debate & Communication Practice',
    day: 'Day 1',
    objective: 'Engage in formal dialectical argumentation, motion defense, and timed rebuttal drills.',
    format: 'Formal parliamentary and structured debate exercises on contemporary socio-political, ethical, and technological motions.',
    evaluationFocus: ['Logical reasoning', 'Argument structuring & transitions', 'Rebuttal agility & civility'],
    duration: '[TIME TO BE PROVIDED]'
  },
  {
    phase: 4,
    title: 'Day 1 Evaluation',
    day: 'Day 1',
    objective: 'Formal debate-based assessment by distinguished jury to evaluate cumulative Day 1 competence and select finalists.',
    format: 'Rigorous jury evaluation round followed by constructive feedback scorecards and Day 2 qualifier announcements.',
    evaluationFocus: [
      'Communication effectiveness',
      'Critical thinking depth',
      'Articulation & argument structure',
      'Confidence & stage presence'
    ],
    duration: '[TIME TO BE PROVIDED]'
  },
  {
    phase: 5,
    title: 'Advanced Communication Enhancement',
    day: 'Day 2',
    objective: 'Refine presentation technique, narrative construction, and high-impact audience engagement.',
    format: 'Expert-led masterclass and preparatory rehearsal focusing on storytelling arcs, rhetoric, and policy analysis.',
    evaluationFocus: ['Narrative depth', 'Rhetorical mastery', 'Emotional resonance & pacing'],
    duration: '[TIME TO BE PROVIDED]'
  },
  {
    phase: 6,
    title: 'Final Elocution Assessment',
    day: 'Day 2',
    objective: 'Grand championship finale where qualifying orators deliver prepared keynotes and defend against live jury questioning.',
    format: 'Final stage oration, unexpected jury interrogation questions, and championship adjudication.',
    evaluationFocus: [
      'Stage mastery & poise',
      'Handling rigorous Q&A cross-examination',
      'Overall persuasiveness & lasting impact'
    ],
    duration: '[TIME TO BE PROVIDED]'
  }
];
