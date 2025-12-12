import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Use online photos for cards instead of logos

function UpcomingCourses() {
  const baseCourses = [
    {
      id: 'honorary-doctorate',
      title: 'Honorary Doctorate',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop',
      link: '/honorary-doctorate',
      tag: 'Recognition',
    },
    {
      id: 'honorary-professorship',
      title: 'Honorary Professorship',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop',
      link: '/honorary-professorship',
      tag: 'Academic',
    },
    {
      id: 'phd',
      title: 'PhD',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop',
      link: '/phd',
      tag: 'Doctoral',
    },
    {
      id: 'mba',
      title: 'MBA (Master)',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
      link: '/mba',
      tag: 'Management',
    },
    {
      id: 'dba',
      title: 'DBA',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
      link: '/dba',
      tag: 'Executive',
    },
  ];

  const decCourses = baseCourses.map(c => ({
    ...c,
    schedule: '8 Dec',
    duration: '12 month program',
    price: 99,
    payLink: `/pay?course=${encodeURIComponent(c.title)}&id=${c.id}&month=December&date=8&price=99`,
  }));

  const janCourses = baseCourses.map(c => ({
    ...c,
    schedule: '8 Jan',
    duration: '12 month program',
    price: 99,
    payLink: `/pay?course=${encodeURIComponent(c.title)}&id=${c.id}&month=January&date=8&price=99`,
  }));

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-white" />
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900"
              >
                Upcoming Courses & Events
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-4 text-slate-600 max-w-2xl"
              >
                Stay ahead with expertly curated masterclasses, clinics, and sprints aligned to our flagship programs.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-100 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-200 blur-2xl" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="rounded-2xl border border-blue-100 bg-white p-0 shadow-xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop"
                  alt="Learning Community"
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">December Batch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {decCourses.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                className="group rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-contain bg-gradient-to-b from-blue-50 to-white"
                    initial={{ scale: 1.02 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute top-3 left-3 text-xs font-bold bg-white text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-blue-700">{item.schedule} • {item.duration}</p>
                  <h3 className="mt-1 text-lg font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">Limited seats. Secure your spot for the upcoming cohort.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link to={item.link} className="text-sm font-semibold text-blue-700 hover:text-blue-800">Details</Link>
                    <Link
                      to={item.payLink}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Enroll • $ {item.price}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">January Batch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {janCourses.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                className="group rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-contain bg-gradient-to-b from-blue-50 to-white"
                    initial={{ scale: 1.02 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute top-3 left-3 text-xs font-bold bg-white text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-blue-700">{item.schedule} • {item.duration}</p>
                  <h3 className="mt-1 text-lg font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">Limited seats. Secure your spot for the upcoming cohort.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link to={item.link} className="text-sm font-semibold text-blue-700 hover:text-blue-800">Details</Link>
                    <Link
                      to={item.payLink}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Enroll • $ {item.price}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpcomingCourses;
