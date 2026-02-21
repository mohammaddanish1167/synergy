import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Award, GraduationCap, Book, Briefcase, Globe, Users, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

function FeaturedProgramsHorizontal() {
  const navigate = useNavigate();

  const featuredPrograms = [
    {
      id: 'honorary-doctorate',
      title: 'Honorary Doctorate',
      subtitle: 'Distinguished Lifetime Recognition',
      description: 'Prestigious global acknowledgment for extraordinary professional accomplishments.',
      icon: Award,
      duration: 'Prestigious Honor',
      students: '500+ Awarded',
      path: '/honorary-doctorate',
      successRate: '99%',
      color: 'indigo'
    },
    {
      id: 'honorary-professorship',
      title: 'Honorary Professorship',
      subtitle: 'Academic Excellence Recognition',
      description: 'Elite academic distinction honoring exceptional contributions.',
      icon: GraduationCap,
      duration: 'Academic Honor',
      students: '300+ Appointed',
      path: '/honorary-professorship',
      successRate: '98%',
      color: 'purple'
    },
    {
      id: 'phd',
      title: 'PhD Programs',
      subtitle: 'Advanced Research Doctorate',
      description: 'Comprehensive research-intensive programs.',
      icon: Book,
      duration: '3-6 Years',
      students: '2,000+ Graduates',
      path: '/phd',
      successRate: '95%',
      color: 'emerald'
    },
    {
      id: 'mba',
      title: 'MBA',
      subtitle: 'Strategic Executive Leadership',
      description: 'Advanced business leadership programs.',
      icon: Briefcase,
      duration: '1-2 Years',
      students: '5,000+ Graduates',
      path: '/mba',
      successRate: '92%',
      color: 'amber'
    },
    {
      id: 'dba',
      title: 'DBA',
      subtitle: 'Executive Doctoral Excellence',
      description: 'Prestigious executive doctorate.',
      icon: Globe,
      duration: '3-4 Years',
      students: '800+ Graduates',
      path: '/dba',
      successRate: '96%',
      color: 'pink'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-1 h-8 bg-slate-900" />
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Academic Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-light text-slate-900"
          >
            Featured
            <span className="block font-medium mt-1">programs & pathways</span>
          </motion.h2>
        </div>

        {/* Horizontal list */}
        <div className="space-y-4">
          {featuredPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(program.path)}
                className="group bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <div className="p-5 flex flex-col sm:flex-row sm:items-center gap-5">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-${program.color}-50 border border-${program.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 text-${program.color}-600`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {program.title}
                      </h3>
                      <span className="text-sm text-slate-400">{program.subtitle}</span>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-3 line-clamp-1">
                      {program.description}
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-600">{program.students}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-600">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-600">{program.successRate} success</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5 text-slate-600" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-right"
        >
          <button
            onClick={() => navigate('/programs')}
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            View all programs
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProgramsHorizontal;