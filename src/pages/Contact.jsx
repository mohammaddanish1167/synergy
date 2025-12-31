import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiClock, FiShield, FiUsers } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState('UK');

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
    }
  ];

  // Contact Info Card Component
  const ContactCard = ({ location, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => setActiveLocation(location.id)}
      className={`relative bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-lg rounded-xl border transition-all duration-300 ${
        activeLocation === location.id 
          ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' 
          : 'border-gray-700/50 hover:border-gray-600'
      } p-6 cursor-pointer overflow-hidden group`}
    >
      {/* Gradient Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
        activeLocation === location.id 
          ? 'opacity-30 from-blue-900/20 via-transparent to-purple-900/20' 
          : 'opacity-0 group-hover:opacity-10 from-gray-700/20 to-gray-900/20'
      }`} />

      {/* Selection Indicator */}
      {activeLocation === location.id && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30"
        >
          <FiGlobe className="w-3 h-3 text-white" />
        </motion.div>
      )}

      <div className="relative z-10 space-y-5">
        {/* Location Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                activeLocation === location.id 
                  ? 'bg-gradient-to-br from-blue-600/30 to-blue-800/30 shadow-lg shadow-blue-500/20' 
                  : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50'
              }`}
            >
              <FiMapPin className={`w-6 h-6 transition-colors duration-300 ${
                activeLocation === location.id ? 'text-blue-400' : 'text-gray-400'
              }`} />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-white">{location.name}</h3>
              <p className="text-sm text-blue-400/80 font-medium">{location.company}</p>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50">
              <FiMail className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Email</p>
              {location.emails.map((email, idx) => (
                <motion.p
                  key={idx}
                  whileHover={{ x: 2 }}
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                >
                  {email}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50">
              <FiPhone className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Phone</p>
              <motion.p
                whileHover={{ x: 2 }}
                className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                {location.phone}
              </motion.p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50">
              <FiMapPin className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Address</p>
              <p className="text-sm text-gray-300 leading-relaxed">{location.address}</p>
            </div>
          </div>

          {/* Timezone */}
          <div className="flex items-center gap-2 pt-3 border-t border-gray-800/50">
            <FiClock className="w-4 h-4 text-blue-400/70" />
            <span className="text-xs text-gray-400">{location.timezone} Timezone</span>
          </div>
        </div>

        {/* Select Button */}
        <div className="pt-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
              activeLocation === location.id
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 hover:text-white hover:shadow-lg'
            }`}
          >
            {activeLocation === location.id ? '✓ Selected Location' : 'Select Location'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Animated Background */}
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
            {/* Badge */}
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
            
            {/* Main Heading */}
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

      {/* Main Content */}
      <div className="px-4 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-white mb-3"
              >
                Our Global Offices
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg"
              >
                Select a location to connect with our regional team
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <ContactCard key={location.id} location={location} index={index} />
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className="mt-8 bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-lg rounded-2xl border border-gray-800/50 p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/30 to-blue-800/30 flex items-center justify-center">
                  <FiClock className="w-5 h-5 text-blue-400" />
                </div>
                Business Hours
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { day: 'Mon - Fri', time: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', time: 'Closed' },
                  { day: 'Emergency', time: '24/7 via Email' }
                ].map((schedule, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50"
                  >
                    <p className="text-sm text-gray-400 mb-1">{schedule.day}</p>
                    <p className="text-white font-semibold">{schedule.time}</p>
                  </motion.div>
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
              whileHover={{ scale: 1.01 }}
              className="sticky top-8"
            >
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-lg rounded-2xl border border-gray-800/50 p-6 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Send Message to {locations.find(l => l.id === activeLocation)?.name}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our dedicated team responds within 2 hours during business days
                  </p>
                </div>

                {/* The ContactForm component already has all the requested fields */}
                <ContactForm
                  location={activeLocation}
                  fields={['name', 'email', 'phone', 'country', 'course', 'message', 'consent']}
                  buttonText="Submit Application for Expert Guidance"
                />

                {/* Quick Response Guarantee */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
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

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.01 }}
                className="mt-6 bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-lg rounded-xl border border-gray-800/50 p-6 shadow-xl"
              >
                <h3 className="text-lg font-bold text-white mb-5">Connect With Us</h3>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: FaLinkedin, color: 'from-blue-700 to-blue-800', label: 'LinkedIn' },
                    { icon: FaTwitter, color: 'from-sky-700 to-sky-800', label: 'Twitter' },
                    { icon: FaInstagram, color: 'from-pink-700 to-pink-800', label: 'Instagram' },
                    { icon: FaWhatsapp, color: 'from-green-700 to-green-800', label: 'WhatsApp' }
                  ].map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-br ${social.color} w-12 h-12 rounded-xl flex items-center justify-center 
                               text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
                <p className="text-center text-gray-400 text-sm mt-5">
                  Follow us for updates and announcements
                </p>
              </motion.div>
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