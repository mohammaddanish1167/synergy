/**
 * CorporateConnectionDark Component
 * Full-screen dark immersive experience with random company flow
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Professional company database
const companies = [
  'GOOGLE', 'MICROSOFT', 'APPLE', 'AMAZON', 'META',
  'GOLDMAN SACHS', 'JPMORGAN', 'MORGAN STANLEY',
  'MCKINSEY & COMPANY', 'BAIN & COMPANY', 'BOSTON CONSULTING GROUP',
  'TATA CONSULTANCY SERVICES', 'INFOSYS', 'WIPRO', 'HCL TECHNOLOGIES',
  'SAMSUNG ELECTRONICS', 'SONY CORPORATION', 'BOEING', 'LOCKHEED MARTIN',
  'TESLA', 'TOYOTA MOTOR', 'BMW GROUP', 'FORD MOTOR',
  'WALMART', 'NIKE', 'PROCTER & GAMBLE', 'UNILEVER',
  'PFIZER', 'JOHNSON & JOHNSON', 'MERCK & CO',
  'DELOITTE', 'PRICEWATERHOUSECOOPERS', 'ERNST & YOUNG', 'KPMG',
  'ACCENTURE', 'CAPGEMINI', 'COGNIZANT TECHNOLOGY',
  'IBM', 'INTEL', 'CISCO SYSTEMS', 'ORACLE',
  'SALESFORCE', 'ADOBE SYSTEMS', 'NETFLIX',
  'UBER TECHNOLOGIES', 'AIRBNB', 'SPOTIFY',
  'SPACEX', 'PAYPAL', 'STRIPE', 'TWITTER'
];

function HiringPartners() {
  const [activeCompanies, setActiveCompanies] = useState([]);
  const [currentCycle, setCurrentCycle] = useState(0);
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Random number of companies per cycle
  const getRandomCompanyCount = () => Math.floor(Math.random() * 6) + 4; // 4-9 companies
  const cycleDuration = 1800 + Math.random() * 1200; // 1.8-3 seconds

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const generateRandomPositions = (count) => {
    const positions = [];
    
    for (let i = 0; i < count; i++) {
      // Random positions anywhere on screen
      const x = Math.random() * containerSize.width;
      const y = Math.random() * containerSize.height;
      
      positions.push({
        x,
        y,
        rotation: -15 + Math.random() * 30,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.7 + Math.random() * 0.3,
        delay: Math.random() * 0.5
      });
    }
    
    return positions;
  };

  const startRandomCycle = () => {
    setCurrentCycle(prev => prev + 1);
    
    const companyCount = getRandomCompanyCount();
    const shuffled = [...companies].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, companyCount);
    const positions = generateRandomPositions(companyCount);
    
    const newActiveCompanies = selected.map((company, index) => ({
      id: `${company}-${Date.now()}-${Math.random()}`,
      name: company,
      ...positions[index],
      size: 12 + Math.random() * 4 // Random font size
    }));

    setActiveCompanies(newActiveCompanies);
  };

  useEffect(() => {
    if (containerSize.width === 0) return;

    const interval = setInterval(startRandomCycle, cycleDuration);
    return () => clearInterval(interval);
  }, [containerSize]);

  useEffect(() => {
    if (containerSize.width > 0) {
      startRandomCycle();
    }
  }, [containerSize]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Deep Dark Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(30,41,59,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(15,23,42,0.4)_0%,transparent_50%)]" />
        
        {/* Particle Field */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-[1px] h-[1px] bg-gray-600/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Container - Full Screen */}
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
      >
        {/* Central Hub - Glowing Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            {/* Glowing Orb Behind Text */}
            <motion.div
              className="absolute -inset-32 rounded-full"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
                  'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)',
                  'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main Text */}
            <motion.div
              animate={{
                textShadow: [
                  '0 0 20px rgba(59,130,246,0.3)',
                  '0 0 40px rgba(59,130,246,0.6)',
                  '0 0 20px rgba(59,130,246,0.3)'
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white text-center tracking-tight leading-none"
            >
              <div className="mb-2">HIRING</div>
              <div>PARTNERS</div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-gray-400 text-lg sm:text-xl text-center mt-8 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {companies.length}+ Global Corporations
            </motion.p>
          </div>
        </div>

        {/* Random Company Names - Appear Anywhere */}
        <AnimatePresence>
          {activeCompanies.map((company) => (
            <motion.div
              key={company.id}
              className="absolute pointer-events-none"
              style={{
                left: company.x,
                top: company.y,
                transform: `translate(-50%, -50%) rotate(${company.rotation}deg)`,
                fontSize: `${company.size}px`
              }}
              initial={{ 
                opacity: 0,
                scale: 0,
                filter: 'blur(10px)'
              }}
              animate={{ 
                opacity: company.opacity,
                scale: company.scale,
                filter: 'blur(0px)'
              }}
              exit={{ 
                opacity: 0,
                scale: 0.5,
                filter: 'blur(10px)',
                rotate: company.rotation + 45
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "backOut" },
                filter: { duration: 0.8, ease: "easeOut" },
                rotate: { duration: 0.6, ease: "easeIn" }
              }}
            >
              {/* Company Name with Glow */}
              <div className="relative">
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-3 rounded-lg"
                  animate={{
                    background: [
                      `radial-gradient(circle, rgba(59,130,246,${0.1 * company.opacity}) 0%, transparent 70%)`,
                      `radial-gradient(circle, rgba(59,130,246,${0.2 * company.opacity}) 0%, transparent 70%)`,
                      `radial-gradient(circle, rgba(59,130,246,${0.1 * company.opacity}) 0%, transparent 70%)`
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Text Container */}
                <motion.div
                  className="relative px-4 py-2.5 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-lg border border-gray-800/50 shadow-xl"
                  animate={{
                    y: [0, -2, 0],
                    boxShadow: [
                      '0 10px 30px rgba(0,0,0,0.5)',
                      '0 15px 40px rgba(59,130,246,0.3)',
                      '0 10px 30px rgba(0,0,0,0.5)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="font-bold text-white tracking-tight whitespace-nowrap">
                    {company.name}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Cycle Counter - Minimal */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full">
            <motion.div
              className="w-1.5 h-1.5 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-xs text-gray-400 font-medium">
              CYCLE {currentCycle}
            </span>
          </div>
        </motion.div>

        {/* Subtle Connection Lines (Random) */}
        {activeCompanies.length > 1 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="darkLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {activeCompanies.slice(0, 3).map((company, index) => {
              // Randomly connect some companies to center
              if (Math.random() > 0.5) {
                return (
                  <motion.line
                    key={`center-line-${company.id}`}
                    x1="50%"
                    y1="50%"
                    x2={`${(company.x / containerSize.width) * 100}%`}
                    y2={`${(company.y / containerSize.height) * 100}%`}
                    stroke="url(#darkLineGradient)"
                    strokeWidth="0.3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: 0.15 
                    }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ 
                      pathLength: { duration: 1.5, ease: "easeOut" },
                      opacity: { duration: 0.8 }
                    }}
                  />
                );
              }
              return null;
            })}
          </svg>
        )}

        {/* Floating Animated Elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`floater-${i}`}
            className="absolute w-[2px] h-[2px] bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.6, 0.1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Header Badge - Minimal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="px-4 py-1.5 bg-black/10 backdrop-blur-sm rounded-full border border-gray-800/50">
          <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
            Corporate Network
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default HiringPartners;