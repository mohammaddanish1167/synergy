import express from 'express';
import paypal from '@paypal/checkout-server-sdk';

const router = express.Router();

/**
 * PayPal Environment
 */
function paypalClient() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials missing');
  }

  const environment =
    process.env.PAYPAL_MODE === 'live'
      ? new paypal.core.LiveEnvironment(clientId, clientSecret)
      : new paypal.core.SandboxEnvironment(clientId, clientSecret);

  return new paypal.core.PayPalHttpClient(environment);
}

/**
 * Create Order
 */
router.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: amount || '10.00'
          }
        }
      ]
    });

    const client = paypalClient();
    const order = await client.execute(request);

    res.json({ id: order.result.id });
  } catch (error) {
    console.error('PayPal create order error:', error);
    res.status(500).json({ error: 'PayPal order creation failed' });
  }
});

/**
 * Capture Order
 */
router.post('/capture-order', async (req, res) => {
  try {
    const { orderID } = req.body;

    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    const client = paypalClient();
    const capture = await client.execute(request);

    res.json(capture.result);
  } catch (error) {
    console.error('PayPal capture error:', error);
    res.status(500).json({ error: 'PayPal capture failed' });
  }
});

export { router as paypalRoutes };
