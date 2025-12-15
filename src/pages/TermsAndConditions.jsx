import { useEffect } from 'react';

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Last updated: {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <div className="space-y-12">
        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            By accessing or using this website and our services, you agree to be bound by these 
            Terms & Conditions and our Privacy Policy. If you do not agree, please discontinue 
            use of our website and services.
          </p>
        </section>

        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Use of Services</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">You must provide accurate and complete information when creating accounts or enrolling in programs.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">You are responsible for maintaining the confidentiality of your account credentials.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">You agree not to misuse the platform, including attempting unauthorized access or interfering with operations.</span>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Programs and Content</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Program details, schedules, and fees are subject to change.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">All learning materials are protected by intellectual property rights and are provided for personal, non-commercial use.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Resale, redistribution, or public display of content without permission is prohibited.</span>
            </li>
          </ul>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payments</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            By making a payment, you authorize us and our payment processors to charge your 
            selected payment method. Any applicable taxes, fees, or charges will be added to 
            your invoice.
          </p>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation and Refunds</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Cancellations and refunds are governed by our Refund Policy. Please review it 
            carefully before enrolling.
          </p>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We may integrate third-party tools or services. Your use of such services may be 
            subject to their terms and policies.
          </p>
        </section>

        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To the fullest extent permitted by law, Qualify Learn shall not be liable for 
            indirect, incidental, special, consequential, or punitive damages, or any loss 
            of profits or revenues.
          </p>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We may suspend or terminate access to the platform for violations of these Terms 
            or for suspected fraudulent or unlawful activity.
          </p>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We may update these Terms from time to time. Continued use of the website after 
            updates constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-700 text-lg">
            For questions about these Terms & Conditions, please contact{' '}
            <span className="font-semibold text-blue-700">support@qualifylearn.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}

export default TermsAndConditions;