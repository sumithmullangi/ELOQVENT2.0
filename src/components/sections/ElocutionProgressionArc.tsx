import React from 'react';
import { Sparkles, ShieldCheck, Scale } from 'lucide-react';
import { ELOCUTION_PROGRESSION_ARC } from '../../data/elocutionPhases';

export interface ElocutionProgressionArcProps {
  activePhase?: number;
  onSelectPhase?: (phaseNumber: number) => void;
  className?: string;
}

export const ElocutionProgressionArc: React.FC<ElocutionProgressionArcProps> = ({
  activePhase,
  onSelectPhase,
  className = ''
}) => {
  return (
    <div 
      className={`surface-card ${className}`}
      style={{
        padding: 'clamp(1.5rem, 3vw, 2rem)',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
        border: '1px solid var(--elocution-border)',
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
          <Sparkles size={18} color="var(--elocution-accent)" aria-hidden="true" />
          <h2 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
            The 6-Phase Oratorical Progression
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
          FRAMING THE 6 OFFICIAL PHASES
        </span>
      </div>

      {/* 6 Connected Progression Stages */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0.85rem',
          position: 'relative'
        }}
      >
        {ELOCUTION_PROGRESSION_ARC.map((stage) => {
          const isSelected = activePhase === stage.phaseNumber;

          return (
            <div 
              key={stage.stage}
              onClick={() => onSelectPhase && onSelectPhase(stage.phaseNumber)}
              style={{
                background: isSelected 
                  ? 'rgba(56, 189, 248, 0.15)' 
                  : stage.isCheckpoint
                  ? 'rgba(56, 189, 248, 0.06)'
                  : 'rgba(255, 255, 255, 0.03)',
                border: isSelected 
                  ? '1px solid var(--elocution-accent)' 
                  : stage.isCheckpoint
                  ? '1px dashed var(--elocution-border)'
                  : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.5rem',
                cursor: onSelectPhase ? 'pointer' : 'default',
                transition: 'all var(--transition-fast)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: stage.isCheckpoint ? 'var(--elocution-accent)' : 'var(--text-secondary)'
                  }}
                >
                  PHASE {stage.stage}
                </span>

                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  {stage.day}
                </span>
              </div>

              <div>
                <div 
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  {stage.label}
                  {stage.isCheckpoint && (
                    <Scale size={13} color="var(--elocution-accent)" aria-hidden="true" />
                  )}
                </div>

                <div 
                  style={{
                    fontSize: '0.725rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.35,
                    marginTop: '0.2rem'
                  }}
                >
                  {stage.tagline}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
