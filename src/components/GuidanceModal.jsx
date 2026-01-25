import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiX, 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiBookOpen,
  FiSend,
  FiCheck,
  FiGlobe,
  FiAward,
  FiAlertCircle,
  FiMapPin,
  FiFlag,
  FiChevronDown
} from 'react-icons/fi';

// Import country data
import countryList from 'react-select-country-list';

function GuidanceModal({ open, onClose, defaultCourse = '' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1', // Default to US
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
    // Get all countries
    const countryOptions = countryList().getData();
    setCountries(countryOptions);
    
    // Common country codes
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
    
    // Filter country codes based on input
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
      // Combine country code and phone number
      const fullPhone = form.countryCode + ' ' + form.phoneNumber;
      
      // Prepare base data
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

      // Remove undefined/null values
      Object.keys(baseData).forEach(key => {
        if (baseData[key] === undefined || baseData[key] === null) {
          delete baseData[key];
        }
      });

      // Create promises for both API submissions
      const submission1 = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...baseData,
          access_key: '20396432-2a2f-49ed-b82d-c598bfaf2238'
        })
      });

      const submission2 = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...baseData,
          access_key: '20396432-2a2f-49ed-b82d-c598bfaf2238'
        })
      });

      // Send both requests in parallel
      const [res1, res2] = await Promise.all([submission1, submission2]);
      const json1 = await res1.json();
      const json2 = await res2.json();

      // Check if at least one submission succeeded
      if (json1.success || json2.success) {
        setStatus({ 
          type: 'success', 
          title: 'Success!',
          message: 'Our advisor will contact you within 24 hours. You will also receive a confirmation email.',
        });
        
        // Reset form
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
          message: json1.message || json2.message || 'Please try again or contact us directly.',
        });
        console.error('Web3Forms Error 1:', json1);
        console.error('Web3Forms Error 2:', json2);
      }
    } catch (err) {
      setStatus({ 
        type: 'error', 
        title: 'Connection Error',
        message: 'Unable to submit. Please check your internet connection.',
      });
      console.error('Submission Error:', err);
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

  // Color mapping for course tags only
  const getCourseColor = (course) => {
    switch(course) {
      case 'Honorary Doctorate':
        return { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' };
      case 'Honorary Professorship':
        return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
      case 'PhD Program':
        return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' };
      case 'MBA (Master)':
        return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' };
      case 'DBA Program':
        return { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' };
      case 'Executive Education':
        return { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' };
      default:
        return { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                        <FiAward className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Academic Consultation</h3>
                        <p className="text-blue-100 text-sm mt-1">Get personalized guidance from our experts</p>
                      </div>
                    </div>
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg text-white hover:bg-white/20 backdrop-blur-sm transition-all"
                      aria-label="Close"
                    >
                      <FiX className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${status.type === 'success' 
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800' 
                      : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200 text-red-800'} 
                      border rounded-xl p-4 mb-6 shadow-sm`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${status.type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                        {status.type === 'success' ? (
                          <FiCheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <FiAlertCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{status.title}</h4>
                        <p className="text-sm opacity-90">{status.message}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Web3Forms hidden fields */}
                  <input type="hidden" name="access_key" value="20396432-2a2f-49ed-b82d-c598bfaf2238" />
                  <input type="hidden" name="subject" value={`Academic Consultation Request - ${form.course || 'General Inquiry'}`} />
                  <input type="hidden" name="from_name" value="QualifyLearn Website" />
                  <input type="hidden" name="honeypot" value="" />
                  <input type="hidden" name="source" value="Guidance Modal" />

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                          name="name" 
                          value={form.name} 
                          onChange={handleChange} 
                          required 
                          disabled={submitting}
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                          type="email" 
                          name="email" 
                          value={form.email} 
                          onChange={handleChange} 
                          required 
                          disabled={submitting}
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone Number with Country Code */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Country Code - Custom input with dropdown */}
                      <div className="relative">
                        <div className="relative group">
                          <FiFlag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors z-10" />
                          <input
                            type="text"
                            name="countryCode"
                            value={form.countryCode}
                            onChange={(e) => handleCountryCodeInput(e.target.value)}
                            onFocus={() => setShowCountryCodeDropdown(true)}
                            required
                            disabled={submitting}
                            className="w-full pl-11 pr-10 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="+1"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCountryCodeDropdown(!showCountryCodeDropdown)}
                            disabled={submitting}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                          >
                            <FiChevronDown className={`w-5 h-5 transition-transform ${showCountryCodeDropdown ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        
                        {/* Dropdown for country codes */}
                        {showCountryCodeDropdown && (
                          <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                            <div className="p-2">
                              <input
                                type="text"
                                placeholder="Search country or code..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => handleCountryCodeInput(e.target.value)}
                                autoFocus
                              />
                            </div>
                            {filteredCountryCodes.length > 0 ? (
                              filteredCountryCodes.map((item) => (
                                <button
                                  key={`${item.code}-${item.country}`}
                                  type="button"
                                  onClick={() => handleCountryCodeChange(item.code)}
                                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                                >
                                  <span className="text-lg">{item.flag}</span>
                                  <div className="flex-1">
                                    <div className="font-medium text-gray-900">{item.country}</div>
                                    <div className="text-sm text-gray-500">{item.code}</div>
                                  </div>
                                  {form.countryCode === item.code && (
                                    <FiCheck className="w-5 h-5 text-blue-600" />
                                  )}
                                </button>
                              ))
                            ) : (
                              <div className="px-4 py-3 text-center text-gray-500">
                                No country codes found
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {/* Phone Number */}
                      <div className="relative group md:col-span-2">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                          name="phoneNumber" 
                          value={form.phoneNumber} 
                          onChange={handleChange} 
                          required
                          disabled={submitting}
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Country and State */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <FiGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <select 
                          name="country" 
                          value={form.country} 
                          onChange={handleChange} 
                          required
                          disabled={submitting}
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="" className="text-gray-400">Select your country</option>
                          {countries.map((country) => (
                            <option key={country.value} value={country.label} className="text-gray-800 bg-white">
                              {country.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        State/Province <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                          name="state" 
                          value={form.state} 
                          onChange={handleChange} 
                          required
                          disabled={submitting}
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="California / Maharashtra / etc."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      Program Interest <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <FiBookOpen className="absolute left-3 top-4 transform text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                      <select 
                        name="course" 
                        value={form.course} 
                        onChange={handleChange}
                        required
                        disabled={submitting}
                        className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="" className="text-gray-400">Select a program</option>
                        {courseOptions.map((course) => (
                          <option 
                            key={course} 
                            value={course}
                            className="text-gray-900 bg-white"
                          >
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Color-coded program tags - SHOW ONLY AFTER SELECTION */}
                    {form.course && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-2 mt-2"
                      >
                        <div 
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${getCourseColor(form.course).bg} ${getCourseColor(form.course).text} ${getCourseColor(form.course).border}`}
                        >
                          {form.course}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      Your Academic Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      required 
                      rows="4"
                      disabled={submitting}
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none resize-none transition-all bg-white hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your educational background, career aspirations, and what you hope to achieve..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Provide details for personalized guidance
                    </p>
                  </div>

                  {/* Consent */}
                  <div 
                    className={`p-5 rounded-xl border transition-all duration-200 ${submitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-blue-200'} ${form.consent ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100' : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'}`}
                    onClick={submitting ? null : handleConsentClick}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${form.consent ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'}`}
                      >
                        {form.consent && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                          >
                            <FiCheck className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800 mb-2">
                          Privacy & Communication Consent <span className="text-red-500">*</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          I agree to receive personalized academic guidance from QualifyLearn. 
                          Your information is protected under our Privacy Policy.
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
                      disabled={submitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={submitting || !form.consent}
                    whileHover={submitting || !form.consent ? {} : { scale: 1.02, y: -2 }}
                    whileTap={submitting || !form.consent ? {} : { scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg
                      ${submitting || !form.consent 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white hover:shadow-xl hover:shadow-blue-500/30'
                      }`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Your Application...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Submit Application for Expert Guidance
                      </>
                    )}
                  </motion.button>
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