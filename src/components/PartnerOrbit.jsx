import { motion } from 'framer-motion';
import { Building2, Sparkles } from 'lucide-react';

// Import logos
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/baptlist.png';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

const partners = [
  { 
    id: 1,
    name: 'Kennedy University', 
    logo: KennedyUniLogo,
    color: 'from-blue-600 to-blue-800',
  },
  { 
    id: 2,
    name: 'American Management University', 
    logo: AMULogo,
    color: 'from-purple-600 to-purple-800',
  },
  { 
    id: 3,
    name: 'Kennedy Baptist University', 
    logo: KennedyBaptistLogo,
    color: 'from-emerald-600 to-emerald-800',
  },
  { 
    id: 4,
    name: 'Central Global University', 
    logo: CentralGlobalLogo,
    color: 'from-amber-600 to-amber-800',
  },
  { 
    id: 5,
    name: 'Euro-Asian University', 
    logo: EuroAsianLogo,
    color: 'from-rose-600 to-rose-800',
  },
];

function UniversityPartnerships() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-blue-500"></div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                University Partners
              </span>
              <Building2 className="w-4 h-4 text-blue-600" />
            </div>
            <div className="h-px w-8 bg-blue-500"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Academic
            </span>{' '}
            Partners
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Exclusive collaborations with prestigious institutions worldwide
          </motion.p>
        </div>

        {/* Clean Logos Grid - NO BOXES, JUST LOGOS */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4"
              >
                {/* PURE LOGO - NO BOX, NO BACKGROUND */}
                <div className="relative w-full h-48 md:h-56 mb-6 flex items-center justify-center">
                  {/* Subtle floating animation */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* Logo with smooth shadow */}
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain max-h-40 md:max-h-48 filter drop-shadow-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="text-center">
                              <div class="text-5xl font-bold bg-gradient-to-r ${partner.color} bg-clip-text text-transparent mb-2">
                                ${partner.name.split(' ').map(w => w[0]).join('')}
                              </div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* University Name */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {partner.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default UniversityPartnerships;