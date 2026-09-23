import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  Compass, 
  MapPin, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  Scale,
  Mail,
  Phone,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { Placeholder } from '../components/ui/Placeholder';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/sections/CTASection';
import { EligibilityChecklist } from '../components/sections/EligibilityChecklist';
import { 
  OFFICIAL_ELIGIBILITY_CRITERIA, 
  ELIGIBILITY_PENDING_SPECS, 
  QUICK_ELIGIBILITY_CHECKS 
} from '../data/eligibility';
import { CODE_OF_CONDUCT } from '../data/eligibilityRules';

export const EligibilityPage: React.FC = () => {
  useEffect(() => {
    document.title = "Who Can Participate — Eligibility Criteria | ELOQVENT 2K26";
  }, []);

  // Interactive Quick Assessment State
  const [q1, setQ1] = useState<boolean | null>(null);
  const [q2, setQ2] = useState<boolean | null>(null);
  const [q3, setQ3] = useState<boolean | null>(null);
  const [q4, setQ4] = useState<boolean | null>(null);

  const isAllAnswered = q1 !== null && q2 !== null && q3 !== null && q4 !== null;
  const isAllYes = q1 === true && q2 === true && q3 === true && q4 === true;

  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* 1. Page Hero */}
      <section 
        aria-label="Eligibility Page Hero"
        style={{
          position: 'relative',
          paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.7) 0%, rgba(8, 12, 20, 0.4) 100%)',
          overflow: 'hidden'
        }}
      >
        <Container size="lg">
          {/* Breadcrumb Navigation */}
          <nav 
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem'
            }}
          >
            <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Home
            </Link>
            <ChevronRight size={14} color="var(--text-muted)" aria-hidden="true" />
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              Eligibility
            </span>
          </nav>

          <div style={{ maxWidth: '880px' }}>
            <Eyebrow variant="innovex" icon={<GraduationCap size={13} color="var(--innovex-accent)" />} style={{ marginBottom: '1rem' }}>
              ELOQVENT 2K26
            </Eyebrow>

            {/* Exactly ONE H1 on the page */}
            <h1 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.5vw + 0.5rem, 4.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}
            >
              Who Can Participate
            </h1>

            <div 
              style={{
                fontSize: 'clamp(1.15rem, 2vw + 0.25rem, 1.5rem)',
                fontWeight: 700,
                color: 'var(--innovex-accent)',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}
            >
              Academic Criteria, Institutional Eligibility & Participation Guidelines
            </div>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Participation in ELOQVENT 2K26 is intended for eligible first- and second-year undergraduate students pursuing Engineering, Technology, and Management programs across recognized collegiate institutions in the region.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/register" variant="primary" size="lg" icon={<ArrowRight size={18} aria-hidden="true" />}>
                REGISTER NOW
              </Button>
              <Button to="/tracks" variant="secondary" size="lg">
                VIEW THE TRACKS
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Quick Eligibility Clarity Assessment */}
      <section 
        aria-labelledby="quick-check-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div 
            className="surface-card"
            style={{
              background: 'linear-gradient(135deg, var(--bg-surface-2) 0%, var(--bg-surface-1) 100%)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div style={{ maxWidth: '780px', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
                <Sparkles size={18} color="var(--innovex-accent)" aria-hidden="true" />
                <h2 
                  id="quick-check-heading"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    margin: 0
                  }}
                >
                  Quick Eligibility Check
                </h2>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Answer the 4 qualification checks below to immediately determine if you meet the official criteria for ELOQVENT 2K26.
              </p>
            </div>

            {/* 4 Interactive Checks */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1rem',
                marginBottom: '1.75rem'
              }}
            >
              {/* Check 1 */}
              <div 
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-surface-1)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.85rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    CHECK 01
                  </span>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#ffffff', marginTop: '0.25rem' }}>
                    Are you currently a 1st or 2nd year undergraduate student?
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setQ1(true)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      background: q1 === true ? 'var(--innovex-accent)' : 'rgba(255, 255, 255, 0.04)',
                      color: q1 === true ? '#000000' : 'var(--text-secondary)',
                      border: q1 === true ? '1px solid var(--innovex-accent)' : '1px solid var(--border-subtle)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer'
                    }}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setQ1(false)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      background: q1 === false ? '#f43f5e' : 'rgba(255, 255, 255, 0.04)',
                      color: q1 === false ? '#ffffff' : 'var(--text-secondary)',
                      border: q1 === false ? '1px solid #f43f5e' : '1px solid var(--border-subtle)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer'
                    }}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Check 2 */}
              <div 
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-surface-1)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.85rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    CHECK 02
                  </span>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#ffffff', marginTop: '0.25rem' }}>
                    Are you studying Engineering, Technology, or Management?
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setQ2(true)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      background: q2 === true ? 'var(--innovex-accent)' : 'rgba(255, 255, 255, 0.04)',
                      color: q2 === true ? '#000000' : 'var(--text-secondary)',
                      border: q2 === true ? '1px solid var(--innovex-accent)' : '1px solid var(--border-subtle)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer'
                    }}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setQ2(false)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      background: q2 === false ? '#f43f5e' : 'rgba(255, 255, 255, 0.04)',
                      color: q2 === false ? '#ffffff' : 'var(--text-secondary)',
                      border: q2 === false ? '1px solid #f43f5e' : '1px solid var(--border-subtle)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer'
                    }}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Check 3 */}
              <div 
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-surface-1)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.85rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    CHECK 03
                  </span>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#ffffff', marginTop: '0.25rem' }}>
                    Is your institution in the host state or nearby region?
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setQ3(true)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      background: q3 === true ? 'var(--innovex-accent)' : 'rgba(255, 255, 255, 0.04)',
                      color: q3 === true ? '#000000' : 'var(--text-secondary)',
                      border: q3 === true ? '1px solid var(--innovex-accent)' : '1px solid var(--border-subtle)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer'
                    }}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setQ3(false)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      background: q3 === false ? '#f43f5e' : 'rgba(255, 255, 255, 0.04)',
                      color: q3 === false ? '#ffffff' : 'var(--text-secondary)',
                      border: q3 === false ? '1px solid #f43f5e' : '1px solid var(--border-subtle)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer'
                    }}
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Check 4 */}
              <div 
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-surface-1)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.85rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    CHECK 04
                  </span>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#ffffff', marginTop: '0.25rem' }}>
                    Can you present a valid college ID or bonafide letter?
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setQ4(true)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      background: q4 === true ? 'var(--innovex-accent)' : 'rgba(255, 255, 255, 0.04)',
                      color: q4 === true ? '#000000' : 'var(--text-secondary)',
                      border: q4 === true ? '1px solid var(--innovex-accent)' : '1px solid var(--border-subtle)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer'
                    }}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setQ4(false)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      background: q4 === false ? '#f43f5e' : 'rgba(255, 255, 255, 0.04)',
                      color: q4 === false ? '#ffffff' : 'var(--text-secondary)',
                      border: q4 === false ? '1px solid #f43f5e' : '1px solid var(--border-subtle)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer'
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>

            {/* Assessment Feedback Result */}
            {isAllAnswered ? (
              <div 
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  background: isAllYes ? 'rgba(16, 185, 129, 0.12)' : 'rgba(244, 63, 94, 0.12)',
                  border: `1px solid ${isAllYes ? 'var(--innovex-border)' : 'rgba(244, 63, 94, 0.3)'}`,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  {isAllYes ? (
                    <CheckCircle2 size={24} color="var(--innovex-accent)" style={{ flexShrink: 0 }} aria-hidden="true" />
                  ) : (
                    <AlertCircle size={24} color="#f43f5e" style={{ flexShrink: 0 }} aria-hidden="true" />
                  )}
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: isAllYes ? '#ffffff' : '#f43f5e' }}>
                      {isAllYes 
                        ? 'You satisfy the core eligibility criteria for ELOQVENT 2K26!' 
                        : 'One or more responses do not match the official eligibility requirements.'}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                      {isAllYes
                        ? 'You are ready to select your track (ELOCUTION or INNOVEX) and begin registration.'
                        : 'Please review the detailed checklist below or contact the organizers for clarification.'}
                    </div>
                  </div>
                </div>

                {isAllYes && (
                  <Button to="/register" variant="primary" size="md" icon={<ArrowRight size={16} aria-hidden="true" />}>
                    PROCEED TO REGISTER
                  </Button>
                )}
              </div>
            ) : (
              <div 
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px dashed var(--border-subtle)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <HelpCircle size={15} color="var(--text-muted)" aria-hidden="true" />
                <span>Select Yes or No for each of the 4 checks above for instant eligibility feedback.</span>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 3. Detailed Official Eligibility Criteria Checklist */}
      <section 
        id="official-criteria"
        aria-labelledby="criteria-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '820px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <Eyebrow variant="innovex" style={{ marginBottom: '0.85rem' }}>
              Official Requirements
            </Eyebrow>
            <h2 
              id="criteria-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: '1rem'
              }}
            >
              The 7 Core Eligibility Criteria
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              All delegates and teams must satisfy the following criteria mandated by the official event charter prior to on-site credentialing.
            </p>
          </div>

          {/* Checklist Component */}
          <EligibilityChecklist />
        </Container>
      </section>

      {/* 4. Pending Organizer Specifications & Policy Notice */}
      <section 
        aria-labelledby="pending-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
            <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
              Pending Confirmations
            </Eyebrow>
            <h2 
              id="pending-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw + 0.25rem, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#ffffff',
                marginBottom: '1rem'
              }}
            >
              Operational & Logistical Specifications
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              In accordance with ELOQVENT standards, no unconfirmed operational rules, limits, or fees are assumed. Below are the administrative specifications pending final confirmation by the organizing committee.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3rem'
            }}
          >
            {ELIGIBILITY_PENDING_SPECS.map((spec, idx) => (
              <div 
                key={idx}
                className="surface-card"
                style={{
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Specification {idx + 1}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, margin: '0.35rem 0 0.5rem 0' }}>
                    {spec.label}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {spec.note}
                  </p>
                </div>

                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <Placeholder label={spec.placeholder} />
                </div>
              </div>
            ))}
          </div>

          {/* Zero Inventions Guarantee Card */}
          <div 
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-canvas)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}
          >
            <ShieldCheck size={18} color="var(--innovex-accent)" style={{ flexShrink: 0 }} aria-hidden="true" />
            <span>
              <strong>Academic Integrity Policy:</strong> There are no hidden cut-offs, prior competition experience requirements, or arbitrary restrictions. Eligibility is strictly governed by the 7 criteria above.
            </span>
          </div>
        </Container>
      </section>

      {/* 5. Code of Conduct & Participant Expectations */}
      <section 
        aria-labelledby="conduct-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div 
            className="surface-card"
            style={{
              background: 'var(--bg-surface-1)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Scale size={24} color="var(--elocution-accent)" aria-hidden="true" />
              <h2 
                id="conduct-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  margin: 0
                }}
              >
                Symposium Code of Conduct
              </h2>
            </div>

            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem', maxWidth: '750px' }}>
              ELOQVENT 2K26 is dedicated to fostering an intellectually rigorous, respectful, and safe collegiate environment. All participants, student delegates, and attendees must adhere to the following principles:
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {CODE_OF_CONDUCT.map((rule, idx) => (
                <li 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-surface-2)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.5
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--innovex-accent)',
                      background: 'rgba(16, 185, 129, 0.12)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      flexShrink: 0
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 6. Contact & Clarification Support */}
      <section 
        aria-labelledby="contact-support-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div 
            style={{
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 28, 20, 0.98) 100%)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <h3 
                id="contact-support-heading"
                style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800, margin: '0 0 0.5rem 0' }}
              >
                Questions Regarding Eligibility?
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                If you have specific inquiries regarding departmental affiliations, student body nominations, or verification letters, reach out through the official symposium channels.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Mail size={15} color="var(--elocution-accent)" aria-hidden="true" />
                <span>Email:</span>
                <Placeholder label="[EMAIL TO BE PROVIDED]" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Phone size={15} color="var(--innovex-accent)" aria-hidden="true" />
                <span>Phone:</span>
                <Placeholder label="[PHONE TO BE PROVIDED]" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Closing CTA */}
      <CTASection 
        title="Eligible and Ready to Compete?"
        subtitle="Secure your place at ELOQVENT 2K26 and represent your institution on the regional stage."
        description="Select your track, complete the registration form, and prepare to present your oratorical prowess or human-centred innovation."
        primaryCtaText="REGISTER NOW"
        primaryCtaLink="/register"
        secondaryCtaText="VIEW THE TRACKS"
        secondaryCtaLink="/tracks"
      />
    </div>
  );
};
