import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Lock, Shield, CreditCard, CheckCircle, XCircle, ArrowLeft,
  Sparkles, Calendar, Clock, Award, Zap, AlertCircle,
  Loader2, User, Mail, Phone, Globe, DollarSign, ChevronRight,
  HelpCircle, Briefcase, GraduationCap, Target, BarChart
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
    case 'USD': return '$';
    case 'GBP': return '£';
    case 'EUR': return '€';
    case 'JPY': return '¥';
    case 'INR': return '₹';
    case 'CAD': return 'CA$';
    case 'AUD': return 'A$';
    default: return currencyCode ? `${currencyCode} ` : '';
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
    'Honorary Doctorate': { icon: Award, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    'Honorary Professorship': { icon: Award, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    'PhD Program': { icon: GraduationCap, color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    'MBA': { icon: Briefcase, color: 'text-amber-600', bgColor: 'bg-amber-50' },
    'DBA Program': { icon: Target, color: 'text-rose-600', bgColor: 'bg-rose-50' },
  };

  const courseDetail = courseDetails[course] || courseDetails['Honorary Doctorate'];
  const Icon = courseDetail.icon;

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
          currency: currency,
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

      const stripeCurrency = currency.toLowerCase();
      
      const res = await fetch(`${API_BASE_URL}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          course, 
          price, 
          currency: stripeCurrency,
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Complete payment</h1>
                  <p className="text-sm text-gray-600 mt-1">Secure checkout for your enrollment</p>
                </div>
              </div>

              {/* Order Details */}
              <div className="space-y-6">
                {/* User Info */}
                {name && (
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Payer information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <User className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Name</p>
                          <p className="text-sm font-medium text-gray-900">{name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Mail className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Email</p>
                          <p className="text-sm font-medium text-gray-900">{email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Phone className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Phone</p>
                          <p className="text-sm font-medium text-gray-900">{phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Course Info */}
                <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${courseDetail.bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${courseDetail.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{course}</h3>
                      <p className="text-xs text-gray-600 mt-1">Program enrollment</p>
                    </div>
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">Payment summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Program fee</span>
                      <span className="text-sm font-medium text-gray-900">
                        {getCurrencySymbol(currency)}{price}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">Total</span>
                        <div className="text-right">
                          <span className="text-xl font-bold text-gray-900">
                            {getCurrencySymbol(currency)}{price}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">One-time payment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Note */}
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-xs text-gray-700">
                    <span className="font-medium text-gray-900">Secure payment</span> · All transactions are encrypted and protected
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Methods */}
          <div className="lg:col-span-1 space-y-4">
            {/* Status Message */}
            {message && (
              <div className={`bg-white rounded-xl border p-4 ${
                status === 'success' ? 'border-green-200' : 
                status === 'error' ? 'border-red-200' : 'border-blue-200'
              }`}>
                <div className="flex items-start gap-3">
                  {status === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : status === 'error' ? (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm text-gray-700">{message}</p>
                </div>
              </div>
            )}

            {/* Payment Methods Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Select payment method</h2>

              <div className="space-y-3">
                {/* PayPal */}
                <button
                  onClick={handlePayPal}
                  disabled={loading}
                  className={`w-full p-4 rounded-xl border transition-all ${
                    paymentMethod === 'PayPal' 
                      ? 'border-indigo-300 bg-indigo-50' 
                      : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-sm">PP</span>
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">PayPal</p>
                        <p className="text-xs text-gray-500">Pay securely with PayPal</p>
                      </div>
                    </div>
                    {loading && paymentMethod === 'PayPal' ? (
                      <Loader2 className="w-4 h-4 text-indigo-600 animate-spin" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Credit Card 
                <button
                  onClick={handleStripe}
                  disabled={loading}
                  className={`w-full p-4 rounded-xl border transition-all ${
                    paymentMethod === 'Stripe' 
                      ? 'border-indigo-300 bg-indigo-50' 
                      : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">Credit / Debit Card</p>
                        <p className="text-xs text-gray-500">Visa, Mastercard, Amex</p>
                      </div>
                    </div>
                    {loading && paymentMethod === 'Stripe' ? (
                      <Loader2 className="w-4 h-4 text-indigo-600 animate-spin" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>*/}
              </div>

              {/* Amount Display */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Amount due</span>
                  <span className="text-lg font-bold text-gray-900">
                    {getCurrencySymbol(currency)}{price}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  You'll be redirected to the secure payment page
                </p>
              </div>

              {/* Security Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                <Lock className="w-3 h-3" />
                <span>256-bit SSL encryption</span>
              </div>

              {/* Terms */}
              <p className="mt-4 text-xs text-gray-400 text-center">
                By proceeding, you agree to our{' '}
                <a href="/terms" className="text-indigo-600 hover:text-indigo-700">Terms</a>
                {' '}and{' '}
                <a href="/privacy" className="text-indigo-600 hover:text-indigo-700">Privacy Policy</a>
              </p>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Need assistance?</h3>
                  <p className="text-xs text-gray-600 mb-2">Our support team is here to help</p>
                  <a
                    href="mailto:support@qualifylearn.com"
                    className="text-xs text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1"
                  >
                    Contact support
                    <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;