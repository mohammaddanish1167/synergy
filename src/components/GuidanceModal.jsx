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
  FiLock
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
      // Simulate API call
      await new Promise((r) => setTimeout(r, 1500));
      setStatus({ 
        type: 'success', 
        message: 'Success! Our academic advisor will contact you within 24 hours.',
        details: 'We\'ll send a detailed program guide and schedule a personalized consultation.'
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
        message: 'Submission failed. Please try again.',
        details: 'You can also contact us directly at info@qualifylearn.com'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const courseOptions = [
    'Honorary Doctorate',
    'Honorary Professorship',
    'PhD',
    'MBA (Master)',
    'DBA',
    'Engineering Programs',
    'Computer Science',
    'Medical Sciences',
    'Law Programs',
    'Custom Program',
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30,
              mass: 1
            }}
            className="relative z-[101] w-full max-w-2xl bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Premium Academic Guidance</h3>
                  <p className="text-blue-100 text-sm mt-1">Book your personalized consultation with our experts</p>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <FiX className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${status.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'} border rounded-xl p-4 mb-6`}
                >
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className={`w-5 h-5 mt-0.5 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`} />
                    <div>
                      <div className="font-bold">{status.message}</div>
                      {status.details && (
                        <p className="text-sm opacity-90 mt-1">{status.details}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Course */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleChange} 
                      className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Program of Interest
                    </label>
                    <select 
                      name="course" 
                      value={form.course} 
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Select a program</option>
                      {courseOptions.map((course) => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Additional Information *
                  </label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    required 
                    rows="4"
                    className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                    placeholder="Tell us about your academic background, goals, and requirements..."
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <input 
                    id="consent" 
                    type="checkbox" 
                    name="consent" 
                    checked={form.consent} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 w-5 h-5 text-blue-600 bg-white border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-700">
                    <span className="font-semibold">Privacy & Communication Consent</span>
                    <p className="text-slate-600 text-sm mt-1">
                      I consent to receiving personalized academic guidance from QualifyLearn. Your data is protected under our Privacy Policy.
                    </p>
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submitting || !form.consent}
                  whileHover={{ scale: submitting || !form.consent ? 1 : 1.02 }}
                  whileTap={{ scale: submitting || !form.consent ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </motion.button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-lg bg-slate-50">
                    <div className="font-semibold text-slate-900">100% Confidential</div>
                    <div className="text-sm text-slate-600">Your data is secure</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <div className="font-semibold text-slate-900">24-Hour Response</div>
                    <div className="text-sm text-slate-600">Guaranteed reply time</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50">
                    <div className="font-semibold text-slate-900">No Obligation</div>
                    <div className="text-sm text-slate-600">Free consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GuidanceModal;