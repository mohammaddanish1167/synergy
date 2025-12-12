# QualifyLearn - Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
Create a `.env` file in the root directory:
```env
PORT=3001
PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_SECRET=your_paypal_secret_here
PAYPAL_MODE=sandbox
FRONTEND_URL=http://localhost:5173
```

**To get PayPal Sandbox credentials:**
1. Go to https://developer.paypal.com
2. Sign in or create an account
3. Navigate to Dashboard > My Apps & Credentials
4. Create a new app in Sandbox
5. Copy Client ID and Secret to `.env`

### 3. Start Backend Server
```bash
npm run server
```
Server runs on `http://localhost:3001`

### 4. Start Frontend (New Terminal)
```bash
npm run dev
```
Frontend runs on `http://localhost:5173`

### 5. Open Browser
Navigate to `http://localhost:5173`

## ✅ Test the Application

### Test Enquiry Form
1. Go to `/contact`
2. Fill and submit the form
3. Check console for success message
4. View at `/admin/enquiries` (password: `admin123`)

### Test PayPal Payment
1. Go to `/contact`
2. Scroll to "Pay for Career Counselling"
3. Click "Pay with PayPal"
4. Use PayPal sandbox test account
5. Complete payment flow

## 📁 Key Files

- **Frontend Entry:** `src/App.jsx`
- **Backend Entry:** `server/index.js`
- **Routes:** `src/pages/*.jsx`
- **Components:** `src/components/*.jsx`
- **Data:** `src/data/*.js`
- **API Routes:** `server/routes/*.js`

## 🐛 Common Issues

**Backend won't start:**
- Check if port 3001 is free
- Verify `.env` file exists

**Frontend can't connect:**
- Ensure backend is running
- Check CORS settings in `server/index.js`

**PayPal errors:**
- Verify credentials in `.env`
- Check PayPal mode is `sandbox`

## 📚 Full Documentation

See `README.md` for complete documentation.

