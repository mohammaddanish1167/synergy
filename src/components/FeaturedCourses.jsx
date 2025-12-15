import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Clock, 
  Users,
  Shield,
  Award,
  GraduationCap,
  Briefcase,
  Book,
  Globe,
  CheckCircle,
  Target
} from 'lucide-react';

function FeaturedPrograms() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const featuredPrograms = [
    {
      id: 'honorary-doctorate',
      title: 'Honorary Doctorate',
      subtitle: 'Lifetime Achievement Recognition',
      description: 'Global recognition for exceptional professional achievements and contributions to your industry.',
      icon: Award,
      color: '#1E40AF',
      gradient: 'from-blue-700 to-blue-900',
      duration: 'Prestigious Honor',
      students: '500+ Awarded',
      path: '/honorary-doctorate',
      highlights: [
        'International Recognition',
        'Career Distinction',
        'Leadership Acknowledgment'
      ],
      eligibility: 'Senior Executives',
      level: 'Doctoral Level'
    },
    {
      id: 'honorary-professorship',
      title: 'Honorary Professorship',
      subtitle: 'Academic Distinction',
      description: 'Distinguished academic recognition for contributions to education and research excellence.',
      icon: GraduationCap,
      color: '#7C3AED',
      gradient: 'from-purple-700 to-purple-900',
      duration: 'Academic Honor',
      students: '300+ Appointed',
      path: '/honorary-professorship',
      highlights: [
        'Teaching Excellence',
        'Research Recognition',
        'Academic Leadership'
      ],
      eligibility: 'Educators & Researchers',
      level: 'Professorial Level'
    },
    {
      id: 'phd',
      title: 'PhD Programs',
      subtitle: 'Research Doctorate',
      description: 'Rigorous research programs developing expertise and contributing original knowledge to your field.',
      icon: Book,
      color: '#059669',
      gradient: 'from-emerald-700 to-emerald-900',
      duration: '3-6 Years',
      students: '2,000+ Graduates',
      path: '/phd',
      highlights: [
        'Original Research',
        'Academic Expertise',
        'Global Recognition'
      ],
      eligibility: 'Master\'s Degree',
      level: 'Doctoral Research'
    },
    {
      id: 'mba',
      title: 'Master of Business Administration',
      subtitle: 'Executive Leadership',
      description: 'Comprehensive business leadership program designed for senior management and executive roles.',
      icon: Briefcase,
      color: '#D97706',
      gradient: 'from-amber-700 to-amber-900',
      duration: '1-2 Years',
      students: '5,000+ Graduates',
      path: '/mba',
      highlights: [
        'Strategic Leadership',
        'Business Acumen',
        'Global Network'
      ],
      eligibility: 'Bachelor\'s Degree',
      level: 'Master\'s Level'
    },
    {
      id: 'dba',
      title: 'Doctor of Business Administration',
      subtitle: 'Executive Doctorate',
      description: 'Advanced business research program combining academic rigor with practical business application.',
      icon: Globe,
      color: '#DC2626',
      gradient: 'from-rose-700 to-rose-900',
      duration: '3-4 Years',
      students: '800+ Graduates',
      path: '/dba',
      highlights: [
        'Executive Research',
        'Business Innovation',
        'Leadership Strategy'
      ],
      eligibility: 'MBA or Equivalent',
      level: 'Doctoral Executive'
    }
  ];

  const stats = [
    { 
      value: '98%', 
      label: 'Program Completion', 
      icon: <Star className="w-5 h-5" />, 
      color: 'from-amber-500 to-orange-500' 
    },
    { 
      value: '8,600+', 
      label: 'Global Alumni', 
      icon: <Users className="w-5 h-5" />, 
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      value: '25+', 
      label: 'Years Experience', 
      icon: <Clock className="w-5 h-5" />, 
      color: 'from-emerald-500 to-teal-500' 
    },
    { 
      value: '100%', 
      label: 'Accredited', 
      icon: <Shield className="w-5 h-5" />, 
      color: 'from-purple-500 to-pink-500' 
    },
  ];

  const handleProgramClick = (path) => {
    navigate(path);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-600 uppercase">
                Academic Programs
              </span>
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>

          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Prestigious <span className="font-semibold">Academic</span> Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Internationally recognized programs for professionals seeking academic distinction.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Grid - All 5 shown equally */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Featured Programs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <div 
                  key={program.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleProgramClick(program.path)}
                >
                  {/* Program Header */}
                  <div className="relative h-32">
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.gradient}`}>
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <h4 className="text-lg font-bold text-white">{program.title}</h4>
                        <p className="text-sm text-white/90">{program.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="p-4">
                    {/* Level Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {program.level}
                      </span>
                      <span className="text-xs text-gray-500">
                        {program.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <div className="space-y-2">
                        {program.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-blue-600" />
                            <span className="text-xs text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Users className="w-3 h-3" />
                        <span className="text-xs">{program.students}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 text-sm">
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl overflow-hidden">
  {/* Animated background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }} />
  </div>
  
  {/* Floating particles */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          opacity: 0.3,
        }}
      />
    ))}
  </div>

  {/* Shimmer effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-shimmer" />

  <div className="relative p-8">
    <h3 className="text-2xl font-semibold text-white mb-4">
      Begin Your <span className="text-blue-300">Academic Journey</span>
    </h3>
    <p className="text-blue-200 mb-6">
      Join our global community of professionals advancing their careers.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
   
      <button
        onClick={() => navigate('/contact')}
        className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-blue-400 hover:border-blue-300 hover:bg-blue-800/30 transition-all duration-300"
      >
        Schedule Consultation
      </button>
    </div>
  </div>

  {/* Corner accents */}
  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400 rounded-tl-lg opacity-50" />
  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400 rounded-tr-lg opacity-50" />
  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-400 rounded-bl-lg opacity-50" />
  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-400 rounded-br-lg opacity-50" />

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-20px) translateX(10px); }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-shimmer {
      animation: shimmer 3s infinite;
    }
  `}</style>
</div>
      </div>
    </section>
  );
}

export default FeaturedPrograms;