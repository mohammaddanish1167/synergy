import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Globe, Users, GraduationCap, Sparkles, Target, Zap, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WORLD_MAP = "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg";

const routes = [
  // USA → Australia
  {
    path: "M 22 38 Q 50 10 78 68",
    from: { flag: "🇺🇸", country: "USA" },
    to: { flag: "🇦🇺", country: "Australia" }
  },
  // Europe → India
  {
    path: "M 48 34 Q 56 28 64 44",
    from: { flag: "🇪🇺", country: "Europe" },
    to: { flag: "🇮🇳", country: "India" }
  },
  // Japan → Brazil
  {
    path: "M 72 36 Q 52 60 32 62",
    from: { flag: "🇯🇵", country: "Japan" },
    to: { flag: "🇧🇷", country: "Brazil" }
  },
  // Canada → UK
  {
    path: "M 20 32 Q 40 20 44 30",
    from: { flag: "🇨🇦", country: "Canada" },
    to: { flag: "🇬🇧", country: "UK" }
  },
  // China → Germany
  {
    path: "M 68 38 Q 60 30 50 32",
    from: { flag: "🇨🇳", country: "China" },
    to: { flag: "🇩🇪", country: "Germany" }
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
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-50/60 via-transparent to-transparent" />
        
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

      {/* Animated Particles */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
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
              GLOBAL REACH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Global Learning.
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
            Seamlessly connecting learners, mentors, and institutions across continents through world-class education networks.
          </motion.p>
        </div>

        {/* Interactive Map Section */}
        <div className="relative w-full h-[500px] md:h-[600px] mb-20 bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-blue-100 shadow-xl overflow-hidden">
          
          {/* Map Background */}
          <img
            src={WORLD_MAP}
            alt="World Map"
            className="absolute inset-0 w-full h-full object-contain opacity-90"
          />

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
                {/* Curved Route Path */}
                <motion.path
                  d={route.path}
                  fill="none"
                  stroke={hoveredRoute === index ? "#3b82f6" : "#2563eb"}
                  strokeWidth={hoveredRoute === index ? "0.35" : "0.25"}
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />

                {/* Animated Data Dot */}
                <motion.circle
                  r={hoveredRoute === index ? "0.8" : "0.6"}
                  fill={hoveredRoute === index ? "#3b82f6" : "#2563eb"}
                  animate={{
                    offsetDistance: ["0%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: hoveredRoute === index ? 2 : 3,
                    ease: "linear",
                    repeat: Infinity,
                    delay: index * 0.6,
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
            { x: "22%", y: "38%", flag: "🇺🇸", country: "USA", color: "from-blue-500 to-cyan-500" },
            { x: "48%", y: "34%", flag: "🇪🇺", country: "Europe", color: "from-purple-500 to-pink-500" },
            { x: "64%", y: "44%", flag: "🇮🇳", country: "India", color: "from-emerald-500 to-teal-500" },
            { x: "72%", y: "36%", flag: "🇯🇵", country: "Japan", color: "from-rose-500 to-red-500" },
            { x: "78%", y: "68%", flag: "🇦🇺", country: "Australia", color: "from-amber-500 to-orange-500" },
            { x: "32%", y: "62%", flag: "🇧🇷", country: "Brazil", color: "from-green-500 to-lime-500" },
            { x: "20%", y: "32%", flag: "🇨🇦", country: "Canada", color: "from-indigo-500 to-violet-500" },
            { x: "50%", y: "32%", flag: "🇩🇪", country: "Germany", color: "from-slate-500 to-gray-500" },
          ].map((node, index) => (
            <EnhancedNode key={index} {...node} />
          ))}

          {/* Hover Info Panel */}
          <AnimatePresence>
            {hoveredRoute !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200 p-6 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${routes[hoveredRoute].from.flag.includes("🇺🇸") ? "from-blue-500 to-cyan-500" : "from-purple-500 to-pink-500"} flex items-center justify-center text-lg`}>
                    {routes[hoveredRoute].from.flag}
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${routes[hoveredRoute].to.flag.includes("🇦🇺") ? "from-amber-500 to-orange-500" : "from-emerald-500 to-teal-500"} flex items-center justify-center text-lg`}>
                    {routes[hoveredRoute].to.flag}
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">
                  {routes[hoveredRoute].from.country} → {routes[hoveredRoute].to.country}
                </h4>
                <p className="text-sm text-slate-600">
                  Active student exchange and academic collaboration between leading institutions.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>150+ active students</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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

        {/* Global Network CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Join Our Global Learning Community
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl">
                  Connect with students, mentors, and institutions worldwide. Access global opportunities and build international networks.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  <Globe className="w-5 h-5" />
                  Explore Global Programs
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                
                <button className="px-8 py-3 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300">
                  View Network Map
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---- Enhanced Node Component ---- */
function EnhancedNode({ x, y, flag, country, color }) {
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
        className={`relative w-14 h-14 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-xl shadow-xl`}
        animate={{
          scale: isHovered ? [1, 1.3, 1.2] : [1, 1.2, 1],
          boxShadow: isHovered 
            ? [
                "0 0 0px rgba(37,99,235,0.6)",
                "0 0 30px rgba(37,99,235,0.9)",
                "0 0 15px rgba(37,99,235,0.8)",
              ]
            : [
                "0 0 0px rgba(37,99,235,0.6)",
                "0 0 20px rgba(37,99,235,0.8)",
                "0 0 0px rgba(37,99,235,0.6)",
              ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {flag}
        
        {/* Pulse Ring Effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-current opacity-0"
          animate={{
            scale: [1, 1.8],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Country Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-lg border border-blue-100"
          >
            {country}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white/90" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}