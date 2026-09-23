import React from 'react';
import { ArrowRight, CheckCircle2, GraduationCap, Building2, Layers, Users2, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../3d/ScrollReveal';
import { TiltCard } from '../3d/TiltCard';

export const EligibilityPreview: React.FC = () => {
  const eligibilityCriteria = [
    {
      icon: <GraduationCap size={20} color="var(--elocution-accent)" aria-hidden="true" />,
      title: 'Academic Standing',
      description: 'First and second-year undergraduate students actively enrolled in recognized collegiate programs.'
    },
    {
      icon: <Building2 size={20} color="var(--innovex-accent)" aria-hidden="true" />,
      title: 'Institutional Affiliation',
      description: 'Open to students from recognized universities, engineering colleges, and management institutions at the regional level.'
    },
    {
      icon: <Layers size={20} color="var(--elocution-accent)" aria-hidden="true" />,
      title: 'Eligible Disciplines',
      description: 'Multidisciplinary scope encompassing Engineering, Technology, Management, Sciences, and Applied Studies.'
    },
    {
      icon: <Users2 size={20} color="var(--innovex-accent)" aria-hidden="true" />,
      title: 'Participation Formats',
      description: 'Individual participation for ELOCUTION; Individual or Team participation (1–4 members) for INNOVEX.'
    }
  ];

  return (
    <section 
      id="eligibility"
      aria-labelledby="eligibility-preview-heading"
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-surface-1)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Section Heading */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
              marginBottom: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            <div style={{ maxWidth: '780px' }}>
              <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
                Eligibility & Participation
              </Eyebrow>
              <h2 
                id="eligibility-preview-heading"
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
                Who Can Participate
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                ELOQVENT 2K26 is structured for early-stage collegiate thinkers, problem solvers, and aspiring communicators across disciplines.
              </p>
            </div>

            <div>
              <Button 
                to="/eligibility" 
                variant="outline" 
                size="sm" 
                icon={<ArrowRight size={14} aria-hidden="true" />}
              >
                VIEW ELIGIBILITY
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Eligibility Criteria 3D Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem'
          }}
        >
          {eligibilityCriteria.map((item, index) => (
            <ScrollReveal key={index} animation="flip-3d" delay={80 * index} duration={650}>
              <TiltCard maxTilt={5} scale={1.02} style={{ height: '100%' }}>
                <div 
                  className="surface-card"
                  style={{
                    height: '100%',
                    background: 'var(--bg-surface-2)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: '1rem',
                    boxSizing: 'border-box'
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-medium)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {item.icon}
                    </div>
                    <h3 
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        margin: 0,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--innovex-accent)" aria-hidden="true" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Verification Note Banner */}
        <ScrollReveal animation="fade-up" delay={200} duration={600}>
          <div 
            style={{
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              <ShieldCheck size={18} color="var(--elocution-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
              <span>
                <strong>Verification Requirement:</strong> A valid college/university identification card or formal authorization letter is required for on-site accreditation.
              </span>
            </div>

            <Button 
              to="/eligibility" 
              variant="ghost" 
              size="sm"
              icon={<ArrowRight size={14} aria-hidden="true" />}
              style={{ color: 'var(--elocution-accent)', padding: '0.25rem 0.5rem' }}
            >
              Read Full Participation Rules
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

