import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import country data
import countryList from 'react-select-country-list';

function GuidanceModal({ open, onClose, defaultCourse = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    contactNumber: '',
    areaCode: '+1',
    contactDigits: '',
    residenceCountry: '',
    region: '',
    preferredProgram: defaultCourse || '',
    additionalNotes: '',
    termsAccepted: false,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);
  const [availableCountries, setAvailableCountries] = useState([]);
  const [dialCodes, setDialCodes] = useState([]);
  const [showDialCodeSelector, setShowDialCodeSelector] = useState(false);
  const [filteredDialCodes, setFilteredDialCodes] = useState([]);

  // Initialize country data
  useEffect(() => {
    const countryOptions = countryList().getData();
    setAvailableCountries(countryOptions);
    
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
    setDialCodes(codes);
    setFilteredDialCodes(codes);
  }, []);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setFormData((prev) => ({ ...prev, preferredProgram: defaultCourse || prev.preferredProgram }));
      setResponseStatus(null);
    }
  }, [open, defaultCourse]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleAcceptTerms = () => {
    setFormData((prev) => ({ ...prev, termsAccepted: !prev.termsAccepted }));
  };

  const handleSelectDialCode = (value) => {
    setFormData((prev) => ({ ...prev, areaCode: value }));
    setShowDialCodeSelector(false);
  };

  const handleSearchDialCode = (value) => {
    setFormData((prev) => ({ ...prev, areaCode: value }));
    
    if (value) {
      const filtered = dialCodes.filter(item => 
        item.code.includes(value) || 
        item.country.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredDialCodes(filtered);
    } else {
      setFilteredDialCodes(dialCodes);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setResponseStatus(null);
    
    try {
      const fullPhoneNumber = formData.areaCode + ' ' + formData.contactDigits;
      
      const payload = {
        subject: `Academic Consultation Request - ${formData.preferredProgram || 'General Inquiry'}`,
        from_name: 'QualifyLearn Website',
        name: formData.fullName,
        email: formData.emailAddress,
        phone: fullPhoneNumber,
        country_code: formData.areaCode,
        phone_number: formData.contactDigits,
        country: formData.residenceCountry,
        state: formData.region,
        course: formData.preferredProgram,
        message: formData.additionalNotes,
        consent: formData.termsAccepted ? 'Agreed' : 'Not agreed',
        honeypot: '',
        botcheck: '',
        replyto: formData.emailAddress,
        source: 'Guidance Modal',
        modal_type: 'Academic Consultation'
      };

      Object.keys(payload).forEach(key => {
        if (payload[key] === undefined || payload[key] === null) {
          delete payload[key];
        }
      });

      const submission1 = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          access_key: '39abe0c3-8f53-46e1-831e-74da0d049d2d'
        })
      });

      const submission2 = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          access_key: '39abe0c3-8f53-46e1-831e-74da0d049d2d'
        })
      });

      const [response1, response2] = await Promise.all([submission1, submission2]);
      const data1 = await response1.json();
      const data2 = await response2.json();

      if (data1.success || data2.success) {
        setResponseStatus({ 
          type: 'success', 
          title: 'Submission Complete',
          message: 'A specialist will reach out within 24 hours.',
        });
        
        setFormData({ 
          fullName: '', 
          emailAddress: '', 
          contactDigits: '', 
          areaCode: '+1',
          residenceCountry: '', 
          region: '',
          preferredProgram: defaultCourse || '', 
          additionalNotes: '', 
          termsAccepted: false,
        });
      } else {
        setResponseStatus({ 
          type: 'error', 
          title: 'Unable to Process',
          message: data1.message || data2.message || 'Please try again later.',
        });
      }
    } catch (err) {
      setResponseStatus({ 
        type: 'error', 
        title: 'Connection Failed',
        message: 'Please verify your internet connection.',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const programOptions = [
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
            className="fixed inset-0 z-50 bg-black/40"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Section */}
              <div className="border-l-4 border-indigo-600 bg-gradient-to-r from-indigo-50 to-white px-7 py-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-light tracking-tight text-gray-900">
                      Schedule a conversation
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 font-light">
                      Share your details and we'll connect you with the right person
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="h-8 w-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Form Area */}
              <div className="p-7 max-h-[calc(100vh-180px)] overflow-y-auto">
                {responseStatus && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`mb-6 p-4 ${
                      responseStatus.type === 'success' 
                        ? 'bg-teal-50 border-l-4 border-teal-500' 
                        : 'bg-rose-50 border-l-4 border-rose-500'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 ${
                        responseStatus.type === 'success' ? 'text-teal-600' : 'text-rose-600'
                      }`}>
                        {responseStatus.type === 'success' ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {responseStatus.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-0.5">
                          {responseStatus.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Hidden fields */}
                  <input type="hidden" name="access_key" value="20396432-2a2f-49ed-b82d-c598bfaf2238" />
                  <input type="hidden" name="subject" value={`Academic Consultation Request - ${formData.preferredProgram || 'General Inquiry'}`} />
                  <input type="hidden" name="from_name" value="QualifyLearn Website" />
                  <input type="hidden" name="honeypot" value="" />
                  <input type="hidden" name="source" value="Guidance Modal" />

                  {/* Personal Information */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider mb-2">
                      Basic Information
                    </label>
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          disabled={isProcessing}
                          placeholder="Your full name *"
                          className="w-full px-4 py-3 text-sm border border-gray-200 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 outline-none transition-colors disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          required
                          disabled={isProcessing}
                          placeholder="Email address *"
                          className="w-full px-4 py-3 text-sm border border-gray-200 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 outline-none transition-colors disabled:opacity-50"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="relative">
                          <input
                            type="text"
                            name="areaCode"
                            value={formData.areaCode}
                            onChange={(e) => handleSearchDialCode(e.target.value)}
                            onFocus={() => setShowDialCodeSelector(true)}
                            required
                            disabled={isProcessing}
                            placeholder="Code"
                            className="w-full px-4 py-3 text-sm border border-gray-200 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 outline-none transition-colors disabled:opacity-50"
                          />
                          <button
                            type="button"
                            onClick={() => setShowDialCodeSelector(!showDialCodeSelector)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {/* Dial Code Selector */}
                          {showDialCodeSelector && (
                            <div className="absolute z-10 mt-1 w-64 bg-white border border-gray-200 shadow-xl max-h-64 overflow-y-auto">
                              <div className="p-2 border-b border-gray-100">
                                <input
                                  type="text"
                                  placeholder="Search country..."
                                  className="w-full px-3 py-2 text-xs border border-gray-200 focus:outline-none focus:border-indigo-300"
                                  onChange={(e) => handleSearchDialCode(e.target.value)}
                                  autoFocus
                                />
                              </div>
                              {filteredDialCodes.map((item) => (
                                <button
                                  key={`${item.code}-${item.country}`}
                                  type="button"
                                  onClick={() => handleSelectDialCode(item.code)}
                                  className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 text-sm"
                                >
                                  <span className="text-base">{item.flag}</span>
                                  <span className="flex-1 text-gray-700 text-xs">{item.country}</span>
                                  <span className="text-gray-400 text-xs">{item.code}</span>
                                  {formData.areaCode === item.code && (
                                    <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="col-span-2">
                          <input
                            type="tel"
                            name="contactDigits"
                            value={formData.contactDigits}
                            onChange={handleInputChange}
                            required
                            disabled={isProcessing}
                            placeholder="Phone number *"
                            className="w-full px-4 py-3 text-sm border border-gray-200 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 outline-none transition-colors disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="pt-3">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider mb-2">
                      Location
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <select
                          name="residenceCountry"
                          value={formData.residenceCountry}
                          onChange={handleInputChange}
                          required
                          disabled={isProcessing}
                          className="w-full px-4 py-3 text-sm border border-gray-200 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 outline-none appearance-none bg-white disabled:opacity-50"
                        >
                          <option value="">Country *</option>
                          {availableCountries.map((country) => (
                            <option key={country.value} value={country.label}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <input
                          type="text"
                          name="region"
                          value={formData.region}
                          onChange={handleInputChange}
                          required
                          disabled={isProcessing}
                          placeholder="State/Region *"
                          className="w-full px-4 py-3 text-sm border border-gray-200 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 outline-none transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="pt-3">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider mb-2">
                      Program of Interest
                    </label>
                    <select
                      name="preferredProgram"
                      value={formData.preferredProgram}
                      onChange={handleInputChange}
                      required
                      disabled={isProcessing}
                      className="w-full px-4 py-3 text-sm border border-gray-200 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 outline-none appearance-none bg-white disabled:opacity-50"
                    >
                      <option value="">Select a program *</option>
                      {programOptions.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Notes */}
                  <div className="pt-3">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider mb-2">
                      Your Background
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      disabled={isProcessing}
                      placeholder="Briefly describe your educational background and what you're looking to achieve..."
                      className="w-full px-4 py-3 text-sm border border-gray-200 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 outline-none resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Consent */}
                  <div className="pt-4">
                    <div
                      onClick={isProcessing ? null : handleAcceptTerms}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div className={`w-5 h-5 flex-shrink-0 border ${
                        formData.termsAccepted 
                          ? 'bg-indigo-600 border-indigo-600' 
                          : 'border-gray-300 group-hover:border-indigo-400'
                      } transition-colors`}>
                        {formData.termsAccepted && (
                          <svg className="w-5 h-5 text-white p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        I agree to be contacted about educational opportunities. Your information will be kept confidential.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      required
                      className="hidden"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-5">
                    <button
                      type="submit"
                      disabled={isProcessing || !formData.termsAccepted}
                      className={`w-full py-4 px-4 text-sm font-medium transition-all ${
                        isProcessing || !formData.termsAccepted
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      }`}
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Submit Information
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Footer Note */}
              <div className="border-t border-gray-100 px-7 py-4 bg-gray-50">
                <p className="text-xs text-gray-500 text-center">
                  We typically respond within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default GuidanceModal;