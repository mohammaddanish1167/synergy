import { useEffect } from 'react';

function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Disclaimer
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Important information about the use of our website and services
        </p>
      </div>

      <div className="space-y-12">
        {/* General Information */}
        <section className="bg-yellow-50 rounded-2xl p-8 border-l-8 border-yellow-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            The content on this website is provided for general informational purposes only and 
            does not constitute professional, legal, financial, or educational advice. While we 
            strive for accuracy, we make no representations or warranties of any kind, express 
            or implied, about the completeness, reliability, suitability, or availability of the 
            information, products, services, or related graphics contained on the website.
          </p>
        </section>

        {/* No Guarantees */}
        <section className="bg-red-50 rounded-2xl p-8 border-l-8 border-red-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guarantees</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Outcomes such as admissions, grades, placements, or certifications depend on numerous 
            factors beyond our control. Any examples or case studies are illustrative and do not 
            guarantee similar results for individual users.
          </p>
        </section>

        {/* External Links */}
        <section className="bg-blue-50 rounded-2xl p-8 border-l-8 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            This website may contain links to third-party sites. We are not responsible for the 
            content, accuracy, or privacy practices of any third-party websites. Users should 
            review the terms and privacy policies of any external sites they visit.
          </p>
        </section>

        {/* Liability */}
        <section className="bg-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To the fullest extent permitted by law, Qualify Learn shall not be liable for any 
            loss or damage including, without limitation, indirect or consequential loss or 
            damage arising out of, or in connection with, the use of this website or our services.
          </p>
        </section>

        {/* Contact */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-lg mb-2">
            If you have questions about this disclaimer, please contact us at
          </p>
          <p className="text-xl font-semibold text-blue-300">
            support@qualifylearn.com
          </p>
        </section>
      </div>
    </main>
  );
}

export default Disclaimer;