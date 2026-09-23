import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Filter, Sparkles, Mic, Lightbulb } from 'lucide-react';
import { EVENT_SCHEDULE } from '../../data/eventData';
import { PlaceholderTag } from '../common/PlaceholderTag';

export const ScheduleTimeline: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<'All' | 'Day 1' | 'Day 2'>('Day 1');
  const [selectedTrack, setSelectedTrack] = useState<'All' | 'Elocution' | 'Innovex'>('All');

  const filteredSchedule = EVENT_SCHEDULE.filter((item) => {
    const matchDay = selectedDay === 'All' || item.day === selectedDay;
    const matchTrack = selectedTrack === 'All' || item.track === 'All' || item.track === selectedTrack;
    return matchDay && matchTrack;
  });

  return (
    <div>
      {/* Schedule Controls */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          padding: '1rem 1.25rem',
          background: 'var(--bg-surface-1)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)'
        }}
      >
        {/* Day Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Day:
          </span>
          <div style={{ display: 'flex', gap: '0.35rem' }}>
            {(['Day 1', 'Day 2', 'All'] as const).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  background: selectedDay === day ? 'var(--text-primary)' : 'var(--bg-surface-2)',
                  color: selectedDay === day ? 'var(--text-inverse)' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Track Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={16} color="var(--text-muted)" />
          <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Filter Track:
          </span>
          <div style={{ display: 'flex', gap: '0.35rem' }}>
            {(['All', 'Elocution', 'Innovex'] as const).map((trk) => (
              <button
                key={trk}
                onClick={() => setSelectedTrack(trk)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  background: selectedTrack === trk 
                    ? (trk === 'Elocution' ? 'rgba(56, 189, 248, 0.2)' : trk === 'Innovex' ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-surface-3)')
                    : 'transparent',
                  color: selectedTrack === trk ? '#ffffff' : 'var(--text-muted)',
                  border: `1px solid ${selectedTrack === trk ? (trk === 'Elocution' ? 'var(--elocution-accent)' : trk === 'Innovex' ? 'var(--innovex-accent)' : 'var(--border-medium)') : 'transparent'}`,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {trk}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Items List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredSchedule.map((item) => {
          const isElocution = item.track === 'Elocution';
          const isInnovex = item.track === 'Innovex';

          return (
            <div
              key={item.id}
              className="surface-card"
              style={{
                background: 'var(--bg-surface-1)',
                border: '1px solid var(--border-subtle)',
                borderLeft: `4px solid ${isElocution ? 'var(--elocution-accent)' : isInnovex ? 'var(--innovex-accent)' : 'var(--border-bright)'}`,
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: 'var(--bg-surface-2)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {item.day}
                  </span>

                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.725rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: isElocution ? 'rgba(56, 189, 248, 0.12)' : isInnovex ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                      color: isElocution ? 'var(--elocution-accent)' : isInnovex ? 'var(--innovex-accent)' : 'var(--text-secondary)'
                    }}
                  >
                    {item.track.toUpperCase()}
                  </span>

                  {item.phaseOrStep && (
                    <span className="mono-tag" style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                      {item.phaseOrStep}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {item.description}
                </p>
              </div>

              {/* Time and Venue Tags */}
              <div 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.5rem',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  paddingLeft: '1rem',
                  borderLeft: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  <Clock size={15} color="var(--elocution-accent)" />
                  <span style={{ color: 'var(--text-muted)' }}>Timing:</span>
                  <PlaceholderTag label={item.time} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={15} color="var(--innovex-accent)" />
                  <span style={{ color: 'var(--text-muted)' }}>Location:</span>
                  <PlaceholderTag label={item.venue} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
