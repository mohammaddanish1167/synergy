/**
 * ContactForm Component - Completely Redesigned
 * Premium floating label design with glassmorphism
 * Modern validation states and smooth animations
 */

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send,
  AlertCircle,
  Sparkles
} from 'lucide-react';

const ContactForm = ({ location, fields = ['name', 'email', 'mobile', 'message'], buttonText = "Send Message" }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    message: ''
  });
  const [focused, setFocused] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName) => {
    setFocused(prev => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocused(prev => ({ ...prev, [fieldName]: false }));
    setTouched(prev => ({ ...prev, [fieldName]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const formEl = formRef.current;
      const data = new FormData(formEl);
      data.append('access_key', '20396432-2a2f-49ed-b82d-c598bfaf2238');
      data.append('subject', 'New Message via ContactForm');
      data.append('from_name', 'Synergy Scholars Academia Website');
      data.append('captcha', 'true');
      
      if (form.mobile && !data.get('phone')) {
        data.append('phone', form.mobile);
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });
      const json = await res.json();

      if (json.success) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully!',
          details: 'Our elite team will respond within 2 business hours.'
        });
        formEl.reset();
        setForm({ name: '', email: '', mobile: '', city: '', message: '' });
        setTouched({});
        setFocused({});
      } else {
        setStatus({ 
          type: 'error', 
          message: 'Submission failed',
          details: json.message || 'Please try again or contact us directly.'
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Connection error',
        details: 'Please check your connection and try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const getFieldIcon = (fieldName) => {
    const iconClass = "w-5 h-5";
    switch (fieldName) {
      case 'name': return <User className={iconClass} />;
      case 'email': return <Mail className={iconClass} />;
      case 'mobile': return <Phone className={iconClass} />;
      case 'city': return <MapPin className={iconClass} />;
      case 'message': return <MessageSquare className={iconClass} />;
      default: return <User className={iconClass} />;
    }
  };

  const getFieldLabel = (fieldName) => {
    switch (fieldName) {
      case 'name': return 'Full Name';
      case 'email': return 'Email Address';
      case 'mobile': return 'Phone Number';
      case 'city': return 'City (Optional)';
      case 'message': return 'Your Message';
      default: return fieldName;
    }
  };

  const getFieldPlaceholder = (fieldName) => {
    switch (fieldName) {
      case 'name': return 'John Smith';
      case 'email': return 'john@example.com';
      case 'mobile': return '+1 (555) 123-4567';
      case 'city': return 'New York';
      case 'message': return 'Tell us about your academic goals and how we can help...';
      default: return `Enter ${fieldName}`;
    }
  };

  const isFieldActive = (fieldName) => {
    return focused[fieldName] || (form[fieldName] && form[fieldName].length > 0);
  };

  const isFieldValid = (fieldName, value) => {
    if (fieldName === 'city') return true; // Optional field
    if (fieldName === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return value && value.length > 0;
  };

  const showError = (fieldName) => {
    return touched[fieldName] && !isFieldValid(fieldName, form[fieldName]);
  };

  return (
    <div className="space-y-6">
      {/* Status Message */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={`relative overflow-hidden rounded-2xl p-5 border-2 ${
              status.type === 'success' 
                ? 'bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200 text-emerald-900' 
                : 'bg-gradient-to-r from-rose-50 to-red-50 border-rose-200 text-rose-900'
            } shadow-luxury-lg`}
          >
            <div className="flex items-start gap-4">
              {status.type === 'success' ? (
                <div className="p-2 rounded-full bg-emerald-100">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
              ) : (
                <div className="p-2 rounded-full bg-rose-100">
                  <AlertCircle className="w-6 h-6 text-rose-600" />
                </div>
              )}
              <div className="flex-1">
                <p className="font-bold text-lg mb-1">{status.message}</p>
                {status.details && (
                  <p className="text-sm opacity-90">{status.details}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="access_key" value="20396432-2a2f-49ed-b82d-c598bfaf2238" />
        <input type="hidden" name="subject" value="New Message via ContactForm" />
        <input type="hidden" name="from_name" value="Synergy Scholars Academia Website" />
        <input type="hidden" name="captcha" value="true" />
        <input type="hidden" name="location" value={location} />

        {fields.map((fieldName) => {
          const isActive = isFieldActive(fieldName);
          const hasError = showError(fieldName);
          const isValid = isFieldValid(fieldName, form[fieldName]);
          
          return (
            <motion.div
              key={fieldName}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: fields.indexOf(fieldName) * 0.1 }}
              className="relative"
            >
              {fieldName === 'message' ? (
                // Textarea with Floating Label
                <div className="relative">
                  <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 ${
                    hasError 
                      ? 'border-rose-300 shadow-rose-100' 
                      : isActive 
                        ? 'border-indigo-400 shadow-luxury-lg shadow-indigo-100' 
                        : 'border-gray-200 shadow-luxury'
                  }`}>
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        isActive
                          ? 'top-3 text-xs font-semibold text-indigo-600'
                          : 'top-4 text-base text-gray-500'
                      }`}
                    >
                      {getFieldLabel(fieldName)} {fieldName !== 'city' && <span className="text-rose-500">*</span>}
                    </label>
                    
                    <div className="absolute left-4 top-4 text-gray-400">
                      {getFieldIcon(fieldName)}
                    </div>
                    
                    <textarea
                      name={fieldName}
                      value={form[fieldName]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(fieldName)}
                      onBlur={() => handleBlur(fieldName)}
                      required={fieldName !== 'city'}
                      rows="5"
                      className={`w-full pt-8 pb-4 pl-12 pr-4 bg-transparent text-gray-900 placeholder-transparent focus:outline-none resize-none transition-all duration-300 ${
                        isActive ? 'text-base' : 'text-sm'
                      }`}
                      placeholder={getFieldPlaceholder(fieldName)}
                    />
                    
                    {isActive && isValid && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-4 top-4"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                      </motion.div>
                    )}
                  </div>
                  
                  {hasError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-rose-600 flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {fieldName === 'email' ? 'Please enter a valid email address' : 'This field is required'}
                    </motion.p>
                  )}
                </div>
              ) : (
                // Input with Floating Label
                <div className="relative">
                  <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 ${
                    hasError 
                      ? 'border-rose-300 shadow-rose-100' 
                      : isActive 
                        ? 'border-indigo-400 shadow-luxury-lg shadow-indigo-100' 
                        : 'border-gray-200 shadow-luxury'
                  }`}>
                    <label
                      className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                        isActive
                          ? 'top-2 text-xs font-semibold text-indigo-600'
                          : 'top-4 text-base text-gray-500'
                      }`}
                    >
                      {getFieldLabel(fieldName)} {fieldName !== 'city' && <span className="text-rose-500">*</span>}
                    </label>
                    
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      isActive ? 'text-indigo-600' : 'text-gray-400'
                    }`}>
                      {getFieldIcon(fieldName)}
                    </div>
                    
                    <input
                      type={fieldName === 'email' ? 'email' : 'text'}
                      name={fieldName}
                      value={form[fieldName]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(fieldName)}
                      onBlur={() => handleBlur(fieldName)}
                      required={fieldName !== 'city'}
                      className={`w-full pt-6 pb-2 pl-12 pr-12 bg-transparent text-gray-900 placeholder-transparent focus:outline-none transition-all duration-300 ${
                        isActive ? 'text-base' : 'text-sm'
                      }`}
                      placeholder={getFieldPlaceholder(fieldName)}
                    />
                    
                    {isActive && isValid && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                      </motion.div>
                    )}
                  </div>
                  
                  {hasError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-rose-600 flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {fieldName === 'email' ? 'Please enter a valid email address' : 'This field is required'}
                    </motion.p>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ scale: submitting ? 1 : 1.02, y: submitting ? 0 : -2 }}
          whileTap={{ scale: submitting ? 1 : 0.98 }}
          className="group relative w-full py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-lg rounded-2xl shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <span className="relative z-10 flex items-center justify-center gap-3">
            {submitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>{buttonText}</span>
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </>
            )}
          </span>
        </motion.button>
      </form>

      {/* Privacy Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="pt-6 border-t border-gray-200"
      >
        <p className="text-xs text-gray-600 text-center leading-relaxed">
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy" className="text-indigo-600 hover:text-indigo-700 font-medium underline">
            Privacy Policy
          </a>
          {' '}and consent to being contacted by our elite academic advisors.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactForm;
