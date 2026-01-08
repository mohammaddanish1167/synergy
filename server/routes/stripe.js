/**
 * Stripe Routes
 * Creates Checkout Sessions for course enrollment
 */

import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY missing');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

/**
 * POST /api/stripe/create-checkout-session
 */
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { course, price = 99, currency = 'usd', name, email, phone, country } = req.body;

    const amount = Number(price);
    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid price amount',
      });
    }

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],

      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: course || 'QualifyLearn Course Enrollment',
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],

      customer_email: email || undefined,

      metadata: {
        course: course || '',
        name: name || '',
        phone: phone || '',
        country: country || '',
      },

      success_url: `${frontendUrl}/pay?status=success`,
      cancel_url: `${frontendUrl}/pay?status=cancelled`,
    });

    return res.json({
      success: true,
      url: session.url,
    });
  } catch (error) {
    console.error('❌ Stripe error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create Stripe checkout session',
    });
  }
});

export { router as stripeRoutes };
