import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Clock, 
  Shield, 
  Users, // Added missing import
  CheckCircle, 
  AlertCircle,
  Send,
  Calendar,
  User,
  MessageSquare,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

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
      const formDataObject = {
        access_key: '39abe0c3-8f53-46e1-831e-74da0d049d2d',
        subject: 'New Contact Message from Synergy Scholars Academia',
        from_name: 'Synergy Scholars Academia Website',
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
        setSubmitMessage('Application submitted successfully! Our team will contact you within 24 hours.');
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          course: '',
          message: '',
          consent: false
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(json.message || 'Failed to submit application. Please try again.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick stats data
  const quickStats = [
    { label: 'Response Time', value: '< 2 hrs', icon: Clock },
    { label: 'Students Helped', value: '10k+', icon: Users },
    { label: 'Countries', value: '50+', icon: Globe },
    { label: 'Success Rate', value: '98%', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-white">
    

      {/* Notification Toast */}
      {submitStatus && (
        <div className="fixed top-4 right-4 z-50 max-w-md">
          <div className={`bg-white rounded-xl shadow-lg border p-4 flex items-start gap-3 ${
            submitStatus === 'success' ? 'border-green-200' : 'border-red-200'
          }`}>
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className="text-sm text-gray-800">{submitMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Minimal */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 bg-indigo-50 rounded-full mb-6">
            <span className="text-xs font-medium text-indigo-700">Get in touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's start a conversation
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Schedule a personalized consultation with our global team of education specialists
          </p>
        </div>
      </section>

      {/* Quick Stats - Simple grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center">
                  <Icon className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content - Two column layout */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column - Contact info cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <a href="mailto:support@synergyscholars.com" className="text-sm text-gray-900 hover:text-indigo-600 transition-colors">
                        support@synergyscholars.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Phone</p>
                      <a href="tel:+19177304763" className="text-sm text-gray-900 hover:text-indigo-600 transition-colors">
                        +1 917 730 4763
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/447451252032"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-gray-900 hover:text-indigo-600 transition-colors"
                      >
                        +44 7451 252032
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Address</p>
                      <p className="text-sm text-gray-600">124 City Road, London, EC1V 2NX</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/104800214/admin/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-indigo-50 transition-colors group"
                  >
                    <FaLinkedin className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  </a>
                  <a
                    href="http://facebook.com/people/Synergy-Scholars-Academia/61587252902623/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-indigo-50 transition-colors group"
                  >
                    <FaTwitter className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/synergy_scholars_academia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-indigo-50 transition-colors group"
                  >
                    <FaInstagram className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Office hours */}
              <div className="bg-indigo-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-sm font-semibold text-gray-900">Office hours</h3>
                </div>
                <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-600 mt-1">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-sm text-gray-600 mt-1">Sunday: Closed</p>
              </div>
            </div>

            {/* Right column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Schedule your consultation</h2>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="United States"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Program interest
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                        placeholder="Which program interests you?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm resize-none disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="Tell us about your background and goals..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to receive communications from Synergy Scholars Academia and understand that my information is protected by privacy policy. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                      isSubmitting || !formData.consent
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">24-hour response guarantee</p>
                      <p className="text-xs text-gray-600">We'll get back to you within one business day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Minimal */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "What is your response time?",
                a: "We typically respond within 2 hours during business hours."
              },
              {
                q: "Do you offer multilingual support?",
                a: "Yes, our team supports English, Spanish, French, and Arabic."
              },
              {
                q: "Can I schedule a video call?",
                a: "Absolutely! We offer video consultations with our advisors."
              },
              {
                q: "Is my information secure?",
                a: "Yes, all information is encrypted and protected by our privacy policy."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="border-t border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-sm text-gray-600">© 2024 Synergy Scholars Academia. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
