import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, BookOpen, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/video.mp4";

export default function Hero() {
  const programs = [
    "Artificial Intelligence & Data Science",
    "MBA & Executive Leadership",
    "Engineering & Technology",
    "Medical & Healthcare Programs",
    "Law, Research & Doctorates",
    "Global Certification Pathways",
  ];

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay
  const [hasLoaded, setHasLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % programs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(e => {
          console.log("Auto-play prevented:", e);
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleVideoLoad = () => {
    setHasLoaded(true);
    setVideoError(false);
    
    // Try to play the video
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay was prevented");
          setIsPlaying(false);
        });
      }
    }
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
    setHasLoaded(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Fallback background if video fails */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900/30">
            <div className="absolute inset-0">
              <motion.div
                className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-blue-600/30 blur-[140px]"
                animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/3 -right-48 w-[800px] h-[800px] rounded-full bg-indigo-500/30 blur-[160px]"
                animate={{ x: [0, -120, 0], y: [0, -100, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[-300px] left-1/4 w-[900px] h-[900px] rounded-full bg-emerald-500/20 blur-[180px]"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
            </div>
          </div>
        )}
        
        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            hasLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          poster="" // Optional: Add a poster image
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Loading Indicator */}
        {!hasLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-white/20 border-t-blue-500 rounded-full"
            />
          </div>
        )}

        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMute}
            className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Video Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        
        {/* Animated Scan Lines */}
        <motion.div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)`,
          }}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ANIMATED ELEMENTS OVER VIDEO */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.1) 100%),
              linear-gradient(0deg, transparent 95%, rgba(255,255,255,0.1) 100%)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
              </motion.div>
              <span className="text-sm font-semibold tracking-wider">
                GLOBALLY ACCREDITED EDUCATION
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                Elevating
                <br />
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Education
                </motion.span>
                <br />
                Beyond Boundaries
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Experience globally recognized programs, expert mentorship, and
              future-ready learning pathways designed for ambitious professionals.
            </motion.p>

            {/* Rotating Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent" />
              <div className="pl-6">
                <div className="text-sm uppercase tracking-widest text-blue-300 mb-3 font-semibold">
                  Featured Programs
                </div>
                <div className="h-12 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl font-bold text-white"
                    >
                      {programs[index]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Progress Dots */}
                <div className="flex gap-2 mt-4">
                  {programs.map((_, i) => (
                    <motion.div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === index ? 'w-8 bg-blue-500' : 'w-3 bg-white/30'
                      }`}
                      animate={i === index ? {
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              <Link
                to="/contact"
                className="group relative px-10 py-5 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Book Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>

              <Link
                to="/programs"
                className="group px-10 py-5 rounded-xl text-lg font-semibold text-white border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-lg transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  Explore Programs
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT STATS PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl p-[2px]"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, #3b82f6, #06b6d4, #10b981, transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-[2px] rounded-3xl bg-black/80" />
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Global Education Impact
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: Users, 
                      value: "5K+", 
                      label: "Global Learners",
                      color: "from-blue-500 to-cyan-500"
                    },
                    { 
                      icon: Award, 
                      value: "100+", 
                      label: "Accreditations",
                      color: "from-emerald-500 to-green-500"
                    },
                    { 
                      icon: BookOpen, 
                      value: "50+", 
                      label: "Programs",
                      color: "from-purple-500 to-pink-500"
                    },
                    { 
                      icon: Sparkles, 
                      value: "98%", 
                      label: "Satisfaction",
                      color: "from-amber-500 to-orange-500"
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        whileHover={{ 
                          y: -8,
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        className="relative group"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20 text-white mb-4`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.value}
                          </div>
                          <div className="text-sm text-gray-300 mt-2">{item.label}</div>
                          <motion.div
                            className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500 mt-3"
                            initial={false}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-400 tracking-wider">
            SCROLL TO EXPLORE
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}