import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Lightbulb, 
  Sparkles, 
  ChevronRight, 
  Users, 
  Search, 
  GitMerge, 
  Cpu, 
  BarChart3, 
  Trophy, 
  CheckCircle2, 
  Scale, 
  Compass, 
  FileCheck,
  TrendingUp,
  Leaf
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { Placeholder } from '../components/ui/Placeholder';
import { InnovexThemes } from '../components/sections/InnovexThemes';
import { InnovexProcessFunnel } from '../components/sections/InnovexProcessFunnel';
import { InnovexRootCauseVisual } from '../components/sections/InnovexRootCauseVisual';
import { Timeline } from '../components/sections/Timeline';
import { CTASection } from '../components/sections/CTASection';
import { INNOVEX_PROCESS_STAGES, WHAT_PARTICIPANTS_DEVELOP } from '../data/innovexProcess';
import { INNOVEX_JOURNEY_STEPS } from '../data/innovexJourney';
import { EVALUATION_INNOVEX } from '../data/eventData';

export const InnovexPage: React.FC = () => {
  useEffect(() => {
    document.title = "INNOVEX — Human-Centred Innovation & Social Impact | ELOQVENT 2K26";
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* 1. Page Hero */}
      <section 
        aria-label="Innovex Track Hero"
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
            <Link to="/tracks" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Tracks
            </Link>
            <ChevronRight size={14} color="var(--text-muted)" aria-hidden="true" />
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              INNOVEX
            </span>
          </nav>

          <div style={{ maxWidth: '920px' }}>
            <Eyebrow variant="innovex" icon={<Lightbulb size={13} color="var(--innovex-accent)" />} style={{ marginBottom: '1rem' }}>
              INNOVEX
            </Eyebrow>

            {/* Exactly ONE H1 */}
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
              INNOVEX
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
              Human-Centred Innovation & Social Impact
            </div>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              A high-impact innovation and social entrepreneurship challenge. Delegates investigate pressing societal needs, understand user realities, isolate root causes, architect frugal prototypes, and formulate self-sustaining venture models.
            </p>

            {/* Primary and Secondary Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/register" variant="primary" size="lg" icon={<ArrowRight size={18} aria-hidden="true" />}>
                REGISTER NOW
              </Button>
              <Button to="/journey" variant="secondary" size="lg">
                EXPLORE THE JOURNEY
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Track Introduction & Human-Centred Philosophy */}
      <section 
        aria-labelledby="intro-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            <div>
              <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
                Track Philosophy
              </Eyebrow>
              <h2 
                id="intro-heading"
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
                Grounded in Stakeholder Empathy, Driven by Measurable Impact.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                INNOVEX rejects superficial solution engineering. Rather than receiving generic prompt sheets, participating delegates and teams are empowered to discover, research, and define their own evidence-backed problem statements.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                By examining existing practices, institutional blindspots, and unmet community needs, participants ensure that every technical workflow, physical prototype, or service intervention addresses the genuine lived realities of affected people.
              </p>
            </div>

            {/* Track Specifications Card */}
            <div 
              className="surface-card"
              style={{
                background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
                border: '1px solid var(--innovex-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--innovex-accent)',
                    background: 'rgba(16, 185, 129, 0.12)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--innovex-border)'
                  }}
                >
                  TRACK 02 SPECIFICATIONS
                </span>
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                  TEAM / INDIVIDUAL
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Format:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Individual or Team (1–4 Members)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Thematic Domains:</span>
                  <span style={{ color: 'var(--innovex-accent)', fontWeight: 600 }}>5 Foundational Tracks</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Framework:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>7-Step Milestone Sprint</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Final Stage:</span>
                  <span style={{ color: 'var(--innovex-accent)', fontWeight: 600 }}>Executive Jury Defense</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Five Official Challenge Themes Section */}
      <InnovexThemes />

      {/* 4. 11-Stage Innovation Pipeline Section */}
      <section 
        id="pipeline"
        aria-labelledby="pipeline-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '820px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <Eyebrow variant="innovex" style={{ marginBottom: '0.85rem' }}>
              The 11-Stage Methodology
            </Eyebrow>
            <h2 
              id="pipeline-heading"
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
              The Detailed Innovation Pipeline
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              While the 7-step journey provides the high-level participant milestones, the 11-stage pipeline details the methodological rigor executed by teams across the symposium.
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
            {INNOVEX_PROCESS_STAGES.map((stg) => (
              <div 
                key={stg.stageNumber}
                className="surface-card"
                style={{
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--innovex-accent)',
                        background: 'rgba(16, 185, 129, 0.12)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      STAGE {stg.stageNumber}
                    </span>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {stg.arcGroup}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                    {stg.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginTop: '0.4rem', margin: 0 }}>
                    {stg.description}
                  </p>
                </div>

                <div 
                  style={{
                    paddingTop: '0.65rem',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.775rem',
                    color: 'var(--innovex-accent)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  Focus: {stg.outputFocus}
                </div>
              </div>
            ))}
          </div>

          {/* Inline SVG Funnel Diagram Embed */}
          <InnovexProcessFunnel />
        </Container>
      </section>

      {/* 5. Root Cause Analysis Deep Dive */}
      <section 
        aria-labelledby="root-cause-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <InnovexRootCauseVisual />
        </Container>
      </section>

      {/* 6. Sustainable Business Models & Social Impact */}
      <section 
        aria-labelledby="sustainability-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'start'
            }}
          >
            <div>
              <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
                Long-Term Viability
              </Eyebrow>
              <h2 
                id="sustainability-heading"
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
                Beyond Prototypes: Designing for Scalable, Enduring Impact.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Technical ingenuity alone is insufficient if an initiative cannot survive operational, financial, and regulatory constraints. In INNOVEX, jury panels evaluate whether a solution has a credible value proposition, sound unit economics, and circular sustainability.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Delegates construct a Lean Social Business Model Canvas to outline target beneficiary segments, revenue or cost-recovery logic, strategic distribution channels, and a 3-year phased scalability roadmap.
              </p>
            </div>

            {/* Key Sustainability Dimensions Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div 
                className="surface-card"
                style={{
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem'
                }}
              >
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <TrendingUp size={18} color="var(--innovex-accent)" aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, margin: '0 0 0.2rem 0' }}>
                    Financial & Operational Viability
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Clear understanding of unit economics, recurring maintenance costs, and self-sufficient funding pathways past initial competition grant phases.
                  </p>
                </div>
              </div>

              <div 
                className="surface-card"
                style={{
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem'
                }}
              >
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Leaf size={18} color="var(--innovex-accent)" aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, margin: '0 0 0.2rem 0' }}>
                    Ecological & Circular Lifecycle
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Responsible material sourcing, minimal environmental footprint, and resilient closed-loop principles aligned with UN Sustainable Development Goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Reusable Compact Journey Embed */}
      <section 
        id="seven-step-sprint"
        aria-labelledby="sprint-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '820px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <Eyebrow variant="innovex" style={{ marginBottom: '0.85rem' }}>
              High-Level Participant Journey
            </Eyebrow>
            <h2 
              id="sprint-heading"
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
              The 7-Step Milestone Sprint
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              The high-level participant milestones guiding every team from initial user immersion to the grand jury defense.
            </p>
          </div>

          {/* Reusable Compact Timeline */}
          <Timeline steps={INNOVEX_JOURNEY_STEPS} variant="compact" />
        </Container>
      </section>

      {/* 8. What Participants Develop & Final Pitch */}
      <section 
        aria-labelledby="outcomes-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '800px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
              Venture Outcomes
            </Eyebrow>
            <h2 
              id="outcomes-heading"
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
              What Participants Develop & Deliver
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Teams conclude their INNOVEX sprint by synthesizing their empathy research, technical architecture, and business model into an executive pitch deck and live demonstration before expert juries.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {WHAT_PARTICIPANTS_DEVELOP.map((item, idx) => (
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
                  gap: '0.65rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <CheckCircle2 size={16} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Evaluation Preview Banner */}
      <section 
        aria-labelledby="eval-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div 
            style={{
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(8, 28, 20, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
              border: '1px solid var(--innovex-border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <FileCheck size={18} color="var(--innovex-accent)" aria-hidden="true" />
                <h3 
                  id="eval-heading"
                  style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800, margin: 0 }}
                >
                  INNOVEX Evaluation Criteria
                </h3>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Projects are adjudicated across empathy depth, root cause analysis rigor, solution viability, business model sustainability, scalability, and pitch quality.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Placeholder label="SCORING DETAILS — TO BE PROVIDED" />
              <Button to="/evaluation" variant="innovex" size="md" icon={<ArrowRight size={16} aria-hidden="true" />}>
                VIEW EVALUATION
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Reusable Closing CTA */}
      <CTASection 
        title="Ready to Build Scalable Solutions for Real-World Impact?"
        subtitle="Form your team or register individually to participate in the INNOVEX track."
        description="Experience the complete human-centred innovation challenge and defend your venture before expert juries at ELOQVENT 2K26."
        primaryCtaText="REGISTER NOW"
        primaryCtaLink="/register"
        secondaryCtaText="EXPLORE ALL TRACKS"
        secondaryCtaLink="/tracks"
      />
    </div>
  );
};
