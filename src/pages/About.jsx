/**
 * Premium Animated About Page
 * Showcases QualifyLearn's story with sophisticated animations
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
      title: 'Student Success First',
      description: 'Every decision centers on student outcomes. We measure success by achievements.',
      icon: FiTarget,
      color: 'from-blue-600 to-cyan-500',
      stats: ['98%', 'Satisfaction Rate']
    },
    {
      id: 1,
      title: 'Excellence in Education',
      description: 'Highest standards in curriculum design, instructors, and learning experiences.',
      icon: FiStar,
      color: 'from-amber-500 to-orange-500',
      stats: ['4.9/5', 'Student Rating']
    },
    {
      id: 2,
      title: 'Community Empowerment',
      description: 'We believe in lifting each other up. Peer support is integral to our success.',
      icon: FiUsers,
      color: 'from-emerald-500 to-green-500',
      stats: ['10K+', 'Global Community']
    },
    {
      id: 3,
      title: 'Innovation & Growth',
      description: 'Continuously evolving based on industry trends and student feedback.',
      icon: FiTrendingUp,
      color: 'from-purple-500 to-pink-500',
      stats: ['200+', 'Updated Courses']
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
    { value: '10,000+', label: 'Students Transformed', icon: '👨‍🎓', color: 'text-blue-400' },
    { value: '50+', label: 'Countries Reached', icon: '🌍', color: 'text-emerald-400' },
    { value: '85%', label: 'Career Advancement', icon: '🚀', color: 'text-amber-400' },
    { value: '4.9/5', label: 'Student Rating', icon: '⭐', color: 'text-purple-400' }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
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
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#3B82F6" strokeWidth="1" />
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/20 rounded-full"
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/20 rounded-full"
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
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
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
            <span className="text-sm font-semibold text-white tracking-wider">
              OUR STORY & MISSION
            </span>
            <FiStar className="w-4 h-4 text-blue-400" />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="text-white">We're Building </span>
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Futures
              </motion.span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming education through innovation, accessibility, and results-driven learning experiences.
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
                <div className="text-sm text-gray-400">{stat.label}</div>
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
              className="w-6 h-10 mx-auto border-2 border-blue-500/50 rounded-full flex justify-center"
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
                className="w-1 h-3 bg-blue-500 rounded-full mt-2"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4">
              <span className="text-sm font-medium text-blue-400">OUR JOURNEY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From Vision to <span className="text-blue-400">Global Impact</span>
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
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  QualifyLearn was born from a simple yet powerful idea: <strong className="text-blue-400">education should be accessible to everyone, everywhere.</strong> In a world where opportunities are often limited by geography, financial constraints, or traditional barriers, we saw a need to create a bridge to quality education.
                </p>
                
                {/* Animated highlight */}
                <motion.div
                  className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500"
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
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <FiGlobe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
                    <p className="text-gray-400">Serving students across 50+ countries with localized learning experiences.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <FiTarget className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Mission Driven</h3>
                    <p className="text-gray-400">Every decision centers on student success and measurable outcomes.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision and interaction at QualifyLearn
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
                      ? 'bg-white/10 border-blue-500/50 shadow-2xl shadow-blue-500/20 z-10'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
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
                      <h3 className="text-lg font-bold text-white">{value.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{value.description}</p>
                    </div>
                    {activeValue === value.id && (
                      <motion.div
                        className="ml-auto"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <FiChevronRight className="w-5 h-5 text-blue-400" />
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
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
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
                  
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    {coreValues[activeValue].title}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-8 leading-relaxed">
                    {coreValues[activeValue].description}
                  </p>
                  
                  {/* Stats display */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">
                      {coreValues[activeValue].stats[0]}
                    </div>
                    <div className="text-gray-400">
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
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#10B981" />
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
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20"
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
              className="absolute w-2 h-2 bg-white rounded-full"
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Your Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who transformed their careers with QualifyLearn
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
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:border-white/40 transition-all"
            >
              Speak with an Advisor
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
