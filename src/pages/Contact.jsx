import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiClock, FiShield, FiUsers, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    course: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // Prepare the data object for Web3Forms
      const formDataObject = {
        access_key: '20396432-2a2f-49ed-b82d-c598bfaf2238',
        subject: 'New Contact Message from QualifyLearn',
        from_name: 'QualifyLearn Website',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        course: formData.course,
        message: formData.message,
        consent: formData.consent ? 'Agreed' : 'Not agreed',
        honeypot: '',
        botcheck: '',
        replyto: formData.email,
      };

      // Remove empty fields that might cause issues
      Object.keys(formDataObject).forEach(key => {
        if (formDataObject[key] === undefined || formDataObject[key] === null) {
          delete formDataObject[key];
        }
      });

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataObject)
      });
      
      const json = await res.json();

      if (json.success) {
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully! We will get back to you shortly.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          course: '',
          message: '',
          consent: false
        });
        
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(json.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred while submitting the form. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactInfoCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-10 from-blue-900/20 via-transparent to-purple-900/20" />

      <div className="relative z-10 space-y-5">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600/30 to-blue-800/30 shadow-lg shadow-blue-500/20"
            >
              <FiGlobe className="w-6 h-6 text-blue-400" />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-white">Global Headquarters</h3>
              <p className="text-sm text-blue-400/80 font-medium">QUALIFY LEARN</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50">
              <FiMail className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Email</p>
              <motion.a
                href="mailto:support@qualifylearn.com"
                whileHover={{ x: 2 }}
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer mb-1"
              >
                support@qualifylearn.com
              </motion.a>
              <motion.a
                href="mailto:info@qualifylearn.com"
                whileHover={{ x: 2 }}
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                info@qualifylearn.com
              </motion.a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50">
              <FiPhone className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Phone</p>
              <motion.a
                href="tel:+19177304763"
                whileHover={{ x: 2 }}
                className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                +1 9177304763
              </motion.a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50">
              <FiMapPin className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Addresses</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-2">
                124 City Road, London, United Kingdom, EC1V 2NX
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                30 N Gould St Ste R Sheridan WY 82801 USA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-gray-800/50">
            <FiClock className="w-4 h-4 text-blue-400/70" />
            <span className="text-xs text-gray-400">24/7 Global Support</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4`}
        >
          <div className={`p-4 rounded-lg shadow-lg backdrop-blur-lg border ${
            submitStatus === 'success' 
              ? 'bg-gradient-to-r from-green-900/40 to-emerald-900/20 border-green-700/30' 
              : 'bg-gradient-to-r from-red-900/40 to-rose-900/20 border-red-700/30'
          }`}>
            <div className="flex items-center gap-3">
              {submitStatus === 'success' ? (
                <FiCheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              ) : (
                <FiAlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              )}
              <div>
                <p className={`font-medium ${
                  submitStatus === 'success' ? 'text-green-200' : 'text-red-200'
                }`}>
                  {submitStatus === 'success' ? 'Success!' : 'Error!'}
                </p>
                <p className="text-sm text-white mt-1">{submitMessage}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-900/10 to-purple-900/10 blur-3xl"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 5}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm 
                       rounded-full border border-blue-700/30 mb-6"
            >
              <FiGlobe className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium tracking-wide">GLOBAL REACH</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Contact <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Connect With Our <span className="text-white font-semibold">Global Team</span> of Education Specialists
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: FiUsers, value: '10,000+', label: 'Students Helped' },
              { icon: FiClock, value: '24/7', label: 'Support' },
              { icon: FiShield, value: '100%', label: 'Secure' },
              { icon: FiGlobe, value: '50+', label: 'Countries' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-800/20 flex items-center justify-center shadow-lg shadow-blue-500/10">
                    <stat.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="px-4 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-white mb-3"
              >
                Our Contact Details
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg"
              >
                Reach out to our global support team
              </motion.p>
            </div>
            
            <ContactInfoCard />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="mt-6 bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-lg rounded-xl border border-gray-800/50 p-6 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white mb-5">Connect With Us</h3>
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://www.linkedin.com/company/104800214/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-14 h-14 rounded-xl flex items-center justify-center 
                           bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-7 h-7" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    LinkedIn
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/p/QualifyLearn-61566245874078/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-14 h-14 rounded-xl flex items-center justify-center 
                           bg-gradient-to-br from-blue-700 to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-7 h-7" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Facebook
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/qualifylearn/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-14 h-14 rounded-xl flex items-center justify-center 
                           bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-7 h-7" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Instagram
                  </span>
                </motion.a>
              </div>
              
              <p className="text-center text-gray-400 text-sm mt-8">
                Follow us for updates, announcements, and educational content
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
              className="sticky top-8"
            >
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-lg rounded-2xl border border-gray-800/50 p-6 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our dedicated team responds within 2 hours during business days
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your full name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your email"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your phone number"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your country"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Course Interested In
                    </label>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 
                               focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300
                               disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Which course are you interested in?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 
                               focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300
                               disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your inquiry..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start space-x-3"
                  >
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="mt-1 w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-600 focus:ring-offset-gray-900
                               disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-400">
                      I agree to receive emails and WhatsApp messages regarding my inquiry and other educational opportunities.
                    </label>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg 
                               shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Submit Application for Expert Guidance'
                      )}
                    </motion.button>
                  </motion.div>
                </form>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-5 bg-gradient-to-r from-blue-900/20 to-cyan-900/10 rounded-xl border border-blue-500/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-xl flex items-center justify-center">
                      <FiClock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Quick Response Guarantee</p>
                      <p className="text-xs text-blue-300/80">We reply within 2 hours</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Quick answers to common questions about contacting us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What is the average response time?",
                answer: "We typically respond within 2 hours during business hours. For urgent matters, please call the office directly."
              },
              {
                question: "Do you offer support in multiple languages?",
                answer: "Yes, our team supports English, Spanish, French, and Arabic for communication."
              },
              {
                question: "What information should I include in my message?",
                answer: "Please include your full name, contact details, preferred location, and specific inquiry details."
              },
              {
                question: "Can I visit your offices in person?",
                answer: "Yes, all our offices welcome scheduled appointments. Please contact us to arrange a visit."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-lg rounded-xl border border-gray-800/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;