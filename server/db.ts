import fs from 'fs';
import path from 'path';

export interface StoredTeamMember {
  fullName: string;
  email: string;
  phone?: string;
  college?: string;
  degree?: string;
  yearOfStudy?: string;
}

export interface StoredRegistration {
  id: string;
  referenceId: string;
  track: 'elocution' | 'innovex' | 'both';
  participantType: 'individual' | 'team';
  teamName?: string;
  primaryParticipant: {
    fullName: string;
    email: string;
    phone: string;
    college: string;
    degree: string;
    yearOfStudy: string;
    studentId?: string;
  };
  teamMembers: StoredTeamMember[];
  selectedTheme?: string;
  problemStatementIdea?: string;
  howDidYouHear: string;
  createdAt: string;
}

export interface StoredInquiry {
  id: string;
  name: string;
  email: string;
  category: string;
  message: string;
  createdAt: string;
}

interface DatabaseSchema {
  registrations: StoredRegistration[];
  inquiries: StoredInquiry[];
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'eloqvent_store.json');

// Initialize database directory and file
function initDB(): DatabaseSchema {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    const initialData: DatabaseSchema = {
      registrations: [],
      inquiries: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
    return initialData;
  }

  try {
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (e) {
    const initialData: DatabaseSchema = { registrations: [], inquiries: [] };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
    return initialData;
  }
}

function saveDB(data: DatabaseSchema) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export const db = {
  // Check if primary email is already registered for track
  checkEmailExists(email: string, track: string): boolean {
    const data = initDB();
    const normalizedEmail = email.toLowerCase().trim();
    return data.registrations.some(
      (r) => r.primaryParticipant.email.toLowerCase().trim() === normalizedEmail && (r.track === track || track === 'both')
    );
  },

  // Save new registration
  createRegistration(payload: Omit<StoredRegistration, 'id' | 'createdAt'>): StoredRegistration {
    const data = initDB();
    const newRecord: StoredRegistration = {
      ...payload,
      id: `reg_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      createdAt: new Date().toISOString()
    };

    data.registrations.unshift(newRecord);
    saveDB(data);
    return newRecord;
  },

  // Lookup by reference code
  getRegistrationByRef(refId: string): StoredRegistration | undefined {
    const data = initDB();
    const normalized = refId.toUpperCase().trim();
    return data.registrations.find((r) => r.referenceId.toUpperCase() === normalized);
  },

  // Get all registrations with optional query/filters
  getAllRegistrations(search?: string, trackFilter?: string): StoredRegistration[] {
    const data = initDB();
    let results = data.registrations;

    if (trackFilter && trackFilter !== 'all') {
      results = results.filter((r) => r.track === trackFilter);
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      results = results.filter((r) => {
        const lead = r.primaryParticipant;
        const inLead = lead.fullName.toLowerCase().includes(q) || 
                       lead.email.toLowerCase().includes(q) || 
                       lead.college.toLowerCase().includes(q);
        const inRef = r.referenceId.toLowerCase().includes(q);
        const inTeam = r.teamName?.toLowerCase().includes(q);
        return inLead || inRef || inTeam;
      });
    }

    return results;
  },

  // Get aggregate stats
  getStats() {
    const data = initDB();
    const total = data.registrations.length;
    const elocutionCount = data.registrations.filter((r) => r.track === 'elocution').length;
    const innovexCount = data.registrations.filter((r) => r.track === 'innovex').length;
    const bothCount = data.registrations.filter((r) => r.track === 'both').length;
    const teamsCount = data.registrations.filter((r) => r.participantType === 'team').length;
    const totalInquiries = data.inquiries.length;

    return {
      totalRegistrations: total,
      elocutionCount,
      innovexCount,
      bothCount,
      teamsCount,
      totalInquiries
    };
  },

  // Record contact inquiry
  createInquiry(name: string, email: string, category: string, message: string): StoredInquiry {
    const data = initDB();
    const newInquiry: StoredInquiry = {
      id: `inq_${Date.now()}`,
      name,
      email,
      category,
      message,
      createdAt: new Date().toISOString()
    };

    data.inquiries.unshift(newInquiry);
    saveDB(data);
    return newInquiry;
  },

  // Get all inquiries
  getAllInquiries(): StoredInquiry[] {
    const data = initDB();
    return data.inquiries;
  },

  // Export registrations to CSV format string
  exportToCSV(): string {
    const data = initDB();
    const headers = [
      'Reference ID',
      'Registration Date',
      'Track',
      'Format',
      'Team Name',
      'Lead Name',
      'Lead Email',
      'Lead Phone',
      'College / University',
      'Degree',
      'Year of Study',
      'Theme / Topic',
      'Team Members Count',
      'Team Members List'
    ];

    const rows = data.registrations.map((r) => {
      const p = r.primaryParticipant;
      const memberNames = r.teamMembers.map((m) => `${m.fullName} (${m.email})`).join('; ');

      return [
        `"${r.referenceId}"`,
        `"${new Date(r.createdAt).toLocaleString()}"`,
        `"${r.track.toUpperCase()}"`,
        `"${r.participantType.toUpperCase()}"`,
        `"${r.teamName || 'N/A'}"`,
        `"${p.fullName}"`,
        `"${p.email}"`,
        `"${p.phone}"`,
        `"${p.college}"`,
        `"${p.degree}"`,
        `"${p.yearOfStudy}"`,
        `"${r.selectedTheme || r.problemStatementIdea || 'N/A'}"`,
        `"${r.teamMembers.length}"`,
        `"${memberNames || 'None'}"`
      ].join(',');
    });

    return [headers.join(','), ...rows].join('\n');
  }
};
