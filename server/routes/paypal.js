import express from 'express';
import paypal from '@paypal/checkout-server-sdk';

const router = express.Router();

/* ================= PAYPAL CLIENT ================= */
function paypalClient() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_SECRET;
  const mode = process.env.PAYPAL_MODE || 'sandbox';

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials missing');
  }

  const environment =
    mode === 'live'
      ? new paypal.core.LiveEnvironment(clientId, clientSecret)
      : new paypal.core.SandboxEnvironment(clientId, clientSecret);

  return new paypal.core.PayPalHttpClient(environment);
}

/* =================================================
   START PAYPAL CHECKOUT (GET — NO CORS)
   URL example:
   /api/paypal/start?amount=99&course=Honorary%20Doctorate
================================================== */
router.get('/start', async (req, res) => {
  try {
    const amount = Number(req.query.amount || 99);
    const currency = 'USD';

    if (!amount || amount <= 0) {
      throw new Error('Invalid amount');
    }

    const frontendUrl = process.env.FRONTEND_URL;

    const client = paypalClient();
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');

    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount.toFixed(2),
          },
        },
      ],
      application_context: {
        return_url: `${frontendUrl}/pay?status=success`,
        cancel_url: `${frontendUrl}/pay?status=cancelled`,
      },
    });

    const order = await client.execute(request);
    const approveLink = order.result.links.find(l => l.rel === 'approve');

    // ✅ REDIRECT USER TO PAYPAL (NO JSON)
    return res.redirect(approveLink.href);
  } catch (err) {
    console.error('PayPal start error:', err.message);
    return res.redirect(
      `${process.env.FRONTEND_URL}/pay?status=error&message=paypal_failed`
    );
  }
});

/* =================================================
   CREATE PAYPAL ORDER (POST — JSON)
================================================== */
router.post('/create-order', async (req, res) => {
  try {
    const { amount = 99, course = 'QualifyLearn Course' } = req.body;

    const client = paypalClient();
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');

    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: Number(amount).toFixed(2),
          },
          description: course
        },
      ],
      application_context: {
        return_url: `${process.env.FRONTEND_URL}/payment?status=success`,
        cancel_url: `${process.env.FRONTEND_URL}/payment?status=cancelled`,
      },
    });

    const order = await client.execute(request);
    const approveUrl = order.result.links.find(l => l.rel === 'approve').href;

    return res.json({
      success: true,
      orderId: order.result.id,
      approveUrl
    });
  } catch (err) {
    console.error('PayPal create-order error:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to create PayPal order'
    });
  }
});

/* =================================================
   CAPTURE PAYPAL ORDER (POST — JSON)
================================================== */
router.post('/capture-order', async (req, res) => {
  try {
    const { orderId } = req.body;
    if (!orderId) throw new Error('Missing order ID');

    const client = paypalClient();
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    const capture = await client.execute(request);

    return res.json({
      success: true,
      details: capture.result
    });
  } catch (err) {
    console.error('PayPal capture-order error:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to capture PayPal order'
    });
  }
});

export { router as paypalRoutes };
