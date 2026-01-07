/**
 * Main App Component
 * Sets up React Router with all routes
 * Wraps pages with Layout component for consistent structure
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import KennedyUniversity from './pages/KennedyUniversity';
import AmericanManagementUniversity from './pages/AmericanManagementUniversity';
import KennedyBaptistUniversity from './pages/KennedyBaptistUniversity';
import CentralGlobalUniversity from './pages/CentralGlobalUniversity';
import EuroAsianUniversity from './pages/EuroAsianUniversity';


import About from './pages/About';
import Contact from './pages/Contact';
// Removed StudyAbroad and PhDAdmission per request
// import StudyAbroad from './pages/StudyAbroad';
// import PhDAdmission from './pages/PhDAdmission';
import PhD from './pages/PhD';
import MBA from './pages/MBA';
import DBA from './pages/DBA';

import HonoraryDoctorate from './pages/HonoraryDoctorate';
import HonoraryProfessorship from './pages/HonoraryProfessorship';
// import CareerCounselling from './pages/CareerCounselling';
import NotFound from './pages/NotFound';
import Enroll from './pages/Enroll';
import Payment from './pages/Payment';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Disclaimer from './pages/Disclaimer';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper applies Navbar and Footer to all pages */}
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="enroll" element={<Enroll />} />
          <Route path="pay" element={<Payment />} />
          <Route path="about" element={<About />} />
          <Route path="kennedy-university" element={<KennedyUniversity />} />
          <Route path="american-management-university" element={<AmericanManagementUniversity />} />
          <Route path="kennedy-baptist-university" element={<KennedyBaptistUniversity />} />
          <Route path="central-global-university" element={<CentralGlobalUniversity />} />
          <Route path="euro-asian-university" element={<EuroAsianUniversity />} />
          <Route path="contact" element={<Contact />} />
          {/** Removed study-abroad and phd-admission routes per request */}
          <Route path="phd" element={<PhD />} />
          <Route path="mba" element={<MBA />} />
          <Route path="dba" element={<DBA />} />
          
          <Route path="honorary-doctorate" element={<HonoraryDoctorate />} />
          <Route path="honorary-professorship" element={<HonoraryProfessorship />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          {/** Removed career-counselling route per request */}
          
          {/* Admin enquiries page removed per request */}
          
          {/* 404 - Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
