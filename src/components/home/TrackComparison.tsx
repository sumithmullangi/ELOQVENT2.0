import React, { useState } from 'react';
import { Mic, Lightbulb, ArrowRight, Sparkles, Brain, Scale, BookOpen, Flame, Users, Search, GitMerge, Cpu, BarChart3, Trophy, CheckCircle2, HelpCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';

export const TrackComparison: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'elocution' | 'innovex'>('all');
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const elocutionPillars = [
    { title: 'Public Speaking', icon: <Mic size={18} color="var(--elocution-accent)" />, desc: 'Voice projection & audience mastery' },
    { title: 'Articulation', icon: <Sparkles size={18} color="var(--elocution-accent)" />, desc: 'Clarity in complex subject matter' },
    { title: 'Critical Thinking', icon: <Brain size={18} color="var(--elocution-accent)" />, desc: 'Counter-argument deconstruction' },
    { title: 'Debate & Rebuttal', icon: <Scale size={18} color="var(--elocution-accent)" />, desc: 'Agile responses under time pressure' },
    { title: 'Storytelling', icon: <BookOpen size={18} color="var(--elocution-accent)" />, desc: 'Emotional resonant narrative structures' },
    { title: 'Persuasive Speech', icon: <Flame size={18} color="var(--elocution-accent)" />, desc: 'Inspiring actionable systemic change' }
  ];

  const innovexPillars = [
    { title: 'Human-Centred Design', icon: <Users size={18} color="var(--innovex-accent)" />, desc: 'Stakeholder interviews & lived realities' },
    { title: 'Design Thinking', icon: <Search size={18} color="var(--innovex-accent)" />, desc: 'Iterative problem framing & empathy' },
    { title: 'Root-Cause Analysis', icon: <GitMerge size={18} color="var(--innovex-accent)" />, desc: '5-Whys and causal chain mapping' },
    { title: 'Product/Service Prototyping', icon: <Cpu size={18} color="var(--innovex-accent)" />, desc: 'Tangible functional workflow models' },
    { title: 'Business Modelling', icon: <BarChart3 size={18} color="var(--innovex-accent)" />, desc: 'Unit economics & scalable distribution' },
    { title: 'Social Entrepreneurship', icon: <Trophy size={18} color="var(--innovex-accent)" />, desc: 'Venture pitch to expert investors' }
  ];

  return (
    <section className="section-py cyber-grid-bg" style={{ backgroundColor: 'var(--bg-canvas)', position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badge="Two Specialized Tracks"
          title="Choose Your Arena of Impact"
          subtitle="Whether you command the podium with rhetoric and dialectics or engineer ground-level prototypes for societal challenges, ELOQVENT 2K26 is built for your vision."
          alignment="center"
        />

        {/* Interactive Track Switcher Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveFilter('all')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              background: activeFilter === 'all' ? 'rgba(255, 255, 255, 0.15)' : 'var(--bg-surface-2)',
              border: `1px solid ${activeFilter === 'all' ? '#ffffff' : 'var(--border-subtle)'}`,
              color: activeFilter === 'all' ? '#ffffff' : 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
          >
            ALL TRACKS
          </button>
          <button
            onClick={() => setActiveFilter('elocution')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              background: activeFilter === 'elocution' ? 'rgba(56, 189, 248, 0.2)' : 'var(--bg-surface-2)',
              border: `1px solid ${activeFilter === 'elocution' ? 'var(--elocution-accent)' : 'var(--border-subtle)'}`,
              color: activeFilter === 'elocution' ? 'var(--elocution-accent)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Mic size={14} />
            TRACK 01: ELOCUTION
          </button>
          <button
            onClick={() => setActiveFilter('innovex')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              background: activeFilter === 'innovex' ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-surface-2)',
              border: `1px solid ${activeFilter === 'innovex' ? 'var(--innovex-accent)' : 'var(--border-subtle)'}`,
              color: activeFilter === 'innovex' ? 'var(--innovex-accent)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Lightbulb size={14} />
            TRACK 02: INNOVEX
          </button>
        </div>

        {/* Track Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: activeFilter === 'all' ? 'repeat(auto-fit, minmax(330px, 1fr))' : '1fr',
            maxWidth: activeFilter === 'all' ? '1100px' : '720px',
            margin: '0 auto 3rem auto',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* ELOCUTION Track Card */}
          {(activeFilter === 'all' || activeFilter === 'elocution') && (
            <div 
              className="glass-card glow-cyan-box animate-fade-in"
              style={{
                position: 'relative',
                background: 'linear-gradient(180deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
                border: '1px solid var(--elocution-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span className="mono-tag" style={{ color: 'var(--elocution-accent)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="live-dot-cyan" /> TRACK 01 • INDIVIDUAL
                  </span>
                  <span 
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(56, 189, 248, 0.15)',
                      color: 'var(--elocution-accent)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      border: '1px solid var(--elocution-border)'
                    }}
                  >
                    6 STAGES
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(56, 189, 248, 0.2)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(56, 189, 248, 0.25)'
                    }}
                  >
                    <Mic size={28} color="var(--elocution-accent)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                      ELOCUTION
                    </h3>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--elocution-accent)', fontWeight: 600 }}>
                      Communication, Rhetoric & Debate
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.65 }}>
                  A championship oratorical proving ground. Move through thematic keynote delivery, impromptu crisis extempore, structured dialectic debate, and live audience Q&A defense.
                </p>

                {/* Pillars Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.75rem',
                    marginBottom: '2rem'
                  }}
                >
                  {elocutionPillars.map((p, i) => (
                    <div 
                      key={i}
                      style={{
                        padding: '0.65rem 0.85rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.8125rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.2rem' }}>
                        {p.icon}
                        <span>{p.title}</span>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {p.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bottom */}
              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button 
                  to="/elocution" 
                  variant="elocution" 
                  style={{ flex: 1, justifyContent: 'center' }}
                  icon={<ArrowRight size={16} />}
                  className="btn-interactive"
                >
                  TRACK 01 DETAILS
                </Button>
                <Button 
                  to="/register?track=elocution" 
                  variant="secondary"
                  className="btn-interactive"
                >
                  Register
                </Button>
              </div>
            </div>
          )}

          {/* INNOVEX Track Card */}
          {(activeFilter === 'all' || activeFilter === 'innovex') && (
            <div 
              className="glass-card glow-emerald-box animate-fade-in"
              style={{
                position: 'relative',
                background: 'linear-gradient(180deg, rgba(8, 28, 20, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
                border: '1px solid var(--innovex-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span className="mono-tag" style={{ color: 'var(--innovex-accent)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="live-dot" /> TRACK 02 • TEAM / INDIVIDUAL
                  </span>
                  <span 
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: 'var(--innovex-accent)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      border: '1px solid var(--innovex-border)'
                    }}
                  >
                    7-STEP SPRINT
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(16, 185, 129, 0.2)',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(16, 185, 129, 0.25)'
                    }}
                  >
                    <Lightbulb size={28} color="var(--innovex-accent)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                      INNOVEX
                    </h3>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--innovex-accent)', fontWeight: 600 }}>
                      Design Thinking & Social Venture
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.65 }}>
                  A full-lifecycle innovation hackathon. Conduct stakeholder empathy audits, map root-cause systemic friction, construct interactive prototypes, and pitch viable unit-economic models.
                </p>

                {/* Pillars Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '0.75rem',
                    marginBottom: '2rem'
                  }}
                >
                  {innovexPillars.map((p, i) => (
                    <div 
                      key={i}
                      style={{
                        padding: '0.65rem 0.85rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.8125rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.2rem' }}>
                        {p.icon}
                        <span>{p.title}</span>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {p.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bottom */}
              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button 
                  to="/innovex" 
                  variant="innovex" 
                  style={{ flex: 1, justifyContent: 'center' }}
                  icon={<ArrowRight size={16} />}
                  className="btn-interactive"
                >
                  TRACK 02 DETAILS
                </Button>
                <Button 
                  to="/register?track=innovex" 
                  variant="secondary"
                  className="btn-interactive"
                >
                  Register
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Track Recommender Widget */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '1.75rem 2rem',
            background: 'rgba(13, 19, 31, 0.85)',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '580px' }}>
            <div 
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <HelpCircle size={22} color="var(--elocution-accent)" />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                Can participants register for both tracks?
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Yes! If schedule permits, ambitious delegates can participate in both Elocution and INNOVEX.
              </p>
            </div>
          </div>

          <Button to="/eligibility" variant="outline" size="sm" className="btn-interactive">
            View Eligibility Guidelines →
          </Button>
        </div>
      </div>
    </section>
  );
};
