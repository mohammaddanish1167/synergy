import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

function FooterCentered() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Centered brand */}
        <div className="text-center mb-12">
          <img src={logoImage} alt="Synergy Scholars Academia" className="h-16 w-auto mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Synergy Scholars Academia</h3>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Empowering ambitious professionals to achieve extraordinary career outcomes through world-class programs and personalized guidance.
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-3 mb-12">
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

        {/* Links in rows */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
          <Link to="/" className="text-sm text-slate-500 hover:text-slate-900">Home</Link>
          <Link to="/about" className="text-sm text-slate-500 hover:text-slate-900">About</Link>
          <Link to="/contact" className="text-sm text-slate-500 hover:text-slate-900">Contact</Link>
          <Link to="/honorary-doctorate" className="text-sm text-slate-500 hover:text-slate-900">Honorary Doctorate</Link>
          <Link to="/phd" className="text-sm text-slate-500 hover:text-slate-900">PhD</Link>
          <Link to="/mba" className="text-sm text-slate-500 hover:text-slate-900">MBA</Link>
          <Link to="/dba" className="text-sm text-slate-500 hover:text-slate-900">DBA</Link>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="text-center">
            <MapPin className="w-5 h-5 text-slate-400 mx-auto mb-2" />
            <p className="text-xs text-slate-500">UK Office</p>
            <p className="text-sm text-slate-700">124 City Road, London EC1V 2NX</p>
          </div>
          <div className="text-center">
            <MapPin className="w-5 h-5 text-slate-400 mx-auto mb-2" />
            <p className="text-xs text-slate-500">US Office</p>
            <p className="text-sm text-slate-700">30 N Gould St, Sheridan WY 82801</p>
          </div>
          <div className="text-center">
            <Phone className="w-5 h-5 text-slate-400 mx-auto mb-2" />
            <p className="text-xs text-slate-500">Contact</p>
            <p className="text-sm text-slate-700">+1 (917) 730-4763</p>
            <a
              href="https://wa.me/447451252032"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              WhatsApp: +44 7451 252032
            </a>
            <p className="text-sm text-slate-700">info@synergyscholars.com</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-400 mb-4">
            © {currentYear} Synergy Scholars Academia. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-slate-400 hover:text-slate-600">Privacy</Link>
            <Link to="/terms-and-conditions" className="text-xs text-slate-400 hover:text-slate-600">Terms</Link>
            <Link to="/refund-policy" className="text-xs text-slate-400 hover:text-slate-600">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterCentered;
