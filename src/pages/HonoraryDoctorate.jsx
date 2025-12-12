import { motion } from 'framer-motion';

function HonoraryDoctorate() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.45}} className="text-4xl md:text-5xl font-extrabold text-slate-900">Honorary Doctorate</motion.h1>
          <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55, delay:0.05}} className="mt-3 text-slate-600 max-w-3xl">
            Recognition of distinguished contributions to society, research, industry, and leadership in collaboration with our global partner institutions.
          </motion.p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {title:'Eligibility & Criteria', desc:'Impact, leadership, body of work, citations, and verifiable contributions.'},
              {title:'Dossier Preparation', desc:'Portfolio, endorsements, publications, and evidence of impact.'},
              {title:'Partner Evaluation', desc:'Transparent review with academic boards at partner universities.'},
            ].map((b, i) => (
              <motion.div key={b.title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.4, delay:i*0.05}} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#process" className="px-5 py-3 rounded-xl text-sm font-semibold text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-100">View Process</a>
            <a href="#faqs" className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-blue-100">FAQs</a>
          </div>

          <div id="process" className="mt-14 grid md:grid-cols-2 gap-8">
            <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-blue-100 p-6">
              <h2 className="text-2xl font-extrabold text-slate-900">Recognition Process</h2>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                <li>Profile assessment and preliminary fit</li>
                <li>Dossier review by academic panel</li>
                <li>Institutional board evaluation</li>
                <li>Conferral communication and ceremony planning</li>
              </ul>
            </motion.div>
            <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-blue-100 p-6">
              <h2 className="text-2xl font-extrabold text-slate-900">Required Documents</h2>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                <li>Updated CV and portfolio</li>
                <li>Notable publications or media coverage</li>
                <li>Endorsements and references</li>
                <li>Evidence of impact and leadership</li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-12">
            <a href="/upcoming-courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">See Upcoming Courses</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HonoraryDoctorate;
