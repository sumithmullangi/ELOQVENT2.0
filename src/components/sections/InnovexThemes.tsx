import React, { useState } from 'react';
import { HeartPulse, Sprout, Droplets, Recycle, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { INNOVEX_THEMES } from '../../data/innovexProcess';

export const InnovexThemes: React.FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>(INNOVEX_THEMES[0].id);

  const themeIcons: Record<string, React.ReactNode> = {
    healthcare: <HeartPulse size={24} color="var(--innovex-accent)" aria-hidden="true" />,
    agriculture: <Sprout size={24} color="var(--innovex-accent)" aria-hidden="true" />,
    'water-sanitation': <Droplets size={24} color="var(--innovex-accent)" aria-hidden="true" />,
    'waste-circularity': <Recycle size={24} color="var(--innovex-accent)" aria-hidden="true" />,
    'education-learning': <GraduationCap size={24} color="var(--innovex-accent)" aria-hidden="true" />
  };

  const selectedTheme = INNOVEX_THEMES.find((t) => t.id === selectedThemeId) || INNOVEX_THEMES[0];

  return (
    <section 
      id="innovex-themes"
      aria-labelledby="themes-heading"
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-canvas)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <Container size="lg">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <Eyebrow variant="innovex" style={{ marginBottom: '0.85rem' }}>
            Challenge Domains
          </Eyebrow>
          <h2 
            id="themes-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '1rem'
            }}
          >
            Five Pillars of Real-World Impact
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            Teams choose from five foundational challenge domains aligned with United Nations Sustainable Development Goals and grassroots community needs.
          </p>
        </div>

        {/* Interactive Asymmetric Composition: Themes Selector Tabs + Featured Theme Inspector */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: 5 Themes Selector List */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            {INNOVEX_THEMES.map((theme) => {
              const isSelected = theme.id === selectedThemeId;

              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setSelectedThemeId(theme.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    background: isSelected 
                      ? 'linear-gradient(90deg, rgba(16, 185, 129, 0.15) 0%, rgba(8, 28, 20, 0.95) 100%)' 
                      : 'var(--bg-surface-1)',
                    border: isSelected 
                      ? '1px solid var(--innovex-border)' 
                      : '1px solid var(--border-subtle)',
                    borderLeft: isSelected 
                      ? '4px solid var(--innovex-accent)' 
                      : '1px solid var(--border-subtle)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all var(--transition-base)'
                  }}
                >
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: isSelected ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {themeIcons[theme.id]}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span 
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.725rem',
                          fontWeight: 700,
                          color: isSelected ? 'var(--innovex-accent)' : 'var(--text-muted)'
                        }}
                      >
                        {theme.tag}
                      </span>
                    </div>
                    <div 
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: isSelected ? '#ffffff' : 'var(--text-primary)',
                        marginTop: '0.15rem'
                      }}
                    >
                      {theme.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Theme Deep Dive Inspector */}
          <div 
            className="surface-card"
            style={{
              background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
              border: '1px solid var(--innovex-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.75rem, 3vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--innovex-accent)',
                    background: 'rgba(16, 185, 129, 0.12)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--innovex-border)',
                    letterSpacing: '0.06em'
                  }}
                >
                  {selectedTheme.tag} • ACTIVE DOMAIN
                </span>
                <span className="mono-tag" style={{ color: 'var(--text-muted)' }}>
                  UN SDG ALIGNED
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {themeIcons[selectedTheme.id]}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#ffffff', margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>
                    {selectedTheme.title}
                  </h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--innovex-accent)', fontWeight: 600 }}>
                    {selectedTheme.subtitle}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '1rem', marginBottom: '1.75rem' }}>
                {selectedTheme.description}
              </p>

              {/* Focus Areas Pill Cloud */}
              <div>
                <div 
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.75rem'
                  }}
                >
                  Illustrative Innovation Focus Areas:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedTheme.focusAreas.map((area, idx) => (
                    <div 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.6rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--innovex-accent)" aria-hidden="true" style={{ flexShrink: 0 }} />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div 
              style={{
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)'
              }}
            >
              Teams formulate self-defined problem statements within their chosen domain.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
