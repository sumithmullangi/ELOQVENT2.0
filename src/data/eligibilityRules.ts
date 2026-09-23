export interface EligibilityRule {
  id: string;
  category: string;
  title: string;
  requirement: string;
  iconName: string;
  mandatory: boolean;
}

export const ELIGIBILITY_CRITERIA: EligibilityRule[] = [
  {
    id: 'el-1',
    category: 'Academic Enrollment',
    title: 'Active Student Status',
    requirement: 'Must be a bona fide student actively enrolled in an accredited undergraduate (UG), postgraduate (PG), or diploma program at a recognized collegiate institution.',
    iconName: 'GraduationCap',
    mandatory: true
  },
  {
    id: 'el-2',
    category: 'Identification',
    title: 'Valid Institutional ID',
    requirement: 'Must carry a valid college/university identification card or formal authorization letter from the institution head for on-site accreditation.',
    iconName: 'ShieldCheck',
    mandatory: true
  },
  {
    id: 'el-3',
    category: 'Team Composition (Innovex)',
    title: 'Innovex Team Structure',
    requirement: 'Innovex teams may consist of 1 to 4 members. Inter-departmental and inter-disciplinary teams from the same institution are encouraged. Cross-institutional teams are [TO BE PROVIDED].',
    iconName: 'Users',
    mandatory: true
  },
  {
    id: 'el-4',
    category: 'Individual Format (Elocution)',
    title: 'Elocution Individual Entry',
    requirement: 'Elocution is strictly an individual participant track. Substitutions after Phase 1 orientation will not be permitted.',
    iconName: 'UserCheck',
    mandatory: true
  },
  {
    id: 'el-5',
    category: 'Intellectual Integrity',
    title: 'Originality & Academic Integrity',
    requirement: 'All speeches, problem statements, and prototype architectures must be original work created by the participant(s). Plagiarism results in immediate disqualification.',
    iconName: 'Sparkles',
    mandatory: true
  },
  {
    id: 'el-6',
    category: 'Code of Conduct',
    title: 'Civil Discourse & Respect',
    requirement: 'Strict adherence to professional decorum, constructive debate etiquette, and inclusive collegiate conduct throughout all stages.',
    iconName: 'Scale',
    mandatory: true
  }
];

export const CODE_OF_CONDUCT = [
  'Zero tolerance for hate speech, harassment, discrimination, or personal attacks in elocution speeches and debate rounds.',
  'Respect for jury decisions and peer participants across all evaluation stages.',
  'Punctual attendance at all mandatory track briefings, orientation assemblies, and evaluation sessions.',
  'Fair play during ideation and prototyping without unauthorized external interference.',
  'Adherence to campus safety, laboratory, and venue protocols.'
];
