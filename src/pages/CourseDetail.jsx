/**
 * CourseDetail Page - Premium Dark Theme
 * Shows detailed information about a specific course
 * Includes full description, requirements, career paths, and universities
 */

import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseById } from '../data/courses';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

function CourseDetail() {
  const { id } = useParams();
  const course = getCourseById(id);

  // Redirect to courses page if course not found
  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="min-h-screen">


      {/* Course Details Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About This Program</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              {course.fullDescription}
            </p>
          </motion.div>

          {/* Course Image */}
          {course.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-2xl shadow-xl border border-blue-100/70"
              />
            </motion.div>
          )}

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 bg-white/85 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Admission Requirements</h3>
            <ul className="space-y-3">
              {course.requirements.map((req, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start"
                >
                  <svg className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">{req}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Career Paths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Career Opportunities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {course.careerPaths.map((career, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-gradient-to-br from-blue-100/80 to-blue-50 border border-blue-200 p-4 rounded-xl text-center backdrop-blur-sm shadow-sm"
                >
                  <p className="font-semibold text-slate-900">{career}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partner Universities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Partner Universities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.universities.map((university, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="bg-white/85 backdrop-blur-sm border border-blue-100 p-4 rounded-xl hover:border-blue-200 transition-all shadow-sm"
                >
                  <p className="font-semibold text-slate-900">{university}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl transition-all"
              >
                Get Counselling for This Course
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Link
                to="/courses"
                className="block bg-slate-800/50 border border-slate-700 text-slate-200 text-center py-3 rounded-xl font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                Browse Other Courses
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
