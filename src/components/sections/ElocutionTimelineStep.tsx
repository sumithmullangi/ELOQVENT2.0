import React from 'react';
import { 
  Mic, 
  Sparkles, 
  Brain, 
  Scale, 
  BookOpen, 
  Flame, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Award,
  Layers,
  FileCheck
} from 'lucide-react';
import { ElocutionPhase } from '../../types';
import { Placeholder } from '../ui/Placeholder';

export interface ElocutionTimelineStepProps {
  phase: ElocutionPhase;
  isActive?: boolean;
  phaseIndex: number;
  totalPhases: number;
  onPhaseClick?: (phaseNumber: number) => void;
}

const phaseIcons: Record<number, React.ReactNode> = {
  1: <BookOpen size={22} color="var(--elocution-accent)" aria-hidden="true" />,
  2: <Sparkles size={22} color="var(--elocution-accent)" aria-hidden="true" />,
  3: <Scale size={22} color="var(--elocution-accent)" aria-hidden="true" />,
  4: <Award size={22} color="var(--elocution-accent)" aria-hidden="true" />,
  5: <Brain size={22} color="var(--elocution-accent)" aria-hidden="true" />,
  6: <Mic size={22} color="var(--elocution-accent)" aria-hidden="true" />
};

export const ElocutionTimelineStep: React.FC<ElocutionTimelineStepProps> = ({
  phase,
  isActive = false,
  phaseIndex,
  totalPhases,
  onPhaseClick
}) => {
  const isEvaluationCheckpoint = phase.phase === 4;
  const icon = phaseIcons[phase.phase] || <Mic size={22} color="var(--elocution-accent)" aria-hidden="true" />;

  return (
    <li
      id={`phase-${phase.phase}`}
      tabIndex={0}
      role="article"
      aria-label={`Phase ${phase.phase}: ${phase.title}`}
      onClick={() => onPhaseClick && onPhaseClick(phase.phase)}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onPhaseClick) {
          e.preventDefault();
          onPhaseClick(phase.phase);
        }
      }}
      className={`elocution-phase-item ${isActive ? 'active-phase' : ''}`}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'minmax(60px, 80px) 1fr',
        gap: 'clamp(1rem, 3vw, 2.5rem)',
        alignItems: 'start',
        paddingBottom: phaseIndex === totalPhases - 1 ? '0' : 'clamp(2.5rem, 5vw, 4rem)',
        outline: 'none',
        transition: 'all var(--transition-base)'
      }}
    >
      {/* Left Stepper Spine & Number Marker */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        {/* Phase Number Circle */}
        <div 
          style={{
            width: 'clamp(52px, 6vw, 64px)',
            height: 'clamp(52px, 6vw, 64px)',
            borderRadius: 'var(--radius-lg)',
            background: isActive 
              ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(13, 22, 38, 0.95) 100%)' 
              : isEvaluationCheckpoint
              ? 'rgba(56, 189, 248, 0.1)'
              : 'var(--bg-surface-2)',
            border: isActive 
              ? '2px solid var(--elocution-accent)' 
              : isEvaluationCheckpoint
              ? '2px dashed var(--elocution-accent)'
              : '1px solid var(--border-medium)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            boxShadow: isActive ? '0 0 25px rgba(56, 189, 248, 0.35)' : 'none',
            transition: 'all var(--transition-base)'
          }}
        >
          <span 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.15rem',
              fontWeight: 800,
              color: isActive ? '#ffffff' : isEvaluationCheckpoint ? 'var(--elocution-accent)' : 'var(--text-secondary)'
            }}
          >
            {`0${phase.phase}`}
          </span>
          <span 
            style={{
              fontSize: '0.6rem',
              fontFamily: 'var(--font-mono)',
              color: isActive ? 'var(--elocution-accent)' : 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 700
            }}
          >
            PHASE
          </span>
        </div>

        {/* Connecting Vertical Spine Line (except last item) */}
        {phaseIndex < totalPhases - 1 && (
          <div 
            style={{
              position: 'absolute',
              top: 'clamp(56px, 6vw, 68px)',
              bottom: '0',
              width: '2px',
              background: isActive 
                ? 'linear-gradient(180deg, var(--elocution-accent) 0%, var(--border-subtle) 100%)' 
                : 'var(--border-subtle)',
              zIndex: 1,
              transition: 'background var(--transition-base)'
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right Content Card */}
      <div 
        className="surface-card"
        style={{
          background: isActive 
            ? 'linear-gradient(180deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)' 
            : 'var(--bg-surface-1)',
          border: isActive 
            ? '1px solid var(--elocution-border)' 
            : isEvaluationCheckpoint
            ? '1px dashed var(--elocution-border)'
            : '1px solid var(--border-subtle)',
          borderLeft: isActive 
            ? '4px solid var(--elocution-accent)' 
            : isEvaluationCheckpoint
            ? '4px solid var(--elocution-accent)'
            : '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.5rem, 3vw, 2.25rem)',
          boxShadow: isActive ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none',
          position: 'relative',
          transition: 'all var(--transition-base)'
        }}
      >
        {/* Special Evaluation Checkpoint Banner if Phase 4 */}
        {isEvaluationCheckpoint && (
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid var(--elocution-border)',
              color: 'var(--elocution-accent)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              marginBottom: '1rem'
            }}
          >
            <Award size={14} color="var(--elocution-accent)" aria-hidden="true" />
            <span>DAY 1 EVALUATION CHECKPOINT</span>
          </div>
        )}

        {/* Phase Header */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div 
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid var(--elocution-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              {icon}
            </div>

            <div>
              <h3 
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  margin: 0,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}
              >
                {phase.title}
              </h3>
              <div 
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--elocution-accent)',
                  fontWeight: 600,
                  marginTop: '0.15rem'
                }}
              >
                {phase.day} • {phase.objective}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              PHASE {phase.phase} OF {totalPhases}
            </span>
          </div>
        </div>

        {/* Operational Format Description */}
        <p 
          style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '1.5rem'
          }}
        >
          {phase.format}
        </p>

        {/* Evaluation Focus Indicators */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div 
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.75rem'
            }}
          >
            Adjudication & Focus Dimensions:
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.625rem'
            }}
          >
            {phase.evaluationFocus.map((focus, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.4
                }}
              >
                <CheckCircle2 size={15} color="var(--elocution-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info Strip: Duration & Scoring Notice */}
        <div 
          style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(56, 189, 248, 0.04)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            fontSize: '0.8125rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
            <Clock size={14} color="var(--elocution-accent)" aria-hidden="true" />
            <span>Session Duration:</span>
            <Placeholder label={phase.duration} />
          </div>

          {isEvaluationCheckpoint && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <FileCheck size={14} color="var(--elocution-accent)" aria-hidden="true" />
              <span>Scoring Weightage:</span>
              <Placeholder label="SCORING DETAILS — TO BE PROVIDED" />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
