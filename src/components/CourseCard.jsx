import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CourseCardHorizontal({ course, index = 0 }) {
  const category = {
    'Undergraduate': { color: 'bg-blue-500', text: 'text-blue-700', icon: '🎓' },
    'Postgraduate': { color: 'bg-indigo-500', text: 'text-indigo-700', icon: '📚' },
    'Doctoral': { color: 'bg-slate-700', text: 'text-slate-700', icon: '🎯' },
    'Certificate': { color: 'bg-emerald-500', text: 'text-emerald-700', icon: '🏅' }
  }[course.category] || { color: 'bg-blue-500', text: 'text-blue-700', icon: '🎓' };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/courses/${course.id}`}>
        <div className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
          
          {/* Image Section - Compact */}
          <div className="md:w-48 h-32 md:h-auto bg-slate-50 relative flex-shrink-0">
            {course.image ? (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-3xl opacity-10">{category.icon}</span>
              </div>
            )}
            
            {/* Category Badge - Mobile only */}
            <div className="absolute top-3 left-3 md:hidden">
              <div className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs border border-slate-200">
                {category.icon} {course.category}
              </div>
            </div>
          </div>

          {/* Content Section - Horizontal layout */}
          <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center gap-4">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="hidden md:block text-xs text-slate-400 mb-1">
                {category.icon} {course.category}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1 leading-tight">
                {course.title}
              </h3>
              {course.institution && (
                <div className="text-sm text-slate-500 mb-2 truncate">
                  {course.institution}
                </div>
              )}
              <p className="text-sm text-slate-600 line-clamp-2">
                {course.description}
              </p>
            </div>

            {/* Details Grid - Compact */}
            <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3" />
                </svg>
                <span className="text-sm font-medium text-slate-700">{course.duration}</span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-sm font-medium text-slate-700">{course.level || 'Beginner'}</span>
              </div>

              {course.enrolled && (
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl">
                  <div className="flex -space-x-2">
                    {[1, 2].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white text-[10px] flex items-center justify-center">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {course.enrolled.toLocaleString()}+
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default CourseCardHorizontal;