import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Send,
  Sparkles,
  Award,
  ChevronRight,
  Calendar,
  User
} from 'lucide-react';
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
  const [currentStep, setCurrentStep] = useState(1);
  
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
    setCurrentStep(4);
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // Prepare the data object for Web3Forms
      const formDataObject = {
        access_key: '39abe0c3-8f53-46e1-831e-74da0d049d2d',
        subject: 'New Contact Message from Synergy Scholars',
        from_name: 'Synergy Scholars Website',
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
        setSubmitMessage('Application submitted successfully! Our academic advisor will contact you within 24 hours.');
        
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
        setSubmitMessage(json.message || 'Failed to submit application. Please try again.');
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
      className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-8 shadow-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-fuchsia-500/5" />
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 space-y-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30"
            >
              <Globe className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Global Headquarters
              </h3>
              <p className="text-sm text-blue-600 font-medium">SYNERGY SCHOLARS ACADEMIA</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Email</p>
              <motion.a
                href="mailto:support@synergyscholars.com"
                whileHover={{ x: 2 }}
                className="block text-sm text-gray-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer mb-2 font-medium"
              >
                support@synergyscholars.com
              </motion.a>
              <motion.a
                href="mailto:admission@synergyscholars.com"
                whileHover={{ x: 2 }}
                className="block text-sm text-gray-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer font-medium"
              >
                admission@synergyscholars.com
              </motion.a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100">
              <Phone className="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Phone</p>
              <motion.a
                href="tel:+19177304763"
                whileHover={{ x: 2 }}
                className="block text-sm text-gray-800 hover:text-violet-600 transition-colors duration-200 cursor-pointer font-medium"
              >
                +1 917 730 4763
              </motion.a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
              <MapPin className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Addresses</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                124 City Road, London, United Kingdom, EC1V 2NX
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                30 N Gould St Ste R Sheridan WY 82801 USA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-5 border-t border-gray-200/50">
            <Clock className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-gray-600 font-medium">24/7 Global Support Available</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/30">
      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4`}
        >
          <div className={`p-5 rounded-2xl shadow-2xl backdrop-blur-xl border ${
            submitStatus === 'success' 
              ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 text-emerald-800' 
              : 'bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200 text-rose-800'
          }`}>
            <div className="flex items-start gap-4">
              {submitStatus === 'success' ? (
                <div className="p-2.5 rounded-xl bg-emerald-500/20">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-rose-500/20">
                  <AlertCircle className="w-6 h-6 text-rose-600" />
                </div>
              )}
              <div>
                <h4 className={`font-bold text-lg mb-2 ${submitStatus === 'success' ? 'text-emerald-900' : 'text-rose-900'}`}>
                  {submitStatus === 'success' ? 'Success!' : 'Error!'}
                </h4>
                <p className="text-sm text-gray-700">{submitMessage}</p>
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
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 blur-3xl"
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl border border-gray-200/80 
                       rounded-2xl shadow-xl shadow-violet-500/5 mb-8"
            >
              <div className="relative">
                <Sparkles className="w-5 h-5 text-violet-600" />
                <div className="absolute inset-0 w-5 h-5 text-violet-600/40 animate-ping" />
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-wide">
                ELITE ACADEMIC CONSULTATION
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-gray-900">Connect With</span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Our Experts
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 rounded-full"
                />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Schedule a personalized consultation with our global team of education specialists
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: Users, value: '10,000+', label: 'Students Helped', color: 'from-blue-500 to-cyan-500' },
              { icon: Clock, value: '24/7', label: 'Support', color: 'from-violet-500 to-fuchsia-500' },
              { icon: Shield, value: '100%', label: 'Secure', color: 'from-emerald-500 to-teal-500' },
              { icon: Globe, value: '50+', label: 'Countries', color: 'from-amber-500 to-orange-500' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6 shadow-xl hover:shadow-2xl hover:border-gray-300/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
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
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Contact Details
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 text-lg"
              >
                Reach out to our global support team for personalized guidance
              </motion.p>
            </div>
            
            <ContactInfoCard />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="mt-8 bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-8 shadow-2xl"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                Connect With Us
              </h3>
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://www.linkedin.com/company/104800214/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-14 h-14 rounded-2xl flex items-center justify-center 
                           bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-7 h-7" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    LinkedIn
                  </span>
                </motion.a>

                <motion.a
                  href="http://facebook.com/people/Synergy-Scholars-Academia/61587252902623/?rdid=RihUW1LnqgnQ63gT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17RbbMokyK%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-14 h-14 rounded-2xl flex items-center justify-center 
                           bg-gradient-to-br from-blue-700 to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-7 h-7" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Facebook
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/synergy_scholars_academia?utm_source=qr&igsh=MXBvbW1xc2dhN3FybQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-14 h-14 rounded-2xl flex items-center justify-center 
                           bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-7 h-7" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Instagram
                  </span>
                </motion.a>
              </div>
              
              <p className="text-center text-gray-600 text-sm mt-8">
                Follow us for updates, announcements, and educational content
              </p>
            </motion.div>

            {/* Response Time Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">24-Hour Response Guarantee</p>
                  <p className="text-xs text-gray-600">Get expert advice within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-700">Personalized consultation</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-700">Direct advisor access</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-8"
            >
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6 shadow-xl">
                {[1, 2, 3, 4].map((stepNum) => (
                  <div key={stepNum} className="text-center">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= stepNum ? 'bg-gradient-to-br from-blue-500 to-violet-500 text-white' : 'bg-gray-100 text-gray-400'} font-medium mb-2`}>
                      {stepNum}
                    </div>
                    <div className="text-xs text-gray-600">
                      {stepNum === 1 ? 'Personal' : stepNum === 2 ? 'Contact' : stepNum === 3 ? 'Details' : 'Submit'}
                    </div>
                  </div>
                ))}
                <div className="absolute bottom-6 left-0 right-0 mx-8 h-1 bg-gray-200 rounded-full -z-10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep - 1) * 33.33}%` }}
                    className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 rounded-full"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-8 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Schedule Your Consultation
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Complete the form below and our academic advisor will contact you within 24 hours
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      onFocus={() => setCurrentStep(1)}
                    >
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100/50 outline-none transition-all hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      onFocus={() => setCurrentStep(1)}
                    >
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100/50 outline-none transition-all hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Enter your email"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      onFocus={() => setCurrentStep(2)}
                    >
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100/50 outline-none transition-all hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      onFocus={() => setCurrentStep(2)}
                    >
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Country <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative group">
                        <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100/50 outline-none transition-all hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Enter your country"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onFocus={() => setCurrentStep(3)}
                  >
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Program Interest
                    </label>
                    <div className="relative group">
                      <Award className="absolute left-4 top-4 transform text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100/50 outline-none transition-all hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Which program are you interested in?"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    onFocus={() => setCurrentStep(3)}
                  >
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-3 focus:ring-blue-100/50 outline-none transition-all hover:border-gray-300 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                      placeholder="Tell us about your educational background, career goals, and what you hope to achieve..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-5 rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50/50 to-white/50"
                  >
                    <div 
                      className="flex items-start gap-4 cursor-pointer"
                      onClick={() => !isSubmitting && setFormData(prev => ({ ...prev, consent: !prev.consent }))}
                    >
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${formData.consent ? 'bg-gradient-to-br from-blue-500 to-violet-500 border-blue-600' : 'bg-white border-gray-300'}`}>
                        {formData.consent && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-800 mb-2">
                          Privacy & Communication Consent <span className="text-rose-500">*</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          I agree to receive personalized academic guidance from Synergy Scholars Academia. 
                          Your information is protected under our Privacy Policy.
                        </p>
                      </div>
                    </div>
                    <input 
                      type="checkbox" 
                      name="consent" 
                      checked={formData.consent} 
                      onChange={handleInputChange} 
                      required 
                      className="hidden" 
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || !formData.consent}
                      whileHover={isSubmitting || !formData.consent ? {} : { scale: 1.02, y: -2 }}
                      whileTap={isSubmitting || !formData.consent ? {} : { scale: 0.98 }}
                      className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg
                        ${isSubmitting || !formData.consent 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 text-white hover:shadow-xl hover:shadow-violet-500/30'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting Your Application...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Application for Expert Guidance
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-5 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl border border-blue-200/50"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">24-Hour Response Guarantee</p>
                      <p className="text-xs text-blue-600">Our academic advisors respond within 24 hours</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6 shadow-xl hover:shadow-2xl hover:border-gray-300/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;