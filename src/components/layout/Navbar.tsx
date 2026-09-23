import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Scroll listener with threshold
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change & restore body scroll
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Lock body scroll and manage focus when mobile drawer opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Move focus into the drawer
      const timer = setTimeout(() => {
        const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Handle Escape key and focus trapping inside drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Journey', path: '/journey' },
    { name: 'Evaluation', path: '/evaluation' },
    { name: 'Eligibility', path: '/eligibility' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <header
        role="banner"
        className={`global-navbar ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: 'var(--nav-height)',
          backgroundColor: scrolled ? 'rgba(5, 8, 22, 0.92)' : 'rgba(5, 8, 22, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${scrolled ? 'var(--border-medium)' : 'var(--border-subtle)'}`,
          transition: 'background-color var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none'
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Brand Logo / Wordmark */}
          <Link
            to="/"
            className="brand-link focus-visible-ring"
            aria-label="ELOQVENT 2K26 Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              flexShrink: 0,
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #38bdf8 0%, #2563eb 50%, #10b981 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 18px rgba(56, 189, 248, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                flexShrink: 0
              }}
            >
              <Sparkles size={20} color="#050816" aria-hidden="true" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                ELOQVENT <span style={{ 
                  background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  fontSize: '1.15rem'
                }}>2K26</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.625rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginTop: '3px'
                }}
              >
                National Symposium
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Landmark */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="desktop-nav-container"
            style={{ display: 'none' }}
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}
            >
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      aria-current={active ? 'page' : undefined}
                      className="nav-desktop-link focus-visible-ring"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: active ? 700 : 500,
                        color: active ? '#ffffff' : 'var(--text-secondary)',
                        position: 'relative',
                        padding: '0.5rem 0.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        transition: 'color var(--transition-fast)'
                      }}
                    >
                      {link.name}
                      {/* Active indicator bar */}
                      {active && (
                        <span
                          aria-hidden="true"
                          style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0.5rem',
                            right: '0.5rem',
                            height: '2px',
                            background: 'linear-gradient(90deg, var(--elocution-accent), var(--innovex-accent))',
                            borderRadius: '2px',
                            boxShadow: '0 0 8px rgba(56, 189, 248, 0.6)'
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <div className="desktop-cta" style={{ display: 'none' }}>
              <Link
                to="/register"
                className="btn-luminous-cyan focus-visible-ring"
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.02em'
                }}
              >
                <span>REGISTER NOW</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Accessible Mobile Menu Trigger */}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-nav-toggle focus-visible-ring"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              style={{
                background: 'rgba(10, 16, 36, 0.6)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                padding: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
            >
              {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            backgroundColor: 'rgba(5, 8, 22, 0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'calc(var(--nav-height) + 1rem) 1.5rem 2rem 1.5rem',
            overflowY: 'auto',
            maxHeight: '100vh',
            boxSizing: 'border-box'
          }}
          onClick={handleCloseMenu}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em'
                }}
              >
                Navigation Menu
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--cyan-accent)'
                }}
              >
                Two Tracks • One Experience
              </span>
            </div>

            <nav role="navigation" aria-label="Mobile Main Navigation">
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.375rem',
                  margin: 0,
                  padding: 0
                }}
              >
                {navLinks.map((link) => {
                  const active = isLinkActive(link.path);
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        aria-current={active ? 'page' : undefined}
                        onClick={handleCloseMenu}
                        className="focus-visible-ring"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: active ? 'var(--bg-surface-2)' : 'transparent',
                          color: active ? '#ffffff' : 'var(--text-secondary)',
                          fontWeight: active ? 700 : 500,
                          fontSize: '1rem',
                          textDecoration: 'none',
                          borderLeft: active ? '3px solid var(--elocution-accent)' : '3px solid transparent',
                          transition: 'background-color var(--transition-fast)'
                        }}
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          size={16}
                          color={active ? 'var(--elocution-accent)' : 'var(--text-muted)'}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Quick Track Shortcuts */}
            <div
              style={{
                marginTop: '1.25rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem'
              }}
            >
              <Link
                to="/elocution"
                onClick={handleCloseMenu}
                className="focus-visible-ring"
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid var(--elocution-border)',
                  color: 'var(--elocution-accent)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textAlign: 'center',
                  textDecoration: 'none'
                }}
              >
                Elocution Track →
              </Link>
              <Link
                to="/innovex"
                onClick={handleCloseMenu}
                className="focus-visible-ring"
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid var(--innovex-border)',
                  color: 'var(--innovex-accent)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  textAlign: 'center',
                  textDecoration: 'none'
                }}
              >
                Innovex Track →
              </Link>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }} onClick={(e) => e.stopPropagation()}>
            <Link
              to="/register"
              onClick={handleCloseMenu}
              className="btn-luminous-cyan focus-visible-ring"
              style={{
                width: '100%',
                padding: '0.875rem 1.5rem',
                fontSize: '1rem',
                letterSpacing: '0.02em',
                boxSizing: 'border-box'
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav-container,
          .desktop-cta {
            display: block !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
        .nav-desktop-link:hover {
          color: #ffffff !important;
        }
      `}</style>
    </>
  );
};
