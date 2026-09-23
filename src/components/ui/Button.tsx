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
    borderRadius: 'var(--radius-pill)',
    textDecoration: 'none',
    cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
    transition: 'transform var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast)',
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
      padding: '0.45rem 1rem',
      fontSize: '0.8125rem',
      letterSpacing: '0.02em'
    },
    md: {
      padding: '0.675rem 1.45rem',
      fontSize: '0.9375rem',
      letterSpacing: '0.01em'
    },
    lg: {
      padding: '0.875rem 2rem',
      fontSize: '1rem',
      letterSpacing: '0.01em'
    }
  };

  // Variant styles
  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: '#f5f5f7',
      color: '#000000',
      border: '1px solid rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 25px rgba(212, 178, 140, 0.25), inset 0 1px 1px #ffffff',
      fontWeight: 700
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.06)',
      color: '#f5f5f7',
      border: '1px solid rgba(255, 255, 255, 0.16)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)'
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
      background: 'linear-gradient(135deg, #f5d7b5 0%, #d4b28c 50%, #9b7244 100%)',
      color: '#000000',
      boxShadow: '0 4px 18px rgba(212, 178, 140, 0.35)',
      fontWeight: 700
    },
    elocution: {
      background: 'linear-gradient(135deg, #5ac8fa 0%, #2997ff 60%, #0071e3 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 18px rgba(41, 151, 255, 0.35)',
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
