import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Badge } from '../common/Badge';

interface PageHeaderProps {
  badge?: string;
  badgeVariant?: 'default' | 'elocution' | 'innovex' | 'placeholder';
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeVariant = 'default',
  title,
  subtitle,
  breadcrumb,
  children
}) => {
  return (
    <section 
      style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'linear-gradient(180deg, rgba(13, 19, 31, 0.7) 0%, rgba(7, 10, 16, 0.4) 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: badgeVariant === 'elocution' 
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)'
            : badgeVariant === 'innovex'
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
            marginBottom: '1.25rem'
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-secondary)' }}>
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
            {breadcrumb || title}
          </span>
        </div>

        {/* Badge */}
        {badge && (
          <div style={{ marginBottom: '0.75rem' }}>
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}

        {/* Title & Subtitle */}
        <div style={{ maxWidth: '850px' }}>
          <h1 style={{ marginBottom: '1rem' }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Optional Children / Controls */}
        {children && (
          <div style={{ marginTop: '1.75rem' }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
