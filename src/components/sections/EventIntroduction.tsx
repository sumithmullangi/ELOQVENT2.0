import React from 'react';
import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { Sparkles, MessageSquare, Lightbulb, Target, TrendingUp, Users } from 'lucide-react';

export const EventIntroduction: React.FC = () => {
  const coreCompetencies = [
    { num: '01', title: 'Communication', desc: 'Rhetorical clarity, persuasive storytelling, and debate dialectics.' },
    { num: '02', title: 'Analytical Thinking', desc: 'First-principles problem framing, logic deconstruction, and nuance analysis.' },
    { num: '03', title: 'Problem-Solving', desc: 'Root-cause discovery, symptom differentiation, and systemic mapping.' },
    { num: '04', title: 'Innovation', desc: 'Empathy research, user-centric prototyping, and frugal engineering.' },
    { num: '05', title: 'Entrepreneurship', desc: 'Lean social business modelling, unit economics, and scalable impact pathways.' }
  ];

  const integrationDisciplines = [
    'Public Speaking',
    'Design Thinking',
    'Human-Centred Innovation',
    'Product Development',
    'Business Model Development',
    'Social Impact',
    'Sustainable Development'
  ];

  return (
    <section 
      id="about-event"
      aria-labelledby="intro-heading"
      className="section-py"
      style={{
        backgroundColor: 'var(--bg-surface-1)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative'
      }}
    >
      <Container size="lg">
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}
        >
          {/* Editorial Top Statement */}
          <div style={{ maxWidth: '920px' }}>
            <Eyebrow variant="neutral" style={{ marginBottom: '1rem' }}>
              What Is ELOQVENT?
            </Eyebrow>

            <h2 
              id="intro-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.5vw + 0.5rem, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                color: '#ffffff',
                marginBottom: '1.5rem'
              }}
            >
              A Two-Day Multidisciplinary Symposium for Future Leaders & Innovators.
            </h2>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw + 0.5rem, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '820px',
                margin: 0
              }}
            >
              <strong>ELOQVENT 2K26</strong> is designed to bridge the gap between persuasive verbal articulation and practical technological problem-solving. 
              Over two intensive days, participants engage in rigorous oratorical challenges and human-centred design sprints to address pressing societal needs.
            </p>
          </div>

          {/* Hairline Divider with Central Concept Ribbon */}
          <div 
            style={{
              padding: '1.25rem 1.75rem',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#ffffff', fontWeight: 600, fontSize: '0.875rem' }}>
              <Sparkles size={16} color="var(--elocution-accent)" aria-hidden="true" />
              <span>CORE SYNERGY:</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>
              <span style={{ color: 'var(--elocution-accent)', fontWeight: 700 }}>COMMUNICATION</span>
              <span style={{ color: 'var(--text-muted)' }}>+</span>
              <span style={{ color: 'var(--innovex-accent)', fontWeight: 700 }}>INNOVATION</span>
              <span style={{ color: 'var(--text-muted)' }}>+</span>
              <span style={{ color: '#34d399', fontWeight: 700 }}>SOCIAL IMPACT</span>
            </div>
          </div>

          {/* Numbered Core Competencies — Editorial Asymmetric Layout */}
          <div>
            <div style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.06em' }}>
              Core Competencies Developed Across the Symposium:
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {coreCompetencies.map((comp) => (
                <div 
                  key={comp.num}
                  style={{
                    padding: '1.5rem',
                    background: 'var(--bg-surface-2)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '140px'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--elocution-accent)', marginBottom: '0.5rem' }}>
                    {comp.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.35rem' }}>
                      {comp.title}
                    </h3>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {comp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multidisciplinary Integration Tags */}
          <div 
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}
          >
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Cross-Disciplinary Integration:
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {integrationDisciplines.map((disc, i) => (
                <span 
                  key={i}
                  style={{
                    fontSize: '0.8125rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500
                  }}
                >
                  {disc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
