import { motion, AnimatePresence } from "framer-motion";
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

  const stats = [
    { value: "150+", label: "Countries Connected", icon: <Globe className="w-5 h-5" /> },
    { value: "2.5K+", label: "Active Learners", icon: <Users className="w-5 h-5" /> },
    { value: "300+", label: "Global Universities", icon: <GraduationCap className="w-5 h-5" /> },
    { value: "100+", label: "Corporate Partners", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-24 overflow-hidden">
      
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
              <Globe className="w-4 h-4" />
              Global Network
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-6"
          >
            Connected
            <span className="block font-medium mt-2 text-slate-700">
              Worldwide
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            we serves as our global education hub, connecting learners, mentors, 
            and institutions across continents through world-class academic partnerships.
          </motion.p>
        </div>

        {/* Map Section */}
        <div className="relative w-full h-[400px] md:h-[500px] mb-20 bg-white border border-slate-200 rounded-xl overflow-hidden">
          
          {/* Map Background */}
          <div className="relative w-full h-full p-8">
            <img
              src={WORLD_MAP}
              alt="World Map"
              className="w-full h-full object-contain opacity-30"
            />
            
            {/* UK Region Indicator */}
            <div className="absolute" style={{ left: "44%", top: "30%" }}>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-30" />
              </div>
            </div>
          </div>

          {/* Routes SVG */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
          >
            {routes.map((route, index) => (
              <g key={index}>
                {/* Route line */}
                <path
                  d={route.path}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="0.2"
                  strokeDasharray="2 2"
                />
                
                {/* Animated dot */}
                <motion.circle
                  r="0.4"
                  fill="#94a3b8"
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5,
                  }}
                  style={{
                    offsetPath: `path("${route.path}")`,
                  }}
                />
              </g>
            ))}
          </svg>

          {/* Country Nodes */}
          {[
            { x: "44%", y: "30%", flag: "🇬🇧", country: "United Kingdom" },
            { x: "22%", y: "38%", flag: "🇺🇸", country: "USA" },
            { x: "48%", y: "34%", flag: "🇪🇺", country: "Europe" },
            { x: "64%", y: "44%", flag: "🇮🇳", country: "India" },
            { x: "78%", y: "68%", flag: "🇦🇺", country: "Australia" },
            { x: "20%", y: "32%", flag: "🇨🇦", country: "Canada" },
          ].map((node, index) => (
            <div
              key={index}
              className="absolute"
              style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
            >
              <div className="relative group">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm shadow-sm hover:border-slate-300 transition-colors">
                  {node.flag}
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {node.country}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Hover Info Panel */}
          <AnimatePresence>
            {hoveredRoute !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-4 right-4 bg-white border border-slate-200 rounded-lg p-4 shadow-sm max-w-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{routes[hoveredRoute].from.flag}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span className="text-xl">{routes[hoveredRoute].to.flag}</span>
                </div>
                <p className="text-sm text-slate-600">
                  {routes[hoveredRoute].from.country} → {routes[hoveredRoute].to.country}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-lg p-6 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mx-auto mb-3 text-slate-600">
                {stat.icon}
              </div>
              <div className="text-xl font-light text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}