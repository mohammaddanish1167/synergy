/**
 * Layout Component - Redesigned with Clean SaaS Structure
 */

import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GuidanceModal from './GuidanceModal';
import FloatingActions from './FloatingActions';
import FloatingGuidanceButton from './common/FloatingGuidanceButton';

function Layout() {
  const [openGuidance, setOpenGuidance] = useState(false);
  const [defaultCourse, setDefaultCourse] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handler = (e) => {
      setDefaultCourse(e?.detail?.defaultCourse || '');
      setOpenGuidance(true);
    };
    window.addEventListener('open-guidance-modal', handler);
    return () => window.removeEventListener('open-guidance-modal', handler);
  }, []);

  // Auto-open guidance modal after 4.5 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenGuidance(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); // Changed to instant for better UX
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-4 rounded-lg border border-slate-200 z-50"
      >
        Skip to main content
      </a>
      
      {/* Navigation */}
      <Navbar />

      {/* Modal */}
      <GuidanceModal
        open={openGuidance}
        onClose={() => setOpenGuidance(false)}
        defaultCourse={defaultCourse}
      />

      {/* Main content */}
      <main id="main-content" className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Floating actions */}
      <FloatingActions />
      <FloatingGuidanceButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
