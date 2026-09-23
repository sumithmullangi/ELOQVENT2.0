import React from 'react';
import { Eyebrow } from './Eyebrow';

export interface SectionHeadingProps {
  eyebrow?: string;
  badge?: string; // alias for eyebrow
  eyebrowVariant?: 'elocution' | 'innovex' | 'neutral' | 'amber' | 'purple' | string;
  badgeVariant?: 'elocution' | 'innovex' | 'neutral' | 'amber' | 'purple' | string;
  eyebrowIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  alignment?: 'left' | 'center' | 'right'; // alias for align
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  maxWidth?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  badge,
  eyebrowVariant,
  badgeVariant,
  eyebrowIcon,
  title,
  subtitle,
  align,
  alignment,
  headingLevel = 'h2',
  maxWidth = '750px',
  className = '',
  style
}) => {
  const effectiveEyebrow = eyebrow || badge;
  const effectiveVariant = (eyebrowVariant || badgeVariant || 'neutral') as any;
  const effectiveAlign = align || alignment || 'left';
  const HeadingTag = headingLevel;

  const titleSizeStyles: Record<string, React.CSSProperties> = {
    h1: {
      fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.03em'
    },
    h2: {
      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em'
    },
    h3: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em'
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.4
    }
  };

  const containerStyle: React.CSSProperties = {
    textAlign: effectiveAlign,
    maxWidth: effectiveAlign === 'center' ? maxWidth : '100%',
    marginLeft: effectiveAlign === 'center' ? 'auto' : undefined,
    marginRight: effectiveAlign === 'center' ? 'auto' : undefined,
    marginBottom: '2.5rem',
    ...style
  };

  return (
    <div className={`section-heading-block ${className}`} style={containerStyle}>
      {effectiveEyebrow && (
        <div style={{ marginBottom: '0.875rem' }}>
          <Eyebrow variant={effectiveVariant} icon={eyebrowIcon}>
            {effectiveEyebrow}
          </Eyebrow>
        </div>
      )}

      <HeadingTag
        style={{
          fontFamily: 'var(--font-display)',
          color: '#ffffff',
          marginBottom: subtitle ? '1rem' : 0,
          ...titleSizeStyles[headingLevel]
        }}
      >
        {title}
      </HeadingTag>

      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: maxWidth,
            marginLeft: effectiveAlign === 'center' ? 'auto' : undefined,
            marginRight: effectiveAlign === 'center' ? 'auto' : undefined
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
