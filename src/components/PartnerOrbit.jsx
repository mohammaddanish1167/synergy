/**
 * Enhanced PartnerOrbit Component - Premium University Partnerships
 * Central QualifyLearn hub with orbiting partner institutions
 * Advanced animations with 3D effects and interactive features
 */

import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FiStar, FiGlobe, FiAward, FiUsers, FiChevronRight, FiExternalLink } from 'react-icons/fi';

// Import logos from assets folder
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/kennedy-baptist-logo.jpg';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';
import QualifyLearnLogo from '../assets/logo.jpg';

// Partner universities with imported logos and details
const partners = [
  { 
    id: 1,
    name: 'KENNEDY UNIVERSITY', 
    subtitle: 'ESTABLISHED 1965',
    logo: KennedyUniLogo,
    color: '#8C1515',
    gradient: 'from-red-600 to-red-800',
    description: 'Prestigious research university with global accreditation',
    students: '25,000+',
    location: 'California, USA',
    programs: ['MBA', 'Computer Science', 'Business Administration']
  },
  { 
    id: 2,
    name: 'AMERICAN MANAGEMENT UNIVERSITY', 
    subtitle: 'LEADERSHIP EXCELLENCE',
    logo: AMULogo,
    color: '#1E4477',
    gradient: 'from-blue-600 to-blue-900',
    description: 'Specialized in business and management education',
    students: '15,000+',
    location: 'New York, USA',
    programs: ['Executive MBA', 'Leadership', 'Management']
  },
  { 
    id: 3,
    name: 'KENNEDY BAPTIST', 
    subtitle: 'FAITH-BASED EDUCATION',
    logo: KennedyBaptistLogo,
    color: '#A41034',
    gradient: 'from-rose-600 to-rose-900',
    description: 'Blending academic excellence with spiritual growth',
    students: '8,000+',
    location: 'Texas, USA',
    programs: ['Theology', 'Education', 'Humanities']
  },
  { 
    id: 4,
    name: 'CENTRAL GLOBAL UNIVERSITY', 
    subtitle: 'WORLD-CLASS EDUCATION',
    logo: CentralGlobalLogo,
    color: '#002147',
    gradient: 'from-slate-700 to-slate-900',
    description: 'International university with diverse programs',
    students: '30,000+',
    location: 'Global Campus',
    programs: ['Engineering', 'Law', 'Medicine']
  },
  { 
    id: 5,
    name: 'EURO ASIAN UNIVERSITY', 
    subtitle: 'BRIDGING CONTINENTS',
    logo: EuroAsianLogo,
    color: '#00356B',
    gradient: 'from-indigo-600 to-indigo-900',
    description: 'Promoting cross-cultural academic exchange',
    students: '20,000+',
    location: 'Switzerland',
    programs: ['International Relations', 'Economics', 'Languages']
  },
];

