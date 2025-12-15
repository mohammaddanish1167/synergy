/**
 * University Partnerships Component
 * Clean, professional display of partner university logos and names
 */

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

// Import logos
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/baptlist.png';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

// Partner universities data
const partners = [
  { 
    id: 1,
    name: 'Kennedy University', 
    logo: KennedyUniLogo,
  },
  { 
    id: 2,
    name: 'American Management University', 
    logo: AMULogo,
  },
  { 
    id: 3,
    name: 'Kennedy Baptist University', 
    logo: KennedyBaptistLogo,
  },
  { 
    id: 4,
    name: 'Central Global University', 
    logo: CentralGlobalLogo,
  },
  { 
    id: 5,
    name: 'Euro-Asian University', 
    logo: EuroAsianLogo,
  },
];

function UniversityPartnerships() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                University Partners
              </span>
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
            <div className="h-px w-16 bg-gray-300"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6"
          >
            Our <span className="font-semibold text-gray-800">Academic</span> Partners
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Exclusive collaborations with prestigious institutions worldwide
          </motion.p>
        </div>

        {/* Partners Grid - Only Logos and Names */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center"
              >
                {/* University Logo */}
                <div className="w-full h-64 mb-6 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain max-h-52"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="text-center">
                              <div class="text-6xl font-bold text-gray-800 mb-3">${partner.name.split(' ').map(w => w[0]).join('')}</div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
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

        

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-6">
                Partner with Excellence
              </h3>
              
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Access world-class education through our exclusive university partnerships
              </p>
              
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="group relative px-10 py-5 
bg-gradient-to-br from-indigo-950 via-violet-900 to-blue-950 
text-white font-bold 
rounded-2xl 
overflow-hidden 
shadow-2xl hover:shadow-indigo-950/60 
transition-all duration-500
"
  >
    {/* Animated gradient background */}
    <motion.div
      className="absolute inset-0"
      animate={{
        background: [
          'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1e3a8a 100%)',
          'linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #1e40af 100%)',
          'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #1d4ed8 100%)',
          'linear-gradient(135deg, #1e40af 0%, #1d4ed8 50%, #1e40af 100%)',
          'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1e3a8a 100%)',
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* Floating book pages effect */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-8 bg-white/20 rounded-sm"
          style={{
            left: `${15 + i * 25}%`,
            top: '20%',
            rotate: `${i * 15 - 15}deg`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [
              `${i * 15 - 15}deg`,
              `${i * 15 - 10}deg`,
              `${i * 15 - 15}deg`
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}
    </div>

    {/* Sparkle effect */}
    <div className="absolute inset-0">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-200 rounded-full"
          style={{
            left: `${10 + i * 20}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>

    {/* Button content */}
    <div className="relative flex items-center justify-center gap-4">
      {/* Animated book icon */}
      <motion.div
        className="relative"
        animate={{
          rotateY: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg 
          className="w-7 h-7 transform group-hover:scale-110 transition-transform"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </motion.div>
      
      {/* Text with typing effect on hover */}
      <div className="relative overflow-hidden">
        <motion.span
          className="text-xl tracking-wide"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          Book Consultation
        </motion.span>
        
        <motion.span
          className="absolute inset-0 text-xl tracking-wide text-blue-200"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          Schedule Now
        </motion.span>
      </div>

      {/* Arrow icon */}
      <motion.div
        className="transform group-hover:translate-x-2 transition-transform duration-300"
        animate={{
          x: [0, 3, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.div>
    </div>

    {/* Animated border */}
    <motion.div
      className="absolute -inset-0.5 rounded-2xl border-2 border-blue-400/30"
      animate={{
        borderColor: [
          'rgba(96, 165, 250, 0.3)',
          'rgba(59, 130, 246, 0.5)',
          'rgba(96, 165, 250, 0.3)',
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </motion.button>
</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default UniversityPartnerships;