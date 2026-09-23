import React from 'react';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'subtle' | 'medium' | 'gradient-elocution' | 'gradient-innovex' | 'gradient-dual';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  style?: React.CSSProperties;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'subtle',
  spacing = 'md',
  className = '',
  style
}) => {
  const spacingMap: Record<string, { my: string; mx: string }> = {
    none: { my: '0', mx: '0' },
    sm: { my: 'var(--space-2)', mx: 'var(--space-2)' },
    md: { my: 'var(--space-6)', mx: 'var(--space-6)' },
    lg: { my: 'var(--space-12)', mx: 'var(--space-12)' },
    xl: { my: 'var(--space-16)', mx: 'var(--space-16)' }
  };

  const currentSpacing = spacingMap[spacing] || spacingMap.md;

  const backgroundMap: Record<string, string> = {
    subtle: 'var(--border-subtle)',
    medium: 'var(--border-medium)',
    'gradient-elocution': 'linear-gradient(90deg, transparent, var(--elocution-accent), transparent)',
    'gradient-innovex': 'linear-gradient(90deg, transparent, var(--innovex-accent), transparent)',
    'gradient-dual': 'linear-gradient(90deg, transparent, var(--elocution-accent), var(--innovex-accent), transparent)'
  };

  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={`app-divider-v ${className}`}
        style={{
          width: '1px',
          height: '100%',
          minHeight: '1.25rem',
          background: backgroundMap[variant] || 'var(--border-subtle)',
          margin: `0 ${currentSpacing.mx}`,
          flexShrink: 0,
          ...style
        }}
      />
    );
  }

  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={`app-divider-h ${className}`}
      style={{
        border: 'none',
        height: '1px',
        width: '100%',
        background: backgroundMap[variant] || 'var(--border-subtle)',
        marginTop: currentSpacing.my,
        marginBottom: currentSpacing.my,
        ...style
      }}
    />
  );
};
