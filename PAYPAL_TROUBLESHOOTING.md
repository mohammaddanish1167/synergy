# PayPal Payment Troubleshooting Guide

## Common Error: "PayPal order creation failed"

This error can occur for several reasons. Follow these steps to diagnose and fix:

### 1. Check Server Console Logs

When you try to make a PayPal payment, check your **server console** (where `node index.js` is running). You should see:

- `📥 PayPal create order request received:` - Request received
- `❌ PayPal credentials missing` - Credentials not set
- `❌ PayPal create order error:` - Actual error details

### 2. Verify PayPal Credentials

Make sure your `.env` file (in `server/` directory) has:

```env
PAYPAL_CLIENT_ID=your_client_id_here
PAYPAL_SECRET=your_secret_here
PAYPAL_MODE=sandbox
```

**Get Sandbox Credentials:**
1. Go to https://developer.paypal.com/dashboard/applications/sandbox
2. Create a new app or use existing one
3. Copy the **Client ID** and **Secret**

### 3. Common Issues and Solutions

#### Issue: "PayPal credentials missing"
**Solution:** 
- Check that `.env` file exists in `server/` directory
- Verify `PAYPAL_CLIENT_ID` and `PAYPAL_SECRET` are set
- **Restart the server** after adding credentials

#### Issue: "PayPal authentication failed"
**Solution:**
- Verify credentials are correct (no extra spaces)
- Make sure you're using **Sandbox** credentials (not Live)
- Check that `PAYPAL_MODE=sandbox` is set

#### Issue: "Network error connecting to PayPal"
**Solution:**
- Check your internet connection
- Verify PayPal API is accessible
- Try again after a few seconds

#### Issue: "Invalid amount" or "Invalid price amount"
**Solution:**
- Make sure the amount is a valid number
- Amount should be greater than 0
- Check that price is being passed correctly from frontend

### 4. Test PayPal Configuration

After setting credentials, restart your server and check:

1. **Server starts without errors**
2. **No warnings about missing PayPal credentials**
3. **When you click PayPal, you see logs in server console**

### 5. Debug Steps

1. **Check server console** for detailed error messages
2. **Check browser console** (F12) for frontend errors
3. **Verify `.env` file** is in the correct location (`server/.env`)
4. **Restart server** after any `.env` changes
5. **Check PayPal dashboard** to see if requests are being received

### 6. Expected Server Logs (Success)

When PayPal works correctly, you should see:

```
📥 PayPal create order request received: { amount: 99, hasCourse: true }
✅ PayPal order created successfully: 5O190127TN364715T
```

### 7. Still Not Working?

If you still see errors:

1. **Share the exact error message** from server console
2. **Check if PayPal SDK is installed**: `npm list @paypal/checkout-server-sdk`
3. **Verify Node.js version**: Should be 14+ for PayPal SDK
4. **Check PayPal account status**: Make sure sandbox account is active

### Quick Fix Checklist

- [ ] `.env` file exists in `server/` directory
- [ ] `PAYPAL_CLIENT_ID` is set and correct
- [ ] `PAYPAL_SECRET` is set and correct
- [ ] `PAYPAL_MODE=sandbox` is set
- [ ] Server has been restarted after adding credentials
- [ ] No typos in environment variable names
- [ ] PayPal SDK is installed: `npm install @paypal/checkout-server-sdk`

