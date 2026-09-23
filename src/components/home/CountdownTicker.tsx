import React, { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTicker: React.FC = () => {
  // Target date set for the upcoming symposium
  const targetDate = new Date('2026-11-15T09:00:00+05:30').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = Math.max(0, targetDate - now);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds }
  ];

  return (
    <div 
      className="glass-card"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
        padding: '0.65rem 1.15rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        background: 'rgba(13, 19, 31, 0.75)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--elocution-accent)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.05em' }}>
        <Zap size={14} className="animate-pulse-glow" />
        <span>STARTS IN:</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '38px',
                padding: '0.2rem 0.4rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: '#ffffff',
                  lineHeight: 1
                }}
              >
                {String(unit.value).padStart(2, '0')}
              </span>
              <span 
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                  marginTop: '2px'
                }}
              >
                {unit.label}
              </span>
            </div>
            {index < timeUnits.length - 1 && (
              <span style={{ color: 'var(--elocution-accent)', fontWeight: 700, fontSize: '0.9rem' }}>:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
