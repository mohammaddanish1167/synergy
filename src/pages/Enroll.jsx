import { useMemo, useState, useEffect } from 'react';
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
  Sparkles,
  User,
  Mail,
  Phone,
  Globe,
  BookOpen
} from 'lucide-react';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

// Currency exchange rates (approximate, you can update these or fetch from an API)
const EXCHANGE_RATES = {
  USD: 1,
  GBP: 0.79,
  EUR: 0.92
};

// Program options
const PROGRAM_OPTIONS = [
  { value: 'Honorary Doctorate', label: 'Honorary Doctorate' },
  { value: 'Honorary Professorship', label: 'Honorary Professorship' },
  { value: 'PhD Program', label: 'PhD Program' },
  { value: 'MBA (Master)', label: 'MBA (Master)' },
  { value: 'DBA Program', label: 'DBA Program' }
];

function Enroll() {
  const query = useQuery();
  const navigate = useNavigate();

  const course = query.get('course') || '';
  const courseId = query.get('id') || '';
  const month = query.get('month') || '';
  const date = query.get('date') || '';
  const suggestedPrice = Number(query.get('suggestedPrice') || 99);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [program, setProgram] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState(Number.isFinite(suggestedPrice) ? suggestedPrice : 99);
  const [error, setError] = useState('');

  // Calculate USD equivalent
  const usdAmount = useMemo(() => {
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) return 0;
    return (numericAmount / EXCHANGE_RATES[currency]).toFixed(2);
  }, [amount, currency]);

  const handlePay = () => {
    // Validation
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }
    if (!country.trim()) {
      setError('Please enter your country.');
      return;
    }
    if (!program) {
      setError('Please select a program.');
      return;
    }
    
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    setError('');

    // Get selected program label
    const selectedProgram = PROGRAM_OPTIONS.find(p => p.value === program)?.label || program;

    // Pass all details to payment page
    const payUrl = `/pay?course=${encodeURIComponent(course || selectedProgram)}` +
      `&id=${encodeURIComponent(courseId)}` +
      `&month=${encodeURIComponent(month)}` +
      `&date=${encodeURIComponent(date)}` +
      `&price=${encodeURIComponent(String(usdAmount))}` +
      `&name=${encodeURIComponent(name)}` +
      `&email=${encodeURIComponent(email)}` +
      `&phone=${encodeURIComponent(phone)}` +
      `&country=${encodeURIComponent(country)}` +
      `&program=${encodeURIComponent(program)}` +
      `&currency=${encodeURIComponent(currency)}` +
      `&originalAmount=${encodeURIComponent(String(amount))}`;

    navigate(payUrl);
  };

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

              {/* Course Details Card - Only show if course is provided */}
              {course && (
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
              )}

              {/* Personal Information Form */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-blue-500" />
                  <h3 className="text-lg font-bold text-slate-900">Personal Information</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <User className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Mail className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Phone className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="+1 234 567 8900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Country *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Globe className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="Enter your country"
                        required
                      />
                    </div>
                  </div>

                  {/* Program Selection Dropdown */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select Program *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                      </div>
                      <select
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 appearance-none bg-white"
                        required
                      >
                        <option value="">Choose a program</option>
                        {PROGRAM_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {program && (
                      <div className="mt-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
                        <p className="text-sm text-blue-700">
                          Selected: <span className="font-medium">{PROGRAM_OPTIONS.find(p => p.value === program)?.label}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Amount */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-lg font-bold text-slate-900">Enter Payment Amount</h3>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Currency
                  </label>
                  <div className="flex gap-3">
                    {['USD', 'GBP', 'EUR'].map((curr) => (
                      <button
                        key={curr}
                        onClick={() => {
                          setCurrency(curr);
                          // Convert current amount to new currency
                          const currentUSD = Number(usdAmount);
                          const newAmount = (currentUSD * EXCHANGE_RATES[curr]).toFixed(2);
                          setAmount(newAmount);
                        }}
                        className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          currency === curr
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Amount ({currency})
                  </label>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <span className="text-slate-500 font-medium">
                          {currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '€'}
                        </span>
                      </div>
                      <input
                        type="number"
                        inputMode="decimal"
                        min={0.01}
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  
                  {/* USD Equivalent */}
                  <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">USD Equivalent:</span>
                      <span className="text-lg font-bold text-blue-700">${usdAmount} USD</span>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <button
                  onClick={handlePay}
                  className="w-full px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Continue to Payment
                </button>
                  
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span>Your payment information is secure and encrypted</span>
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

              {/* Program Details Card */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  Available Programs
                </h3>
                <div className="space-y-3">
                  {PROGRAM_OPTIONS.map((programOption) => (
                    <div 
                      key={programOption.value}
                      className={`text-sm p-3 rounded-lg transition-all cursor-pointer ${
                        program === programOption.value 
                          ? 'bg-white border border-blue-200 shadow-sm' 
                          : 'hover:bg-white/50'
                      }`}
                      onClick={() => setProgram(programOption.value)}
                    >
                      <div className="font-medium text-slate-900">{programOption.label}</div>
                      <div className="text-xs text-slate-500 mt-1">12-month comprehensive program</div>
                    </div>
                  ))}
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
                      <div className="text-sm font-medium text-slate-900">Select Program</div>
                      <div className="text-xs text-slate-600">Choose from available programs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Enter Amount</div>
                      <div className="text-xs text-slate-600">Choose your payment amount</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Select Payment Method</div>
                      <div className="text-xs text-slate-600">PayPal or credit/debit card</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      4
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