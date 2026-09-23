import React from 'react';
import { AlertCircle } from 'lucide-react';

export interface PlaceholderProps {
  label?: string;
  type?: 'text' | 'badge' | 'inline';
  showIcon?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  label = '[TO BE PROVIDED]',
  type = 'badge',
  showIcon = true,
  className = '',
  style
}) => {
  if (type === 'inline') {
    return (
      <span 
        className={`placeholder-inline ${className}`}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.875em',
          color: 'var(--accent-amber)',
          letterSpacing: '0.04em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          ...style
        }}
      >
        {showIcon && <AlertCircle size={13} style={{ flexShrink: 0 }} />}
        <span>{label}</span>
      </span>
    );
  }

  return (
    <span
      className={`placeholder-tag ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.2rem 0.6rem',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: 'var(--amber-bg)',
        border: '1px solid var(--amber-border)',
        color: 'var(--accent-amber)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.725rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        lineHeight: 1.2,
        verticalAlign: 'middle',
        ...style
      }}
      title="Official information to be confirmed"
    >
      {showIcon && <AlertCircle size={12} strokeWidth={2.5} style={{ flexShrink: 0 }} />}
      <span>{label}</span>
    </span>
  );
};
