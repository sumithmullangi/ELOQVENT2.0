import { Router, Request, Response } from 'express';
import { db } from '../db';

export const adminRouter = Router();

// GET /api/admin/registrations — List all registrations with search and track filters
adminRouter.get('/registrations', (req: Request, res: Response) => {
  const { search, track } = req.query;
  const registrations = db.getAllRegistrations(
    typeof search === 'string' ? search : undefined,
    typeof track === 'string' ? track : undefined
  );

  res.json({
    success: true,
    count: registrations.length,
    registrations
  });
});

// GET /api/admin/export-csv — Download full delegate roster as CSV
adminRouter.get('/export-csv', (_req: Request, res: Response) => {
  const csvContent = db.exportToCSV();
  const filename = `eloqvent_2k26_roster_${new Date().toISOString().split('T')[0]}.csv`;

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.status(200).send(csvContent);
});

// GET /api/admin/inquiries — List contact inquiries
adminRouter.get('/inquiries', (_req: Request, res: Response) => {
  const inquiries = db.getAllInquiries();
  res.json({ success: true, count: inquiries.length, inquiries });
});
