import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import { testimonials } from '../data/testimonials';
import { 
  Target, 
  Globe, 
  Users, 
  Award, 
  TrendingUp, 
  BookOpen, 
  Star, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  GraduationCap,
  Brain,
  Rocket,
  Shield,
  Zap,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';

function About() {
  const containerRef = useRef(null);
  const [activeValue, setActiveValue] = useState(0);
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

  // Core values data
  const coreValues = [
    {
      id: 0,
      title: 'Uncompromising Quality',
      description: 'We maintain the highest academic standards, ensuring every program meets rigorous international benchmarks and delivers exceptional value to our scholars.',
      icon: Award,
      gradient: 'from-blue-500 to-cyan-500',
      stats: ['100%', 'Accreditation Rate']
    },
    {
      id: 1,
      title: 'Personalized Mentorship',
      description: 'Each scholar receives dedicated guidance from industry experts, creating tailored pathways that align with individual career aspirations and professional goals.',
      icon: Users,
      gradient: 'from-violet-500 to-fuchsia-500',
      stats: ['1:1', 'Mentor Ratio']
    },
    {
      id: 2,
      title: 'Global Recognition',
      description: 'Our credentials are recognized by leading institutions and employers worldwide, opening doors to prestigious opportunities across international markets.',
      icon: Globe,
      gradient: 'from-emerald-500 to-teal-500',
      stats: ['75+', 'Countries']
    },
    {
      id: 3,
      title: 'Career Acceleration',
      description: 'We focus on delivering tangible career outcomes, with programs designed to enhance professional standing, expand networks, and unlock executive opportunities.',
      icon: TrendingUp,
      gradient: 'from-amber-500 to-orange-500',
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
    { value: '15,000+', label: 'Elite Professionals', icon: GraduationCap, color: 'from-blue-500 to-cyan-500' },
    { value: '75+', label: 'Global Presence', icon: Globe, color: 'from-violet-500 to-fuchsia-500' },
    { value: '92%', label: 'Career Transformation', icon: Rocket, color: 'from-emerald-500 to-teal-500' },
    { value: '4.8/5', label: 'Excellence Rating', icon: Star, color: 'from-amber-500 to-orange-500' }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/30 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient mesh */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:40px_40px]" />
      </div>

      {/* About Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0">
          {/* Animated rings */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-300/20 rounded-full"
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-violet-300/20 rounded-full"
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
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl mb-8 shadow-2xl shadow-violet-500/5"
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600" />
              <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 animate-ping" />
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-wide">
              OUR LEGACY & COMMITMENT
            </span>
            <Sparkles className="w-4 h-4 text-violet-600 animate-pulse" />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gray-900">Where Ambition Meets </span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Achievement
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 rounded-full"
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering visionary leaders and ambitious professionals to unlock their full potential through distinguished academic programs, personalized mentorship, and strategic career advancement.
            </p>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {impactStats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6 shadow-xl hover:shadow-2xl hover:border-gray-300/50 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 mx-auto border-2 border-gray-400/30 rounded-full flex justify-center"
            >
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-gray-900 to-gray-700 rounded-full mt-2"
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
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl mb-10 shadow-2xl shadow-violet-500/5"
            >
              <div className="relative">
                <Brain className="w-5 h-5 text-blue-600" />
                <div className="absolute inset-0 w-5 h-5 text-blue-600/40 animate-ping" />
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-wide">
                OUR FOUNDATION
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gray-900">Pioneering </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Academic Innovation
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 rounded-full"
                />
              </span>
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
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Synergy Scholars Academia emerged from a profound commitment to academic distinction: <strong className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">we believe that exceptional talent deserves exceptional opportunities.</strong> Our institution was conceived to serve as a catalyst for professional transformation, connecting ambitious individuals with prestigious academic pathways, industry-leading mentors, and career-defining experiences that shape tomorrow's leaders.
                </p>
                
                {/* Animated highlight */}
                <motion.div
                  className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-violet-500 to-fuchsia-500"
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
                  whileHover={{ x: 5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6 shadow-xl hover:shadow-2xl hover:border-gray-300/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">International Prestige</h3>
                        <p className="text-gray-600">Delivering unparalleled academic excellence to distinguished professionals across 75+ nations, each journey uniquely crafted for transformative success.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6 shadow-xl hover:shadow-2xl hover:border-gray-300/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Results-Oriented Excellence</h3>
                        <p className="text-gray-600">Our strategic approach ensures every interaction, program, and mentorship opportunity is designed to deliver measurable career advancement and lasting impact.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            
          </div>
        </div>
      </section>

      {/* Core Values - Interactive Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our <span className="relative">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Core Values
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 rounded-full"
                />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The foundational pillars that shape our commitment to academic distinction and professional transformation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Interactive value selector */}
            <div className="relative space-y-4">
              {coreValues.map((value, idx) => {
                const IconComponent = value.icon;
                return (
                  <motion.button
                    key={value.id}
                    onClick={() => setActiveValue(value.id)}
                    className={`relative w-full p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                      activeValue === value.id
                        ? 'bg-white/90 border-gray-300/50 shadow-2xl z-10'
                        : 'bg-white/60 border-gray-200/50 hover:border-gray-300/50'
                    }`}
                    whileHover={{ scale: activeValue === value.id ? 1 : 1.02 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{value.description}</p>
                      </div>
                      {activeValue === value.id && (
                        <motion.div
                          className="ml-auto"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <ChevronRight className="w-5 h-5 text-blue-600" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Animated value display */}
            <motion.div
              key={activeValue}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200/50 p-8 shadow-2xl">
                <div className="h-full">
                  <motion.div
                    key={activeValue}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full"
                  >
                    {(() => {
                      const IconComponent = coreValues[activeValue].icon;
                      return (
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${coreValues[activeValue].gradient} flex items-center justify-center mb-6 mx-auto shadow-xl`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      );
                    })()}
                    
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                      {coreValues[activeValue].title}
                    </h3>
                    
                    <p className="text-gray-600 text-center mb-8 leading-relaxed">
                      {coreValues[activeValue].description}
                    </p>
                    
                    {/* Stats display */}
                    <div className="text-center mb-8">
                      <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                        {coreValues[activeValue].stats[0]}
                      </div>
                      <div className="text-gray-600">
                        {coreValues[activeValue].stats[1]}
                      </div>
                    </div>

                    {/* Animated progress ring */}
                    <div className="flex justify-center">
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
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="50%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-fuchsia-500/5"
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
              className="absolute w-2 h-2 bg-blue-300/30 rounded-full"
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gray-900">Transform Your </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Professional Future
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 rounded-full"
                />
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
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
              href="/programs"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-violet-700 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0.5 bg-gradient-to-r from-white/10 to-transparent rounded-2xl" />
              <span className="relative text-white font-bold text-lg tracking-wide">
                Explore Programs
              </span>
              <ArrowRight className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-300/50 shadow-xl hover:shadow-2xl hover:border-gray-400/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative font-bold text-gray-900 text-lg tracking-wide">
                Schedule Consultation
              </span>
              <Calendar className="relative w-5 h-5 text-violet-600 group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}

export default About;