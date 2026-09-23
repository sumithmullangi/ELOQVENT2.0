import React, { useState } from 'react';
import { ChevronDown, Search, Sparkles, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../../data/eventData';
import { FAQItem } from '../../types';

export const FAQAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-5']);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Elocution', 'Innovex', 'Registration & Eligibility', 'Evaluation & Awards'];

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      {/* Search & Category Filter Controls */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}
      >
        {/* Search Input */}
        <div style={{ position: 'relative' }}>
          <Search 
            size={18} 
            color="var(--text-muted)" 
            style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} 
          />
          <input
            type="text"
            className="form-input"
            placeholder="Search FAQs by keywords (e.g., deliverables, eligibility, team size, themes)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '2.75rem' }}
          />
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                background: activeCategory === cat ? 'var(--text-primary)' : 'var(--bg-surface-2)',
                color: activeCategory === cat ? 'var(--text-inverse)' : 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      {filteredFAQs.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredFAQs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="surface-card"
                style={{
                  background: 'var(--bg-surface-1)',
                  border: `1px solid ${isOpen ? 'var(--border-medium)' : 'var(--border-subtle)'}`,
                  padding: 0,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: isOpen ? 'var(--bg-surface-2)' : 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    transition: 'background var(--transition-fast)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--innovex-accent)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '0.2rem 0.45rem',
                        borderRadius: '4px'
                      }}
                    >
                      {faq.category}
                    </span>
                    <span style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', fontFamily: 'var(--font-body)' }}>
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    size={18}
                    color="var(--text-secondary)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-base)',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div 
                    style={{ 
                      padding: '1.25rem 1.5rem', 
                      fontSize: '0.9375rem', 
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border-subtle)',
                      background: 'rgba(7, 10, 16, 0.4)'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div 
          style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            background: 'var(--bg-surface-1)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed var(--border-subtle)',
            color: 'var(--text-muted)'
          }}
        >
          <HelpCircle size={32} style={{ margin: '0 auto 0.75rem auto', color: 'var(--text-muted)' }} />
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>No matching questions found</h4>
          <p style={{ fontSize: '0.875rem' }}>Try refining your search keyword or selecting a different category.</p>
        </div>
      )}
    </div>
  );
};
