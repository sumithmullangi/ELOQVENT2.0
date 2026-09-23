import React from 'react';
import { Trophy, Award, Gift, Star, ShieldCheck, Rocket, Zap, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const PrizeShowcase: React.FC = () => {
  const prizes = [
    {
      title: 'Grand Champions',
      badge: 'GRAND SYMPOSIUM TITLE',
      amount: '₹50,000+',
      color: '#f59e0b',
      border: 'rgba(245, 158, 11, 0.4)',
      bg: 'linear-gradient(180deg, rgba(245, 158, 11, 0.12) 0%, rgba(13, 19, 31, 0.9) 100%)',
      perks: ['National Winner Trophy', 'Direct Venture Incubation Support', 'Exclusive Founder Network Access', 'National Press Feature'],
      glowClass: 'glow-gold-box'
    },
    {
      title: 'Elocution Laureate',
      badge: 'TRACK 01 CHAMPION',
      amount: '₹25,000+',
      color: 'var(--elocution-accent)',
      border: 'rgba(56, 189, 248, 0.4)',
      bg: 'linear-gradient(180deg, rgba(56, 189, 248, 0.12) 0%, rgba(13, 19, 31, 0.9) 100%)',
      perks: ['Best Orator Gold Cup', 'Keynote Invitation at Tech Summit', 'Communication Fellowship Opportunity', 'Merit Certificate of Excellence'],
      glowClass: 'glow-cyan-box'
    },
    {
      title: 'INNOVEX Impact Winner',
      badge: 'TRACK 02 CHAMPION',
      amount: '₹25,000+',
      color: 'var(--innovex-accent)',
      border: 'rgba(16, 185, 129, 0.4)',
      bg: 'linear-gradient(180deg, rgba(16, 185, 129, 0.12) 0%, rgba(13, 19, 31, 0.9) 100%)',
      perks: ['Social Innovation Trophy', 'Investor Pitch Deck Fast-Track', 'Cloud & Prototype Credits', 'Social Impact Grant Access'],
      glowClass: 'glow-emerald-box'
    }
  ];

  const benefits = [
    { icon: <Award size={20} color="#f59e0b" />, title: 'Verified Credentials', desc: 'Officially recognized certificates with verifiable cryptographic delegate ID.' },
    { icon: <Rocket size={20} color="var(--elocution-accent)" />, title: 'Venture Mentorship', desc: 'Direct 1-on-1 feedback from seasoned entrepreneurs, jury members, and orators.' },
    { icon: <Zap size={20} color="var(--innovex-accent)" />, title: 'National Visibility', desc: 'Showcase your spoken articulation and prototypes before 500+ peers and academics.' },
    { icon: <ShieldCheck size={20} color="#a855f7" />, title: 'Zero Hidden Fees', desc: 'Transparent judging rubric with zero registration bias across all college tiers.' }
  ];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-surface-1)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badge="Rewards & Recognition"
          title="Grand Prize Pool & Laurels"
          subtitle="Compete for monumental recognition, cash endowments, incubation credits, and national prestige."
          alignment="center"
        />

        {/* 3 Prize Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}
        >
          {prizes.map((prize, idx) => (
            <div 
              key={idx}
              className={`glass-card ${prize.glowClass}`}
              style={{
                background: prize.bg,
                border: `1px solid ${prize.border}`,
                borderRadius: 'var(--radius-xl)',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: prize.color,
                      padding: '0.25rem 0.65rem',
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: 'var(--radius-full)',
                      border: `1px solid ${prize.border}`
                    }}
                  >
                    {prize.badge}
                  </span>

                  <Trophy size={24} color={prize.color} className="animate-float" />
                </div>

                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {prize.title}
                </h3>

                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: prize.color,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.03em'
                  }}
                >
                  {prize.amount}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {prize.perks.map((perk, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      <Sparkles size={14} color={prize.color} style={{ flexShrink: 0 }} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <Button 
                  to="/register" 
                  variant="outline" 
                  style={{ width: '100%', justifyContent: 'center', borderColor: prize.border, color: '#ffffff' }}
                >
                  Compete For This →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Value Pillars Ribbon */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {benefits.map((b, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                background: 'rgba(7, 10, 16, 0.65)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div style={{ marginBottom: '0.75rem' }}>
                {b.icon}
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                {b.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
