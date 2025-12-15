import { useEffect } from 'react';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dataTypes = [
    {
      title: "Personal Identification Data",
      items: ["First Name, Last Name", "Job Title & Company", "Signature", "Photographs"]
    },
    {
      title: "Identification Data",
      items: ["Social Security or Tax Identification Numbers", "Aadhar Number and PAN"]
    },
    {
      title: "Financial Data",
      items: ["Bank Account Information", "Salary Information", "Payment Gateway Account Details", "E-wallet Account Details"]
    },
    {
      title: "Personal Characteristics",
      items: ["Age", "Gender", "Date of Birth", "Marital Status", "Nationality"]
    },
    {
      title: "Contact Data",
      items: ["Postal Address", "Email Address", "Phone Number"]
    },
    {
      title: "Education and Recruitment Data",
      items: ["Educational Qualifications", "Working Goals", "Post-Qualification Experience"]
    },
    {
      title: "Electronic Identification Data",
      items: ["Login Credentials (If you are a registered user)", "Visitor's IP Data", "Date and Time of Website Visit", "Pages Visited and Navigation on the Website", "Browser Being Used", "Country of Accessing the Website", "Language of the Browser Being Used", "Words Searched For", "Pixel Tags"]
    },
    {
      title: "Inquiries",
      items: ["Personal Data stated in the form", "Subject of Inquiry", "Personal Details (Name on the Card, Billing Address)", "Payment Details (Card Numbers, Card Type)", "Recordings of Calls with Students", "Information About Your Interactions"]
    },
    {
      title: "User-Generated Data",
      items: ["Projects and Assignments Submitted", "Peer Feedback and Grading", "Program Performance Data", "Responses to Quizzes and Exams", "Webcam Recordings", "Posts Made to Public Forums"]
    },
    {
      title: "Marketing Data",
      items: ["Your Preferences in Receiving Marketing Information", "Your Communication Preferences"]
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Privacy Policy
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
        {/* Introduction */}
        <section className="bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Qualify Learn (together with its subsidiaries and international affiliates, hereinafter 
            "Qualify Learn," "us," "we," "our," or "the Company") is committed to the security and 
            management of personal data, to function effectively and successfully for the benefit 
            of our stakeholders, customers, and the community.
          </p>
        </section>

        {/* Aim */}
        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aim</h2>
          <p className="text-gray-700 leading-relaxed">
            This policy aims to protect the personal data of various stakeholders connected to our 
            organization. It is intended to provide individuals with notice of the basic principles 
            by which the company processes the personal data ("Personal Data").
          </p>
        </section>

        {/* Purpose and Scope */}
        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Purpose and Scope</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              The purpose of this policy is to describe how Qualify Learn collects, uses, and shares 
              information about you through our online interfaces owned and controlled by us.
            </p>
            <p className="text-gray-700">
              This policy applies to all systems, people, and processes that constitute the 
              organization's information systems.
            </p>
            <p className="text-gray-700">
              Qualify Learn offers curated and specially designed higher education and 
              industry-relevant certification programs online.
            </p>
          </div>
        </section>

        {/* Types of Personal Data Collected */}
        <section className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Personal Data Collected</h2>
            <p className="text-gray-700 mb-6">
              The Personal Data we collect about you depends on the context of your interactions 
              with us, the products, services, and features you use, your location, and applicable laws.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Special Categories */}
        <section className="bg-red-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Categories of Personal Data</h2>
          <p className="text-gray-700 mb-4">
            Special categories of Personal Data include details about your race or ethnicity, 
            religious or philosophical beliefs, sex life, sexual orientation, political opinions, 
            trade union memberships, health information, and genetic and biometric data.
          </p>
          <p className="text-gray-700 font-semibold">
            We do not collect or process any special or sensitive Personal Data.
          </p>
        </section>

        {/* Sources of Data */}
        <section className="border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources of Data Collection</h2>
          <p className="text-gray-700 mb-4">Data is collected when you:</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Register for various seminars, webinars, or other outreach initiatives",
              "View online ads from various platforms",
              "Register on any of our job portals",
              "Request a quote for our products and services",
              "Place feedback or interact with our customer services",
              "View our services or visit our website pages",
              "Browse our website",
              "Appear for assignments, exams, or other assessments",
              "Avail of scholarships, refunds, and referrals"
            ].map((item, index) => (
              <li key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Data Protection Principles */}
        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection Principles</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Be processed fairly, lawfully, and transparently",
              "Be collected for specific, explicit, and legitimate purposes",
              "Be adequate, relevant, and limited to what is necessary",
              "Be kept accurate and up to date",
              "Not be retained longer than necessary",
              "Be processed with appropriate security measures",
              "Comply with applicable laws and procedures"
            ].map((principle, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{principle}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Purpose of Collection */}
        <section className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Purpose of Collecting Personal Data</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "To fulfil or meet the reason you provided the information",
              "To manage and process your information, including tracking progress",
              "To send you updates regarding Programs and events",
              "To provide Chat Room services",
              "To enhance the quality of our content and product offerings",
              "To ensure compliance with security policies",
              "To provide information to relevant external authorities",
              "To conduct satisfaction surveys",
              "To establish and maintain accounts with third-party services",
              "To handle legal or regulatory disputes or investigations"
            ].map((purpose, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{purpose}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Policies */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-blue-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Data Subject Rights</h2>
            <p className="text-gray-700">
              Depending on applicable law, you may have rights to access, correct, delete, 
              or transfer your Personal Data. To exercise rights, contact dpo@qualifylearn.com.
            </p>
          </section>

          <section className="bg-green-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Children's Data Policy</h2>
            <p className="text-gray-700">
              Our sites are not intended for children. We will take appropriate steps to delete 
              any Personal Data of children collected without verified parental consent.
            </p>
          </section>

          <section className="bg-purple-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700">
              Qualify Learn implements appropriate technical and organizational measures to 
              ensure a high level of security for Personal Data.
            </p>
          </section>

          <section className="bg-yellow-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Breach Notification</h2>
            <p className="text-gray-700">
              In the event of a data breach likely to pose a risk to individuals' rights and 
              freedoms, Qualify Learn will report the breach to relevant authorities within 72 hours.
            </p>
          </section>
        </div>

        {/* Contact Section */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Data Protection Officer</h2>
          <p className="text-lg mb-2">
            In compliance with applicable laws and regulations, Qualify Learn has appointed a Data Protection Officer.
          </p>
          <p className="text-xl font-semibold text-blue-300">
            Email Address: dpo@qualifylearn.com
          </p>
        </section>

        {/* Updates */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
          <p className="text-gray-700">
            We may update our Privacy Policy periodically and will inform stakeholders by posting 
            the updated policy on this page and/or via email.
          </p>
        </section>
      </div>
    </main>
  );
}

export default PrivacyPolicy;