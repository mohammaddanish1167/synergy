import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiX, 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiBookOpen, 
  FiMessageSquare,
  FiSend,
  FiLock,
  FiShield,
  FiClock,
  FiAward,
  FiStar
} from 'react-icons/fi';

function GuidanceModal({ open, onClose, defaultCourse = '' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus({ 
        type: 'success', 
        title: 'Application Submitted Successfully!',
        message: 'Our academic advisor will contact you within 24 hours.',
        details: [
          '✓ Detailed program guide emailed',
          '✓ Personalized consultation scheduled',
          '✓ Financial aid options reviewed'
        ]
      });
      setForm({ 
        name: '', 
        email: '', 
        phone: '', 
        course: defaultCourse || '', 
        message: '', 
        consent: false,
      });
    } catch (err) {
      setStatus({ 
        type: 'error', 
        title: 'Submission Failed',
        message: 'Please try again or contact us directly.',
        details: ['Direct contact: info@qualifylearn.com', 'Phone: +1 (555) 123-4567']
      });
    } finally {
      setSubmitting(false);
    }
  };

  const courseOptions = [
    'Honorary Doctorate',
    'Honorary Professorship',
    'PhD Programs',
    'MBA (Master of Business Administration)',
    'DBA (Doctor of Business Administration)',
    'Executive Education',
    'Custom Academic Program',
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Enhanced Backdrop with blur */}
          <motion.div
            className="fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-gray-900/40 backdrop-blur-lg" />
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            
            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30,
                mass: 1
              }}
              className="relative w-full max-w-4xl bg-gradient-to-br from-white to-gray-50 text-gray-900 rounded-3xl shadow-2xl border border-gray-200/80 overflow-hidden backdrop-blur-xl"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 60px rgba(59, 130, 246, 0.1)'
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-400/30 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-400/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-400/30 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400/30 rounded-br-3xl" />

              {/* Header with gradient */}
              <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 p-8 text-white overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
                
                {/* Floating elements in header */}
                <motion.div
                  className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg"
                          animate={{ rotateY: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <FiAward className="w-7 h-7 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-3xl font-bold tracking-tight">Premium Academic Guidance</h3>
                          <p className="text-blue-200 text-base mt-2">Schedule Your Personalized Consultation Today</p>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                      aria-label="Close"
                    >
                      <FiX className="w-6 h-6" />
                    </motion.button>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[
                      { icon: FiStar, label: 'Expert Advisors', value: '50+' },
                      { icon: FiClock, label: 'Response Time', value: '< 24h' },
                      { icon: FiShield, label: 'Success Rate', value: '98%' }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                      >
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <stat.icon className="w-4 h-4 text-blue-300" />
                          <div className="text-sm text-blue-200">{stat.label}</div>
                        </div>
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8 max-h-[80vh] overflow-y-auto">
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${status.type === 'success' 
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800' 
                      : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200 text-red-800'} 
                      border-2 rounded-2xl p-6 mb-8 shadow-lg`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`${status.type === 'success' ? 'bg-green-100' : 'bg-red-100'} 
                          w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FiCheckCircle className={`w-6 h-6 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">{status.title}</h4>
                        <p className="mb-3">{status.message}</p>
                        {status.details && (
                          <ul className="space-y-1">
                            {status.details.map((detail, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <FiUser className="w-4 h-4 text-blue-600" />
                        Full Name *
                      </label>
                      <input 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 group-hover:border-blue-300"
                        placeholder="Johnathan Smith"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <FiMail className="w-4 h-4 text-blue-600" />
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        value={form.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 group-hover:border-blue-300"
                        placeholder="john.smith@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Course */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <FiPhone className="w-4 h-4 text-blue-600" />
                        Phone Number
                      </label>
                      <input 
                        name="phone" 
                        value={form.phone} 
                        onChange={handleChange} 
                        className="w-full rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 group-hover:border-blue-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <FiBookOpen className="w-4 h-4 text-blue-600" />
                        Program of Interest
                      </label>
                      <select 
                        name="course" 
                        value={form.course} 
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-gray-200 bg-white text-gray-900 px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 group-hover:border-blue-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="text-gray-400">Select your preferred program</option>
                        {courseOptions.map((course) => (
                          <option key={course} value={course} className="py-2">{course}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <FiMessageSquare className="w-4 h-4 text-blue-600" />
                      Your Academic Goals *
                    </label>
                    <textarea 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      required 
                      rows="4"
                      className="w-full rounded-xl border-2 border-gray-200 bg-white text-gray-900 placeholder-gray-400 px-5 py-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none resize-none transition-all duration-200 group-hover:border-blue-300"
                      placeholder="Tell us about your educational background, career aspirations, and what you hope to achieve through our programs..."
                    />
                    <div className="text-sm text-gray-500 mt-2">
                      Provide details for personalized guidance
                    </div>
                  </div>

                  {/* Consent */}
                  <motion.div 
                    className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-1 ${form.consent ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}
                        whileTap={{ scale: 0.9 }}
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
                      </motion.div>
                      <div>
                        <label htmlFor="consent" className="block text-sm font-semibold text-gray-800 mb-2 cursor-pointer">
                          Privacy & Communication Consent *
                        </label>
                        <p className="text-gray-600 text-sm">
                          I agree to receive personalized academic guidance from QualifyLearn. 
                          Your information is protected under our comprehensive Privacy Policy 
                          and will only be used to provide you with the best educational consultation.
                        </p>
                      </div>
                    </div>
                    <input 
                      id="consent" 
                      type="checkbox" 
                      name="consent" 
                      checked={form.consent} 
                      onChange={handleChange} 
                      required 
                      className="hidden"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={submitting || !form.consent}
                    whileHover={submitting || !form.consent ? {} : { scale: 1.02, y: -2 }}
                    whileTap={submitting || !form.consent ? {} : { scale: 0.98 }}
                    className={`w-full rounded-xl py-4 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl
                      ${submitting || !form.consent 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white hover:shadow-2xl hover:shadow-blue-500/30'
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

                {/* Trust Indicators */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">Why Choose Our Guidance?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: FiShield,
                        title: "100% Confidential",
                        desc: "Your information is encrypted and never shared with third parties",
                        color: "from-blue-500 to-cyan-500"
                      },
                      {
                        icon: FiClock,
                        title: "24-Hour Response",
                        desc: "Guaranteed personalized reply within one business day",
                        color: "from-emerald-500 to-green-500"
                      },
                      {
                        icon: FiAward,
                        title: "No Obligation",
                        desc: "Free comprehensive consultation with expert advisors",
                        color: "from-purple-500 to-pink-500"
                      }
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                      >
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mx-auto mb-4 flex items-center justify-center`}>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <h5 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h5>
                        <p className="text-gray-600 text-sm">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// Need to add FiCheck import
import { FiCheck } from 'react-icons/fi';

export default GuidanceModal;