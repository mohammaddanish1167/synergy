import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Lock, Shield, CreditCard, CheckCircle, XCircle, ArrowLeft,
  Sparkles, Calendar, Clock, Award, Zap, AlertCircle,
  Loader2, User, Mail, Phone, Globe, DollarSign, ChevronRight
} from 'lucide-react';

/* ✅ BACKEND URL (NO ENV, NO FALLBACK) */
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_BASE_URL = isLocal
  ? `http://${window.location.hostname}:3001`
  : "https://qualifylearnnn-backend.onrender.com";

/* ✅ SAFE JSON PARSER */
async function safeJson(res) {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    console.error("❌ RAW RESPONSE (NOT JSON):", text);
    throw new Error("Server did not return JSON");
  }
}

// Helper function to get currency symbol
const getCurrencySymbol = (currencyCode) => {
  switch (currencyCode?.toUpperCase()) {
    case 'USD':
      return '$';
    case 'GBP':
      return '£';
    case 'EUR':
      return '€';
    case 'JPY':
      return '¥';
    case 'INR':
      return '₹';
    case 'CAD':
      return 'CA$';
    case 'AUD':
      return 'A$';
    default:
      return currencyCode ? `${currencyCode} ` : '';
  }
};

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function Payment() {
  const query = useQuery();
  const navigate = useNavigate();
  const [status, setStatus] = useState(query.get('status') || '');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const course = query.get('course') || 'QualifyLearn Course Enrollment';
  const price = Number(query.get('price') || 99);
  const currency = query.get('currency') || 'USD';
  const originalAmount = query.get('originalAmount') || String(price);
  const month = query.get('month') || 'December';
  const date = query.get('date') || '8';

  const name = query.get('name') || '';
  const email = query.get('email') || '';
  const phone = query.get('phone') || '';
  const country = query.get('country') || '';

  const courseDetails = {
    'Honorary Doctorate': { icon: <Award className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    'Honorary Professorship': { icon: <Award className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    'PhD Program': { icon: <Sparkles className="w-5 h-5" />, color: 'from-emerald-500 to-green-500' },
    'MBA (Master)': { icon: <Zap className="w-5 h-5" />, color: 'from-amber-500 to-orange-500' },
    'DBA Program': { icon: <CreditCard className="w-5 h-5" />, color: 'from-rose-500 to-pink-500' },
  };

  const courseDetail = courseDetails[course] || courseDetails['Honorary Doctorate'];

  /* ================= PAYPAL RETURN ================= */
  useEffect(() => {
    const orderId = query.get('token') || query.get('PayerID');
    if (query.get('status') === 'success' && orderId) {
      setPaymentMethod('PayPal');
      (async () => {
        try {
          setLoading(true);
          const res = await fetch(`${API_BASE_URL}/api/paypal/capture-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId })
          });

          const data = await safeJson(res);
          if (!res.ok) throw new Error(data.message);

          setMessage('Payment successful! Your enrollment is confirmed.');
          setStatus('success');
        } catch (e) {
          setMessage(e.message);
          setStatus('error');
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [query]);

  /* ================= PAYPAL ================= */
  const handlePayPal = async () => {
    try {
      setLoading(true);
      setPaymentMethod('PayPal');
      setMessage('');

      const res = await fetch(`${API_BASE_URL}/api/paypal/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount: price, 
          currency: currency,  // Changed from 'USD' to use original currency
          course, 
          name, 
          email, 
          phone, 
          country 
        })
      });

      const data = await safeJson(res);
      if (!res.ok) throw new Error(data.message);

      window.location.href = data.approveUrl;
    } catch (e) {
      setMessage(e.message);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  /* ================= STRIPE ================= */
  const handleStripe = async () => {
    try {
      setLoading(true);
      setPaymentMethod('Stripe');
      setMessage('');

      // Convert currency code to Stripe format (lowercase)
      const stripeCurrency = currency.toLowerCase();
      
      const res = await fetch(`${API_BASE_URL}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          course, 
          price, 
          currency: stripeCurrency,  // Use original currency
          name, 
          email, 
          phone, 
          country 
        })
      });

      const data = await safeJson(res);
      if (!res.ok) throw new Error(data.message);

      window.location.href = data.url;
    } catch (e) {
      setMessage(e.message);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Left Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-sm">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">Payment</h1>
                    <p className="text-slate-500 text-sm">Complete your enrollment securely</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-6">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                </div>
                Order Details
              </h2>

              <div className="space-y-6">
                {/* User Details */}
                {name && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Paying as</p>
                          <p className="font-medium text-slate-900">{name}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pl-12">
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Email</p>
                        <p className="text-sm text-slate-700">{email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Phone</p>
                        <p className="text-sm text-slate-700">{phone}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Course Details */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${courseDetail.color} flex items-center justify-center shadow-sm`}>
                      {courseDetail.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{course}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <Calendar className="w-3 h-3" />
                          <span>{month} {date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <Clock className="w-3 h-3" />
                          <span>12 months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Summary - UPDATED TO SHOW ORIGINAL CURRENCY ONLY */}
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Payment Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Program Fee</span>
                      <div className="text-right">
                        <span className="text-slate-900 font-medium">
                          {getCurrencySymbol(currency)}{price}
                        </span>
                        <div className="text-xs text-slate-400 mt-1">{currency}</div>
                      </div>
                    </div>
                   
                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900">Total</span>
                        <div className="text-right">
                          <div className="text-xl font-bold text-slate-900">
                            {getCurrencySymbol(currency)}{price}
                          </div>
                          <div className="text-xs text-slate-500">One-time payment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Security */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Secure Payment</p>
                <p className="text-xs text-slate-600">Your payment is encrypted and secure</p>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Methods */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Status Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-4 rounded-xl flex items-start gap-3 ${status === 'success'
                    ? 'bg-emerald-50 border border-emerald-200'
                    : status === 'error'
                      ? 'bg-red-50 border border-red-200'
                      : 'bg-blue-50 border border-blue-200'
                    }`}
                >
                  {status === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  ) : status === 'error' ? (
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${status === 'success' ? 'text-emerald-800' :
                      status === 'error' ? 'text-red-800' :
                        'text-blue-800'
                      }`}>
                      {message}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Payment Methods Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-6">Choose Payment Method</h2>

                <div className="space-y-3">
                  {/* PayPal Option */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handlePayPal}
                    disabled={loading}
                    className={`w-full p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${paymentMethod === 'PayPal'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                      } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${paymentMethod === 'PayPal' ? 'bg-blue-100' : 'bg-slate-100'
                        }`}>
                        <div className="text-blue-600 font-bold text-sm">PP</div>
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-slate-900">PayPal</div>
                        <div className="text-xs text-slate-500">Pay securely with PayPal</div>
                      </div>
                    </div>
                    {loading && paymentMethod === 'PayPal' ? (
                      <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                    ) : (
                      <ChevronRight className={`w-4 h-4 transition-colors ${paymentMethod === 'PayPal' ? 'text-blue-600' : 'text-slate-400'
                        }`} />
                    )}
                  </motion.button>

                  {/* Credit Card Option
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleStripe}
                    disabled={loading}
                    className={`w-full p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${paymentMethod === 'Stripe'
                      ? 'border-slate-800 bg-slate-50'
                      : 'border-slate-200 hover:border-slate-800 hover:bg-slate-50/50'
                      } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${paymentMethod === 'Stripe' ? 'bg-slate-100' : 'bg-slate-100'
                        }`}>
                        <CreditCard className="w-5 h-5 text-slate-700" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-slate-900">Credit/Debit Card</div>
                        <div className="text-xs text-slate-500">Visa, Mastercard, Amex</div>
                      </div>
                    </div>
                    {loading && paymentMethod === 'Stripe' ? (
                      <Loader2 className="w-4 h-4 text-slate-600 animate-spin" />
                    ) : (
                      <ChevronRight className={`w-4 h-4 transition-colors ${paymentMethod === 'Stripe' ? 'text-slate-800' : 'text-slate-400'
                        }`} />
                    )}
                  </motion.button> */}
                </div>

                {/* Payment Amount Display - UPDATED TO SHOW ORIGINAL CURRENCY */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-600">Amount to pay</span>
                    <span className="text-lg font-bold text-slate-900">
                      {getCurrencySymbol(currency)}{price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 text-center">
                    You'll be redirected to the secure payment page
                  </p>
                </div>

                {/* Security Info */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Lock className="w-3 h-3 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600">
                        <span className="font-medium text-slate-900">Secure payment</span> · 256-bit SSL encryption · Your payment details are protected
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="mt-6">
                  <p className="text-xs text-slate-400 text-center">
                    By proceeding, you agree to our{' '}
                    <a href="/terms" className="text-blue-600 hover:text-blue-700">
                      Terms
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-700">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>

              {/* Support Section */}
              <div className="mt-4 p-4 bg-white rounded-xl border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <Mail className="w-3 h-3 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Need help?</p>
                    <p className="text-xs text-slate-500 mb-2">Our team is here to assist you</p>
                    <button
                      onClick={() => window.location.href = 'mailto:support@qualifylearn.com'}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Contact support →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Payment;