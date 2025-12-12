/**
 * Navbar Component - Qualify Learn Theme
 * Enhanced mobile navigation with dropdown support
 */

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from '../assets/logo.jpg';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const mobileMenuRef = useRef(null);

  // Track scroll position for navbar background opacity
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
        setMobileDropdownOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  // Navigation links
  const navLinks = [
    { path: '/', label: 'Home' },
    { 
      path: '/courses', 
      label: 'Courses',
      hasDropdown: true
    },
    { path: '/upcoming-courses', label: 'Upcoming Courses' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const courseSubLinks = [
    { path: '/honorary-doctorate', label: 'Honorary Doctorate' },
    { path: '/honorary-professorship', label: 'Honorary Professorship' },
    { path: '/phd', label: 'PhD' },
    { path: '/mba', label: 'MBA (Master)' },
    { path: '/dba', label: 'DBA' },
  ];

  const [showCoursesMenu, setShowCoursesMenu] = useState(false);

  // Check if a link is active (current page)
  const isActive = (path) => location.pathname === path;

  // Toggle mobile dropdown
  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100'
            : 'bg-white/90 backdrop-blur-lg border-b border-blue-100/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with brand palette - Company name removed */}
            <Link to="/" className="flex items-center group">
              <motion.div
                className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-blue-100 shadow-lg bg-white group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img 
                  src={logo} 
                  alt="Qualify Learn" 
                  className="w-full h-full object-contain p-1"
                />
                {/* Subtle gradient overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative px-3 py-2"
                  onMouseEnter={() => link.hasDropdown && setShowCoursesMenu(true)}
                  onMouseLeave={() => link.hasDropdown && setShowCoursesMenu(false)}
                >
                  <Link
                    to={link.hasDropdown ? '#' : link.path}
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault();
                        setShowCoursesMenu(!showCoursesMenu);
                      }
                    }}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors px-3 py-2 rounded-lg ${
                      isActive(link.path) || (link.hasDropdown && showCoursesMenu)
                        ? 'text-blue-800 bg-blue-50'
                        : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/50'
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${showCoursesMenu ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </Link>
                  {isActive(link.path) && !link.hasDropdown && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute left-3 right-3 -bottom-1 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}

                  {/* Courses hover dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {showCoursesMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white border border-blue-100 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-sm"
                          onMouseEnter={() => setShowCoursesMenu(true)}
                          onMouseLeave={() => setShowCoursesMenu(false)}
                        >
                          <div className="p-2">
                            <div className="px-3 py-2 mb-1 border-b border-blue-100">
                              <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider">Our Programs</p>
                            </div>
                            {courseSubLinks.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white hover:text-blue-800 transition-all duration-200 rounded-lg mx-1"
                                onClick={() => setShowCoursesMenu(false)}
                              >
                                <span className="flex items-center gap-3">
                                  <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                                  {sub.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              
              {/* CTA aligned with brand gradient */}
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-guidance-modal'));
                }}
                className="relative ml-2 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Get Guidance</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.96 }}
              className="md:hidden p-3 rounded-xl text-blue-800 hover:text-blue-900 hover:bg-blue-50 transition-colors border border-blue-100 bg-white/80 shadow-lg"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute left-0 top-1 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"
                  animate={isOpen ? { rotate: 45, top: '0.6875rem', width: '1.5rem' } : { rotate: 0, top: '0.25rem', width: '1.5rem' }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-2.5 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"
                  animate={isOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: '1.5rem' }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 bottom-1 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"
                  animate={isOpen ? { rotate: -45, bottom: '0.6875rem', width: '1.5rem' } : { rotate: 0, bottom: '0.25rem', width: '1.5rem' }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-gradient-to-b from-white to-blue-50 shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile menu header with centered logo */}
                <div className="p-8 border-b border-blue-100 bg-white">
                  <div className="flex flex-col items-center mb-6">
                    <Link to="/" className="mb-4" onClick={() => setIsOpen(false)}>
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-3 border-blue-100 shadow-xl bg-white">
                        <img 
                          src={logo} 
                          alt="Qualify Learn" 
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </Link>
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-blue-800 mb-1">QualifyLearn</h1>
                      <p className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
                        Empowering Minds, Elevating Futures
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile menu content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <nav className="space-y-2 mb-8">
                    {navLinks.map((link) => (
                      <div key={link.path} className="mb-2">
                        {link.hasDropdown ? (
                          <>
                            {/* Dropdown trigger */}
                            <button
                              onClick={toggleMobileDropdown}
                              className="w-full flex items-center justify-between px-5 py-4 text-left rounded-xl bg-white hover:bg-blue-50 transition-all duration-200 border border-blue-100 shadow-sm"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-white flex items-center justify-center border border-blue-100">
                                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                </div>
                                <span className={`text-base font-bold ${
                                  mobileDropdownOpen ? 'text-blue-800' : 'text-slate-800'
                                }`}>
                                  {link.label}
                                </span>
                              </div>
                              <motion.div
                                animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                  {mobileDropdownOpen ? (
                                    <ChevronUp className="w-5 h-5 text-blue-700" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-blue-600" />
                                  )}
                                </div>
                              </motion.div>
                            </button>

                            {/* Dropdown content */}
                            <AnimatePresence>
                              {mobileDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden mt-2"
                                >
                                  <div className="ml-4 pl-4 border-l-2 border-dashed border-blue-200 space-y-2 py-2">
                                    {courseSubLinks.map((sub) => (
                                      <Link
                                        key={sub.path}
                                        to={sub.path}
                                        onClick={() => {
                                          setIsOpen(false);
                                          setMobileDropdownOpen(false);
                                        }}
                                        className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-800 hover:bg-white transition-all duration-200 shadow-sm border border-blue-50 hover:border-blue-100 hover:shadow-md"
                                      >
                                        <span className="flex items-center gap-3">
                                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></span>
                                          {sub.label}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-5 py-4 rounded-xl text-base font-bold transition-all duration-200 border ${
                              isActive(link.path)
                                ? 'text-blue-800 bg-gradient-to-r from-blue-50 to-white border-blue-200 shadow-md'
                                : 'text-slate-800 hover:text-blue-800 bg-white hover:bg-blue-50/50 border-blue-100 hover:border-blue-200 hover:shadow-sm'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isActive(link.path) 
                                ? 'bg-gradient-to-br from-blue-100 to-white' 
                                : 'bg-blue-50'
                            }`}>
                              <svg className={`w-5 h-5 ${isActive(link.path) ? 'text-blue-700' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {link.path === '/' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                                {link.path === '/upcoming-courses' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                                {link.path === '/about' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                                {link.path === '/contact' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                              </svg>
                            </div>
                            {link.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Mobile CTA Section */}
                  <div className="mb-8 p-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl border border-blue-500 shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">Ready to Start Your Journey?</h3>
                        <p className="text-xs text-blue-100">Expert guidance just a click away</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        window.dispatchEvent(new CustomEvent('open-guidance-modal'));
                      }}
                      className="w-full px-4 py-4 rounded-xl text-sm font-bold text-blue-800 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Get Free Guidance Now</span>
                      <motion.svg 
                        className="w-4 h-4"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </button>
                  </div>

                  {/* Contact info */}
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <h4 className="text-sm font-bold text-blue-800 mb-4">Contact Information</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-blue-100">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-white flex items-center justify-center border border-blue-200">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-blue-600">Call us anytime</p>
                          <p className="text-base font-bold text-blue-800">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile menu footer */}
                <div className="p-6 border-t border-blue-200 bg-white">
                  <p className="text-xs text-slate-600 text-center">
                    © {new Date().getFullYear()} QualifyLearn. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;