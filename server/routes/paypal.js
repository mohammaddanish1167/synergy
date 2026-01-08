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
   CAPTURE PAYPAL PAYMENT (GET — RETURN PAGE)
================================================== */
router.get('/capture', async (req, res) => {
  try {
    const orderId = req.query.token;
    if (!orderId) throw new Error('Missing order ID');

    const client = paypalClient();
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    await client.execute(request);

    return res.redirect(`${process.env.FRONTEND_URL}/pay?status=success`);
  } catch (err) {
    console.error('PayPal capture error:', err.message);
    return res.redirect(
      `${process.env.FRONTEND_URL}/pay?status=error&message=paypal_capture_failed`
    );
  }
});

export { router as paypalRoutes };
