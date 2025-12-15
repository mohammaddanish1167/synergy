import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Clock, 
  Users,
  TrendingUp,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Award,
  GraduationCap,
  Briefcase,
  Book,
  Globe,
  CheckCircle,
  Target,
  Shield
} from 'lucide-react';

function FeaturedPrograms() {
  const navigate = useNavigate();
  const scrollerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Featured Programs Data
  const featuredPrograms = [
    {
      id: 'honorary-doctorate',
      title: 'Honorary Doctorate',
      subtitle: 'Lifetime Achievement Recognition',
      description: 'Global recognition for exceptional professional achievements and contributions to your industry.',
      icon: Award,
      color: '#1E40AF',
      gradient: 'from-blue-700 to-blue-900',
      duration: 'Prestigious Honor',
      students: '500+ Awarded',
      path: '/honorary-doctorate',
      highlights: [
        'International Recognition',
        'Career Distinction',
        'Leadership Acknowledgment'
      ],
      eligibility: 'Senior Executives',
      level: 'Doctoral Level'
    },
    {
      id: 'honorary-professorship',
      title: 'Honorary Professorship',
      subtitle: 'Academic Distinction',
      description: 'Distinguished academic recognition for contributions to education and research excellence.',
      icon: GraduationCap,
      color: '#7C3AED',
      gradient: 'from-purple-700 to-purple-900',
      duration: 'Academic Honor',
      students: '300+ Appointed',
      path: '/honorary-professorship',
      highlights: [
        'Teaching Excellence',
        'Research Recognition',
        'Academic Leadership'
      ],
      eligibility: 'Educators & Researchers',
      level: 'Professorial Level'
    },
    {
      id: 'phd',
      title: 'PhD Programs',
      subtitle: 'Research Doctorate',
      description: 'Rigorous research programs developing expertise and contributing original knowledge to your field.',
      icon: Book,
      color: '#059669',
      gradient: 'from-emerald-700 to-emerald-900',
      duration: '3-6 Years',
      students: '2,000+ Graduates',
      path: '/phd',
      highlights: [
        'Original Research',
        'Academic Expertise',
        'Global Recognition'
      ],
      eligibility: 'Master\'s Degree',
      level: 'Doctoral Research'
    },
    {
      id: 'mba',
      title: 'Master of Business Administration',
      subtitle: 'Executive Leadership',
      description: 'Comprehensive business leadership program designed for senior management and executive roles.',
      icon: Briefcase,
      color: '#D97706',
      gradient: 'from-amber-700 to-amber-900',
      duration: '1-2 Years',
      students: '5,000+ Graduates',
      path: '/mba',
      highlights: [
        'Strategic Leadership',
        'Business Acumen',
        'Global Network'
      ],
      eligibility: 'Bachelor\'s Degree',
      level: 'Master\'s Level'
    },
    {
      id: 'dba',
      title: 'Doctor of Business Administration',
      subtitle: 'Executive Doctorate',
      description: 'Advanced business research program combining academic rigor with practical business application.',
      icon: Globe,
      color: '#DC2626',
      gradient: 'from-rose-700 to-rose-900',
      duration: '3-4 Years',
      students: '800+ Graduates',
      path: '/dba',
      highlights: [
        'Executive Research',
        'Business Innovation',
        'Leadership Strategy'
      ],
      eligibility: 'MBA or Equivalent',
      level: 'Doctoral Executive'
    }
  ];

  // Auto-scroll animation
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const el = scrollerRef.current;
    if (!el) return;

    const speed = 0.6;
    let animationId;
    let lastTime = 0;

    const animateScroll = (currentTime) => {
      if (!el || !lastTime) {
        lastTime = currentTime;
        animationId = requestAnimationFrame(animateScroll);
        return;
      }

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        const scrollAmount = (speed * deltaTime) / 16;
        el.scrollBy({ left: scrollAmount, behavior: 'auto' });
      }

      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying, isHovered]);

  // Manual scroll controls
  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Animate on view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Statistics
  const stats = [
    { 
      value: '98%', 
      label: 'Program Completion', 
      description: 'Student success rate',
      icon: <Star className="w-5 h-5" />, 
      color: 'from-amber-500 to-orange-500' 
    },
    { 
      value: '8,600+', 
      label: 'Global Alumni', 
      description: 'Network of professionals',
      icon: <Users className="w-5 h-5" />, 
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      value: '25+', 
      label: 'Years Experience', 
      description: 'Academic excellence',
      icon: <Clock className="w-5 h-5" />, 
      color: 'from-emerald-500 to-teal-500' 
    },
    { 
      value: '100%', 
      label: 'Accredited', 
      description: 'Globally recognized',
      icon: <Shield className="w-5 h-5" />, 
      color: 'from-purple-500 to-pink-500' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const handleProgramClick = (path) => {
    navigate(path);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-50/20 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Academic Programs
              </span>
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6"
          >
            Prestigious <span className="font-semibold text-gray-800">Academic</span> Programs
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Internationally recognized programs designed for professionals seeking academic distinction 
            and career advancement through rigorous, accredited education.
          </motion.p>
        </div>

        {/* Statistics Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                  <div className={`w-6 h-6 ${stat.color.replace('from-', 'text-').replace('to-', ' text-to-')}`}>
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Programs Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Featured Programs</h3>
              <p className="text-gray-600">Select a program to explore detailed information</p>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
                <motion.button
                  onClick={() => setIsPlaying(!isPlaying)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg text-sm font-medium transition-all ${
                    isPlaying ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Auto-scroll {isPlaying ? 'ON' : 'OFF'}
                </motion.button>
              </div>
              
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={scrollLeft}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={scrollRight}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Programs Carousel */}
          <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* Gradient Fade Effects */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Programs Container */}
            <div
              ref={scrollerRef}
              className="flex gap-8 overflow-x-auto pb-8 scroll-smooth no-scrollbar px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredPrograms.map((program, idx) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="min-w-[380px] max-w-[380px] flex-none"
                  >
                    <div 
                      className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full cursor-pointer group"
                      onClick={() => handleProgramClick(program.path)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { 
                        if (e.key === 'Enter' || e.key === ' ') handleProgramClick(program.path); 
                      }}
                    >
                      {/* Program Header */}
                      <div className="relative h-40 overflow-hidden">
                        <div 
                          className={`absolute inset-0 bg-gradient-to-r ${program.gradient}`}
                          style={{ backgroundColor: program.color }}
                        >
                          {/* Subtle Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                              backgroundSize: '20px 20px'
                            }} />
                          </div>
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        {/* Title & Subtitle */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <h4 className="text-xl font-bold text-white mb-1">{program.title}</h4>
                          <p className="text-sm text-white/90 font-medium">{program.subtitle}</p>
                        </div>
                      </div>

                      {/* Program Details */}
                      <div className="p-6">
                        {/* Level Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            {program.level}
                          </span>
                          <span className="text-xs font-medium text-gray-500">
                            {program.duration}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                          {program.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h5>
                          <div className="space-y-2">
                            {program.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                <span className="text-sm text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-gray-600">
                              <Users className="w-4 h-4" />
                              <span className="text-sm font-medium">{program.students}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600">
                              <Target className="w-4 h-4" />
                              <span className="text-xs">{program.eligibility}</span>
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ x: 4 }}
                            className="flex items-center gap-1 text-blue-600 font-semibold text-sm"
                          >
                            <span>Explore Program</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Hover Border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-all duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="p-12 md:p-16">
              <h3 className="text-3xl font-semibold text-white mb-6">
                Begin Your Academic Journey
              </h3>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                Join our global community of professionals and academics who have transformed their careers 
                through our prestigious, internationally recognized programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/courses')}
                  className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore All Programs
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white transition-all duration-200"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom scrollbar hide */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default FeaturedPrograms;