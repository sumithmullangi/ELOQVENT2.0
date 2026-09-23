import { Router, Request, Response } from 'express';
import { db } from '../db';

export const registrationRouter = Router();

// POST /api/register — Submit a new registration
registrationRouter.post('/', (req: Request, res: Response): any => {
  try {
    const {
      track,
      participantType,
      teamName,
      primaryParticipant,
      teamMembers = [],
      selectedTheme,
      problemStatementIdea,
      howDidYouHear,
      agreeToCodeOfConduct
    } = req.body;

    // Basic Validations
    if (!track || !['elocution', 'innovex', 'both'].includes(track)) {
      return res.status(400).json({ success: false, message: 'Valid track selection is required.' });
    }

    if (!primaryParticipant || !primaryParticipant.fullName || !primaryParticipant.email || !primaryParticipant.phone || !primaryParticipant.college) {
      return res.status(400).json({ success: false, message: 'Primary delegate details (Name, Email, Phone, College) are required.' });
    }

    if (track === 'innovex' && participantType === 'team' && (!teamName || teamName.trim() === '')) {
      return res.status(400).json({ success: false, message: 'Team name is required for team entries.' });
    }

    if (!agreeToCodeOfConduct) {
      return res.status(400).json({ success: false, message: 'You must agree to the Code of Conduct to register.' });
    }

    // Check for duplicate registration
    const isDuplicate = db.checkEmailExists(primaryParticipant.email, track);
    if (isDuplicate) {
      return res.status(409).json({
        success: false,
        message: `A registration for ${primaryParticipant.email} has already been recorded for this track. Use your reference ID to view your pass.`
      });
    }

    // Generate unique reference ID
    const randomHash = Math.random().toString(36).substring(2, 7).toUpperCase();
    const referenceId = `ELQ-2026-${randomHash}`;

    // Save record to persistent database
    const savedRecord = db.createRegistration({
      referenceId,
      track,
      participantType: participantType || 'individual',
      teamName: teamName || undefined,
      primaryParticipant: {
        fullName: primaryParticipant.fullName.trim(),
        email: primaryParticipant.email.trim(),
        phone: primaryParticipant.phone.trim(),
        college: primaryParticipant.college.trim(),
        degree: primaryParticipant.degree || 'B.Tech / B.E.',
        yearOfStudy: primaryParticipant.yearOfStudy || '3rd Year',
        studentId: primaryParticipant.studentId || undefined
      },
      teamMembers: Array.isArray(teamMembers) ? teamMembers : [],
      selectedTheme,
      problemStatementIdea,
      howDidYouHear: howDidYouHear || 'Website',
    });

    return res.status(201).json({
      success: true,
      referenceId: savedRecord.referenceId,
      timestamp: savedRecord.createdAt,
      status: 'REGISTERED',
      track: savedRecord.track.toUpperCase(),
      participantName: savedRecord.primaryParticipant.fullName,
      teamName: savedRecord.teamName,
      email: savedRecord.primaryParticipant.email,
      notice: 'Registration successfully stored in database. Save your reference code for on-site accreditation.'
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error while processing registration.' });
  }
});

// GET /api/register/:refId — Look up registration pass by reference ID
registrationRouter.get('/:refId', (req: Request, res: Response): any => {
  const { refId } = req.params;
  const record = db.getRegistrationByRef(refId);

  if (!record) {
    return res.status(404).json({ success: false, message: `Registration with reference ID '${refId}' was not found.` });
  }

  return res.json({
    success: true,
    data: record
  });
});

// GET /api/stats — Real-time registration statistics
registrationRouter.get('/meta/stats', (_req: Request, res: Response) => {
  const stats = db.getStats();
  res.json({ success: true, stats });
});
