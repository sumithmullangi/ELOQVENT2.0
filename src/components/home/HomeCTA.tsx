import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award } from 'lucide-react';
import { Button } from '../common/Button';
import { PlaceholderTag } from '../common/PlaceholderTag';
import { EVENT_METADATA } from '../../data/eventData';

export const HomeCTA: React.FC = () => {
  return (
    <section 
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--bg-canvas)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Aurora Glow Sphere */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '450px',
          background: 'radial-gradient(ellipse, rgba(56, 189, 248, 0.18) 0%, rgba(168, 85, 247, 0.12) 40%, rgba(16, 185, 129, 0.15) 70%, transparent 80%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
        className="animate-pulse-glow"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          className="glass-panel"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '4rem 2.5rem',
            background: 'linear-gradient(180deg, rgba(13, 19, 31, 0.9) 0%, rgba(7, 10, 16, 0.98) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
            borderRadius: 'var(--radius-xl)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--innovex-accent)',
                background: 'rgba(16, 185, 129, 0.15)',
                padding: '0.35rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--innovex-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 700
              }}
            >
              <span className="live-dot" />
              SLOTS FILLING FAST • ALL DELEGATES WELCOME
            </span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2.25rem, 4.5vw + 0.5rem, 3.5rem)', 
              color: '#ffffff', 
              marginBottom: '1.25rem', 
              letterSpacing: '-0.035em',
              lineHeight: 1.1
            }}
          >
            Claim Your Spot on the National Stage
          </h2>

          <p 
            style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-secondary)', 
              maxWidth: '700px', 
              margin: '0 auto 2.5rem auto', 
              lineHeight: 1.65 
            }}
          >
            Whether you are stepping up individually to master oratorical eloquence or assembling your multidisciplinary team to build groundbreaking social innovations, your journey begins here.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', alignItems: 'center', marginBottom: '2.5rem' }}>
            <Button 
              to="/register" 
              variant="primary" 
              size="lg" 
              icon={<ArrowRight size={20} />}
              className="btn-interactive glow-cyan-box"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                color: '#070a10',
                padding: '1.1rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: 800,
                boxShadow: '0 8px 30px rgba(56, 189, 248, 0.35)'
              }}
            >
              REGISTER FOR ELOQVENT 2K26
            </Button>
            
            <Button 
              to="/eligibility" 
              variant="secondary" 
              size="lg"
              className="btn-interactive"
              style={{
                background: 'rgba(20, 28, 44, 0.8)',
                border: '1px solid var(--border-medium)',
                padding: '1.1rem 2rem',
                fontSize: '1.05rem'
              }}
            >
              Check Eligibility Guidelines
            </Button>
          </div>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '1.5rem', 
              fontSize: '0.85rem', 
              color: 'var(--text-muted)',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
              <ShieldCheck size={16} color="var(--elocution-accent)" /> 
              Recognized Student ID Required
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={15} color="#f59e0b" />
              Certificates for All Completing Delegates
            </span>
            <span>•</span>
            <span>Date: <PlaceholderTag label={EVENT_METADATA.date} /></span>
          </div>
        </div>
      </div>
    </section>
  );
};
