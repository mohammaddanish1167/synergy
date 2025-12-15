import { useEffect } from 'react';

function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Refund Policy
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
        <section className="bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We strive to ensure you have a great learning experience. This policy outlines when 
            and how refunds may be issued for our programs and services.
          </p>
        </section>

        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility for Refunds</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Refund requests must be initiated within the specified refund window for the program.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Refunds are not available for services already rendered (e.g., completed sessions, delivered materials).</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Scholarships, discounts, and promotional offers may affect refund amounts.</span>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Non-Refundable Items</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Administrative or processing fees, where applicable.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Third-party charges (e.g., payment gateway, bank fees).</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Consumable resources, downloadable content, or certification fees already issued.</span>
            </li>
          </ul>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request a Refund</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To request a refund, please email support@qualifylearn.com with your full name, 
            registered email, program name, purchase date, and reason for the request. We may 
            request additional information to verify your identity and eligibility.
          </p>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Timelines</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Approved refunds are typically processed within 7–14 business days. Timelines may 
            vary based on your payment method and bank policies.
          </p>
        </section>

        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exceptions</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We reserve the right to refuse a refund if misuse, abuse of policy, or violation 
            of the Terms & Conditions is identified.
          </p>
        </section>

        <section className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-700 text-lg">
            For questions about this policy, contact us at{' '}
            <span className="font-semibold text-blue-700">support@qualifylearn.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}

export default RefundPolicy;