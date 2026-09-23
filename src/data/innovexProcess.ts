import { InnovexTheme } from '../types';

export const INNOVEX_THEMES: InnovexTheme[] = [
  {
    id: 'healthcare',
    title: 'Healthcare and Well-being',
    subtitle: 'Preventative, accessible & equitable health systems',
    description: 'Transforming community healthcare delivery, mental well-being, preventative diagnostics, and affordable medical access through human-centred innovations.',
    focusAreas: [
      'Last-mile medical distribution',
      'Affordable point-of-care diagnostics',
      'Mental health and community support systems',
      'Assistive technologies for differently-abled individuals',
      'Preventative health & maternal-child nutrition'
    ],
    iconName: 'HeartPulse',
    tag: 'Theme 01'
  },
  {
    id: 'agriculture',
    title: 'Smart and Sustainable Agriculture',
    subtitle: 'Resilient farming, soil health & farmer prosperity',
    description: 'Empowering smallholder farmers, reducing post-harvest losses, optimizing irrigation, and restoring agrarian ecosystems with frugal and intelligent technologies.',
    focusAreas: [
      'Precision water & soil management',
      'Frugal post-harvest storage & cold-chain access',
      'Fair-price discovery & supply chain transparency',
      'Regenerative farming and organic pest control',
      'Climate-resilient crop planning systems'
    ],
    iconName: 'Sprout',
    tag: 'Theme 02'
  },
  {
    id: 'water-sanitation',
    title: 'Water and Sanitation',
    subtitle: 'Clean water security, hygiene & watershed conservation',
    description: 'Tackling clean drinking water scarcity, decentralized greywater recycling, urban sewage treatment, and hygienic sanitation infrastructure.',
    focusAreas: [
      'Low-cost decentralized water purification',
      'Groundwater recharge & watershed preservation',
      'Smart leakage detection in municipal lines',
      'Dignified and sustainable public sanitation systems',
      'Industrial wastewater remediation'
    ],
    iconName: 'Droplets',
    tag: 'Theme 03'
  },
  {
    id: 'waste-circularity',
    title: 'Waste Management and Circular Economy',
    subtitle: 'Zero waste, upcycling & closed-loop resource systems',
    description: 'Re-architecting waste streams into secondary raw materials, eliminating single-use plastics, optimizing e-waste recovery, and creating circular community economies.',
    focusAreas: [
      'Automated or community-led waste segregation',
      'Circular upcycling of agricultural & textile waste',
      'Safe collection and disassembly of electronic waste',
      'Biodegradable packaging and polymer substitutes',
      'Urban composting and biogas conversion'
    ],
    iconName: 'Recycle',
    tag: 'Theme 04'
  },
  {
    id: 'education-learning',
    title: 'Education and Inclusive Learning',
    subtitle: 'Equal opportunity, skill acquisition & lifelong literacy',
    description: 'Democratizing quality education for underprivileged learners, neurodiverse students, rural classrooms, and vocational skilling in emerging industries.',
    focusAreas: [
      'Offline-first interactive digital learning tools',
      'Vernacular language STEM education aids',
      'Inclusive toolkits for neurodivergent learners',
      'Vocational micro-skilling and livelihood linking',
      'Gamified pedagogical resources for rural schools'
    ],
    iconName: 'GraduationCap',
    tag: 'Theme 05'
  }
];

export interface ProcessStage {
  stageNumber: string;
  title: string;
  arcGroup: 'PROBLEM' | 'INSIGHT' | 'IDEA' | 'SOLUTION' | 'IMPACT';
  description: string;
  outputFocus: string;
}

