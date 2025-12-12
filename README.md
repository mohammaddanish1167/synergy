# QualifyLearn

A professional education and admissions consulting website built with React (Vite) and Node.js/Express. This project provides a complete platform for students seeking guidance on courses, study abroad programs, PhD admissions, and career counselling.

## 🚀 Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **React Router 6.22.0** - Client-side routing
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Animation library

### Backend
- **Node.js** (v18+ recommended)
- **Express 4.18.2** - Web framework
- **PayPal Checkout Server SDK 1.0.3** - Payment processing
- **express-rate-limit 7.1.5** - Rate limiting middleware
- **CORS 2.8.5** - Cross-origin resource sharing

## 📋 Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher (comes with Node.js)
- PayPal Developer Account (for sandbox testing)

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd qualifylearning
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and add your PayPal sandbox credentials:
     ```
     PORT=3001
     PAYPAL_CLIENT_ID=your_paypal_client_id_here
     PAYPAL_SECRET=your_paypal_secret_here
     PAYPAL_MODE=sandbox
     FRONTEND_URL=http://localhost:5173
     ```

4. **Get PayPal Sandbox Credentials:**
   - Go to [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/applications/sandbox)
   - Create a new app or use existing sandbox app
   - Copy the Client ID and Secret to your `.env` file

## 🏃 Running the Application

### Development Mode

You need to run both the frontend and backend servers:

1. **Start the backend server:**
   ```bash
   npm run server
   ```
   Or with auto-reload (requires nodemon):
   ```bash
   npm run server:dev
   ```
   Backend will run on `http://localhost:3001`

2. **Start the frontend dev server (in a new terminal):**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Production Build

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
qualifylearning/
├── server/                 # Backend server
│   ├── index.js           # Main server file
│   ├── routes/            # API routes
│   │   ├── enquiries.js   # Enquiry form endpoints
│   │   └── paypal.js      # PayPal payment endpoints
│   └── data/              # Data storage (JSON files)
│       └── enquiries.json # Stored enquiries (auto-created)
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── CourseCard.jsx
│   │   ├── UniversityCard.jsx
│   │   ├── FAQ.jsx
│   │   ├── Testimonials.jsx
│   │   └── ContactForm.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── StudyAbroad.jsx
│   │   ├── PhDAdmission.jsx
│   │   ├── CareerCounselling.jsx
│   │   ├── AdminEnquiries.jsx
│   │   └── NotFound.jsx
│   ├── data/              # Static data
│   │   ├── courses.js
│   │   ├── universities.js
│   │   ├── faqs.js
│   │   └── testimonials.js
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🧪 Testing

### Test Enquiry Form

1. Navigate to `/contact`
2. Fill out the enquiry form with:
   - Name: At least 2 characters
   - Email: Valid email format
   - Phone: At least 10 characters
   - Message: At least 10 characters
3. Submit the form
4. Check the backend console for confirmation
5. View submitted enquiries at `/admin/enquiries` (password: `admin123`)

### Test PayPal Payment (Sandbox)

