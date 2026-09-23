import React from 'react';
import { ArrowRight, Mic, Lightbulb, Sparkles, Brain, Scale, BookOpen, Flame, Users, Search, GitMerge, Cpu, BarChart3, Trophy } from 'lucide-react';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';

export const TracksOverview: React.FC = () => {
  const elocutionFocusAreas = [
    { title: 'Public Speaking', icon: <Mic size={16} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Articulation', icon: <Sparkles size={16} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Critical Thinking', icon: <Brain size={16} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Debate & Rebuttal', icon: <Scale size={16} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Storytelling', icon: <BookOpen size={16} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Persuasive Communication', icon: <Flame size={16} color="var(--elocution-accent)" aria-hidden="true" /> }
  ];

  const innovexFocusAreas = [
    { title: 'Human-Centred Design', icon: <Users size={16} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Design Thinking', icon: <Search size={16} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Root-Cause Analysis', icon: <GitMerge size={16} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Product/Service Development', icon: <Cpu size={16} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Business Modelling', icon: <BarChart3 size={16} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Social Entrepreneurship', icon: <Trophy size={16} color="var(--innovex-accent)" aria-hidden="true" /> }
  ];

  return (
    <section 
      id="tracks"
      aria-labelledby="tracks-heading"
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-canvas)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
            Event Tracks
          </Eyebrow>
          <h2 
            id="tracks-heading"
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
            Two Specialized Tracks.<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>One Unified Experience.</span>
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            Choose the competitive domain that aligns with your strengths — whether you command the stage with rhetorical clarity or build human-centred ventures for societal impact.
          </p>
        </div>

        {/* Two Tracks Split Composition */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Track 01: ELOCUTION */}
          <div 
            className="surface-card"
            style={{
              background: 'linear-gradient(180deg, rgba(13, 22, 38, 0.9) 0%, rgba(8, 12, 20, 0.95) 100%)',
              border: '1px solid var(--elocution-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div>
              {/* Header Marker */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--elocution-accent)',
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(56, 189, 248, 0.12)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--elocution-border)',
                    letterSpacing: '0.06em'
                  }}
                >
                  TRACK 01 • INDIVIDUAL
                </span>
                <span className="mono-tag" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  6 PHASES
                </span>
              </div>

              {/* Title & Subtitle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mic size={24} color="var(--elocution-accent)" aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.75rem', color: '#ffffff', margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>
                    ELOCUTION
                  </h3>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--elocution-accent)', fontWeight: 600 }}>
                    Communication & Expression
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                A multi-stage oratorical platform designed to cultivate spontaneous thinking, structured dialectics, debate rebuttal agility, narrative mastery, and stage presence.
              </p>

              {/* Focus Areas List */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  Official Focus Areas:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.625rem' }}>
                  {elocutionFocusAreas.map((area, idx) => (
                    <div 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.8125rem',
                        color: 'var(--text-primary)',
                        fontWeight: 500
                      }}
                    >
                      {area.icon}
                      <span>{area.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <Button 
                to="/elocution" 
                variant="elocution" 
                style={{ width: '100%', justifyContent: 'center' }}
                icon={<ArrowRight size={16} aria-hidden="true" />}
              >
                EXPLORE ELOCUTION
              </Button>
            </div>
          </div>

          {/* Track 02: INNOVEX */}
          <div 
            className="surface-card"
            style={{
              background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.9) 0%, rgba(8, 12, 20, 0.95) 100%)',
              border: '1px solid var(--innovex-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div>
              {/* Header Marker */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--innovex-accent)',
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(16, 185, 129, 0.12)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--innovex-border)',
                    letterSpacing: '0.06em'
                  }}
                >
                  TRACK 02 • TEAM / INDIVIDUAL
                </span>
                <span className="mono-tag" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  7-STEP SPRINT
                </span>
              </div>

              {/* Title & Subtitle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Lightbulb size={24} color="var(--innovex-accent)" aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.75rem', color: '#ffffff', margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>
                    INNOVEX
                  </h3>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--innovex-accent)', fontWeight: 600 }}>
                    Human-Centred Innovation & Social Impact
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                An intensive innovation sprint guiding participants through stakeholder empathy research, root-cause deconstruction, frugal prototyping, and sustainable business modelling.
              </p>

              {/* Focus Areas List */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  Official Focus Areas:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.625rem' }}>
                  {innovexFocusAreas.map((area, idx) => (
                    <div 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.8125rem',
                        color: 'var(--text-primary)',
                        fontWeight: 500
                      }}
                    >
                      {area.icon}
                      <span>{area.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <Button 
                to="/innovex" 
                variant="innovex" 
                style={{ width: '100%', justifyContent: 'center' }}
                icon={<ArrowRight size={16} aria-hidden="true" />}
              >
                EXPLORE INNOVEX
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
