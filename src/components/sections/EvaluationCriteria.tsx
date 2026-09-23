import React, { useState } from 'react';
import { CheckCircle2, Mic, Lightbulb, Scale, Sparkles } from 'lucide-react';
import { EvaluationCriterion } from '../../data/evaluation';
import { Placeholder } from '../ui/Placeholder';
import { Eyebrow } from '../ui/Eyebrow';

export interface EvaluationCriteriaProps {
  track: 'elocution' | 'innovex';
  title: string;
  subtitle: string;
  criteria: EvaluationCriterion[];
  accentVar: string;
  accentColor: string;
  icon: React.ReactNode;
}

export const EvaluationCriteria: React.FC<EvaluationCriteriaProps> = ({
  track,
  title,
  subtitle,
  criteria,
  accentVar,
  accentColor,
  icon
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = Array.from(new Set(criteria.map((c) => c.category)));
  const filteredCriteria = activeCategory === 'all' 
    ? criteria 
    : criteria.filter((c) => c.category === activeCategory);

  return (
    <div 
      className="surface-card"
      style={{
        background: 'var(--bg-surface-1)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'clamp(1.75rem, 4vw, 3rem)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Track Header */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '2rem',
          marginBottom: '2rem'
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
            <div 
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: track === 'elocution' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                border: `1px solid ${accentColor}33`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              {icon}
            </div>
            <Eyebrow variant={track === 'elocution' ? 'elocution' : 'innovex'}>
              {track === 'elocution' ? 'TRACK 01 CRITERIA' : 'TRACK 02 CRITERIA'}
            </Eyebrow>
          </div>

          <h3 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: '0 0 0.5rem 0'
            }}
          >
            {title}
          </h3>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            {subtitle}
          </p>
        </div>

        {/* Scoring Status Indicator */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.4rem',
            background: 'var(--bg-surface-2)',
            padding: '0.85rem 1.25rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Weight Distribution:
          </span>
          <Placeholder label="SCORING DETAILS — TO BE PROVIDED" />
        </div>
      </div>

      {/* Category Filter Pills (if multiple categories) */}
      {categories.length > 1 && (
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}
          role="group"
          aria-label="Filter criteria by category"
        >
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginRight: '0.25rem' }}>
            Filter:
          </span>
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              background: activeCategory === 'all' ? accentColor : 'rgba(255, 255, 255, 0.04)',
              color: activeCategory === 'all' ? '#000000' : 'var(--text-secondary)',
              border: activeCategory === 'all' ? `1px solid ${accentColor}` : '1px solid var(--border-subtle)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            All ({criteria.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                background: activeCategory === cat ? accentColor : 'rgba(255, 255, 255, 0.04)',
                color: activeCategory === cat ? '#000000' : 'var(--text-secondary)',
                border: activeCategory === cat ? `1px solid ${accentColor}` : '1px solid var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Criteria Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {filteredCriteria.map((c) => (
          <div 
            key={c.id}
            className="surface-card"
            style={{
              background: 'var(--bg-surface-2)',
              border: '1px solid var(--border-subtle)',
              borderTop: `3px solid ${accentColor}`,
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem',
              transition: 'transform var(--transition-fast), border-color var(--transition-fast)'
            }}
          >
            <div>
              {/* Header: Number & Category Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: accentColor,
                    background: track === 'elocution' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  CRITERION {c.number}
                </span>

                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {c.category}
                </span>
              </div>

              {/* Title */}
              <h4 
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                  margin: '0 0 0.5rem 0'
                }}
              >
                {c.name}
              </h4>

              {/* Description */}
              <p 
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55,
                  margin: '0 0 1rem 0'
                }}
              >
                {c.description}
              </p>
            </div>

            {/* Key Observable Indicators List */}
            <div 
              style={{
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <div 
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.45rem'
                }}
              >
                Observable Indicators:
              </div>

              <ul 
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem'
                }}
              >
                {c.keyIndicators.map((ind, i) => (
                  <li 
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.45rem',
                      fontSize: '0.775rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.4
                    }}
                  >
                    <CheckCircle2 size={13} color={accentColor} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
