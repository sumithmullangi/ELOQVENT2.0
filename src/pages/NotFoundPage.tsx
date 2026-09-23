import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <section 
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        textAlign: 'center',
        backgroundColor: 'var(--bg-canvas)'
      }}
    >
      <div className="container" style={{ maxWidth: '600px' }}>
        <div 
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '5rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, var(--elocution-accent), var(--innovex-accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            marginBottom: '1rem'
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '1rem' }}>
          Page Not Found
        </h1>

        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          The requested page could not be located in the ELOQVENT 2K26 symposium directory.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Button to="/" variant="primary" icon={<Home size={16} />} iconPosition="left">
            Return to Homepage
          </Button>
          <Button to="/tracks" variant="outline">
            Explore Tracks
          </Button>
        </div>
      </div>
    </section>
  );
};
