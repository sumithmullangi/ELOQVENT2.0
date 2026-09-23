import React from 'react';

export type BadgeVariant = 'elocution' | 'innovex' | 'neutral' | 'default' | 'placeholder' | 'status-pending' | 'status-official' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  className = '',
  style
}) => {
  const variantStyles: Record<string, { color: string; bg: string; border: string }> = {
    elocution: {
      color: 'var(--elocution-accent)',
      bg: 'rgba(56, 189, 248, 0.12)',
      border: 'rgba(56, 189, 248, 0.3)'
    },
    innovex: {
      color: 'var(--innovex-accent)',
      bg: 'rgba(16, 185, 129, 0.12)',
      border: 'rgba(16, 185, 129, 0.3)'
    },
    'status-pending': {
      color: 'var(--accent-amber)',
      bg: 'var(--amber-bg)',
      border: 'var(--amber-border)'
    },
    placeholder: {
      color: 'var(--accent-amber)',
      bg: 'var(--amber-bg)',
      border: 'var(--amber-border)'
    },
    'status-official': {
      color: '#ffffff',
      bg: 'rgba(56, 189, 248, 0.2)',
      border: 'var(--border-bright)'
    },
    outline: {
      color: 'var(--text-secondary)',
      bg: 'transparent',
      border: '1px solid var(--border-medium)'
    },
    default: {
      color: 'var(--text-secondary)',
      bg: 'var(--bg-surface-2)',
      border: 'var(--border-subtle)'
    },
    neutral: {
      color: 'var(--text-secondary)',
      bg: 'var(--bg-surface-2)',
      border: 'var(--border-subtle)'
    }
  };

  const sizeStyles: Record<BadgeSize, React.CSSProperties> = {
    sm: {
      padding: '0.15rem 0.5rem',
      fontSize: '0.6875rem'
    },
    md: {
      padding: '0.25rem 0.75rem',
      fontSize: '0.75rem'
    }
  };

  const selected = variantStyles[variant] || variantStyles.neutral;

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: selected.color,
    backgroundColor: selected.bg,
    border: `1px solid ${selected.border}`,
    lineHeight: 1.2,
    ...sizeStyles[size],
    ...style
  };

  return (
    <span className={`badge-pill ${className}`} style={baseStyle}>
      {icon && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{icon}</span>}
      {children}
    </span>
  );
};
