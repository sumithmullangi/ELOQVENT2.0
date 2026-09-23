import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Mic, 
  Lightbulb, 
  Target, 
  CheckCircle2, 
  Layers, 
  Globe2, 
  Compass, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  Cpu,
  BarChart3,
  Users
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { Placeholder } from '../components/ui/Placeholder';
import { CTASection } from '../components/sections/CTASection';
import { EVENT_METADATA } from '../data/eventData';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About ELOQVENT 2K26 — National Multidisciplinary Symposium | Purpose & Philosophy";
  }, []);

  const eventObjectives = [
    {
      num: '01',
      title: 'Effective Communication & Articulation',
      description: 'Cultivate rhetorical mastery, spontaneous articulation, and the ability to convey complex technical or societal ideas with clarity and persuasive presence.'
    },
    {
      num: '02',
      title: 'Critical Thinking & Problem Analysis',
      description: 'Equip participants to deconstruct contemporary socio-technological challenges, evaluate counter-arguments, and question surface-level assumptions.'
    },
    {
      num: '03',
      title: 'SDG-Driven Decision Making',
      description: 'Ground all innovation initiatives in the United Nations Sustainable Development Goals, fostering systemic awareness of environmental and social realities.'
    },
    {
      num: '04',
      title: 'Empathy-Driven & Human-Centred Problem Solving',
      description: 'Engage in deep stakeholder immersion, experiential interviews, and user persona mapping before attempting to architect interventions.'
    },
    {
      num: '05',
      title: 'Root-Cause Identification',
      description: 'Apply structured analytical tools—including the 5-Whys and Ishikawa diagrams—to separate superficial symptoms from fundamental systemic failure points.'
    },
    {
      num: '06',
      title: 'Practical Solutions & Frugal Prototyping',
      description: 'Transform abstract concepts into tangible, deployable workflows, physical mockups, digital wireframes, or service blueprints.'
    },
    {
      num: '07',
      title: 'Sustainable Business Models & Unit Economics',
      description: 'Architect viable, self-sustaining financial structures, operational roadmaps, and lean distributions that can survive past initial funding.'
    },
    {
      num: '08',
      title: 'Expert Evaluation & Rigorous Jury Defense',
      description: 'Present before panels of academic scholars, venture leaders, and domain practitioners, learning to defend claims with evidence and composure.'
    },
    {
      num: '09',
      title: 'Measurable Social Impact & Entrepreneurship',
      description: 'Nurture an enduring entrepreneurial mindset committed to measurable uplift in healthcare, agriculture, clean water, circular economy, and education.'
    }
  ];

  const integrationDisciplines = [
    'Public Speaking',
    'Design Thinking',
    'Human-Centred Innovation',
    'Product Development',
    'Business Model Development',
    'Social Impact',
    'Sustainable Development',
    'SDG-Oriented Thinking'
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* 1. About Page Hero */}
      <section 
        aria-label="About Page Hero"
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
              About
            </span>
          </nav>

          <div style={{ maxWidth: '920px' }}>
            <Eyebrow variant="neutral" icon={<Sparkles size={13} color="var(--elocution-accent)" />} style={{ marginBottom: '1rem' }}>
              ELOQVENT 2K26
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
              A Multidisciplinary Platform for Voice, Innovation & Social Impact
            </h1>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              <strong>ELOQVENT 2K26</strong> is a two-day national symposium designed to empower emerging collegiate thinkers. 
              By integrating persuasive articulation with structured human-centred innovation, the event cultivates the essential competencies needed to solve pressing societal challenges.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. What ELOQVENT Is (Editorial Exposition) */}
      <section 
        aria-labelledby="what-is-heading"
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
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Editorial Statement */}
            <div>
              <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
                Event Purpose
              </Eyebrow>
              <h2 
                id="what-is-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3.5vw + 0.25rem, 2.75rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  marginBottom: '1.25rem'
                }}
              >
                Bridging Rhetorical Articulation and Practical Problem-Solving.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Traditional academic competitions frequently isolate disciplines: oratorical contests evaluate delivery without technical application, while technological hackathons often overlook empathy research, systemic analysis, and persuasive defense.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                ELOQVENT 2K26 bridges this divide. Over two intensive days, participants explore human-centred design, critical dialectics, frugal prototyping, and sustainable business models—learning how to champion ideas with both clarity of speech and validity of execution.
              </p>
            </div>

            {/* Right Column: Multidisciplinary Integration Card */}
            <div 
              className="surface-card"
              style={{
                background: 'var(--bg-surface-1)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <Compass size={20} color="var(--elocution-accent)" aria-hidden="true" />
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, margin: 0 }}>
                  Integrated Multidisciplinary Domains
                </h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Participants build cross-cutting capabilities grounded in United Nations Sustainable Development Goals (SDGs) and real-world implementation constraints:
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {integrationDisciplines.map((disc, idx) => (
                  <span 
                    key={idx}
                    style={{
                      fontSize: '0.8125rem',
                      padding: '0.4rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500
                    }}
                  >
                    {disc}
                  </span>
                ))}
              </div>

              <div 
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)'
                }}
              >
                <Globe2 size={15} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>Focus on regional, national, and global sustainability themes.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Event Objectives (Editorial Numbered Layout) */}
      <section 
        aria-labelledby="objectives-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '800px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
            <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
              Symposium Goals
            </Eyebrow>
            <h2 
              id="objectives-heading"
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
              Official Event Objectives
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Derived directly from the official ELOQVENT 2K26 charter, these nine objectives define the participant learning arc across both tracks.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {eventObjectives.map((obj) => (
              <div 
                key={obj.num}
                className="surface-card"
                style={{
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.125rem',
                      fontWeight: 800,
                      color: 'var(--elocution-accent)',
                      display: 'inline-block',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {obj.num}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.3 }}>
                    {obj.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Two-Track Structure & Visual Diagram */}
      <section 
        aria-labelledby="structure-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div style={{ maxWidth: '820px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <Eyebrow variant="neutral" style={{ marginBottom: '0.85rem' }}>
              Dual-Track Architecture
            </Eyebrow>
            <h2 
              id="structure-heading"
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
              Two Complementary Tracks. One Unified Purpose.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
              ELOCUTION develops the ability to communicate and defend ideas. INNOVEX develops the ability to discover, design, develop, and present solutions.
            </p>
          </div>

          {/* Inline Structural Diagram */}
          <div 
            className="surface-card"
            style={{
              background: 'linear-gradient(180deg, var(--bg-surface-1) 0%, var(--bg-surface-2) 100%)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              marginBottom: '3rem'
            }}
          >
            {/* Top Root Node */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
                  border: '1px solid var(--border-bright)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#ffffff'
                }}
              >
                <Sparkles size={16} color="var(--elocution-accent)" aria-hidden="true" />
                ELOQVENT 2K26
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                Two-Day Multidisciplinary Symposium
              </div>
            </div>

            {/* Connecting Visual Lines & Two Tracks Split */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}
            >
              {/* ELOCUTION Track Branch */}
              <div 
                style={{
                  background: 'rgba(13, 22, 38, 0.85)',
                  border: '1px solid var(--elocution-border)',
                  borderTop: '3px solid var(--elocution-accent)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Mic size={18} color="var(--elocution-accent)" aria-hidden="true" />
                    <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                      ELOCUTION
                    </h3>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--elocution-accent)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    Communication & Expression
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Focuses on the art of persuasive articulation, critical reasoning, spontaneous rebuttal, and rigorous defense of complex motions.
                  </p>
                </div>
                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <Button to="/elocution" variant="elocution" size="sm" icon={<ArrowRight size={14} aria-hidden="true" />}>
                    EXPLORE ELOCUTION
                  </Button>
                </div>
              </div>

              {/* INNOVEX Track Branch */}
              <div 
                style={{
                  background: 'rgba(8, 28, 20, 0.85)',
                  border: '1px solid var(--innovex-border)',
                  borderTop: '3px solid var(--innovex-accent)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Lightbulb size={18} color="var(--innovex-accent)" aria-hidden="true" />
                    <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                      INNOVEX
                    </h3>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--innovex-accent)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    Human-Centred Innovation & Social Impact
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Guides teams through a 7-step innovation sprint—from community empathy and root cause discovery to frugal prototypes and sustainable ventures.
                  </p>
                </div>
                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <Button to="/innovex" variant="innovex" size="sm" icon={<ArrowRight size={14} aria-hidden="true" />}>
                    EXPLORE INNOVEX
                  </Button>
                </div>
              </div>
            </div>

            {/* Convergence Node: Shared Competencies */}
            <div 
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-medium)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.06em' }}>
                Convergent Impact:
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--elocution-accent)' }}>Communication</span>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <span style={{ color: '#ffffff' }}>Critical Thinking</span>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <span style={{ color: 'var(--innovex-accent)' }}>Innovation</span>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <span style={{ color: '#34d399' }}>Social Impact</span>
                <span style={{ color: 'var(--text-muted)' }}>•</span>
                <span style={{ color: '#a855f7' }}>Sustainability</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Organization & Host Institution Details */}
      <section 
        aria-labelledby="organizer-heading"
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
              background: 'var(--bg-surface-2)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(2rem, 3vw, 2.5rem)'
            }}
          >
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1.5rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1.5rem',
                marginBottom: '1.5rem'
              }}
            >
              <div>
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                  ORGANIZING BODY & HOST INSTITUTION
                </span>
                <h2 
                  id="organizer-heading"
                  style={{
                    fontSize: '1.5rem',
                    color: '#ffffff',
                    fontWeight: 700,
                    margin: '0.35rem 0 0 0'
                  }}
                >
                  Symposium Governance & Administration
                </h2>
              </div>
              <Placeholder label="ORGANIZER DETAILS — TO BE PROVIDED" />
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Host Institution:
                </div>
                <div style={{ marginTop: '0.4rem' }}>
                  <Placeholder label={EVENT_METADATA.organizer} />
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Campus Venue:
                </div>
                <div style={{ marginTop: '0.4rem' }}>
                  <Placeholder label={EVENT_METADATA.venue} />
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Event Dates:
                </div>
                <div style={{ marginTop: '0.4rem' }}>
                  <Placeholder label={EVENT_METADATA.date} />
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Official Email:
                </div>
                <div style={{ marginTop: '0.4rem' }}>
                  <Placeholder label={EVENT_METADATA.contactEmail} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Reusable Closing CTA */}
      <CTASection 
        title="Ready to Develop Your Voice and Shape Real Solutions?"
        subtitle="Step into ELOQVENT 2K26 and become part of a two-day transformative collegiate experience."
        description="Select your preferred competitive domain or explore both tracks in detail before completing your registration."
        primaryCtaText="REGISTER NOW"
        primaryCtaLink="/register"
        secondaryCtaText="EXPLORE THE TRACKS"
        secondaryCtaLink="/tracks"
      />
    </div>
  );
};
