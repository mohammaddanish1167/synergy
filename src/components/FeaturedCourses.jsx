import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Award,
  GraduationCap,
  Book,
  Briefcase,
  Globe,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

function FeaturedPrograms() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const featuredPrograms = [
    {
      id: 'honorary-doctorate',
      title: 'Honorary Doctorate',
      subtitle: 'Lifetime Achievement Recognition',
      description: 'Global recognition for exceptional professional achievements.',
      icon: Award,
      color: '#1E40AF',
      gradient: 'from-blue-700 to-blue-900',
      duration: 'Prestigious Honor',
      students: '500+ Awarded',
      path: '/honorary-doctorate',
      highlights: ['International Recognition', 'Career Distinction'],
      level: 'Doctoral Level'
    },
    {
      id: 'honorary-professorship',
      title: 'Honorary Professorship',
      subtitle: 'Academic Distinction',
      description: 'Distinguished academic recognition for education contributions.',
      icon: GraduationCap,
      color: '#7C3AED',
      gradient: 'from-purple-700 to-purple-900',
      duration: 'Academic Honor',
      students: '300+ Appointed',
      path: '/honorary-professorship',
      highlights: ['Teaching Excellence', 'Research Recognition'],
      level: 'Professorial Level'
    },
    {
      id: 'phd',
      title: 'PhD Programs',
      subtitle: 'Research Doctorate',
      description: 'Rigorous research programs developing original expertise.',
      icon: Book,
      color: '#059669',
      gradient: 'from-emerald-700 to-emerald-900',
      duration: '3-6 Years',
      students: '2,000+ Graduates',
      path: '/phd',
      highlights: ['Original Research', 'Global Recognition'],
      level: 'Doctoral Research'
    },
    {
      id: 'mba',
      title: 'MBA',
      subtitle: 'Executive Leadership',
      description: 'Business leadership for senior management roles.',
      icon: Briefcase,
      color: '#D97706',
      gradient: 'from-amber-700 to-amber-900',
      duration: '1-2 Years',
      students: '5,000+ Graduates',
      path: '/mba',
      highlights: ['Strategic Leadership', 'Global Network'],
      level: 'Master\'s Level'
    },
    {
      id: 'dba',
      title: 'DBA',
      subtitle: 'Executive Doctorate',
      description: 'Advanced business research with practical application.',
      icon: Globe,
      color: '#DC2626',
      gradient: 'from-rose-700 to-rose-900',
      duration: '3-4 Years',
      students: '800+ Graduates',
      path: '/dba',
      highlights: ['Executive Research', 'Business Innovation'],
      level: 'Doctoral Executive'
    }
  ];

  // Duplicate cards for seamless infinite scroll
  const duplicatedPrograms = [...featuredPrograms, ...featuredPrograms];

  // Smooth infinite scroll animation
  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const container = containerRef.current;
    
    let position = 0;
    const speed = isMobile ? 0.5 : 0.3; // pixels per frame
    const animationDuration = 16; // ms per frame (60fps)

    const animate = () => {
      position -= speed;
      
      // Reset position when half the track has scrolled
      const trackWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= trackWidth) {
        position = 0;
      }
      
      track.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const startDelay = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(startDelay);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  const handleProgramClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Beautiful Header */}
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Academic Excellence
            </span>
            <Sparkles className="w-4 h-4 text-blue-600" />
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Prestigious{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Programs
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Globally recognized academic pathways with continuous innovation
          </motion.p>
        </div>

        {/* Infinite Scrolling Cards Container */}
        <div 
          ref={containerRef}
          className="relative h-[420px] overflow-hidden"
        >
          {/* Animated Track */}
          <div
            ref={trackRef}
            className="absolute top-0 left-0 flex gap-6 will-change-transform"
            style={{ 
              width: `${duplicatedPrograms.length * 100}%`,
              padding: '0 2rem'
            }}
          >
            {duplicatedPrograms.map((program, index) => {
              const Icon = program.icon;
              const isDuplicate = index >= featuredPrograms.length;
              
              return (
                <motion.div
                  key={`${program.id}-${index}`}
                  className={`flex-shrink-0 w-[350px] h-full ${isDuplicate ? 'opacity-100' : ''}`}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div 
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full cursor-pointer group"
                    onClick={() => handleProgramClick(program.path)}
                  >
                    {/* Header with gradient */}
                    <div className={`relative h-36 overflow-hidden bg-gradient-to-r ${program.gradient}`}>
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5,
                          }}
                        />
                      </div>

                      {/* Icon with floating animation */}
                      <motion.div
                        className="absolute top-6 left-6"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-xl font-bold text-white">{program.title}</h3>
                        <p className="text-sm text-white/90 mt-1">{program.subtitle}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
                          {program.level}
                        </span>
                        <span className="text-sm text-gray-500">{program.duration}</span>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {program.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            >
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                            </motion.div>
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-600">{program.students}</span>
                        <motion.div
                          className="flex items-center gap-2 text-blue-600 font-medium group"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm">Explore</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:via-blue-600/5 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none rounded-2xl" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Edge gradients for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-12">
          <div className="relative w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

    
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default FeaturedPrograms;