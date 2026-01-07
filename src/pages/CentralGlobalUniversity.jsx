
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import CentralGlobalLogo from '../assets/central-global-university-logo.webp';

const CentralGlobalUniversity = () => {
  const navigate = useNavigate();
  
  const university = {
    name: 'Central Global University', 
    logo: CentralGlobalLogo, 
    link: 'https://central-global-university.com/', 
    color: 'from-amber-500 to-orange-500',
    verified: true,
    description: 'Central Global University is a forward-thinking institution focusing on global perspectives and cross-cultural understanding. Our programs are designed to equip students for the international marketplace.',
    features: [
      'International Focus',
      'Cultural Diversity',
      'Research Opportunities',
      'Modern Campus'
    ],
    location: 'International'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Header Section */}
          <div className={`h-48 bg-gradient-to-r ${university.color} relative`}>
            <div className="absolute -bottom-16 left-8 md:left-12 p-2 bg-white rounded-2xl shadow-lg">
              <img 
                src={university.logo} 
                alt={university.name} 
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>

          <div className="pt-20 pb-12 px-8 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {university.name}
                </h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {university.location}
                  </span>
                  {university.verified && (
                    <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-sm font-medium border border-emerald-100">
                      <CheckCircle className="w-3 h-3" />
                      Verified Partner
                    </span>
                  )}
                </div>
              </div>

              <a 
                href={university.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30 font-medium"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">About the University</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {university.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {university.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${university.color} text-white`}>
                          <CheckCircle className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>Interested in applying to {university.name}?</p>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full mt-4 px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    >
                      Contact QualifyLearn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CentralGlobalUniversity;
