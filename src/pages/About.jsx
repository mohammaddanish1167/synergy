import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Testimonials from '../components/Testimonials';
import { 
  Target, 
  Globe, 
  Users, 
  Award, 
  TrendingUp, 
  Star, 
  ArrowRight,
  GraduationCap,
  Brain,
  Rocket,
  Shield,
  CheckCircle,
  Calendar,
  Briefcase,
  LineChart,
  BookMarked
} from 'lucide-react';

function About() {
  const containerRef = useRef(null);
  const [activeValue, setActiveValue] = useState(0);

  // Core values data (content unchanged)
  const coreValues = [
    {
      id: 0,
      title: 'Uncompromising Quality',
      description: 'We maintain the highest academic standards, ensuring every program meets rigorous international benchmarks and delivers exceptional value to our scholars.',
      icon: Award,
      stats: ['100%', 'Accreditation Rate']
    },
    {
      id: 1,
      title: 'Personalized Mentorship',
      description: 'Each scholar receives dedicated guidance from industry experts, creating tailored pathways that align with individual career aspirations and professional goals.',
      icon: Users,
      stats: ['1:1', 'Mentor Ratio']
    },
    {
      id: 2,
      title: 'Global Recognition',
      description: 'Our credentials are recognized by leading institutions and employers worldwide, opening doors to prestigious opportunities across international markets.',
      icon: Globe,
      stats: ['75+', 'Countries']
    },
    {
      id: 3,
      title: 'Career Acceleration',
      description: 'We focus on delivering tangible career outcomes, with programs designed to enhance professional standing, expand networks, and unlock executive opportunities.',
      icon: TrendingUp,
      stats: ['92%', 'Advancement Rate']
    }
  ];

  // Leadership team (content unchanged)
  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former Google Engineering Lead with 15+ years in edtech innovation',
      expertise: 'EdTech Strategy & Product Development',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Learning Officer',
      bio: 'PhD in Computer Science, Stanford. Former Head of Curriculum at Coursera',
      expertise: 'Curriculum Design & Learning Science',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Careers',
      bio: 'Ex-Amazon Technical Recruiter, placed 500+ engineers at top tech companies',
      expertise: 'Career Development & Industry Relations',
    }
  ];

  // Impact stats (content unchanged)
  const impactStats = [
    { value: '15,000+', label: 'Elite Professionals', icon: GraduationCap },
    { value: '75+', label: 'Global Presence', icon: Globe },
    { value: '92%', label: 'Career Transformation', icon: Rocket },
    { value: '4.8/5', label: 'Excellence Rating', icon: Star }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">


      {/* Hero Section - Completely redesigned layout */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-indigo-50 rounded-full mb-6">
                <span className="text-xs font-medium text-indigo-700">Since 2015</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Where ambition meets
                <span className="text-indigo-600"> achievement</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Empowering visionary leaders and ambitious professionals to unlock their full potential through distinguished academic programs, personalized mentorship, and strategic career advancement.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                  Explore Programs
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Right column - Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Card based layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our foundation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pioneering academic innovation through excellence and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Story card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">International Prestige</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delivering unparalleled academic excellence to distinguished professionals across 75+ nations, each journey uniquely crafted for transformative success.
              </p>
            </div>

            {/* Story card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Results-Oriented Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our strategic approach ensures every interaction, program, and mentorship opportunity is designed to deliver measurable career advancement and lasting impact.
              </p>
            </div>

            {/* Story card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <BookMarked className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Synergy Scholars Academia emerged from a profound commitment to academic distinction, connecting ambitious individuals with prestigious pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Grid layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our core values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The foundational pillars that shape our commitment to academic distinction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 border-2 transition-all cursor-pointer ${
                    activeValue === idx ? 'border-indigo-600 shadow-lg' : 'border-gray-100 hover:border-gray-200'
                  }`}
                  onClick={() => setActiveValue(idx)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeValue === idx ? 'bg-indigo-600' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        activeValue === idx ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{value.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">{value.stats[0]}</span>
                        <span className="text-sm text-gray-500">{value.stats[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership - Card grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-indigo-600">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-indigo-600 text-sm font-medium mb-3">{leader.role}</p>
                <p className="text-gray-600 text-sm mb-3">{leader.bio}</p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <Briefcase className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">{leader.expertise}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform your professional future
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Become part of an elite community of leaders, innovators, and visionaries
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Explore Programs
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Simple footer */}
      <footer className="border-t border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-sm text-gray-600">© 2024 Synergy Scholars. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;