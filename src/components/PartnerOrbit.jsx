import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Logos
import KennedyUniLogo from '../assets/kennedy-university-logo.jpg';
import AMULogo from '../assets/amu-logo.jpg';
import KennedyBaptistLogo from '../assets/baptlist.png';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';
import EuroAsianLogo from '../assets/euro-asian-university-logo.png';

const partners = [
  { id: 1, name: 'Kennedy University', logo: KennedyUniLogo, path: '/kennedy-university' },
  { id: 2, name: 'American Management University', logo: AMULogo, path: '/american-management-university' },
  { id: 3, name: 'Kennedy Baptist University', logo: KennedyBaptistLogo, path: '/kennedy-baptist-university' },
  { id: 4, name: 'Central Global University', logo: CentralGlobalLogo, path: '/central-global-university' },
  { id: 5, name: 'Euro-Asian University', logo: EuroAsianLogo, path: '/euro-asian-university' },
];

export default function UniversityPartnershipsMinimal() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple header */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-slate-900 mb-2">
            University Partners
          </h2>
          <p className="text-sm text-slate-400">
            Prestigious institutions we collaborate with
          </p>
        </div>

        {/* Simple logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner) => (
            <motion.button
              key={partner.id}
              onClick={() => navigate(partner.path)}
              whileHover={{ y: -2 }}
              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain mx-auto mb-2"
              />
              <p className="text-xs text-slate-600 text-center truncate">
                {partner.name}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}