import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/common/Button';
import { PlaceholderTag } from '../components/common/PlaceholderTag';
import { 
  Users, 
  Download, 
  Search, 
  RefreshCw, 
  Mic, 
  Lightbulb, 
  MessageSquare, 
  ShieldCheck, 
  Eye, 
  CheckCircle2,
  Filter,
  FileSpreadsheet
} from 'lucide-react';

interface DelegateRecord {
  id: string;
  referenceId: string;
  track: string;
  participantType: string;
  teamName?: string;
  primaryParticipant: {
    fullName: string;
    email: string;
    phone: string;
    college: string;
    degree: string;
    yearOfStudy: string;
  };
  teamMembers: Array<{
    fullName: string;
    email: string;
  }>;
  selectedTheme?: string;
  problemStatementIdea?: string;
  createdAt: string;
}

interface InquiryRecord {
  id: string;
  name: string;
  email: string;
  category: string;
  message: string;
  createdAt: string;
}

export const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'registrations' | 'inquiries'>('registrations');
  const [registrations, setRegistrations] = useState<DelegateRecord[]>([]);
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [search, setSearch] = useState('');
  const [trackFilter, setTrackFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedDelegate, setSelectedDelegate] = useState<DelegateRecord | null>(null);

  const fetchData = async () => {
    setLoading(true);
    let combinedRegistrations: DelegateRecord[] = [];
    let combinedInquiries: InquiryRecord[] = [];

    // 1. Fetch from Server
    try {
      const queryParams = new URLSearchParams();
      if (search) queryParams.append('search', search);
      if (trackFilter !== 'all') queryParams.append('track', trackFilter);

      const regRes = await fetch(`http://localhost:5000/api/admin/registrations?${queryParams.toString()}`);
      if (regRes.ok) {
        const data = await regRes.json();
        if (data.registrations && Array.isArray(data.registrations)) {
          combinedRegistrations = [...data.registrations];
        }
      }

      const statsRes = await fetch('http://localhost:5000/api/register/meta/stats');
      if (statsRes.ok) {
        const data = await statsRes.json();
        setStats(data.stats);
      }

      const inqRes = await fetch('http://localhost:5000/api/admin/inquiries');
      if (inqRes.ok) {
        const data = await inqRes.json();
        if (data.inquiries && Array.isArray(data.inquiries)) {
          combinedInquiries = [...data.inquiries];
        }
      }
    } catch (error) {
      console.warn('Backend server note (local fallback active):', error);
    }

    // 2. Fetch from LocalStorage and SessionStorage
    try {
      const localRegsRaw = localStorage.getItem('eloqvent_all_registrations');
      if (localRegsRaw) {
        const localRegs: DelegateRecord[] = JSON.parse(localRegsRaw);
        localRegs.forEach((localR) => {
          if (!combinedRegistrations.some((r) => r.referenceId === localR.referenceId || r.id === localR.id)) {
            combinedRegistrations.push(localR);
          }
        });
      }

      // Check session registration pass
      const sessionRegRaw = sessionStorage.getItem('last_eloqvent_registration');
      if (sessionRegRaw) {
        const s = JSON.parse(sessionRegRaw);
        if (s.referenceId && !combinedRegistrations.some((r) => r.referenceId === s.referenceId)) {
          combinedRegistrations.unshift({
            id: `session_${s.referenceId}`,
            referenceId: s.referenceId,
            track: (s.track || 'elocution').toLowerCase(),
            participantType: s.teamName ? 'team' : 'individual',
            teamName: s.teamName,
            primaryParticipant: {
              fullName: s.participantName || 'Delegate',
              email: s.email || '',
              phone: '',
              college: 'Registered Institution',
              degree: 'Undergraduate',
              yearOfStudy: 'Enrolled'
            },
            teamMembers: [],
            selectedTheme: 'Official Registration',
            problemStatementIdea: '',
            createdAt: s.timestamp || new Date().toISOString()
          });
        }
      }

      const localInqsRaw = localStorage.getItem('eloqvent_all_inquiries');
      if (localInqsRaw) {
        const localInqs: InquiryRecord[] = JSON.parse(localInqsRaw);
        localInqs.forEach((localI) => {
          if (!combinedInquiries.some((i) => i.id === localI.id)) {
            combinedInquiries.push(localI);
          }
        });
      }
    } catch (e) {
      console.warn('Local data reading error:', e);
    }

    // Apply filters if local records were merged
    let filtered = combinedRegistrations;
    if (trackFilter !== 'all') {
      filtered = filtered.filter((r) => r.track === trackFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter((r) => 
        r.referenceId.toLowerCase().includes(q) ||
        r.primaryParticipant.fullName.toLowerCase().includes(q) ||
        r.primaryParticipant.email.toLowerCase().includes(q) ||
        r.primaryParticipant.college.toLowerCase().includes(q) ||
        (r.teamName && r.teamName.toLowerCase().includes(q))
      );
    }

    setRegistrations(filtered);
    setInquiries(combinedInquiries);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [trackFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  const downloadCSV = () => {
    if (registrations.length === 0) {
      alert('No registrations available to export.');
      return;
    }

    // Client-side CSV generator for 100% reliable download
    const headers = [
      'Reference ID',
      'Track',
      'Format',
      'Team Name',
      'Lead Delegate Name',
      'Email',
      'Phone',
      'College / Institution',
      'Degree',
      'Year of Study',
      'Student ID',
      'Team Members Count',
      'Team Members Roster',
      'Selected Theme',
      'Problem Statement Idea',
      'Registration Date'
    ];

    const rows = registrations.map((r) => [
      `"${r.referenceId}"`,
      `"${r.track.toUpperCase()}"`,
      `"${r.participantType}"`,
      `"${r.teamName || 'N/A'}"`,
      `"${r.primaryParticipant.fullName}"`,
      `"${r.primaryParticipant.email}"`,
      `"${r.primaryParticipant.phone}"`,
      `"${r.primaryParticipant.college}"`,
      `"${r.primaryParticipant.degree}"`,
      `"${r.primaryParticipant.yearOfStudy}"`,
      `"${(r.primaryParticipant as any).studentId || 'N/A'}"`,
      `"${r.teamMembers ? r.teamMembers.length : 0}"`,
      `"${r.teamMembers && r.teamMembers.length > 0 ? r.teamMembers.map(m => `${m.fullName} (${m.email})`).join('; ') : 'None'}"`,
      `"${r.selectedTheme || 'N/A'}"`,
      `"${(r.problemStatementIdea || '').replace(/"/g, '""')}"`,
      `"${new Date(r.createdAt).toLocaleString()}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `ELOQVENT_2K26_Delegates_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <PageHeader
        badge="Organizer & Secretariat Portal"
        title="Symposium Delegate Administration"
        subtitle="Live registry of collegiate delegates, team rosters, inquiry dispatch, and official roster spreadsheet export."
        breadcrumb="Admin Portal"
      >
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button onClick={downloadCSV} variant="innovex" size="sm" icon={<FileSpreadsheet size={16} />}>
            Download CSV Roster (Excel)
          </Button>
          <Button onClick={fetchData} variant="outline" size="sm" icon={<RefreshCw size={14} />}>
            Refresh Live Data
          </Button>
        </div>
      </PageHeader>

      <section className="section-py" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          {/* Key Metrics Dashboard */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}
          >
            <div className="surface-card" style={{ background: 'var(--bg-surface-1)', border: '1px solid var(--border-subtle)', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Total Registrations
              </div>
              <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem' }}>
                {stats ? stats.totalRegistrations : registrations.length}
              </div>
            </div>

            <div className="surface-card" style={{ background: 'var(--bg-surface-1)', border: '1px solid var(--border-subtle)', borderLeft: '3px solid var(--elocution-accent)', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--elocution-accent)', textTransform: 'uppercase' }}>
                Elocution Delegates
              </div>
              <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem' }}>
                {stats ? stats.elocutionCount : registrations.filter(r => r.track === 'elocution').length}
              </div>
            </div>

            <div className="surface-card" style={{ background: 'var(--bg-surface-1)', border: '1px solid var(--border-subtle)', borderLeft: '3px solid var(--innovex-accent)', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--innovex-accent)', textTransform: 'uppercase' }}>
                Innovex Teams / Solo
              </div>
              <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem' }}>
                {stats ? stats.innovexCount : registrations.filter(r => r.track === 'innovex').length}
              </div>
            </div>

            <div className="surface-card" style={{ background: 'var(--bg-surface-1)', border: '1px solid var(--border-subtle)', borderLeft: '3px solid #a855f7', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#a855f7', textTransform: 'uppercase' }}>
                Secretariat Inquiries
              </div>
              <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem' }}>
                {stats ? stats.totalInquiries : inquiries.length}
              </div>
            </div>
          </div>

          {/* Tab Switcher */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div 
              style={{
                display: 'inline-flex',
                padding: '0.3rem',
                background: 'var(--bg-surface-2)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <button
                onClick={() => setActiveTab('registrations')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: activeTab === 'registrations' ? 'var(--text-primary)' : 'transparent',
                  color: activeTab === 'registrations' ? 'var(--text-inverse)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Registered Delegates ({registrations.length})
              </button>

              <button
                onClick={() => setActiveTab('inquiries')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: activeTab === 'inquiries' ? 'var(--text-primary)' : 'transparent',
                  color: activeTab === 'inquiries' ? 'var(--text-inverse)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Contact Inquiries ({inquiries.length})
              </button>
            </div>

            {activeTab === 'registrations' && (
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Search name, email, college, ref..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ width: '260px', padding: '0.5rem 0.85rem', fontSize: '0.875rem' }}
                />

                <select
                  className="form-select"
                  value={trackFilter}
                  onChange={(e) => setTrackFilter(e.target.value)}
                  style={{ width: '140px', padding: '0.5rem 0.85rem', fontSize: '0.875rem' }}
                >
                  <option value="all">All Tracks</option>
                  <option value="elocution">Elocution</option>
                  <option value="innovex">Innovex</option>
                </select>

                <Button type="submit" variant="secondary" size="sm" icon={<Search size={14} />}>
                  Search
                </Button>
              </form>
            )}
          </div>

          {/* Registrations Table View */}
          {activeTab === 'registrations' && (
            <div 
              style={{
                overflowX: 'auto',
                background: 'var(--bg-surface-1)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {registrations.length > 0 ? (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-medium)', background: 'var(--bg-surface-2)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '1rem 1.25rem' }}>REFERENCE</th>
                      <th style={{ padding: '1rem 1.25rem' }}>TRACK / FORMAT</th>
                      <th style={{ padding: '1rem 1.25rem' }}>LEAD DELEGATE</th>
                      <th style={{ padding: '1rem 1.25rem' }}>INSTITUTION & DEGREE</th>
                      <th style={{ padding: '1rem 1.25rem' }}>TEAM / THEME</th>
                      <th style={{ padding: '1rem 1.25rem' }}>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => {
                      const isElocution = reg.track === 'elocution';
                      return (
                        <tr key={reg.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                          <td style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--elocution-accent)' }}>
                            {reg.referenceId}
                          </td>

                          <td style={{ padding: '1rem 1.25rem' }}>
                            <span 
                              style={{
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px',
                                background: isElocution ? 'rgba(56, 189, 248, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                                color: isElocution ? 'var(--elocution-accent)' : 'var(--innovex-accent)',
                                fontSize: '0.725rem',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 600,
                                display: 'inline-block',
                                marginBottom: '0.25rem'
                              }}
                            >
                              {reg.track.toUpperCase()}
                            </span>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {reg.participantType === 'team' ? `Team (${reg.teamMembers.length + 1})` : 'Individual'}
                            </div>
                          </td>

                          <td style={{ padding: '1rem 1.25rem' }}>
                            <div style={{ fontWeight: 600, color: '#ffffff' }}>
                              {reg.primaryParticipant.fullName}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                              {reg.primaryParticipant.email}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {reg.primaryParticipant.phone}
                            </div>
                          </td>

                          <td style={{ padding: '1rem 1.25rem' }}>
                            <div style={{ color: 'var(--text-primary)' }}>
                              {reg.primaryParticipant.college}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {reg.primaryParticipant.degree} • {reg.primaryParticipant.yearOfStudy}
                            </div>
                          </td>

                          <td style={{ padding: '1rem 1.25rem' }}>
                            {reg.teamName && (
                              <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '0.8125rem' }}>
                                {reg.teamName}
                              </div>
                            )}
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                              {reg.selectedTheme ? `Theme: ${reg.selectedTheme}` : 'No Theme Selected'}
                            </div>
                          </td>

                          <td style={{ padding: '1rem 1.25rem' }}>
                            <button
                              onClick={() => setSelectedDelegate(reg)}
                              style={{
                                background: 'var(--bg-surface-2)',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-primary)',
                                borderRadius: '4px',
                                padding: '0.35rem 0.65rem',
                                fontSize: '0.75rem',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.35rem'
                              }}
                            >
                              <Eye size={13} /> View Full
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div style={{ padding: '3.5rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  <Users size={32} style={{ margin: '0 auto 0.75rem auto' }} />
                  <h4>No registrations found matching your criteria</h4>
                  <p style={{ fontSize: '0.875rem' }}>New registrations submitted on the portal will appear here automatically.</p>
                </div>
              )}
            </div>
          )}

          {/* Inquiries Table View */}
          {activeTab === 'inquiries' && (
            <div 
              style={{
                overflowX: 'auto',
                background: 'var(--bg-surface-1)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {inquiries.length > 0 ? (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-medium)', background: 'var(--bg-surface-2)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      <th style={{ padding: '1rem 1.25rem' }}>DATE</th>
                      <th style={{ padding: '1rem 1.25rem' }}>SENDER NAME</th>
                      <th style={{ padding: '1rem 1.25rem' }}>EMAIL</th>
                      <th style={{ padding: '1rem 1.25rem' }}>CATEGORY</th>
                      <th style={{ padding: '1rem 1.25rem' }}>MESSAGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map((inq) => (
                      <tr key={inq.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                        <td style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {new Date(inq.createdAt).toLocaleDateString()}
                        </td>
                        <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: '#ffffff' }}>
                          {inq.name}
                        </td>
                        <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>
                          <a href={`mailto:${inq.email}`} style={{ color: 'var(--elocution-accent)' }}>
                            {inq.email}
                          </a>
                        </td>
                        <td style={{ padding: '1rem 1.25rem' }}>
                          <span style={{ fontSize: '0.75rem', background: 'var(--bg-surface-2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                            {inq.category}
                          </span>
                        </td>
                        <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)', maxWidth: '400px' }}>
                          {inq.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div style={{ padding: '3.5rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  <MessageSquare size={32} style={{ margin: '0 auto 0.75rem auto' }} />
                  <h4>No contact inquiries received yet</h4>
                  <p style={{ fontSize: '0.875rem' }}>Queries submitted from the contact page will be listed here.</p>
                </div>
              )}
            </div>
          )}

          {/* Detailed Delegate Modal */}
          {selectedDelegate && (
            <div 
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(8px)',
                zIndex: 99,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem'
              }}
              onClick={() => setSelectedDelegate(null)}
            >
              <div 
                className="surface-card"
                style={{
                  background: 'var(--bg-surface-1)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-xl)',
                  maxWidth: '650px',
                  width: '100%',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  padding: '2rem'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                  <div>
                    <span className="mono-tag" style={{ color: 'var(--elocution-accent)' }}>
                      REGISTRATION RECORD
                    </span>
                    <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginTop: '0.25rem' }}>
                      {selectedDelegate.referenceId}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedDelegate(null)}
                    style={{
                      background: 'var(--bg-surface-2)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.35rem 0.65rem',
                      color: 'var(--text-primary)',
                      cursor: 'pointer'
                    }}
                  >
                    Close
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>TRACK</div>
                    <div style={{ fontWeight: 600, color: '#ffffff' }}>{selectedDelegate.track.toUpperCase()}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>FORMAT</div>
                    <div style={{ fontWeight: 600, color: '#ffffff' }}>{selectedDelegate.participantType.toUpperCase()}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>PRIMARY DELEGATE</div>
                    <div style={{ fontWeight: 600, color: '#ffffff' }}>{selectedDelegate.primaryParticipant.fullName}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>EMAIL & PHONE</div>
                    <div style={{ color: 'var(--text-secondary)' }}>{selectedDelegate.primaryParticipant.email}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{selectedDelegate.primaryParticipant.phone}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>INSTITUTION</div>
                    <div style={{ color: 'var(--text-secondary)' }}>{selectedDelegate.primaryParticipant.college}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>ACADEMIC STATUS</div>
                    <div style={{ color: 'var(--text-secondary)' }}>{selectedDelegate.primaryParticipant.degree} • {selectedDelegate.primaryParticipant.yearOfStudy}</div>
                  </div>
                </div>

                {selectedDelegate.teamMembers.length > 0 && (
                  <div style={{ marginBottom: '1.5rem', background: 'var(--bg-surface-2)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--innovex-accent)', marginBottom: '0.5rem' }}>
                      ADDITIONAL TEAM MEMBERS ({selectedDelegate.teamMembers.length})
                    </div>
                    {selectedDelegate.teamMembers.map((m, i) => (
                      <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                        • {m.fullName} ({m.email})
                      </div>
                    ))}
                  </div>
                )}

                {selectedDelegate.problemStatementIdea && (
                  <div style={{ background: 'var(--bg-surface-2)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      PROBLEM STATEMENT / SPEECH CONCEPT:
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {selectedDelegate.problemStatementIdea}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
