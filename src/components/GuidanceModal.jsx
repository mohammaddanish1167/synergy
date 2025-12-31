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
  FiAward
} from 'react-icons/fi';

function GuidanceModal({ open, onClose, defaultCourse = '' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    course: defaultCourse || '',
    message: '',
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus({ 
        type: 'success', 
        title: 'Success!',
        message: 'Our advisor will contact you within 24 hours.',
      });
      setForm({ 
        name: '', 
        email: '', 
        phone: '', 
        country: '',
        course: defaultCourse || '', 
        message: '', 
        consent: false,
      });
    } catch (err) {
      setStatus({ 
        type: 'error', 
        title: 'Submission Failed',
        message: 'Please try again or contact us directly.',
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

  const countryOptions = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'India',
    'United Arab Emirates',
    'Singapore',
    'Other'
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
                        <FiCheckCircle className={`w-5 h-5 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{status.title}</h4>
                        <p className="text-sm opacity-90">{status.message}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900"
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
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Country */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        Phone Number
                      </label>
                      <div className="relative group">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                          name="phone" 
                          value={form.phone} 
                          onChange={handleChange} 
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
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
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900 appearance-none cursor-pointer"
                        >
                          <option value="" className="text-gray-400">Select your country</option>
                          {countryOptions.map((country) => (
                            <option key={country} value={country} className="text-gray-800 bg-white">
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">
                      Program Interest
                    </label>
                    <div className="relative group">
                      <FiBookOpen className="absolute left-3 top-4 transform text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                      <select 
                        name="course" 
                        value={form.course} 
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none transition-all bg-white hover:border-gray-300 text-gray-900 appearance-none cursor-pointer"
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
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100 outline-none resize-none transition-all bg-white hover:border-gray-300 text-gray-900"
                      placeholder="Tell us about your educational background, career aspirations, and what you hope to achieve..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Provide details for personalized guidance
                    </p>
                  </div>

                  {/* Consent */}
                  <div 
                    className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 cursor-pointer hover:border-blue-200 transition-all duration-200"
                    onClick={handleConsentClick}
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