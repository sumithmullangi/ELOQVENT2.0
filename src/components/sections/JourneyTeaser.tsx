import React from 'react';
import { ArrowRight, ChevronRight, Sparkles, FileText } from 'lucide-react';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { INNOVEX_JOURNEY_STEPS } from '../../data/eventData';
import { ScrollReveal } from '../3d/ScrollReveal';
import { TiltCard } from '../3d/TiltCard';

export const JourneyTeaser: React.FC = () => {
  return (
    <section 
      id="journey-teaser"
      aria-labelledby="journey-heading"
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-canvas)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <Container size="lg">
        {/* Section Heading with CTA Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
              marginBottom: 'clamp(2rem, 4vw, 3rem)'
            }}
          >
            <div style={{ maxWidth: '780px' }}>
              <Eyebrow variant="innovex" style={{ marginBottom: '0.85rem' }}>
                7-Step Innovation Framework
              </Eyebrow>
              <h2 
                id="journey-heading"
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
                The INNOVEX Journey Arc
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                From deep community empathy to validated prototypes and sustainable venture models.
              </p>
            </div>

            <div>
              <Button to="/journey" variant="outline" size="sm" icon={<ArrowRight size={14} aria-hidden="true" />}>
                EXPLORE THE JOURNEY
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 5-Part Transformation Framing Banner */}
        <ScrollReveal animation="zoom-in" delay={150} duration={600}>
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)',
              border: '1px solid var(--border-medium)',
              marginBottom: '2.5rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: 600, fontSize: '0.875rem' }}>
              <Sparkles size={16} color="var(--innovex-accent)" aria-hidden="true" />
              <span>TRANSFORMATION LIFECYCLE:</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: 'var(--elocution-accent)', fontWeight: 700 }}>PROBLEM</span>
              <ChevronRight size={14} color="var(--text-muted)" aria-hidden="true" />
              <span style={{ color: '#38bdf8', fontWeight: 700 }}>INSIGHT</span>
              <ChevronRight size={14} color="var(--text-muted)" aria-hidden="true" />
              <span style={{ color: '#a855f7', fontWeight: 700 }}>IDEA</span>
              <ChevronRight size={14} color="var(--text-muted)" aria-hidden="true" />
              <span style={{ color: 'var(--innovex-accent)', fontWeight: 700 }}>SOLUTION</span>
              <ChevronRight size={14} color="var(--text-muted)" aria-hidden="true" />
              <span style={{ color: '#34d399', fontWeight: 800 }}>IMPACT</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 7 Official Steps Timeline Cards with 3D Tilt */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {INNOVEX_JOURNEY_STEPS.map((step, idx) => (
            <ScrollReveal key={step.step} animation="flip-3d" delay={80 * idx} duration={650}>
              <TiltCard maxTilt={5} scale={1.02} style={{ height: '100%' }}>
                <div 
                  className="surface-card"
                  style={{
                    height: '100%',
                    background: 'var(--bg-surface-1)',
                    border: '1px solid var(--border-subtle)',
                    borderTop: '3px solid var(--innovex-accent)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span 
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          color: 'var(--innovex-accent)',
                          background: 'rgba(16, 185, 129, 0.12)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-sm)'
                        }}
                      >
                        STEP {step.step}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.25 }}>
                      {step.title}
                    </h3>

                    <div style={{ fontSize: '0.75rem', color: 'var(--innovex-accent)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                      {step.tagline}
                    </div>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {step.description}
                    </p>
                  </div>

                  <div 
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <FileText size={13} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile / Responsive Bottom Action */}
        <ScrollReveal animation="fade-up" delay={200} duration={600}>
          <div style={{ textAlign: 'center' }}>
            <Button to="/journey" variant="innovex" size="md" icon={<ArrowRight size={16} aria-hidden="true" />}>
              VIEW DETAILED 7-STEP TOOLKIT
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

