import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

function FooterCentered() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top section with logo and social - Left aligned */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          {/* Brand - Left aligned */}
          <div className="text-left max-w-xl">
            <img src={logoImage} alt="Synergy Scholars Academia" className="h-16 w-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Synergy Scholars Academia</h3>
            <p className="text-sm text-slate-500">
              Empowering ambitious professionals to achieve extraordinary career outcomes through world-class programs and personalized guidance.
            </p>
          </div>

          {/* Social links - Right aligned on desktop */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <a href="https://www.instagram.com/synergy_scholars_academia" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="http://facebook.com/people/Synergy-Scholars-Academia/61587252902623/" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main footer content - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-slate-500 hover:text-slate-900">Home</Link></li>
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-slate-900">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-500 hover:text-slate-900">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/honorary-doctorate" className="text-sm text-slate-500 hover:text-slate-900">Honorary Doctorate</Link></li>
              <li><Link to="/phd" className="text-sm text-slate-500 hover:text-slate-900">PhD Program</Link></li>
              <li><Link to="/mba" className="text-sm text-slate-500 hover:text-slate-900">MBA</Link></li>
              <li><Link to="/dba" className="text-sm text-slate-500 hover:text-slate-900">DBA</Link></li>
            </ul>
          </div>

          {/* UK Office */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">UK Office</h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600">124 City Road,<br />London EC1V 2NX</p>
            </div>
          </div>

          {/* US Office & Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">US Office</h4>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600">30 N Gould St,<br />Sheridan WY 82801</p>
            </div>
            
            <h4 className="text-sm font-semibold text-slate-900 mb-3 mt-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <p className="text-sm text-slate-600">+1 (917) 730-4763</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/447451252032" target="_blank" rel="noreferrer" className="text-sm text-slate-600 hover:text-slate-900">
                  WhatsApp: +44 7451 252032
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@synergyscholars.com" className="text-sm text-slate-600 hover:text-slate-900">
                  info@synergyscholars.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-slate-400 order-2 md:order-1">
              © {currentYear} Synergy Scholars Academia. All rights reserved.
            </p>
            <div className="flex gap-6 order-1 md:order-2">
              <Link to="/privacy-policy" className="text-xs text-slate-400 hover:text-slate-600">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-xs text-slate-400 hover:text-slate-600">Terms of Service</Link>
              <Link to="/refund-policy" className="text-xs text-slate-400 hover:text-slate-600">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterCentered;