import React, { useState } from 'react';
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
  RotateCw,
  Eye
} from 'lucide-react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../3d/ScrollReveal';

interface TrackCardProps {
  trackNumber: string;
  badgeText: string;
  title: string;
  subtitle: string;
  description: string;
  focusTitle: string;
  focusAreas: Array<{ title: string; icon: React.ReactNode }>;
  exploreLink: string;
  buttonText: string;
  theme: 'innovex' | 'elocution';
  icon: React.ReactNode;
}

const FlipTrackCard: React.FC<TrackCardProps> = ({
  trackNumber,
  badgeText,
  title,
  subtitle,
  description,
  focusTitle,
  focusAreas,
  exploreLink,
  buttonText,
  theme,
  icon
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isInnovex = theme === 'innovex';
  const accentColor = isInnovex ? 'var(--innovex-accent)' : 'var(--elocution-accent)';
  const borderColor = isInnovex ? 'rgba(212, 178, 140, 0.35)' : 'rgba(41, 151, 255, 0.35)';
  const badgeBg = isInnovex ? 'rgba(212, 178, 140, 0.12)' : 'rgba(41, 151, 255, 0.12)';
  const glowShadow = isInnovex 
    ? '0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 178, 140, 0.18)' 
    : '0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(41, 151, 255, 0.18)';
  const btnGradient = isInnovex
    ? 'linear-gradient(135deg, #f5d7b5 0%, #d4b28c 50%, #9b7244 100%)'
    : 'linear-gradient(135deg, #5ac8fa 0%, #2997ff 60%, #0071e3 100%)';
  const btnColor = isInnovex ? '#000000' : '#ffffff';

  return (
    <div
      className="flip-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: '1200px',
        width: '100%',
        minHeight: '480px',
        cursor: 'pointer'
      }}
    >
      <div
        className="flip-card-inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: '480px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* ================= FRONT SIDE (Sleek Minimal Name & Branding) ================= */}
        <div
          className="flip-card-front"
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: 'var(--radius-xl)',
            background: isInnovex
              ? 'linear-gradient(180deg, rgba(28, 22, 15, 0.92) 0%, rgba(12, 10, 8, 0.98) 100%)'
              : 'linear-gradient(180deg, rgba(12, 22, 38, 0.92) 0%, rgba(8, 12, 20, 0.98) 100%)',
            border: `1px solid ${borderColor}`,
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: glowShadow,
            boxSizing: 'border-box'
          }}
        >
          {/* Top Bar: Badge & Number */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: accentColor,
                padding: '0.35rem 0.85rem',
                background: badgeBg,
                borderRadius: 'var(--radius-pill)',
                border: `1px solid ${borderColor}`,
                letterSpacing: '0.06em'
              }}
            >
              {badgeText}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '2rem',
                fontWeight: 800,
                color: accentColor,
                opacity: 0.35,
                lineHeight: 1
              }}
            >
              {trackNumber}
            </span>
          </div>

          {/* Center Brand Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', margin: 'auto 0', padding: '1rem 0' }}>
            {/* Glowing Icon */}
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '20px',
                background: badgeBg,
                border: `1px solid ${borderColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isInnovex 
                  ? '0 0 35px rgba(212, 178, 140, 0.35)' 
                  : '0 0 35px rgba(41, 151, 255, 0.35)',
                transition: 'transform 0.3s ease'
              }}
            >
              {icon}
            </div>

            {/* Track Name */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 3.5vw, 3rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  margin: 0,
                  lineHeight: 1.05
                }}
              >
                {title}
              </h3>
              <div
                style={{
                  fontSize: '1.05rem',
                  color: accentColor,
                  fontWeight: 600,
                  marginTop: '0.5rem',
                  letterSpacing: '0.02em'
                }}
              >
                {subtitle}
              </div>
            </div>
          </div>

          {/* Bottom Flip Cue */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              letterSpacing: '0.03em'
            }}
          >
            <RotateCw size={14} color={accentColor} style={{ animation: 'spinSlow 12s linear infinite' }} />
            <span>Hover / Tap for Details & Domains</span>
          </div>
        </div>

        {/* ================= BACK SIDE (Rich Details & Action Button) ================= */}
        <div
          className="flip-card-back"
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: 'var(--radius-xl)',
            background: isInnovex
              ? 'linear-gradient(180deg, rgba(32, 24, 16, 0.96) 0%, rgba(14, 12, 10, 0.99) 100%)'
              : 'linear-gradient(180deg, rgba(14, 26, 44, 0.96) 0%, rgba(8, 14, 24, 0.99) 100%)',
            border: `1px solid ${borderColor}`,
            padding: 'clamp(1.5rem, 3vw, 2.25rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: glowShadow,
            boxSizing: 'border-box'
          }}
        >
          <div>
            {/* Header: Mini Track Label + Flip Back Hint */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', fontWeight: 700, color: '#ffffff' }}>
                  {title}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>• DETAILS</span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: accentColor,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <RotateCw size={12} />
                Flip
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: '0 0 1.25rem 0'
              }}
            >
              {description}
            </p>

            {/* Focus Areas Badges */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.625rem',
                  letterSpacing: '0.06em'
                }}
              >
                {focusTitle}:
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.45rem'
                }}
              >
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.4rem 0.6rem',
                      background: 'rgba(18, 18, 20, 0.85)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.775rem',
                      color: 'var(--text-primary)',
                      fontWeight: 500
                    }}
                  >
                    {area.icon}
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {area.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }} onClick={(e) => e.stopPropagation()}>
            <Link
              to={exploreLink}
              className="focus-visible-ring"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                padding: '0.8rem 1.5rem',
                borderRadius: 'var(--radius-pill)',
                background: btnGradient,
                color: btnColor,
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: isInnovex 
                  ? '0 0 20px rgba(212, 178, 140, 0.35)' 
                  : '0 0 20px rgba(41, 151, 255, 0.35)',
                transition: 'all var(--transition-fast)',
                boxSizing: 'border-box'
              }}
            >
              <span>{buttonText}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TracksOverview: React.FC = () => {
  const innovexFocusAreas = [
    { title: 'Human-Centred Design', icon: <Users size={14} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Design Thinking', icon: <Search size={14} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Root-Cause Analysis', icon: <GitMerge size={14} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Product Development', icon: <Cpu size={14} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Business Modelling', icon: <BarChart3 size={14} color="var(--innovex-accent)" aria-hidden="true" /> },
    { title: 'Social Impact', icon: <Trophy size={14} color="var(--innovex-accent)" aria-hidden="true" /> }
  ];

  const elocutionFocusAreas = [
    { title: 'Public Speaking', icon: <Mic size={14} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Articulation', icon: <Sparkles size={14} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Critical Thinking', icon: <Brain size={14} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Debate & Rebuttal', icon: <Scale size={14} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Storytelling', icon: <BookOpen size={14} color="var(--elocution-accent)" aria-hidden="true" /> },
    { title: 'Persuasive Delivery', icon: <Flame size={14} color="var(--elocution-accent)" aria-hidden="true" /> }
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
              Choose the competitive domain that aligns with your strengths — hover over each track to explore sprint domains, oratorical stages, and syllabus details.
            </p>
          </div>
        </ScrollReveal>

        {/* Two 3D Interactive Flip Track Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Card 1: INNOVEX 3D Flip Card */}
          <ScrollReveal animation="flip-3d" delay={100} duration={700}>
            <FlipTrackCard
              trackNumber="01"
              badgeText="TRACK 01 • TEAM / INDIVIDUAL"
              title="INNOVEX"
              subtitle="Human-Centred Venture Design"
              description="An intensive venture design sprint guiding participants through stakeholder empathy research, root-cause deconstruction, frugal prototyping, and sustainable business modelling."
              focusTitle="Core Sprint Domains"
              focusAreas={innovexFocusAreas}
              exploreLink="/innovex"
              buttonText="EXPLORE INNOVEX"
              theme="innovex"
              icon={<Lightbulb size={36} color="var(--innovex-accent)" aria-hidden="true" />}
            />
          </ScrollReveal>

          {/* Card 2: ELOCUTION 3D Flip Card */}
          <ScrollReveal animation="flip-3d" delay={250} duration={700}>
            <FlipTrackCard
              trackNumber="02"
              badgeText="TRACK 02 • INDIVIDUAL"
              title="ELOCUTION"
              subtitle="Articulate. Persuade. Inspire."
              description="A multi-stage oratorical arena designed to cultivate spontaneous thinking, structured dialectics, debate rebuttal agility, narrative mastery, and stage presence."
              focusTitle="Core Oratorical Stages"
              focusAreas={elocutionFocusAreas}
              exploreLink="/elocution"
              buttonText="EXPLORE ELOCUTION"
              theme="elocution"
              icon={<Mic size={36} color="var(--elocution-accent)" aria-hidden="true" />}
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

