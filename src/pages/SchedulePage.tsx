import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { Placeholder } from '../components/ui/Placeholder';
import { CTASection } from '../components/sections/CTASection';
import { ScheduleTimeline } from '../components/sections/ScheduleTimeline';
import { SCHEDULE_NOTICE } from '../data/schedule';
import { EVENT_METADATA } from '../data/eventData';

export const SchedulePage: React.FC = () => {
  useEffect(() => {
    document.title = "Event Schedule & Agenda | ELOQVENT 2K26";
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* 1. Page Hero */}
      <section 
        aria-label="Schedule Page Hero"
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
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              Schedule
            </span>
          </nav>

          <div style={{ maxWidth: '880px' }}>
            <Eyebrow variant="neutral" icon={<Calendar size={13} color="var(--elocution-accent)" />} style={{ marginBottom: '1rem' }}>
              ELOQVENT 2K26
            </Eyebrow>

            {/* Exactly ONE H1 on the page */}
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
              Schedule
            </h1>

            <div 
              style={{
                fontSize: 'clamp(1.15rem, 2vw + 0.25rem, 1.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}
            >
              Two-Day Event Structure & Phase Progression
            </div>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Review the documented two-day progression for ELOQVENT 2K26. Explore the sequence of inauguration assemblies, oratorical dialectics, human-centred innovation milestones, and grand jury adjudication rounds.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/register" variant="primary" size="lg" icon={<ArrowRight size={18} aria-hidden="true" />}>
                REGISTER NOW
              </Button>
              <Button to="/tracks" variant="secondary" size="lg">
                VIEW THE TRACKS
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Schedule Availability Notice & Logistics Summary */}
      <section 
        aria-labelledby="notice-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          {/* Scheduling Status Banner */}
          <div 
            style={{
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--amber-bg)',
              border: '1px solid var(--amber-border)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '3.5rem'
            }}
          >
            <ShieldAlert size={22} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                <strong id="notice-heading" style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700 }}>
                  {SCHEDULE_NOTICE.headline}
                </strong>
                <Placeholder label="[TIME TO BE PROVIDED]" />
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {SCHEDULE_NOTICE.description}
              </p>
            </div>
          </div>

          {/* Quick Schedule Overview Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3.5rem'
            }}
          >
            {/* Day 1 Pillar */}
            <div 
              className="surface-card"
              style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border-subtle)',
                borderTop: '3px solid var(--elocution-accent)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--elocution-accent)',
                      background: 'rgba(56, 189, 248, 0.12)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    DAY 01 ARCHITECTURE
                  </span>
                  <Placeholder label="[DATE TO BE PROVIDED]" />
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, margin: '0 0 0.5rem 0' }}>
                  Orientation, Exploration & Preliminary Evaluation
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Joint grand inauguration followed by Track 01 interactive expression / structured debate rounds and Track 02 empathy research / frugal solution architecture. Concludes with the Phase 4 Day 1 Evaluation checkpoint.
                </p>
              </div>

              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                Focus: Grounding, Articulation & Solution Prototyping
              </div>
            </div>

            {/* Day 2 Pillar */}
            <div 
              className="surface-card"
              style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border-subtle)',
                borderTop: '3px solid var(--innovex-accent)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--innovex-accent)',
                      background: 'rgba(16, 185, 129, 0.12)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    DAY 02 ARCHITECTURE
                  </span>
                  <Placeholder label="[DATE TO BE PROVIDED]" />
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, margin: '0 0 0.5rem 0' }}>
                  Championship Keynotes & Executive Jury Defense
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Recalibration briefing leading into Track 01 advanced persuasive keynotes / final elocution assessment and Track 02 sustainable business modelling / grand venture pitch. Concludes with the valedictory award ceremony.
                </p>
              </div>

              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                Focus: Championship Orations, Venture Pitch & Valedictory
              </div>
            </div>
          </div>

          {/* Main 2-Day Schedule Timeline Component */}
          <ScheduleTimeline />
        </Container>
      </section>

      {/* 3. Operational Integrity & Venue Policy */}
      <section 
        aria-labelledby="logistics-policy-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-canvas)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          <div 
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: 'var(--radius-2xl)',
              background: 'linear-gradient(135deg, var(--bg-surface-2) 0%, var(--bg-surface-1) 100%)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.65rem' }}>
                <Info size={20} color="var(--elocution-accent)" aria-hidden="true" />
                <h3 
                  id="logistics-policy-heading"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    margin: 0
                  }}
                >
                  Schedule Guidelines & Punctuality
                </h3>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Attendance at the Day 1 Inauguration and respective orientation briefings is mandatory for all accredited delegates. Because rounds progress sequentially, participants must report to their assigned stages prior to session commencement.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Calendar size={15} color="var(--elocution-accent)" aria-hidden="true" />
                <span>Event Date:</span>
                <Placeholder label={EVENT_METADATA.date} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <MapPin size={15} color="var(--innovex-accent)" aria-hidden="true" />
                <span>Event Venue:</span>
                <Placeholder label={EVENT_METADATA.venue} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Reusable Closing CTA */}
      <CTASection 
        title="Ready to Take the Stage at ELOQVENT 2K26?"
        subtitle="Review the two-day phase milestones and secure your registration today."
        description="Whether preparing for speechcraft and dialectics or human-centred venture design, ELOQVENT 2K26 offers a structured, transformative two-day experience."
        primaryCtaText="REGISTER NOW"
        primaryCtaLink="/register"
        secondaryCtaText="EXPLORE ALL TRACKS"
        secondaryCtaLink="/tracks"
      />
    </div>
  );
};
