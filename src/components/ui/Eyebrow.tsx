import React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  variant?: 'elocution' | 'innovex' | 'neutral' | 'amber' | 'purple';
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  variant = 'neutral',
  icon,
  className = '',
  style
}) => {
  const variantStyles: Record<string, { color: string; bg: string; border: string }> = {
    elocution: {
      color: 'var(--elocution-accent)',
      bg: 'rgba(56, 189, 248, 0.1)',
      border: 'rgba(56, 189, 248, 0.25)'
    },
    innovex: {
      color: 'var(--innovex-accent)',
      bg: 'rgba(16, 185, 129, 0.1)',
      border: 'rgba(16, 185, 129, 0.25)'
    },
    amber: {
      color: 'var(--accent-amber)',
      bg: 'var(--amber-bg)',
      border: 'var(--amber-border)'
    },
    purple: {
      color: 'var(--accent-purple)',
      bg: 'rgba(168, 85, 247, 0.1)',
      border: 'rgba(168, 85, 247, 0.25)'
    },
    neutral: {
      color: 'var(--text-secondary)',
      bg: 'var(--bg-surface-2)',
      border: 'var(--border-subtle)'
    }
  };

  const selected = variantStyles[variant] || variantStyles.neutral;

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.25rem 0.65rem',
    borderRadius: 'var(--radius-sm)',
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: selected.color,
    backgroundColor: selected.bg,
    border: `1px solid ${selected.border}`,
    lineHeight: 1.2,
    ...style
  };

  return (
    <span className={`eyebrow-tag ${className}`} style={baseStyle}>
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </span>
  );
};
