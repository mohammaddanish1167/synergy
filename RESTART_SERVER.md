# ⚠️ IMPORTANT: Restart Your Server

## The Error "Invalid or missing program" Means Your Server is Running Old Code

The Stripe route has been updated, but **you must restart your backend server** for the changes to take effect.

## How to Restart:

1. **Stop the current server:**
   - Find the terminal/command prompt where your server is running
   - Press `Ctrl + C` to stop it

2. **Start the server again:**
   ```bash
   cd qualifylearning/server
   node index.js
   ```
   
   Or if you're using npm scripts:
   ```bash
   npm run dev
   ```

3. **Verify it's working:**
   - You should see: `🚀 QualifyLearn backend running on http://localhost:3001`
   - Try the Stripe payment again

## If You Still See the Error:

1. Make sure you saved all files
2. Check that `server/routes/stripe.js` has the updated code (should accept `course`, not `program`)
3. Clear your browser cache
4. Check the server console for any error messages

## Quick Check:

After restarting, you should see console logs like:
- `📥 Stripe checkout request received:` when you try to pay
- `✅ Creating Stripe session with:` when processing
- `✅ Stripe session created successfully:` when done

If you don't see these logs, the server is still running old code.

