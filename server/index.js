/**
 * QualifyLearn Backend Server
 * Handles Enquiries, Stripe & PayPal Payments
 */

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs/promises";

import { enquiryRoutes } from "./routes/enquiries.js";
import { paypalRoutes } from "./routes/paypal.js";
import { stripeRoutes } from "./routes/stripe.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

/* ===================== MIDDLEWARE ===================== */

// Parse JSON bodies
app.use(express.json());

/* ===================== CORS (FIXED & SAFE) ===================== */

// ✅ Explicit allowlist (NO silent failures)
const allowedOrigins = [
  // Local development
  "http://localhost:5173",
  "http://localhost:3000",

  // ✅ LIVE FRONTEND (CRITICAL)
  "https://qualifylearn.com",
  "https://www.qualifylearn.com",

  // Render preview (optional)
  "https://qualifylearnnn.onrender.com",
];

// ✅ CORS middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server, Postman, PayPal webhooks
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // ❌ Explicitly block (prevents silent browser failures)
      return callback(new Error("CORS not allowed"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle preflight requests (CRITICAL for PayPal/Stripe)
app.options("*", cors());

/* ===================== RATE LIMITING ===================== */

// Limit only non-payment routes
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

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "QualifyLearn API is running",
  });
});

/* ===================== ERROR HANDLER ===================== */

// ✅ Proper CORS error response (important)
app.use((err, req, res, next) => {
  if (err.message === "CORS not allowed") {
    return res.status(403).json({
      success: false,
      message: "CORS blocked this request",
    });
  }

  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

/* ===================== START SERVER ===================== */

app.listen(PORT, () => {
  console.log(`🚀 QualifyLearn backend running on PORT ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`📁 Data directory: ${dataDir}`);
});
