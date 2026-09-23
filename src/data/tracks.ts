export interface TrackInfo {
  id: 'elocution' | 'innovex';
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  badge: string;
  accentVar: string;
  accentColor: string;
  path: string;
  format: string;
  focus: string;
  outcomes: string[];
}

export const TRACKS_DATA: Record<'elocution' | 'innovex', TrackInfo> = {
  elocution: {
    id: 'elocution',
    title: 'ELOCUTION',
    subtitle: 'Communication & Expression',
    tagline: 'Articulate. Argue. Inspire.',
    description: 'A multi-phase oratorical journey honing rhetorical clarity, critical debate, spontaneous articulation, and the power of persuasive discourse.',
    badge: 'TRACK 01',
    accentVar: '--elocution-accent',
    accentColor: '#38bdf8',
    path: '/elocution',
    format: 'Individual Participation',
    focus: 'Speechcraft, dialectics, critical inquiry, and stage command',
    outcomes: [
      'Mastery of oratorical pacing and projection',
      'First-principles critical reasoning and debate agility',
      'Compelling persuasive rhetoric and audience engagement'
    ]
  },
  innovex: {
    id: 'innovex',
    title: 'INNOVEX',
    subtitle: 'Human-Centred Innovation & Social Impact',
    tagline: 'Empathize. Prototype. Scale.',
    description: 'A 7-step innovation sprint where delegates investigate pressing societal challenges, isolate root causes, engineer frugal prototypes, and formulate sustainable business models.',
    badge: 'TRACK 02',
    accentVar: '--innovex-accent',
    accentColor: '#10b981',
    path: '/innovex',
    format: 'Individual or Team (1–4 Members)',
    focus: 'Empathy research, root cause analysis, prototyping, and social venture sustainability',
    outcomes: [
      'Stakeholder-grounded problem discovery',
      'Frugal prototype and architecture formulation',
      'Sustainable Lean Social Business Model Canvas'
    ]
  }
};
