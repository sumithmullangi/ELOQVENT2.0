export interface EvaluationCriterion {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  keyIndicators: string[];
  track: 'elocution' | 'innovex';
}

export const ELOCUTION_EVALUATION_CRITERIA: EvaluationCriterion[] = [
  {
    id: 'elo-eval-1',
    number: '01',
    name: 'Communication Effectiveness',
    category: 'Delivery & Expression',
    description: 'Command of the oratorical stage, vocal projection, pacing, and the ability to convey complex ideas with clarity and engagement.',
    keyIndicators: ['Vocal modulation and projection', 'Pacing and deliberate pause control', 'Audience and jury connection'],
    track: 'elocution'
  },
  {
    id: 'elo-eval-2',
    number: '02',
    name: 'Critical Thinking',
    category: 'Analytical Rigor',
    description: 'Analytical depth in deconstructing contemporary topics, examining underlying nuances, evaluating counter-arguments, and avoiding superficial generalizations.',
    keyIndicators: ['Multi-perspective deconstruction', 'Independent analytical insight', 'Nuanced understanding of societal trade-offs'],
    track: 'elocution'
  },
  {
    id: 'elo-eval-3',
    number: '03',
    name: 'Articulation',
    category: 'Linguistic Mastery',
    description: 'Precision of language, enunciation, lexical choice, and the ability to formulate concise, elegant, and resonant verbal expressions.',
    keyIndicators: ['Precision of vocabulary and syntax', 'Clear enunciation and diction', 'Linguistic sophistication without ambiguity'],
    track: 'elocution'
  },
  {
    id: 'elo-eval-4',
    number: '04',
    name: 'Argument Structure',
    category: 'Rhetorical Architecture',
    description: 'Logical coherence of the speech from introductory hook and thesis statement through evidence-backed development to a definitive conclusion.',
    keyIndicators: ['Logical transitions between premises', 'Coherent evidentiary backing', 'Structured thematic synthesis'],
    track: 'elocution'
  },
  {
    id: 'elo-eval-5',
    number: '05',
    name: 'Confidence',
    category: 'Stage Presence',
    description: 'Poise, posture, eye contact, and emotional composure when commanding the podium and responding to instant jury questioning.',
    keyIndicators: ['Stage presence and posture', 'Composure during cross-examination', 'Non-verbal communication & eye contact'],
    track: 'elocution'
  },
  {
    id: 'elo-eval-6',
    number: '06',
    name: 'Clarity',
    category: 'Message Definition',
    description: 'Unambiguous formulation of core thesis points, transparent logic, and ease of audience comprehension without rhetorical clutter.',
    keyIndicators: ['Unambiguous thesis statement', 'Direct and lucid reasoning', 'Clarity of core takeaway'],
    track: 'elocution'
  },
  {
    id: 'elo-eval-7',
    number: '07',
    name: 'Persuasive Ability',
    category: 'Rhetorical Impact',
    description: 'Strategic use of rhetoric, evidence, ethical appeals, and emotional resonance to shift perspectives and compel listeners.',
    keyIndicators: ['Rhetorical impact and appeal', 'Compelling call-to-action', 'Constructive dialectical defense'],
    track: 'elocution'
  },
  {
    id: 'elo-eval-8',
    number: '08',
    name: 'Overall Impact',
    category: 'Holistic Impression',
    description: 'The holistic memorability of the address, transformative resonance of the discourse, and enduring impression left on the panel.',
    keyIndicators: ['Memorability of discourse', 'Inspirational delivery', 'Holistic excellence'],
    track: 'elocution'
  }
];

