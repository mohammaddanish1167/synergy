/**
 * Navbar Component - Qualify Learn Theme
 * Clean logo display without boxes or containers
 */

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from '../assets/logo.jpeg';
import { ChevronDown, ChevronUp, Menu, X, GraduationCap } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const mobileMenuRef = useRef(null);
  const [logoError, setLogoError] = useState(false);

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
      path: '/upcoming-courses', 
      label: 'Upcoming Courses' 
    },
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

  // Handle logo error
  const handleLogoError = () => {
    setLogoError(true);
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
          <div className="flex justify-between items-center h-24">
            {/* Logo - Clean and minimal with increased size */}
            <Link to="/" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-center"
              >
                {logoError ? (
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                      <span className="text-xl font-bold text-white">QL</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-800 hidden sm:block">QualifyLearn</span>
                  </div>
                ) : (
                  <img 
                    src={logo} 
                    alt="Qualify Learn" 
                    className="h-16 w-auto transition-all duration-300 group-hover:opacity-90"
                    onError={handleLogoError}
                    onLoad={() => setLogoError(false)}
                  />
                )}
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative px-2"
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors px-4 py-2.5 rounded-lg ${
                      isActive(link.path)
                        ? 'text-blue-800 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </div>
              ))}
              
              {/* Our Programs Dropdown - Now a Button */}
              <div
                className="relative px-2"
                onMouseEnter={() => setShowCoursesMenu(true)}
                onMouseLeave={() => setShowCoursesMenu(false)}
              >
                <button
                  className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 px-5 py-3 rounded-xl ${
                    showCoursesMenu
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'
                      : 'text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Our Programs</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${showCoursesMenu ? 'rotate-180' : ''}`} 
                  />
                </button>

                {/* Courses hover dropdown */}
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
                          <p className="text-xs font-semibold text-blue-800 uppercase tracking-wider">All Programs</p>
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
              </div>
              
              {/* CTA */}
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-guidance-modal'));
                }}
                className="relative ml-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Book a Consultation</span>
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
              className="md:hidden p-3 rounded-xl text-blue-800 hover:text-blue-900 hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
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
                {/* Mobile menu header */}
                <div className="p-6 border-b border-blue-100 bg-white">
                  <div className="flex items-center justify-between mb-6">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                      {logoError ? (
                        <div className="flex items-center gap-2">
                          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                            <span className="text-xl font-bold text-white">QL</span>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={logo} 
                          alt="Qualify Learn" 
                          className="h-16 w-auto"
                          onError={handleLogoError}
                        />
                      )}
                    </Link>
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <X className="w-7 h-7 text-blue-700" />
                    </motion.button>
                  </div>
                </div>

                {/* Mobile menu content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <nav className="space-y-2 mb-8">
                    {navLinks.map((link) => (
                      <div key={link.path} className="mb-2">
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-4 px-4 py-5 rounded-xl text-lg font-semibold transition-all duration-200 ${
                            isActive(link.path)
                              ? 'text-blue-800 bg-gradient-to-r from-blue-50 to-white'
                              : 'text-slate-800 hover:text-blue-800 bg-white hover:bg-blue-50/50'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            isActive(link.path) 
                              ? 'bg-gradient-to-br from-blue-100 to-white' 
                              : 'bg-blue-50'
                          }`}>
                            <svg className={`w-6 h-6 ${isActive(link.path) ? 'text-blue-700' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {link.path === '/' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                              {link.path === '/upcoming-courses' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                              {link.path === '/about' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                              {link.path === '/contact' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                            </svg>
                          </div>
                          {link.label}
                        </Link>
                      </div>
                    ))}
                    
                    {/* Mobile Our Programs Button */}
                    <div className="mb-2">
                      <button
                        onClick={toggleMobileDropdown}
                        className="w-full flex items-center justify-between px-4 py-5 text-left rounded-xl transition-all duration-200 border border-blue-100 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          <span className={`text-lg font-bold ${
                            mobileDropdownOpen ? 'text-white' : 'text-white'
                          }`}>
                            Our Programs
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            {mobileDropdownOpen ? (
                              <ChevronUp className="w-6 h-6 text-white" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-white" />
                            )}
                          </div>
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-2"
                          >
                            <div className="ml-6 pl-4 border-l-2 border-dashed border-blue-200 space-y-2 py-3">
                              {courseSubLinks.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileDropdownOpen(false);
                                  }}
                                  className="block px-5 py-4 rounded-lg text-base font-semibold text-slate-700 hover:text-blue-800 hover:bg-white transition-all duration-200 border border-blue-100"
                                >
                                  <span className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></span>
                                    {sub.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </nav>

                  <div className="mb-8 p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Ready to Start?</h3>
                        <p className="text-sm text-blue-100">Expert guidance available</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        window.dispatchEvent(new CustomEvent('open-guidance-modal'));
                      }}
                      className="w-full px-6 py-4 rounded-lg text-base font-bold text-blue-800 bg-white hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <span>Get Free Guidance</span>
                      <motion.svg 
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </button>
                  </div>
                </div>

                <div className="p-6 border-t border-blue-200 bg-white">
                  <p className="text-sm text-slate-600 text-center">
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