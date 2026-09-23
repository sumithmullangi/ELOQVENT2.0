import React, { useState, useRef } from 'react';
import { 
  Check, 
  ArrowRight, 
  Mic, 
  Lightbulb, 
  Users, 
  User, 
  AlertCircle, 
  Sparkles, 
  Plus, 
  Trash2, 
  ShieldCheck, 
  Info,
  Clock,
  RotateCcw,
  CheckCircle2,
  Mail,
  Phone
} from 'lucide-react';
import { RegistrationFormData, RegistrationTeamMember } from '../../types';
import { submitRegistration, RegistrationResult } from '../../lib/registration';
import { Placeholder } from '../ui/Placeholder';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { INNOVEX_THEMES } from '../../data/innovexProcess';

export interface RegistrationFormProps {
  onStatusChange?: (result: RegistrationResult | null) => void;
}

const initialFormState: RegistrationFormData = {
  track: 'innovex',
  participantType: 'individual',
  fullName: '',
  email: '',
  phone: '',
  institution: '',
  department: 'Engineering',
  yearOfStudy: '1st Year Undergraduate',
  teamName: '',
  teamMembers: [],
  selectedTheme: 'healthcare',
  problemStatementIdea: '',
  optionalMessage: '',
  agreeToCodeOfConduct: false
};

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onStatusChange }) => {
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<RegistrationResult | null>(null);

  // Field refs for accessible focus management
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const institutionRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLSelectElement>(null);
  const yearOfStudyRef = useRef<HTMLSelectElement>(null);
  const teamNameRef = useRef<HTMLInputElement>(null);
  const codeOfConductRef = useRef<HTMLInputElement>(null);

  const validateField = (field: string, value: any): string | null => {
    switch (field) {
      case 'fullName':
        if (!value || typeof value !== 'string' || !value.trim()) {
          return 'Please enter your full name.';
        }
        return null;
      case 'email':
        if (!value || typeof value !== 'string' || !value.trim()) {
          return 'Please enter your email address.';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        return null;
      case 'phone':
        if (!value || typeof value !== 'string' || !value.trim()) {
          return 'Please enter your contact phone number.';
        }
        if (value.trim().length < 8) {
          return 'Please enter a valid phone number (at least 8 digits).';
        }
        return null;
      case 'institution':
        if (!value || typeof value !== 'string' || !value.trim()) {
          return 'Please enter your college or university name.';
        }
        return null;
      case 'department':
        if (!value || typeof value !== 'string' || !value.trim()) {
          return 'Please select your department / discipline.';
        }
        return null;
      case 'yearOfStudy':
        if (!value || typeof value !== 'string' || !value.trim()) {
          return 'Please select your current year of study.';
        }
        return null;
      case 'teamName':
        if (formData.participantType === 'team' && (!value || typeof value !== 'string' || !value.trim())) {
          return 'Please enter a team name for your team entry.';
        }
        return null;
      case 'agreeToCodeOfConduct':
        if (!value) {
          return 'You must review and agree to the Code of Conduct and integrity rules.';
        }
        return null;
      default:
        return null;
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, (formData as any)[field]);
    setErrors((prev) => {
      const next = { ...prev };
      if (error) {
        next[field] = error;
      } else {
        delete next[field];
      }
      return next;
    });
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};
    const fieldsToValidate = [
      'fullName',
      'email',
      'phone',
      'institution',
      'department',
      'yearOfStudy',
      'agreeToCodeOfConduct'
    ];

    if (formData.participantType === 'team') {
      fieldsToValidate.push('teamName');
    }

    fieldsToValidate.forEach((f) => {
      const err = validateField(f, (formData as any)[f]);
      if (err) newErrors[f] = err;
    });

    // Validate team members if any added
    if (formData.participantType === 'team' && formData.teamMembers) {
      formData.teamMembers.forEach((m, idx) => {
        if (!m.fullName.trim()) {
          newErrors[`teamMember_${idx}_name`] = `Please enter Member ${idx + 2}'s full name.`;
        }
        if (!m.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email.trim())) {
          newErrors[`teamMember_${idx}_email`] = `Please enter a valid email for Member ${idx + 2}.`;
        }
      });
    }

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      institution: true,
      department: true,
      yearOfStudy: true,
      teamName: true,
      agreeToCodeOfConduct: true
    });

    // Focus first invalid field
    if (Object.keys(newErrors).length > 0) {
      if (newErrors.fullName) fullNameRef.current?.focus();
      else if (newErrors.email) emailRef.current?.focus();
      else if (newErrors.phone) phoneRef.current?.focus();
      else if (newErrors.institution) institutionRef.current?.focus();
      else if (newErrors.department) departmentRef.current?.focus();
      else if (newErrors.yearOfStudy) yearOfStudyRef.current?.focus();
      else if (newErrors.teamName) teamNameRef.current?.focus();
      else if (newErrors.agreeToCodeOfConduct) codeOfConductRef.current?.focus();
      return false;
    }

    return true;
  };

  const handleAddTeamMember = () => {
    const currentMembers = formData.teamMembers || [];
    if (currentMembers.length < 3) {
      const newMember: RegistrationTeamMember = {
        id: `member-${Date.now()}`,
        fullName: '',
        email: '',
        phone: '',
        institution: formData.institution || ''
      };
      setFormData({
        ...formData,
        teamMembers: [...currentMembers, newMember]
      });
    }
  };

  const handleRemoveTeamMember = (id: string) => {
    const currentMembers = formData.teamMembers || [];
    setFormData({
      ...formData,
      teamMembers: currentMembers.filter((m) => m.id !== id)
    });
  };

  const handleUpdateTeamMember = (id: string, field: keyof RegistrationTeamMember, value: string) => {
    const currentMembers = formData.teamMembers || [];
    setFormData({
      ...formData,
      teamMembers: currentMembers.map((m) => m.id === id ? { ...m, [field]: value } : m)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitRegistration(formData);
      setSubmissionResult(result);
      if (onStatusChange) onStatusChange(result);
    } catch (err: any) {
      const errorResult: RegistrationResult = {
        status: 'ERROR',
        message: 'An unexpected client error occurred. Please try again.',
        timestamp: new Date().toISOString(),
        data: formData
      };
      setSubmissionResult(errorResult);
      if (onStatusChange) onStatusChange(errorResult);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmissionResult(null);
    setFormData(initialFormState);
    setErrors({});
    setTouched({});
    if (onStatusChange) onStatusChange(null);
  };

  // Result / Not Configured State View
  if (submissionResult) {
    const isNotConfigured = submissionResult.status === 'NOT_CONFIGURED';
    const isSuccess = submissionResult.status === 'SUCCESS';

    return (
      <div 
        className="surface-card"
        style={{
          background: 'var(--bg-surface-1)',
          border: isNotConfigured 
            ? '1px solid var(--amber-border)' 
            : isSuccess 
            ? '1px solid var(--innovex-border)' 
            : '1px solid rgba(244, 63, 94, 0.3)',
          borderRadius: 'var(--radius-2xl)',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          maxWidth: '840px',
          margin: '0 auto',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
        }}
        role="region"
        aria-label="Registration Submission Result"
      >
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          {/* Status Icon */}
          <div 
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: isNotConfigured ? 'var(--amber-bg)' : isSuccess ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}
          >
            {isNotConfigured && <Clock size={28} color="var(--accent-amber)" aria-hidden="true" />}
            {isSuccess && <CheckCircle2 size={28} color="var(--innovex-accent)" aria-hidden="true" />}
            {!isNotConfigured && !isSuccess && <AlertCircle size={28} color="#f43f5e" aria-hidden="true" />}
          </div>

          <span 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              color: isNotConfigured ? 'var(--accent-amber)' : isSuccess ? 'var(--innovex-accent)' : '#f43f5e',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            {isNotConfigured ? 'GATEWAY STATUS: PENDING ACTIVATION' : isSuccess ? 'SUBMISSION CONFIRMED' : 'SUBMISSION ERROR'}
          </span>

          <h3 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: '1rem 0 0.75rem 0'
            }}
          >
            {isNotConfigured ? 'Registration Gateway Pending Activation' : isSuccess ? 'Registration Received' : 'Submission Encountered an Issue'}
          </h3>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
            {submissionResult.message}
          </p>

          {/* Validated Details Summary */}
          {submissionResult.data && (
            <div 
              style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem',
                textAlign: 'left',
                marginBottom: '2rem'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Client-Validated Form Data:
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.85rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Selected Track:</span>
                  <div style={{ color: submissionResult.data.track === 'elocution' ? 'var(--elocution-accent)' : 'var(--innovex-accent)', fontWeight: 700 }}>
                    {submissionResult.data.track.toUpperCase()}
                  </div>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Delegate Name:</span>
                  <div style={{ color: '#ffffff', fontWeight: 600 }}>{submissionResult.data.fullName}</div>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Email:</span>
                  <div style={{ color: 'var(--text-primary)' }}>{submissionResult.data.email}</div>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Institution:</span>
                  <div style={{ color: 'var(--text-primary)' }}>{submissionResult.data.institution}</div>
                </div>
              </div>
            </div>
          )}

          {/* Organizer Help Contact */}
          <div 
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-surface-2)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              fontSize: '0.8125rem',
              color: 'var(--text-secondary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Mail size={14} color="var(--elocution-accent)" />
              <span>Organizer Email:</span>
              <Placeholder label="[EMAIL TO BE PROVIDED]" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={14} color="var(--innovex-accent)" />
              <span>Helpline:</span>
              <Placeholder label="[PHONE TO BE PROVIDED]" />
            </div>
          </div>

          <Button onClick={handleResetForm} variant="secondary" size="md" icon={<RotateCcw size={16} />}>
            Edit Registration Data
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      noValidate
      className="surface-card"
      style={{
        background: 'var(--bg-surface-1)',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'clamp(1.75rem, 4vw, 3rem)',
        maxWidth: '840px',
        margin: '0 auto',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
      }}
      aria-label="ELOQVENT 2K26 Registration Form"
    >
      {/* Legend Notice */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1.25rem',
          marginBottom: '2rem'
        }}
      >
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: 'var(--accent-rose)' }}>*</span> Required field
        </span>

        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          OFFICIAL ENTRY PORTAL
        </span>
      </div>

      {/* ==========================================
          SECTION 1: TRACK SELECTION & FORMAT
         ========================================== */}
      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
        <legend style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
          1. Competitive Track & Entry Format <span style={{ color: 'var(--accent-rose)' }}>*</span>
        </legend>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Select the track and participation format matching your competitive focus.
        </p>

        {/* Track Selector Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}
          role="radiogroup"
          aria-label="Select Track"
        >
          {/* Elocution Option */}
          <label 
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-xl)',
              background: formData.track === 'elocution' ? 'linear-gradient(135deg, rgba(13, 22, 38, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)' : 'var(--bg-surface-2)',
              border: `2px solid ${formData.track === 'elocution' ? 'var(--elocution-accent)' : 'var(--border-subtle)'}`,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.75rem',
              transition: 'all var(--transition-fast)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mic size={20} color="var(--elocution-accent)" aria-hidden="true" />
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>ELOCUTION</span>
                </div>
                <input
                  type="radio"
                  name="track"
                  value="elocution"
                  checked={formData.track === 'elocution'}
                  onChange={() => setFormData({ ...formData, track: 'elocution', participantType: 'individual', teamMembers: [] })}
                  style={{ accentColor: 'var(--elocution-accent)', width: '18px', height: '18px' }}
                />
              </div>
              <div style={{ fontSize: '0.775rem', color: 'var(--elocution-accent)', fontWeight: 600, marginBottom: '0.35rem' }}>
                Communication & Expression
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                Individual oratorical competition: Spontaneous expression, structured debate, and final keynote defense.
              </p>
            </div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              Format: Strictly Individual Entry
            </span>
          </label>

          {/* Innovex Option */}
          <label 
            style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-xl)',
              background: formData.track === 'innovex' ? 'linear-gradient(135deg, rgba(8, 28, 20, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)' : 'var(--bg-surface-2)',
              border: `2px solid ${formData.track === 'innovex' ? 'var(--innovex-accent)' : 'var(--border-subtle)'}`,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.75rem',
              transition: 'all var(--transition-fast)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lightbulb size={20} color="var(--innovex-accent)" aria-hidden="true" />
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>INNOVEX</span>
                </div>
                <input
                  type="radio"
                  name="track"
                  value="innovex"
                  checked={formData.track === 'innovex'}
                  onChange={() => setFormData({ ...formData, track: 'innovex' })}
                  style={{ accentColor: 'var(--innovex-accent)', width: '18px', height: '18px' }}
                />
              </div>
              <div style={{ fontSize: '0.775rem', color: 'var(--innovex-accent)', fontWeight: 600, marginBottom: '0.35rem' }}>
                Human-Centred Innovation & Social Impact
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                7-step innovation challenge: Empathy discovery, root cause deconstruction, prototyping, and sustainable business modeling.
              </p>
            </div>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              Format: Individual or Team Entry
            </span>
          </label>
        </div>

        {/* Format Selector (For Innovex) */}
        {formData.track === 'innovex' && (
          <div 
            style={{
              padding: '1.25rem',
              background: 'var(--bg-surface-2)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              Participation Format:
            </label>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                <input
                  type="radio"
                  name="participantType"
                  value="individual"
                  checked={formData.participantType === 'individual'}
                  onChange={() => setFormData({ ...formData, participantType: 'individual', teamMembers: [] })}
                  style={{ accentColor: 'var(--innovex-accent)' }}
                />
                <User size={15} color="var(--text-muted)" />
                <span>Individual Innovator Entry</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                <input
                  type="radio"
                  name="participantType"
                  value="team"
                  checked={formData.participantType === 'team'}
                  onChange={() => setFormData({ ...formData, participantType: 'team' })}
                  style={{ accentColor: 'var(--innovex-accent)' }}
                />
                <Users size={15} color="var(--innovex-accent)" />
                <span>Collaborative Team Entry</span>
              </label>
            </div>
          </div>
        )}
      </fieldset>

      {/* ==========================================
          SECTION 2: PRIMARY DELEGATE INFORMATION
         ========================================== */}
      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
        <legend style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
          2. Primary Delegate / Team Lead Information
        </legend>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Provide verified collegiate contact details. Official communication will be directed to this email.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {/* Full Name */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="fullName" className="form-label">
              Full Name <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <input
              ref={fullNameRef}
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`form-input ${errors.fullName ? 'error' : ''}`}
              placeholder="e.g., Alex Johnson"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              onBlur={() => handleBlur('fullName')}
            />
            {errors.fullName && (
              <span id="fullName-error" className="form-error" role="alert">
                {errors.fullName}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="email" className="form-label">
              Email Address <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="e.g., delegate@university.edu"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onBlur={() => handleBlur('email')}
            />
            {errors.email && (
              <span id="email-error" className="form-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="phone" className="form-label">
              Contact Phone Number <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <input
              ref={phoneRef}
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="e.g., +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onBlur={() => handleBlur('phone')}
            />
            {errors.phone && (
              <span id="phone-error" className="form-error" role="alert">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Institution Name */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="institution" className="form-label">
              Institution / College Name <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <input
              ref={institutionRef}
              id="institution"
              name="institution"
              type="text"
              autoComplete="organization"
              required
              aria-required="true"
              aria-invalid={!!errors.institution}
              aria-describedby={errors.institution ? "institution-error" : undefined}
              className={`form-input ${errors.institution ? 'error' : ''}`}
              placeholder="e.g., Institute of Technology"
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              onBlur={() => handleBlur('institution')}
            />
            {errors.institution && (
              <span id="institution-error" className="form-error" role="alert">
                {errors.institution}
              </span>
            )}
          </div>

          {/* Department / Discipline */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="department" className="form-label">
              Department / Discipline <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <select
              ref={departmentRef}
              id="department"
              name="department"
              required
              aria-required="true"
              className="form-select"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              onBlur={() => handleBlur('department')}
            >
              <option value="Engineering">Engineering (B.Tech / B.E. all branches)</option>
              <option value="Technology">Technology & Computer Applications (B.Sc / BCA / Computing)</option>
              <option value="Management">Management (BBA / Management Studies)</option>
              <option value="Other Eligible Discipline">Other Eligible Undergraduate Program</option>
            </select>
          </div>

          {/* Year of Study */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="yearOfStudy" className="form-label">
              Year of Study <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <select
              ref={yearOfStudyRef}
              id="yearOfStudy"
              name="yearOfStudy"
              required
              aria-required="true"
              className="form-select"
              value={formData.yearOfStudy}
              onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
              onBlur={() => handleBlur('yearOfStudy')}
            >
              <option value="1st Year Undergraduate">1st Year Undergraduate (UG 1st Year)</option>
              <option value="2nd Year Undergraduate">2nd Year Undergraduate (UG 2nd Year)</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* ==========================================
          SECTION 3: CONDITIONAL TEAM DETAILS
         ========================================== */}
      {formData.track === 'innovex' && formData.participantType === 'team' && (
        <fieldset style={{ border: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <legend style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: 0, fontFamily: 'var(--font-display)' }}>
              3. Team Information & Roster
            </legend>
            <Placeholder label="TEAM SIZE: [TO BE PROVIDED]" />
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Individual or team participation is supported. Register your team name and add participating delegates.
          </p>

          {/* Team Name */}
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="teamName" className="form-label">
              Team Name / Alias <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <input
              ref={teamNameRef}
              id="teamName"
              name="teamName"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.teamName}
              aria-describedby={errors.teamName ? "teamName-error" : undefined}
              className={`form-input ${errors.teamName ? 'error' : ''}`}
              placeholder="e.g., Nexus Innovators"
              value={formData.teamName || ''}
              onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
              onBlur={() => handleBlur('teamName')}
            />
            {errors.teamName && (
              <span id="teamName-error" className="form-error" role="alert">
                {errors.teamName}
              </span>
            )}
          </div>

          {/* Additional Team Members */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                ADDITIONAL TEAM MEMBERS ({formData.teamMembers?.length || 0})
              </span>

              {(formData.teamMembers?.length || 0) < 3 && (
                <Button type="button" onClick={handleAddTeamMember} variant="secondary" size="sm" icon={<Plus size={14} />}>
                  Add Member
                </Button>
              )}
            </div>

            {formData.teamMembers && formData.teamMembers.map((member, idx) => (
              <div 
                key={member.id}
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-surface-2)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--innovex-accent)', fontWeight: 700 }}>
                    MEMBER 0{idx + 2}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTeamMember(member.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--accent-rose)',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <Trash2 size={13} /> Remove
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                  <div>
                    <label className="form-label" style={{ fontSize: '0.775rem' }}>Full Name <span style={{ color: 'var(--accent-rose)' }}>*</span></label>
                    <input
                      type="text"
                      className={`form-input ${errors[`teamMember_${idx}_name`] ? 'error' : ''}`}
                      placeholder="Member name"
                      value={member.fullName}
                      onChange={(e) => handleUpdateTeamMember(member.id, 'fullName', e.target.value)}
                    />
                    {errors[`teamMember_${idx}_name`] && (
                      <span className="form-error">{errors[`teamMember_${idx}_name`]}</span>
                    )}
                  </div>

                  <div>
                    <label className="form-label" style={{ fontSize: '0.775rem' }}>Email Address <span style={{ color: 'var(--accent-rose)' }}>*</span></label>
                    <input
                      type="email"
                      className={`form-input ${errors[`teamMember_${idx}_email`] ? 'error' : ''}`}
                      placeholder="member@university.edu"
                      value={member.email}
                      onChange={(e) => handleUpdateTeamMember(member.id, 'email', e.target.value)}
                    />
                    {errors[`teamMember_${idx}_email`] && (
                      <span className="form-error">{errors[`teamMember_${idx}_email`]}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      )}

      {/* ==========================================
          SECTION 4: THEMATIC ALIGNMENT & TOPIC DRAFT
         ========================================== */}
      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
        <legend style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
          {formData.track === 'innovex' && formData.participantType === 'team' ? '4. Thematic Focus & Preliminary Topic' : '3. Thematic Focus & Preliminary Topic'}
        </legend>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          Select an aligned domain and optionally provide initial thoughts on your intended problem or speech direction.
        </p>

        {formData.track === 'innovex' && (
          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="selectedTheme" className="form-label">
              Suggested Challenge Theme
            </label>
            <select
              id="selectedTheme"
              name="selectedTheme"
              className="form-select"
              value={formData.selectedTheme}
              onChange={(e) => setFormData({ ...formData, selectedTheme: e.target.value })}
            >
              {INNOVEX_THEMES.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.title} ({theme.tag})
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="problemStatementIdea" className="form-label">
            Preliminary Problem Statement or Speech Focus (Optional)
          </label>
          <textarea
            id="problemStatementIdea"
            name="problemStatementIdea"
            rows={3}
            className="form-textarea"
            placeholder="Briefly describe the challenge or oration topic you plan to explore (Teams are also free to refine this during Phase 1 orientation)..."
            value={formData.problemStatementIdea || ''}
            onChange={(e) => setFormData({ ...formData, problemStatementIdea: e.target.value })}
          />
        </div>
      </fieldset>

      {/* ==========================================
          SECTION 5: CODE OF CONDUCT & SUBMIT
         ========================================== */}
      <div 
        style={{
          padding: '1.25rem',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-surface-2)',
          border: `1px solid ${errors.agreeToCodeOfConduct ? 'var(--accent-rose)' : 'var(--border-subtle)'}`,
          marginBottom: '2rem'
        }}
      >
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
          <input
            ref={codeOfConductRef}
            id="agreeToCodeOfConduct"
            name="agreeToCodeOfConduct"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={!!errors.agreeToCodeOfConduct}
            aria-describedby={errors.agreeToCodeOfConduct ? "codeOfConduct-error" : undefined}
            checked={formData.agreeToCodeOfConduct}
            onChange={(e) => setFormData({ ...formData, agreeToCodeOfConduct: e.target.checked })}
            style={{ marginTop: '3px', width: '18px', height: '18px', accentColor: 'var(--innovex-accent)' }}
          />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            I certify that the information provided is accurate and represent that I am an eligible undergraduate student. I agree to abide by the <strong>Code of Conduct, intellectual integrity guidelines</strong>, and collegiate event rules of ELOQVENT 2K26. <span style={{ color: 'var(--accent-rose)' }}>*</span>
          </span>
        </label>
        {errors.agreeToCodeOfConduct && (
          <span id="codeOfConduct-error" className="form-error" style={{ marginLeft: '2.2rem', marginTop: '0.4rem', display: 'block' }} role="alert">
            {errors.agreeToCodeOfConduct}
          </span>
        )}
      </div>

      {/* Submit Button Area */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          icon={isSubmitting ? undefined : <ArrowRight size={18} aria-hidden="true" />}
          style={{ width: '100%', maxWidth: '360px' }}
        >
          {isSubmitting ? 'Validating & Submitting...' : 'SUBMIT REGISTRATION'}
        </Button>

        <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', textAlign: 'center' }}>
          Submission is validated by the client and processed via the secure registration gateway.
        </div>
      </div>
    </form>
  );
};
