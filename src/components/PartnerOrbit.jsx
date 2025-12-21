import { motion } from 'framer-motion';
import { Building2, ExternalLink, Sparkles, Globe, GraduationCap } from 'lucide-react';

// Logos
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/baptlist.png';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

const partners = [
  { id: 1, name: 'Kennedy University', logo: KennedyUniLogo, link: 'https://www.kennedy.edu' },
  { id: 2, name: 'American Management University', logo: AMULogo, link: 'https://amuonline.org' },
  { id: 3, name: 'Kennedy Baptist University', logo: KennedyBaptistLogo, link: '' },
  { id: 4, name: 'Central Global University', logo: CentralGlobalLogo, link: '' },
  { id: 5, name: 'Euro-Asian University', logo: EuroAsianLogo, link: 'https://euroasianuniversity.edu' },
];

export default function UniversityPartnerships() {
  const handlePartnerClick = (partner) => {
    if (partner.link) {
      window.open(partner.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden py-36">
      
      {/* 🌸 ELEGANT ANIMATED BACKGROUND ON WHITE */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
        
        {/* Floating gradient orbs with subtle colors */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30"
          animate={{
            x: [0, 200, 0],
            y: [0, 150, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.2) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
          animate={{
            x: [0, -180, 0],
            y: [0, -120, 0],
            rotate: [360, 180, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(249, 168, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-25"
          animate={{
            x: ['-50%', '-40%', '-50%'],
            y: ['-50%', '-60%', '-50%'],
            scale: [1, 1.4, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(196, 181, 253, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated floating lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px w-[300px] bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"
            style={{
              top: `${15 + i * 10}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Floating subtle particles */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(59, 130, 246, ${Math.random() * 0.1 + 0.05})`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Floating education icons */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-blue-200/30"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <GraduationCap className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 text-blue-100/20"
          animate={{
            y: [0, 40, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Globe className="w-12 h-12" />
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/3 text-blue-100/20"
          animate={{
            y: [0, -20, 20, 0],
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>

        {/* Light beams effect */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-blue-100/20 to-transparent"
              style={{
                left: `${25 + i * 15}%`,
                transform: `rotate(${i * 2}deg)`,
              }}
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ✨ MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 text-gray-900">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Building2 className="w-6 h-6 text-blue-600" />
            </motion.div>
            <span className="tracking-[0.35em] text-sm font-semibold text-blue-600 uppercase">
              University Partners
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Building2 className="w-6 h-6 text-blue-600" />
            </motion.div>
            <span className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold"
          >
            Global{' '}
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Academic Alliances
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl mx-auto text-lg text-gray-600"
          >
            Partnering with globally recognized universities to deliver world-class
            education and academic excellence.
          </motion.p>

          {/* Animated underline */}
          <motion.div
            className="mx-auto mt-8 h-[2px] w-48 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            animate={{
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* UNIVERSITY PARTNERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {partners.map((partner, i) => (
            <motion.button
              key={partner.id}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.08,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePartnerClick(partner)}
              disabled={!partner.link}
              className="group relative flex flex-col items-center text-center bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 rounded-3xl p-6"
            >
              {/* Card background with subtle gradient */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm
                          border border-gray-200/60 shadow-lg shadow-blue-500/5
                          group-hover:border-blue-300/60 group-hover:shadow-xl group-hover:shadow-blue-500/10
                          transition-all duration-500"
                initial={false}
                whileHover={{
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                }}
              />

              {/* Hover glow effect */}
              {partner.link && (
                <motion.div
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 blur-sm"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}

              {/* Pulse ring for clickable items */}
              {partner.link && (
                <motion.div
                  className="absolute -inset-1 rounded-3xl border border-blue-400/0"
                  animate={{
                    borderColor: ['rgba(59, 130, 246, 0)', 'rgba(59, 130, 246, 0.2)', 'rgba(59, 130, 246, 0)'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}

              <div className="relative z-10 w-full">
                {/* Logo container */}
                <div className="relative mb-8 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{
                      scale: 1.1,
                    }}
                  >
                    <motion.img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-28 md:h-32 object-contain grayscale group-hover:grayscale-0 transition-all duration-700
                               drop-shadow-lg group-hover:drop-shadow-2xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.3,
                      }}
                    />
                    
                    {/* Logo glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-400/10 blur-xl opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </div>

                {/* University name with icon */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center gap-2">
                    <motion.h3
                      className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {partner.name}
                    </motion.h3>
                    
                    {partner.link && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="text-blue-500"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>

                  {/* Status indicator */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-gray-500"
                  >
                    {partner.link ? (
                      <span className="flex items-center gap-2 text-blue-500">
                        Visit website
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    ) : (
                      <span className="text-gray-400">Coming soon</span>
                    )}
                  </motion.p>
                </div>
              </div>

              {/* Subtletop border animation on hover */}
              <motion.div
                className="absolute top-0 left-1/2 h-[2px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                initial={false}
                whileHover={{
                  transition: { duration: 0.3 },
                }}
                style={{ x: '-50%' }}
              />
            </motion.button>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Click on university logos to visit their official websites
          </p>
          
          {/* Animated dots */}
          <div className="flex items-center justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-blue-400/50"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}