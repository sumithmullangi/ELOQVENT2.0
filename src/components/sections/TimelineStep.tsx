import React from 'react';
import { 
  Users, 
  Search, 
  GitMerge, 
  Lightbulb, 
  Cpu, 
  BarChart3, 
  Trophy, 
  FileText, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { InnovexJourneyStep } from '../../types';

export interface TimelineStepProps {
  stepData: InnovexJourneyStep;
  isActive?: boolean;
  stepIndex: number;
  totalSteps: number;
  onStepClick?: (stepNumber: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={22} color="var(--innovex-accent)" aria-hidden="true" />,
  Search: <Search size={22} color="var(--innovex-accent)" aria-hidden="true" />,
  GitMerge: <GitMerge size={22} color="var(--innovex-accent)" aria-hidden="true" />,
  Lightbulb: <Lightbulb size={22} color="var(--innovex-accent)" aria-hidden="true" />,
  Cpu: <Cpu size={22} color="var(--innovex-accent)" aria-hidden="true" />,
  BarChart3: <BarChart3 size={22} color="var(--innovex-accent)" aria-hidden="true" />,
  Trophy: <Trophy size={22} color="var(--innovex-accent)" aria-hidden="true" />
};

export const TimelineStep: React.FC<TimelineStepProps> = ({
  stepData,
  isActive = false,
  stepIndex,
  totalSteps,
  onStepClick
}) => {
  const icon = iconMap[stepData.iconName] || <Lightbulb size={22} color="var(--innovex-accent)" aria-hidden="true" />;

  return (
    <li
      id={`step-${stepData.step}`}
      tabIndex={0}
      role="article"
      aria-label={`Step ${stepData.step}: ${stepData.title}`}
      onClick={() => onStepClick && onStepClick(stepData.step)}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onStepClick) {
          e.preventDefault();
          onStepClick(stepData.step);
        }
      }}
      className={`timeline-step-item ${isActive ? 'active-step' : ''}`}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'minmax(60px, 80px) 1fr',
        gap: 'clamp(1rem, 3vw, 2.5rem)',
        alignItems: 'start',
        paddingBottom: stepIndex === totalSteps - 1 ? '0' : 'clamp(2.5rem, 5vw, 4rem)',
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
        {/* Step Number Circle */}
        <div 
          style={{
            width: 'clamp(52px, 6vw, 64px)',
            height: 'clamp(52px, 6vw, 64px)',
            borderRadius: 'var(--radius-lg)',
            background: isActive 
              ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(56, 189, 248, 0.2) 100%)' 
              : 'var(--bg-surface-2)',
            border: isActive 
              ? '2px solid var(--innovex-accent)' 
              : '1px solid var(--border-medium)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            boxShadow: isActive ? '0 0 25px rgba(16, 185, 129, 0.3)' : 'none',
            transition: 'all var(--transition-base)'
          }}
        >
          <span 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.15rem',
              fontWeight: 800,
              color: isActive ? '#ffffff' : 'var(--text-secondary)'
            }}
          >
            {stepData.step}
          </span>
          <span 
            style={{
              fontSize: '0.625rem',
              fontFamily: 'var(--font-mono)',
              color: isActive ? 'var(--innovex-accent)' : 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: 700
            }}
          >
            STEP
          </span>
        </div>

        {/* Connecting Vertical Spine Line (except last item) */}
        {stepIndex < totalSteps - 1 && (
          <div 
            style={{
              position: 'absolute',
              top: 'clamp(56px, 6vw, 68px)',
              bottom: '0',
              width: '2px',
              background: isActive 
                ? 'linear-gradient(180deg, var(--innovex-accent) 0%, var(--border-subtle) 100%)' 
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
            ? 'linear-gradient(180deg, rgba(8, 28, 20, 0.85) 0%, rgba(8, 12, 20, 0.95) 100%)' 
            : 'var(--bg-surface-1)',
          border: isActive 
            ? '1px solid var(--innovex-border)' 
            : '1px solid var(--border-subtle)',
          borderLeft: isActive 
            ? '4px solid var(--innovex-accent)' 
            : '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.5rem, 3vw, 2.25rem)',
          boxShadow: isActive ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none',
          transition: 'all var(--transition-base)'
        }}
      >
        {/* Step Header */}
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
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid var(--innovex-border)',
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
                {stepData.title}
              </h3>
              <div 
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--innovex-accent)',
                  fontWeight: 600,
                  marginTop: '0.15rem'
                }}
              >
                {stepData.tagline}
              </div>
            </div>
          </div>

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
            STAGE {stepIndex + 1} OF {totalSteps}
          </span>
        </div>

        {/* Narrative Description */}
        <p 
          style={{
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '1.5rem'
          }}
        >
          {stepData.description}
        </p>

        {/* Key Actions Sub-List */}
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
            Key Methodological Actions:
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '0.625rem'
            }}
          >
            {stepData.keyActions.map((action, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  padding: '0.6rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.45
                }}
              >
                <CheckCircle2 size={15} color="var(--innovex-accent)" aria-hidden="true" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverable Footer Banner */}
        <div 
          style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(16, 185, 129, 0.06)',
            border: '1px solid var(--innovex-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            fontSize: '0.8125rem'
          }}
        >
          <FileText size={16} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
          <span style={{ color: 'var(--text-muted)' }}>Tangible Output:</span>
          <span style={{ color: '#ffffff', fontWeight: 600 }}>
            {stepData.deliverable}
          </span>
        </div>
      </div>
    </li>
  );
};
