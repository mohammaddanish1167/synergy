/**
 * Stripe Routes
 * Creates Checkout Sessions for course enrollment
 */

import express from 'express';

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  try {
    const { course, price = 99, currency = 'usd' } = req.body || {};

    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({ success: false, message: 'Stripe is not configured (missing STRIPE_SECRET_KEY)' });
    }

    const stripe = (await import('stripe')).default(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: course || 'QualifyLearn Course Enrollment',
            },
            unit_amount: Math.round(Number(price) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pay?status=success`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pay?status=cancelled`,
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({ success: false, message: 'Failed to create Stripe session', error: error.message });
  }
});

export { router as stripeRoutes };