export const INNOVEX_PROCESS_STAGES: ProcessStage[] = [
  {
    stageNumber: '01',
    title: 'Empathy Research',
    arcGroup: 'PROBLEM',
    description: 'Active stakeholder immersion, contextual field interviews, and user emotional journey mapping.',
    outputFocus: 'Empathy maps & lived pain point observations'
  },
  {
    stageNumber: '02',
    title: 'Root Cause Analysis',
    arcGroup: 'PROBLEM',
    description: 'Applying first-principles inquiry (5-Whys, Fishbone diagrams) to isolate structural failures.',
    outputFocus: 'Causal chain models & systemic leverage points'
  },
  {
    stageNumber: '03',
    title: 'Problem Definition',
    arcGroup: 'PROBLEM',
    description: 'Synthesizing field data into a focused, evidence-backed challenge statement.',
    outputFocus: 'Clear, scoped problem statement canvas'
  },
  {
    stageNumber: '04',
    title: 'Validated Insight',
    arcGroup: 'INSIGHT',
    description: 'Distilling core human and technical discoveries that unlock novel intervention angles.',
    outputFocus: 'Key insight hypotheses & "How Might We" vectors'
  },
  {
    stageNumber: '05',
    title: 'Ideation',
    arcGroup: 'IDEA',
    description: 'Cross-disciplinary divergent brainstorming followed by concept convergence.',
    outputFocus: '30+ candidate solutions & prioritization matrix'
  },
  {
    stageNumber: '06',
    title: 'Solution Development',
    arcGroup: 'SOLUTION',
    description: 'Architecting frugal physical prototypes, digital wireframes, or service workflows.',
    outputFocus: 'Functional prototype / architecture blueprint'
  },
  {
    stageNumber: '07',
    title: 'Value Proposition',
    arcGroup: 'SOLUTION',
    description: 'Validating distinct user benefits, friction relief, and competitive differentiation.',
    outputFocus: 'Value Proposition Canvas'
  },
  {
    stageNumber: '08',
    title: 'Business Model',
    arcGroup: 'SOLUTION',
    description: 'Formulating lean operational logic, partner networks, and cost/revenue structures.',
    outputFocus: 'Lean Social Business Canvas'
  },
  {
    stageNumber: '09',
    title: 'Sustainability & Scalability',
    arcGroup: 'SOLUTION',
    description: 'Designing for circular longevity, ecological resilience, and 3-year phased scaling.',
    outputFocus: 'Scalability roadmap & unit economics'
  },
  {
    stageNumber: '10',
    title: 'Social Impact',
    arcGroup: 'IMPACT',
    description: 'Aligning with UN Sustainable Development Goals for quantifiable positive change.',
    outputFocus: 'Impact metrics & beneficiary indicators'
  },
  {
    stageNumber: '11',
    title: 'Final Pitch',
    arcGroup: 'IMPACT',
    description: 'Synthesizing the complete journey into a compelling narrative for grand jury defense.',
    outputFocus: 'Executive pitch deck & live demonstration'
  }
];

export const ROOT_CAUSE_QUESTIONS = [
  {
    num: 'Q1',
    question: 'What is causing the problem?',
    context: 'Investigating systemic conditions rather than immediate superficial occurrences.'
  },
  {
    num: 'Q2',
    question: 'Why does the problem exist?',
    context: 'Tracing historical, economic, behavioural, and structural dependencies.'
  },
  {
    num: 'Q3',
    question: 'Who is affected?',
    context: 'Identifying primary end-users, secondary stakeholders, and vulnerable communities.'
  },
  {
    num: 'Q4',
    question: 'What are the existing gaps?',
    context: 'Auditing current inadequate workarounds and institutional blindspots.'
  },
  {
    num: 'Q5',
    question: 'What are the limitations of current solutions?',
    context: 'Evaluating why legacy interventions fail to scale or sustain impact.'
  },
  {
    num: 'Q6',
    question: 'Where are the opportunities for intervention?',
    context: 'Pinpointing high-leverage friction points suitable for frugal innovation.'
  }
];

export const WHAT_PARTICIPANTS_DEVELOP = [
  {
    title: 'Real-World Problem Discovery',
    desc: 'The capability to investigate complex community issues with deep stakeholder empathy rather than preconceived biases.'
  },
  {
    title: 'Root-Cause Analytical Rigor',
    desc: 'Structured first-principles frameworks (5-Whys, causal loop mapping) to separate surface symptoms from core drivers.'
  },
  {
    title: 'Frugal Prototype Architecture',
    desc: 'Transforming abstract concepts into tangible physical, digital, or service workflow prototypes.'
  },
  {
    title: 'Sustainable Business Modelling',
    desc: 'Formulating Lean Social Canvas models with clear unit economics, distribution mechanisms, and financial viability.'
  },
  {
    title: 'SDG & Social Impact Design',
    desc: 'Direct alignment with United Nations Sustainable Development Goals for enduring ecological and societal uplift.'
  },
  {
    title: 'Executive Jury Defense',
    desc: 'Presenting and defending technical, operational, and financial claims before expert panels of scholars and investors.'
  }
];
