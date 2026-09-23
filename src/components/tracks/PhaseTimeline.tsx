import React, { useState } from 'react';
import { CheckCircle2, FileText, Target, ArrowRight, Clock, Award, ChevronRight } from 'lucide-react';
import { PlaceholderTag } from '../common/PlaceholderTag';

interface PhaseTimelineProps {
  type: 'elocution' | 'innovex';
  items: any[];
}

export const PhaseTimeline: React.FC<PhaseTimelineProps> = ({ type, items }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedItem = items[selectedIdx] || items[0];

  const isInnovex = type === 'innovex';
  const accentColor = isInnovex ? 'var(--innovex-accent)' : 'var(--elocution-accent)';

  return (
    <div style={{ width: '100%' }}>
      {/* Step Selector Ribbon */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${items.length}, 1fr)`,
          gap: '0.5rem',
          marginBottom: '2rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem'
        }}
      >
        {items.map((item, idx) => {
          const isSelected = idx === selectedIdx;
          const stepNumber = isInnovex ? item.step : `0${item.phase}`;
          const title = isInnovex ? item.title : item.title;

          return (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              style={{
                background: isSelected 
                  ? (isInnovex ? 'rgba(16, 185, 129, 0.15)' : 'rgba(56, 189, 248, 0.15)')
                  : 'var(--bg-surface-2)',
                border: `1px solid ${isSelected ? accentColor : 'var(--border-subtle)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                minWidth: '130px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
              }}
            >
              <div style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                color: isSelected ? accentColor : 'var(--text-muted)' 
              }}>
                {isInnovex ? `STEP ${stepNumber}` : `PHASE ${stepNumber}`}
              </div>
              <div style={{ 
                fontSize: '0.8125rem', 
                fontWeight: 600, 
                color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                lineHeight: 1.2,
                whiteSpace: 'normal'
              }}>
                {title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Item Detail Card */}
      <div 
        className="surface-card"
        style={{
          background: 'var(--bg-surface-2)',
          border: `1px solid ${isSelectedAccent(isInnovex)}`,
          padding: '2rem',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {isInnovex ? (
          /* Innovex Detail View */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span 
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: 'var(--innovex-accent)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    fontWeight: 700
                  }}
                >
                  STEP {selectedItem.step}
                </span>
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                  {selectedItem.tagline}
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '1rem' }}>
                {selectedItem.title}
              </h3>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {selectedItem.description}
              </p>

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  background: 'var(--bg-surface-1)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--border-medium)'
                }}
              >
                <FileText size={18} color="var(--innovex-accent)" />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                    Required Milestone Deliverable:
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#ffffff', fontWeight: 600 }}>
                    {selectedItem.deliverable}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Actions */}
            <div 
              style={{
                background: 'var(--bg-canvas)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={16} color="var(--innovex-accent)" />
                Design Thinking Toolkit & Actions
              </h4>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedItem.keyActions.map((action: string, i: number) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--innovex-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          /* Elocution Detail View */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span 
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(56, 189, 248, 0.2)',
                    color: 'var(--elocution-accent)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    fontWeight: 700
                  }}
                >
                  PHASE 0{selectedItem.phase}
                </span>
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                  {selectedItem.day}
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '1rem' }}>
                {selectedItem.title}
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Phase Objective:
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {selectedItem.objective}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Session Format:
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {selectedItem.format}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                <Clock size={14} color="var(--elocution-accent)" />
                <span>Duration:</span>
                <PlaceholderTag label={selectedItem.duration} />
              </div>
            </div>

            {/* Evaluation Focus */}
            <div 
              style={{
                background: 'var(--bg-canvas)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={16} color="var(--elocution-accent)" />
                Adjudication Focus Points
              </h4>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedItem.evaluationFocus.map((focus: string, i: number) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--elocution-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function isSelectedAccent(isInnovex: boolean) {
  return isInnovex ? 'var(--innovex-border)' : 'var(--elocution-border)';
}
