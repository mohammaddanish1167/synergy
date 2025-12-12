import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CourseCard({ course, index = 0 }) {
  const category = {
    'Undergraduate': {
      color: 'bg-blue-500',
      text: 'text-blue-700',
      icon: '🎓'
    },
    'Postgraduate': {
      color: 'bg-indigo-500',
      text: 'text-indigo-700',
      icon: '📚'
    },
    'Doctoral': {
      color: 'bg-slate-700',
      text: 'text-slate-700',
      icon: '🎯'
    },
    'Certificate': {
      color: 'bg-emerald-500',
      text: 'text-emerald-700',
      icon: '🏅'
    }
  }[course.category] || { color: 'bg-blue-500', text: 'text-blue-700', icon: '🎓' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Link to={`/courses/${course.id}`} className="block h-full">
        <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
          {/* Image Section */}
          <div className="relative h-56 overflow-hidden flex-shrink-0">
            {course.image ? (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className={`w-full h-full ${category.color} flex items-center justify-center`}>
                <span className="text-5xl opacity-20">{category.icon}</span>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <div className={`px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm border ${category.text} text-sm font-semibold flex items-center gap-2 shadow-sm`}>
                <span className="text-base">{category.icon}</span>
                <span className="font-bold">{course.category}</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex-grow flex flex-col">
            {/* Improved Heading Styling */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight tracking-tight">
                {course.title}
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-300 group-hover:w-16"></div>
            </div>

            {/* Institution */}
            {course.institution && (
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-sm">🏛️</span>
                </div>
                <span className="text-sm font-medium truncate">{course.institution}</span>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
              {course.description}
            </p>

            {/* Course Details */}
            <div className="mt-auto">
              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:border-blue-200 transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-white border border-blue-100 shadow-sm flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Duration</div>
                    <div className="text-sm font-bold text-gray-800 truncate">{course.duration}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 hover:border-emerald-200 transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-white border border-emerald-100 shadow-sm flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Level</div>
                    <div className="text-sm font-bold text-gray-800 truncate">{course.level || 'Beginner'}</div>
                  </div>
                </div>
              </div>

              {/* Rating if exists */}
              {course.rating && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 mb-6">
                  <div className="p-2 rounded-lg bg-white border border-amber-100 shadow-sm flex-shrink-0">
                    <span className="text-sm text-amber-600 font-bold">★</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Rating</div>
                    <div className="text-sm font-bold text-gray-800">
                      <span className="text-amber-600">{course.rating}</span>/5
                    </div>
                  </div>
                </div>
              )}

              {/* Footer with enrolled students ONLY */}
              <div className="pt-4 border-t border-gray-100">
                {course.enrolled && (
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 border-3 border-white flex items-center justify-center text-xs font-bold text-blue-700 shadow-md transition-transform duration-300 group-hover:-translate-y-1" 
                          style={{ zIndex: 3 - i }}>
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Enrolled Students</div>
                      <div className="text-sm font-bold text-gray-800">
                        {course.enrolled.toLocaleString()}+ students
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default CourseCard;