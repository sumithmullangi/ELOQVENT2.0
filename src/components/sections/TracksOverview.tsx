import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Lightbulb, Sparkles, Brain, Scale, BookOpen, Flame, Users, Search, GitMerge, Cpu, BarChart3, Trophy } from 'lucide-react';
import { Container } from '../ui/Container';
import { TiltCard } from '../3d/TiltCard';
import { ScrollReveal } from '../3d/ScrollReveal';

export const TracksOverview: React.FC = () => {
  const innovexFocusAreas = [
    { title: 'Human-Centred Design', icon: <Users size={15} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Design Thinking', icon: <Search size={15} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Root-Cause Analysis', icon: <GitMerge size={15} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Product Development', icon: <Cpu size={15} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Business Modelling', icon: <BarChart3 size={15} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Social Impact', icon: <Trophy size={15} color="var(--innovex-accent)" aria-hidden="true" /> }
  ];

  const elocutionFocusAreas = [
    { title: 'Public Speaking', icon: <Mic size={15} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Articulation', icon: <Sparkles size={15} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Critical Thinking', icon: <Brain size={15} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Debate & Rebuttal', icon: <Scale size={15} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Storytelling', icon: <BookOpen size={15} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Persuasive Delivery', icon: <Flame size={15} color="var(--elocution-accent)" aria-hidden="true" /> }
  ];

  return (
    <section 
      id="tracks"
      aria-labelledby="tracks-heading"
      className="section-py"
      style={{
        backgroundColor: '#000000',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Atmospheric Ambient Glows for Track Section */}
      <div 
        aria-hidden="true" 
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      >
        <div 
          style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(212, 178, 140, 0.09) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '-10%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(41, 151, 255, 0.09) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header with Scroll Entrance */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div style={{ maxWidth: '820px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--desert-titanium)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.85rem'
              }}
            >
              <Sparkles size={14} aria-hidden="true" />
              Competitive Tracks
            </div>

            <h2 
              id="tracks-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                color: '#f5f5f7',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              TWO TRACKS.{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #f5d7b5 0%, #d4b28c 45%, #2997ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                ONE EXPERIENCE.
              </span>
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0, maxWidth: '720px' }}>
              Choose the competitive domain that aligns with your strengths — whether you architect human-centred venture designs in <strong>Innovex</strong> or command the podium with rhetorical eloquence in <strong>Elocution</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* Two Large 3D Track Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Card 1: INNOVEX with 3D Tilt */}
          <ScrollReveal animation="flip-3d" delay={100} duration={700}>
            <TiltCard maxTilt={5} scale={1.015} style={{ height: '100%' }}>
              <div 
                className="track-card-innovex focus-visible-ring"
                style={{
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(26, 20, 14, 0.82) 0%, rgba(12, 10, 8, 0.98) 100%)',
                  border: '1px solid rgba(212, 178, 140, 0.32)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 178, 140, 0.12)',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  {/* Header Badge & Track Number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--innovex-accent)',
                        padding: '0.3rem 0.75rem',
                        background: 'rgba(212, 178, 140, 0.12)',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid rgba(212, 178, 140, 0.35)',
                        letterSpacing: '0.06em'
                      }}
                    >
                      TRACK 01 • TEAM / INDIVIDUAL
                    </span>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-mono)',
                        fontSize: '2rem', 
                        fontWeight: 800, 
                        color: 'rgba(212, 178, 140, 0.25)',
                        lineHeight: 1
                      }}
                    >
                      01
                    </span>
                  </div>

                  {/* Title, Icon & Tagline */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div 
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        background: 'rgba(212, 178, 140, 0.15)',
                        border: '1px solid rgba(212, 178, 140, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(212, 178, 140, 0.25)',
                        flexShrink: 0
                      }}
                    >
                      <Lightbulb size={26} color="var(--innovex-accent)" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 
                        style={{ 
                          fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', 
                          color: '#f5f5f7', 
                          margin: 0, 
                          fontWeight: 800, 
                          letterSpacing: '-0.03em',
                          lineHeight: 1.1
                        }}
                      >
                        INNOVEX
                      </h3>
                      <div 
                        style={{ 
                          fontSize: '1rem', 
                          color: 'var(--innovex-accent)', 
                          fontWeight: 600,
                          marginTop: '0.25rem'
                        }}
                      >
                        Human-Centred Venture Design
                      </div>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '1rem', marginBottom: '1.75rem' }}>
                    An intensive venture design sprint guiding participants through stakeholder empathy research, root-cause deconstruction, frugal prototyping, and sustainable business modelling.
                  </p>

                  {/* Focus Areas Badges */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.06em' }}>
                      Core Sprint Domains:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                      {innovexFocusAreas.map((area, idx) => (
                        <div 
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.45rem 0.65rem',
                            background: 'rgba(18, 18, 20, 0.72)',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            fontSize: '0.8125rem',
                            color: 'var(--text-primary)',
                            fontWeight: 500
                          }}
                        >
                          {area.icon}
                          <span style={{ fontSize: '0.8rem' }}>{area.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <Link 
                    to="/innovex" 
                    className="focus-visible-ring"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      width: '100%',
                      padding: '0.875rem 1.5rem',
                      borderRadius: 'var(--radius-pill)',
                      background: 'linear-gradient(135deg, #f5d7b5 0%, #d4b28c 50%, #9b7244 100%)',
                      color: '#000000',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                      boxShadow: '0 0 20px rgba(212, 178, 140, 0.35)',
                      transition: 'all var(--transition-fast)',
                      boxSizing: 'border-box'
                    }}
                  >
                    <span>EXPLORE INNOVEX</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 2: ELOCUTION with 3D Tilt */}
          <ScrollReveal animation="flip-3d" delay={250} duration={700}>
            <TiltCard maxTilt={5} scale={1.015} style={{ height: '100%' }}>
              <div 
                className="track-card-elocution focus-visible-ring"
                style={{
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(12, 20, 32, 0.82) 0%, rgba(8, 12, 20, 0.98) 100%)',
                  border: '1px solid rgba(41, 151, 255, 0.32)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(41, 151, 255, 0.12)',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  {/* Header Badge & Track Number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--elocution-accent)',
                        padding: '0.3rem 0.75rem',
                        background: 'rgba(41, 151, 255, 0.12)',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid rgba(41, 151, 255, 0.35)',
                        letterSpacing: '0.06em'
                      }}
                    >
                      TRACK 02 • INDIVIDUAL
                    </span>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-mono)',
                        fontSize: '2rem', 
                        fontWeight: 800, 
                        color: 'rgba(41, 151, 255, 0.25)',
                        lineHeight: 1
                      }}
                    >
                      02
                    </span>
                  </div>

                  {/* Title, Icon & Tagline */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div 
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        background: 'rgba(41, 151, 255, 0.15)',
                        border: '1px solid rgba(41, 151, 255, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(41, 151, 255, 0.25)',
                        flexShrink: 0
                      }}
                    >
                      <Mic size={26} color="var(--elocution-accent)" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 
                        style={{ 
                          fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', 
                          color: '#f5f5f7', 
                          margin: 0, 
                          fontWeight: 800, 
                          letterSpacing: '-0.03em',
                          lineHeight: 1.1
                        }}
                      >
                        ELOCUTION
                      </h3>
                      <div 
                        style={{ 
                          fontSize: '1rem', 
                          color: 'var(--elocution-accent)', 
                          fontWeight: 600,
                          marginTop: '0.25rem'
                        }}
                      >
                        Articulate. Persuade. Inspire.
                      </div>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '1rem', marginBottom: '1.75rem' }}>
                    A multi-stage oratorical arena designed to cultivate spontaneous thinking, structured dialectics, debate rebuttal agility, narrative mastery, and stage presence.
                  </p>

                  {/* Focus Areas Badges */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.06em' }}>
                      Core Oratorical Stages:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                      {elocutionFocusAreas.map((area, idx) => (
                        <div 
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.45rem 0.65rem',
                            background: 'rgba(18, 18, 20, 0.72)',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            fontSize: '0.8125rem',
                            color: 'var(--text-primary)',
                            fontWeight: 500
                          }}
                        >
                          {area.icon}
                          <span style={{ fontSize: '0.8rem' }}>{area.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <Link 
                    to="/elocution" 
                    className="focus-visible-ring"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      width: '100%',
                      padding: '0.875rem 1.5rem',
                      borderRadius: 'var(--radius-pill)',
                      background: 'linear-gradient(135deg, #5ac8fa 0%, #2997ff 60%, #0071e3 100%)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                      boxShadow: '0 0 20px rgba(41, 151, 255, 0.35)',
                      transition: 'all var(--transition-fast)',
                      boxSizing: 'border-box'
                    }}
                  >
                    <span>EXPLORE ELOCUTION</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

