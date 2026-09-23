import { InnovexJourneyStep } from '../types';

export interface TransformationArcStage {
  stage: string;
  label: string;
  tagline: string;
  steps: string[];
  color: string;
  accentVar: string;
}

export const TRANSFORMATION_ARC: TransformationArcStage[] = [
  {
    stage: '01',
    label: 'PROBLEM',
    tagline: 'Stakeholder Empathy & Problem Discovery',
    steps: ['01', '02'],
    color: 'var(--elocution-accent)',
    accentVar: '--elocution-accent'
  },
  {
    stage: '02',
    label: 'INSIGHT',
    tagline: 'First-Principles Root Cause Analysis',
    steps: ['03'],
    color: '#38bdf8',
    accentVar: '--elocution-accent'
  },
  {
    stage: '03',
    label: 'IDEA',
    tagline: 'Divergent & Convergent Concept Generation',
    steps: ['04'],
    color: '#a855f7',
    accentVar: '--accent-purple'
  },
  {
    stage: '04',
    label: 'SOLUTION',
    tagline: 'Frugal Prototyping & Business Modelling',
    steps: ['05', '06'],
    color: 'var(--innovex-accent)',
    accentVar: '--innovex-accent'
  },
  {
    stage: '05',
    label: 'IMPACT',
    tagline: 'Jury Defense & Scalable Social Uplift',
    steps: ['07'],
    color: '#34d399',
    accentVar: '--innovex-accent'
  }
];

export const INNOVEX_JOURNEY_STEPS: InnovexJourneyStep[] = [
  {
    step: '01',
    title: 'Understand People',
    tagline: 'Empathy Research & Stakeholder Immersion',
    description: 'Immerse deeply into the lived experiences of affected individuals and communities. Observe pain points without judgment, conduct stakeholder interviews, and construct comprehensive empathy maps.',
    keyActions: [
      'Conduct active listener interviews with frontline stakeholders',
      'Map user emotional journeys, bottlenecks, and daily frictions',
      'Document behavioral anomalies and unspoken contextual needs',
      'Avoid premature solution bias and premature conclusions'
    ],
    deliverable: 'Empathy Map & Stakeholder Persona Canvas',
    iconName: 'Users'
  },
  {
    step: '02',
    title: 'Discover the Problem',
    tagline: 'Symptom Mapping & Environmental Context',
    description: 'Separate superficial symptoms from underlying friction points. Gather contextual field data, assess environmental factors, and identify the systemic bottlenecks.',
    keyActions: [
      'Differentiate surface symptoms from structural constraints',
      'Gather qualitative field observations and quantitative baseline data',
      'Map the ecosystem of existing inadequate workarounds',
      'Define clear boundary conditions and scope of the challenge'
    ],
    deliverable: 'Contextual Problem Brief & Symptom Tree',
    iconName: 'Search'
  },
  {
    step: '03',
    title: 'Identify the Root Cause',
    tagline: 'First-Principles Deconstruction',
    description: 'Apply structured frameworks such as the 5-Whys, Ishikawa (Fishbone) diagrams, and causal loop modeling to uncover the core systemic failure driving the issue.',
    keyActions: [
      'Execute recursive 5-Whys root cause inquiries',
      'Construct Ishikawa causal taxonomy diagrams',
      'Identify high-leverage intervention points within the system',
      'Validate root cause hypotheses against lived stakeholder data'
    ],
    deliverable: 'Root Cause Synthesis & 5-Whys Matrix',
    iconName: 'GitMerge'
  },
  {
    step: '04',
    title: 'Ideate',
    tagline: 'Divergent & Convergent Brainstorming',
    description: 'Unleash cross-disciplinary creativity through structured ideation methods (SCAMPER, Crazy 8s, Biomimicry) before converging on the most feasible and high-impact interventions.',
    keyActions: [
      'Generate 30+ divergent intervention concepts across disciplines',
      'Formulate clear "How Might We" (HMW) design vectors',
      'Evaluate ideas on an Impact vs. Feasibility matrix',
      'Select the strongest hypothesis for rapid prototype testing'
    ],
    deliverable: 'HMW Matrix & Concept Prioritization Sheet',
    iconName: 'Lightbulb'
  },
  {
    step: '05',
    title: 'Develop a Solution',
    tagline: 'Frugal Prototyping & Value Proposition',
    description: 'Transform prioritized ideas into functional prototypes, architectural blueprints, or service blueprints. Clearly define the unique value proposition and user feedback loop.',
    keyActions: [
      'Build low/medium fidelity prototype or service workflow',
      'Articulate a sharp, differentiated Value Proposition',
      'Simulate end-user interaction and operational loops',
      'Incorporate peer and mentor feedback for iterative refinement'
    ],
    deliverable: 'Solution Prototype / Architecture Blueprint & Value Prop Canvas',
    iconName: 'Cpu'
  },
  {
    step: '06',
    title: 'Build a Sustainable Model',
    tagline: 'Business Modelling, Unit Economics & Scalability',
    description: 'Architect a self-sustaining financial and operational model. Detail revenue mechanisms, cost structures, supply chain requirements, and long-term environmental stewardship.',
    keyActions: [
      'Construct a comprehensive Lean Social Business Model Canvas',
      'Calculate realistic unit economics and breakeven pathway',
      'Evaluate operational, regulatory, and ecological risk factors',
      'Formulate a 3-year phased scalability and distribution roadmap'
    ],
    deliverable: 'Social Business Model Canvas & Financial Viability Model',
    iconName: 'BarChart3'
  },
  {
    step: '07',
    title: 'Pitch for Impact',
    tagline: 'Persuasive Storytelling & Grand Jury Defense',
    description: 'Synthesize the entire human-centred innovation journey into a gripping, rigorous, and visually striking presentation. Defend technical, financial, and societal claims before expert juries.',
    keyActions: [
      'Craft a narrative arc connecting human pain to final impact',
      'Demonstrate prototype functionality and validation evidence',
      'Answer critical jury interrogations with composure and data',
      'Communicate an inspiring vision for scalable societal uplift'
    ],
    deliverable: 'Executive Pitch Deck & Live Prototype Demonstration',
    iconName: 'Trophy'
  }
];

export const JOURNEY_OUTCOMES = [
  {
    title: 'A Clearly Understood Problem',
    description: 'A deeply researched and validated societal challenge grounded in first-principles root cause analysis, not superficial assumptions.'
  },
  {
    title: 'A Developed & Tested Solution',
    description: 'A tangible functional prototype, service blueprint, or technical architecture designed for real-world contextual constraints.'
  },
  {
    title: 'A Sustainable Business Model',
    description: 'A Lean Social Business Canvas with clear value proposition, unit economics, distribution mechanisms, and long-term viability.'
  },
  {
    title: 'Measurable Social Impact',
    description: 'Direct alignment with United Nations Sustainable Development Goals and demonstrable positive delta on community welfare.'
  },
  {
    title: 'Expert Jury Defense',
    description: 'Rigorous verbal, technical, and strategic defense of all project deliverables before leading industry scholars and investors.'
  }
];
