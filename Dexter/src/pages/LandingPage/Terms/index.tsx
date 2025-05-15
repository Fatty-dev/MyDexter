const terms = [
  {
    title: "Acceptance of Terms",
    description:
      "By accessing or using My Dexter AI, you agree to be bound by these Terms and Conditions. If you do not agree, you must not use our services.",
  },
  {
    title: "Services Provided",
    description:
      "My Dexter AI provides automated SEO content generation, data analysis, and other AI-driven tools. Our services utilize advanced AI algorithms to analyze content, provide recommendations, and generate SEO-focused outputs. While we strive to maintain accuracy and relevance, all services are provided 'as is' without any warranties or guarantees of accuracy, completeness, or reliability. Users acknowledge that AI-generated content is for informational purposes only and should not be considered as professional or financial advice.",
  },
  {
    title: "User Responsibilities and Restrictions",
    description:
      "You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account. You agree not to use My Dexter AI for any unlawful purposes, including but not limited to:",
    list: [
      "Data scraping or mining of other users’ content",
      "Spamming or unauthorized mass communications",
      "Distribution of malicious software or code",
      "Unauthorized access to other users’ data or content",
      "Use of AI-generated content to mislead, defraud, or impersonate others",
    ],
  },
  {
    title: "Intellectual Property and Content Ownership",
    description:
      "All content, trademarks, and data provided by My Dexter AI, including AI-generated content, remain the property of My Dexter AI or its licensors. Unauthorized use, reproduction, or distribution of any content is prohibited. Users are granted a limited, non-exclusive, and non-transferable license to use generated content for personal or business use in compliance with these Terms. Users do not acquire any ownership rights in the AI-generated content and must attribute My Dexter AI as the content creator where applicable.",
  },
  {
    title: "Termination of Services and Account Suspension",
    description:
      "We reserve the right to suspend or terminate your access to our services at our sole discretion without prior notice, particularly in cases of misuse, violation of terms, or any behavior deemed harmful to the integrity of our platform. Termination of service does not exempt users from financial obligations, including outstanding fees or charges. Refunds are subject to the terms outlined in the refund policy.",
  },
  {
    title: "Data Exchange and Paywall Features",
    description:
      "My Dexter AI may implement paywall features to provide access to premium content, services, or data. Users are prohibited from circumventing or attempting to bypass paywalls or subscription restrictions. Unauthorized data exchange, distribution of AI-generated content outside of the platform, or resale of content without explicit permission is strictly prohibited.",
  },
  {
    title: "Limitation of Liability and Disclaimer of Warranties",
    description:
      "My Dexter AI is not liable for any damages arising from the use or inability to use our services, including but not limited to data loss, unauthorized access, or AI-generated content inaccuracies. Users acknowledge that AI-generated content may contain errors and should not be solely relied upon for decision-making. We are not liable for any losses incurred due to business decisions, investments, or reliance on generated content.",
  },
  {
    title: "Changes to Terms and Notifications",
    description:
      "We may update these Terms and Conditions periodically to reflect changes in our services, policies, or legal requirements. Continued use of the services constitutes acceptance of the modified terms. Users will be notified of any significant changes via email or platform notifications.",
  },
];

const Terms = () => {
  return (
    <div className="container mx-auto pb-12">
      <div className="space-y-8">
        <div>
          <div className="bg-layer w-fit mx-auto px-2 py-1 rounded-lg mb-4 text-center">
            <p className="text-sm font-normal text-primary rounded-4xl py-1 px-3">
              Terms
            </p>
          </div>

          <h1 className="text-[2.5rem] md:text-[3rem] font-semibold text-gray-900 mb-4 text-center">
            Terms of <span className="text-primary">Service</span>
          </h1>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {terms.map((term, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">
                {term.title}
              </h2>
              <p className="text-gray-600 leading-loose">{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
