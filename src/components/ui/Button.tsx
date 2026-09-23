import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'disabled' | 'innovex' | 'elocution' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  isExternal = false,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  className = '',
  disabled = false,
  style,
  ...rest
}) => {
  const isButtonDisabled = disabled || variant === 'disabled';

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--transition-base)',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    opacity: isButtonDisabled ? 0.5 : 1,
    outline: 'none',
    ...style
  };

  // Size styles
  const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: {
      padding: '0.45rem 0.875rem',
      fontSize: '0.8125rem',
      letterSpacing: '0.01em'
    },
    md: {
      padding: '0.675rem 1.35rem',
      fontSize: '0.9375rem',
      letterSpacing: '-0.01em'
    },
    lg: {
      padding: '0.875rem 1.85rem',
      fontSize: '1.05rem',
      letterSpacing: '-0.01em'
    }
  };

  // Variant styles
  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #38bdf8 0%, #10b981 100%)',
      color: '#070a10',
      boxShadow: '0 4px 14px rgba(56, 189, 248, 0.25)',
      fontWeight: 700
    },
    secondary: {
      background: 'var(--bg-surface-2)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-medium)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-bright)'
    },
    innovex: {
      background: 'var(--innovex-gradient)',
      color: '#031c12',
      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)',
      fontWeight: 700
    },
    elocution: {
      background: 'var(--elocution-gradient)',
      color: '#04101e',
      boxShadow: '0 4px 14px rgba(56, 189, 248, 0.25)',
      fontWeight: 700
    },
    disabled: {
      background: 'var(--bg-surface-2)',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-subtle)',
      cursor: 'not-allowed'
    }
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant]
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{icon}</span>}
    </>
  );

  // Link behavior via React Router
  if (to && !isButtonDisabled) {
    return (
      <Link 
        to={to} 
        style={combinedStyles} 
        className={`btn-interactive focus-visible-ring ${className}`}
      >
        {content}
      </Link>
    );
  }

  // External anchor behavior
  if (href && !isButtonDisabled) {
    return (
      <a 
        href={href} 
        style={combinedStyles} 
        target={isExternal ? '_blank' : undefined} 
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`btn-interactive focus-visible-ring ${className}`}
      >
        {content}
      </a>
    );
  }

  // Native button behavior
  return (
    <button
      style={combinedStyles}
      disabled={isButtonDisabled}
      className={`btn-interactive focus-visible-ring ${className}`}
      {...rest}
    >
      {content}
    </button>
  );
};
