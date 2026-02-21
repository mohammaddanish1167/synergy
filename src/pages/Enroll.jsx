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
  MapPin,
  BookOpen,
  ChevronRight,
  Search,
  Lock,
  HelpCircle,
  AlertCircle,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  BarChart
} from 'lucide-react';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

// Currency symbols
const CURRENCY_SYMBOLS = {
  USD: '$',
  GBP: '£',
  EUR: '€'
};

// Country phone codes
const COUNTRY_PHONE_CODES = {
  US: '+1',
  GB: '+44',
  CA: '+1',
  AU: '+61',
  IN: '+91',
  SG: '+65',
  MY: '+60',
  NZ: '+64',
  AE: '+971',
  SA: '+966',
  DE: '+49',
  FR: '+33',
  IT: '+39',
  ES: '+34',
  NL: '+31',
  BE: '+32',
  CH: '+41',
  SE: '+46',
  NO: '+47',
  DK: '+45',
  FI: '+358',
  IE: '+353',
  AT: '+43',
  PL: '+48',
  CZ: '+420',
  HU: '+36',
  PT: '+351',
  GR: '+30',
  RO: '+40',
  BG: '+359',
  HR: '+385',
  RS: '+381',
  UA: '+380',
  RU: '+7',
  TR: '+90',
  IL: '+972',
  ZA: '+27',
  NG: '+234',
  KE: '+254',
  EG: '+20',
  MA: '+212',
  PK: '+92',
  BD: '+880',
  LK: '+94',
  NP: '+977',
  TH: '+66',
  VN: '+84',
  PH: '+63',
  ID: '+62',
  KR: '+82',
  JP: '+81',
  CN: '+86',
  BR: '+55',
  MX: '+52',
  AR: '+54',
  CO: '+57',
  CL: '+56',
  PE: '+51',
  EC: '+593'
};

