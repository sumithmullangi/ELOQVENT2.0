import React from 'react';
import { ArrowRight, Mic, Lightbulb, Users, User, Layers, CheckCircle2, FileText, Sparkles, Brain, Scale, BookOpen, Flame, Search, GitMerge, Cpu, BarChart3, Trophy } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';

export const TrackComparison: React.FC = () => {
  const comparisonDimensions = [
    {
      dimension: 'Official Subtitle',
      elocution: 'Communication & Expression',
      innovex: 'Human-Centred Innovation & Social Impact'
    },
    {
      dimension: 'Primary Objective',
      elocution: 'Develop spontaneous articulation, critical thinking, debate rebuttal agility, narrative mastery, and stage presence.',
      innovex: 'Deconstruct complex societal pain points through empathy research, root-cause analysis, frugal prototyping, and sustainable business modelling.'
    },
    {
      dimension: 'Participation Format',
      elocution: 'Strictly Individual (1 Delegate)',
      innovex: 'Individual or Team (1 to 4 Members; Inter-departmental encouraged)'
    },
    {
      dimension: 'Curricular Framework',
      elocution: '6 Progressive Phases (Orientation, Expression Development, Structured Debate, Day 1 Evaluation, Advanced Enhancement, Final Assessment)',
      innovex: '7-Step Innovation Sprint (Understand People, Discover Problem, Root Cause, Ideate, Develop Solution, Sustainable Model, Pitch for Impact)'
    },
    {
      dimension: 'Thematic Scope',
      elocution: 'Contemporary socio-political, ethical, scientific, and technological motions released at Phase 1.',
      innovex: '5 Foundational Domains: Healthcare, Sustainable Agriculture, Water & Sanitation, Circular Waste, Inclusive Education.'
    },
    {
      dimension: 'Key Deliverables',
      elocution: 'Live oratorical addresses, timed rebuttals, policy arguments, and grand jury defense.',
      innovex: 'Empathy Map, 5-Whys Matrix, Solution Prototype / Workflow Blueprint, Social Business Canvas, and Pitch Deck.'
    },
    {
      dimension: 'Evaluation Focus',
      elocution: 'Clarity of expression, logical coherence, originality, debate agility, and audience engagement.',
      innovex: 'Empathy depth, root cause analysis rigor, solution viability, business model sustainability, and pitch defense.'
    }
  ];

  return (
    <section 
      id="track-comparison"
      aria-labelledby="comparison-heading"
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-surface-1)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
            Side-by-Side Analysis
          </Eyebrow>
          <h2 
            id="comparison-heading"
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
            Compare the Two Tracks
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            Both tracks are equal in prestige and rigor. Choose the competitive journey that best matches your personal strengths, intellectual passions, and collaborative style.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {/* Header Row: Track Cards Header */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
              alignItems: 'stretch'
            }}
          >
            {/* ELOCUTION Header Card */}
            <div 
              style={{
                background: 'linear-gradient(180deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
                border: '1px solid var(--elocution-border)',
                borderTop: '4px solid var(--elocution-accent)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--elocution-accent)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      padding: '0.2rem 0.65rem',
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.5rem' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mic size={22} color="var(--elocution-accent)" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>
                      ELOCUTION
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: 'var(--elocution-accent)', fontWeight: 600 }}>
                      Communication & Expression
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  For individual thinkers who want to command the podium, articulate nuanced perspectives, debate with logic, and deliver persuasive arguments.
                </p>
              </div>

              <Button 
                to="/elocution" 
                variant="elocution" 
                size="md"
                style={{ width: '100%', justifyContent: 'center' }}
                icon={<ArrowRight size={16} aria-hidden="true" />}
              >
                EXPLORE ELOCUTION
              </Button>
            </div>

            {/* INNOVEX Header Card */}
            <div 
              style={{
                background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
                border: '1px solid var(--innovex-border)',
                borderTop: '4px solid var(--innovex-accent)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--innovex-accent)',
                      background: 'rgba(16, 185, 129, 0.12)',
                      padding: '0.2rem 0.65rem',
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.5rem' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Lightbulb size={22} color="var(--innovex-accent)" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>
                      INNOVEX
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: 'var(--innovex-accent)', fontWeight: 600 }}>
                      Human-Centred Innovation & Social Impact
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  For problem solvers and cross-functional teams who want to research human pain points, engineer frugal prototypes, and pitch viable social ventures.
                </p>
              </div>

              <Button 
                to="/innovex" 
                variant="innovex" 
                size="md"
                style={{ width: '100%', justifyContent: 'center' }}
                icon={<ArrowRight size={16} aria-hidden="true" />}
              >
                EXPLORE INNOVEX
              </Button>
            </div>
          </div>

          {/* Structured Comparative Rows */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '1rem'
            }}
          >
            {comparisonDimensions.map((row, idx) => (
              <div 
                key={idx}
                className="surface-card"
                style={{
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.25rem, 2vw, 1.75rem)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.25rem',
                  alignItems: 'start'
                }}
              >
                {/* Dimension Heading (Full Width on Grid) */}
                <div style={{ gridColumn: '1 / -1', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}
                  >
                    {row.dimension}
                  </span>
                </div>

                {/* Elocution Value */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div 
                    style={{
                      width: '6px',
                      borderRadius: '3px',
                      background: 'var(--elocution-accent)',
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--elocution-accent)', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.25rem' }}>
                      ELOCUTION
                    </div>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                      {row.elocution}
                    </div>
                  </div>
                </div>

                {/* Innovex Value */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div 
                    style={{
                      width: '6px',
                      borderRadius: '3px',
                      background: 'var(--innovex-accent)',
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--innovex-accent)', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.25rem' }}>
                      INNOVEX
                    </div>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                      {row.innovex}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
