import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Lightbulb, 
  Sparkles, 
  ChevronRight, 
  Target, 
  CheckCircle2, 
  Layers, 
  Compass, 
  FileText,
  Users,
  Search,
  GitMerge,
  Cpu,
  BarChart3,
  Trophy
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { Timeline } from '../components/sections/Timeline';
import { JourneyArc } from '../components/sections/JourneyArc';
import { CTASection } from '../components/sections/CTASection';
import { INNOVEX_JOURNEY_STEPS, JOURNEY_OUTCOMES } from '../data/innovexJourney';
import { TiltCard } from '../components/3d/TiltCard';
import { ScrollReveal } from '../components/3d/ScrollReveal';
import { BackgroundParticles } from '../components/3d/BackgroundParticles';

export const JourneyPage: React.FC = () => {
  useEffect(() => {
    document.title = "The Innovation Journey — INNOVEX | ELOQVENT 2K26";
  }, []);

  const coreMethodologies = [
    { title: 'Human-Centred Design', desc: 'Empathy immersion and lived stakeholder feedback loops.' },
    { title: 'Design Thinking', desc: 'Iterative, collaborative problem framing and prototyping.' },
    { title: 'Root-Cause Analysis', desc: '5-Whys first-principles deconstruction of systemic friction.' },
    { title: 'Solution Development', desc: 'Frugal physical, digital, or service workflow architecture.' },
    { title: 'Sustainable Modelling', desc: 'Lean unit economics, cost structures, and distribution models.' },
    { title: 'Social Impact', desc: 'Alignment with UN Sustainable Development Goals for enduring community benefit.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* 1. Journey Page Hero */}
      <section 
        aria-label="Journey Page Hero"
        style={{
          position: 'relative',
          paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.7) 0%, rgba(8, 12, 20, 0.4) 100%)',
          overflow: 'hidden'
        }}
      >
        <BackgroundParticles particleCount={25} speedMultiplier={0.25} />
        <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up" duration={600}>
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
              INNOVEX Journey
            </span>
          </nav>

          <div style={{ maxWidth: '920px' }}>
            <Eyebrow variant="innovex" icon={<Lightbulb size={13} color="var(--innovex-accent)" />} style={{ marginBottom: '1rem' }}>
              INNOVEX TRACK
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
              The Innovation Journey
            </h1>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              INNOVEX guides collegiate delegates through a rigorous, human-centred innovation framework—moving systematically from understanding people and discovering a genuine problem to developing a viable solution, building a sustainable business model, and pitching for real-world impact.
            </p>
          </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Introduction & Methodological Foundation */}
      <section 
        aria-labelledby="methodology-heading"
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
                Methodological Grounding
              </Eyebrow>
              <h2 
                id="methodology-heading"
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
                A Structured Framework for Human-Centred Problem Solving.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Rather than jumping to speculative technologies, the INNOVEX journey demands deep stakeholder empathy, disciplined symptom mapping, and first-principles root-cause isolation. Every milestone equips teams to validate assumptions before building prototypes and formulating sustainable unit economics.
              </p>
            </div>

            {/* Core Methodology Pillars */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.85rem'
              }}
            >
              {coreMethodologies.map((m, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: '1rem',
                    background: 'var(--bg-surface-2)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontSize: '0.9375rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.25rem' }}>
                    {m.title}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Transformation Arc Framing Banner */}
      <section 
        aria-labelledby="arc-heading"
        style={{
          paddingTop: 'clamp(2.5rem, 4vw, 3.5rem)',
          paddingBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <JourneyArc />
        </Container>
      </section>

      {/* 4. Flagship 7-Step Interactive Timeline Section */}
      <section 
        id="seven-steps"
        aria-labelledby="steps-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '820px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <Eyebrow variant="innovex" style={{ marginBottom: '0.85rem' }}>
              The 7 Official Milestones
            </Eyebrow>
            <h2 
              id="steps-heading"
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
              Step-by-Step INNOVEX Sprint
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Follow the complete sequence of actions and tangible outputs produced by teams across the symposium.
            </p>
          </div>

          {/* Interactive Flagship Timeline */}
          <Timeline steps={INNOVEX_JOURNEY_STEPS} variant="vertical" />
        </Container>
      </section>

      {/* 5. Journey Outcomes Section */}
      <section 
        aria-labelledby="outcomes-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '800px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
              What Participants Produce
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
              Cumulative Journey Outcomes
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Upon completing the 7-step sprint, each participating team delivers a complete, defendable social venture package.
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
            {JOURNEY_OUTCOMES.map((out, idx) => (
              <div 
                key={idx}
                className="surface-card"
                style={{
                  background: 'var(--bg-surface-1)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <CheckCircle2 size={18} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, margin: 0 }}>
                    {out.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {out.description}
                </p>
              </div>
            ))}
          </div>

          {/* Deep Dive Action Bar */}
          <div 
            style={{
              padding: '1.5rem 2rem',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.12) 0%, rgba(8, 28, 20, 0.95) 100%)',
              border: '1px solid var(--innovex-border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem'
            }}
          >
            <div>
              <div style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700 }}>
                Explore the Complete INNOVEX Track
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Review team eligibility, 5 challenge domains, and evaluation rubrics.
              </div>
            </div>

            <Button to="/innovex" variant="innovex" size="md" icon={<ArrowRight size={16} aria-hidden="true" />}>
              EXPLORE INNOVEX
            </Button>
          </div>
        </Container>
      </section>

      {/* 6. Reusable Closing CTA */}
      <CTASection 
        title="Ready to Transform Ideas into Sustainable Social Ventures?"
        subtitle="Join INNOVEX at ELOQVENT 2K26 as an individual or team of 1 to 4 delegates."
        description="Experience the complete 7-step innovation sprint and defend your venture before expert juries."
        primaryCtaText="REGISTER NOW"
        primaryCtaLink="/register"
        secondaryCtaText="EXPLORE ALL TRACKS"
        secondaryCtaLink="/tracks"
      />
    </div>
  );
};