// Countries data
const countries = [
  { code: 'US', name: 'United States', currency: 'USD' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP' },
  { code: 'CA', name: 'Canada', currency: 'USD' },
  { code: 'AU', name: 'Australia', currency: 'USD' },
  { code: 'IN', name: 'India', currency: 'USD' },
  { code: 'SG', name: 'Singapore', currency: 'USD' },
  { code: 'MY', name: 'Malaysia', currency: 'USD' },
  { code: 'NZ', name: 'New Zealand', currency: 'USD' },
  { code: 'AE', name: 'UAE', currency: 'USD' },
  { code: 'SA', name: 'Saudi Arabia', currency: 'USD' },
  { code: 'DE', name: 'Germany', currency: 'EUR' },
  { code: 'FR', name: 'France', currency: 'EUR' },
  { code: 'IT', name: 'Italy', currency: 'EUR' },
  { code: 'ES', name: 'Spain', currency: 'EUR' },
  { code: 'NL', name: 'Netherlands', currency: 'EUR' },
  { code: 'BE', name: 'Belgium', currency: 'EUR' },
  { code: 'CH', name: 'Switzerland', currency: 'EUR' },
  { code: 'SE', name: 'Sweden', currency: 'EUR' },
  { code: 'NO', name: 'Norway', currency: 'EUR' },
  { code: 'DK', name: 'Denmark', currency: 'EUR' },
  { code: 'FI', name: 'Finland', currency: 'EUR' },
  { code: 'IE', name: 'Ireland', currency: 'EUR' },
  { code: 'AT', name: 'Austria', currency: 'EUR' },
  { code: 'PL', name: 'Poland', currency: 'EUR' },
  { code: 'CZ', name: 'Czech Republic', currency: 'EUR' },
  { code: 'HU', name: 'Hungary', currency: 'EUR' },
  { code: 'PT', name: 'Portugal', currency: 'EUR' },
  { code: 'GR', name: 'Greece', currency: 'EUR' }
].sort((a, b) => a.name.localeCompare(b.name));

// Program options
const PROGRAM_OPTIONS = [
  { value: 'Honorary Doctorate', label: 'Honorary Doctorate', icon: Award },
  { value: 'Honorary Professorship', label: 'Honorary Professorship', icon: Award },
  { value: 'PhD Program', label: 'PhD Program', icon: GraduationCap },
  { value: 'MBA', label: 'MBA', icon: Briefcase },
  { value: 'DBA Program', label: 'DBA Program', icon: Target },
  { value: 'Others', label: 'Others', icon: BarChart }
];

function Enroll() {
  const query = useQuery();
  const navigate = useNavigate();

  const course = query.get('course') || '';
  const courseId = query.get('id') || '';
  const month = query.get('month') || '';
  const date = query.get('date') || '';
  const suggestedPrice = Number(query.get('suggestedPrice') || 1000);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('US');
  const [state, setState] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [program, setProgram] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState(1000);
  const [error, setError] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [touched, setTouched] = useState({});

  const isAuski = course.toLowerCase() === 'auski';

  // Update currency and phone code when country changes
  useEffect(() => {
    const countryData = countries.find(c => c.code === country);
    if (countryData) {
      const countryCurr = countryData.currency;
      if (countryCurr === 'EUR') setCurrency('EUR');
      else if (countryCurr === 'GBP') setCurrency('GBP');
      else setCurrency('USD');
    }
    setCountryCode(COUNTRY_PHONE_CODES[country] || '+1');
  }, [country]);

  // Filter countries based on search
  const filteredCountries = countrySearch
    ? countries.filter(c => 
        c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        c.code.toLowerCase().includes(countrySearch.toLowerCase())
      )
    : countries;

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const validateForm = () => {
    if (!name.trim()) return 'Please enter your name.';
    if (!email.trim() || !email.includes('@')) return 'Please enter a valid email address.';
    if (!phone.trim()) return 'Please enter your phone number.';
    if (!country) return 'Please select your country.';
    if (!program) return 'Please select a program.';
    
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      return 'Please enter a valid amount.';
    }
    return '';
  };

  const handlePay = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');

    const paymentCurrency = ['USD', 'EUR', 'GBP'].includes(currency) ? currency : 'USD';
    const selectedProgram = PROGRAM_OPTIONS.find(p => p.value === program)?.label || program;

    const payUrl = `/pay?course=${encodeURIComponent(course || selectedProgram)}` +
      `&id=${encodeURIComponent(courseId)}` +
      `&month=${encodeURIComponent(month)}` +
      `&date=${encodeURIComponent(date)}` +
      `&price=${encodeURIComponent(String(amount))}` +
      `&name=${encodeURIComponent(name)}` +
      `&email=${encodeURIComponent(email)}` +
      `&phone=${encodeURIComponent(`${countryCode} ${phone}`.trim())}` +
      `&country=${encodeURIComponent(country)}` +
      `&state=${encodeURIComponent(state)}` +
      `&program=${encodeURIComponent(program)}` +
      `&currency=${encodeURIComponent(paymentCurrency)}` +
      `&originalAmount=${encodeURIComponent(String(amount))}`;

    navigate(payUrl);
  };

  const getFieldError = (field) => {
    if (!touched[field]) return '';
    switch(field) {
      case 'name': return !name.trim() ? 'Name is required' : '';
      case 'email': return !email.trim() || !email.includes('@') ? 'Valid email required' : '';
      case 'phone': return !phone.trim() ? 'Phone is required' : '';
      case 'country': return !country ? 'Country required' : '';
      case 'program': return !program ? 'Program required' : '';
      default: return '';
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
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Complete enrollment</h1>
                  <p className="text-sm text-gray-600 mt-1">Secure your spot in the program</p>
                </div>
              </div>

              {/* Course Details - Only if provided */}
              {course && (
                <div className="bg-indigo-50 rounded-xl p-5 mb-8 border border-indigo-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{course}</h2>
                      <p className="text-sm text-gray-600 mt-1">Prestigious program with expert guidance</p>
                    </div>
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {month && date && (
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{month} {date}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      <span>12 month program</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Users className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Limited seats</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm ${
                        getFieldError('name') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  {getFieldError('name') && (
                    <p className="text-xs text-red-600 mt-1">{getFieldError('name')}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm ${
                        getFieldError('email') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {getFieldError('email') && (
                    <p className="text-xs text-red-600 mt-1">{getFieldError('email')}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <span className="absolute left-9 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                      {countryCode}
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      className={`w-full pl-16 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm ${
                        getFieldError('phone') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="123 456 7890"
                    />
                  </div>
                  {getFieldError('phone') && (
                    <p className="text-xs text-red-600 mt-1">{getFieldError('phone')}</p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      onBlur={() => handleBlur('country')}
                      className={`w-full pl-10 pr-4 py-2.5 border rounded-lg text-left flex items-center justify-between text-sm ${
                        getFieldError('country') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } ${!country ? 'text-gray-500' : 'text-gray-900'}`}
                    >
                      <span>
                        {country
                          ? `${countries.find(c => c.code === country)?.name} (${COUNTRY_PHONE_CODES[country]})`
                          : 'Select country'}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${isCountryDropdownOpen ? 'rotate-90' : ''}`} />
                    </button>

                    {isCountryDropdownOpen && (
                      <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <div className="p-2 border-b border-gray-100">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                              placeholder="Search countries..."
                              autoFocus
                            />
                          </div>
                        </div>
                        <div className="max-h-60 overflow-y-auto p-1">
                          {filteredCountries.map((c) => (
                            <button
                              key={c.code}
                              onClick={() => {
                                setCountry(c.code);
                                setIsCountryDropdownOpen(false);
                                setCountrySearch('');
                              }}
                              className={`w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-between ${
                                country === c.code ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'
                              }`}
                            >
                              <span>{c.name}</span>
                              <span className="text-xs text-gray-500">{COUNTRY_PHONE_CODES[c.code]}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {getFieldError('country') && (
                    <p className="text-xs text-red-600 mt-1">{getFieldError('country')}</p>
                  )}
                </div>

                {/* State/Province */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    State / Province
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="California, Ontario, etc."
                    />
                  </div>
                </div>

                {/* Program */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Program <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
                    <select
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      onBlur={() => handleBlur('program')}
                      className={`w-full pl-10 pr-4 py-2.5 border rounded-lg appearance-none bg-white text-sm ${
                        getFieldError('program') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select program</option>
                      {PROGRAM_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90" />
                  </div>
                  {getFieldError('program') && (
                    <p className="text-xs text-red-600 mt-1">{getFieldError('program')}</p>
                  )}
                </div>

                {/* Currency Selection */}
                {!isAuski && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Currency
                    </label>
                    <div className="flex gap-2">
                      {['USD', 'GBP', 'EUR'].map((curr) => (
                        <button
                          key={curr}
                          onClick={() => setCurrency(curr)}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                            currency === curr
                              ? 'bg-indigo-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Amount <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                      {CURRENCY_SYMBOLS[currency]}
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Error message */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  onClick={handlePay}
                  className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  Continue to Payment
                </button>

                {/* Security note */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Security card */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-600" />
                Secure payment
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-indigo-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lock className="w-3 h-3 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">256-bit SSL encryption</p>
                    <p className="text-xs text-gray-500">Military-grade security</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-indigo-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CreditCard className="w-3 h-3 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Multiple payment options</p>
                    <p className="text-xs text-gray-500">PayPal & credit/debit cards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs card */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Available programs
              </h3>
              <div className="space-y-2">
                {PROGRAM_OPTIONS.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => setProgram(option.value)}
                      className={`w-full p-2 rounded-lg text-left flex items-center gap-2 transition-colors ${
                        program === option.value
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-medium">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Next steps */}
            <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
              <h3 className="font-semibold text-gray-900 mb-3">Next steps</h3>
              <div className="space-y-3">
                {[
                  'Complete enrollment form',
                  'Select payment method',
                  'Receive confirmation'
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-indigo-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-indigo-700">{i + 1}</span>
                    </div>
                    <span className="text-xs text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Need help?</h3>
              <p className="text-xs text-gray-600 mb-3">
                Our support team is available to assist you.
              </p>
              <a
                href="mailto:support@qualifylearn.com"
                className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Contact support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enroll;