import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';

export const InnovexProcessFunnel: React.FC = () => {
  return (
    <div 
      className="surface-card"
      style={{
        padding: 'clamp(1.75rem, 3vw, 2.5rem)',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 28, 20, 0.98) 100%)',
        border: '1px solid var(--innovex-border)',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '780px', marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
          <Sparkles size={18} color="var(--innovex-accent)" aria-hidden="true" />
          <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0, fontWeight: 800 }}>
            The INNOVEX Convergence Funnel
          </h3>
        </div>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
          How broad societal challenges are systematically funneled through stakeholder empathy, first-principles root cause discovery, and sustainable business modelling into measurable social impact.
        </p>
      </div>

      {/* Responsive Inline SVG Flow Diagram */}
      <div 
        style={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <svg 
          viewBox="0 0 860 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          role="img"
          aria-labelledby="funnel-svg-title funnel-svg-desc"
        >
          <title id="funnel-svg-title">INNOVEX Convergence Innovation Funnel</title>
          <desc id="funnel-svg-desc">
            A diagram showing the step-by-step funneling of broad challenge themes through empathy research, root cause analysis, solution prototyping, and business modelling into social impact.
          </desc>

          <defs>
            <linearGradient id="funnelGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="funnelGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#081c14" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glowEffect" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#10b981" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* Background Connecting Funnel Wave */}
          <path 
            d="M 40 40 Q 430 110 820 40 L 760 260 Q 430 200 100 260 Z" 
            fill="url(#funnelGradient2)" 
            stroke="rgba(16, 185, 129, 0.2)" 
            strokeWidth="1"
          />

          {/* Stage 1: Broad Theme */}
          <g transform="translate(40, 60)">
            <rect width="130" height="70" rx="8" fill="#0d1626" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="65" y="28" fill="#38bdf8" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">STAGE 01</text>
            <text x="65" y="46" fill="#ffffff" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">Broad Theme</text>
            <text x="65" y="58" fill="#94a3b8" fontFamily="sans-serif" fontSize="9" textAnchor="middle">5 SDGs</text>
          </g>

          {/* Connector Arrow 1 */}
          <path d="M 175 95 L 205 95" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="208,95 200,90 200,100" fill="#38bdf8" />

          {/* Stage 2: People & Empathy */}
          <g transform="translate(210, 60)">
            <rect width="130" height="70" rx="8" fill="#0d1626" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="65" y="28" fill="#38bdf8" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">STAGE 02</text>
            <text x="65" y="46" fill="#ffffff" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">People &amp; Context</text>
            <text x="65" y="58" fill="#94a3b8" fontFamily="sans-serif" fontSize="9" textAnchor="middle">Empathy Audits</text>
          </g>

          {/* Connector Arrow 2 */}
          <path d="M 345 95 L 375 95" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="378,95 370,90 370,100" fill="#10b981" />

          {/* Stage 3: Root Cause Insight */}
          <g transform="translate(380, 60)">
            <rect width="130" height="70" rx="8" fill="#081c14" stroke="#10b981" strokeWidth="1.5" filter="url(#glowEffect)" />
            <text x="65" y="28" fill="#10b981" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">STAGE 03</text>
            <text x="65" y="46" fill="#ffffff" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">Root Cause</text>
            <text x="65" y="58" fill="#34d399" fontFamily="sans-serif" fontSize="9" textAnchor="middle">5-Whys Synthesis</text>
          </g>

          {/* Connector Arrow 3 */}
          <path d="M 515 95 L 545 95" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="548,95 540,90 540,100" fill="#10b981" />

          {/* Stage 4: Frugal Solution */}
          <g transform="translate(550, 60)">
            <rect width="130" height="70" rx="8" fill="#081c14" stroke="#10b981" strokeWidth="1.5" />
            <text x="65" y="28" fill="#10b981" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">STAGE 04</text>
            <text x="65" y="46" fill="#ffffff" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">Frugal Prototype</text>
            <text x="65" y="58" fill="#94a3b8" fontFamily="sans-serif" fontSize="9" textAnchor="middle">Architecture</text>
          </g>

          {/* Connector Arrow 4 */}
          <path d="M 685 95 L 715 95" stroke="#34d399" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="718,95 710,90 710,100" fill="#34d399" />

          {/* Stage 5: Scalable Impact */}
          <g transform="translate(720, 60)">
            <rect width="110" height="70" rx="8" fill="#06160e" stroke="#34d399" strokeWidth="2" filter="url(#glowEffect)" />
            <text x="55" y="28" fill="#34d399" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">STAGE 05</text>
            <text x="55" y="46" fill="#ffffff" fontFamily="sans-serif" fontSize="11" fontWeight="bold" textAnchor="middle">Social Impact</text>
            <text x="55" y="58" fill="#34d399" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle">Venture Pitch</text>
          </g>

          {/* Bottom Summary Ribbon inside SVG */}
          <g transform="translate(100, 180)">
            <rect width="660" height="42" rx="6" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.1)" />
            <text x="330" y="26" fill="#cbd5e1" fontFamily="sans-serif" fontSize="11" textAnchor="middle" fontWeight="500">
              Discipline: Empathy Research → Root Cause Mapping → Solution Prototyping → Sustainable Business Model
            </text>
          </g>
        </svg>
      </div>

      {/* Textual Accessibility Interpretation */}
      <div 
        style={{
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.8125rem',
          color: 'var(--text-muted)'
        }}
      >
        <span>
          <strong>Convergence Principle:</strong> Teams begin with an open challenge space and narrow down through verified root-cause evidence before architecting solutions.
        </span>
      </div>
    </div>
  );
};
