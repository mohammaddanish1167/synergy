/**
 * Navbar Component - Synergy Scholars Academia
 * Premium luxury navigation with glassmorphism and smooth animations
 * Elite academic branding with sophisticated design
 */

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from '../assets/logo.png';
import { 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  GraduationCap, 
  Award, 
  UserCircle, 
  BookOpen, 
  Briefcase, 
  TrendingUp,
  Star,
  Sparkles,
  Zap
} from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const mobileMenuRef = useRef(null);
  const [logoError, setLogoError] = useState(false);
  const [hoveredProgram, setHoveredProgram] = useState(null);

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
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/enroll', label: 'Payment' }
  ];

  const courseSubLinks = [
    { 
      path: '/honorary-doctorate', 
      label: 'Honorary Doctorate',
      icon: Award,
      color: 'from-purple-500 to-indigo-600',
      badge: 'Prestige',
      description: 'Recognize lifetime achievements'
    },
    { 
      path: '/honorary-professorship', 
      label: 'Honorary Professorship',
      icon: UserCircle,
      color: 'from-blue-500 to-cyan-600',
      badge: 'Excellence',
      description: 'Academic recognition'
    },
    { 
      path: '/phd', 
      label: 'PhD Program',
      icon: BookOpen,
      color: 'from-emerald-500 to-green-600',
      badge: 'Research',
      description: 'Doctoral research degrees'
    },
    { 
      path: '/mba', 
      label: 'MBA (Master)',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-600',
      badge: 'Leadership',
      description: 'Business administration'
    },
    { 
      path: '/dba', 
      label: 'DBA Program',
      icon: TrendingUp,
      color: 'from-rose-500 to-pink-600',
      badge: 'Executive',
      description: 'Doctor of Business Admin'
    },
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

  // Get program icon component
  const getIcon = (iconComponent) => {
    const Icon = iconComponent;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-luxury border-b border-gray-100'
            : 'bg-white/95 backdrop-blur-lg border-b border-gray-100/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo - Significantly increased size */}
            <Link to="/" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex items-center"
              >
                {logoError ? (
                  <div className="flex items-center gap-3">
                   
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent hidden sm:block" style={{ fontFamily: 'Playfair Display, serif' }}>Synergy Scholars Academia</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <img 
                      src={logo} 
                      alt="Synergy Scholars Academia" 
                      className="h-28 w-auto transition-all duration-300 group-hover:opacity-90"
                      onError={handleLogoError}
                      onLoad={() => setLogoError(false)}
                    />
                    
                  </div>
                )}
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Our Programs Dropdown - Moved to first position - Enhanced Creative Design */}
              <div
                className="relative px-2"
                onMouseEnter={() => setShowCoursesMenu(true)}
                onMouseLeave={() => setShowCoursesMenu(false)}
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 px-5 py-3 rounded-xl shadow-luxury ${
                    showCoursesMenu
                      ? 'text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-luxury-lg'
                      : 'text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-luxury hover:shadow-luxury-lg hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600'
                  }`}
                >
                  <div className="relative">
                    <GraduationCap className="w-5 h-5" />
                    <motion.div
                      animate={{ rotate: showCoursesMenu ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles className="w-3 h-3 text-yellow-300" />
                    </motion.div>
                  </div>
                  <span>Our Programs</span>
                  <motion.div
                    animate={{ rotate: showCoursesMenu ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                {/* Enhanced Creative Dropdown Menu */}
                <AnimatePresence>
                  {showCoursesMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-[500px] bg-gradient-to-br from-white via-indigo-50/30 to-white border border-gray-100/50 rounded-2xl shadow-luxury-lg overflow-hidden z-50 backdrop-blur-xl"
                      onMouseEnter={() => setShowCoursesMenu(true)}
                      onMouseLeave={() => setShowCoursesMenu(false)}
                    >
                      {/* Decorative background elements */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
                      </div>
                      
                      <div className="relative z-10 p-5">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg">
                              <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>Elite Academic Programs</h3>
                              <p className="text-sm text-slate-600/70">Transform your career with world-class qualifications</p>
                            </div>
                          </div>
                          <div className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
                            <span className="text-xs font-semibold text-indigo-700 flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              5 Elite Programs
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent mb-4"></div>

                        {/* Programs Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {courseSubLinks.map((program, index) => (
                            <motion.div
                              key={program.path}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onMouseEnter={() => setHoveredProgram(program.path)}
                              onMouseLeave={() => setHoveredProgram(null)}
                            >
                              <Link
                                to={program.path}
                                className="block group"
                                onClick={() => setShowCoursesMenu(false)}
                              >
                                <motion.div
                                  whileHover={{ scale: 1.02, y: -2 }}
                                  className={`p-4 rounded-xl border border-gray-100/50 transition-all duration-300 ${
                                    hoveredProgram === program.path
                                      ? 'bg-white shadow-luxury border-indigo-200'
                                      : 'bg-white/80 hover:bg-white'
                                  }`}
                                >
                                  <div className="flex items-start gap-3">
                                    {/* Icon with gradient background */}
                                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${program.color} relative flex-shrink-0`}>
                                      {getIcon(program.icon)}
                                      <div className="absolute inset-0 bg-white/20 rounded-lg"></div>
                                    </div>
                                    
                                    {/* Content - Fixed full program name display */}
                                    <div className="flex-1">
                                      <div className="flex items-start justify-between mb-1.5">
                                        <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-700 pr-2">
                                          {program.label}
                                        </h4>
                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${program.color} text-white flex-shrink-0`}>
                                          {program.badge}
                                        </span>
                                      </div>
                                      <p className="text-xs text-slate-600/70 line-clamp-2">
                                        {program.description}
                                      </p>
                                    </div>
                                  </div>
                                  
                                  {/* Animated underline on hover */}
                                  <motion.div
                                    className="h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mt-3"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: hoveredProgram === program.path ? 1 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  />
                                </motion.div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Home Link - Moved after Our Programs */}
              <div className="relative px-2">
                  <Link
                    to="/"
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors px-4 py-2.5 rounded-lg ${
                      isActive('/')
                        ? 'text-indigo-700 bg-indigo-50/80'
                        : 'text-slate-700 hover:text-indigo-700 hover:bg-indigo-50/50'
                    }`}
                  >
                    Home
                  </Link>
                  {isActive('/') && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
              </div>
              
              {/* Other navigation links */}
              {navLinks.slice(1).map((link) => (
                <div
                  key={link.path}
                  className="relative px-2"
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors px-4 py-2.5 rounded-lg ${
                      isActive(link.path)
                        ? 'text-indigo-700 bg-indigo-50/80'
                        : 'text-slate-700 hover:text-indigo-700 hover:bg-indigo-50/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="active-underline"
                      className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </div>
              ))}
              
              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-guidance-modal'));
                }}
                className="relative ml-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 overflow-hidden"
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600"
                  animate={{
                    background: [
                      'linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)',
                      'linear-gradient(to right, #4f46e5, #7c3aed, #db2777)',
                      'linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)',
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
                
                <span className="relative z-10">Join the Elite</span>
                <motion.svg
                  className="w-4 h-4 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.96 }}
              className="md:hidden p-3 rounded-xl text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50 transition-colors"
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
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-gradient-to-b from-white via-indigo-50/20 to-white shadow-luxury-lg z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile menu header - Increased logo size */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-white to-indigo-50/30">
                  <div className="flex items-center justify-between mb-6">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                      {logoError ? (
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-luxury">
                            <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>SSA</span>
                          </div>
                          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>Synergy Scholars Academia</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <img 
                            src={logo} 
                            alt="Synergy Scholars Academia" 
                            className="h-28 w-auto"
                            onError={handleLogoError}
                          />
                          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>Synergy Scholars Academia</span>
                        </div>
                      )}
                    </Link>
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                      <X className="w-7 h-7 text-indigo-700" />
                    </motion.button>
                  </div>
                </div>

                {/* Mobile menu content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <nav className="space-y-2 mb-8">
                    {/* Enhanced Mobile Our Programs Button - Moved to top */}
                    <div className="mb-2">
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        onClick={toggleMobileDropdown}
                        className="w-full flex items-center justify-between px-4 py-5 text-left rounded-xl transition-all duration-200 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600 shadow-luxury"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <div className="relative">
                              <GraduationCap className="w-6 h-6 text-white" />
                              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300" />
                            </div>
                          </div>
                          <div className="text-left">
                            <span className="text-lg font-bold block">Our Programs</span>
                            <span className="text-sm text-blue-100/80 font-medium block mt-0.5">5 premium programs</span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            {mobileDropdownOpen ? (
                              <ChevronUp className="w-5 h-5 text-white" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-3"
                          >
                            <div className="space-y-3">
                              {courseSubLinks.map((program, index) => (
                                <motion.div
                                  key={program.path}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    to={program.path}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setMobileDropdownOpen(false);
                                    }}
                                    className="block group"
                                  >
                                    <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white/80 hover:bg-white transition-all duration-300 hover:shadow-luxury">
                                      {/* Icon */}
                                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${program.color} flex-shrink-0`}>
                                        {getIcon(program.icon)}
                                      </div>
                                      
                                      {/* Content - Fixed full program name display */}
                                      <div className="flex-1">
                                        <div className="flex items-start justify-between mb-1">
                                          <h4 className="font-bold text-slate-900 text-base group-hover:text-indigo-700 pr-2">
                                            {program.label}
                                          </h4>
                                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${program.color} text-white flex-shrink-0`}>
                                            {program.badge}
                                          </span>
                                        </div>
                                        <p className="text-xs text-slate-600/70 line-clamp-1">
                                          {program.description}
                                        </p>
                                      </div>
                                      
                                      {/* Arrow */}
                                      <motion.div
                                        className="text-indigo-400"
                                        animate={{ x: [0, 2, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                      >
                                        <ChevronDown className="w-4 h-4 rotate-90" />
                                      </motion.div>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Home Link - Moved after Our Programs in mobile */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-2"
                    >
                      <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 px-4 py-5 rounded-xl text-lg font-semibold transition-all duration-200 ${
                          isActive('/')
                            ? 'text-indigo-700 bg-gradient-to-r from-indigo-50/50 to-white'
                            : 'text-slate-800 hover:text-indigo-700 bg-white/80 hover:bg-indigo-50/30'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white shadow-sm`}>
                          <svg className={`w-6 h-6 text-indigo-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        Home
                      </Link>
                    </motion.div>
                    
                    {/* Other mobile navigation links */}
                    {navLinks.slice(1).map((link, index) => (
                      <motion.div 
                        key={link.path}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + (index * 0.05) }}
                        className="mb-2"
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-4 px-4 py-5 rounded-xl text-lg font-semibold transition-all duration-200 ${
                            isActive(link.path)
                              ? 'text-indigo-700 bg-gradient-to-r from-indigo-50/50 to-white'
                              : 'text-slate-800 hover:text-indigo-700 bg-white/80 hover:bg-indigo-50/30'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white shadow-sm`}>
                            <svg className={`w-6 h-6 text-indigo-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {link.path === '/about' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                              {link.path === '/contact' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                              {link.path === '/enroll' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />}
                            </svg>
                          </div>
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Enhanced CTA Section */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8 p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl shadow-luxury-lg"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Ready to Transform?</h3>
                        <p className="text-sm text-white/90">Elite mentorship available 24/7</p>
                      </div>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsOpen(false);
                        window.dispatchEvent(new CustomEvent('open-guidance-modal'));
                      }}
                      className="w-full px-6 py-4 rounded-xl text-base font-bold text-indigo-800 bg-gradient-to-r from-white to-indigo-50 hover:from-indigo-50 hover:to-white transition-all duration-300 flex items-center justify-center gap-3 shadow-luxury hover:shadow-luxury-lg"
                    >
                      <span>Start Your Success Journey</span>
                      <motion.svg 
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200/50 bg-gradient-to-r from-white to-indigo-50/30">
                  <p className="text-sm text-slate-600 text-center">
                    © {new Date().getFullYear()} Synergy Scholars Academia. All rights reserved.
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