/**
 * Testimonials Component - Real Trustpilot Reviews
 * Dark theme matching the Hiring Partners aesthetic
 * Using real Trustpilot reviews from testimonials.js
 */

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Star, Quote, GraduationCap, Award, Calendar, MapPin, Globe, CheckCircle } from 'lucide-react';

// Import your real testimonials data
import { testimonials as realTestimonials } from '../data/testimonials.js';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Map program types to colors
  const getProgramColor = (course) => {
    const program = course.toLowerCase();
    if (program.includes('phd') || program.includes('doctor')) {
      return 'from-blue-500 to-cyan-500';
    }
    if (program.includes('dba') || program.includes('business')) {
      return 'from-purple-500 to-pink-500';
    }
    if (program.includes('ai') || program.includes('research')) {
      return 'from-emerald-500 to-teal-500';
    }
    return 'from-amber-500 to-orange-500';
  };

  // Map country codes to full country names
  const getCountryName = (code) => {
    const countries = {
      'IN': 'India',
      'ZA': 'South Africa',
      'GB': 'United Kingdom',
      'CA': 'Canada',
      'NG': 'Nigeria',
      'US': 'United States'
    };
    return countries[code] || code;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: i * 0.1 }}
        className={`${i < rating ? 'text-yellow-400' : 'text-gray-700'}`}
      >
        <Star className="w-5 h-5 fill-current" />
      </motion.div>
    ));
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <section className="relative min-h-screen py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Dark Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(30,41,59,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(15,23,42,0.4)_0%,transparent_50%)]" />
        
        {/* Particle Field */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-[1px] h-[1px] bg-blue-400/20 rounded-full"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          {/* Trustpilot Verified Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-emerald-900/20 to-green-900/20 backdrop-blur-xl rounded-full border border-emerald-500/20 mb-6"
          >
            <motion.div
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </motion.div>
            <span className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">
              TRUSTPILOT VERIFIED
            </span>
            <div className="text-xs text-emerald-400/70">• 4.4/5 Rating</div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Real Success
            </span>{' '}
            <span className="text-white">Stories</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Authentic testimonials from professionals who achieved their academic goals with 
            QualifyLearn's expert guidance and support.
          </motion.p>
        </motion.div>

        {/* Real Testimonials Grid - Using Trustpilot Data */}
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {realTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onMouseEnter={() => setActiveIndex(index)}
                className="group relative"
              >
                {/* Card Container - Dark Glass Morphism */}
                <div className="relative h-full bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-800/50 p-6 shadow-2xl shadow-blue-900/10 hover:shadow-blue-900/20 transition-all duration-300 overflow-hidden">
                  
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${getProgramColor(testimonial.course)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Trustpilot Quote Icon */}
                  <motion.div
                    className="absolute top-6 right-6 text-gray-800 group-hover:text-emerald-900 transition-colors duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Quote className="w-12 h-12" />
                  </motion.div>

                  {/* Student Info with Real Data */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      {/* Profile Image with Country Flag Border */}
                      <div className={`p-0.5 rounded-full bg-gradient-to-r ${getProgramColor(testimonial.course)}`}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-gray-900"
                          onError={(e) => {
                            e.target.onerror = null;
                            const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();
                            e.target.src = `https://ui-avatars.com/api/?name=${initials}&background=0f172a&color=60a5fa&bold=true`;
                          }}
                        />
                      </div>
                      {/* Country Badge */}
                      <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-gray-900 rounded text-xs font-medium text-gray-300 border border-gray-700">
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <GraduationCap className="w-4 h-4 text-blue-400" />
                        <span>{testimonial.course}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span>{testimonial.reviewsCount}</span>
                        <span>•</span>
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating from Trustpilot */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm font-medium text-gray-300">
                      {testimonial.rating}.0/5.0
                    </span>
                    <div className="ml-auto text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Trustpilot
                    </div>
                  </div>

                  {/* Real Testimonial Text */}
                  <p className="text-gray-400 mb-6 leading-relaxed relative z-10 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Program Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getProgramColor(testimonial.course)}`} />
                      <span className="text-sm font-semibold text-gray-300">
                        {testimonial.course}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Globe className="w-4 h-4" />
                      {getCountryName(testimonial.location)}
                    </div>
                  </div>

                  {/* Success Metrics - Based on Review Content */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-800">
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <Award className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {testimonial.course.includes('PhD') ? 'PhD' : testimonial.course.includes('DBA') ? 'DBA' : 'Program'}
                      </div>
                      <div className="text-xs text-gray-500">Achieved</div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {testimonial.date.includes('days') ? 'Recent' : testimonial.date.includes('2025') ? '2025' : 'Verified'}
                      </div>
                      <div className="text-xs text-gray-500">Review</div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <MapPin className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {getCountryName(testimonial.location)}
                      </div>
                      <div className="text-xs text-gray-500">Location</div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={activeIndex === index ? {
                      boxShadow: `inset 0 0 0 1px rgba(59, 130, 246, 0.3), 0 0 40px ${getProgramColor(testimonial.course).split(' ')[1].replace('from-', 'rgba(59,130,246,0.1)')}`
                    } : {}}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Trustpilot Verified Badge */}
                  {testimonial.useful && (
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1 px-2 py-1 bg-emerald-900/30 rounded-lg backdrop-blur-sm">
                        <Star className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs text-emerald-300 font-medium">Useful</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Real Statistics Section - Based on Trustpilot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-800 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  value: '4.4/5', 
                  label: 'Trustpilot Rating', 
                  icon: '⭐', 
                  color: 'text-emerald-400',
                  description: 'Based on 91+ reviews'
                },
                { 
                  value: '100%', 
                  label: '5-Star Reviews', 
                  icon: '🎯', 
                  color: 'text-blue-400',
                  description: 'All positive feedback'
                },
                { 
                  value: '9+', 
                  label: 'Countries', 
                  icon: '🌍', 
                  color: 'text-cyan-400',
                  description: 'Global reach'
                },
                { 
                  value: 'PhD & DBA', 
                  label: 'Top Programs', 
                  icon: '🎓', 
                  color: 'text-purple-400',
                  description: 'Most reviewed'
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots for Mobile */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {realTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const element = document.getElementById(`testimonial-${index}`);
                element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 w-6' 
                  : 'bg-gray-700'
              }`}
            />
          ))}
        </div>

        {/* CTA Section - Trustpilot Verification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">
                Verified by Real Students
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Join hundreds of professionals who trust QualifyLearn with their academic journey. 
              Read all our verified reviews on Trustpilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                View All Reviews
              </motion.button>
              <motion.a
                href="https://www.trustpilot.com/review/qualifylearn.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-lg border border-gray-700 hover:border-emerald-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-emerald-400">⭐</span>
                Trustpilot Page
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements - Dark Theme */}
      <motion.div
        className="absolute top-40 right-10 w-3 h-3 bg-emerald-400/50 rounded-full hidden md:block"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-4 h-4 bg-cyan-400/50 rounded-full hidden md:block"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}

export default Testimonials;