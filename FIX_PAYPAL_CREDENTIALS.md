# 🔧 Fix PayPal "invalid_client" Error

## Error Explanation

**Error:** `{"error":"invalid_client","error_description":"Client Authentication failed"}`

This means PayPal rejected your credentials. This is **NOT a code issue** - it's a **credentials configuration issue**.

## Common Causes

1. ❌ **Wrong credentials** - Using incorrect Client ID or Secret
2. ❌ **Mode mismatch** - Using Live credentials with Sandbox mode (or vice versa)
3. ❌ **Extra spaces** - Spaces before/after credentials in .env file
4. ❌ **Expired credentials** - Credentials were revoked or expired
5. ❌ **Wrong account** - Credentials from different PayPal account

## Step-by-Step Fix

### Step 1: Get Fresh PayPal Sandbox Credentials

1. Go to: **https://developer.paypal.com/dashboard/applications/sandbox**
2. Log in with your PayPal Developer account
3. Click on **"Create App"** (or use existing app)
4. Give it a name (e.g., "QualifyLearn Test")
5. Select **"Merchant"** as the app type
6. Click **"Create App"**
7. **Copy the Client ID and Secret** (click "Show" to reveal secret)

### Step 2: Update Your .env File

Open `qualifylearning/server/.env` file and update:

```env
PAYPAL_CLIENT_ID=your_client_id_here
PAYPAL_SECRET=your_secret_here
PAYPAL_MODE=sandbox
```

**⚠️ IMPORTANT:**
- Remove any spaces before/after the values
- Don't use quotes around the values
- Make sure `PAYPAL_MODE=sandbox` (not "live")
- The Client ID usually starts with something like `AeA1...`
- The Secret is longer, usually starts with `EL...` or similar

### Step 3: Verify .env File Location

Make sure your `.env` file is in:
```
qualifylearning/server/.env
```

**NOT** in:
- `qualifylearning/.env` (wrong location)
- `qualifylearning/src/.env` (wrong location)

### Step 4: Check for Common Mistakes

❌ **WRONG:**
```env
PAYPAL_CLIENT_ID = "AeA1..."  # Has spaces and quotes
PAYPAL_SECRET= "EL..."         # Has space after =
PAYPAL_MODE=live              # Wrong mode for sandbox credentials
```

✅ **CORRECT:**
```env
PAYPAL_CLIENT_ID=AeA1...
PAYPAL_SECRET=EL...
PAYPAL_MODE=sandbox
```

### Step 5: Restart Your Server

**CRITICAL:** After updating `.env`, you MUST restart your server:

```bash
# Stop server (Ctrl+C)
# Then restart:
cd qualifylearning/server
node index.js
```

### Step 6: Test Again

After restarting, try the PayPal payment again. You should see in server console:
```
🔐 Creating PayPal client with mode: sandbox
📥 PayPal create order request received: { amount: 99, hasCourse: true }
✅ PayPal order created successfully: ...
```

## Still Not Working?

### Check Server Console

Look for these messages:
- `❌ PayPal credentials missing` → .env file not found or variables not set
- `❌ Failed to create PayPal client:` → Credentials are invalid
- `❌ PayPal create order error: invalid_client` → Credentials don't match mode

### Verify Credentials Format

**Client ID format:**
- Usually starts with `AeA1`, `AeA2`, `AeA3`, etc.
- About 20-30 characters long
- Example: `AeA1QIZXiflr1_-0GdDN1N1p4NV1lYYyE6qOZrq3KzF`

**Secret format:**
- Usually starts with `EL`, `EF`, etc.
- About 80-100 characters long
- Example: `ELj...` (much longer)

### Test Credentials Manually

You can test if credentials work by checking PayPal dashboard:
1. Go to https://developer.paypal.com/dashboard/applications/sandbox
2. Your app should show as "Active"
3. If it shows errors, the credentials might be revoked

### Create New Credentials

If nothing works:
1. Delete the old app in PayPal dashboard
2. Create a **new** app
3. Get **fresh** credentials
4. Update `.env` with new credentials
5. Restart server

## Quick Checklist

- [ ] `.env` file is in `server/` directory
- [ ] `PAYPAL_CLIENT_ID` has no spaces or quotes
- [ ] `PAYPAL_SECRET` has no spaces or quotes  
- [ ] `PAYPAL_MODE=sandbox` (lowercase)
- [ ] Credentials are from **Sandbox** (not Live)
- [ ] Server has been **restarted** after updating .env
- [ ] No typos in variable names (PAYPAL_CLIENT_ID, not PAYPAL_CLIENTID)

## Need Help?

If you're still getting the error after following these steps:

1. **Check server console** - Share the exact error message
2. **Verify .env file** - Make sure it's formatted correctly
3. **Test credentials** - Try creating a new app in PayPal dashboard
4. **Check PayPal account** - Make sure your developer account is active

The error is **definitely** in the credentials, not the code. Once you have the correct credentials properly configured, it will work! ✅

