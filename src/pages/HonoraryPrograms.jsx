import { motion } from 'framer-motion';

function HonoraryPrograms() {
  return (
    <div className="min-h-[60vh] bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Honorary Doctorate / Professorship</motion.h1>
        <p className="text-slate-600 max-w-3xl">
          Explore pathways to Honorary Doctorate and Honorary Professorship recognitions in collaboration with partner institutions.
        </p>
      </div>
    </div>
  );
}

export default HonoraryPrograms;
