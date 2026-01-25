/**
 * Premium Animated About Page - Synergy Scholars Academia
 * Showcases our elite academic mission with sophisticated animations and luxury design
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import { testimonials } from '../data/testimonials';
import { FiTarget, FiGlobe, FiUsers, FiAward, FiTrendingUp, FiBookOpen, FiStar, FiChevronRight, FiArrowRight } from 'react-icons/fi';

function About() {
  const containerRef = useRef(null);
  const [activeValue, setActiveValue] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Update scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setScrollProgress);
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Auto-rotate core values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.animate-section').forEach(el => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Core values data
  const coreValues = [
    {
      id: 0,
      title: 'Uncompromising Quality',
      description: 'We maintain the highest academic standards, ensuring every program meets rigorous international benchmarks and delivers exceptional value to our scholars.',
      icon: FiAward,
      color: 'from-indigo-600 to-purple-600',
      stats: ['100%', 'Accreditation Rate']
    },
    {
      id: 1,
      title: 'Personalized Mentorship',
      description: 'Each scholar receives dedicated guidance from industry experts, creating tailored pathways that align with individual career aspirations and professional goals.',
      icon: FiUsers,
      color: 'from-purple-600 to-pink-500',
      stats: ['1:1', 'Mentor Ratio']
    },
    {
      id: 2,
      title: 'Global Recognition',
      description: 'Our credentials are recognized by leading institutions and employers worldwide, opening doors to prestigious opportunities across international markets.',
      icon: FiGlobe,
      color: 'from-indigo-500 to-cyan-500',
      stats: ['75+', 'Countries']
    },
    {
      id: 3,
      title: 'Career Acceleration',
      description: 'We focus on delivering tangible career outcomes, with programs designed to enhance professional standing, expand networks, and unlock executive opportunities.',
      icon: FiTrendingUp,
      color: 'from-pink-500 to-rose-500',
      stats: ['92%', 'Advancement Rate']
    }
  ];

  // Leadership team
  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former Google Engineering Lead with 15+ years in edtech innovation',
      expertise: 'EdTech Strategy & Product Development',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Learning Officer',
      bio: 'PhD in Computer Science, Stanford. Former Head of Curriculum at Coursera',
      expertise: 'Curriculum Design & Learning Science',
      color: 'from-emerald-500 to-green-400'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Careers',
      bio: 'Ex-Amazon Technical Recruiter, placed 500+ engineers at top tech companies',
      expertise: 'Career Development & Industry Relations',
      color: 'from-purple-500 to-pink-400'
    }
  ];

  // Impact stats
  const impactStats = [
    { value: '15,000+', label: 'Elite Professionals', icon: '👨‍🎓', color: 'text-indigo-600' },
    { value: '75+', label: 'Global Presence', icon: '🌍', color: 'text-purple-600' },
    { value: '92%', label: 'Career Transformation', icon: '🚀', color: 'text-pink-600' },
    { value: '4.8/5', label: 'Excellence Rating', icon: '⭐', color: 'text-indigo-600' }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-white via-indigo-50/10 to-purple-50/10 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
          <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
        </div>

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#6366f1" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <motion.rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              style={{ x: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
            />
          </svg>
        </div>
      </div>

      {/* About Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0">
          {/* Animated rings */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-indigo-300/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 40, repeat: Infinity, ease: "linear" }
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-300/20 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: -360,
            }}
            transition={{
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 30, repeat: Infinity, ease: "linear" }
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8 group"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  '0 0 0px rgba(59, 130, 246, 0)',
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 0px rgba(59, 130, 246, 0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-slate-700 tracking-wider">
              OUR LEGACY & COMMITMENT
            </span>
            <FiStar className="w-4 h-4 text-indigo-600" />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="text-slate-900">Where Ambition Meets </span>
              <motion.span
                className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Achievement
              </motion.span>
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Empowering visionary leaders and ambitious professionals to unlock their full potential through distinguished academic programs, personalized mentorship, and strategic career advancement.
            </p>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {impactStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <motion.div
              className="w-6 h-10 mx-auto border-2 border-indigo-500/50 rounded-full flex justify-center"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-1 h-3 bg-indigo-600 rounded-full mt-2"
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="animate-section relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/80 rounded-full border border-indigo-200/50 mb-4">
              <span className="text-sm font-medium text-indigo-700">OUR FOUNDATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Pioneering <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Academic Innovation</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Synergy Scholars Academia emerged from a profound commitment to academic distinction: <strong className="text-indigo-700">we believe that exceptional talent deserves exceptional opportunities.</strong> Our institution was conceived to serve as a catalyst for professional transformation, connecting ambitious individuals with prestigious academic pathways, industry-leading mentors, and career-defining experiences that shape tomorrow's leaders.
                </p>
                
                {/* Animated highlight */}
                <motion.div
                  className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-500"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-xl rounded-xl border border-gray-200/50 shadow-luxury"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <FiGlobe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">International Prestige</h3>
                    <p className="text-slate-700">Delivering unparalleled academic excellence to distinguished professionals across 75+ nations, each journey uniquely crafted for transformative success.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-xl rounded-xl border border-gray-200/50 shadow-luxury"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <FiTarget className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Results-Oriented Excellence</h3>
                    <p className="text-slate-700">Our strategic approach ensures every interaction, program, and mentorship opportunity is designed to deliver measurable career advancement and lasting impact.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values - Interactive Section */}
      <section id="values" className="animate-section py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">Core Values</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              The foundational pillars that shape our commitment to academic distinction and professional transformation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Interactive value selector */}
            <div className="relative h-[400px]">
              {coreValues.map((value, idx) => (
                <motion.button
                  key={value.id}
                  onClick={() => setActiveValue(value.id)}
                  className={`absolute left-0 right-0 p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                    activeValue === value.id
                      ? 'bg-white/90 border-indigo-300/50 shadow-luxury-lg z-10'
                      : 'bg-white/60 border-gray-200/50 hover:border-indigo-200/50'
                  }`}
                  style={{ top: `${idx * 100}px` }}
                  whileHover={{ scale: activeValue === value.id ? 1 : 1.05 }}
                  animate={{
                    y: activeValue === value.id ? 0 : idx === activeValue ? 0 : 0,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center flex-shrink-0`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                      <p className="text-slate-700 text-sm mt-1">{value.description}</p>
                    </div>
                    {activeValue === value.id && (
                      <motion.div
                        className="ml-auto"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <FiChevronRight className="w-5 h-5 text-indigo-600" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Animated value display */}
            <motion.div
              key={activeValue}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-8 shadow-luxury-lg"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${coreValues[activeValue].color} flex items-center justify-center mb-6 mx-auto`}>
                    {(() => { const Icon = coreValues[activeValue].icon; return <Icon className="w-10 h-10 text-white" />; })()}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 text-center mb-4">
                    {coreValues[activeValue].title}
                  </h3>
                  
                  <p className="text-slate-700 text-center mb-8 leading-relaxed">
                    {coreValues[activeValue].description}
                  </p>
                  
                  {/* Stats display */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900 mb-2">
                      {coreValues[activeValue].stats[0]}
                    </div>
                    <div className="text-slate-600">
                      {coreValues[activeValue].stats[1]}
                    </div>
                  </div>

                  {/* Animated progress ring */}
                  <div className="mt-8 flex justify-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={`url(#value-gradient-${activeValue})`}
                          strokeWidth="10"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 0.8 }}
                          transition={{ duration: 1, delay: 0.2 }}
                          transform="rotate(-90 50 50)"
                        />
                        <defs>
                          <linearGradient id={`value-gradient-${activeValue}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-100/40 via-purple-100/40 to-pink-100/40"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating elements */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.8, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">Professional Future</span>
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Become part of an elite community of leaders, innovators, and visionaries who chose Synergy Scholars Academia as their pathway to distinction
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 backdrop-blur-sm text-white font-semibold rounded-xl border border-indigo-300/30 hover:border-indigo-400/50 transition-all shadow-luxury-lg hover:shadow-luxury-lg"
            >
              Join the Elite
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />
    </div>
  );
}

export default About;
