import React, { useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { EVENT_METADATA } from '../../data/eventData';
import { Hero3DCanvas } from '../3d/Hero3DCanvas';
import { TiltCard } from '../3d/TiltCard';
import { CinematicAtmosphere } from '../3d/CinematicAtmosphere';

export const Hero: React.FC = () => {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let isAutoScrolling = false;

    const startTimerIfNeeded = () => {
      if (timer) clearTimeout(timer);

      // Only schedule if user is currently at the top / hero section (< 100px)
      if (window.scrollY < 100 && !isAutoScrolling) {
        timer = setTimeout(() => {
          if (window.scrollY < 100) {
            isAutoScrolling = true;
            const nextSection = document.getElementById('tracks');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({
                top: window.innerHeight - 70,
                behavior: 'smooth'
              });
            }
            // Reset autoScrolling lock after the smooth scroll finishes
            setTimeout(() => {
              isAutoScrolling = false;
            }, 1200);
          }
        }, 2500);
      }
    };

    const handleScroll = () => {
      if (isAutoScrolling) return;

      if (window.scrollY < 100) {
        // User returned to the top / Hero section, trigger timer again
        startTimerIfNeeded();
      } else {
        // User is browsing lower sections, clear any pending hero scroll timer
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    // Initial check on page load
    startTimerIfNeeded();

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);
  return (
    <section 
      aria-label="Hero Section"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - var(--nav-height))',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(3rem, 7vh, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 8vh, 6.5rem)',
        borderBottom: '1px solid var(--border-subtle)',
        backgroundColor: '#000000',
        overflow: 'hidden'
      }}
    >
      {/* 1. Cinematic Atmospheric Background: Volumetric Light & Subtle Noise */}
      <CinematicAtmosphere />

      {/* 2. Interactive 3D Canvas Object & Particle Constellation */}
      <Hero3DCanvas />

      {/* Atmospheric Lighting Layers & Low-Opacity Tech Grid */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        {/* Large blurred Desert Titanium glow top-center */}
        <div 
          style={{
            position: 'absolute',
            top: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'clamp(400px, 60vw, 850px)',
            height: 'clamp(350px, 45vw, 650px)',
            background: 'radial-gradient(circle, rgba(212, 178, 140, 0.15) 0%, rgba(168, 128, 90, 0.06) 45%, transparent 70%)',
            filter: 'blur(70px)',
            borderRadius: '50%'
          }}
        />

        {/* Soft Apple Pro Blue atmospheric glow right */}
        <div 
          style={{
            position: 'absolute',
            top: '30%',
            right: '-5%',
            width: 'clamp(300px, 40vw, 550px)',
            height: 'clamp(300px, 40vw, 550px)',
            background: 'radial-gradient(circle, rgba(41, 151, 255, 0.14) 0%, rgba(0, 113, 227, 0.05) 50%, transparent 70%)',
            filter: 'blur(80px)',
            borderRadius: '50%'
          }}
        />

        {/* Natural Titanium accent glow lower-left */}
        <div 
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '5%',
            width: 'clamp(250px, 35vw, 450px)',
            height: 'clamp(250px, 35vw, 450px)',
            background: 'radial-gradient(circle, rgba(185, 180, 173, 0.09) 0%, transparent 65%)',
            filter: 'blur(80px)',
            borderRadius: '50%'
          }}
        />

        {/* Low-opacity subtle tech grid overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 70% 65% at 50% 45%, #000 30%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 65% at 50% 45%, #000 30%, transparent 85%)',
            opacity: 0.6
          }}
        />
      </div>

      <Container size="lg" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 'clamp(1.5rem, 3vw, 2.25rem)',
            maxWidth: '1020px',
            margin: '0 auto'
          }}
        >
          {/* Badge: National Collegiate Symposium 2K26 */}
          <div 
            className="hero-anim-1"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.35rem 1rem',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(18, 18, 20, 0.75)',
              border: '1px solid rgba(212, 178, 140, 0.35)',
              boxShadow: '0 0 20px rgba(212, 178, 140, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)'
            }}
          >
            <span className="live-dot" aria-hidden="true" />
            <span 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.6875rem, 1.2vw, 0.775rem)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#f5f5f7',
                textTransform: 'uppercase'
              }}
            >
              National Collegiate Symposium 2K26
            </span>
          </div>

          {/* Dominant 3D Arched Headline: ELOQVENT 2K26 */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 
              className="hero-anim-2"
              aria-label="ELOQVENT 2K26"
              style={{
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1
              }}
            >
              {/* Arched ELOQVENT Letters */}
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'clamp(2px, 0.5vw, 6px)',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.25rem'
                }}
              >
                {[
                  { char: 'E', rot: -12, dy: 18 },
                  { char: 'L', rot: -8, dy: 9 },
                  { char: 'O', rot: -4, dy: 3 },
                  { char: 'Q', rot: -1, dy: 0 },
                  { char: 'V', rot: 1, dy: 0 },
                  { char: 'E', rot: 4, dy: 3 },
                  { char: 'N', rot: 8, dy: 9 },
                  { char: 'T', rot: 12, dy: 18 }
                ].map((item, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: "'Russo One', 'Montserrat', 'Anton', sans-serif",
                      fontSize: 'clamp(3.5rem, 9.5vw + 0.5rem, 7.5rem)',
                      fontWeight: 900,
                      color: '#ffffff',
                      display: 'inline-block',
                      transform: `translateY(${item.dy}px) rotate(${item.rot}deg)`,
                      transformOrigin: 'bottom center',
                      textShadow: `
                        1px 2px 0 #18181c,
                        2px 4px 0 #141417,
                        3px 6px 0 #101013,
                        4px 8px 0 #0c0c0e,
                        5px 10px 0 #08080a,
                        6px 12px 0 #040405,
                        8px 16px 25px rgba(0, 0, 0, 0.9),
                        0 0 40px rgba(255, 255, 255, 0.15)
                      `,
                      lineHeight: 0.9,
                      userSelect: 'none'
                    }}
                  >
                    {item.char}
                  </span>
                ))}
              </span>

              {/* 3D Block 2K26 */}
              <span 
                style={{
                  fontFamily: "'Russo One', 'Montserrat', 'Anton', sans-serif",
                  fontSize: 'clamp(3.25rem, 8vw + 0.5rem, 6.25rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  marginTop: 'clamp(0.75rem, 2vw, 1.25rem)',
                  marginBottom: 'clamp(0.85rem, 2vw, 1.25rem)',
                  display: 'block',
                  textShadow: `
                    1px 2px 0 #18181c,
                    2px 4px 0 #141417,
                    3px 6px 0 #101013,
                    4px 8px 0 #0c0c0e,
                    5px 10px 0 #08080a,
                    6px 12px 0 #040405,
                    8px 16px 25px rgba(0, 0, 0, 0.9),
                    0 0 35px rgba(255, 255, 255, 0.15)
                  `,
                  userSelect: 'none'
                }}
              >
                2K26
              </span>
            </h1>

            {/* Tagline: TECH • TALK • TRIUMPH */}
            <div 
              className="hero-anim-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', var(--font-body)",
                fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                fontWeight: 800,
                letterSpacing: 'clamp(0.2em, 0.4vw, 0.35em)',
                color: '#f5f5f7',
                textTransform: 'uppercase',
                marginTop: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(0.5rem, 1.2vw, 1rem)',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
              }}
            >
              <span>TECH</span>
              <span style={{ color: 'var(--desert-titanium)', opacity: 0.9 }}>•</span>
              <span>TALK</span>
              <span style={{ color: 'var(--pro-blue)', opacity: 0.9 }}>•</span>
              <span>TRIUMPH</span>
            </div>
          </div>





          {/* Event Information: Two Compact 3D Interactive Glass Cards */}
          <div 
            className="hero-anim-6"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
              marginTop: '1.25rem',
              width: '100%'
            }}
          >
            {/* Date Pill Card with 3D Tilt */}
            <TiltCard maxTilt={6} scale={1.03}>
              <div 
                className="glass-pill"
                style={{
                  border: '1px solid rgba(212, 178, 140, 0.35)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(212, 178, 140, 0.18)'
                }}
              >
                <Calendar size={16} color="var(--desert-titanium)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>DATE:</span>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8125rem', 
                    fontWeight: 600, 
                    color: '#f5f5f7',
                    letterSpacing: '0.04em'
                  }}
                >
                  {EVENT_METADATA.date}
                </span>
              </div>
            </TiltCard>

            {/* Venue Pill Card with 3D Tilt */}
            <TiltCard maxTilt={6} scale={1.03}>
              <div 
                className="glass-pill"
                style={{
                  border: '1px solid rgba(185, 180, 173, 0.35)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(185, 180, 173, 0.15)'
                }}
              >
                <MapPin size={16} color="var(--natural-titanium)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>VENUE:</span>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8125rem', 
                    fontWeight: 600, 
                    color: '#f5f5f7',
                    letterSpacing: '0.04em'
                  }}
                >
                  {EVENT_METADATA.venue}
                </span>
              </div>
            </TiltCard>
          </div>
        </div>
      </Container>

      {/* Scoped Keyframes & Smooth Motion */}
      <style>{`
        @keyframes heroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-anim-1 {
          animation: heroFadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }

        .hero-anim-2 {
          animation: heroFadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }

        .hero-anim-3 {
          animation: heroFadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.24s both;
        }

        .hero-anim-4 {
          animation: heroFadeInUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.32s both;
        }

        .hero-anim-5 {
          animation: heroFadeInUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.40s both;
        }

        .hero-anim-6 {
          animation: heroFadeInUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.48s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-anim-1,
          .hero-anim-2,
          .hero-anim-3,
          .hero-anim-4,
          .hero-anim-5,
          .hero-anim-6 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

