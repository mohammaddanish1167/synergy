import { useEffect } from 'react';

function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Refund Policy</h1>
      <section className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>
          We strive to ensure you have a great learning experience. This policy outlines when and how refunds may be issued for our programs and services.
        </p>

        <h2>Eligibility for Refunds</h2>
        <ul>
          <li>Refund requests must be initiated within the specified refund window for the program.</li>
          <li>Refunds are not available for services already rendered (e.g., completed sessions, delivered materials).</li>
          <li>Scholarships, discounts, and promotional offers may affect refund amounts.</li>
        </ul>

        <h2>Non-Refundable Items</h2>
        <ul>
          <li>Administrative or processing fees, where applicable.</li>
          <li>Third-party charges (e.g., payment gateway, bank fees).</li>
          <li>Consumable resources, downloadable content, or certification fees already issued.</li>
        </ul>

        <h2>How to Request a Refund</h2>
        <p>
          To request a refund, please email support@qualifylearn.com with your full name, registered email, program name, purchase date, and reason for the request. We may request additional information to verify your identity and eligibility.
        </p>

        <h2>Processing Timelines</h2>
        <p>
          Approved refunds are typically processed within 7–14 business days. Timelines may vary based on your payment method and bank policies.
        </p>

        <h2>Exceptions</h2>
        <p>
          We reserve the right to refuse a refund if misuse, abuse of policy, or violation of the Terms & Conditions is identified.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this policy, contact us at support@qualifylearn.com.
        </p>
      </section>
    </main>
  );
}

export default RefundPolicy;
