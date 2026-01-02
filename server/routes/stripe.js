/**
 * Stripe Routes
 * Creates Checkout Sessions for course enrollment
 */

import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

// Initialize Stripe
let stripe;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
  });
} else {
  console.warn('⚠️ STRIPE_SECRET_KEY missing in environment variables');
}

/**
 * CREATE STRIPE CHECKOUT SESSION
 * POST /api/stripe/create-checkout-session
 */
router.post('/create-checkout-session', async (req, res) => {
  try {
    console.log('📥 Stripe checkout request received:', {
      course: req.body?.course,
      price: req.body?.price,
      currency: req.body?.currency,
      hasName: !!req.body?.name,
      hasEmail: !!req.body?.email,
    });

    const { course, price = 99, currency = 'usd', name, email, phone, country } = req.body || {};

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('❌ STRIPE_SECRET_KEY is missing');
      return res.status(500).json({
        success: false,
        message: 'Stripe is not configured (missing STRIPE_SECRET_KEY)',
      });
    }

    // Validate price
    const numericPrice = Number(price);
    if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
      console.error('❌ Invalid price:', price);
      return res.status(400).json({
        success: false,
        message: 'Invalid price amount',
      });
    }

    console.log('✅ Creating Stripe session with:', {
      course: course || 'QualifyLearn Course Enrollment',
      amount: numericPrice,
      currency: currency.toLowerCase(),
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],

      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: course || 'QualifyLearn Course Enrollment',
              description: `Enrollment for ${course || 'course'}`,
            },
            // Stripe needs amount in cents (smallest currency unit)
            unit_amount: Math.round(numericPrice * 100),
          },
          quantity: 1,
        },
      ],

      customer_email: email || undefined,

      metadata: {
        course: course || 'QualifyLearn Course Enrollment',
        userName: name || '',
        phone: phone || '',
        country: country || '',
      },

      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pay?status=success`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pay?status=cancelled`,
    });

    console.log('✅ Stripe session created successfully:', session.id);

    res.json({
      success: true,
      url: session.url,
    });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create Stripe checkout session',
      error: error.message,
    });
  }
});

export { router as stripeRoutes };
