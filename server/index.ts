import express from 'express';
import cors from 'cors';
import { registrationRouter } from './routes/registration';
import { contactRouter } from './routes/contact';
import { adminRouter } from './routes/admin';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow all origins for dev/production access
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api/register', registrationRouter);
app.use('/api/contact', contactRouter);
app.use('/api/admin', adminRouter);

// Root API Information Route
app.get('/', (_req, res) => {
  res.json({
    message: '🚀 ELOQVENT 2K26 Backend Server is Running!',
    adminPortalUI: 'http://localhost:4173/admin (or http://localhost:5173/admin)',
    endpoints: {
      health: '/api/health',
      registrations: '/api/admin/registrations',
      exportCsv: '/api/admin/export-csv',
      stats: '/api/register/meta/stats'
    }
  });
});

// Health Check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    symposium: 'ELOQVENT 2K26 API Backend',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=============================================`);
  console.log(`🚀 ELOQVENT 2K26 Backend Server Active`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`📊 Health: http://localhost:${PORT}/api/health`);
  console.log(`📝 Registration Endpoint: http://localhost:${PORT}/api/register`);
  console.log(`📥 CSV Export: http://localhost:${PORT}/api/admin/export-csv`);
  console.log(`=============================================`);
});
