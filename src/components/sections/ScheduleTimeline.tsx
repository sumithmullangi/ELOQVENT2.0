import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Filter, 
  Sparkles, 
  Mic, 
  Lightbulb, 
  CheckCircle2, 
  Scale, 
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import { EVENT_SCHEDULE_ITEMS, SchedulePhaseItem } from '../../data/schedule';
import { Placeholder } from '../ui/Placeholder';
import { Eyebrow } from '../ui/Eyebrow';

export const ScheduleTimeline: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<'All' | 'Day 1' | 'Day 2'>('All');
  const [selectedTrack, setSelectedTrack] = useState<'All' | 'Elocution' | 'Innovex'>('All');

  const days: Array<'Day 1' | 'Day 2'> = selectedDay === 'All' 
    ? ['Day 1', 'Day 2'] 
    : [selectedDay];

  const getDayItems = (day: 'Day 1' | 'Day 2') => {
    return EVENT_SCHEDULE_ITEMS.filter((item) => {
      const matchDay = item.day === day;
      const matchTrack = selectedTrack === 'All' || item.track === 'All' || item.track === selectedTrack;
      return matchDay && matchTrack;
    });
  };

  return (
    <div>
      {/* Schedule Filtering Controls */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          padding: '1rem 1.25rem',
          background: 'var(--bg-surface-1)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-subtle)'
        }}
      >
        {/* Day Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Day View:
          </span>
          <div style={{ display: 'flex', gap: '0.35rem' }} role="group" aria-label="Filter by Day">
            {(['All', 'Day 1', 'Day 2'] as const).map((day) => {
              const isSelected = selectedDay === day;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: isSelected ? 'var(--text-primary)' : 'var(--bg-surface-2)',
                    color: isSelected ? '#000000' : 'var(--text-secondary)',
                    border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {day === 'All' ? 'Full 2-Day Agenda' : day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Track Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Track Filter:
          </span>
          <div style={{ display: 'flex', gap: '0.35rem' }} role="group" aria-label="Filter by Track">
            {(['All', 'Elocution', 'Innovex'] as const).map((trk) => {
              const isSelected = selectedTrack === trk;
              const accentColor = trk === 'Elocution' ? 'var(--elocution-accent)' : trk === 'Innovex' ? 'var(--innovex-accent)' : 'var(--text-primary)';

              return (
                <button
                  key={trk}
                  type="button"
                  onClick={() => setSelectedTrack(trk)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: isSelected 
                      ? (trk === 'Elocution' ? 'rgba(56, 189, 248, 0.2)' : trk === 'Innovex' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.12)')
                      : 'transparent',
                    color: isSelected ? '#ffffff' : 'var(--text-muted)',
                    border: isSelected 
                      ? `1px solid ${accentColor}` 
                      : '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {trk === 'Elocution' && <Mic size={14} color={isSelected ? 'var(--elocution-accent)' : 'var(--text-muted)'} aria-hidden="true" />}
                  {trk === 'Innovex' && <Lightbulb size={14} color={isSelected ? 'var(--innovex-accent)' : 'var(--text-muted)'} aria-hidden="true" />}
                  {trk === 'All' && <Layers size={14} color={isSelected ? '#ffffff' : 'var(--text-muted)'} aria-hidden="true" />}
                  <span>{trk === 'All' ? 'All Tracks' : trk.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Days Sequence Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {days.map((dayName) => {
          const items = getDayItems(dayName);
          if (items.length === 0) return null;

          return (
            <section 
              key={dayName}
              aria-labelledby={`day-heading-${dayName.toLowerCase().replace(' ', '-')}`}
              style={{
                position: 'relative'
              }}
            >
              {/* Day Header Banner */}
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '1.25rem 1.75rem',
                  borderRadius: 'var(--radius-xl)',
                  background: 'linear-gradient(90deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 28, 20, 0.95) 100%)',
                  border: '1px solid var(--border-medium)',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div 
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <span 
                      style={{
                        background: 'var(--bg-surface-2)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '1.1rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--elocution-accent)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {dayName.toUpperCase()}
                    </span>
                    <h2 
                      id={`day-heading-${dayName.toLowerCase().replace(' ', '-')}`}
                      style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800 }}
                    >
                      {dayName === 'Day 1' ? 'Immersion, Debate & Problem Definition' : 'Championship Rounds & Grand Adjudication'}
                    </h2>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  <Calendar size={15} color="var(--elocution-accent)" aria-hidden="true" />
                  <span style={{ color: 'var(--text-muted)' }}>Date:</span>
                  <Placeholder label="[DATE TO BE PROVIDED]" />
                </div>
              </div>

              {/* Day's Sequence Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {items.map((item, idx) => {
                  const isElocution = item.track === 'Elocution';
                  const isInnovex = item.track === 'Innovex';
                  const isJoint = item.track === 'All';
                  const accentColor = isElocution ? 'var(--elocution-accent)' : isInnovex ? 'var(--innovex-accent)' : 'var(--text-primary)';

                  return (
                    <article
                      key={item.id}
                      className="surface-card"
                      style={{
                        background: item.isEvaluationCheckpoint 
                          ? 'linear-gradient(180deg, rgba(8, 28, 20, 0.95) 0%, rgba(13, 22, 38, 0.95) 100%)' 
                          : 'var(--bg-surface-1)',
                        border: item.isEvaluationCheckpoint 
                          ? '1px solid var(--innovex-border)' 
                          : '1px solid var(--border-subtle)',
                        borderLeft: `4px solid ${accentColor}`,
                        borderRadius: 'var(--radius-xl)',
                        padding: 'clamp(1.5rem, 3vw, 2rem)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.75rem',
                        alignItems: 'start',
                        transition: 'transform var(--transition-fast), border-color var(--transition-fast)'
                      }}
                    >
                      {/* Left Block: Stage & Content */}
                      <div>
                        {/* Meta Tags Bar */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                          <span 
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.725rem',
                              fontWeight: 800,
                              padding: '0.2rem 0.6rem',
                              borderRadius: 'var(--radius-sm)',
                              background: isElocution 
                                ? 'rgba(56, 189, 248, 0.15)' 
                                : isInnovex 
                                ? 'rgba(16, 185, 129, 0.15)' 
                                : 'rgba(255, 255, 255, 0.08)',
                              color: accentColor,
                              border: `1px solid ${accentColor}44`,
                              letterSpacing: '0.04em'
                            }}
                          >
                            {item.track.toUpperCase()}
                          </span>

                          {item.phaseOrStep && (
                            <span 
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.725rem',
                                color: 'var(--text-muted)',
                                background: 'var(--bg-surface-2)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-subtle)'
                              }}
                            >
                              {item.phaseOrStep}
                            </span>
                          )}

                          {item.isEvaluationCheckpoint && (
                            <span 
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.3rem',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                color: 'var(--accent-amber)',
                                background: 'var(--amber-bg)',
                                border: '1px solid var(--amber-border)',
                                padding: '0.15rem 0.5rem',
                                borderRadius: 'var(--radius-sm)'
                              }}
                            >
                              <Scale size={12} aria-hidden="true" />
                              ADJUDICATION CHECKPOINT
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: '#ffffff',
                            letterSpacing: '-0.02em',
                            margin: '0 0 0.65rem 0',
                            lineHeight: 1.3
                          }}
                        >
                          {item.title}
                        </h3>

                        {/* Summary */}
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 1.25rem 0' }}>
                          {item.summary}
                        </p>

                        {/* Focus Highlights */}
                        <div>
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
                            Key Milestones:
                          </div>

                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {item.focusHighlights.map((hl, hIdx) => (
                              <li 
                                key={hIdx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '0.5rem',
                                  fontSize: '0.8125rem',
                                  color: 'var(--text-primary)',
                                  lineHeight: 1.45
                                }}
                              >
                                <CheckCircle2 size={13} color={accentColor} style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Block: Logistics & Placeholders */}
                      <div 
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.85rem',
                          background: 'var(--bg-surface-2)',
                          padding: '1.25rem',
                          borderRadius: 'var(--radius-lg)',
                          border: '1px solid var(--border-subtle)',
                          height: 'fit-content'
                        }}
                      >
                        <div style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Logistics & Scheduling
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <Clock size={13} color="var(--elocution-accent)" aria-hidden="true" />
                            Session Timing:
                          </span>
                          <Placeholder label={item.time} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <MapPin size={13} color="var(--innovex-accent)" aria-hidden="true" />
                            Assigned Venue:
                          </span>
                          <Placeholder label={item.venue} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
