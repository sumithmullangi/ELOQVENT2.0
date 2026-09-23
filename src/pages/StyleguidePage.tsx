import React from 'react';
import { 
  Button, 
  Container, 
  SectionHeading, 
  Eyebrow, 
  Badge, 
  Divider, 
  Placeholder 
} from '../components/ui';
import { Sparkles, ArrowRight, Mic, Lightbulb, CheckCircle2, Shield } from 'lucide-react';

export const StyleguidePage: React.FC = () => {
  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <Container size="lg">
        {/* Header */}
        <SectionHeading
          eyebrow="Internal Design System Specification"
          eyebrowVariant="neutral"
          title="ELOQVENT 2K26 UI Primitives & Design Tokens"
          subtitle="Reference showcase of atomic components, typography scales, buttons, badges, dividers, and accessible placeholder tags."
          headingLevel="h1"
        />

        <Divider spacing="lg" />

        {/* 1. BUTTONS */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionHeading
            eyebrow="Interactive Element"
            eyebrowVariant="elocution"
            title="1. Button Primitive"
            subtitle="Accessible buttons with multiple variants, sizes, icon slots, and support for native button, React Router Link, and external anchors."
            headingLevel="h2"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Variants */}
            <div className="surface-card" style={{ padding: '1.5rem', background: 'var(--bg-surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Variants
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <Button variant="primary" icon={<ArrowRight size={16} />}>Primary CTA</Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="elocution" icon={<Mic size={15} />}>Elocution Accent</Button>
                <Button variant="innovex" icon={<Lightbulb size={15} />}>Innovex Accent</Button>
                <Button variant="disabled">Disabled State</Button>
              </div>
            </div>

            {/* Sizes */}
            <div className="surface-card" style={{ padding: '1.5rem', background: 'var(--bg-surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Sizes
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <Button size="sm" variant="primary">Small (sm)</Button>
                <Button size="md" variant="primary">Medium (md - Default)</Button>
                <Button size="lg" variant="primary" icon={<ArrowRight size={18} />}>Large (lg - Hero / CTAs)</Button>
              </div>
            </div>
          </div>
        </section>

        <Divider spacing="lg" />

        {/* 2. EYEBROWS & BADGES */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionHeading
            eyebrow="Metadata & Categorization"
            eyebrowVariant="innovex"
            title="2. Eyebrow & Badge Primitives"
            subtitle="Micro-typography tokens for track labels, category indicators, phase markers, and status indicators."
            headingLevel="h2"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Eyebrows */}
            <div className="surface-card" style={{ padding: '1.5rem', background: 'var(--bg-surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Eyebrows
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                <Eyebrow variant="neutral">Neutral Category</Eyebrow>
                <Eyebrow variant="elocution" icon={<Mic size={12} />}>Elocution Track</Eyebrow>
                <Eyebrow variant="innovex" icon={<Lightbulb size={12} />}>Innovex Track</Eyebrow>
                <Eyebrow variant="amber">Status Pending</Eyebrow>
                <Eyebrow variant="purple" icon={<Sparkles size={12} />}>Featured Phase</Eyebrow>
              </div>
            </div>

            {/* Badges */}
            <div className="surface-card" style={{ padding: '1.5rem', background: 'var(--bg-surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Badges & Pills
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                <Badge variant="neutral">Neutral Pill</Badge>
                <Badge variant="elocution" icon={<Mic size={12} />}>Elocution</Badge>
                <Badge variant="innovex" icon={<Lightbulb size={12} />}>Innovex</Badge>
                <Badge variant="status-pending">TBD</Badge>
                <Badge variant="status-official" icon={<Shield size={12} />}>PRD Verified</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </div>
        </section>

        <Divider spacing="lg" />

        {/* 3. PLACEHOLDER TAGS */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionHeading
            eyebrow="Strict PRD Compliance"
            eyebrowVariant="amber"
            title="3. Unconfirmed Data Placeholders"
            subtitle="Standardized indicators for unconfirmed event details to guarantee zero fabricated data across the platform."
            headingLevel="h2"
          />

          <div className="surface-card" style={{ padding: '1.5rem', background: 'var(--bg-surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Placeholder label="[DATE TO BE PROVIDED]" />
              <Placeholder label="[VENUE TO BE PROVIDED]" />
              <Placeholder label="[ORGANIZER NAME]" />
              <Placeholder label="[EMAIL TO BE PROVIDED]" />
              <Placeholder label="[PHONE TO BE PROVIDED]" />
              <Placeholder label="[SCORING BREAKDOWN TO BE PROVIDED]" />
            </div>
          </div>
        </section>

        <Divider spacing="lg" />

        {/* 4. DIVIDERS */}
        <section style={{ marginBottom: '4rem' }}>
          <SectionHeading
            eyebrow="Editorial Layout Structure"
            eyebrowVariant="purple"
            title="4. Divider Primitive"
            subtitle="Subtle hairline and gradient separators for section transitions and editorial spacing."
            headingLevel="h2"
          />

          <div className="surface-card" style={{ padding: '1.5rem', background: 'var(--bg-surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Subtle Divider:</p>
            <Divider variant="subtle" spacing="sm" />

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Dual Gradient Accent Divider:</p>
            <Divider variant="gradient-dual" spacing="sm" />

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Elocution Gradient Divider:</p>
            <Divider variant="gradient-elocution" spacing="sm" />

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Innovex Gradient Divider:</p>
            <Divider variant="gradient-innovex" spacing="sm" />
          </div>
        </section>
      </Container>
    </div>
  );
};
