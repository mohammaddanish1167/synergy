import { useMemo, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  CreditCard,
  Shield,
  Users,
  CheckCircle,
  DollarSign,
  Sparkles
} from 'lucide-react';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function Enroll() {
  const query = useQuery();
  const navigate = useNavigate();

  const course = query.get('course') || '';
  const courseId = query.get('id') || '';
  const month = query.get('month') || '';
  const date = query.get('date') || '';
  const suggestedPrice = Number(query.get('suggestedPrice') || 99);

  const [amount, setAmount] = useState(Number.isFinite(suggestedPrice) ? suggestedPrice : 99);
  const [error, setError] = useState('');

  const handlePay = () => {
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    setError('');

    const payUrl = `/pay?course=${encodeURIComponent(course || 'QualifyLearn Course Enrollment')}` +
      `&id=${encodeURIComponent(courseId)}` +
      `&month=${encodeURIComponent(month)}` +
      `&date=${encodeURIComponent(date)}` +
      `&price=${encodeURIComponent(String(numericAmount))}`;

    navigate(payUrl);
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <h1 className="text-2xl font-bold text-slate-900">Course not selected</h1>
            <p className="text-slate-600 mt-2">Please choose a course from Upcoming Courses.</p>
            <div className="mt-6">
              <Link
                to="/upcoming-courses"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600"
              >
                View Upcoming Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/20 to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Enrollment</h1>
                  <p className="text-slate-600 mt-1">Secure your spot in the program</p>
                </div>
              </div>

              {/* Course Details Card */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{course}</h2>
                    <p className="text-slate-700 mt-2">Prestigious program with expert guidance and certification</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  {month && date && (
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{month} {date}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">12 month program</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">Limited seats available</span>
                  </div>
                </div>
              </div>

              {/* Payment Amount */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-lg font-bold text-slate-900">Enter Payment Amount</h3>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Amount (USD)
                  </label>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <span className="text-slate-500 font-medium">$</span>
                      </div>
                      <input
                        type="number"
                        inputMode="decimal"
                        min={1}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="Enter amount"
                      />
                    </div>
                    <button
                      onClick={handlePay}
                      className="px-8 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Continue to Payment
                    </button>
                  </div>
                  
                  {error && (
                    <p className="text-sm text-red-600 mt-2">{error}</p>
                  )}
                  
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>

                {/* Suggested Amounts */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Suggested Amounts</h4>
                  <div className="flex flex-wrap gap-3">
                    {[99, 199, 299, 399].map((suggested) => (
                      <button
                        key={suggested}
                        onClick={() => setAmount(suggested)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          amount === suggested
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        ${suggested}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-3">
                    Choose from suggested amounts or enter your custom amount
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Security Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  Secure Payment
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  All transactions are protected with bank-level security and encryption.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">256-bit SSL Encryption</div>
                      <div className="text-xs text-slate-500 mt-0.5">Military-grade security</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Multiple Payment Options</div>
                      <div className="text-xs text-slate-500 mt-0.5">PayPal & Credit/Debit Cards</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Money-Back Guarantee</div>
                      <div className="text-xs text-slate-500 mt-0.5">14-day refund policy</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps Card */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-slate-900 mb-3">What's Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Enter Amount</div>
                      <div className="text-xs text-slate-600">Choose your payment amount</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Select Payment Method</div>
                      <div className="text-xs text-slate-600">PayPal or credit/debit card</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Confirmation</div>
                      <div className="text-xs text-slate-600">Receive enrollment confirmation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="font-bold text-slate-900 mb-3">Need Help?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Our support team is available to assist you with the enrollment process.
                </p>
                <button 
                  onClick={() => window.location.href = 'mailto:support@qualifylearn.com'}
                  className="w-full py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
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

export default Enroll;