import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  style,
  ...rest
}) => {
  const maxWidthMap: Record<string, string> = {
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px',
    full: '100%'
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: maxWidthMap[size] || '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 'var(--space-4)',
    paddingRight: 'var(--space-4)',
    boxSizing: 'border-box',
    ...style
  };

  return (
    <div className={`app-container ${className}`} style={containerStyle} {...rest}>
      {children}
    </div>
  );
};
