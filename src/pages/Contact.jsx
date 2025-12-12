import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import ContactForm from '../components/ContactForm';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiChevronRight, FiClock, FiShield, FiUsers } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState('UK');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Office locations data
  const locations = [
    {
      id: 'UK',
      name: 'UNITED KINGDOM',
      company: 'QUALIFY LEARN LIMITED',
      emails: ['support@qualifylearn.com', 'info@qualifylearn.com'],
      phone: '+44-745-741-7703',
      address: '124 City Road, London, United Kingdom, EC1V 2NX',
      timezone: 'GMT',
      formFields: ['name', 'email', 'mobile', 'city', 'message']
    },
    {
      id: 'US',
      name: 'UNITED STATES',
      company: 'QUALIFY LEARN LLC',
      emails: ['support@qualifylearn.com', 'info@qualifylearn.com'],
      phone: '+1-307-392-9112',
      address: '30 N Gould St Ste R Sheridan WY 82801 USA',
      timezone: 'MST',
      formFields: ['name', 'email', 'mobile', 'message']
    },
    {
      id: 'IN',
      name: 'INDIA',
      company: 'QUALIFYLEARN EDU PVT LTD',
      emails: ['support@qualifylearn.com', 'info@qualifylearn.com'],
      phone: '+91-888-293-7078',
      address: 'B5, Block B, Yamuna Vihar, Shahdhara, Delhi, 110053',
      timezone: 'IST',
      formFields: ['name', 'email', 'mobile', 'message']
    }
  ];

  // Contact Info Card Component
  const ContactCard = ({ location, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setHoveredCard(location.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => setActiveLocation(location.id)}
      className={`relative bg-gray-900/50 backdrop-blur-sm rounded-xl border ${
        activeLocation === location.id 
          ? 'border-blue-500 shadow-lg shadow-blue-500/10' 
          : 'border-gray-800 hover:border-gray-700'
      } p-6 cursor-pointer transition-all duration-300`}
    >
      {/* Selection Indicator */}
      {activeLocation === location.id && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
          <FiGlobe className="w-3 h-3 text-white" />
        </div>
      )}

      <div className="space-y-5">
        {/* Location Header */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              activeLocation === location.id ? 'bg-blue-600/20' : 'bg-gray-800'
            }`}>
              <FiMapPin className={`w-5 h-5 ${
                activeLocation === location.id ? 'text-blue-400' : 'text-gray-400'
              }`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{location.name}</h3>
              <p className="text-sm text-blue-400">{location.company}</p>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-3">
          {/* Email */}
          <div className="flex items-start">
            <FiMail className="w-4 h-4 text-gray-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 mb-1">Email</p>
              {location.emails.map((email, idx) => (
                <p key={idx} className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  {email}
                </p>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <FiPhone className="w-4 h-4 text-gray-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <p className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                {location.phone}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start">
            <FiMapPin className="w-4 h-4 text-gray-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 mb-1">Address</p>
              <p className="text-sm text-gray-300">{location.address}</p>
            </div>
          </div>

          {/* Timezone */}
          <div className="flex items-center pt-2 border-t border-gray-800">
            <FiClock className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-xs text-gray-500">{location.timezone} Timezone</span>
          </div>
        </div>

        {/* Select Button */}
        <div className="pt-3">
          <button
            className={`w-full py-2 text-sm font-medium rounded-lg transition-colors ${
              activeLocation === location.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {activeLocation === location.id ? 'Selected' : 'Select Location'}
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm 
                       rounded-full border border-gray-700 mb-6"
            >
              <FiGlobe className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">GLOBAL REACH</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Contact <span className="text-blue-400">Us</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Get In Touch With Our <span className="text-white font-semibold">Global Team</span> of Education Consultants
            </motion.p>
          </motion.div>

          {/* Stats Bar */}
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
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 border border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
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

      {/* Main Content */}
      <div className="px-4 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Our Global Offices</h2>
              <p className="text-gray-400">Select a location to contact our team</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <ContactCard key={location.id} location={location} index={index} />
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FiClock className="w-5 h-5 text-blue-400" />
                Business Hours
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { day: 'Mon - Fri', time: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', time: 'Closed' },
                  { day: 'Emergency', time: '24/7 via Email' }
                ].map((schedule, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-gray-800/50">
                    <p className="text-sm text-gray-400">{schedule.day}</p>
                    <p className="text-white font-medium">{schedule.time}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-8"
            >
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Send Message to {locations.find(l => l.id === activeLocation)?.name}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Our team responds within 2 hours during business days
                  </p>
                </div>

                <ContactForm
                  location={activeLocation}
                  fields={locations.find(l => l.id === activeLocation)?.formFields || ['name', 'email', 'mobile', 'message']}
                  buttonText="Send Message"
                />

                {/* Quick Response Guarantee */}
                <div className="mt-8 p-4 bg-blue-600/10 border border-blue-500/30 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <FiClock className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Quick Response Guarantee</p>
                      <p className="text-xs text-blue-300">We reply within 2 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Connect With Us</h3>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: FaLinkedin, color: 'bg-blue-700 hover:bg-blue-600', label: 'LinkedIn' },
                    { icon: FaTwitter, color: 'bg-sky-700 hover:bg-sky-600', label: 'Twitter' },
                    { icon: FaInstagram, color: 'bg-pink-700 hover:bg-pink-600', label: 'Instagram' },
                    { icon: FaWhatsapp, color: 'bg-green-700 hover:bg-green-600', label: 'WhatsApp' }
                  ].map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${social.color} w-10 h-10 rounded-lg flex items-center justify-center 
                               text-white transition-colors`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Follow us for updates and announcements
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default ContactPage;