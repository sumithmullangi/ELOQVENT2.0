import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Target, FileText, Play, Pause } from 'lucide-react';
import { INNOVEX_JOURNEY_STEPS } from '../../data/eventData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const InnovexJourneyTeaser: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Optional subtle auto-play cycle for presentation
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % INNOVEX_JOURNEY_STEPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeStep = INNOVEX_JOURNEY_STEPS[activeStepIndex];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-surface-1)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <SectionHeading
              badge="7-Step Framework"
              badgeVariant="innovex"
              title="The INNOVEX Innovation Arc"
              subtitle="From deep human empathy to sustainable business models and venture-scale impact."
              className="mb-0"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                background: isAutoPlaying ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-surface-2)',
                border: `1px solid ${isAutoPlaying ? 'var(--innovex-accent)' : 'var(--border-subtle)'}`,
                color: isAutoPlaying ? 'var(--innovex-accent)' : 'var(--text-secondary)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer'
              }}
            >
              {isAutoPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isAutoPlaying ? 'PAUSE TOUR' : 'AUTO TOUR'}</span>
            </button>

            <Button to="/journey" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
              Full Interactive Timeline
            </Button>
          </div>
        </div>

        {/* Animated Transformation Pipeline Ribbon */}
        <div 
          className="beam-connector"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            padding: '1.1rem 1.75rem',
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.12) 0%, rgba(168, 85, 247, 0.12) 50%, rgba(16, 185, 129, 0.15) 100%)',
            border: '1px solid var(--border-medium)',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: 700, fontSize: '0.875rem' }}>
            <Sparkles size={16} color="var(--innovex-accent)" />
            <span>TRANSFORMATION FLOW:</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--elocution-accent)', fontWeight: 600 }}>01. PROBLEM</span>
            <ChevronRight size={14} color="var(--text-muted)" />
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>02. INSIGHT</span>
            <ChevronRight size={14} color="var(--text-muted)" />
            <span style={{ color: '#a855f7', fontWeight: 600 }}>03. IDEATION</span>
            <ChevronRight size={14} color="var(--text-muted)" />
            <span style={{ color: '#ec4899', fontWeight: 600 }}>04. PROTOTYPE</span>
            <ChevronRight size={14} color="var(--text-muted)" />
            <span style={{ color: '#f59e0b', fontWeight: 600 }}>05. VALIDATION</span>
            <ChevronRight size={14} color="var(--text-muted)" />
            <span style={{ color: 'var(--innovex-accent)', fontWeight: 800 }}>06. BUSINESS MODEL</span>
            <ChevronRight size={14} color="var(--text-muted)" />
            <span style={{ color: '#34d399', fontWeight: 800 }}>07. PITCH</span>
          </div>
        </div>

        {/* Step Navigation Tabs */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
            gap: '0.75rem',
            marginBottom: '2rem'
          }}
        >
          {INNOVEX_JOURNEY_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => {
                  setActiveStepIndex(idx);
                  setIsAutoPlaying(false);
                }}
                style={{
                  background: isActive ? 'rgba(16, 185, 129, 0.18)' : 'var(--bg-surface-2)',
                  border: `1px solid ${isActive ? 'var(--innovex-accent)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '0.9rem 0.8rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  boxShadow: isActive ? '0 0 20px rgba(16, 185, 129, 0.25)' : 'none',
                  transform: isActive ? 'translateY(-2px)' : 'none'
                }}
              >
                <div style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.78rem', 
                  fontWeight: 700, 
                  color: isActive ? 'var(--innovex-accent)' : 'var(--text-muted)' 
                }}>
                  STEP 0{step.step}
                </div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  lineHeight: 1.25
                }}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Panel */}
        <div 
          className="glass-panel glow-emerald-box animate-fade-in"
          style={{
            background: 'linear-gradient(180deg, rgba(20, 28, 44, 0.9) 0%, rgba(13, 19, 31, 0.95) 100%)',
            border: '1px solid var(--innovex-border)',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
              <span 
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: 'var(--innovex-accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  border: '1px solid var(--innovex-border)'
                }}
              >
                PHASE STAGE 0{activeStep.step} / 07
              </span>
              <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                {activeStep.tagline}
              </span>
            </div>

            <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
              {activeStep.title}
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              {activeStep.description}
            </p>

            {/* Deliverable Pill */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1rem 1.25rem',
                background: 'rgba(7, 10, 16, 0.75)',
                borderRadius: 'var(--radius-md)',
                border: '1px dashed var(--innovex-border)',
                fontSize: '0.875rem'
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <FileText size={18} color="var(--innovex-accent)" />
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', display: 'block', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Mandatory Phase Deliverable:
                </span>
                <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9375rem' }}>
                  {activeStep.deliverable}
                </span>
              </div>
            </div>
          </div>

          {/* Key Actions List */}
          <div 
            style={{
              background: 'rgba(7, 10, 16, 0.8)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              border: '1px solid var(--border-medium)',
              boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.4)'
            }}
          >
            <h4 style={{ fontSize: '0.9375rem', color: '#ffffff', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={16} color="var(--innovex-accent)" />
              Key Actions for Delegates
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {activeStep.keyActions.map((action, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} color="var(--innovex-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ lineHeight: 1.5 }}>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