export const INNOVEX_EVALUATION_CRITERIA: EvaluationCriterion[] = [
  {
    id: 'inn-eval-1',
    number: '01',
    name: 'Problem Understanding',
    category: 'Context & Grounding',
    description: 'Depth of understanding of the targeted real-world societal challenge, its surrounding constraints, and systemic realities.',
    keyIndicators: ['Contextual understanding of the challenge', 'Clear scope and boundary definitions', 'Awareness of institutional blindspots'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-2',
    number: '02',
    name: 'Depth of Research',
    category: 'Context & Grounding',
    description: 'Thoroughness of empirical field observations, qualitative stakeholder interactions, and background investigation.',
    keyIndicators: ['Quality of field observations', 'Engagement with affected groups', 'Documentation of existing workarounds'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-3',
    number: '03',
    name: 'Identification of Root Cause',
    category: 'Analytical Rigor',
    description: 'Application of first-principles analysis (5-Whys, causal loop mapping) to separate superficial symptoms from structural failures.',
    keyIndicators: ['Distinction between symptom and cause', 'Systemic causal chain mapping', 'Identification of high-leverage intervention points'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-4',
    number: '04',
    name: 'Human-Centred Approach',
    category: 'Empathy & Immersion',
    description: 'Centering the genuine needs, lived friction points, and perspectives of target users and stakeholders throughout the process.',
    keyIndicators: ['Empathy mapping and persona clarity', 'Stakeholder-informed design choices', 'Avoidance of premature solution bias'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-5',
    number: '05',
    name: 'Innovation',
    category: 'Solution Architecture',
    description: 'Originality, creative novelty, and ingenuity of the proposed concept in addressing systemic challenges.',
    keyIndicators: ['Novelty of approach vs legacy systems', 'Frugal and inventive problem-solving', 'Creative integration of methods'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-6',
    number: '06',
    name: 'Solution Quality',
    category: 'Solution Architecture',
    description: 'Practicality, architectural soundness, and clarity of the prototype, service blueprint, or technical workflow.',
    keyIndicators: ['Robustness of prototype / blueprint', 'Clear operational workflow', 'Clarity of functional components'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-7',
    number: '07',
    name: 'Feasibility',
    category: 'Viability & Implementation',
    description: 'Realistic implementability considering technical, regulatory, infrastructural, and operational constraints.',
    keyIndicators: ['Technical feasibility in target setting', 'Operational requirements clarity', 'Risk mitigation awareness'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-8',
    number: '08',
    name: 'Value Proposition',
    category: 'Viability & Implementation',
    description: 'Clear articulation of the unique benefit, friction relief, and value created for the intended beneficiaries.',
    keyIndicators: ['Problem-solution fit', 'Clear beneficiary value articulation', 'Differentiation from existing options'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-9',
    number: '09',
    name: 'Business Model',
    category: 'Viability & Implementation',
    description: 'Viability of the operational model, distribution channels, cost structure, and self-sufficient revenue or cost-recovery logic.',
    keyIndicators: ['Lean business canvas logic', 'Realistic unit economics', 'Operational channel mapping'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-10',
    number: '10',
    name: 'Sustainability',
    category: 'Impact & Scalability',
    description: 'Long-term financial, operational, and ecological resilience, including circular and environmentally conscious principles.',
    keyIndicators: ['Circular / environmental stewardship', 'Financial self-sufficiency path', 'Resilience of resource model'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-11',
    number: '11',
    name: 'Scalability',
    category: 'Impact & Scalability',
    description: 'Potential for geographic expansion, demographic replication, or systemic scaling across diverse communities.',
    keyIndicators: ['Phased scaling roadmap', 'Replicability across communities', 'Ecosystem partnership potential'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-12',
    number: '12',
    name: 'Social Impact',
    category: 'Impact & Scalability',
    description: 'Measurable positive change in community well-being and alignment with UN Sustainable Development Goals.',
    keyIndicators: ['UN SDG alignment', 'Measurable beneficiary impact metrics', 'Long-term societal contribution'],
    track: 'innovex'
  },
  {
    id: 'inn-eval-13',
    number: '13',
    name: 'Quality of Presentation',
    category: 'Defense & Synthesis',
    description: 'Narrative clarity, quality of demonstration, and composure during cross-examination by the expert jury panel.',
    keyIndicators: ['Narrative coherence & pitch clarity', 'Effective demonstration of deliverables', 'Composure during jury defense'],
    track: 'innovex'
  }
];

export const EVALUATION_NOTICE = {
  headline: 'Detailed scoring weights will be published by the organizers.',
  description: 'ELOQVENT 2K26 utilizes multi-dimensional, track-specific evaluation frameworks. While the official qualitative assessment dimensions are fully established below, numerical weightages and point distributions remain pending formal announcement.'
};
