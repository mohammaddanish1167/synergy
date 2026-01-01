import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Lock, 
  Shield, 
  CreditCard, 
  CheckCircle, 
  XCircle,
  ArrowLeft,
  Sparkles,
  Calendar,
  Clock,
  Award,
  Zap,
  AlertCircle,
  Loader2
} from 'lucide-react';

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
  const courseId = query.get('id') || '';
  const price = Number(query.get('price') || 99);
  const currency = 'USD';
  const month = query.get('month') || 'December';
  const date = query.get('date') || '8';

  const courseDetails = {
    'Honorary Doctorate': { icon: <Award className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    'Honorary Professorship': { icon: <Award className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    'PhD Program': { icon: <Sparkles className="w-5 h-5" />, color: 'from-emerald-500 to-green-500' },
    'MBA (Master)': { icon: <Zap className="w-5 h-5" />, color: 'from-amber-500 to-orange-500' },
    'DBA Program': { icon: <CreditCard className="w-5 h-5" />, color: 'from-rose-500 to-pink-500' },
    'QualifyLearn Course Enrollment': { icon: <Award className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' }
  };

  const courseDetail = courseDetails[course] || courseDetails['QualifyLearn Course Enrollment'];

  useEffect(() => {
    const token = query.get('token');
    const statusParam = query.get('status');
    if (statusParam === 'success' && token) {
      setPaymentMethod('PayPal');
      (async () => {
        try {
          setLoading(true);
          const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/paypal/capture-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId: token })
          });
          const data = await res.json();
          if (data.success) {
            setMessage('Payment successful! Your enrollment is confirmed.');
            setStatus('success');
          } else {
            setMessage(data.message || 'Failed to complete PayPal payment');
            setStatus('error');
          }
        } catch (e) {
          setMessage('Network error capturing PayPal payment');
          setStatus('error');
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [query]);

  const handlePayPal = async () => {
    try {
      setLoading(true);
      setMessage('');
      setPaymentMethod('PayPal');
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/paypal/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price, currency })
      });
      const data = await res.json();
      if (data.success && data.approveUrl) {
        window.location.href = data.approveUrl;
      } else {
        setMessage(data.message || 'Failed to start PayPal checkout');
      }
    } catch (e) {
      setMessage('Network error starting PayPal checkout');
    } finally {
      setLoading(false);
    }
  };

  const handleStripe = async () => {
    try {
      setLoading(true);
      setMessage('');
      setPaymentMethod('Stripe');
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course, price, currency: currency.toLowerCase() })
      });
      const data = await res.json();
      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        setMessage(data.message || 'Failed to start Stripe checkout');
      }
    } catch (e) {
      setMessage('Network error starting Stripe checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/20 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Left Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-700 mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Course
              </button>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">Secure Checkout</h1>
              </div>
              <p className="text-slate-600">Complete your enrollment in just a few steps</p>
            </div>

            {/* Order Summary Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                Order Summary
              </h2>
              
              <div className="space-y-6">
                {/* Course Details */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${courseDetail.color} flex items-center justify-center`}>
                    {courseDetail.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{course}</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4" />
                        <span>{month} {date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>12 month program</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Shield className="w-4 h-4" />
                        <span>Certificate included</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Details */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Program Fee</span>
                      <span className="text-slate-900 font-medium">${price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Processing Fee</span>
                      <span className="text-slate-900 font-medium">$0.00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-emerald-600">
                      <span>Early Bird Discount</span>
                      <span className="font-medium">50% OFF</span>
                    </div>
                    <div className="border-t border-slate-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-slate-900">Total Amount</span>
                        <div>
                          <div className="text-2xl font-bold text-slate-900">${price}</div>
                          <div className="text-sm text-slate-500 line-through">${price * 2}</div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">One-time payment • No hidden fees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Guarantee */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-slate-100 text-center">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Secure Payment</h4>
                <p className="text-xs text-slate-500">256-bit SSL encryption</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100 text-center">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Money-Back Guarantee</h4>
                <p className="text-xs text-slate-500">14-day refund policy</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100 text-center">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Privacy Protected</h4>
                <p className="text-xs text-slate-500">Your data is safe with us</p>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Methods */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Method</h2>
                
                {/* Status Message */}
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                      status === 'success'
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
                    <div>
                      <p className={`font-medium ${
                        status === 'success' ? 'text-emerald-800' : 
                        status === 'error' ? 'text-red-800' : 
                        'text-blue-800'
                      }`}>
                        {message}
                      </p>
                      {status === 'success' && (
                        <p className="text-sm text-emerald-600 mt-1">
                          You will receive confirmation email shortly.
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Payment Options */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePayPal}
                    disabled={loading}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between group ${
                      paymentMethod === 'PayPal'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                    } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-slate-900">PayPal</div>
                        <div className="text-sm text-slate-500">Pay with PayPal account</div>
                      </div>
                    </div>
                    {loading && paymentMethod === 'PayPal' ? (
                      <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                    ) : (
                      <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowLeft className="w-5 h-5 rotate-180" />
                      </div>
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleStripe}
                    disabled={loading}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between group ${
                      paymentMethod === 'Stripe'
                        ? 'border-slate-800 bg-slate-50'
                        : 'border-slate-200 hover:border-slate-800 hover:bg-slate-50/50'
                    } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-slate-700" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-slate-900">Credit/Debit Card</div>
                        <div className="text-sm text-slate-500">Secure payment via Stripe</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
                        <div className="w-6 h-4 bg-red-500 rounded-sm -ml-1"></div>
                        <div className="w-6 h-4 bg-yellow-500 rounded-sm -ml-1"></div>
                        <div className="w-6 h-4 bg-purple-500 rounded-sm -ml-1"></div>
                      </div>
                      {loading && paymentMethod === 'Stripe' ? (
                        <Loader2 className="w-5 h-5 text-slate-600 animate-spin ml-2" />
                      ) : (
                        <div className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                          <ArrowLeft className="w-5 h-5 rotate-180" />
                        </div>
                      )}
                    </div>
                  </motion.button>
                </div>

                {/* Security Notice */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Secure & Encrypted</p>
                      <p className="text-xs text-slate-500 mt-1">
                        All transactions are secured with 256-bit SSL encryption. Your payment details are never stored on our servers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="mt-6">
                  <p className="text-xs text-slate-500 text-center">
                    By completing your purchase, you agree to our{' '}
                    <a href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>

              {/* Support Section */}
              <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-slate-900 mb-2">Need Help?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Our support team is here to assist you with any questions.
                </p>
                <button 
                  onClick={() => window.location.href = 'mailto:support@qualifylearn.com'}
                  className="w-full py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-white rounded-lg transition-colors"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Payment;