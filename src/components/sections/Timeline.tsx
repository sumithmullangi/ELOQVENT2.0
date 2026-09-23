import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import { InnovexJourneyStep } from '../../types';
import { TimelineStep } from './TimelineStep';
import { Button } from '../ui/Button';

export interface TimelineProps {
  steps: InnovexJourneyStep[];
  variant?: 'vertical' | 'compact' | 'horizontal';
  className?: string;
  onStepChange?: (stepNumber: string) => void;
}

export const Timeline: React.FC<TimelineProps> = ({
  steps,
  variant = 'vertical',
  className = '',
  onStepChange
}) => {
  const [activeStep, setActiveStep] = useState<string>(steps[0]?.step || '01');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Setup non-thrashing IntersectionObserver for vertical scroll progress
  useEffect(() => {
    if (variant !== 'vertical') return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.id.replace('step-', '');
            if (stepId) {
              setActiveStep(stepId);
              if (onStepChange) onStepChange(stepId);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.2
      }
    );

    steps.forEach((s) => {
      const el = document.getElementById(`step-${s.step}`);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [steps, variant, onStepChange]);

  const handleStepClick = (stepNumber: string) => {
    setActiveStep(stepNumber);
    if (onStepChange) onStepChange(stepNumber);
    const targetEl = document.getElementById(`step-${stepNumber}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Compact Variant (for embedding on /innovex or summaries)
  if (variant === 'compact') {
    return (
      <div 
        className={`timeline-compact-wrapper ${className}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem'
          }}
        >
          {steps.map((s) => (
            <div 
              key={s.step}
              className="surface-card"
              style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border-subtle)',
                borderTop: '3px solid var(--innovex-accent)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: 'var(--innovex-accent)',
                    background: 'rgba(16, 185, 129, 0.12)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'inline-block',
                    marginBottom: '0.5rem'
                  }}
                >
                  STEP {s.step}
                </span>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                  {s.title}
                </h4>
                <div style={{ fontSize: '0.75rem', color: 'var(--innovex-accent)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                  {s.tagline}
                </div>
              </div>

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.5rem'
                }}
              >
                <FileText size={13} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  {s.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <Button to="/journey" variant="outline" size="sm" icon={<ArrowRight size={14} aria-hidden="true" />}>
            VIEW FULL 7-STEP INTERACTIVE SPRINT
          </Button>
        </div>
      </div>
    );
  }

  // Vertical Interactive Variant (Flagship Experience on /journey)
  return (
    <div className={`timeline-container ${className}`} style={{ position: 'relative' }}>
      {/* Sticky Progress Quick-Nav Header */}
      <div 
        style={{
          position: 'sticky',
          top: 'clamp(60px, 8vw, 80px)',
          zIndex: 20,
          background: 'rgba(7, 10, 16, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '0.75rem 1.25rem',
          marginBottom: '2.5rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <span className="live-dot" aria-hidden="true" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: '#ffffff', fontWeight: 600 }}>
            CURRENT STEP: <span style={{ color: 'var(--innovex-accent)' }}>{activeStep} / 07</span>
          </span>
        </div>

        {/* Step Numbers Nav Pill Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
          {steps.map((s) => {
            const isCurrent = s.step === activeStep;
            return (
              <button
                key={s.step}
                type="button"
                onClick={() => handleStepClick(s.step)}
                aria-label={`Jump to Step ${s.step}: ${s.title}`}
                style={{
                  padding: '0.3rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isCurrent ? 'var(--innovex-accent)' : 'rgba(255, 255, 255, 0.04)',
                  color: isCurrent ? '#031c12' : 'var(--text-secondary)',
                  border: isCurrent ? '1px solid var(--innovex-accent)' : '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: isCurrent ? 800 : 500,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {s.step}
              </button>
            );
          })}
        </div>
      </div>

      {/* Semantic Ordered List */}
      <ol 
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          position: 'relative'
        }}
      >
        {steps.map((step, idx) => (
          <TimelineStep 
            key={step.step}
            stepData={step}
            stepIndex={idx}
            totalSteps={steps.length}
            isActive={step.step === activeStep}
            onStepClick={handleStepClick}
          />
        ))}
      </ol>
    </div>
  );
};
