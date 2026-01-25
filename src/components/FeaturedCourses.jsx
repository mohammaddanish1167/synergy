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

  const isUserScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const featuredPrograms = [
    {
      id: 'honorary-doctorate',
      title: 'Honorary Doctorate',
      subtitle: 'Distinguished Lifetime Recognition',
      description: 'Prestigious global acknowledgment for extraordinary professional accomplishments and lasting impact.',
      icon: Award,
      gradient: 'from-indigo-600 to-indigo-800',
      duration: 'Prestigious Honor',
      students: '500+ Awarded',
      path: '/honorary-doctorate',
      highlights: ['International Recognition', 'Career Distinction'],
      level: 'Doctoral Level'
    },
    {
      id: 'honorary-professorship',
      title: 'Honorary Professorship',
      subtitle: 'Academic Excellence Recognition',
      description: 'Elite academic distinction honoring exceptional contributions to education and scholarly advancement.',
      icon: GraduationCap,
      gradient: 'from-purple-600 to-purple-800',
      duration: 'Academic Honor',
      students: '300+ Appointed',
      path: '/honorary-professorship',
      highlights: ['Teaching Excellence', 'Research Recognition'],
      level: 'Professorial Level'
    },
    {
      id: 'phd',
      title: 'PhD Programs',
      subtitle: 'Advanced Research Doctorate',
      description: 'Comprehensive research-intensive programs cultivating original expertise and scholarly innovation.',
      icon: Book,
      gradient: 'from-emerald-600 to-emerald-800',
      duration: '3-6 Years',
      students: '2,000+ Graduates',
      path: '/phd',
      highlights: ['Original Research', 'Global Recognition'],
      level: 'Doctoral Research'
    },
    {
      id: 'mba',
      title: 'MBA',
      subtitle: 'Strategic Executive Leadership',
      description: 'Advanced business leadership programs designed for senior management and C-suite positions.',
      icon: Briefcase,
      gradient: 'from-amber-600 to-amber-800',
      duration: '1-2 Years',
      students: '5,000+ Graduates',
      path: '/mba',
      highlights: ['Strategic Leadership', 'Global Network'],
      level: "Master's Level"
    },
    {
      id: 'dba',
      title: 'DBA',
      subtitle: 'Executive Doctoral Excellence',
      description: 'Prestigious executive doctorate combining advanced business research with strategic practical application.',
      icon: Globe,
      gradient: 'from-pink-600 to-rose-700',
      duration: '3-4 Years',
      students: '800+ Graduates',
      path: '/dba',
      highlights: ['Executive Research', 'Business Innovation'],
      level: 'Doctoral Executive'
    }
  ];

  const duplicatedPrograms = [...featuredPrograms, ...featuredPrograms];

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const container = containerRef.current;

    let position = 0;
    const speed = isMobile ? 1.6 : 1.1;
    
    // Get the width of one set of programs
    const singleSetWidth = track.scrollWidth / 2;
    const cardWidth = 350; // width of each card
    const gap = 24; // gap between cards
    const singleCardWidth = cardWidth + gap;

    const animate = () => {
      if (!isUserScrollingRef.current) {
        position -= speed;

        // When we've scrolled exactly one full set, reset seamlessly
        if (Math.abs(position) >= singleSetWidth) {
          // Instead of jumping back to 0, we subtract one set width
          // This creates a seamless infinite loop
          position += singleSetWidth;
          
          // Apply the reset without transition for instant reposition
          track.style.transition = 'none';
          track.style.transform = `translateX(${position}px)`;
          
          // Force a reflow to apply the immediate transform
          void track.offsetHeight;
          
          // Remove the no-transition rule for smooth animation to continue
          track.style.transition = '';
        }

        track.style.transform = `translateX(${position}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (!isUserScrollingRef.current) {
        isUserScrollingRef.current = true;
      }

      const delta = e.deltaY || e.detail || e.wheelDelta * -1;
      position -= delta * 0.5; // Reduced multiplier for smoother wheel control
      
      // Handle loop during user scrolling
      const absPosition = Math.abs(position);
      if (absPosition >= singleSetWidth) {
        position += singleSetWidth;
        track.style.transition = 'none';
        track.style.transform = `translateX(${position}px)`;
        void track.offsetHeight;
        track.style.transition = '';
      } else {
        track.style.transform = `translateX(${position}px)`;
      }

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
      }, 800); // Slightly longer timeout for smoother experience
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [isMobile]);

  return (
    <section className="py-16 bg-gradient-to-b from-white via-indigo-50/20 to-purple-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-indigo-100/80 to-purple-100/80 rounded-full border border-indigo-200/50 shadow-luxury"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">
              Elite Academic Excellence
            </span>
            <Sparkles className="w-4 h-4 text-indigo-600" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Prestigious{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Programs
            </span>
          </h2>

          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            World-class academic pathways designed for extraordinary career outcomes and elite recognition
          </p>
        </div>

        {/* Infinite Scroll */}
        <div
          ref={containerRef}
          className="relative h-[420px] overflow-hidden overscroll-x-contain cursor-grab active:cursor-grabbing"
        >
          <div
            ref={trackRef}
            className="absolute top-0 left-0 flex gap-6 will-change-transform"
            style={{ 
              width: `${duplicatedPrograms.length * 350 + (duplicatedPrograms.length - 1) * 24}px`,
              padding: '0 2rem'
            }}
          >
            {duplicatedPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={`${program.id}-${index}`}
                  className="flex-shrink-0 w-[350px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    onClick={() => navigate(program.path)}
                    className="bg-white rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 cursor-pointer h-full overflow-hidden"
                  >
                    {/* Top colored section - keep white text here */}
                    <div className={`h-36 bg-gradient-to-r ${program.gradient} relative`}>
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Icon className="text-white w-6 h-6" />
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-xl font-bold text-white">{program.title}</h3>
                        <p className="text-sm text-white/90">{program.subtitle}</p>
                      </div>
                    </div>

                    {/* Bottom content section - changed to black text */}
                    <div className="p-6">
                      <p className="text-gray-800 text-sm mb-4">
                        {program.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {program.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                            <span className="text-sm text-slate-800">{h}</span>
                          </div>
                        ))}
                      </div>

                        <div className="flex justify-between items-center border-t pt-4">
                        <span className="text-sm text-slate-700 font-medium">{program.students}</span>
                        <div className="flex items-center gap-2 text-indigo-600 font-medium group">
                          <span className="text-slate-800">Explore</span>
                          <ArrowRight className="w-4 h-4 text-slate-800 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 
            ये दोनों डिव्स हटा दें या कमेंट कर दें जो साइड में ब्लर इफ़ेक्ट बनाते हैं:
          */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10" /> */}
          {/* <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10" /> */}
        </div>
      </div>

      <style jsx>{`
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Smooth scrolling experience */
        .overscroll-x-contain {
          overscroll-behavior-x: contain;
        }
      `}</style>
    </section>
  );
}

export default FeaturedPrograms;