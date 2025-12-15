/**
 * Footer Component - Enhanced Enterprise Style
 * Clean, professional dark theme with improved contact section
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Footer links organized by section
  const footerLinks = {
    quick: [
      { path: '/courses', label: 'Courses' },
      { path: '/upcoming-courses', label: 'Upcoming Courses' },
      { path: '/about', label: 'About' },
      { path: '/contact', label: 'Contact' },
      { path: '/privacy-policy', label: 'Privacy Policy' },
      { path: '/refund-policy', label: 'Refund Policy' },
      { path: '/disclaimer', label: 'Disclaimer' },
      { path: '/terms-and-conditions', label: 'Terms & Conditions' }
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Company Info - Enhanced */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                QL
              </motion.div>
              <div>
                <h2 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">QualifyLearn</h2>
                <p className="text-sm text-slate-500 mt-1">Empowering Minds, Elevating Futures</p>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-md text-sm">
              Your trusted partner in education and career guidance. We help students achieve their academic and professional dreams through personalized counselling and expert support.
            </p>
            
            {/* Enhanced Social Media Icons */}
            <div className="flex space-x-3">
              {[
                { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-indigo-300 transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-slate-100 font-semibold mb-6 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-indigo-300 transition-colors group flex items-center gap-2 text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-indigo-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Enhanced with UK and US addresses */}
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-slate-100 font-semibold mb-6 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              Contact Info
            </motion.h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              {/* UK Address */}
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-2 text-slate-300 text-xs font-medium mb-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                  United Kingdom
                </div>
                <p className="text-xs leading-relaxed">
                  Qualify Learn Limited,<br />
                  124 City Road,<br />
                  London, EC1V 2NX, UK
                </p>
              </motion.li>

              {/* US Address */}
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-2 text-slate-300 text-xs font-medium mb-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                  United States
                </div>
                <p className="text-xs leading-relaxed">
                  Qualify Learn LLC,<br />
                  30 N Gould St Ste R<br />
                  Sheridan WY 82801 USA
                </p>
              </motion.li>

              {/* Phone Numbers */}
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-2 pt-2"
              >
                <a href="tel:+447457417703" className="hover:text-indigo-300 transition-colors flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block">+44-745-741-7703</span>
                    <span className="text-xs text-slate-500">UK Office</span>
                  </div>
                </a>
                
                <a href="tel:+13073929112" className="hover:text-indigo-300 transition-colors flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block">+1 (307) 392-9112</span>
                    <span className="text-xs text-slate-500">US Office</span>
                  </div>
                </a>
              </motion.li>

              {/* Email */}
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a href="mailto:info@qualifylearn.com" className="hover:text-indigo-300 transition-colors flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>info@qualifylearn.com</span>
                </a>
              </motion.li>

              {/* Contact Button */}
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 hover:from-blue-600/30 hover:to-indigo-600/30 text-indigo-300 hover:text-indigo-200 transition-all duration-300 rounded-lg border border-slate-800 hover:border-slate-700 group"
                >
                  Send us a message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Enhanced Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8 text-center"
        >
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} QualifyLearn. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Empowering education worldwide
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;