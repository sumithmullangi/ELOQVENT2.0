import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Info, 
  HelpCircle, 
  Mail, 
  Phone, 
  Calendar,
  Layers,
  AlertCircle
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { Placeholder } from '../components/ui/Placeholder';
import { RegistrationForm } from '../components/sections/RegistrationForm';
import { EVENT_METADATA } from '../data/eventData';
import { CTASection } from '../components/sections/CTASection';

export const RegisterPage: React.FC = () => {
  useEffect(() => {
    document.title = "Register for ELOQVENT 2K26 | Official Registration Portal";
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-canvas)' }}>
      {/* 1. Page Hero */}
      <section 
        aria-label="Registration Page Hero"
        style={{
          position: 'relative',
          paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.7) 0%, rgba(8, 12, 20, 0.4) 100%)',
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
              Register
            </span>
          </nav>

          <div style={{ maxWidth: '880px' }}>
            <Eyebrow variant="innovex" icon={<Sparkles size={13} color="var(--innovex-accent)" />} style={{ marginBottom: '1rem' }}>
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
              Register
            </h1>

            <div 
              style={{
                fontSize: 'clamp(1.15rem, 2vw + 0.25rem, 1.5rem)',
                fontWeight: 700,
                color: 'var(--innovex-accent)',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}
            >
              Participant Registration & Track Entry Portal
            </div>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Register as an individual orator for ELOCUTION or register your individual or team entry for the INNOVEX social innovation track. Complete the official registration form below.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/tracks" variant="secondary" size="lg">
                VIEW THE TRACKS
              </Button>
              <Button to="/eligibility" variant="outline" size="lg">
                CHECK ELIGIBILITY
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Registration Status & Logistics Badges */}
      <section 
        aria-labelledby="reg-status-heading"
        className="section-py"
        style={{
          backgroundColor: 'var(--bg-surface-1)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <Container size="lg">
          {/* Status Notice Banner */}
          <div 
            style={{
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--bg-surface-2)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '3rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', maxWidth: '640px' }}>
              <ShieldCheck size={22} color="var(--innovex-accent)" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
              <div>
                <strong id="reg-status-heading" style={{ color: '#ffffff', fontSize: '0.9375rem', display: 'block', marginBottom: '0.25rem' }}>
                  Official Registration Information
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Eligible first- and second-year undergraduate delegates across Engineering, Technology, and Management faculties may submit their registration details.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <Placeholder label="REGISTRATION FEE: [TO BE PROVIDED]" />
              <Placeholder label="REGISTRATION DEADLINE: [TO BE PROVIDED]" />
            </div>
          </div>

          {/* Main Registration Form Component */}
          <RegistrationForm />
        </Container>
      </section>

      {/* 3. Support & Clarification Helpdesk */}
      <section 
        aria-labelledby="helpdesk-heading"
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
              background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 28, 20, 0.98) 100%)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.65rem' }}>
                <HelpCircle size={20} color="var(--elocution-accent)" aria-hidden="true" />
                <h3 
                  id="helpdesk-heading"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    margin: 0
                  }}
                >
                  Registration Help & Support
                </h3>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                For queries regarding team affiliations, collegiate bonafide verification, or track selection guidelines, contact the official organizing team through the channels below.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Mail size={15} color="var(--elocution-accent)" aria-hidden="true" />
                <span>Email Support:</span>
                <Placeholder label="[EMAIL TO BE PROVIDED]" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Phone size={15} color="var(--innovex-accent)" aria-hidden="true" />
                <span>Phone Helpline:</span>
                <Placeholder label="[PHONE TO BE PROVIDED]" />
              </div>

              <div style={{ fontSize: '0.775rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Organizer: <Placeholder label="[ORGANIZER NAME]" type="inline" showIcon={false} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Closing CTA */}
      <CTASection 
        title="Explore What Awaits at ELOQVENT 2K26"
        subtitle="Learn more about the two tracks and the interactive symposium journey."
        description="Whether preparing for public speaking and debate or building a social venture for measurable impact, discover the full scope of ELOQVENT."
        primaryCtaText="EXPLORE ALL TRACKS"
        primaryCtaLink="/tracks"
        secondaryCtaText="VIEW THE JOURNEY"
        secondaryCtaLink="/journey"
      />
    </div>
  );
};
