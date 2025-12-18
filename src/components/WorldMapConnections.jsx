import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Globe, Users, GraduationCap, Sparkles, Target, Zap, ArrowRight, Crown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WORLD_MAP = "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";

const routes = [
  // UK → USA
  {
    path: "M 44 30 Q 40 25 30 35",
    from: { flag: "🇬🇧", country: "UK", color: "from-red-500 to-red-700" },
    to: { flag: "🇺🇸", country: "USA" }
  },
  // UK → Australia
  {
    path: "M 44 30 Q 60 50 78 68",
    from: { flag: "🇬🇧", country: "UK", color: "from-red-500 to-red-700" },
    to: { flag: "🇦🇺", country: "Australia" }
  },
  // UK → India
  {
    path: "M 44 30 Q 50 40 64 44",
    from: { flag: "🇬🇧", country: "UK", color: "from-red-500 to-red-700" },
    to: { flag: "🇮🇳", country: "India" }
  },
  // UK → Canada
  {
    path: "M 44 30 Q 30 20 20 32",
    from: { flag: "🇬🇧", country: "UK", color: "from-red-500 to-red-700" },
    to: { flag: "🇨🇦", country: "Canada" }
  },
  // Europe → UK
  {
    path: "M 48 34 Q 46 32 44 30",
    from: { flag: "🇪🇺", country: "Europe" },
    to: { flag: "🇬🇧", country: "UK", color: "from-red-500 to-red-700" }
  },
];

