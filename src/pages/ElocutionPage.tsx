import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mic, 
  Sparkles, 
  ChevronRight, 
  Award, 
  Scale, 
  Brain, 
  BookOpen, 
  Flame, 
  Lightbulb, 
  FileCheck 
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { ElocutionSkills } from '../components/sections/ElocutionSkills';
import { ElocutionProgressionArc } from '../components/sections/ElocutionProgressionArc';
import { ElocutionTimeline } from '../components/sections/ElocutionTimeline';
import { CTASection } from '../components/sections/CTASection';
import { ELOCUTION_PHASES } from '../data/elocutionPhases';
import { TiltCard } from '../components/3d/TiltCard';
import { ScrollReveal } from '../components/3d/ScrollReveal';
import { BackgroundParticles } from '../components/3d/BackgroundParticles';

export const ElocutionPage: React.FC = () => {
  useEffect(() => {
    document.title = "ELOCUTION — Communication & Expression | ELOQVENT 2K26";
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* 1. Page Hero */}
      <section 
        aria-label="Elocution Track Hero"
        style={{
          position: 'relative',
          paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(13, 22, 38, 0.7) 0%, rgba(8, 12, 20, 0.4) 100%)',
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
              ELOCUTION
            </span>
          </nav>

          <div style={{ maxWidth: '920px' }}>
            <Eyebrow variant="elocution" icon={<Mic size={13} color="var(--elocution-accent)" />} style={{ marginBottom: '1rem' }}>
              ELOCUTION
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
              ELOCUTION
            </h1>

            <div 
              style={{
                fontSize: 'clamp(1.15rem, 2vw + 0.25rem, 1.5rem)',
                fontWeight: 700,
                color: 'var(--elocution-accent)',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}
            >
              Communication & Expression
            </div>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              A premier collegiate oratorical proving ground. Participants engage in communication-building, structured debate, impromptu speaking, narrative storytelling, and persuasive expression across six progressive phases.
            </p>
          </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Track Introduction */}
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
                Track Overview
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
                Developing Verbal Mastery & Dialectical Agility.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                ELOCUTION is structured as an individual participant track designed to cultivate rhetorical clarity, spontaneous thinking, and stage presence. Delegates learn to deconstruct complex societal themes, defend nuanced positions against sharp counter-arguments, and weave fact-based evidence into compelling keynote speeches.
              </p>
            </div>

            {/* Quick Track Highlight Card */}
            <div 
              className="surface-card"
              style={{
                background: 'linear-gradient(180deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
                border: '1px solid var(--elocution-border)',
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
                    color: 'var(--elocution-accent)',
                    background: 'rgba(56, 189, 248, 0.12)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--elocution-border)'
                  }}
                >
                  TRACK 01 SPECIFICATIONS
                </span>
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                  INDIVIDUAL DELEGATE
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Format:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Individual Participation</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Structure:</span>
                  <span style={{ color: 'var(--elocution-accent)', fontWeight: 600 }}>6 Progressive Phases</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Timeline:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Day 1 & Day 2 Sessions</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Key Milestone:</span>
                  <span style={{ color: 'var(--elocution-accent)', fontWeight: 600 }}>Phase 4 Day 1 Evaluation</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Skills You Build Section */}
      <ElocutionSkills />

      {/* 4. 6-Phase Progression Arc Framing */}
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
          <ElocutionProgressionArc />
        </Container>
      </section>

      {/* 5. Flagship 6-Phase Interactive Timeline */}
      <section 
        id="six-phases"
        aria-labelledby="phases-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '820px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <Eyebrow variant="elocution" style={{ marginBottom: '0.85rem' }}>
              The 6 Official Phases
            </Eyebrow>
            <h2 
              id="phases-heading"
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
              The ELOCUTION Participant Journey
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              From initial thematic orientation and impromptu speech development to structured parliamentary debates, expert feedback, and the grand finale adjudication.
            </p>
          </div>

          {/* Interactive Flagship Timeline */}
          <ElocutionTimeline phases={ELOCUTION_PHASES} variant="vertical" />
        </Container>
      </section>

      {/* 6. Evaluation Checkpoint Deep Dive Banner */}
      <section 
        aria-labelledby="eval-cta-heading"
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
              background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
              border: '1px solid var(--elocution-border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Award size={18} color="var(--elocution-accent)" aria-hidden="true" />
                <h3 
                  id="eval-cta-heading"
                  style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800, margin: 0 }}
                >
                  Phase 4 & Championship Evaluation Rubrics
                </h3>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Adjudication is conducted across clarity of expression, content structure, critical thinking, debate agility, and stage presence. Review the complete evaluation framework and criteria.
              </p>
            </div>

            <Button to="/evaluation" variant="elocution" size="md" icon={<ArrowRight size={16} aria-hidden="true" />}>
              VIEW EVALUATION
            </Button>
          </div>
        </Container>
      </section>

      {/* 7. Other Track Connection (ELOCUTION ➔ INNOVEX) */}
      <section 
        aria-labelledby="complementary-heading"
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
              background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.8) 0%, rgba(8, 28, 20, 0.8) 100%)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            <div>
              <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
                Two Tracks. One Experience.
              </Eyebrow>
              <h2 
                id="complementary-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3vw + 0.25rem, 2.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  marginBottom: '1rem'
                }}
              >
                Complementary Arenas of Excellence
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                While <strong>ELOCUTION</strong> develops the ability to communicate and defend ideas with rhetorical mastery, <strong>INNOVEX</strong> empowers teams to discover, design, develop, and present human-centred solutions to societal challenges.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} color="var(--innovex-accent)" aria-hidden="true" />
                <span>Interested in human-centred problem solving and prototyping?</span>
              </div>
              <Button to="/innovex" variant="innovex" size="md" icon={<ArrowRight size={16} aria-hidden="true" />}>
                EXPLORE INNOVEX
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Reusable Closing CTA */}
      <CTASection 
        title="Ready to Command the Stage with Rhetorical Clarity?"
        subtitle="Registration is open for collegiate delegates to compete in the ELOCUTION track."
        description="Experience a structured six-phase communication championship and defend your ideas before distinguished juries."
        primaryCtaText="REGISTER NOW"
        primaryCtaLink="/register"
        secondaryCtaText="EXPLORE ALL TRACKS"
        secondaryCtaLink="/tracks"
      />
    </div>
  );
};
