import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mic, 
  Lightbulb, 
  Sparkles, 
  Brain, 
  Scale, 
  BookOpen, 
  Flame, 
  Users, 
  Search, 
  GitMerge, 
  Cpu, 
  BarChart3, 
  Trophy, 
  CheckCircle2, 
  ChevronRight,
  Layers,
  HeartPulse,
  Sprout,
  Droplets,
  Recycle,
  GraduationCap
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { TrackComparison } from '../components/sections/TrackComparison';
import { CTASection } from '../components/sections/CTASection';
import { ELOCUTION_PILLARS, INNOVEX_THEMES } from '../data/eventData';

export const TracksPage: React.FC = () => {
  useEffect(() => {
    document.title = "Event Tracks — ELOQVENT 2K26 | Elocution & Innovex";
  }, []);

  const elocutionFocusAreas = [
    { title: 'Public Speaking', icon: <Mic size={16} color="var(--elocution-accent)" aria-hidden="true" />, desc: 'Commanding stage presence, vocal modulation, and audience connection.' },
    { title: 'Articulation', icon: <Sparkles size={16} color="var(--elocution-accent)" aria-hidden="true" />, desc: 'Structuring complex concepts into clear, precise, and resonant speech.' },
    { title: 'Critical Thinking', icon: <Brain size={16} color="var(--elocution-accent)" aria-hidden="true" />, desc: 'Nuanced policy analysis, identifying fallacies, and framing arguments.' },
    { title: 'Debate & Rebuttal', icon: <Scale size={16} color="var(--elocution-accent)" aria-hidden="true" />, desc: 'Agile dialectics, timed counter-arguments, and respectful cross-examination.' },
    { title: 'Storytelling', icon: <BookOpen size={16} color="var(--elocution-accent)" aria-hidden="true" />, desc: 'Weaving evidentiary rigor and human emotion into memorable narratives.' },
    { title: 'Persuasive Communication', icon: <Flame size={16} color="var(--elocution-accent)" aria-hidden="true" />, desc: 'Crafting compelling calls-to-action that inspire tangible mindset shifts.' }
  ];

  const innovexFocusAreas = [
    { title: 'Human-Centred Design', icon: <Users size={16} color="var(--innovex-accent)" aria-hidden="true" />, desc: 'Grounding solutions in deep stakeholder empathy and lived experiences.' },
    { title: 'Design Thinking', icon: <Search size={16} color="var(--innovex-accent)" aria-hidden="true" />, desc: 'Iterative problem framing, user persona synthesis, and journey mapping.' },
    { title: 'Root-Cause Analysis', icon: <GitMerge size={16} color="var(--innovex-accent)" aria-hidden="true" />, desc: '5-Whys first-principles deconstruction and causal loop mapping.' },
    { title: 'Product / Service Prototyping', icon: <Cpu size={16} color="var(--innovex-accent)" aria-hidden="true" />, desc: 'Frugal hardware mockups, digital workflows, or service blueprints.' },
    { title: 'Business Modelling', icon: <BarChart3 size={16} color="var(--innovex-accent)" aria-hidden="true" />, desc: 'Lean Social Business Canvas, unit economics, and breakeven pathways.' },
    { title: 'Social Entrepreneurship', icon: <Trophy size={16} color="var(--innovex-accent)" aria-hidden="true" />, desc: 'Executive pitching and defense before venture and academic juries.' }
  ];

  const themeIcons: Record<string, React.ReactNode> = {
    healthcare: <HeartPulse size={16} color="var(--innovex-accent)" aria-hidden="true" />,
    agriculture: <Sprout size={16} color="var(--innovex-accent)" aria-hidden="true" />,
    'water-sanitation': <Droplets size={16} color="var(--innovex-accent)" aria-hidden="true" />,
    'waste-circularity': <Recycle size={16} color="var(--innovex-accent)" aria-hidden="true" />,
    'education-learning': <GraduationCap size={16} color="var(--innovex-accent)" aria-hidden="true" />
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* 1. Tracks Page Hero */}
      <section 
        aria-label="Tracks Page Hero"
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
          {/* Breadcrumb */}
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
              Tracks
            </span>
          </nav>

          <div style={{ maxWidth: '920px' }}>
            <Eyebrow variant="neutral" icon={<Layers size={13} color="var(--elocution-accent)" />} style={{ marginBottom: '1rem' }}>
              THE TWO TRACKS
            </Eyebrow>

            <h1 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5vw + 0.5rem, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                color: '#ffffff',
                marginBottom: '1.25rem'
              }}
            >
              Two Specialized Tracks. One Unified Experience.
            </h1>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              ELOQVENT 2K26 provides two complementary participant experiences: <strong>ELOCUTION</strong> develops the ability to communicate and defend ideas under rigorous adjudication, while <strong>INNOVEX</strong> empowers delegates to discover, design, develop, and present human-centred solutions to real-world challenges.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Side-by-Side Track Comparison Matrix */}
      <TrackComparison />

      {/* 3. ELOCUTION Track Summary Section */}
      <section 
        id="elocution-summary"
        aria-labelledby="elocution-summary-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
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
            {/* Left Description Column */}
            <div>
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
                  letterSpacing: '0.06em',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}
              >
                TRACK 01 • INDIVIDUAL PARTICIPATION
              </span>

              <h2 
                id="elocution-summary-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3.5vw + 0.25rem, 2.75rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}
              >
                ELOCUTION
              </h2>
              <div style={{ fontSize: '1.05rem', color: 'var(--elocution-accent)', fontWeight: 600, marginBottom: '1.25rem' }}>
                Communication & Expression
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                ELOCUTION is designed for individual thinkers who want to command the stage with clarity, intellectual rigor, and conviction. Across 6 progressive phases, orators are challenged through prepared keynotes, spontaneous extempore, structured debate dialectics, and unexpected cross-examinations.
              </p>

              <div 
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(56, 189, 248, 0.05)',
                  border: '1px solid var(--elocution-border)',
                  marginBottom: '1.75rem'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--elocution-accent)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Progression Model:
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  Phase 1 (Orientation) → Phase 2 (Expression Dev) → Phase 3 (Structured Debate) → Phase 4 (Day 1 Deliberation) → Phase 5 (Advanced Keynote) → Phase 6 (Grand Finale).
                </div>
              </div>

              <Button 
                to="/elocution" 
                variant="elocution" 
                size="md" 
                icon={<ArrowRight size={16} aria-hidden="true" />}
              >
                EXPLORE ELOCUTION
              </Button>
            </div>

            {/* Right Focus Areas Grid */}
            <div 
              className="surface-card"
              style={{
                background: 'linear-gradient(180deg, rgba(13, 22, 38, 0.85) 0%, rgba(8, 12, 20, 0.95) 100%)',
                border: '1px solid var(--elocution-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} color="var(--elocution-accent)" aria-hidden="true" />
                Official ELOCUTION Focus Areas
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
                {elocutionFocusAreas.map((area, idx) => (
                  <div 
                    key={idx}
                    style={{
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ marginTop: '0.15rem', flexShrink: 0 }}>
                      {area.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.15rem' }}>
                        {area.title}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                        {area.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. INNOVEX Track Summary Section */}
      <section 
        id="innovex-summary"
        aria-labelledby="innovex-summary-heading"
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
            {/* Left Description Column */}
            <div>
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
                  letterSpacing: '0.06em',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}
              >
                TRACK 02 • TEAM / INDIVIDUAL
              </span>

              <h2 
                id="innovex-summary-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3.5vw + 0.25rem, 2.75rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}
              >
                INNOVEX
              </h2>
              <div style={{ fontSize: '1.05rem', color: 'var(--innovex-accent)', fontWeight: 600, marginBottom: '1.25rem' }}>
                Human-Centred Innovation & Social Impact
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                INNOVEX is an intensive innovation track where multidisciplinary teams deconstruct complex community challenges. Participants apply design thinking, conduct 5-Whys root cause discovery, construct functional prototypes, and model sustainable social enterprises.
              </p>

              {/* 5 Core Challenge Domains Badge Strip */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                  5 Core Challenge Domains:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {INNOVEX_THEMES.map((th) => (
                    <div 
                      key={th.id}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.7rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid var(--innovex-border)',
                        fontSize: '0.8125rem',
                        color: 'var(--text-primary)',
                        fontWeight: 500
                      }}
                    >
                      {themeIcons[th.id]}
                      <span>{th.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                to="/innovex" 
                variant="innovex" 
                size="md" 
                icon={<ArrowRight size={16} aria-hidden="true" />}
              >
                EXPLORE INNOVEX
              </Button>
            </div>

            {/* Right Focus Areas Grid */}
            <div 
              className="surface-card"
              style={{
                background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.85) 0%, rgba(8, 12, 20, 0.95) 100%)',
                border: '1px solid var(--innovex-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 2.5vw, 2rem)'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Lightbulb size={18} color="var(--innovex-accent)" aria-hidden="true" />
                Official INNOVEX Focus Areas
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
                {innovexFocusAreas.map((area, idx) => (
                  <div 
                    key={idx}
                    style={{
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ marginTop: '0.15rem', flexShrink: 0 }}>
                      {area.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.15rem' }}>
                        {area.title}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                        {area.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Track Relationship & Synergy Section */}
      <section 
        aria-labelledby="synergy-heading"
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
              background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.8) 0%, rgba(8, 28, 20, 0.8) 100%)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              textAlign: 'center'
            }}
          >
            <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
              Complementary Roles
            </Eyebrow>
            <h2 
              id="synergy-heading"
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
              TWO TRACKS. ONE EXPERIENCE.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '760px', margin: '0 auto 2rem auto' }}>
              Whether analyzing policy motions through oratorical debate in ELOCUTION or constructing frugal SDG interventions in INNOVEX, every participant contributes to a shared culture of intellectual rigor, social responsibility, and sustainable change.
            </p>

            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.25rem'
              }}
            >
              <Button to="/elocution" variant="elocution" size="md">
                EXPLORE ELOCUTION
              </Button>
              <Button to="/innovex" variant="innovex" size="md">
                EXPLORE INNOVEX
              </Button>
              <Button to="/eligibility" variant="outline" size="md">
                VIEW ELIGIBILITY
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Closing CTA */}
      <CTASection 
        title="Ready to Select Your Track and Compete?"
        subtitle="Registration is open for collegiate delegates across Engineering, Technology, and Management."
        description="Choose your arena of excellence and participate in a transformative two-day national symposium."
        primaryCtaText="REGISTER NOW"
        primaryCtaLink="/register"
        secondaryCtaText="VIEW SCHEDULE"
        secondaryCtaLink="/schedule"
      />
    </div>
  );
};
