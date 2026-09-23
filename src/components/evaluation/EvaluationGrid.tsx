import React, { useState } from 'react';
import { Mic, Lightbulb, CheckCircle, ShieldAlert, Award } from 'lucide-react';
import { EVALUATION_ELOCUTION, EVALUATION_INNOVEX } from '../../data/eventData';
import { PlaceholderTag } from '../common/PlaceholderTag';

export const EvaluationGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'elocution' | 'innovex'>('elocution');

  const criteria = activeTab === 'elocution' ? EVALUATION_ELOCUTION : EVALUATION_INNOVEX;
  const accentColor = activeTab === 'elocution' ? 'var(--elocution-accent)' : 'var(--innovex-accent)';

  return (
    <div>
      {/* Track Toggle Tabs */}
      <div 
        style={{
          display: 'inline-flex',
          padding: '0.35rem',
          background: 'var(--bg-surface-2)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '2.5rem'
        }}
      >
        <button
          onClick={() => setActiveTab('elocution')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            background: activeTab === 'elocution' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
            border: `1px solid ${activeTab === 'elocution' ? 'var(--elocution-accent)' : 'transparent'}`,
            color: activeTab === 'elocution' ? '#ffffff' : 'var(--text-secondary)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.9375rem',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
        >
          <Mic size={18} color={activeTab === 'elocution' ? 'var(--elocution-accent)' : 'var(--text-muted)'} />
          <span>ELOCUTION RUBRICS</span>
        </button>

        <button
          onClick={() => setActiveTab('innovex')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            background: activeTab === 'innovex' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
            border: `1px solid ${activeTab === 'innovex' ? 'var(--innovex-accent)' : 'transparent'}`,
            color: activeTab === 'innovex' ? '#ffffff' : 'var(--text-secondary)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.9375rem',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
        >
          <Lightbulb size={18} color={activeTab === 'innovex' ? 'var(--innovex-accent)' : 'var(--text-muted)'} />
          <span>INNOVEX RUBRICS</span>
        </button>
      </div>

      {/* Official Notice */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          background: 'var(--amber-bg)',
          border: '1px dashed var(--amber-border)',
          marginBottom: '2rem',
          fontSize: '0.875rem',
          color: 'var(--accent-amber)'
        }}
      >
        <ShieldAlert size={20} style={{ flexShrink: 0 }} />
        <div>
          <strong>Official Adjudication Note:</strong> Detailed numerical percentage breakdowns and point matrices are marked as <span style={{ fontFamily: 'var(--font-mono)' }}>SCORING DETAILS — TO BE PROVIDED</span>. Below are the verified evaluation dimensions and quality indicators mandated by the PRD.
        </div>
      </div>

      {/* Criteria Cards Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {criteria.map((item, idx) => (
          <div 
            key={idx}
            className="surface-card"
            style={{
              background: 'var(--bg-surface-1)',
              border: '1px solid var(--border-subtle)',
              borderLeft: `3px solid ${accentColor}`,
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className="mono-tag" style={{ color: accentColor }}>
                  CRITERION 0{idx + 1}
                </span>
                <PlaceholderTag label={item.weightage} />
              </div>

              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.65rem' }}>
                {item.category}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {item.description}
              </p>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Observable Key Indicators:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {item.keyIndicators.map((indicator, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                    <CheckCircle size={14} color={accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{indicator}</span>
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
