/**
 * QualifyLearn Backend Server
 * Handles Enquiries, Stripe & PayPal Payments
 */

import './load-env.js';

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import fs from "fs/promises";

import { enquiryRoutes } from "./routes/enquiries.js";
import { paypalRoutes } from "./routes/paypal.js";
import { stripeRoutes } from "./routes/stripe.js";

const app = express();
const PORT = process.env.PORT || 3001;

/* ===================== MIDDLEWARE ===================== */

app.use(express.json());

// 📝 Request Logger for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Origin: ${req.get('origin')}`);
  next();
});

/* ===================== CORS (RENDER-PROOF) ===================== */

/**
 * ⚠️ DO NOT restrict origins in code for payment APIs
 * Security is handled by Stripe/PayPal keys
 */
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);

      // Allow all local development origins
      const isLocal = origin.includes('localhost') ||
        origin.includes('127.0.0.1') ||
        origin.includes('[::1]');

      const whitelist = [
        "https://qualifylearnnn.vercel.app",
        "https://qualifylearn.com",
        "https://www.qualifylearn.com"
      ];

      if (isLocal || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null, false); // Block other origins
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

/* ===================== RATE LIMITING ===================== */

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use("/api/enquiries", limiter);

/* ===================== DATA DIRECTORY ===================== */

const dataDir = join(__dirname, "data");
fs.mkdir(dataDir, { recursive: true }).catch(console.error);

/* ===================== ROUTES ===================== */

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/paypal", paypalRoutes);
app.use("/api/stripe", stripeRoutes);

/* ===================== HEALTH CHECK ===================== */

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "QualifyLearn API is running",
  });
});

/* ===================== ERROR HANDLER ===================== */

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

/* ===================== START SERVER ===================== */

app.listen(PORT, () => {
  console.log(`🚀 QualifyLearn backend running on PORT ${PORT}`);
});
