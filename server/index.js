/**
 * QualifyLearn Backend Server
 * Express server handling enquiries and PayPal payment processing
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import { enquiryRoutes } from './routes/enquiries.js';
import { paypalRoutes } from './routes/paypal.js';
import { stripeRoutes } from './routes/stripe.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware: Parse JSON bodies
app.use(express.json());

// Middleware: CORS configuration to allow frontend requests
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting: Prevent abuse by limiting requests per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Ensure data directory exists for storing enquiries
const dataDir = join(__dirname, 'data');
fs.mkdir(dataDir, { recursive: true }).catch(console.error);

// API Routes
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/paypal', paypalRoutes);
app.use('/api/stripe', stripeRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'QualifyLearn API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 QualifyLearn backend server running on http://localhost:${PORT}`);
  console.log(`📝 Enquiries will be stored in: ${dataDir}/enquiries.json`);
});

