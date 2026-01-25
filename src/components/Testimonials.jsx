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
        className={`${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
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
    <section className="relative min-h-screen py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-indigo-50/10 to-purple-50/10">
      {/* Light Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.05)_0%,transparent_50%)]" />
        
        {/* Particle Field */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-[1px] h-[1px] bg-indigo-300/30 rounded-full"
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
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-indigo-100/80 to-purple-100/80 backdrop-blur-xl rounded-full border border-indigo-200/50 shadow-luxury mb-6"
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
              <CheckCircle className="w-4 h-4 text-indigo-600" />
            </motion.div>
            <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">
              VERIFIED TESTIMONIALS
            </span>
            <div className="text-xs text-indigo-600/70">• 4.8/5 Rating</div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Transformative
            </span>{' '}
            <span className="text-slate-900">Outcomes</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how distinguished professionals achieved remarkable career transformations through 
            Synergy Scholars Academia's world-class programs and personalized mentorship.
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
                {/* Card Container - Light Glass Morphism */}
                <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-6 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 overflow-hidden">
                  
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${getProgramColor(testimonial.course)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute top-6 right-6 text-indigo-200 group-hover:text-indigo-400 transition-colors duration-300"
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
                          className="w-16 h-16 rounded-full object-cover border-4 border-white"
                          onError={(e) => {
                            e.target.onerror = null;
                            const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();
                            e.target.src = `https://ui-avatars.com/api/?name=${initials}&background=0f172a&color=60a5fa&bold=true`;
                          }}
                        />
                      </div>
                      {/* Country Badge */}
                      <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-white rounded text-xs font-medium text-slate-700 border border-gray-200 shadow-sm">
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <GraduationCap className="w-4 h-4 text-indigo-600" />
                        <span>{testimonial.course}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <span>{testimonial.reviewsCount}</span>
                        <span>•</span>
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm font-medium text-slate-700">
                      {testimonial.rating}.0/5.0
                    </span>
                    <div className="ml-auto text-xs text-indigo-600 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 mb-6 leading-relaxed relative z-10 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Program Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getProgramColor(testimonial.course)}`} />
                      <span className="text-sm font-semibold text-slate-700">
                        {testimonial.course}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Globe className="w-4 h-4" />
                      {getCountryName(testimonial.location)}
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <Award className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        {testimonial.course.includes('PhD') ? 'PhD' : testimonial.course.includes('DBA') ? 'DBA' : 'Program'}
                      </div>
                      <div className="text-xs text-slate-600">Achieved</div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <Calendar className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        {testimonial.date.includes('days') ? 'Recent' : testimonial.date.includes('2025') ? '2025' : 'Verified'}
                      </div>
                      <div className="text-xs text-slate-600">Review</div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <MapPin className="w-4 h-4 text-pink-600" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        {getCountryName(testimonial.location)}
                      </div>
                      <div className="text-xs text-slate-600">Location</div>
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

                  {/* Verified Badge */}
                  {testimonial.useful && (
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1 px-2 py-1 bg-indigo-100/80 rounded-lg backdrop-blur-sm border border-indigo-200/50">
                        <Star className="w-3 h-3 text-indigo-600" />
                        <span className="text-xs text-indigo-700 font-medium">Verified</span>
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
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 p-8 shadow-luxury-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  value: '4.8/5', 
                  label: 'Excellence Rating', 
                  icon: '⭐', 
                  color: 'text-indigo-600',
                  description: 'Based on 150+ reviews'
                },
                { 
                  value: '98%', 
                  label: 'Satisfaction Rate', 
                  icon: '🎯', 
                  color: 'text-purple-600',
                  description: 'Highly satisfied scholars'
                },
                { 
                  value: '75+', 
                  label: 'Global Reach', 
                  icon: '🌍', 
                  color: 'text-pink-600',
                  description: 'Countries served'
                },
                { 
                  value: 'Elite', 
                  label: 'Program Quality', 
                  icon: '🎓', 
                  color: 'text-indigo-600',
                  description: 'World-class standards'
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
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-700 font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-600">{stat.description}</div>
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
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 w-6' 
                  : 'bg-gray-300'
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
              <CheckCircle className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Verified by Distinguished Professionals
              </h3>
            </div>
            <p className="text-slate-700 mb-6">
              Join thousands of accomplished professionals who chose Synergy Scholars Academia for their transformative academic journey. 
              Explore our comprehensive collection of verified success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-luxury-lg hover:shadow-luxury-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                View All Testimonials
              </motion.button>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-luxury"
              >
                <span className="text-indigo-600">⭐</span>
                Share Your Story
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements - Light Theme */}
      <motion.div
        className="absolute top-40 right-10 w-3 h-3 bg-indigo-300/40 rounded-full hidden md:block"
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
        className="absolute bottom-40 left-10 w-4 h-4 bg-purple-300/40 rounded-full hidden md:block"
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