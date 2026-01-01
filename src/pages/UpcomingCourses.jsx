import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  Sparkles, 
  ChevronRight,
  Star,
  TrendingUp,
  Zap,
  ArrowRight,
  Tag
} from 'lucide-react';

// Use online photos for cards instead of logos

function UpcomingCourses() {
  const baseCourses = [
    {
      id: 'honorary-doctorate',
      title: 'Honorary Doctorate',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop',
      link: '/honorary-doctorate',
      tag: 'Recognition',
      description: 'Prestigious academic honor for lifetime achievements',
      icon: <Award className="w-4 h-4" />,
      seats: '15 seats left',
      rating: 4.9,
      reviewCount: 47,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'honorary-professorship',
      title: 'Honorary Professorship',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop',
      link: '/honorary-professorship',
      tag: 'Academic',
      description: 'Formal university association and teaching platform',
      icon: <Users className="w-4 h-4" />,
      seats: '12 seats left',
      rating: 4.8,
      reviewCount: 32,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'phd',
      title: 'PhD Program',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop',
      link: '/phd',
      tag: 'Doctoral',
      description: 'Advanced research and academic excellence',
      icon: <Sparkles className="w-4 h-4" />,
      seats: '8 seats left',
      rating: 4.9,
      reviewCount: 56,
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'mba',
      title: 'MBA (Master)',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
      link: '/mba',
      tag: 'Management',
      description: 'Comprehensive business leadership education',
      icon: <TrendingUp className="w-4 h-4" />,
      seats: '25 seats left',
      rating: 4.7,
      reviewCount: 89,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'dba',
      title: 'DBA Program',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
      link: '/dba',
      tag: 'Executive',
      description: 'Executive doctoral program for business leaders',
      icon: <Zap className="w-4 h-4" />,
      seats: '10 seats left',
      rating: 4.9,
      reviewCount: 41,
      color: 'from-rose-500 to-pink-500'
    },
  ];

  const decCourses = baseCourses.map(c => ({
    ...c,
    schedule: 'December 8, 2024',
    duration: '12 month program',
    startDate: 'Dec 8, 2024',
    endDate: 'Dec 8, 2025',
    suggestedPrice: 99,
    payLink: `/enroll?course=${encodeURIComponent(c.title)}&id=${c.id}&month=December&date=8&suggestedPrice=99`,
  }));

  const janCourses = baseCourses.map(c => ({
    ...c,
    schedule: 'January 8, 2025',
    duration: '12 month program',
    startDate: 'Jan 8, 2025',
    endDate: 'Jan 8, 2026',
    suggestedPrice: 99,
    payLink: `/enroll?course=${encodeURIComponent(c.title)}&id=${c.id}&month=January&date=8&suggestedPrice=99`,
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/20 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-blue-100 shadow-sm mb-8"
            >
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 tracking-wide">UPCOMING BATCHES</span>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Upcoming
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Courses & Programs
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Secure your spot in our prestigious programs designed for ambitious professionals 
              seeking academic excellence and career transformation.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8"
            >
              {[
                { number: '500+', label: 'Professionals Trained' },
                { number: '98%', label: 'Satisfaction Rate' },
                { number: '25+', label: 'Countries' },
                { number: '50+', label: 'Industry Experts' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* December Batch */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">December 2024 Batch</h2>
                    <p className="text-slate-600">Starting December 8, 2024 • Limited seats available</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700 font-medium">Enrollment closes in 12 days</span>
                </div>
              </div>
              <div className="hidden md:block">
                <Link to="#january-batch" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                  View January Batch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decCourses.map((item, idx) => (
              <motion.div
                key={`dec-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-slate-800 border border-slate-200">
                        <Tag className="w-3 h-3" />
                        {item.tag}
                      </span>
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold text-slate-800">{item.rating}</span>
                        <span className="text-xs text-slate-500">({item.reviewCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4" />
                        <span><strong>Starts:</strong> {item.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span><strong>Duration:</strong> {item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Users className="w-4 h-4" />
                        <span className="text-emerald-600 font-medium">{item.seats}</span>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-end pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <Link
                          to={item.link}
                          className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          Details
                        </Link>
                        <Link
                          to={item.payLink}
                          className="group relative px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Enroll Now
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* January Batch */}
      <section id="january-batch" className="py-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">January 2025 Batch</h2>
                    <p className="text-slate-600">Starting January 8, 2025 • Early bird pricing available</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-purple-700 font-medium">Early enrollment discount ends soon</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {janCourses.map((item, idx) => (
              <motion.div
                key={`jan-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-slate-800 border border-slate-200">
                        <Tag className="w-3 h-3" />
                        {item.tag}
                      </span>
                    </div>
                    
                    {/* Early Bird Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold">
                        <Zap className="w-3 h-3" />
                        Early Bird
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4" />
                        <span><strong>Starts:</strong> {item.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span><strong>Duration:</strong> {item.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Users className="w-4 h-4" />
                        <span className="text-emerald-600 font-medium">{item.seats}</span>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-end pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <Link
                          to={item.link}
                          className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          Details
                        </Link>
                        <Link
                          to={item.payLink}
                          className="group relative px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Enroll Now
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-xl border border-slate-100 text-center"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-blue-100 blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-blue-100 blur-xl" />
            
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-8">
              <Sparkles className="w-8 h-8" />
            </div>
            
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Career?</span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers through our prestigious programs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="#december-batch"
                className="group px-8 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                View December Batch
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
              
              <Link
                to="#january-batch"
                className="group px-8 py-3 rounded-xl text-lg font-semibold text-blue-700 border-2 border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                View January Batch
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default UpcomingCourses;