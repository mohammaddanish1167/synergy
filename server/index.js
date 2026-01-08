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

app.use(express.json());

/* ===================== CORS (RENDER-PROOF) ===================== */

/**
 * ⚠️ DO NOT restrict origins in code for payment APIs
 * Security is handled by Stripe/PayPal keys
 */
app.use(
  cors({
    origin: true, // 🔥 reflect request origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false, // IMPORTANT: must be false
  })
);

// ✅ Explicit preflight handler
app.options("*", cors());

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
