/**
 * Navbar Component - Redesigned with Clean SaaS Aesthetic
 */

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  Award, 
  UserCircle, 
  BookOpen, 
  Briefcase, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const [logoError, setLogoError] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      badge: 'Prestige',
      description: 'Lifetime achievement recognition'
    },
    { 
      path: '/honorary-professorship', 
      label: 'Honorary Professorship',
      icon: UserCircle,
      badge: 'Excellence',
      description: 'Academic distinction'
    },
    { 
      path: '/phd', 
      label: 'PhD Program',
      icon: BookOpen,
      badge: 'Research',
      description: 'Doctoral research degrees'
    },
    { 
      path: '/mba', 
      label: 'MBA (Master)',
      icon: Briefcase,
      badge: 'Leadership',
      description: 'Business administration'
    },
    { 
      path: '/dba', 
      label: 'DBA Program',
      icon: TrendingUp,
      badge: 'Executive',
      description: 'Doctor of Business Admin'
    },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogoError = () => {
    setLogoError(true);
  };

  const getIcon = (iconComponent) => {
    const Icon = iconComponent;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200' 
            : 'bg-white border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-3">
                {logoError ? (
                  <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center">
                    <span className="text-lg font-semibold text-slate-600">SSA</span>
                  </div>
                ) : (
                  <img 
                    src={logo} 
                    alt="Synergy Scholars Academia" 
                    className="h-10 w-auto"
                    onError={handleLogoError}
                  />
                )}
                <span className="text-sm font-medium text-slate-700 hidden sm:block">
                  Synergy Scholars Academia
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowCoursesMenu(true)}
                onMouseLeave={() => setShowCoursesMenu(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    showCoursesMenu 
                      ? 'bg-slate-100 text-slate-900' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Programs</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showCoursesMenu ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showCoursesMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg border border-slate-200 shadow-lg overflow-hidden z-50"
                      onMouseEnter={() => setShowCoursesMenu(true)}
                      onMouseLeave={() => setShowCoursesMenu(false)}
                    >
                      <div className="py-2">
                        {courseSubLinks.map((program) => (
                          <Link
                            key={program.path}
                            to={program.path}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                            onClick={() => setShowCoursesMenu(false)}
                          >
                            <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                              {getIcon(program.icon)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-0.5">
                                <span className="text-sm font-medium text-slate-900">
                                  {program.label}
                                </span>
                                <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                  {program.badge}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 line-clamp-1">
                                {program.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-slate-600" />
              ) : (
                <Menu className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-4 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {logoError ? (
                        <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center">
                          <span className="text-lg font-semibold text-slate-600">SSA</span>
                        </div>
                      ) : (
                        <img src={logo} alt="Synergy Scholars Academia" className="h-10 w-auto" />
                      )}
                      <span className="text-sm font-medium text-slate-700">Menu</span>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-slate-500" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  {/* Programs dropdown */}
                  <div className="mb-2">
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 rounded-lg text-left"
                    >
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-4 h-4 text-slate-600" />
                        <span className="text-sm font-medium text-slate-900">Programs</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {mobileDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 space-y-1">
                            {courseSubLinks.map((program) => (
                              <Link
                                key={program.path}
                                to={program.path}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
                                  {getIcon(program.icon)}
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-slate-900">
                                    {program.label}
                                  </div>
                                  <div className="text-xs text-slate-500">
                                    {program.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Navigation links */}
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.path)
                          ? 'bg-slate-100 text-slate-900'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}

                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-200">
                  <p className="text-xs text-center text-slate-400">
                    © {new Date().getFullYear()} Synergy Scholars Academia
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
