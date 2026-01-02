/**
 * QualifyLearn Backend Server
 * Handles Enquiries, Stripe & PayPal Payments
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

/* ===================== MIDDLEWARE ===================== */

// Parse JSON bodies
app.use(express.json());

// ✅ FIXED CORS (no silent network error)
app.use(cors({
  origin: (origin, callback) => {
    // Allow Postman, curl, server-to-server
    if (!origin) return callback(null, true);

    // Allow all localhost ports in dev
    if (process.env.NODE_ENV !== 'production' && origin.startsWith('http://localhost')) {
      return callback(null, true);
    }

    // Allow production frontend URLs
    const allowedOrigins = (process.env.FRONTEND_URL || '')
      .split(',')
      .map(o => o.trim());

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // ❗ Do NOT throw error (causes "Network error" in browser)
    return callback(null, false);
  },
  credentials: true,
}));

// ✅ Handle preflight requests
app.options('*', cors());

/* ===================== RATE LIMITING ===================== */

// Only limit non-payment routes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use('/api/enquiries', limiter);

/* ===================== DATA DIRECTORY ===================== */

const dataDir = join(__dirname, 'data');
fs.mkdir(dataDir, { recursive: true }).catch(console.error);

/* ===================== ROUTES ===================== */

app.use('/api/enquiries', enquiryRoutes);
app.use('/api/paypal', paypalRoutes);
app.use('/api/stripe', stripeRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'QualifyLearn API is running',
  });
});

/* ===================== START SERVER ===================== */

app.listen(PORT, () => {
  console.log(`🚀 QualifyLearn backend running on http://localhost:${PORT}`);
  console.log(`📁 Data directory: ${dataDir}`);
});
