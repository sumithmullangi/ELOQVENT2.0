import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface FAQ {
  q: string;
  a: string;
  category: string;
}

export const HomeFAQTeaser: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      q: 'Who is eligible to participate in ELOQVENT 2K26?',
      a: 'All currently enrolled undergraduate and postgraduate students from recognized colleges, universities, and polytechnics across India are eligible. Valid student ID card or institutional Bonafide certificate is required upon registration verification.',
      category: 'Eligibility'
    },
    {
      q: 'What is the format and duration of the Elocution vs INNOVEX tracks?',
      a: 'Elocution is an individual track comprising 6 stages spanning keynote articulation, extempore crisis response, and dialectic debate. INNOVEX is a team or individual innovation hackathon following a 7-step human-centred design sprint leading to a live prototype & business pitch.',
      category: 'Format'
    },
    {
      q: 'Can a single student or team participate in both tracks?',
      a: 'Yes, dual registration is supported as long as stage timings on the schedule do not overlap. Many delegates participate in both to test their rhetorical and technical innovation skills.',
      category: 'Participation'
    },
    {
      q: 'Are certificates and trophies awarded to all participants?',
      a: 'Every delegate who completes their designated track phases will receive an official Certificate of Participation with verifiable credentials. Winners and runners-up receive national trophies, cash grants, and mentorship accolades.',
      category: 'Awards'
    }
  ];

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--bg-canvas)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Got Questions? We Have Answers."
          subtitle="Everything you need to know before stepping onto the national stage."
          alignment="center"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  background: isOpen ? 'rgba(20, 28, 44, 0.85)' : 'rgba(13, 19, 31, 0.65)',
                  border: `1px solid ${isOpen ? 'rgba(56, 189, 248, 0.4)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-base)'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span 
                      style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(56, 189, 248, 0.12)',
                        color: 'var(--elocution-accent)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700
                      }}
                    >
                      {faq.category}
                    </span>
                    <span>{faq.q}</span>
                  </div>

                  <ChevronDown 
                    size={18} 
                    color={isOpen ? 'var(--elocution-accent)' : 'var(--text-muted)'} 
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-base)',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div 
                    className="animate-fade-in"
                    style={{
                      padding: '0 1.5rem 1.25rem 1.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '1rem'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button to="/faq" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
            View All Comprehensive FAQs
          </Button>
        </div>
      </div>
    </section>
  );
};
