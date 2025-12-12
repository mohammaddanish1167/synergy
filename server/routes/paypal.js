/**
 * PayPal Routes
 * Handles PayPal order creation and capture for counselling payments
 */

import express from 'express';
import * as paypal from '@paypal/checkout-server-sdk';

const router = express.Router();

/**
 * Configure PayPal SDK environment
 * Uses sandbox mode by default (set via PAYPAL_MODE env var)
 */
function environment() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_SECRET;
  const mode = process.env.PAYPAL_MODE || 'sandbox';
  
  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials not configured. Check .env file.');
  }
  
  // Return appropriate environment based on mode
  if (mode === 'live') {
    return new paypal.core.LiveEnvironment(clientId, clientSecret);
  } else {
    return new paypal.core.SandboxEnvironment(clientId, clientSecret);
  }
}

/**
 * Create PayPal client instance
 */
function client() {
  return new paypal.core.PayPalHttpClient(environment());
}

/**
 * POST /api/paypal/create-order
 * Creates a PayPal order for counselling payment
 * Returns order ID to frontend for PayPal JS SDK
 */
router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency = 'USD' } = req.body;
    
    // Validate amount
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Valid amount is required'
      });
    }
    
    // Create PayPal order request
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: currency,
          value: amount.toString()
        },
        description: 'QualifyLearn Course Enrollment'
      }],
      application_context: {
        brand_name: 'QualifyLearn',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pay?status=success`,
        cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/pay?status=cancelled`
      }
    });
    
    // Execute request
    const order = await client().execute(request);
    
    // Extract approval link for redirect flow
    const approveLink = (order.result.links || []).find(l => l.rel === 'approve')?.href;

    // Return order ID and approval URL to frontend
    res.json({
      success: true,
      orderId: order.result.id,
      approveUrl: approveLink || null
    });
    
  } catch (error) {
    console.error('PayPal create order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create PayPal order',
      error: error.message
    });
  }
});

/**
 * POST /api/paypal/capture-order
 * Captures a PayPal order after user approves payment
 * This completes the payment transaction
 */
router.post('/capture-order', async (req, res) => {
  try {
    const { orderId } = req.body;
    
    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: 'Order ID is required'
      });
    }
    
    // Create capture request
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});
    
    // Execute capture
    const capture = await client().execute(request);
    
    // Check if capture was successful
    if (capture.result.status === 'COMPLETED') {
      res.json({
        success: true,
        message: 'Payment captured successfully',
        order: {
          id: capture.result.id,
          status: capture.result.status,
          amount: capture.result.purchase_units[0].payments.captures[0].amount.value,
          currency: capture.result.purchase_units[0].payments.captures[0].amount.currency_code
        }
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Payment capture failed',
        status: capture.result.status
      });
    }
    
  } catch (error) {
    console.error('PayPal capture order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to capture PayPal order',
      error: error.message
    });
  }
});

export { router as paypalRoutes };

