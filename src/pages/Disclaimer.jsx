import { useEffect } from 'react';

function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Disclaimer</h1>
      <section className="prose prose-slate max-w-none">
        <h2>General Information</h2>
        <p>
          The content on this website is provided for general informational purposes only and does not constitute professional, legal, financial, or educational advice. While we strive for accuracy, we make no representations or warranties of any kind, express or implied, about the completeness, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
        </p>

        <h2>No Guarantees</h2>
        <p>
          Outcomes such as admissions, grades, placements, or certifications depend on numerous factors beyond our control. Any examples or case studies are illustrative and do not guarantee similar results.
        </p>

        <h2>External Links</h2>
        <p>
          This website may contain links to third-party sites. We are not responsible for the content, accuracy, or privacy practices of any third-party websites.
        </p>

        <h2>Liability</h2>
        <p>
          To the fullest extent permitted by law, Qualify Learn shall not be liable for any loss or damage including, without limitation, indirect or consequential loss or damage arising out of, or in connection with, the use of this website or our services.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this disclaimer, contact us at support@qualifylearn.com.
        </p>
      </section>
    </main>
  );
}

export default Disclaimer;
