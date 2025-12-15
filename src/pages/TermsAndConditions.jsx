import { useEffect } from 'react';

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
      <section className="prose prose-slate max-w-none">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using this website and our services, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, please discontinue use of our website and services.
        </p>

        <h2>Use of Services</h2>
        <ul>
          <li>You must provide accurate and complete information when creating accounts or enrolling in programs.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You agree not to misuse the platform, including attempting unauthorized access or interfering with operations.</li>
        </ul>

        <h2>Programs and Content</h2>
        <ul>
          <li>Program details, schedules, and fees are subject to change.</li>
          <li>All learning materials are protected by intellectual property rights and are provided for personal, non-commercial use.</li>
          <li>Resale, redistribution, or public display of content without permission is prohibited.</li>
        </ul>

        <h2>Payments</h2>
        <p>
          By making a payment, you authorize us and our payment processors to charge your selected payment method. Any applicable taxes, fees, or charges will be added to your invoice.
        </p>

        <h2>Cancellation and Refunds</h2>
        <p>
          Cancellations and refunds are governed by our Refund Policy. Please review it carefully before enrolling.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may integrate third-party tools or services. Your use of such services may be subject to their terms and policies.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Qualify Learn shall not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
        </p>

        <h2>Termination</h2>
        <p>
          We may suspend or terminate access to the platform for violations of these Terms or for suspected fraudulent or unlawful activity.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the website after updates constitutes acceptance of the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these Terms & Conditions, please contact support@qualifylearn.com.
        </p>
      </section>
    </main>
  );
}

export default TermsAndConditions;
