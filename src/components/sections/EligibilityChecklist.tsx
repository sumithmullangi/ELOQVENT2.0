import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Compass, 
  MapPin, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { OFFICIAL_ELIGIBILITY_CRITERIA, EligibilityItem } from '../../data/eligibility';

export const EligibilityChecklist: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap size={20} color="var(--elocution-accent)" aria-hidden="true" />,
    Building2: <Building2 size={20} color="var(--innovex-accent)" aria-hidden="true" />,
    Compass: <Compass size={20} color="#38bdf8" aria-hidden="true" />,
    MapPin: <MapPin size={20} color="#34d399" aria-hidden="true" />,
    Users: <Users size={20} color="#a855f7" aria-hidden="true" />,
    Sparkles: <Sparkles size={20} color="#f59e0b" aria-hidden="true" />,
    ShieldCheck: <ShieldCheck size={20} color="var(--innovex-accent)" aria-hidden="true" />
  };

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.25rem'
      }}
    >
      {OFFICIAL_ELIGIBILITY_CRITERIA.map((item: EligibilityItem, idx: number) => (
        <div 
          key={item.id}
          className="surface-card"
          style={{
            background: 'var(--bg-surface-1)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}
        >
          <div>
            {/* Header: Category Badge & Icon */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-surface-2)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  letterSpacing: '0.04em'
                }}
              >
                {item.category.toUpperCase()}
              </span>

              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {iconMap[item.iconName] || <ShieldCheck size={20} color="var(--text-primary)" />}
              </div>
            </div>

            {/* Title */}
            <h3 
              style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
                lineHeight: 1.25
              }}
            >
              {item.title}
            </h3>

            {/* Summary */}
            <div 
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
                lineHeight: 1.4
              }}
            >
              {item.summary}
            </div>

            {/* Detailed Description */}
            <p 
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              {item.details}
            </p>
          </div>

          {/* Verification Status */}
          <div 
            style={{
              paddingTop: '0.85rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.775rem',
              color: 'var(--innovex-accent)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <CheckCircle2 size={14} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
            <span>PRD Mandated Criterion</span>
          </div>
        </div>
      ))}
    </div>
  );
};
