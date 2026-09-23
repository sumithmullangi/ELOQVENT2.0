import React from 'react';
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Placeholder } from '../ui/Placeholder';
import { Eyebrow } from '../ui/Eyebrow';
import { EVENT_METADATA } from '../../data/eventData';
import { ScrollReveal } from '../3d/ScrollReveal';
import { TiltCard } from '../3d/TiltCard';

export interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showPlaceholders?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Shape the Future with Voice & Innovation?',
  subtitle = 'Join the next generation of communicators, engineers, and social innovators at ELOQVENT 2K26.',
  description = 'Whether you command the stage with rhetorical clarity or build human-centred ventures for societal impact, ELOQVENT offers a rigorous platform to develop, test, and elevate your ideas.',
  primaryCtaText = 'REGISTER NOW',
  primaryCtaLink = '/register',
  secondaryCtaText = 'EXPLORE TRACKS',
  secondaryCtaLink = '/tracks',
  showPlaceholders = true
}) => {
  return (
    <section 
      id="closing-cta"
      aria-labelledby="cta-heading"
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-canvas)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container size="lg">
        <ScrollReveal animation="zoom-in" duration={700}>
          <TiltCard maxTilt={3} scale={1.01}>
            <div 
              className="surface-card"
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 28, 20, 0.95) 100%)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'clamp(2.5rem, 5vw, 4.5rem)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(56, 189, 248, 0.1)',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Ambient Radial Glow */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80%',
                  height: '100%',
                  background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.1) 40%, rgba(16, 185, 129, 0.08) 70%, transparent 85%)',
                  pointerEvents: 'none'
                }}
                aria-hidden="true"
              />

              <div 
                style={{
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: '840px',
                  margin: '0 auto',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}
              >
                {/* Eyebrow */}
                <Eyebrow variant="neutral" icon={<Sparkles size={13} color="var(--elocution-accent)" />}>
                  ELOQVENT 2K26 Registration
                </Eyebrow>

                {/* Main Headline */}
                <h2 
                  id="cta-heading"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4.5vw + 0.5rem, 3.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.12,
                    color: '#ffffff',
                    margin: 0
                  }}
                >
                  {title}
                </h2>

                {/* Subtitle */}
                <p 
                  style={{
                    fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                    margin: 0
                  }}
                >
                  {subtitle}
                </p>

                {/* Description */}
                <p 
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    maxWidth: '680px',
                    margin: 0
                  }}
                >
                  {description}
                </p>

                {/* Date & Venue Metadata with Placeholders */}
                {showPlaceholders && (
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1.5rem',
                      padding: '0.85rem 1.5rem',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-subtle)',
                      marginTop: '0.5rem',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <Calendar size={15} color="var(--elocution-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Date:</span>
                      <Placeholder label={EVENT_METADATA.date} />
                    </div>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <MapPin size={15} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Venue:</span>
                      <Placeholder label={EVENT_METADATA.venue} />
                    </div>
                  </div>
                )}

                {/* CTAs */}
                <div 
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <Button 
                    to={primaryCtaLink} 
                    variant="primary" 
                    size="lg"
                    icon={<ArrowRight size={18} aria-hidden="true" />}
                    style={{ minWidth: '200px' }}
                  >
                    {primaryCtaText}
                  </Button>

                  {secondaryCtaLink && (
                    <Button 
                      to={secondaryCtaLink} 
                      variant="secondary" 
                      size="lg"
                    >
                      {secondaryCtaText}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </Container>
    </section>
  );
};

