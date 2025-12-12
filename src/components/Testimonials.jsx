/**
 * Testimonials Component - Dark Theme
 * Matches the Hiring Partners dark aesthetic with professional testimonials
 */

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Star, Quote, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      course: 'Computer Science',
      university: 'Stanford University',
      program: 'Masters in Computer Science',
      rating: 5,
      text: "QualifyLearn transformed my academic journey. Their personalized guidance helped me secure admission to my dream university with a full scholarship. The application support was exceptional!",
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      result: 'Full Scholarship',
      duration: '6 Months',
      location: 'California, USA',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Michael Chen',
      course: 'Business Administration',
      university: 'Harvard Business School',
      program: 'MBA Program',
      rating: 5,
      text: "The career counseling and interview preparation I received were game-changing. I went from multiple rejections to receiving offers from three top-tier business schools.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      result: '3 Acceptances',
      duration: '8 Months',
      location: 'Massachusetts, USA',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      course: 'Data Science',
      university: 'MIT',
      program: 'PhD in Data Science',
      rating: 5,
      text: "As an international student, the visa process seemed daunting. QualifyLearn's step-by-step guidance made everything seamless. Their expertise in documentation was invaluable.",
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      result: 'Visa Success',
      duration: '4 Months',
      location: 'Cambridge, USA',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      name: 'David Wilson',
      course: 'Mechanical Engineering',
      university: 'University of Cambridge',
      program: 'Masters in Engineering',
      rating: 5,
      text: "The research proposal assistance and academic portfolio development helped me stand out in a competitive applicant pool. Their attention to detail is remarkable.",
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      result: 'Research Grant',
      duration: '7 Months',
      location: 'Cambridge, UK',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 5,
      name: 'Aisha Mohammed',
      course: 'Medicine',
      university: 'University of Oxford',
      program: 'Medical Research',
      rating: 5,
      text: "From course selection to final admission, every step was perfectly coordinated. Their network of mentors provided insights I couldn't have found anywhere else.",
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      result: 'Clinical Placement',
      duration: '9 Months',
      location: 'Oxford, UK',
      color: 'from-rose-500 to-red-500'
    },
    {
      id: 6,
      name: 'James Rodriguez',
      course: 'Law',
      university: 'Yale Law School',
      program: 'Juris Doctor',
      rating: 5,
      text: "The mock interview sessions and essay editing were outstanding. They helped me craft a compelling narrative that truly reflected my passion and potential.",
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      result: 'Dean\'s List',
      duration: '5 Months',
      location: 'Connecticut, USA',
      color: 'from-indigo-500 to-violet-500'
    }
  ];

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
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-xl rounded-full border border-blue-500/20 mb-6"
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
              <Award className="w-4 h-4 text-blue-400" />
            </motion.div>
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              SUCCESS STORIES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Transformative
            </span>{' '}
            <span className="text-white">Experiences</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Real success stories from students who achieved their academic dreams with our 
            comprehensive guidance and expert support.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid - Dark Cards */}
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
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
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute top-6 right-6 text-gray-800 group-hover:text-blue-900 transition-colors duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Quote className="w-12 h-12" />
                  </motion.div>

                  {/* Student Info */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      {/* Profile Image with Gradient Border */}
                      <div className="p-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-gray-900"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=0f172a&color=60a5fa&bold=true`;
                          }}
                        />
                      </div>
                      {/* Online Indicator */}
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <GraduationCap className="w-4 h-4 text-blue-400" />
                        {testimonial.course}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm font-medium text-gray-300">
                      {testimonial.rating}.0/5.0
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Program Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${testimonial.color}`} />
                      <span className="text-sm font-semibold text-gray-300">
                        {testimonial.program}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.university}
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-800">
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <Award className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-sm font-semibold text-white">{testimonial.result}</div>
                      <div className="text-xs text-gray-500">Result</div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="text-sm font-semibold text-white">{testimonial.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <MapPin className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-sm font-semibold text-white">{testimonial.location}</div>
                      <div className="text-xs text-gray-500">Location</div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={activeIndex === index ? {
                      boxShadow: `inset 0 0 0 1px rgba(59, 130, 246, 0.3), 0 0 40px ${testimonial.color.split(' ')[1].replace('from-', 'rgba(59,130,246,0.1)')}`
                    } : {}}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistics Section - Dark */}
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
                { value: '98.7%', label: 'Admission Success', icon: '🎯', color: 'text-blue-400' },
                { value: '5,000+', label: 'Students Guided', icon: '👨‍🎓', color: 'text-cyan-400' },
                { value: '$15M+', label: 'Scholarships', icon: '💰', color: 'text-emerald-400' },
                { value: '50+', label: 'Countries', icon: '🌍', color: 'text-purple-400' },
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
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots for Mobile */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const element = document.getElementById(`testimonial-${index}`);
                element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-6' 
                  : 'bg-gray-700'
              }`}
            />
          ))}
        </div>

        {/* CTA Section - Dark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-400 mb-6">
              Join thousands of successful students who have achieved their academic dreams with our expert guidance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements - Dark Theme */}
      <motion.div
        className="absolute top-40 right-10 w-3 h-3 bg-blue-400/50 rounded-full hidden md:block"
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