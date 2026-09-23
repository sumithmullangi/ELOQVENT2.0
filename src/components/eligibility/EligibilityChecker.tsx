import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const EligibilityChecker: React.FC = () => {
  const [enrollment, setEnrollment] = useState<'yes' | 'no' | ''>('');
  const [degree, setDegree] = useState<string>('ug');
  const [trackChoice, setTrackChoice] = useState<string>('innovex');
  const [teamSize, setTeamSize] = useState<number>(3);
  const [hasId, setHasId] = useState<'yes' | 'no' | ''>('');

  const isComplete = enrollment !== '' && hasId !== '';
  const isEligible = enrollment === 'yes' && hasId === 'yes';

  return (
    <div 
      className="surface-card"
      style={{
        background: 'linear-gradient(180deg, var(--bg-surface-2) 0%, var(--bg-surface-1) 100%)',
        border: '1px solid var(--border-medium)',
        padding: '2rem',
        borderRadius: 'var(--radius-xl)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div 
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(56, 189, 248, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Sparkles size={20} color="var(--elocution-accent)" />
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
            Interactive Eligibility Verification
          </h3>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Verify in 30 seconds whether you and your team qualify for ELOQVENT 2K26
          </div>
        </div>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '1.5rem'
        }}
      >
        {/* Question 1: Active Collegiate Enrollment */}
        <div>
          <label className="form-label">
            1. Are you actively enrolled in a collegiate program? <span className="required">*</span>
          </label>
          <select 
            className="form-select" 
            value={enrollment} 
            onChange={(e) => setEnrollment(e.target.value as any)}
          >
            <option value="">Select Enrollment Status...</option>
            <option value="yes">Yes — Active Undergraduate / Postgraduate Student</option>
            <option value="no">No — Working Professional / Non-Student</option>
          </select>
        </div>

        {/* Question 2: Valid Student ID */}
        <div>
          <label className="form-label">
            2. Can you present a valid Student ID Card? <span className="required">*</span>
          </label>
          <select 
            className="form-select" 
            value={hasId} 
            onChange={(e) => setHasId(e.target.value as any)}
          >
            <option value="">Select ID availability...</option>
            <option value="yes">Yes — Have valid ID Card / Authorization Letter</option>
            <option value="no">No — Cannot produce institutional verification</option>
          </select>
        </div>

        {/* Question 3: Track Interest */}
        <div>
          <label className="form-label">
            3. Intended Competition Track
          </label>
          <select 
            className="form-select" 
            value={trackChoice} 
            onChange={(e) => setTrackChoice(e.target.value)}
          >
            <option value="elocution">ELOCUTION (Individual Oratorical Track)</option>
            <option value="innovex">INNOVEX (Team / Individual Innovation Track)</option>
            <option value="both">Both (Subject to schedule concurrency)</option>
          </select>
        </div>

        {/* Question 4: Team Size (For Innovex) */}
        {trackChoice !== 'elocution' && (
          <div>
            <label className="form-label">
              4. Expected Team Members (1 to 4)
            </label>
            <select 
              className="form-select" 
              value={teamSize} 
              onChange={(e) => setTeamSize(Number(e.target.value))}
            >
              <option value="1">1 Member (Solo Innovator)</option>
              <option value="2">2 Members</option>
              <option value="3">3 Members (Recommended)</option>
              <option value="4">4 Members (Maximum permitted)</option>
            </select>
          </div>
        )}
      </div>

      {/* Result Status Box */}
      {isComplete ? (
        <div 
          style={{
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-lg)',
            background: isEligible ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
            border: `1px solid ${isEligible ? 'var(--innovex-border)' : 'rgba(244, 63, 94, 0.3)'}`,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {isEligible ? (
              <CheckCircle2 size={28} color="var(--innovex-accent)" />
            ) : (
              <XCircle size={28} color="#f43f5e" />
            )}
            <div>
              <div style={{ fontWeight: 700, color: isEligible ? '#ffffff' : '#f43f5e', fontSize: '1rem' }}>
                {isEligible ? 'You are Fully Eligible to Compete in ELOQVENT 2K26!' : 'Eligibility Verification Incomplete'}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                {isEligible 
                  ? trackChoice === 'elocution'
                    ? 'Individual entry confirmed. Prepare for Stage 1 expression development.'
                    : `Team entry verified for ${teamSize} member(s). Ensure all members possess valid institutional IDs.`
                  : 'Active collegiate enrollment and verifiable institutional identification are mandatory requirements.'}
              </div>
            </div>
          </div>

          {isEligible && (
            <Button to="/register" variant="primary" size="sm" icon={<ArrowRight size={14} />}>
              Proceed to Registration
            </Button>
          )}
        </div>
      ) : (
        <div 
          style={{
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-canvas)',
            border: '1px dashed var(--border-subtle)',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <HelpCircle size={16} />
          <span>Please answer the required fields above to verify your eligibility status.</span>
        </div>
      )}
    </div>
  );
};
