import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, ArrowRight, MapPin, Calendar, Mail, Phone, ShieldCheck, UserCheck } from 'lucide-react';
import { EVENT_METADATA } from '../../data/eventData';
import { Placeholder } from '../ui/Placeholder';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: '#000000',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        marginTop: 'auto'
      }}
    >
      <div className="container">
        {/* Footer Top Callout Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(41, 151, 255, 0.08) 0%, rgba(212, 178, 140, 0.08) 100%)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem 2.5rem',
            marginBottom: '3.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--desert-titanium)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Sparkles size={14} /> Official Collegiate Registration Open
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 800,
                color: '#f5f5f7',
                marginBottom: '0.5rem',
                lineHeight: 1.2
              }}
            >
              Step Onto the National Stage at ELOQVENT 2K26
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5 }}>
              Register for Elocution or pitch human-centred social innovations in Innovex.
            </p>
          </div>

          <div>
            <Button to="/register" variant="primary" size="md" icon={<ArrowRight size={16} />}>
              REGISTER NOW
            </Button>
          </div>
        </div>

        {/* Multi-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand & Ethos */}
          <div style={{ maxWidth: '340px' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '1rem',
                textDecoration: 'none'
              }}
              aria-label="Engineers Without Borders MLRIT"
            >
              <img
                src="/ewb-mlrit-logo.png"
                alt="Engineers Without Borders MLRIT"
                style={{
                  height: '46px',
                  width: 'auto',
                  maxWidth: '220px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              The national platform bridging rhetorical mastery and human-centred technological innovation for sustainable societal impact.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--elocution-accent)', background: 'rgba(41,151,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(41,151,255,0.25)' }}>
                Elocution
              </span>
              <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--innovex-accent)', background: 'rgba(212,178,140,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(212,178,140,0.25)' }}>
                Innovex
              </span>
              <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--natural-titanium)', background: 'rgba(185,180,173,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(185,180,173,0.25)' }}>
                Social Impact
              </span>
            </div>
          </div>

          {/* Column 2: Tracks & Journeys */}
          <nav aria-label="Footer Tracks Navigation">
            <h4
              style={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ffffff',
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              Tracks & Journeys
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem', margin: 0, padding: 0 }}>
              <li>
                <Link to="/elocution" style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}>
                  Elocution Track <ArrowUpRight size={13} color="var(--elocution-accent)" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/innovex" style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}>
                  Innovex Track <ArrowUpRight size={13} color="var(--innovex-accent)" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="/journey" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Interactive 7-Step Journey
                </Link>
              </li>
              <li>
                <Link to="/evaluation" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Evaluation Matrix & Criteria
                </Link>
              </li>
              <li>
                <Link to="/eligibility" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Eligibility Guidelines
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: Event Information */}
          <nav aria-label="Footer Event Information Navigation">
            <h4
              style={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ffffff',
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              Event Information
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem', margin: 0, padding: 0 }}>
              <li>
                <Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  About ELOQVENT 2K26
                </Link>
              </li>
              <li>
                <Link to="/schedule" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Day 1 & Day 2 Schedule
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/register" style={{ color: 'var(--innovex-accent)', fontWeight: 600, textDecoration: 'none' }}>
                  Participant Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  Contact Organizers
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 4: Official Details & Placeholders */}
          <div>
            <h4
              style={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ffffff',
                marginBottom: '1rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              Official Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Calendar size={15} color="var(--elocution-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>Dates:</span>
                <Placeholder label={EVENT_METADATA.date} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <MapPin size={15} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>Venue:</span>
                <Placeholder label={EVENT_METADATA.venue} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <UserCheck size={15} color="var(--text-muted)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>Organizer:</span>
                <Placeholder label="[ORGANIZER NAME]" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Mail size={15} color="var(--text-muted)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>Email:</span>
                <Placeholder label={EVENT_METADATA.contactEmail} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Phone size={15} color="var(--text-muted)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>Phone:</span>
                <Placeholder label={EVENT_METADATA.contactPhone} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 ELOQVENT 2K26. All rights reserved. Built strictly in compliance with PRD specifications.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} color="var(--innovex-accent)" aria-hidden="true" /> Verified PRD Spec
            </span>
            <span>•</span>
            <Link to="/eligibility" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