export default function GlobalConnections() {
  const [hoveredRoute, setHoveredRoute] = useState(null);
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse position tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15 });

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

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const stats = [
    { value: "60+", label: "Countries Connected", icon: <Globe className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
    { value: "25K+", label: "Active Learners", icon: <Users className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
    { value: "300+", label: "Global Universities", icon: <GraduationCap className="w-8 h-8" />, color: "from-emerald-500 to-teal-500" },
    { value: "50+", label: "Corporate Partners", icon: <Target className="w-8 h-8" />, color: "from-amber-500 to-orange-500" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
      onMouseMove={handleMouseMove}
    >
      {/* Background Effects with UK Highlight */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-50/60 via-transparent to-transparent" />
        
        {/* UK Spotlight Effect */}
        <motion.div
          className="absolute w-[300px] h-[200px] rounded-full blur-3xl opacity-30"
          style={{
            left: "45%",
            top: "32%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            background: [
              "radial-gradient(circle, rgba(239,68,68,0.4) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(220,38,38,0.6) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(239,68,68,0.4) 0%, transparent 70%)",
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Parallax Background */}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 origin-left z-50"
          style={{ scaleX: scrollProgress }}
        />
      </div>

      {/* Animated Particles with UK-focused particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => {
          const isUKParticle = i < 12; // More particles around UK
          const left = isUKParticle ? 45 + (Math.random() * 10 - 5) : Math.random() * 100;
          const top = isUKParticle ? 32 + (Math.random() * 10 - 5) : Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                isUKParticle 
                  ? 'bg-gradient-to-r from-red-400/30 to-pink-400/30' 
                  : 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20'
              }`}
              initial={{
                x: left + '%',
                y: top + '%',
              }}
              animate={{
                x: isUKParticle
                  ? [left + '%', (left + Math.random() * 6 - 3) + '%', left + '%']
                  : [
                      Math.random() * 100 + '%',
                      Math.random() * 100 + '%',
                      Math.random() * 100 + '%',
                    ],
                y: isUKParticle
                  ? [top + '%', (top + Math.random() * 6 - 3) + '%', top + '%']
                  : [
                      Math.random() * 100 + '%',
                      Math.random() * 100 + '%',
                      Math.random() * 100 + '%',
                    ],
              }}
              transition={{
                duration: isUKParticle ? Math.random() * 3 + 2 : Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header with UK Emphasis */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-50 to-blue-50 rounded-full border border-red-200/50 border-blue-200 mb-8"
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
              <Crown className="w-5 h-5 text-red-600" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent uppercase tracking-widest">
              GLOBAL HUB
            </span>
            <Sparkles className="w-5 h-5 text-blue-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            <span className="bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent">
              
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Connected Worldwide.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            we serves as our global education hub, connecting learners, mentors, 
            and institutions across continents through world-class academic partnerships.
          </motion.p>
        </div>

        {/* Interactive Map Section */}
        <div className="relative w-full h-[500px] md:h-[600px] mb-20 bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-blue-100 shadow-xl overflow-hidden">
          
          {/* Map Background */}
          <div className="relative w-full h-full">
            <img
              src={WORLD_MAP}
              alt="World Map"
              className="absolute inset-0 w-full h-full object-contain opacity-90"
            />
            
            {/* UK Region Highlight */}
            <motion.div
              className="absolute w-[12%] h-[16%] rounded-full border-2 border-red-500/40"
              style={{
                left: "44%",
                top: "30%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(239,68,68,0.3)",
                  "0 0 60px rgba(239,68,68,0.6)",
                  "0 0 0px rgba(239,68,68,0.3)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* UK Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/10 to-transparent"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>

          {/* Interactive SVG Overlay */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
          >
            {routes.map((route, index) => (
              <g 
                key={index}
                onMouseEnter={() => setHoveredRoute(index)}
                onMouseLeave={() => setHoveredRoute(null)}
                className="cursor-pointer"
              >
                {/* Curved Route Path - Thicker for UK routes */}
                <motion.path
                  d={route.path}
                  fill="none"
                  stroke={route.from.country === 'UK' || route.to.country === 'UK' ? "#ef4444" : "#2563eb"}
                  strokeWidth={hoveredRoute === index ? "0.4" : "0.3"}
                  strokeDasharray={route.from.country === 'UK' || route.to.country === 'UK' ? "3 1" : "2 2"}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: route.from.country === 'UK' || route.to.country === 'UK' ? 2.5 : 3,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />

                {/* Animated Data Dot - Faster for UK routes */}
                <motion.circle
                  r={hoveredRoute === index ? "0.9" : "0.7"}
                  fill={route.from.country === 'UK' || route.to.country === 'UK' ? "#ef4444" : "#2563eb"}
                  animate={{
                    offsetDistance: ["0%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: (route.from.country === 'UK' || route.to.country === 'UK') ? 1.5 : 3,
                    ease: "linear",
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                  style={{
                    offsetPath: `path("${route.path}")`,
                  }}
                />
              </g>
            ))}
          </svg>

          {/* Enhanced Animated Nodes */}
          {[
            { x: "44%", y: "30%", flag: "🇬🇧", country: "United Kingdom", color: "from-red-500 to-red-700", isUK: true },
            { x: "22%", y: "38%", flag: "🇺🇸", country: "USA", color: "from-blue-500 to-cyan-500" },
            { x: "48%", y: "34%", flag: "🇪🇺", country: "Europe", color: "from-purple-500 to-pink-500" },
            { x: "64%", y: "44%", flag: "🇮🇳", country: "India", color: "from-emerald-500 to-teal-500" },
            { x: "72%", y: "36%", flag: "🇯🇵", country: "Japan", color: "from-rose-500 to-red-500" },
            { x: "78%", y: "68%", flag: "🇦🇺", country: "Australia", color: "from-amber-500 to-orange-500" },
            { x: "32%", y: "62%", flag: "🇧🇷", country: "Brazil", color: "from-green-500 to-lime-500" },
            { x: "20%", y: "32%", flag: "🇨🇦", country: "Canada", color: "from-indigo-500 to-violet-500" },
          ].map((node, index) => (
            <EnhancedNode key={index} {...node} />
          ))}

          {/* Hover Info Panel with UK Emphasis */}
          <AnimatePresence>
            {hoveredRoute !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200 p-6 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full ${
                    routes[hoveredRoute].from.country === 'UK' 
                      ? 'bg-gradient-to-r from-red-500 to-red-600' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  } flex items-center justify-center text-lg`}>
                    {routes[hoveredRoute].from.flag}
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                  <div className={`w-10 h-10 rounded-full ${
                    routes[hoveredRoute].to.country === 'UK' 
                      ? 'bg-gradient-to-r from-red-500 to-red-600' 
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                  } flex items-center justify-center text-lg`}>
                    {routes[hoveredRoute].to.flag}
                  </div>
                  {(routes[hoveredRoute].from.country === 'UK' || routes[hoveredRoute].to.country === 'UK') && (
                    <div className="ml-2 px-2 py-1 bg-red-50 rounded-full border border-red-200">
                      <Crown className="w-3 h-3 text-red-600" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  {routes[hoveredRoute].from.country} → {routes[hoveredRoute].to.country}
                  {(routes[hoveredRoute].from.country === 'UK' || routes[hoveredRoute].to.country === 'UK') && (
                    <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full">
                       Network
                    </span>
                  )}
                </h4>
                <p className="text-sm text-slate-600">
                  {routes[hoveredRoute].from.country === 'UK' || routes[hoveredRoute].to.country === 'UK'
                    ? "Strong academic partnership with leading UK institutions and student exchange programs."
                    : "Active student exchange and academic collaboration between leading institutions."}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <Zap className={`w-4 h-4 ${
                    routes[hoveredRoute].from.country === 'UK' || routes[hoveredRoute].to.country === 'UK'
                      ? 'text-red-500'
                      : 'text-amber-500'
                  }`} />
                  <span>{
                    routes[hoveredRoute].from.country === 'UK' || routes[hoveredRoute].to.country === 'UK'
                      ? '200+ active UK connections'
                      : '150+ active students'
                  }</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* UK-Specific Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          
        </motion.div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-6`}>
                  {stat.icon}
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-lg font-semibold text-slate-700">{stat.label}</div>
                  <div className="text-sm text-slate-500">
                    <motion.span
                      className="text-cyan-600 font-medium"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      Real-time updates
                    </motion.span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 relative h-1 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${stat.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Enhanced Node Component with UK Emphasis ---- */
function EnhancedNode({ x, y, flag, country, color, isUK = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Node Container */}
      <motion.div
        className={`relative w-14 h-14 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-xl shadow-xl ${
          isUK ? 'ring-2 ring-red-400 ring-offset-2 ring-offset-white' : ''
        }`}
        animate={{
          scale: isHovered ? [1, 1.4, 1.3] : [1, 1.2, 1],
          boxShadow: isHovered 
            ? [
                isUK 
                  ? "0 0 0px rgba(239,68,68,0.8)"
                  : "0 0 0px rgba(37,99,235,0.6)",
                isUK 
                  ? "0 0 40px rgba(239,68,68,1)"
                  : "0 0 30px rgba(37,99,235,0.9)",
                isUK 
                  ? "0 0 20px rgba(239,68,68,0.9)"
                  : "0 0 15px rgba(37,99,235,0.8)",
              ]
            : [
                isUK 
                  ? "0 0 0px rgba(239,68,68,0.8)"
                  : "0 0 0px rgba(37,99,235,0.6)",
                isUK 
                  ? "0 0 25px rgba(239,68,68,0.9)"
                  : "0 0 20px rgba(37,99,235,0.8)",
                isUK 
                  ? "0 0 0px rgba(239,68,68,0.8)"
                  : "0 0 0px rgba(37,99,235,0.6)",
              ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {flag}
        {isUK && (
          <div className="absolute -top-1 -right-1 w-4 h-4">
            <Crown className="w-4 h-4 text-yellow-400" />
          </div>
        )}
        
        {/* Pulse Ring Effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-current opacity-0"
          animate={{
            scale: [1, isUK ? 2.2 : 1.8],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: isUK ? 1.5 : 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Country Label with UK Emphasis */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap ${
              isUK 
                ? 'bg-gradient-to-r from-red-50 to-white' 
                : 'bg-white/90 backdrop-blur-sm'
            } rounded-lg px-3 py-1.5 text-sm font-semibold ${
              isUK ? 'text-red-900' : 'text-slate-900'
            } shadow-lg border ${
              isUK ? 'border-red-100' : 'border-blue-100'
            }`}
          >
            <div className="flex items-center gap-2">
              {country}
              {isUK && <Crown className="w-3 h-3 text-red-600" />}
            </div>
            <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 ${
              isUK 
                ? 'border-l-transparent border-r-transparent border-b-red-50' 
                : 'border-l-transparent border-r-transparent border-b-white/90'
            }`} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}