import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import paypal from '@paypal/checkout-server-sdk';

const router = express.Router();

/**
 * PayPal Environment
 */
function paypalClient() {
  const clientId = process.env.PAYPAL_CLIENT_ID?.trim();
  const clientSecret = process.env.PAYPAL_SECRET?.trim();
  const mode = process.env.PAYPAL_MODE?.trim() || 'sandbox';

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials missing');
  }

  if (clientId.length < 10 || clientSecret.length < 10) {
    throw new Error('PayPal credentials appear to be invalid (too short)');
  }

  console.log('🔐 Creating PayPal client with mode:', mode);
  console.log('🔑 Client ID starts with:', clientId.substring(0, 5) + '...');

  try {
    const environment =
      mode === 'live'
        ? new paypal.core.LiveEnvironment(clientId, clientSecret)
        : new paypal.core.SandboxEnvironment(clientId, clientSecret);

    return new paypal.core.PayPalHttpClient(environment);
  } catch (error) {
    console.error('❌ PayPal client creation failed:', error.message);
    throw new Error('PayPal client creation failed - check credentials');
  }
}

/**
 * Create Order
 */
router.post('/create-order', async (req, res) => {
  try {
    console.log('📥 PayPal create order request received:', req.body);

    if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_SECRET) {
      console.error('❌ PayPal credentials missing in environment');
      return res.status(500).json({
        success: false,
        message: 'PayPal is not configured (missing PAYPAL_CLIENT_ID or PAYPAL_SECRET)',
      });
    }

    const { amount, currency = 'USD' } = req.body;
    const numericAmount = Number(amount);

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      console.error('❌ Invalid amount:', amount);
      return res.status(400).json({
        success: false,
        message: 'Invalid amount',
      });
    }

    console.log('🔄 Creating PayPal client...');
    const client = paypalClient();
    console.log('✅ PayPal client created successfully');

    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: numericAmount.toFixed(2),
          },
        },
      ],
      application_context: {
        return_url: `${frontendUrl}/pay?status=success`,
        cancel_url: `${frontendUrl}/pay?status=cancelled`,
      },
    });

    console.log('📤 Executing PayPal order request...');
    const order = await client.execute(request);
    console.log('✅ PayPal order created successfully');

    const approveLink = order.result.links.find(l => l.rel === 'approve');

    res.json({
      success: true,
      id: order.result.id,
      approveUrl: approveLink.href,
      orderId: order.result.id,
    });
  } catch (error) {
    console.error('❌ PayPal create order error:', error.message);
    console.error('❌ Full error:', error);
    res.status(500).json({
      success: false,
      message: 'PayPal authentication failed - Invalid credentials',
      error: error.message,
    });
  }
});

/**
 * Capture Order
 */
router.post('/capture-order', async (req, res) => {
  try {
    const { orderId } = req.body;
    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: 'Order ID is required',
      });
    }

    const client = paypalClient();
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    const capture = await client.execute(request);

    res.json({
      success: true,
      data: capture.result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'PayPal capture failed',
      error: error.message,
    });
  }
});

export { router as paypalRoutes };
