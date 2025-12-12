/**
 * Premium Animated Education Hero
 * Sophisticated animations with professional elegance
 */

import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FiArrowRight, FiCheckCircle, FiAward, FiUsers, FiBookOpen, FiTrendingUp, FiGlobe, FiStar, FiChevronRight } from 'react-icons/fi';

function Hero({ primaryAction, secondaryAction }) {
  // Premium color palette
  const colors = {
    primary: '#1E3A8A',       // Deep navy blue
    secondary: '#3B82F6',     // Professional blue
    accent: '#10B981',        // Emerald green
    gold: '#D4AF37',          // Luxury gold
    light: '#F8FAFC',
    dark: '#0F172A',
    gray: '#64748B',
  };

  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current?.getBoundingClientRect() || { width: 0, height: 0 };
      setMousePosition({
        x: (clientX / width - 0.5) * 2,
        y: (clientY / height - 0.5) * 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      color: i % 3 === 0 ? colors.secondary : i % 3 === 1 ? colors.accent : colors.gold,
      opacity: Math.random() * 0.1 + 0.05,
    }));
    setParticles(newParticles);
  }, []);

  // Animated stats
  const stats = [
    { 
      value: '98%', 
      label: 'Success Rate', 
      icon: FiCheckCircle, 
      color: colors.accent,
      description: 'Student Success'
    },
    { 
      value: '25+', 
      label: 'Years Experience', 
      icon: FiTrendingUp, 
      color: colors.primary,
      description: 'Established Excellence'
    },
    { 
      value: '10K+', 
      label: 'Students', 
      icon: FiUsers, 
      color: colors.secondary,
      description: 'Global Community'
    },
    { 
      value: '500+', 
      label: 'Courses', 
      icon: FiBookOpen, 
      color: colors.gold,
      description: 'Comprehensive Catalog'
    },
  ];

  // Rotating featured programs
  const featuredPrograms = [
    'MBA & Executive Education',
    'Engineering & Technology',
    'Medical Sciences',
    'Law & Humanities',
    'Data Science & AI',
    'Business & Management'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredPrograms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Background wave animation
  const WaveBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.1" />
            <stop offset="50%" stopColor={colors.secondary} stopOpacity="0.05" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M0,${200 + i * 100} Q360,${150 + i * 100} 720,${250 + i * 100} Q1080,${350 + i * 100} 1440,${200 + i * 100} L1440,800 L0,800 Z`}
            fill="url(#waveGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.3,
              d: [
                `M0,${200 + i * 100} Q360,${150 + i * 100} 720,${250 + i * 100} Q1080,${350 + i * 100} 1440,${200 + i * 100} L1440,800 L0,800 Z`,
                `M0,${250 + i * 100} Q360,${200 + i * 100} 720,${300 + i * 100} Q1080,${400 + i * 100} 1440,${250 + i * 100} L1440,800 L0,800 Z`,
                `M0,${200 + i * 100} Q360,${150 + i * 100} 720,${250 + i * 100} Q1080,${350 + i * 100} 1440,${200 + i * 100} L1440,800 L0,800 Z`
              ]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </svg>
    </div>
  );

  // Animated floating elements
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* Geometric shapes */}
      {[
        { size: 40, x: 10, y: 20, rotate: 45, color: colors.primary },
        { size: 60, x: 90, y: 30, rotate: 0, color: colors.secondary },
        { size: 30, x: 85, y: 70, rotate: 30, color: colors.accent },
        { size: 50, x: 15, y: 80, rotate: 15, color: colors.gold },
      ].map((shape, i) => (
        <motion.div
          key={i}
          className="absolute border"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            borderColor: `${shape.color}20`,
            rotate: shape.rotate,
          }}
          animate={{
            rotate: shape.rotate + 360,
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        />
      ))}

      {/* Animated connections */}
      <svg className="absolute w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0" />
            <stop offset="50%" stopColor={colors.secondary} stopOpacity="0.2" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.line
            key={i}
            x1="0"
            y1={`${20 + i * 15}%`}
            x2="100%"
            y2={`${20 + i * 15}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            strokeDasharray="10,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.1,
              strokeDashoffset: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </svg>
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <WaveBackground />
        <FloatingElements />
        
        {/* Interactive gradient based on mouse position */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}05 0%, transparent 70%)`,
          }}
          animate={{
            x: mousePosition.x * 100,
            y: mousePosition.y * 100,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 30 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column - Animated Content */}
          <div className="lg:col-span-7">
            {/* Animated Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-lg mb-8 relative overflow-hidden group"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div
                className="w-2 h-2 rounded-full relative"
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    `0 0 0px ${colors.accent}`,
                    `0 0 10px ${colors.accent}`,
                    `0 0 0px ${colors.accent}`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ background: colors.accent }}
              />
              <span className="text-sm font-semibold text-blue-700 tracking-wider relative z-10">
                ELITE EDUCATION PARTNER
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-blue-600"
              >
                <FiStar className="w-3 h-3" />
              </motion.div>
            </motion.div>

            {/* Main Heading with Text Animation */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Transform Your
                <br />
                <motion.span
                  className="relative inline-block mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    Academic Journey
                  </span>
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute -right-2 -top-1 w-4 h-4 rounded-full bg-white border-2"
                      style={{ borderColor: colors.secondary }}
                      animate={{
                        x: [0, '100%', 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                      }}
                    />
                  </motion.div>
                </motion.span>
              </motion.h1>
            </div>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative mt-8"
            >
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Partner with the world's leading education consultancy for personalized guidance, 
                premium resources, and unparalleled support throughout your academic journey.
              </p>
              
              {/* Scanning line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent"
                style={{ mask: 'linear-gradient(90deg, transparent, white, transparent)' }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.8,
                }}
              />
            </motion.div>

            {/* Rotating Featured Programs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <FiChevronRight className="w-4 h-4 text-blue-600" />
                </motion.div>
                <span className="text-sm font-medium text-gray-700">Featured Programs</span>
              </div>
              
              <div className="relative h-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center"
                  >
                    <motion.span
                      className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.02 }}
                    >
                      {featuredPrograms[activeIndex]}
                    </motion.span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress dots */}
              <div className="flex gap-2 mt-4">
                {featuredPrograms.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-2 h-2 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                    whileHover={{ scale: 1.5 }}
                  >
                    {index === activeIndex && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-600"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Animated Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA with advanced animations */}
              {primaryAction && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${colors.secondary}40, transparent)`,
                    }}
                  />
                  
                  {/* Button with gradient animation */}
                  <Link
                    to={primaryAction.path}
                    className="relative px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(90deg, 
                          transparent 0%, 
                          ${colors.secondary}20 50%, 
                          transparent 100%)`,
                      }}
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Particle burst on hover */}
                    <div className="absolute inset-0 overflow-hidden">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          initial={{ scale: 0, x: 0, y: 0 }}
                          whileHover={{
                            scale: [0, 1, 0],
                            x: Math.cos((i * 45) * Math.PI / 180) * 40,
                            y: Math.sin((i * 45) * Math.PI / 180) * 40,
                          }}
                          transition={{ duration: 0.6 }}
                        />
                      ))}
                    </div>
                    
                    <span className="relative z-10 text-lg">{primaryAction.label}</span>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiArrowRight className="w-6 h-6" />
                    </motion.div>
                  </Link>
                </motion.div>
              )}

              {/* Secondary CTA with holographic effect */}
              {secondaryAction && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <Link
                    to={secondaryAction.path}
                    className="relative px-10 py-5 bg-white/90 backdrop-blur-sm text-blue-600 font-semibold rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                  >
                    {/* Scanning line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    <span className="relative z-10 text-lg">{secondaryAction.label}</span>
                    <motion.div
                      className="relative z-10"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FiAward className="w-6 h-6" />
                    </motion.div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-300 rounded-tl-lg" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-blue-300 rounded-tr-lg" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-300 rounded-bl-lg" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-blue-300 rounded-br-lg" />
                  </Link>
                </motion.div>
              )}
            </motion.div>

            {/* Animated Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.05 }}
                      className="relative group"
                    >
                      {/* Glow on hover */}
                      <div
                        className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        style={{ background: `${stat.color}20` }}
                      />
                      
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                            style={{ background: `${stat.color}10` }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-7 h-7 z-10" style={{ color: stat.color }} />
                            
                            {/* Rotating ring */}
                            <motion.div
                              className="absolute inset-2 border-2 rounded-lg"
                              style={{ borderColor: stat.color }}
                              animate={{
                                rotate: 360,
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          </motion.div>
                          
                          <div>
                            <motion.div
                              className="text-3xl font-bold text-gray-900 mb-1"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                          </div>
                        </div>
                        
                        <div className="text-xs text-gray-500 font-medium mt-3">
                          {stat.description}
                        </div>
                        
                        {/* Progress line */}
                        <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: stat.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(index + 1) * 25}%` }}
                            transition={{ delay: 1.6 + index * 0.1, duration: 1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Premium Visual with Enhanced Animations */}
          <div className="lg:col-span-5 mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Main Card with 3D effect */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-white/50 shadow-2xl p-8">
                {/* Animated background pattern */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-10">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.primary} strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Card Header */}
                <div className="flex items-start justify-between mb-10 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Personalized Learning Path</h3>
                    <p className="text-gray-600 text-sm mt-2">Your customized academic roadmap</p>
                  </div>
                  
                  {/* Animated Logo Orb */}
                  <motion.div
                    className="relative"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl flex items-center justify-center relative overflow-hidden">
                      <span className="text-xl font-black text-white">QL</span>
                      
                      {/* Orbital rings */}
                      {[0, 120, 240].map((angle, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-20 h-20 border-2 border-white/20 rounded-full"
                          initial={{ rotate: angle }}
                          animate={{ rotate: angle + 360 }}
                          transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Animated Progress Chart */}
                <div className="space-y-8 relative z-10 mb-10">
                  {[
                    { stage: 'Assessment', progress: 30, color: colors.secondary, icon: '📊' },
                    { stage: 'Planning', progress: 50, color: colors.primary, icon: '🗺️' },
                    { stage: 'Execution', progress: 75, color: colors.accent, icon: '⚡' },
                    { stage: 'Achievement', progress: 95, color: colors.gold, icon: '🏆' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.stage}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="space-y-3 group"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <motion.span
                            className="text-2xl"
                            animate={{
                              y: [0, -5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.5,
                            }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="font-medium text-gray-900">{item.stage}</span>
                        </div>
                        <motion.span 
                          className="font-bold text-lg"
                          style={{ color: item.color }}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                        >
                          {item.progress}%
                        </motion.span>
                      </div>
                      
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden relative group-hover:bg-gray-200 transition-colors">
                        <motion.div
                          className="h-full rounded-full relative"
                          style={{ backgroundColor: item.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                          {/* Scanning particle */}
                          <motion.div
                            className="absolute top-0 w-3 h-full bg-white/40 rounded-full blur-sm"
                            animate={{
                              x: ['-100%', '400%'],
                            }}
                            transition={{
                              duration: 3 + index,
                              repeat: Infinity,
                              ease: "linear",
                              delay: index * 0.5,
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Central Holographic Display */}
                <div className="relative flex justify-center mb-8">
                  <div className="relative w-48 h-48">
                    {/* Animated rings */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-2 rounded-full"
                        style={{
                          borderColor: `${colors.primary}${20 - i * 10}`,
                          inset: `${i * 16}px`,
                        }}
                        animate={{
                          rotate: 360,
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          scale: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                          },
                        }}
                      />
                    ))}
                    
                    {/* Central display */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        className="text-5xl font-black mb-3"
                        style={{ 
                          color: colors.primary,
                          textShadow: `0 0 20px ${colors.secondary}40`,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        }}
                      >
                        88%
                      </motion.div>
                      <div className="text-sm font-medium" style={{ color: colors.gray }}>
                        Overall Progress
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement Badge with Animation */}
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-blue-100 p-6">
                    <div className="flex items-center justify-center gap-6">
                      <motion.div
                        className="relative"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg flex items-center justify-center relative overflow-hidden">
                          <FiAward className="w-10 h-10 text-white" />
                          
                          {/* Sparkle particles */}
                          {[0, 90, 180, 270].map((angle) => (
                            <motion.div
                              key={angle}
                              className="absolute w-2 h-2 bg-white rounded-full"
                              style={{
                                transform: `rotate(${angle}deg) translateX(30px)`,
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: angle / 90 * 0.5,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Premium Support</h4>
                        <p className="text-gray-600 text-sm mt-2">24/7 Dedicated Consultant</p>
                        <motion.div
                          className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-blue-200 mt-3"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs font-medium text-blue-700">Available Now</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Cards */}
              {[
                { x: -40, y: 40, icon: FiGlobe, label: 'Global', sublabel: '50+ Countries', color: colors.secondary },
                { x: 120, y: -20, icon: FiStar, label: 'Elite', sublabel: 'Top 1%', color: colors.gold },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: card.x,
                    top: card.y,
                  }}
                  animate={{
                    y: [0, i % 2 === 0 ? -20 : 20, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 2,
                  }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-xl p-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${card.color}15` }}
                      >
                        <card.icon className="w-6 h-6" style={{ color: card.color }} />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{card.label}</div>
                        <div className="text-xs text-gray-500">{card.sublabel}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Animated Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <div className="text-center">
            <motion.p
              className="text-sm text-gray-500 mb-8 inline-flex items-center gap-2"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              TRUSTED BY LEADING INSTITUTIONS WORLDWIDE
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </motion.p>
            
            {/* Animated logo carousel */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-12"
                animate={{
                  x: [0, -2000],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[
                  'Harvard University', 'Stanford', 'MIT', 'Oxford', 'Cambridge',
                  'Imperial College', 'Yale', 'Princeton', 'UC Berkeley', 'UCLA',
                  'University of Toronto', 'ETH Zurich', 'National University of Singapore',
                  'University of Melbourne', 'University of Tokyo'
                ].map((name, i) => (
                  <div key={i} className="text-lg font-semibold text-gray-400 whitespace-nowrap opacity-40 hover:opacity-70 transition-opacity">
                    {name}
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  'Harvard University', 'Stanford', 'MIT', 'Oxford', 'Cambridge',
                  'Imperial College', 'Yale', 'Princeton', 'UC Berkeley', 'UCLA',
                  'University of Toronto', 'ETH Zurich', 'National University of Singapore',
                  'University of Melbourne', 'University of Tokyo'
                ].map((name, i) => (
                  <div key={`dup-${i}`} className="text-lg font-semibold text-gray-400 whitespace-nowrap opacity-40 hover:opacity-70 transition-opacity">
                    {name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Need AnimatePresence from framer-motion
import { AnimatePresence } from 'framer-motion';

export default Hero;