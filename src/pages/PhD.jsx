import { motion } from 'framer-motion';

function PhD() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.45}} className="text-4xl md:text-5xl font-extrabold text-slate-900">PhD Programs</motion.h1>
          <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55, delay:0.05}} className="mt-3 text-slate-600 max-w-3xl">
            Doctoral pathways focused on original research, rigorous methodology, and impactful scholarly contributions.
          </motion.p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {title:'Research Areas', desc:'STEM, Management, Social Sciences, and Interdisciplinary domains.'},
              {title:'Supervision', desc:'Access to experienced supervisors and research communities.'},
              {title:'Admissions', desc:'Eligibility, proposal template, and application timelines.'},
            ].map((b, i) => (
              <motion.div key={b.title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.4, delay:i*0.05}} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <a href="/upcoming-courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">See Upcoming Courses</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PhD;
