import React from 'react';
import { ArrowRight, Mic, Clock, Sparkles } from 'lucide-react';
import { ELOCUTION_PHASES } from '../../data/eventData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { PlaceholderTag } from '../common/PlaceholderTag';

export const ElocutionPhasesTeaser: React.FC = () => {
  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-canvas)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <SectionHeading
              badge="6-Phase Growth Track"
              badgeVariant="elocution"
              title="The ELOCUTION Progression"
              subtitle="From orientation and spontaneous expression to high-stakes debate and final championship assessment."
              className="mb-0"
            />
          </div>
          <div style={{ marginBottom: '2.5rem' }}>
            <Button to="/elocution" variant="elocution" size="sm" icon={<ArrowRight size={14} />}>
              Full Elocution Track Details
            </Button>
          </div>
        </div>

        {/* 6 Phases Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {ELOCUTION_PHASES.map((phase) => (
            <div 
              key={phase.phase}
              className="glass-card glow-cyan-box"
              style={{
                background: 'linear-gradient(180deg, rgba(13, 22, 38, 0.85) 0%, rgba(8, 12, 20, 0.95) 100%)',
                border: '1px solid var(--elocution-border)',
                borderTop: '3px solid var(--elocution-accent)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 'var(--radius-lg)',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        color: 'var(--elocution-accent)',
                        padding: '0.25rem 0.6rem',
                        background: 'rgba(56, 189, 248, 0.15)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--elocution-border)'
                      }}
                    >
                      PHASE 0{phase.phase}
                    </span>
                    <span className="mono-tag" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      {phase.day}
                    </span>
                  </div>

                  {/* Micro Audio Wave */}
                  <div className="audio-visualizer" style={{ height: '18px', opacity: 0.75 }}>
                    <div className="audio-bar" style={{ width: '2px' }} />
                    <div className="audio-bar" style={{ width: '2px' }} />
                    <div className="audio-bar" style={{ width: '2px' }} />
                    <div className="audio-bar" style={{ width: '2px' }} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {phase.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {phase.objective}
                </p>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Evaluation Matrix:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {phase.evaluationFocus.map((focus, i) => (
                    <span 
                      key={i}
                      style={{
                        fontSize: '0.72rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: 'var(--elocution-accent)',
                        padding: '0.25rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(56, 189, 248, 0.2)'
                      }}
                    >
                      {focus}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={13} color="var(--elocution-accent)" /> Duration:
                  </span>
                  <PlaceholderTag label={phase.duration} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
