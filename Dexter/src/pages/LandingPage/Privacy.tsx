const privacyList = [
  {
    title: "Data Collection and Consent",
    description:
      "We collect user data, including email addresses, IP addresses, content inputs, and interaction data to provide AI-driven content generation and analytical services. By using My Dexter AI, you consent to the collection and processing of your data as described in this policy. We may request additional consent for specific data processing activities. Data collection may include but is not limited to: personal identifiers, usage data, device information, and user-generated content.",
  },
  {
    title: "Data Usage and AI Model Training",
    description:
      "User data may be used to enhance service performance, deliver targeted content, and improve AI algorithms. Data may be aggregated and anonymized for AI model training and development purposes. We do not sell user data to third parties. Sensitive data will not be used in AI model training without explicit consent. Users retain ownership of the data they provide but grant My Dexter AI a non-exclusive, royalty-free license to use the data for service improvement and analysis.",
  },
  {
    title: "Data Security and Retention",
    description:
      "We implement industry-standard security measures, including encryption, firewalls, and secure data storage, to protect user data from unauthorized access, disclosure, or alteration. Data is retained only as long as necessary to provide services, comply with legal obligations, or resolve disputes. In the event of a data breach, affected users will be notified within 72 hours and provided with a detailed report of the breach.",
  },
  {
    title: "Cookies, Tracking, and Analytics",
    description:
      "Our website uses cookies and tracking technologies to monitor user interactions and improve the overall user experience. These cookies may collect information such as browser type, pages visited, and time spent on the platform. You can manage cookie preferences through browser settings. Opting out of cookies may affect certain functionalities of the platform. We use third-party analytics services to gain insights into user behavior and platform performance.",
  },
  {
    title: "User Rights and Data Access Requests",
    description:
      "Users can request access to their data, request deletion, or update personal information by contacting support@mydexterai.com. We will respond to such requests in accordance with applicable data protection laws. Requests to delete data may be subject to limitations if data is necessary for legal or contractual purposes. We reserve the right to verify the identity of the requester before processing data access requests.",
  },
  {
    title: "Third-Party Services and Data Sharing",
    description:
      "My Dexter AI may contain links to third-party websites or services. We are not responsible for the privacy practices of these sites. Data may be shared with trusted service providers to facilitate operations but only under strict confidentiality agreements. Data may also be disclosed to comply with legal obligations, prevent fraud, or protect the rights and safety of My Dexter AI and its users. Any data sharing with third parties will be documented, and users will be notified when applicable.",
  },
  {
    title: "Policy Updates and User Notifications",
    description:
      "We reserve the right to update this Privacy Policy as needed to reflect changes in legal requirements, AI capabilities, or business practices. Users will be notified of any significant changes via email or platform notifications. If changes materially affect user data rights, we will seek consent before implementing such changes. All updates will be accessible through our platform and will include a revision date for transparency.",
  },
];

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mb-[5rem] font-normal text-[#475467] leading-relaxed">
      <header className="text-center mb-10">
        <p className="text-sm text-primary mb-4">
          Current as of August 25th, 2024
        </p>
        <h1 className="text-3xl sm:text-2xl md:text-5xl  font-medium text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="mb-6 font-normal text-md w-[80%] mx-auto text-[#475467]">
          Your privacy is important to us at My Dexter. We respect your privacy
          regarding any information we may collect from you across our website.
        </p>
        {/* <div className="inline-flex items-center bg-[#F2F4F7] text-gray-800 px-2 py-1 rounded-lg mb-4">
          <p className="text-sm font-semibold bg-white rounded-lg py-1 px-3">
            Human Friendly
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm  ml-2">Legal nonsense</p>
          </div>
        </div> */}
      </header>

      <div className="space-y-6 max-w-3xl mx-auto">
        {privacyList.map((privacy, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">
              {privacy.title}
            </h2>
            <p className="text-gray-600 leading-loose">{privacy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
