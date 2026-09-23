import React from 'react';
import { Mic, Sparkles, Brain, Scale, BookOpen, Flame } from 'lucide-react';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { ELOCUTION_SKILLS } from '../../data/elocutionPhases';

export const ElocutionSkills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Mic: <Mic size={20} color="var(--elocution-accent)" aria-hidden="true" />,
    Sparkles: <Sparkles size={20} color="var(--elocution-accent)" aria-hidden="true" />,
    Brain: <Brain size={20} color="var(--elocution-accent)" aria-hidden="true" />,
    Scale: <Scale size={20} color="var(--elocution-accent)" aria-hidden="true" />,
    BookOpen: <BookOpen size={20} color="var(--elocution-accent)" aria-hidden="true" />,
    Flame: <Flame size={20} color="var(--elocution-accent)" aria-hidden="true" />
  };

  return (
    <section 
      id="elocution-skills"
      aria-labelledby="skills-heading"
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-surface-1)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <Eyebrow variant="elocution" style={{ marginBottom: '0.85rem' }}>
            Competency Profile
          </Eyebrow>
          <h2 
            id="skills-heading"
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
            Skills Developed in ELOCUTION
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            The ELOCUTION track tests delegates across multiple registers of communication—from extempore spontaneity and structured dialectics to high-stakes keynote storytelling.
          </p>
        </div>

        {/* Editorial Typographic Composition (Avoids generic identical card grid) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {ELOCUTION_SKILLS.map((skill) => (
            <div 
              key={skill.num}
              className="surface-card"
              style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border-subtle)',
                borderLeft: '3px solid var(--elocution-accent)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                transition: 'all var(--transition-base)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div 
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        background: 'rgba(56, 189, 248, 0.12)',
                        border: '1px solid var(--elocution-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {iconMap[skill.iconName] || <Mic size={18} color="var(--elocution-accent)" />}
                    </div>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--elocution-accent)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      FOCUS {skill.num}
                    </span>
                  </div>
                </div>

                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {skill.title}
                </h3>

                <div 
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--elocution-accent)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '0.75rem',
                    fontWeight: 500
                  }}
                >
                  {skill.subtitle}
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
