export interface EligibilityItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string;
  iconName: string;
}

export const OFFICIAL_ELIGIBILITY_CRITERIA: EligibilityItem[] = [
  {
    id: 'elig-academic-year',
    category: 'Academic Cohort',
    title: 'First and Second-Year Undergraduates',
    summary: 'Open exclusively to 1st and 2nd year undergraduate (UG) students.',
    details: 'Participants must be actively enrolled in the first or second year of an accredited undergraduate degree program.',
    iconName: 'GraduationCap'
  },
  {
    id: 'elig-institutions',
    category: 'Institutional Affiliation',
    title: 'Recognized Colleges & Universities',
    summary: 'Students enrolled in recognized collegiate institutions.',
    details: 'Open to students affiliated with recognized universities, deemed universities, autonomous institutions, and affiliated colleges.',
    iconName: 'Building2'
  },
  {
    id: 'elig-disciplines',
    category: 'Academic Disciplines',
    title: 'Engineering, Technology & Management',
    summary: 'Students pursuing Engineering, Technology, and Management degrees.',
    details: 'Covers all sub-disciplines and specializations across undergraduate engineering, technology, computing, and management faculties.',
    iconName: 'Compass'
  },
  {
    id: 'elig-geographic-scope',
    category: 'Regional Participation',
    title: 'State & Nearby Regions',
    summary: 'Collegiate institutions within the state and neighboring regions.',
    details: 'Regional-level participation inviting delegates from colleges and universities within the host state and surrounding regional zones.',
    iconName: 'MapPin'
  },
  {
    id: 'elig-participation-format',
    category: 'Participation Format',
    title: 'Individual & Team Formats',
    summary: 'Individual or team participation is permitted by track.',
    details: 'ELOCUTION is an individual oratorical track. INNOVEX accommodates both individual delegates and collaborative teams. (Specific team size limits: [TO BE PROVIDED]).',
    iconName: 'Users'
  },
  {
    id: 'elig-student-ecosystems',
    category: 'Student Ecosystems',
    title: 'Societies, Innovation Cells & Student Bodies',
    summary: 'Participation may involve recognized student organizations.',
    details: 'Delegates may represent or be nominated through technical societies, innovation cells, entrepreneurship clubs, or related collegiate bodies.',
    iconName: 'Sparkles'
  },
  {
    id: 'elig-identification',
    category: 'Verification',
    title: 'Valid Institutional Identification',
    summary: 'Collegiate ID card or institutional authorization required.',
    details: 'Delegates must present a valid college-issued student identity card or formal bonafide letter for on-site credentialing.',
    iconName: 'ShieldCheck'
  }
];

export const ELIGIBILITY_PENDING_SPECS = [
  {
    label: 'Registration Fee',
    placeholder: 'REGISTRATION FEE: [TO BE PROVIDED]',
    note: 'Official fee policy and sponsorship subsidies to be published by organizers.'
  },
  {
    label: 'Team Size Limits',
    placeholder: 'TEAM SIZE: [TO BE PROVIDED]',
    note: 'Individual or team participation is permitted. Exact minimum and maximum team sizes will be confirmed.'
  },
  {
    label: 'Registration Deadline',
    placeholder: 'REGISTRATION DEADLINE: [TO BE PROVIDED]',
    note: 'Registration milestones and portal closing dates to be announced.'
  }
];

export const QUICK_ELIGIBILITY_CHECKS = [
  {
    question: 'Are you a 1st or 2nd year undergraduate student?',
    expectedAnswer: 'Yes (1st & 2nd Year UG)',
    valid: true
  },
  {
    question: 'Are you studying Engineering, Technology, or Management?',
    expectedAnswer: 'Yes (Engg / Tech / Mgmt)',
    valid: true
  },
  {
    question: 'Is your institution a recognized college/university in the region?',
    expectedAnswer: 'Yes (Recognized College/Univ)',
    valid: true
  },
  {
    question: 'Can you provide a valid college ID or bonafide letter?',
    expectedAnswer: 'Yes (Valid ID / Authorization)',
    valid: true
  }
];
