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
  Play,
  Pause
} from 'lucide-react';
import CourseCard from './CourseCard';
import { courses } from '../data/courses';

function FeaturedCourses() {
  const navigate = useNavigate();
  const scrollerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Auto-scroll animation
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const el = scrollerRef.current;
    if (!el) return;

    const speed = 0.8; // Slower, smoother scroll
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
        // Smooth reset to start
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
      scrollerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
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
    { value: '98%', label: 'Success Rate', icon: <Star className="w-5 h-5" />, color: 'from-amber-500 to-orange-500' },
    { value: '500+', label: 'Courses', icon: <BookOpen className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { value: '10K+', label: 'Students', icon: <Users className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { value: '25+', label: 'Years Experience', icon: <Clock className="w-5 h-5" />, color: 'from-emerald-500 to-teal-500' },
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

  const featuredCourses = [...courses, ...courses];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={itemVariants}
          className="text-center mb-16"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200 mb-8"
          >
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
              FEATURED PROGRAMS
            </span>
            <div className="flex gap-1">
              {[1, 2, 3].map((star) => (
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

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Premier Academic
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Programs
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover world-class educational programs designed to accelerate your career and transform your future.
          </motion.p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-slate-700">{stat.label}</div>
                <div className="text-sm text-slate-500 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Growing rapidly</span>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 relative h-1 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${stat.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Courses Carousel */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          {/* Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-slate-900">Featured Programs</h3>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={() => setIsPlaying(!isPlaying)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-xl bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>
                <span className="text-sm text-slate-600">
                  Auto-scroll {isPlaying ? 'ON' : 'OFF'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={scrollLeft}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={scrollRight}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Gradient Fade Effects */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Courses Scroller */}
            <div
              ref={scrollerRef}
              className="flex gap-8 overflow-x-auto pb-8 scroll-smooth no-scrollbar px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredCourses.map((course, idx) => (
                <motion.div
                  key={`${course.id}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ 
                    y: -12,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                  className="min-w-[360px] max-w-[360px] flex-none relative group/card"
                >
                  <div className="relative">
                    <CourseCard course={course} index={idx} variant="light" />
                    
                    {/* Overlay Button */}
                    <motion.div
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${course.title}`}
                      onClick={() => navigate(`/courses/${course.id}`)}
                      onKeyDown={(e) => { 
                        if (e.key === 'Enter' || e.key === ' ') navigate(`/courses/${course.id}`); 
                      }}
                      className="absolute inset-0 z-10 cursor-pointer opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.02 }}
                    />
                    
                    {/* Quick View Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
                    >
                      <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg flex items-center gap-2">
                        <span className="text-sm font-semibold text-blue-700">Quick View</span>
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Progress Indicator */}
            <div className="relative h-1 bg-slate-200 rounded-full overflow-hidden mt-8">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500"
                animate={{
                  width: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          {/* View All Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => navigate('/courses')}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <BookOpen className="w-5 h-5" />
              Explore All Programs
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Testimonial Banner */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border border-blue-200 p-8 md:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">
                  Join Thousands of Successful Students
                </h4>
                <p className="text-lg text-slate-600 max-w-2xl">
                  Our students have been placed in top universities and companies worldwide. Start your transformation journey today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => navigate('/courses')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                >
                  Browse Courses
                </motion.button>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all"
                >
                  Get Free Consultation
                </button>
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

export default FeaturedCourses;