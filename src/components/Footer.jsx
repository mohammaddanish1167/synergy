/**
 * Footer Component - Calm Enterprise Style
 * Dark, minimal columns with subtle hover and muted text
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
      { path: '/contact', label: 'Contact' }
    ]
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-md font-bold text-lg">
                QL
              </div>
              <span className="text-lg font-semibold text-slate-100">QualifyLearn</span>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md text-sm">
              Your trusted partner in education and career guidance. We help students achieve their academic and professional dreams through personalized counselling and expert support.
            </p>
            
            {/* Social Media Icons with hover effects */}
            <div className="flex space-x-4">
              {[
                { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-slate-500 hover:text-indigo-300 transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link, index) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-indigo-300 transition-colors relative group text-sm"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <a href="mailto:info@qualifylearn.com" className="hover:text-indigo-300 transition-colors">
                  info@qualifylearn.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-indigo-300 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="text-indigo-300 hover:text-indigo-200 transition-colors inline-flex items-center gap-1 group"
                >
                  Send us a message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright with divider */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} QualifyLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
