import React, { useState, useEffect, useRef } from 'react';
import { Award, Clock, FileText, ArrowRight } from 'lucide-react';
import { ElocutionPhase } from '../../types';
import { ElocutionTimelineStep } from './ElocutionTimelineStep';
import { Button } from '../ui/Button';

export interface ElocutionTimelineProps {
  phases: ElocutionPhase[];
  variant?: 'vertical' | 'compact';
  className?: string;
  onPhaseChange?: (phaseNumber: number) => void;
}

export const ElocutionTimeline: React.FC<ElocutionTimelineProps> = ({
  phases,
  variant = 'vertical',
  className = '',
  onPhaseChange
}) => {
  const [activePhase, setActivePhase] = useState<number>(phases[0]?.phase || 1);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // IntersectionObserver for scroll-linked progress without layout thrashing
  useEffect(() => {
    if (variant !== 'vertical') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const phaseNum = parseInt(entry.target.id.replace('phase-', ''), 10);
            if (!isNaN(phaseNum)) {
              setActivePhase(phaseNum);
              if (onPhaseChange) onPhaseChange(phaseNum);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.2
      }
    );

    phases.forEach((p) => {
      const el = document.getElementById(`phase-${p.phase}`);
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [phases, variant, onPhaseChange]);

  const handlePhaseClick = (phaseNumber: number) => {
    setActivePhase(phaseNumber);
    if (onPhaseChange) onPhaseChange(phaseNumber);
    const targetEl = document.getElementById(`phase-${phaseNumber}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Compact Variant (for summaries or embeds)
  if (variant === 'compact') {
    return (
      <div 
        className={`elocution-timeline-compact ${className}`}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem'
        }}
      >
        {phases.map((p) => (
          <div 
            key={p.phase}
            className="surface-card"
            style={{
              background: 'var(--bg-surface-2)',
              border: p.phase === 4 ? '1px dashed var(--elocution-border)' : '1px solid var(--border-subtle)',
              borderTop: '3px solid var(--elocution-accent)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.75rem'
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
                  PHASE 0{p.phase}
                </span>

                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {p.day}
                </span>
              </div>

              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                {p.title}
              </h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.4rem', margin: 0 }}>
                {p.objective}
              </p>
            </div>

            {p.phase === 4 && (
              <div style={{ fontSize: '0.725rem', color: 'var(--elocution-accent)', fontFamily: 'var(--font-mono)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Award size={13} />
                <span>DAY 1 EVALUATION CHECKPOINT</span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Vertical Interactive Variant
  return (
    <div className={`elocution-timeline-container ${className}`} style={{ position: 'relative' }}>
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
          <span className="live-dot-cyan" aria-hidden="true" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: '#ffffff', fontWeight: 600 }}>
            CURRENT PHASE: <span style={{ color: 'var(--elocution-accent)' }}>0{activePhase} / 06</span>
          </span>
        </div>

        {/* Phase Numbers Nav Pill Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
          {phases.map((p) => {
            const isCurrent = p.phase === activePhase;
            const isEvaluation = p.phase === 4;

            return (
              <button
                key={p.phase}
                type="button"
                onClick={() => handlePhaseClick(p.phase)}
                aria-label={`Jump to Phase ${p.phase}: ${p.title}`}
                style={{
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isCurrent ? 'var(--elocution-accent)' : 'rgba(255, 255, 255, 0.04)',
                  color: isCurrent ? '#04101e' : 'var(--text-secondary)',
                  border: isCurrent 
                    ? '1px solid var(--elocution-accent)' 
                    : isEvaluation 
                    ? '1px dashed var(--elocution-border)' 
                    : '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: isCurrent ? 800 : 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span>{`0${p.phase}`}</span>
                {isEvaluation && <Award size={12} color={isCurrent ? '#04101e' : 'var(--elocution-accent)'} />}
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
        {phases.map((phase, idx) => (
          <ElocutionTimelineStep 
            key={phase.phase}
            phase={phase}
            phaseIndex={idx}
            totalPhases={phases.length}
            isActive={phase.phase === activePhase}
            onPhaseClick={handlePhaseClick}
          />
        ))}
      </ol>
    </div>
  );
};
