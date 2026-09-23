import { Router, Request, Response } from 'express';
import { db } from '../db';

export const contactRouter = Router();

// POST /api/contact — Submit an inquiry
contactRouter.post('/', (req: Request, res: Response): any => {
  try {
    const { fullName, email, category, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    const savedInquiry = db.createInquiry(
      fullName.trim(),
      email.trim(),
      category || 'General Inquiry',
      message.trim()
    );

    return res.status(201).json({
      success: true,
      message: 'Inquiry received. The secretariat will respond to your email.',
      inquiryId: savedInquiry.id
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to record inquiry.' });
  }
});

// GET /api/contact — List inquiries (admin)
contactRouter.get('/', (_req: Request, res: Response) => {
  const inquiries = db.getAllInquiries();
  res.json({ success: true, inquiries });
});
