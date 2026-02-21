import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  X, 
  User, 
  Mail, 
  Phone, 
  BookOpen,
  Send,
  Check,
  Globe,
  Award,
  AlertCircle,
  MapPin,
  Flag,
  ChevronDown
} from 'lucide-react';

// Import country data
import countryList from 'react-select-country-list';

function GuidanceModal({ open, onClose, defaultCourse = '' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    phoneNumber: '',
    country: '',
    state: '',
    course: defaultCourse || '',
    message: '',
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [countries, setCountries] = useState([]);
  const [countryCodes, setCountryCodes] = useState([]);
  const [showCountryCodeDropdown, setShowCountryCodeDropdown] = useState(false);
  const [filteredCountryCodes, setFilteredCountryCodes] = useState([]);

  // Initialize country data
  useEffect(() => {
    const countryOptions = countryList().getData();
    setCountries(countryOptions);
    
    const codes = [
      { code: '+1', country: 'United States', flag: '🇺🇸' },
      { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
      { code: '+91', country: 'India', flag: '🇮🇳' },
      { code: '+61', country: 'Australia', flag: '🇦🇺' },
      { code: '+49', country: 'Germany', flag: '🇩🇪' },
      { code: '+33', country: 'France', flag: '🇫🇷' },
      { code: '+86', country: 'China', flag: '🇨🇳' },
      { code: '+81', country: 'Japan', flag: '🇯🇵' },
      { code: '+82', country: 'South Korea', flag: '🇰🇷' },
      { code: '+971', country: 'United Arab Emirates', flag: '🇦🇪' },
      { code: '+65', country: 'Singapore', flag: '🇸🇬' },
      { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
      { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
      { code: '+27', country: 'South Africa', flag: '🇿🇦' },
      { code: '+55', country: 'Brazil', flag: '🇧🇷' },
      { code: '+34', country: 'Spain', flag: '🇪🇸' },
      { code: '+39', country: 'Italy', flag: '🇮🇹' },
      { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
      { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
      { code: '+46', country: 'Sweden', flag: '🇸🇪' },
      { code: '+47', country: 'Norway', flag: '🇳🇴' },
      { code: '+45', country: 'Denmark', flag: '🇩🇰' },
      { code: '+358', country: 'Finland', flag: '🇫🇮' },
      { code: '+7', country: 'Russia', flag: '🇷🇺' },
      { code: '+20', country: 'Egypt', flag: '🇪🇬' },
      { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
      { code: '+254', country: 'Kenya', flag: '🇰🇪' },
      { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
      { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
      { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
      { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
      { code: '+63', country: 'Philippines', flag: '🇵🇭' },
      { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
      { code: '+66', country: 'Thailand', flag: '🇹🇭' },
      { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
      { code: '+52', country: 'Mexico', flag: '🇲🇽' },
      { code: '+1', country: 'Canada', flag: '🇨🇦' },
      { code: '+90', country: 'Turkey', flag: '🇹🇷' },
      { code: '+39', country: 'Italy', flag: '🇮🇹' },
      { code: '+34', country: 'Spain', flag: '🇪🇸' },
      { code: '+351', country: 'Portugal', flag: '🇵🇹' },
      { code: '+48', country: 'Poland', flag: '🇵🇱' },
      { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
      { code: '+36', country: 'Hungary', flag: '🇭🇺' },
      { code: '+40', country: 'Romania', flag: '🇷🇴' },
      { code: '+30', country: 'Greece', flag: '🇬🇷' },
    ];
    setCountryCodes(codes);
    setFilteredCountryCodes(codes);
  }, []);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', onEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setForm((f) => ({ ...f, course: defaultCourse || f.course }));
      setStatus(null);
    }
  }, [open, defaultCourse]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleConsentClick = () => {
    setForm((f) => ({ ...f, consent: !f.consent }));
  };

  const handleCountryCodeChange = (value) => {
    setForm((f) => ({ ...f, countryCode: value }));
    setShowCountryCodeDropdown(false);
  };

  const handleCountryCodeInput = (value) => {
    setForm((f) => ({ ...f, countryCode: value }));
    
    if (value) {
      const filtered = countryCodes.filter(item => 
        item.code.includes(value) || 
        item.country.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCountryCodes(filtered);
    } else {
      setFilteredCountryCodes(countryCodes);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    
    try {
      const fullPhone = form.countryCode + ' ' + form.phoneNumber;
      
      const baseData = {
        subject: `Academic Consultation Request - ${form.course || 'General Inquiry'}`,
        from_name: 'QualifyLearn Website',
        name: form.name,
        email: form.email,
        phone: fullPhone,
        country_code: form.countryCode,
        phone_number: form.phoneNumber,
        country: form.country,
        state: form.state,
        course: form.course,
        message: form.message,
        consent: form.consent ? 'Agreed' : 'Not agreed',
        honeypot: '',
        botcheck: '',
        replyto: form.email,
        source: 'Guidance Modal',
        modal_type: 'Academic Consultation'
      };

      Object.keys(baseData).forEach(key => {
        if (baseData[key] === undefined || baseData[key] === null) {
          delete baseData[key];
        }
      });

      const submission1 = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...baseData,
          access_key: '39abe0c3-8f53-46e1-831e-74da0d049d2d'
        })
      });

      const submission2 = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...baseData,
          access_key: '39abe0c3-8f53-46e1-831e-74da0d049d2d'
        })
      });

      const [res1, res2] = await Promise.all([submission1, submission2]);
      const json1 = await res1.json();
      const json2 = await res2.json();

      if (json1.success || json2.success) {
        setStatus({ 
          type: 'success', 
          title: 'Request Received',
          message: 'Our advisor will contact you within 24 hours.',
        });
        
        setForm({ 
          name: '', 
          email: '', 
          phoneNumber: '', 
          countryCode: '+1',
          country: '', 
          state: '',
          course: defaultCourse || '', 
          message: '', 
          consent: false,
        });
      } else {
        setStatus({ 
          type: 'error', 
          title: 'Submission Failed',
          message: json1.message || json2.message || 'Please try again.',
        });
      }
    } catch (err) {
      setStatus({ 
        type: 'error', 
        title: 'Connection Error',
        message: 'Please check your internet connection.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const courseOptions = [
    'Honorary Doctorate',
    'Honorary Professorship',
    'PhD Program',
    'MBA (Master)',
    'DBA Program',
    'Executive Education',
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="border-b border-slate-200 px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Academic Consultation
                    </h3>
                    <p className="text-sm text-slate-500">
                      Get personalized guidance from our experts
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-xl border ${
                      status.type === 'success' 
                        ? 'bg-emerald-50 border-emerald-200' 
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 ${
                        status.type === 'success' ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {status.type === 'success' ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <AlertCircle className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">
                          {status.title}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {status.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Web3Forms hidden fields */}
                  <input type="hidden" name="access_key" value="20396432-2a2f-49ed-b82d-c598bfaf2238" />
                  <input type="hidden" name="subject" value={`Academic Consultation Request - ${form.course || 'General Inquiry'}`} />
                  <input type="hidden" name="from_name" value="QualifyLearn Website" />
                  <input type="hidden" name="honeypot" value="" />
                  <input type="hidden" name="source" value="Guidance Modal" />

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 disabled:opacity-50"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-200 disabled:opacity-50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {/* Country Code */}
                      <div className="relative">
                        <div className="relative">
                          <Flag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            name="countryCode"
                            value={form.countryCode}
                            onChange={(e) => handleCountryCodeInput(e.target.value)}
                            onFocus={() => setShowCountryCodeDropdown(true)}
                            required
                            disabled={submitting}
                            className="w-full pl-9 pr-8 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-slate-300 disabled:opacity-50"
                            placeholder="+1"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCountryCodeDropdown(!showCountryCodeDropdown)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Dropdown */}
                        {showCountryCodeDropdown && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            <div className="p-2 border-b border-slate-100">
                              <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded"
                                onChange={(e) => handleCountryCodeInput(e.target.value)}
                                autoFocus
                              />
                            </div>
                            {filteredCountryCodes.map((item) => (
                              <button
                                key={`${item.code}-${item.country}`}
                                type="button"
                                onClick={() => handleCountryCodeChange(item.code)}
                                className="w-full px-3 py-2 text-left hover:bg-slate-50 flex items-center gap-2 text-sm"
                              >
                                <span>{item.flag}</span>
                                <span className="flex-1 text-slate-600">{item.country}</span>
                                <span className="text-slate-400">{item.code}</span>
                                {form.countryCode === item.code && (
                                  <Check className="w-3 h-3 text-slate-600" />
                                )}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Phone Number Input */}
                      <div className="md:col-span-2">
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            required
                            disabled={submitting}
                            className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-slate-300 disabled:opacity-50"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Country and State */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <select
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-slate-300 appearance-none bg-white disabled:opacity-50"
                        >
                          <option value="">Select country</option>
                          {countries.map((country) => (
                            <option key={country.value} value={country.label}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        State/Province <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                          className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-slate-300 disabled:opacity-50"
                          placeholder="California / Maharashtra"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Program Interest <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-slate-300 appearance-none bg-white disabled:opacity-50"
                      >
                        <option value="">Select a program</option>
                        {courseOptions.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Your Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      disabled={submitting}
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-slate-300 resize-none disabled:opacity-50"
                      placeholder="Tell us about your educational background and career goals..."
                    />
                  </div>

                  {/* Consent */}
                  <div
                    onClick={submitting ? null : handleConsentClick}
                    className={`p-4 rounded-lg border ${
                      form.consent 
                        ? 'bg-slate-50 border-slate-300' 
                        : 'border-slate-200 hover:border-slate-300'
                    } transition-colors cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                        form.consent 
                          ? 'bg-slate-900 border-slate-900' 
                          : 'border-slate-300'
                      }`}>
                        {form.consent && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">
                          I agree to receive personalized academic guidance. Your information is protected.
                        </p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                      className="hidden"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting || !form.consent}
                    className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      submitting || !form.consent
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {submitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit Request
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default GuidanceModal;