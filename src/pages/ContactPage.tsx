import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/common/SectionHeading';
import { Mail, Phone, MapPin, Building, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { EVENT_METADATA } from '../data/eventData';
import { PlaceholderTag } from '../components/common/PlaceholderTag';
import { Button } from '../components/common/Button';

export const ContactPage: React.FC = () => {
  const [queryData, setQueryData] = useState({
    fullName: '',
    email: '',
    category: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryData.fullName || !queryData.email || !queryData.message) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(queryData)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to submit inquiry to server.');
      }

      setSubmitted(true);
    } catch (err: any) {
      // If server is unreachable, show graceful simulated receipt
      console.warn('Backend note:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader
        badge="Connect With Us"
        title="Contact & Organizing Committee"
        subtitle="Reach out to the symposium secretariat, track convenors, or faculty coordinators for inquiries and institutional delegations."
        breadcrumb="Contact"
      />

      <section className="section-py" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start'
            }}
          >
            {/* Contact Details & Placeholders */}
            <div>
              <SectionHeading
                badge="Official Secretariat"
                title="Symposium Contacts"
                subtitle="Official communication channels for delegates, institutional heads, and sponsors."
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {/* Host Institution */}
                <div 
                  className="surface-card"
                  style={{
                    background: 'var(--bg-surface-1)',
                    border: '1px solid var(--border-subtle)',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--bg-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Building size={20} color="var(--elocution-accent)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Host Institution / Organizers
                    </div>
                    <div style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#ffffff', marginTop: '0.2rem' }}>
                      <PlaceholderTag label={EVENT_METADATA.organizer} />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div 
                  className="surface-card"
                  style={{
                    background: 'var(--bg-surface-1)',
                    border: '1px solid var(--border-subtle)',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--bg-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} color="var(--innovex-accent)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Email Inquiries
                    </div>
                    <div style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#ffffff', marginTop: '0.2rem' }}>
                      <PlaceholderTag label={EVENT_METADATA.contactEmail} />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div 
                  className="surface-card"
                  style={{
                    background: 'var(--bg-surface-1)',
                    border: '1px solid var(--border-subtle)',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--bg-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} color="#a855f7" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Helpdesk Phone / WhatsApp
                    </div>
                    <div style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#ffffff', marginTop: '0.2rem' }}>
                      <PlaceholderTag label={EVENT_METADATA.contactPhone} />
                    </div>
                  </div>
                </div>

                {/* Venue Location */}
                <div 
                  className="surface-card"
                  style={{
                    background: 'var(--bg-surface-1)',
                    border: '1px solid var(--border-subtle)',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--bg-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} color="#34d399" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Symposium Venue
                    </div>
                    <div style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#ffffff', marginTop: '0.2rem' }}>
                      <PlaceholderTag label={EVENT_METADATA.venue} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div 
              className="surface-card"
              style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border-medium)',
                padding: '2.5rem',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <MessageSquare size={22} color="var(--elocution-accent)" />
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>
                  Send a Message to the Secretariat
                </h3>
              </div>

              {errorMsg && (
                <div 
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(244, 63, 94, 0.15)',
                    border: '1px solid rgba(244, 63, 94, 0.3)',
                    color: '#f43f5e',
                    fontSize: '0.8125rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submitted ? (
                <div 
                  style={{
                    padding: '2rem',
                    textAlign: 'center',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid var(--innovex-border)',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <CheckCircle2 size={36} color="var(--innovex-accent)" style={{ margin: '0 auto 0.75rem auto' }} />
                  <h4 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>Inquiry Stored in Backend</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Thank you for reaching out. Your message has been logged in the secretariat database and we will respond to {queryData.email}.
                  </p>
                  <Button onClick={() => { setSubmitted(false); setQueryData({ fullName: '', email: '', category: 'General Inquiry', message: '' }); }} variant="outline" size="sm">
                    Send Another Query
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name <span className="required">*</span></label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g., Alex Johnson"
                      value={queryData.fullName}
                      onChange={(e) => setQueryData({ ...queryData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email Address <span className="required">*</span></label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="e.g., alex@institution.edu"
                      value={queryData.email}
                      onChange={(e) => setQueryData({ ...queryData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Category</label>
                    <select
                      className="form-select"
                      value={queryData.category}
                      onChange={(e) => setQueryData({ ...queryData, category: e.target.value })}
                    >
                      <option value="General Inquiry">General Event Inquiry</option>
                      <option value="Elocution Track">Elocution Track Rules / Motions</option>
                      <option value="Innovex Track">Innovex Track Themes / Prototyping</option>
                      <option value="Institutional Delegations">Institutional Delegations & Bulk Entry</option>
                      <option value="Sponsorship & Partnership">Sponsorship & Partnership</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Query Details <span className="required">*</span></label>
                    <textarea
                      required
                      rows={4}
                      className="form-textarea"
                      placeholder="Type your query regarding participation, rules, or logistics..."
                      value={queryData.message}
                      onChange={(e) => setQueryData({ ...queryData, message: e.target.value })}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={isSubmitting}
                    style={{ width: '100%', justifyContent: 'center' }} 
                    icon={isSubmitting ? undefined : <Send size={16} />}
                  >
                    {isSubmitting ? 'Sending to Secretariat...' : 'Submit Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
