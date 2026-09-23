import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  Mic, 
  Lightbulb, 
  Scale, 
  ShieldCheck, 
  Award, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { Placeholder } from '../components/ui/Placeholder';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/sections/CTASection';
import { EvaluationCriteria } from '../components/sections/EvaluationCriteria';
import { 
  ELOCUTION_EVALUATION_CRITERIA, 
  INNOVEX_EVALUATION_CRITERIA, 
  EVALUATION_NOTICE 
} from '../data/evaluation';

export const EvaluationPage: React.FC = () => {
  useEffect(() => {
    document.title = "Evaluation Standards & Rubrics | ELOQVENT 2K26";
  }, []);

  const [activeTrackTab, setActiveTrackTab] = useState<'both' | 'elocution' | 'innovex'>('both');

  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* 1. Page Hero */}
      <section 
        aria-label="Evaluation Page Hero"
        style={{
          position: 'relative',
          paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(13, 22, 38, 0.7) 0%, rgba(8, 12, 20, 0.4) 100%)',
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
              Evaluation
            </span>
          </nav>

          <div style={{ maxWidth: '880px' }}>
            <Eyebrow variant="neutral" icon={<Scale size={13} color="var(--elocution-accent)" />} style={{ marginBottom: '1rem' }}>
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
              Evaluation
            </h1>

            <div 
              style={{
                fontSize: 'clamp(1.15rem, 2vw + 0.25rem, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}
            >
              Track-Specific Adjudication Frameworks & Assessment Standards
            </div>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              ELOQVENT 2K26 assesses participants through rigorous, multi-dimensional evaluation criteria specifically tailored to the unique goals of each track. Discover how oratorical excellence and human-centred innovations are reviewed by expert juries.
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

      {/* 2. Official Notice & Dual Track Introduction */}
      <section 
        aria-labelledby="overview-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          {/* Official Scoring Note Banner */}
          <div 
            style={{
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--amber-bg)',
              border: '1px solid var(--amber-border)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '3.5rem'
            }}
          >
            <AlertCircle size={22} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                <strong style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>
                  {EVALUATION_NOTICE.headline}
                </strong>
                <Placeholder label="SCORING DETAILS — TO BE PROVIDED" />
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {EVALUATION_NOTICE.description}
              </p>
            </div>
          </div>

          {/* Section Introduction */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'start',
              marginBottom: '3rem'
            }}
          >
            <div>
              <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
                Evaluation Philosophy
              </Eyebrow>
              <h2 
                id="overview-heading"
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
                Two Distinct Competencies. Two Tailored Evaluation Systems.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Because the two tracks test fundamentally different capabilities, evaluation rubrics are customized to evaluate participants on what truly matters in their respective disciplines.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Neither track is ranked above the other; both represent equal pillars of excellence at ELOQVENT 2K26, adjudicated by distinguished juries from academia, debate societies, and social venture ecosystems.
              </p>
            </div>

            {/* Side-by-Side Track Evaluation Focus Overview Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Elocution Focus Box */}
              <div 
                className="surface-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
                  border: '1px solid var(--elocution-border)',
                  borderLeft: '4px solid var(--elocution-accent)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mic size={20} color="var(--elocution-accent)" aria-hidden="true" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                      ELOCUTION Evaluation Lens
                    </h3>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--elocution-accent)', fontWeight: 700 }}>
                      8 CRITERIA
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Focuses on oratorical delivery, critical reasoning, argument structure, spontaneity, confidence, and rhetorical persuasion.
                  </p>
                </div>
              </div>

              {/* Innovex Focus Box */}
              <div 
                className="surface-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(8, 28, 20, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
                  border: '1px solid var(--innovex-border)',
                  borderLeft: '4px solid var(--innovex-accent)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Lightbulb size={20} color="var(--innovex-accent)" aria-hidden="true" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                      INNOVEX Evaluation Lens
                    </h3>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--innovex-accent)', fontWeight: 700 }}>
                      13 CRITERIA
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Focuses on empathy research depth, root-cause deconstruction, frugal prototyping, business model viability, scalability, and measurable social impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Track View Filter Tabs */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              padding: '0.4rem',
              background: 'var(--bg-surface-2)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              maxWidth: 'fit-content',
              margin: '0 auto'
            }}
            role="tablist"
            aria-label="Filter Evaluation Rubrics"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTrackTab === 'both'}
              onClick={() => setActiveTrackTab('both')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                background: activeTrackTab === 'both' ? 'var(--bg-canvas)' : 'transparent',
                border: activeTrackTab === 'both' ? '1px solid var(--border-medium)' : '1px solid transparent',
                color: activeTrackTab === 'both' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <FileText size={16} aria-hidden="true" />
              <span>Show All Rubrics</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTrackTab === 'elocution'}
              onClick={() => setActiveTrackTab('elocution')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                background: activeTrackTab === 'elocution' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                border: activeTrackTab === 'elocution' ? '1px solid var(--elocution-accent)' : '1px solid transparent',
                color: activeTrackTab === 'elocution' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Mic size={16} color={activeTrackTab === 'elocution' ? 'var(--elocution-accent)' : 'var(--text-muted)'} aria-hidden="true" />
              <span>ELOCUTION (8 Criteria)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTrackTab === 'innovex'}
              onClick={() => setActiveTrackTab('innovex')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                background: activeTrackTab === 'innovex' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                border: activeTrackTab === 'innovex' ? '1px solid var(--innovex-accent)' : '1px solid transparent',
                color: activeTrackTab === 'innovex' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Lightbulb size={16} color={activeTrackTab === 'innovex' ? 'var(--innovex-accent)' : 'var(--text-muted)'} aria-hidden="true" />
              <span>INNOVEX (13 Criteria)</span>
            </button>
          </div>
        </Container>
      </section>

      {/* 3. ELOCUTION Evaluation Section (8 Criteria) */}
      {(activeTrackTab === 'both' || activeTrackTab === 'elocution') && (
        <section 
          id="elocution-evaluation"
          aria-labelledby="elocution-eval-heading"
          className="section-py"
          style={{
            backgroundColor: 'var(--bg-canvas)',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <Container size="lg">
            <EvaluationCriteria 
              track="elocution"
              title="ELOCUTION Evaluation Standards"
              subtitle="The 8 official assessment criteria measuring oratorical clarity, rhetorical agility, critical deconstruction, and audience resonance."
              criteria={ELOCUTION_EVALUATION_CRITERIA}
              accentVar="--elocution-accent"
              accentColor="var(--elocution-accent)"
              icon={<Mic size={18} color="var(--elocution-accent)" aria-hidden="true" />}
            />
          </Container>
        </section>
      )}

      {/* 4. INNOVEX Evaluation Section (13 Criteria) */}
      {(activeTrackTab === 'both' || activeTrackTab === 'innovex') && (
        <section 
          id="innovex-evaluation"
          aria-labelledby="innovex-eval-heading"
          className="section-py"
          style={{
            backgroundColor: 'var(--bg-surface-1)',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <Container size="lg">
            <EvaluationCriteria 
              track="innovex"
              title="INNOVEX Evaluation Standards"
              subtitle="The 13 official assessment criteria evaluating empathy research, first-principles root cause discovery, frugal prototyping, business viability, and social impact."
              criteria={INNOVEX_EVALUATION_CRITERIA}
              accentVar="--innovex-accent"
              accentColor="var(--innovex-accent)"
              icon={<Lightbulb size={18} color="var(--innovex-accent)" aria-hidden="true" />}
            />
          </Container>
        </section>
      )}

      {/* 5. Grand Jury & Adjudication Principles */}
      <section 
        aria-labelledby="jury-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div 
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: 'var(--radius-2xl)',
              background: 'linear-gradient(135deg, var(--bg-surface-2) 0%, var(--bg-surface-1) 100%)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.65rem' }}>
                <Award size={20} color="var(--elocution-accent)" aria-hidden="true" />
                <h3 
                  id="jury-heading"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    margin: 0
                  }}
                >
                  Expert Jury Panel & Objective Adjudication
                </h3>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Evaluations are conducted independently by panels of accomplished public speakers, university scholars, design thinking leaders, and social entrepreneurship mentors. Standardized rubrics ensure fair, bias-free, and constructive assessment across all symposium rounds.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', alignItems: 'flex-start' }}>
              <Placeholder label="JURY COUNCIL — TO BE PROVIDED" />
              <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Organizer: <Placeholder label="[ORGANIZER NAME]" type="inline" showIcon={false} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Closing CTA */}
      <CTASection 
        title="Ready to Test Your Skills Before the Jury?"
        subtitle="Review the criteria, prepare your discourse or innovation project, and register today."
        description="Whether entering ELOCUTION as an individual orator or building an INNOVEX initiative as a team, ELOQVENT 2K26 is your platform for growth and recognition."
        primaryCtaText="REGISTER NOW"
        primaryCtaLink="/register"
        secondaryCtaText="VIEW THE TRACKS"
        secondaryCtaLink="/tracks"
      />
    </div>
  );
};
