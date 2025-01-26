export default function TermsAndPrivacyPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Container */}
      <div className="max-w-4xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        {/* Terms and Conditions Section */}
        <section id="terms">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Terms and Conditions
          </h1>
          <div className="border-b-2 border-gray-200 mb-6"></div>

          <p className="text-lg text-gray-700 mb-4">
            Welcome to AD Equipment & Technologies! These terms and conditions govern your use of our website and services. By accessing or using this website, you agree to comply with and be bound by these terms. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Use of Our Services</h2>
          <p className="text-lg text-gray-700 mb-4">
            You agree to use our website in accordance with all applicable local, state, and international laws and regulations. Unauthorized use of the website may result in legal action.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. Intellectual Property</h2>
          <p className="text-lg text-gray-700 mb-4">
            All content on this website, including text, images, logos, and graphics, is owned by AD Equipment & Technologies and is protected by copyright law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Limitation of Liability</h2>
          <p className="text-lg text-gray-700 mb-4">
            In no event shall AD Equipment & Technologies be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or services.
          </p>
        </section>

        <div className="my-12 border-b-2 border-gray-200"></div>

        {/* Privacy Policy Section */}
        <section id="privacy">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <div className="border-b-2 border-gray-200 mb-6"></div>

          <p className="text-lg text-gray-700 mb-4">
            At AD Equipment & Technologies, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">1. Information We Collect</h2>
          <p className="text-lg text-gray-700 mb-4">
            We collect personal information such as name, email address, and contact information when you register or make inquiries on our website. We may also collect non-personal data like IP addresses and browsing patterns.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">2. How We Use Your Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            Your information may be used to provide services, improve website functionality, and communicate with you regarding updates, products, and offers. We do not sell or share your personal data with third parties unless required by law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">3. Security of Your Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            We take reasonable precautions to protect your personal information from unauthorized access, alteration, or destruction. However, no method of data transmission over the Internet is completely secure.
          </p>
        </section>
      </div>
    </div>
  );
}
