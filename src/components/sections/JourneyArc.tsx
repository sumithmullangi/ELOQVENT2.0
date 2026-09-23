import React from 'react';
import { Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { TRANSFORMATION_ARC } from '../../data/innovexJourney';

export interface JourneyArcProps {
  activeStage?: string;
  onSelectStage?: (stage: string) => void;
  className?: string;
}

export const JourneyArc: React.FC<JourneyArcProps> = ({
  activeStage,
  onSelectStage,
  className = ''
}) => {
  return (
    <div 
      className={`surface-card ${className}`}
      style={{
        padding: 'clamp(1.5rem, 3vw, 2rem)',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 28, 20, 0.95) 100%)',
        border: '1px solid var(--border-medium)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <Sparkles size={18} color="var(--innovex-accent)" aria-hidden="true" />
          <h2 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
            The 5-Stage Transformation Lifecycle
          </h2>
        </div>

        <span 
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            letterSpacing: '0.04em'
          }}
        >
          FRAMING THE 7 OFFICIAL STEPS
        </span>
      </div>

      {/* 5 Connected Transformation Stages */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          position: 'relative'
        }}
      >
        {TRANSFORMATION_ARC.map((arc, index) => {
          const isSelected = activeStage === arc.label;

          return (
            <div 
              key={arc.label}
              onClick={() => onSelectStage && onSelectStage(arc.label)}
              style={{
                background: isSelected 
                  ? 'rgba(255, 255, 255, 0.08)' 
                  : 'rgba(255, 255, 255, 0.03)',
                border: isSelected 
                  ? `1px solid ${arc.color}` 
                  : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.5rem',
                cursor: onSelectStage ? 'pointer' : 'default',
                transition: 'all var(--transition-fast)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: arc.color
                  }}
                >
                  PHASE {arc.stage}
                </span>

                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  {arc.steps.length === 1 ? `Step ${arc.steps[0]}` : `Steps ${arc.steps.join(' & ')}`}
                </span>
              </div>

              <div>
                <div 
                  style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {arc.label}
                </div>

                <div 
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.4,
                    marginTop: '0.2rem'
                  }}
                >
                  {arc.tagline}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