function PartnerOrbit() {
  const [activePartner, setActivePartner] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeDetail, setActiveDetail] = useState(null);
  const [logoErrors, setLogoErrors] = useState({});
  const [qualifyLearnLogoError, setQualifyLearnLogoError] = useState(false);
  const controls = useAnimationControls();
  const orbitControls = useAnimationControls();
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Start rotation on mount
  useEffect(() => {
    orbitControls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      },
    });
  }, [orbitControls]);

  // Handle scroll progress for parallax
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height * 0.5)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle partner hover
  const handlePartnerHover = (partner) => {
    setIsHovering(true);
    setActivePartner(partner);
    orbitControls.stop();
    
    controls.start({
      scale: 1.1,
      transition: { duration: 0.3 }
    });
  };

  const handlePartnerLeave = () => {
    setIsHovering(false);
    setActivePartner(null);
    setActiveDetail(null);
    
    controls.start({
      scale: 1,
      transition: { duration: 0.3 }
    });
    
    orbitControls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      },
    });
  };

  const handlePartnerClick = (partner) => {
    if (activeDetail === partner.id) {
      setActiveDetail(null);
    } else {
      setActiveDetail(partner.id);
    }
  };

  // Handle logo loading errors
  const handleLogoError = (partnerId, isFallback = false) => {
    if (!isFallback) {
      setLogoErrors(prev => ({ ...prev, [partnerId]: 'fallback' }));
    } else {
      setLogoErrors(prev => ({ ...prev, [partnerId]: 'icon' }));
    }
  };

  // Handle QualifyLearn logo error
  const handleQualifyLearnLogoError = () => {
    setQualifyLearnLogoError(true);
  };

  // Central hub animation
  const centralHubAnimation = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "backOut"
      }
    },
    hover: { 
      scale: 1.05,
      rotate: [0, 5, -5, 0],
      transition: { 
        duration: 2,
        repeat: Infinity 
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-lg mb-6 relative overflow-hidden group"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  '0 0 0px rgba(59,130,246,0)',
                  '0 0 10px rgba(59,130,246,0.5)',
                  '0 0 0px rgba(59,130,246,0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-sm font-semibold text-blue-700 tracking-wider relative z-10">
              GLOBAL ACADEMIC PARTNERSHIPS
            </span>
            <FiStar className="w-4 h-4 text-blue-500 relative z-10" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
          >
            <span className="text-slate-900">World-Class </span>
            <motion.span
              className="inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              University Partnerships
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Strategic collaborations with prestigious institutions that ensure our students 
            receive globally recognized qualifications and direct pathways to academic excellence.
          </motion.p>
        </motion.div>

        {/* Enhanced Orbit System */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[700px] flex items-center justify-center"
          style={{
            transform: `translateY(${scrollProgress * 20}px)`,
          }}
        >
          {/* Central Hub with 3D Effect */}
          <motion.div
            {...centralHubAnimation}
            animate={isHovering ? centralHubAnimation.hover : centralHubAnimation.animate}
            className="absolute z-20"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <div className="relative w-64 h-64">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-white shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(99,102,241,0.2) 100%)`,
                  boxShadow: '0 0 60px rgba(59,130,246,0.3)',
                }}
                animate={{
                  rotateY: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Main hub */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-full shadow-2xl border-8 border-white">
                {/* Inner rings */}
                <motion.div
                  className="absolute inset-8 border-2 border-white/30 rounded-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
                
                <motion.div
                  className="absolute inset-12 border border-white/20 rounded-full"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* QualifyLearn Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center backdrop-blur-sm">
                    {qualifyLearnLogoError ? (
                      <div className="text-center">
                        <div className="text-5xl mb-3">🎓</div>
                        <div className="text-2xl font-bold text-white mb-1">QualifyLearn</div>
                        <div className="text-sm text-blue-100 opacity-90">Global Education Hub</div>
                      </div>
                    ) : (
                      <motion.img
                        src={QualifyLearnLogo}
                        alt="QualifyLearn"
                        className="w-32 h-32 object-contain"
                        onError={handleQualifyLearnLogoError}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Floating accent particles */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(150px)`,
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: { duration: 8 + i * 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Orbiting Partners */}
          <motion.div
            animate={orbitControls}
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {partners.map((partner, idx) => {
              const angle = (360 / partners.length) * idx;
              const radius = 280;
              
              return (
                <motion.div
                  key={partner.id}
                  className="absolute"
                  style={{
                    left: `calc(50% - 5rem)`,
                    top: `calc(50% - 5rem)`,
                    x: radius * Math.cos(angle * Math.PI / 180),
                    y: radius * Math.sin(angle * Math.PI / 180),
                    transformStyle: 'preserve-3d',
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => handlePartnerHover(partner)}
                  onMouseLeave={handlePartnerLeave}
                  onClick={() => handlePartnerClick(partner)}
                >
                  {/* University Card with 3D effect */}
                  <motion.div
                    animate={{
                      rotateY: activePartner?.id === partner.id ? 180 : 0,
                      boxShadow: activePartner?.id === partner.id 
                        ? `0 20px 60px ${partner.color}40`
                        : '0 10px 40px rgba(0,0,0,0.1)',
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative w-40 h-40 cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Front of card */}
                    <motion.div
                      className="absolute inset-0 bg-white rounded-2xl border-2 border-blue-200 shadow-xl p-4 flex flex-col items-center justify-center backface-hidden"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Logo Container with gradient border */}
                      <div className={`relative w-20 h-20 mb-4 rounded-xl overflow-hidden border-2 ${partner.gradient.replace('from-', 'border-').replace('to-', ' border-to-')}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
                          {logoErrors[partner.id] === 'icon' ? (
                            <div className="text-4xl">{partner.name[0]}</div>
                          ) : (
                            <motion.img
                              src={partner.logo}
                              alt={partner.name}
                              className="w-full h-full object-contain p-2"
                              onError={() => handleLogoError(partner.id)}
                              whileHover={{ scale: 1.1 }}
                            />
                          )}
                        </div>
                      </div>

                      {/* University Info */}
                      <div className="text-center">
                        <div className="text-sm font-bold uppercase tracking-wider text-slate-900 truncate">
                          {partner.name}
                        </div>
                        <div className="text-xs text-slate-600 font-medium mt-1">
                          {partner.subtitle}
                        </div>
                      </div>

                      {/* Hover indicator */}
                      <motion.div
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                        initial={{ scale: 0 }}
                        animate={activePartner?.id === partner.id ? { scale: 1 } : { scale: 0 }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      </motion.div>
                    </motion.div>

                    {/* Back of card - Details */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-4 flex flex-col items-center justify-center backface-hidden"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        rotateY: 180,
                      }}
                    >
                      <div className="text-center text-white">
                        <div className="text-lg font-bold mb-2">{partner.name}</div>
                        <div className="text-sm text-blue-200 mb-4">{partner.location}</div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <FiUsers className="w-4 h-4 text-blue-300" />
                            <span className="text-sm">{partner.students} Students</span>
                          </div>
                          <div className="text-xs text-gray-300 line-clamp-2">
                            {partner.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Connection line with glow */}
                  <svg className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 100 * Math.cos(angle * Math.PI / 180)}%`}
                      y2={`${50 + 100 * Math.sin(angle * Math.PI / 180)}%`}
                      stroke={activePartner?.id === partner.id ? partner.color : "#CBD5E1"}
                      strokeWidth={activePartner?.id === partner.id ? "2" : "1"}
                      strokeOpacity={activePartner?.id === partner.id ? 0.4 : 0.2}
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ 
                        pathLength: 1,
                        strokeDashoffset: [0, 10, 0],
                      }}
                      transition={{ 
                        pathLength: { duration: 1, delay: idx * 0.1 },
                        strokeDashoffset: { 
                          duration: 1, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: idx * 0.2 
                        }
                      }}
                    />
                  </svg>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Animated orbit rings */}
          {[220, 240, 260, 280, 300].map((radius, i) => (
            <motion.div
              key={i}
              className="absolute border border-blue-200/10 rounded-full"
              style={{
                width: radius * 2,
                height: radius * 2,
              }}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                rotate: { duration: 30 + i * 5, repeat: Infinity, ease: "linear" },
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          ))}

          {/* Interactive floating dots */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (360 / 12) * i;
            const radius = 250;
            
            return (
              <motion.div
                key={`orbit-dot-${i}`}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg"
                style={{
                  left: `calc(50% - 0.25rem)`,
                  top: `calc(50% - 0.25rem)`,
                  x: radius * Math.cos(angle * Math.PI / 180),
                  y: radius * Math.sin(angle * Math.PI / 180),
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>

        {/* Partner Details Panel */}
        <AnimatePresence>
          {activeDetail && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-12"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-200 shadow-xl overflow-hidden">
                <div className="p-8">
                  {partners
                    .filter(p => p.id === activeDetail)
                    .map(partner => (
                      <div key={partner.id} className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${partner.gradient} flex items-center justify-center`}>
                              {logoErrors[partner.id] === 'icon' ? (
                                <div className="text-2xl text-white">{partner.name[0]}</div>
                              ) : (
                                <img
                                  src={partner.logo}
                                  alt={partner.name}
                                  className="w-12 h-12 object-contain"
                                />
                              )}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-slate-900">{partner.name}</h3>
                              <p className="text-slate-600">{partner.subtitle}</p>
                            </div>
                          </div>
                          
                          <p className="text-slate-700 mb-6">{partner.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-4 border border-blue-100">
                              <div className="flex items-center gap-2 mb-2">
                                <FiUsers className="w-5 h-5 text-blue-600" />
                                <span className="font-semibold text-slate-900">Student Body</span>
                              </div>
                              <div className="text-2xl font-bold text-slate-900">{partner.students}</div>
                            </div>
                            
                            <div className="bg-white rounded-xl p-4 border border-blue-100">
                              <div className="flex items-center gap-2 mb-2">
                                <FiGlobe className="w-5 h-5 text-blue-600" />
                                <span className="font-semibold text-slate-900">Location</span>
                              </div>
                              <div className="text-lg font-bold text-slate-900">{partner.location}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-2xl border border-blue-100 p-6">
                          <h4 className="font-bold text-slate-900 mb-4">Featured Programs</h4>
                          <div className="space-y-3">
                            {partner.programs.map((program, idx) => (
                              <motion.div
                                key={program}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer group"
                              >
                                <FiChevronRight className="w-4 h-4 text-blue-600" />
                                <span className="text-slate-800 font-medium">{program}</span>
                                <FiExternalLink className="w-4 h-4 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Partnership Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                value: '50+', 
                label: 'Global Partners', 
                description: 'International collaborations',
                icon: <FiGlobe className="w-6 h-6" />,
                color: 'from-blue-500 to-blue-600'
              },
              { 
                value: '100K+', 
                label: 'Student Success', 
                description: 'Graduates placed globally',
                icon: <FiUsers className="w-6 h-6" />,
                color: 'from-emerald-500 to-emerald-600'
              },
              { 
                value: '98%', 
                label: 'Satisfaction Rate', 
                description: 'Student satisfaction score',
                icon: <FiAward className="w-6 h-6" />,
                color: 'from-amber-500 to-amber-600'
              },
              { 
                value: '24/7', 
                label: 'Support Network', 
                description: 'Round-the-clock assistance',
                icon: <FiStar className="w-6 h-6" />,
                color: 'from-purple-500 to-purple-600'
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <div className="relative bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-sm font-semibold text-slate-800">{stat.label}</div>
                      <div className="text-xs text-slate-600 mt-1">{stat.description}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Global Education Journey</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Leverage our exclusive university partnerships to access world-class education 
                and build a successful international career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Programs
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  Speak with an Advisor
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`floating-${i}`}
          className="absolute hidden lg:block"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
        </motion.div>
      ))}
    </section>
  );
}

export default PartnerOrbit;