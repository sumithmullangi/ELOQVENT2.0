import React from 'react';
import { MessageSquare, Lightbulb, Users, Globe, TrendingUp, Leaf, Sparkles } from 'lucide-react';
import { CORE_PILLARS } from '../../data/eventData';
import { SectionHeading } from '../common/SectionHeading';

export const KeyStats: React.FC = () => {
  const iconMap: Record<string, { icon: React.ReactNode; color: string; border: string }> = {
    MessageSquare: { icon: <MessageSquare size={22} color="var(--pro-blue)" />, color: 'var(--pro-blue)', border: 'rgba(41, 151, 255, 0.35)' },
    Lightbulb: { icon: <Lightbulb size={22} color="var(--desert-titanium)" />, color: 'var(--desert-titanium)', border: 'rgba(212, 178, 140, 0.35)' },
    Users: { icon: <Users size={22} color="#f5f5f7" />, color: '#f5f5f7', border: 'rgba(255, 255, 255, 0.25)' },
    Globe: { icon: <Globe size={22} color="var(--desert-titanium)" />, color: 'var(--desert-titanium)', border: 'rgba(212, 178, 140, 0.35)' },
    TrendingUp: { icon: <TrendingUp size={22} color="var(--natural-titanium)" />, color: 'var(--natural-titanium)', border: 'rgba(185, 180, 173, 0.35)' },
    Leaf: { icon: <Leaf size={22} color="var(--desert-titanium)" />, color: 'var(--desert-titanium)', border: 'rgba(212, 178, 140, 0.35)' }
  };

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-canvas)', position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badge="Guiding Ethos"
          title="The Six Pillars of ELOQVENT 2K26"
          subtitle="A holistic platform designed to transform raw intellectual curiosity into articulate leadership and field-tested social ventures."
          alignment="center"
        />

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {CORE_PILLARS.map((pillar, index) => {
            const meta = iconMap[pillar.icon] || { icon: <Sparkles size={22} color="var(--pro-blue)" />, color: 'var(--pro-blue)', border: 'var(--border-subtle)' };
            return (
              <div
                key={pillar.title}
                className="glass-card"
                style={{
                  background: 'linear-gradient(180deg, rgba(22, 22, 24, 0.72) 0%, rgba(12, 12, 14, 0.88) 100%)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${meta.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  className="animate-float"
                >
                  {meta.icon}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>
                    {pillar.title}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    0{index + 1}
                  </span>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
