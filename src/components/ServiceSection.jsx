/**
 * Premium Enhanced Services Section for QualifyLearn
 * Professional WHITE theme with sophisticated animations and advanced interactions
 * Includes 3D hover effects, particle systems, and enhanced data visualization
 */

import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap, 
  Globe, 
  Briefcase, 
  Users,
  Target,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Zap,
  TrendingUp,
  Shield,
  BarChart3,
  Globe2,
  Target as TargetIcon,
  CheckCircle2,
  Star,
  ExternalLink,
  PlayCircle,
  Cpu,
  Brain,
  Rocket,
  Infinity as InfinityIcon,
  MessageCircle
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

function PremiumServicesSection() {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeDetailView, setActiveDetailView] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  // Mouse position tracking for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = 1 - rect.bottom / window.innerHeight;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced services data with additional details
  const services = [
    {
      id: 1,
      title: 'Academic Program Selection',
      description: 'AI-powered matching with 500+ global universities using predictive analytics and career alignment algorithms.',
      detailedDescription: 'Our proprietary AI system analyzes 50+ data points including academic history, career aspirations, learning style, and market trends to recommend optimal educational pathways.',
      icon: <Brain className="w-10 h-10" />,
      features: ['Predictive AI Matching', 'Real-time Market Analysis', 'ROI Forecasting', 'Cultural Fit Scoring'],
      stats: '98.7% Match Accuracy',
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 via-white to-cyan-50',
      borderColor: 'border-blue-100',
      textColor: 'text-blue-700',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      delay: 0,
      successRate: 98.7,
      duration: '2-4 Weeks',
      featured: true,
      processSteps: ['Profile Assessment', 'AI Analysis', 'University Shortlist', 'Final Selection'],
      outcomes: ['Best-fit University', 'Career Alignment', 'Cost Optimization', 'Success Probability'],
      technologies: ['Machine Learning', 'Predictive Analytics', 'Big Data Processing']
    },
    {
      id: 2,
      title: 'University Application Mastery',
      description: 'Strategic application development with personalized story crafting and competitive positioning.',
      detailedDescription: 'We transform your achievements into compelling narratives that resonate with admissions committees, using proven frameworks that increase acceptance rates by 3x.',
      icon: <Rocket className="w-10 h-10" />,
      features: ['Narrative Development', 'Portfolio Enhancement', 'Interview Simulation', 'Strategic Positioning'],
      stats: '94% Acceptance Rate',
      color: 'from-purple-600 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 via-white to-pink-50',
      borderColor: 'border-purple-100',
      textColor: 'text-purple-700',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      delay: 0.1,
      successRate: 94,
      duration: '4-6 Weeks',
      processSteps: ['Strategy Session', 'Document Development', 'Review Cycles', 'Final Submission'],
      outcomes: ['Stronger Applications', 'Higher Acceptance', 'Scholarship Eligibility', 'Confidence Boost']
    },
    {
      id: 3,
      title: 'Global Visa Navigation',
      description: 'Comprehensive visa processing with AI-powered document verification and interview preparation.',
      detailedDescription: 'Our AI system cross-references immigration policies across 30+ countries and provides real-time document verification to ensure 100% compliance.',
      icon: <Globe2 className="w-10 h-10" />,
      features: ['AI Document Check', 'Interview AI Simulation', 'Compliance Monitoring', 'Emergency Support'],
      stats: '99.2% Success Rate',
      color: 'from-emerald-600 to-teal-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
      borderColor: 'border-emerald-100',
      textColor: 'text-emerald-700',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      delay: 0.2,
      successRate: 99.2,
      duration: '3-8 Weeks',
      processSteps: ['Document Audit', 'Application Prep', 'Interview Training', 'Status Monitoring']
    },
    {
      id: 4,
      title: 'Career Pathway Strategy',
      description: 'Data-driven career planning with real-time market insights and skill gap analysis.',
      detailedDescription: 'Leveraging real-time job market data and industry trends to create personalized career roadmaps with measurable milestones.',
      icon: <TargetIcon className="w-10 h-10" />,
      features: ['Market Intelligence', 'Skill Gap Analysis', 'Network Mapping', 'Salary Negotiation'],
      stats: '87% Higher Earnings',
      color: 'from-amber-600 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-50 via-white to-orange-50',
      borderColor: 'border-amber-100',
      textColor: 'text-amber-700',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      delay: 0.3,
      successRate: 87,
      duration: 'Ongoing',
      processSteps: ['Assessment', 'Strategy Development', 'Implementation', 'Progress Review']
    },
    {
      id: 5,
      title: 'Elite Mentorship Network',
      description: 'Access to 300+ industry leaders and alumni through AI-powered matching.',
      detailedDescription: 'Our intelligent matching algorithm connects you with mentors based on career goals, personality compatibility, and industry alignment.',
      icon: <Users className="w-10 h-10" />,
      features: ['AI Mentor Matching', 'Exclusive Workshops', 'Alumni Access', 'Peer Learning Pods'],
      stats: '300+ Top Mentors',
      color: 'from-indigo-600 to-violet-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 via-white to-violet-50',
      borderColor: 'border-indigo-100',
      textColor: 'text-indigo-700',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-violet-500',
      delay: 0.4,
      successRate: 96,
      duration: 'Flexible',
      processSteps: ['Profile Creation', 'Mentor Matching', 'Session Planning', 'Progress Tracking']
    },
    {
      id: 6,
      title: 'Scholarship Optimization',
      description: 'Strategic funding maximization with automated search and application management.',
      detailedDescription: 'Our platform continuously scans 10,000+ funding opportunities and automates application tracking to maximize financial aid success.',
      icon: <Award className="w-10 h-10" />,
      features: ['Automated Search', 'Essay Optimization', 'Deadline Tracking', 'Grant Strategy'],
      stats: '$8.2M+ Secured',
      color: 'from-rose-600 to-red-500',
      bgColor: 'bg-gradient-to-br from-rose-50 via-white to-red-50',
      borderColor: 'border-rose-100',
      textColor: 'text-rose-700',
      iconBg: 'bg-gradient-to-br from-rose-500 to-red-500',
      delay: 0.5,
      successRate: 78,
      duration: 'Ongoing',
      processSteps: ['Opportunity Scan', 'Application Strategy', 'Document Preparation', 'Follow-up']
    },
    {
      id: 7,
      title: 'Academic Excellence',
      description: 'Personalized academic support with adaptive learning technology and performance analytics.',
      detailedDescription: 'AI-powered adaptive learning system that identifies knowledge gaps and provides targeted improvement strategies in real-time.',
      icon: <BarChart3 className="w-10 h-10" />,
      features: ['Adaptive Learning', 'Performance Analytics', 'Research Support', 'Publication Strategy'],
      stats: '3.9 Average GPA',
      color: 'from-green-600 to-lime-500',
      bgColor: 'bg-gradient-to-br from-green-50 via-white to-lime-50',
      borderColor: 'border-green-100',
      textColor: 'text-green-700',
      iconBg: 'bg-gradient-to-br from-green-500 to-lime-500',
      delay: 0.6,
      successRate: 95,
      duration: 'Semester-based',
      processSteps: ['Assessment', 'Custom Plan', 'Implementation', 'Progress Review']
    },
    {
      id: 8,
      title: 'Strategic Timeline',
      description: 'Intelligent deadline management with predictive scheduling and milestone tracking.',
      detailedDescription: 'AI-driven timeline optimization that accounts for all variables and provides real-time adjustments to ensure perfect execution.',
      icon: <InfinityIcon className="w-10 h-10" />,
      features: ['Predictive Scheduling', 'Automated Reminders', 'Risk Assessment', 'Progress Analytics'],
      stats: '100% On-Time Delivery',
      color: 'from-slate-600 to-gray-500',
      bgColor: 'bg-gradient-to-br from-slate-50 via-white to-gray-50',
      borderColor: 'border-slate-100',
      textColor: 'text-slate-700',
      iconBg: 'bg-gradient-to-br from-slate-500 to-gray-500',
      delay: 0.7,
      successRate: 100,
      duration: 'Project-based',
      processSteps: ['Timeline Creation', 'Milestone Setting', 'Progress Monitoring', 'Adjustments']
    }
  ];

  // Enhanced statistics data
  const enhancedStats = [
    { value: '10,000+', label: 'Successful Placements', icon: '🎓', trend: '+32% YoY', color: 'from-blue-500 to-cyan-500' },
    { value: '$50M+', label: 'Scholarships Secured', icon: '💰', trend: '+45% YoY', color: 'from-emerald-500 to-teal-500' },
    { value: '30+', label: 'Countries Served', icon: '🌐', trend: 'Global Reach', color: 'from-purple-500 to-pink-500' },
    { value: '99.1%', label: 'Client Satisfaction', icon: '⭐', trend: '5.0 Rating', color: 'from-amber-500 to-orange-500' },
  ];

  // Handle mouse move for parallax effects
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Get service by ID
  const getActiveService = () => services.find(s => s.id === activeDetailView);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white"
      onMouseMove={handleMouseMove}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-50/80 via-transparent to-transparent" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                             linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Parallax Layers */}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl" />
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 origin-left z-50"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      {/* Particle Network Background */}
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Premium Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Animated Badge with Glow */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-sm rounded-full border border-blue-200 mb-8 relative overflow-hidden group"
          >
            {/* Animated Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              animate={{
                x: [-100, 300],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles className="w-5 h-5 text-blue-600" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent uppercase tracking-widest">
              Industry-Leading Excellence
            </span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: star * 0.1,
                    repeat: Infinity,
                  }}
                >
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Main Title with Staggered Animation */}
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 right-0 mx-auto top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            />
            
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Transformative
                </span>{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                    Education
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              >
                Leverage cutting-edge AI technology and expert mentorship to achieve your academic and career aspirations with precision and confidence.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid with Enhanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: service.delay, 
                duration: 0.7,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setActiveDetailView(service.id)}
              className="relative group cursor-pointer"
            >
              {/* 3D Card Container */}
              <div className={`relative h-full ${service.bgColor} rounded-2xl border ${service.borderColor} p-8 overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl`}>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent" />
                </div>

                {/* Featured Badge */}
                {service.featured && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute -top-3 -left-2 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-r-full shadow-lg"
                  >
                    MOST POPULAR
                  </motion.div>
                )}

                {/* Animated Icon Container */}
                <motion.div
                  className="relative mb-8"
                  animate={hoveredService === service.id ? {
                    rotateY: [0, 180, 0],
                  } : {}}
                  transition={{ duration: 1.5 }}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 ${service.iconBg} blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl ${service.iconBg} text-white shadow-xl border border-white/30`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Success Rate Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: service.delay + 0.2 }}
                    className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg border-2 border-white"
                  >
                    {service.successRate}%
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {service.title}
                    <ChevronRight className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features with Progress Indicators */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: service.delay + idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                        />
                        <span className="text-sm font-medium text-slate-700">{feature}</span>
                        <motion.div
                          className="ml-auto text-xs text-slate-500"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: service.delay + idx * 0.2 }}
                        >
                          +{Math.floor(Math.random() * 30) + 70}%
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats and CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: service.delay + 0.3 }}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg`}
                    >
                      {service.stats}
                    </motion.div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-700" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent rounded-2xl pointer-events-none"
                  initial={false}
                  animate={hoveredService === service.id ? {
                    boxShadow: `0 0 40px 10px ${service.color.split(' ')[1].replace('from-', '').replace('-600', '')}20`
                  } : {}}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Statistics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm rounded-3xl border border-blue-100 p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enhancedStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-50 group-hover:border-blue-200 transition-all duration-500 shadow-md group-hover:shadow-xl">
                    {/* Animated Value */}
                    <div className="text-center mb-4">
                      <motion.div
                        className="text-5xl font-bold mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </span>
                      </motion.div>
                      <div className="text-3xl mb-3">{stat.icon}</div>
                      <div className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</div>
                      <div className="text-sm text-cyan-600 font-medium flex items-center justify-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {stat.trend}
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-1 bg-slate-200 rounded-full overflow-hidden mt-4">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${stat.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Live Updates Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-slate-700">Live Updates</span>
                </div>
                <div className="text-sm text-slate-600">
                  <span className="text-cyan-600 font-semibold">3</span> students placed in last hour
                </div>
                <div className="text-sm text-slate-600">
                  <span className="text-emerald-600 font-semibold">$45K</span> scholarships awarded today
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Detailed Service Modal */}
        <AnimatePresence>
          {activeDetailView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetailView(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-blue-100 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {getActiveService() && (
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-2xl ${getActiveService().iconBg} flex items-center justify-center`}>
                          {getActiveService().icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{getActiveService().title}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getActiveService().color} text-white text-sm font-semibold`}>
                              {getActiveService().stats}
                            </div>
                            <div className="text-sm text-slate-500">Duration: {getActiveService().duration}</div>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveDetailView(null)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <ArrowRight className="w-6 h-6 text-slate-700 rotate-45" />
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">Detailed Description</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {getActiveService().detailedDescription}
                        </p>
                        
                        {getActiveService().processSteps && (
                          <div className="mt-8">
                            <h4 className="text-lg font-semibold text-slate-900 mb-4">Process Flow</h4>
                            <div className="space-y-3">
                              {getActiveService().processSteps.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                                    {idx + 1}
                                  </div>
                                  <span className="text-slate-700">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Outcomes</h4>
                        <div className="space-y-4">
                          {getActiveService().outcomes?.map((outcome, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                              <span className="text-slate-700">{outcome}</span>
                            </div>
                          ))}
                        </div>

                        {getActiveService().technologies && (
                          <div className="mt-8">
                            <h4 className="text-lg font-semibold text-slate-900 mb-4">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {getActiveService().technologies.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-slate-500">Success Probability</div>
                          <div className="text-2xl font-bold text-slate-900">
                            {getActiveService().successRate}% <span className="text-sm text-green-600">↑</span>
                          </div>
                        </div>
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 shadow-lg">
                          Start This Service
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10" />
            
            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            <div className="relative backdrop-blur-sm bg-white/70 border border-blue-100 p-12">
              <div className="text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-xl"
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Begin Your Transformation Today
                </h3>
                
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                  Join thousands of successful students who have accelerated their careers with our premium services.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Book Premium Consultation
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                  
                  <button className="px-10 py-4 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300">
                    View Case Studies
                  </button>
                </div>

                <div className="mt-8 text-sm text-slate-600">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>100% Confidential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span>24/7 Priority Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Money-Back Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center shadow-blue-500/30"
        >
          <Sparkles className="w-6 h-6 text-white" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full shadow-2xl flex items-center justify-center shadow-emerald-500/30"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </section>
  );
}

// Particle Network Component for Background
function ParticleNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
          }}
          animate={{
            x: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
            y: [
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
              Math.random() * 100 + '%',
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default PremiumServicesSection;