import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUser, FiMail, FiPhone, FiMapPin, FiMessageSquare } from 'react-icons/fi';

const ContactForm = ({ location, fields = ['name', 'email', 'mobile', 'message'], buttonText = "Send Message" }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully!',
        details: 'Our team will get back to you within 2 business hours.'
      });
      
      // Reset form
      setForm({
        name: '',
        email: '',
        mobile: '',
        city: '',
        message: ''
      });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message.',
        details: 'Please try again or contact us directly.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const getFieldIcon = (fieldName) => {
    switch (fieldName) {
      case 'name': return <FiUser className="w-4 h-4" />;
      case 'email': return <FiMail className="w-4 h-4" />;
      case 'mobile': return <FiPhone className="w-4 h-4" />;
      case 'city': return <FiMapPin className="w-4 h-4" />;
      case 'message': return <FiMessageSquare className="w-4 h-4" />;
      default: return <FiUser className="w-4 h-4" />;
    }
  };

  const getFieldLabel = (fieldName) => {
    switch (fieldName) {
      case 'name': return 'Full Name';
      case 'email': return 'Email Address';
      case 'mobile': return 'Phone Number';
      case 'city': return 'City';
      case 'message': return 'Your Message';
      default: return fieldName;
    }
  };

  const getFieldPlaceholder = (fieldName) => {
    switch (fieldName) {
      case 'name': return 'Enter your full name';
      case 'email': return 'you@example.com';
      case 'mobile': return '+1 (123) 456-7890';
      case 'city': return 'Your city';
      case 'message': return 'Tell us how we can help you...';
      default: return `Enter ${fieldName}`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Status Message */}
      {status && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'} border`}
        >
          <div className="flex items-start gap-3">
            <FiCheckCircle className={`w-5 h-5 mt-0.5 ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`} />
            <div>
              <p className="font-medium">{status.message}</p>
              {status.details && (
                <p className="text-sm mt-1 opacity-90">{status.details}</p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((fieldName) => (
          <div key={fieldName}>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              {getFieldIcon(fieldName)}
              {getFieldLabel(fieldName)} {fieldName !== 'city' && '*'}
            </label>
            
            {fieldName === 'message' ? (
              <textarea
                name={fieldName}
                value={form[fieldName]}
                onChange={handleChange}
                required={fieldName !== 'city'}
                rows="4"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                placeholder={getFieldPlaceholder(fieldName)}
              />
            ) : (
              <input
                type={fieldName === 'email' ? 'email' : 'text'}
                name={fieldName}
                value={form[fieldName]}
                onChange={handleChange}
                required={fieldName !== 'city'}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                placeholder={getFieldPlaceholder(fieldName)}
              />
            )}
          </div>
        ))}

        {/* Hidden Location Field */}
        <input type="hidden" name="location" value={location} />

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
        >
          {submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FiMail className="w-4 h-4" />
              {buttonText}
            </>
          )}
        </motion.button>
      </form>

      {/* Privacy Note */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-600 text-center">
          By submitting this form, you agree to our Privacy Policy and consent to being contacted by our team.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;