1. **Set up PayPal Sandbox:**
   - Use sandbox credentials in `.env`
   - Go to [PayPal Sandbox](https://developer.paypal.com/dashboard/accounts)

2. **Test Payment Flow:**
   - Navigate to `/contact`
   - Scroll to "Pay for Career Counselling" section
   - Click "Pay with PayPal"
   - Use sandbox test account:
     - Email: `sb-xxx@business.example.com` (from PayPal dashboard)
     - Password: (set in PayPal dashboard)
   - Complete the payment flow
   - You should see a success message

3. **Sample Sandbox Buyer Credentials:**
   - PayPal provides test accounts in the sandbox dashboard
   - Use the personal account for testing payments
   - No real money is charged

### View Enquiries (Admin)

1. Navigate to `/admin/enquiries`
2. Enter password: `admin123`
3. View all submitted enquiries
4. Click "Refresh" to reload the list

## 🔒 Security Notes

### Important Security Considerations

1. **Payment Secrets:**
   - **NEVER** commit `.env` file to version control
   - PayPal secret keys must stay on the backend
   - Frontend only uses PayPal Client ID (public)

2. **Admin Authentication:**
   - Current admin page uses a simple password (NOT SECURE)
   - **Replace with proper authentication in production:**
     - JWT tokens
     - Session-based auth
     - OAuth integration
     - Role-based access control

3. **Rate Limiting:**
   - Backend includes rate limiting (100 requests per 15 minutes per IP)
   - Adjust limits in `server/index.js` as needed

4. **Input Validation:**
   - Backend validates all enquiry form inputs
   - Frontend validation is for UX only
   - Always validate on the backend

5. **CORS:**
   - Currently allows `http://localhost:5173`
   - Update `FRONTEND_URL` in production
   - Restrict to your actual domain

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

3. Set environment variable `VITE_PAYPAL_CLIENT_ID` (if needed)

### Backend Deployment (Heroku/Railway/Render)

1. Set environment variables:
   - `PORT` (usually auto-set by platform)
   - `PAYPAL_CLIENT_ID`
   - `PAYPAL_SECRET`
   - `PAYPAL_MODE` (use `live` for production)
   - `FRONTEND_URL` (your frontend domain)

2. Update frontend API calls to use backend URL

3. For production PayPal:
   - Switch `PAYPAL_MODE` to `live`
   - Use live credentials from PayPal dashboard
   - Test thoroughly before going live

## 📝 API Endpoints

### Enquiries
- `POST /api/enquiries` - Submit new enquiry
- `GET /api/enquiries` - Get all enquiries (admin)

### PayPal
- `POST /api/paypal/create-order` - Create PayPal order
- `POST /api/paypal/capture-order` - Capture payment

### Health
- `GET /api/health` - Server health check

## 🎨 Customization

### Colors
The app uses a blue-purple gradient theme. To change colors:
- Update Tailwind classes in components
- Main colors: `blue-600`, `purple-600`
- See `src/components/Hero.jsx` for gradient examples

### Content
- **Courses:** Edit `src/data/courses.js`
- **Universities:** Edit `src/data/universities.js`
- **FAQs:** Edit `src/data/faqs.js`
- **Testimonials:** Edit `src/data/testimonials.js`

## 🐛 Troubleshooting

### Backend won't start
- Check if port 3001 is available
- Verify `.env` file exists and has correct values
- Check Node.js version: `node --version` (should be v18+)

### Frontend can't connect to backend
- Ensure backend is running on port 3001
- Check CORS settings in `server/index.js`
- Verify `FRONTEND_URL` in `.env` matches frontend URL

### PayPal not working
- Verify PayPal credentials in `.env`
- Check PayPal SDK is loading (browser console)
- Ensure you're using sandbox mode for testing
- Check backend logs for PayPal API errors

### Enquiries not saving
- Check `server/data/` directory exists
- Verify file permissions
- Check backend console for errors

## 📚 Next Steps

1. **Add Database:**
   - Replace JSON storage with MongoDB/PostgreSQL
   - Add proper data models and migrations

2. **Implement Real Authentication:**
   - Add JWT-based auth for admin
   - User registration/login for students
   - Password reset functionality

3. **Email Notifications:**
   - Send confirmation emails on enquiry submission
   - Email receipts for payments
   - Use services like SendGrid or Nodemailer

4. **Enhanced Features:**
   - User dashboard
   - Application tracking
   - Document upload
   - Live chat support
   - Blog/news section

5. **Analytics:**
   - Add Google Analytics
   - Track form submissions
   - Monitor payment conversions

## 📄 License

This project is provided as-is for educational and development purposes.

## 🤝 Support

For issues or questions:
- Check the troubleshooting section
- Review code comments for implementation details
- Ensure all dependencies are installed correctly

---

**Built with ❤️ for students seeking educational excellence**
