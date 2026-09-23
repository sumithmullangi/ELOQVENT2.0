import React from 'react';
import { HeartPulse, Sprout, Droplets, Recycle, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { InnovexTheme } from '../../types';

interface ThemeCardProps {
  theme: InnovexTheme;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  const iconMap: Record<string, React.ReactNode> = {
    HeartPulse: <HeartPulse size={24} color="#f43f5e" />,
    Sprout: <Sprout size={24} color="#10b981" />,
    Droplets: <Droplets size={24} color="#38bdf8" />,
    Recycle: <Recycle size={24} color="#34d399" />,
    GraduationCap: <GraduationCap size={24} color="#a855f7" />
  };

  return (
    <div 
      className="surface-card"
      style={{
        background: 'var(--bg-surface-1)',
        border: '1px solid var(--border-subtle)',
        borderTop: '3px solid var(--innovex-accent)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.75rem'
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--innovex-accent)',
              padding: '0.2rem 0.5rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '4px'
            }}
          >
            {theme.tag}
          </span>
          <div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'var(--bg-surface-2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {iconMap[theme.iconName] || <Sprout size={22} color="var(--innovex-accent)" />}
          </div>
        </div>

        <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.35rem' }}>
          {theme.title}
        </h3>

        <div style={{ fontSize: '0.85rem', color: 'var(--innovex-accent)', fontWeight: 600, marginBottom: '0.85rem' }}>
          {theme.subtitle}
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          {theme.description}
        </p>

        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            Priority Focus Areas:
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {theme.focusAreas.map((area, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={14} color="var(--innovex-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
