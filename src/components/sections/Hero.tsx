import React from 'react';
import { ArrowRight, Calendar, MapPin, Mic, Lightbulb, Sparkles, Layers } from 'lucide-react';
import { Button } from '../ui/Button';
import { Placeholder } from '../ui/Placeholder';
import { Eyebrow } from '../ui/Eyebrow';
import { Container } from '../ui/Container';
import { EVENT_METADATA } from '../../data/eventData';

export const Hero: React.FC = () => {
  return (
    <section 
      aria-label="Hero Section"
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: 'clamp(3rem, 6vw + 1rem, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw + 1.5rem, 6rem)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(56, 189, 248, 0.08) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 80%)',
        overflow: 'hidden'
      }}
    >
      <Container size="lg">
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {/* Top Metadata Strip: Eyebrow + Date & Venue Placeholders */}
          <div 
            className="hero-anim-1"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <Eyebrow variant="neutral" icon={<Sparkles size={13} color="var(--elocution-accent)" />}>
              National Collegiate Symposium 2K26
            </Eyebrow>

            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                fontSize: '0.85rem'
              }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Calendar size={15} color="var(--elocution-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Date:</span>
                <Placeholder label={EVENT_METADATA.date} />
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <MapPin size={15} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Venue:</span>
                <Placeholder label={EVENT_METADATA.venue} />
              </div>
            </div>
          </div>

          {/* Main Hero Editorial Headline Block */}
          <div className="hero-anim-2" style={{ maxWidth: '980px' }}>
            {/* The ONLY H1 on the homepage */}
            <h1 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 6.5vw + 1rem, 5.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.02,
                color: '#ffffff',
                marginBottom: '1rem'
              }}
            >
              ELOQVENT 2K26
            </h1>

            {/* Supporting Tagline */}
            <div 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3.2vw + 0.5rem, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #ffffff 20%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.25rem'
              }}
            >
              Two Tracks. One Experience.
            </div>

            {/* Supporting Copy (strictly PRD-derived, 1-2 sentences) */}
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '780px',
                margin: 0
              }}
            >
              A premier collegiate platform uniting oratorical eloquence with human-centred venture design. 
              Empowering students to articulate transformative ideas, deconstruct systemic challenges, and engineer sustainable solutions for real-world impact.
            </p>
          </div>

          {/* Track Relationship: ELOCUTION + INNOVEX as complementary parts */}
          <div 
            className="hero-anim-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              alignItems: 'stretch'
            }}
          >
            {/* ELOCUTION Track Relationship Card */}
            <div 
              className="surface-card"
              style={{
                background: 'linear-gradient(180deg, rgba(13, 22, 38, 0.75) 0%, rgba(8, 12, 20, 0.9) 100%)',
                border: '1px solid var(--border-subtle)',
                borderLeft: '3px solid var(--elocution-accent)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: 'var(--elocution-accent)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--elocution-border)',
                      letterSpacing: '0.06em'
                    }}
                  >
                    TRACK 01
                  </span>

                  <span className="mono-tag" style={{ color: 'var(--text-muted)', fontSize: '0.725rem' }}>
                    Individual Entry
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
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
                    <h2 
                      style={{ 
                        fontSize: '1.35rem', 
                        color: '#ffffff', 
                        fontWeight: 700, 
                        margin: 0,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      ELOCUTION
                    </h2>
                    <div style={{ fontSize: '0.875rem', color: 'var(--elocution-accent)', fontWeight: 600 }}>
                      Communication & Expression
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginTop: '0.75rem', marginBottom: '1rem' }}>
                  Public speaking, spontaneous articulation, critical dialectics, debate rebuttal agility, and persuasive storytelling.
                </p>
              </div>

              <div 
                style={{
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <span>6 Progressing Phases</span>
                <span style={{ color: 'var(--elocution-accent)' }}>Track 01 of 02</span>
              </div>
            </div>

            {/* INNOVEX Track Relationship Card */}
            <div 
              className="surface-card"
              style={{
                background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.75) 0%, rgba(8, 12, 20, 0.9) 100%)',
                border: '1px solid var(--border-subtle)',
                borderLeft: '3px solid var(--innovex-accent)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: 'var(--innovex-accent)',
                      background: 'rgba(16, 185, 129, 0.12)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--innovex-border)',
                      letterSpacing: '0.06em'
                    }}
                  >
                    TRACK 02
                  </span>

                  <span className="mono-tag" style={{ color: 'var(--text-muted)', fontSize: '0.725rem' }}>
                    Team / Individual Entry
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
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
                    <h2 
                      style={{ 
                        fontSize: '1.35rem', 
                        color: '#ffffff', 
                        fontWeight: 700, 
                        margin: 0,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      INNOVEX
                    </h2>
                    <div style={{ fontSize: '0.875rem', color: 'var(--innovex-accent)', fontWeight: 600 }}>
                      Human-Centred Innovation & Social Impact
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginTop: '0.75rem', marginBottom: '1rem' }}>
                  Human-centred design, root-cause analysis, frugal prototyping, sustainable business modelling, and venture pitching.
                </p>
              </div>

              <div 
                style={{
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <span>7 Milestone Steps</span>
                <span style={{ color: 'var(--innovex-accent)' }}>Track 02 of 02</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div 
            className="hero-anim-4"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            {/* Primary CTA */}
            <Button 
              to="/register" 
              variant="primary" 
              size="lg" 
              icon={<ArrowRight size={18} aria-hidden="true" />}
              style={{
                minWidth: '200px'
              }}
            >
              REGISTER NOW
            </Button>

            {/* Secondary CTA */}
            <Button 
              to="/tracks" 
              variant="secondary" 
              size="lg"
            >
              EXPLORE THE EVENT
            </Button>
          </div>
        </div>
      </Container>

      {/* Scoped Keyframes & Reduced-Motion CSS */}
      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-anim-1 {
          animation: heroFadeUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }

        .hero-anim-2 {
          animation: heroFadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }

        .hero-anim-3 {
          animation: heroFadeUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }

        .hero-anim-4 {
          animation: heroFadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-anim-1,
          .hero-anim-2,
          .hero-anim-3,
          .hero-anim-4 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
