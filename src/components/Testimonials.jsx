/**
 * Testimonials Component - Redesigned with Clean SaaS Aesthetic
 */

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Star, Quote, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

// Import your real testimonials data
import { testimonials as realTestimonials } from '../data/testimonials.js';

function Testimonials() {
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
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
      />
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-white py-24 overflow-hidden">
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
              <CheckCircle className="w-4 h-4" />
              Verified Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-6"
          >
            Transformative
            <span className="block font-medium mt-2 text-slate-700">
              Outcomes
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Discover how distinguished professionals achieved remarkable career transformations through
            our world-class programs and personalized mentorship.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
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
                className="group"
              >
                {/* Card */}
                <div className="h-full bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-sm transition-all duration-200">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white"
                          onError={(e) => {
                            e.target.onerror = null;
                            const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();
                            e.target.src = `https://ui-avatars.com/api/?name=${initials}&background=0f172a&color=fff&bold=true`;
                          }}
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">{testimonial.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                          <GraduationCap className="w-3 h-3" />
                          <span className="truncate max-w-[120px]">{testimonial.course}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quote icon */}
                    <Quote className="w-8 h-8 text-slate-200" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-xs text-slate-400">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                    "{testimonial.text}"
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{testimonial.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{getCountryName(testimonial.location)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-600">Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '4.8/5', label: 'Overall Rating', sub: '150+ reviews' },
                { value: '98%', label: 'Satisfaction', sub: 'Highly satisfied' },
                { value: '75+', label: 'Countries', sub: 'Global reach' },
                { value: 'Elite', label: 'Quality', sub: 'World-class' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-light text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-slate-500 mb-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-400">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="max-w-xl mx-auto">
            <h3 className="text-xl font-light text-slate-900 mb-3">
              Join our community of distinguished professionals
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Explore our collection of verified success stories from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors">
                View All Testimonials
              </button>
              <button className="px-6 py-3 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                Share Your Story
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;