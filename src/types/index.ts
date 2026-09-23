export type TrackType = 'elocution' | 'innovex';

export interface TrackPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface InnovexTheme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  iconName: string;
  tag: string;
}

export interface InnovexJourneyStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  keyActions: string[];
  deliverable: string;
  iconName: string;
}

export interface ElocutionPhase {
  phase: number;
  title: string;
  day: 'Day 1' | 'Day 2';
  objective: string;
  format: string;
  evaluationFocus: string[];
  duration: string;
}

export interface EvaluationCriterion {
  category: string;
  description: string;
  keyIndicators: string[];
  weightage: string; // e.g., "[SCORING DETAILS — TO BE PROVIDED]"
}

export interface ScheduleItem {
  id: string;
  day: 'Day 1' | 'Day 2';
  time: string; // "[TIME TO BE PROVIDED]" or designated timeline
  title: string;
  phaseOrStep?: string;
  track: 'All' | 'Elocution' | 'Innovex';
  venue: string; // "[VENUE TO BE PROVIDED]"
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Elocution' | 'Innovex' | 'Registration & Eligibility' | 'Evaluation & Awards';
}

export interface RegistrationTeamMember {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  institution?: string;
}

export interface RegistrationFormData {
  track: 'elocution' | 'innovex';
  participantType: 'individual' | 'team';
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  department: string;
  yearOfStudy: string;
  teamName?: string;
  teamMembers?: RegistrationTeamMember[];
  selectedTheme?: string;
  problemStatementIdea?: string;
  optionalMessage?: string;
  agreeToCodeOfConduct: boolean;
}

export interface SubmissionResponse {
  referenceId?: string;
  timestamp: string;
  status: 'SUCCESS' | 'ERROR' | 'NOT_CONFIGURED';
  track: string;
  participantName: string;
  teamName?: string;
  email: string;
  message: string;
}

