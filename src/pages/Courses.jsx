import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

function Courses() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">All Courses</h1>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Explore undergraduate, postgraduate, and doctoral programs curated to industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
