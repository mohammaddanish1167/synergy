import { motion } from 'framer-motion';
import { Building2, ExternalLink, Sparkles, Globe, GraduationCap, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Logos
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/baptlist.png';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

const partners = [
  { 
    id: 1, 
    name: 'Kennedy University', 
    logo: KennedyUniLogo, 
    link: 'https://www.kennedy.edu/', 
    color: 'from-blue-500 to-cyan-500',
    verified: true
  },
  { 
    id: 2, 
    name: 'American Management University', 
    logo: AMULogo, 
    link: 'https://amuonline.org/', 
    color: 'from-purple-500 to-pink-500',
    verified: true
  },
  { 
    id: 3, 
    name: 'Kennedy Baptist University', 
    logo: KennedyBaptistLogo, 
    link: 'https://kennedybaptistuniversity.com/', 
    color: 'from-emerald-500 to-green-500',
    verified: true
  },
  { 
    id: 4, 
    name: 'Central Global University', 
    logo: CentralGlobalLogo, 
    link: 'https://central-global-university.com/', 
    color: 'from-amber-500 to-orange-500',
    verified: true
  },
  { 
    id: 5, 
    name: 'Euro-Asian University', 
    logo: EuroAsianLogo, 
    link: 'https://euroasianuniversity.edu/', 
    color: 'from-rose-500 to-red-500',
    verified: true
  },
];

// Duplicate partners for seamless infinite loop
const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

export default function UniversityPartnerships() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredPartner, setHoveredPartner] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    let position = 0;
    const speed = isMobile ? 2.5 : 3.0;
    const cardWidth = 280;
    const gap = 32;
    const singleCardWidth = cardWidth + gap;
    const singleSetWidth = (partners.length * singleCardWidth);

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= singleSetWidth) {
        position += singleSetWidth;
        track.style.transition = 'none';
        track.style.transform = `translateX(${position}px)`;
        void track.offsetHeight;
        track.style.transition = 'transform 0.05s linear';
      }

      track.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  const handlePartnerClick = (partner) => {
    if (partner.link) {
      window.open(partner.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-28">
      
      {/* DYNAMIC COLORED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient circles */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={`circle-${i}`}
            className={`absolute rounded-full opacity-5`}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `conic-gradient(from ${i * 45}deg, 
                rgba(59, 130, 246, 0.1), 
                rgba(147, 51, 234, 0.1), 
                rgba(239, 68, 68, 0.1), 
                rgba(59, 130, 246, 0.1))`,
              left: `${i * 15}%`,
              top: `${(i * 20) % 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.15)' :
                        i % 3 === 1 ? 'rgba(147, 51, 234, 0.15)' : 
                        'rgba(239, 68, 68, 0.15)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}

        {/* Animated lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] w-80"
            style={{
              background: `linear-gradient(90deg, transparent, 
                ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'}, 
                transparent)`,
              top: `${15 + i * 10}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
            animate={{
              x: [0, 400, -400, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 text-gray-900">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
            >
              <Building2 className="w-6 h-6 text-white" />
            </motion.div>
            
            <span className="tracking-[0.35em] text-sm font-bold uppercase bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Global University Partners
            </span>
            
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-lg"
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Academic Excellence
            </motion.span>
            {' '}Worldwide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 max-w-3xl mx-auto text-xl text-gray-600"
          >
            Partnering with prestigious institutions globally to deliver exceptional education
            and create boundless opportunities for our students.
          </motion.p>

          {/* All Links Verified Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200 mt-6"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-emerald-700">
              All university links verified ✓
            </span>
          </motion.div>

          {/* Animated indicator */}
          <motion.div
            className="mx-auto mt-12 flex flex-col items-center"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-sm text-gray-500 mb-2 animate-pulse">Scroll to explore partners</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronRight className="w-6 h-6 text-blue-500 rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* INFINITE HORIZONTAL CAROUSEL */}
        <div 
          ref={containerRef}
          className="relative h-[420px] overflow-hidden mb-20 cursor-grab active:cursor-grabbing"
        >
          {/* Track for infinite scrolling */}
          <div
            ref={trackRef}
            className="absolute top-0 left-0 flex gap-8 will-change-transform py-8"
            style={{ 
              width: `${duplicatedPartners.length * 280 + (duplicatedPartners.length - 1) * 32}px`,
              paddingLeft: '2rem',
              paddingRight: '2rem'
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.button
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-[280px] h-[360px] relative"
                whileHover={{ 
                  y: -25,
                  scale: 1.05,
                  transition: { 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 15 
                  }
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredPartner(partner)}
                onMouseLeave={() => setHoveredPartner(null)}
                onClick={() => handlePartnerClick(partner)}
              >
                {/* Card with gradient border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${partner.color} p-[2px]`}>
                  <div className="absolute inset-[1px] rounded-3xl bg-white shadow-lg" />
                </div>

                {/* Card content */}
                <div className="relative h-full p-8 flex flex-col items-center justify-center">
                  {/* Verified Badge */}
                  {partner.verified && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 rounded-lg border border-emerald-200">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-emerald-700">Verified</span>
                      </div>
                    </div>
                  )}

                  {/* Animated logo */}
                  <motion.div
                    className="mb-8"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                  >
                    <motion.img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-24 w-auto object-contain"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>

                  {/* University name */}
                  <motion.h3
                    className="text-xl font-bold text-gray-900 text-center mb-4"
                    whileHover={{ scale: 1.08 }}
                  >
                    {partner.name}
                  </motion.h3>

                  {/* Status indicator with pulse */}
                  <motion.div
                    className="mt-4"
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 text-blue-600 font-medium shadow-sm hover:shadow-md transition-shadow">
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </motion.div>

                  {/* URL Preview on Hover */}
                  {hoveredPartner?.id === partner.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-4 left-4 right-4 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <p className="text-xs text-gray-600 truncate font-mono">
                        {partner.link.replace('https://', '')}
                      </p>
                    </motion.div>
                  )}

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200"
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Floating particles around card */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`card-particle-${index}-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: `${Math.random() * 6 + 2}px`,
                      height: `${Math.random() * 6 + 2}px`,
                      background: partner.color.includes('blue') ? '#3b82f6' :
                                 partner.color.includes('purple') ? '#8b5cf6' :
                                 partner.color.includes('emerald') ? '#10b981' :
                                 partner.color.includes('amber') ? '#f59e0b' : '#ec4899',
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: 0.4,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() * 15 - 7.5, 0],
                    }}
                    transition={{
                      duration: 1.5 + Math.random() * 1,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "linear"
                    }}
                  />
                ))}
              </motion.button>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10" />
        </div>

        {/* University Links Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Globe className="w-6 h-6 text-blue-600" />
            All University Websites Verified
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner) => (
              <motion.a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${partner.color}`} />
                <span className="font-medium text-gray-900">{partner.name}</span>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center border-t border-gray-200 pt-8"
        >
          <p className="text-gray-600 text-sm">
            All partner university links are verified and regularly maintained
          </p>
        </motion.div>
      </div>

      {/* Add CSS for smoother scrolling */}
      <style jsx>{`
        .cursor-grab {
          cursor: grab;
        }
        .cursor-grab:active {
          cursor: grabbing;
        }
      `}</style>
    </section>
  );
}