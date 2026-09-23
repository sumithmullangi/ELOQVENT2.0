import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Sparkles, Compass } from 'lucide-react';
import { Container } from '../ui/Container';
import { EVENT_METADATA } from '../../data/eventData';
import { Hero3DCanvas } from '../3d/Hero3DCanvas';
import { TiltCard } from '../3d/TiltCard';
import { CinematicAtmosphere } from '../3d/CinematicAtmosphere';

export const Hero: React.FC = () => {
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
        backgroundColor: '#050816',
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
        {/* Large blurred cyan/blue glow top-center */}
        <div 
          style={{
            position: 'absolute',
            top: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'clamp(400px, 60vw, 850px)',
            height: 'clamp(350px, 45vw, 650px)',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(37, 99, 235, 0.08) 45%, transparent 70%)',
            filter: 'blur(70px)',
            borderRadius: '50%'
          }}
        />

        {/* Soft violet atmospheric glow right */}
        <div 
          style={{
            position: 'absolute',
            top: '30%',
            right: '-5%',
            width: 'clamp(300px, 40vw, 550px)',
            height: 'clamp(300px, 40vw, 550px)',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, rgba(129, 140, 248, 0.05) 50%, transparent 70%)',
            filter: 'blur(80px)',
            borderRadius: '50%'
          }}
        />

        {/* Emerald accent glow lower-left */}
        <div 
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '5%',
            width: 'clamp(250px, 35vw, 450px)',
            height: 'clamp(250px, 35vw, 450px)',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 65%)',
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
              background: 'rgba(10, 16, 36, 0.75)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <span className="live-dot-cyan" aria-hidden="true" />
            <span 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.6875rem, 1.2vw, 0.775rem)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#e0f2fe',
                textTransform: 'uppercase'
              }}
            >
              National Collegiate Symposium 2K26
            </span>
          </div>

          {/* Dominant Headline: ELOQVENT 2K26 */}
          <div style={{ width: '100%' }}>
            <h1 
              className="hero-anim-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.25rem, 8.5vw + 0.5rem, 6.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.98,
                color: '#ffffff',
                margin: '0 0 0.75rem 0',
                textTransform: 'uppercase',
                textShadow: '0 0 45px rgba(56, 189, 248, 0.25)'
              }}
            >
              ELOQVENT{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 25px rgba(56, 189, 248, 0.35))',
                  display: 'inline-block'
                }}
              >
                2K26
              </span>
            </h1>

            {/* Subtitle */}
            <div 
              className="hero-anim-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.75vw + 0.25rem, 2.25rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                color: '#cbd5e1',
                marginTop: '0.5rem'
              }}
            >
              Two Tracks. One Experience.
            </div>
          </div>

          {/* Controlled Max-Width Description */}
          <p 
            className="hero-anim-4"
            style={{
              fontSize: 'clamp(1rem, 1.3vw + 0.2rem, 1.1875rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto',
              fontWeight: 400
            }}
          >
            A premier collegiate platform uniting oratorical eloquence with human-centred venture design. 
            Empowering students to articulate transformative ideas, deconstruct systemic challenges, and engineer sustainable solutions for real-world impact.
          </p>

          {/* Action CTAs */}
          <div 
            className="hero-anim-5"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '0.5rem',
              width: '100%'
            }}
          >
            {/* Primary CTA: REGISTER NOW */}
            <Link 
              to="/register" 
              className="btn-hero-primary focus-visible-ring"
              style={{
                padding: '0.875rem 2.25rem',
                fontSize: '1rem',
                minWidth: '210px'
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            {/* Secondary CTA: EXPLORE TRACKS */}
            <a 
              href="#tracks" 
              className="btn-hero-secondary focus-visible-ring"
              style={{
                padding: '0.875rem 2rem',
                fontSize: '1rem',
                minWidth: '190px'
              }}
            >
              <Compass size={18} color="var(--elocution-accent)" aria-hidden="true" />
              <span>EXPLORE TRACKS</span>
            </a>
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
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45), 0 0 15px rgba(56, 189, 248, 0.15)'
                }}
              >
                <Calendar size={16} color="var(--elocution-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>DATE:</span>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8125rem', 
                    fontWeight: 600, 
                    color: '#f8fafc',
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
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45), 0 0 15px rgba(168, 85, 247, 0.15)'
                }}
              >
                <MapPin size={16} color="var(--violet-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>VENUE:</span>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8125rem', 
                    fontWeight: 600, 
                    color: '#f8fafc',
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

