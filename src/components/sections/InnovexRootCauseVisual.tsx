import React from 'react';
import { GitMerge, HelpCircle, ArrowRight, CheckCircle2, Search, Target } from 'lucide-react';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { ROOT_CAUSE_QUESTIONS } from '../../data/innovexProcess';

export const InnovexRootCauseVisual: React.FC = () => {
  const rootCauseLevels = [
    {
      level: '01',
      title: 'Surface Symptom',
      desc: 'The immediate visible manifestation or complaint observed in the field.',
      color: '#94a3b8'
    },
    {
      level: '02',
      title: 'Underlying Causes',
      desc: 'Behavioural, economic, or logistical factors reinforcing the friction.',
      color: '#38bdf8'
    },
    {
      level: '03',
      title: 'Core Root Cause',
      desc: 'The fundamental systemic bottleneck or structural market failure.',
      color: 'var(--innovex-accent)'
    },
    {
      level: '04',
      title: 'High-Leverage Intervention',
      desc: 'The precise opportunity where frugal design unlocks maximum societal transformation.',
      color: '#34d399'
    }
  ];

  return (
    <div 
      className="surface-card"
      style={{
        padding: 'clamp(1.75rem, 3vw, 2.5rem)',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--bg-surface-1)',
        border: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '800px', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
          <GitMerge size={20} color="var(--innovex-accent)" aria-hidden="true" />
          <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0, fontWeight: 800 }}>
            First-Principles Root Cause Deconstruction
          </h3>
        </div>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
          INNOVEX requires delegates to separate superficial symptoms from structural failures before proposing any technical or operational solutions.
        </p>
      </div>

      {/* 4-Tier Deconstruction Hierarchy */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}
      >
        {rootCauseLevels.map((lvl) => (
          <div 
            key={lvl.level}
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-surface-2)',
              border: '1px solid var(--border-subtle)',
              borderTop: `3px solid ${lvl.color}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}
          >
            <div>
              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: lvl.color
                }}
              >
                TIER {lvl.level}
              </span>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '0.35rem 0 0.25rem 0', fontWeight: 700 }}>
                {lvl.title}
              </h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {lvl.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 6 Documented Discovery Questions */}
      <div>
        <div 
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '1rem'
          }}
        >
          Core Analytical Inquiries:
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0.85rem'
          }}
        >
          {ROOT_CAUSE_QUESTIONS.map((q) => (
            <div 
              key={q.num}
              style={{
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--innovex-accent)',
                  padding: '0.15rem 0.4rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(16, 185, 129, 0.12)',
                  flexShrink: 0
                }}
              >
                {q.num}
              </span>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.15rem' }}>
                  {q.question}
                </div>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  {q.context}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
