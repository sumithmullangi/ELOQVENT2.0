import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { FAQAccordion } from '../components/faq/FAQAccordion';
import { Button } from '../components/common/Button';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const FAQPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        badge="Clarifications & Information"
        title="Frequently Asked Questions"
        subtitle="Find answers to common inquiries regarding competition tracks, deliverables, team compositions, adjudication criteria, and on-site logistics."
        breadcrumb="FAQ"
      />

      <section className="section-py" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <FAQAccordion />

            {/* Need More Assistance Box */}
            <div 
              className="surface-card"
              style={{
                marginTop: '3.5rem',
                background: 'var(--bg-surface-1)',
                border: '1px solid var(--border-subtle)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MessageSquare size={22} color="var(--elocution-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                    Have a question not addressed here?
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Our organizing committee and track coordinators are available to assist.
                  </p>
                </div>
              </div>

              <Button to="/contact" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                Contact Organizing Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
