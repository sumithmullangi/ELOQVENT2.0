import React from 'react';
import { MessageSquare, Lightbulb, Users, Globe, TrendingUp, Leaf, Sparkles } from 'lucide-react';
import { CORE_PILLARS } from '../../data/eventData';
import { SectionHeading } from '../common/SectionHeading';

export const KeyStats: React.FC = () => {
  const iconMap: Record<string, { icon: React.ReactNode; color: string; border: string }> = {
    MessageSquare: { icon: <MessageSquare size={22} color="var(--elocution-accent)" />, color: 'var(--elocution-accent)', border: 'rgba(56, 189, 248, 0.3)' },
    Lightbulb: { icon: <Lightbulb size={22} color="var(--innovex-accent)" />, color: 'var(--innovex-accent)', border: 'rgba(16, 185, 129, 0.3)' },
    Users: { icon: <Users size={22} color="#38bdf8" />, color: '#38bdf8', border: 'rgba(56, 189, 248, 0.3)' },
    Globe: { icon: <Globe size={22} color="#10b981" />, color: '#10b981', border: 'rgba(16, 185, 129, 0.3)' },
    TrendingUp: { icon: <TrendingUp size={22} color="#a855f7" />, color: '#a855f7', border: 'rgba(168, 85, 247, 0.3)' },
    Leaf: { icon: <Leaf size={22} color="#34d399" />, color: '#34d399', border: 'rgba(52, 211, 153, 0.3)' }
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
            const meta = iconMap[pillar.icon] || { icon: <Sparkles size={22} color="#38bdf8" />, color: '#38bdf8', border: 'var(--border-subtle)' };
            return (
              <div
                key={pillar.title}
                className="glass-card"
                style={{
                  background: 'linear-gradient(180deg, rgba(13, 19, 31, 0.7) 0%, rgba(7, 10, 16, 0.85) 100%)',
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
