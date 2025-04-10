// Import dependencies
import React, { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

// Define the FAQ component
const FAQ = () => {
  // State to track which FAQ item is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data array containing questions and answers
  const faqData = [
    {
      question: 'What is Dexter AI, and how does it work?',
      answer:
        'Dexter AI is an AI-powered platform that simplifies SEO and content creation, helping businesses boost rankings, drive traffic, and create optimized content easily.',
    },
    {
      question: 'How can Dexter AI improve my website SEO?',
      answer:
        'Dexter AI improves SEO by identifying the best keywords, generating optimized content, fixing technical issues, and providing insights to outperform competitors.',
    },
    {
      question: 'Is Dexter AI easy to use for beginners?',
      answer:
        'Yes, Dexter AI is beginner-friendly with a simple interface and guided steps, making it easy for anyone to use.',
    },
    {
      question: 'What features does Dexter AI offer?',
      answer:
        'Dexter AI includes keyword research, content creation, site audits, performance tracking, and integration with popular platforms like WordPress.',
    },
    {
      question: 'Can Dexter AI help with content creation?',
      answer:
        'Yes, Dexter AI creates personalized, SEO-optimized content like blog posts, product descriptions, and landing pages quickly and efficiently.',
    },
    {
      question: 'How much does Dexter AI cost?',
      answer:
        'Dexter AI costs $29 per month, offering powerful tools and features suitable for businesses of all sizes.',
    },
    {
      question: 'Does Dexter AI integrate with WordPress or other platforms?',
      answer:
        'Yes, Dexter AI integrates seamlessly with WordPress, Google Analytics, and other tools for easier content management and tracking.',
    },{
      question: 'How quickly can I see results with Dexter AI?',
      answer:
        'SEO results vary, but with Dexter AI, most users start seeing improvements within 4–6 months.',
    },{
      question: 'Is Dexter AI suitable for small businesses or individuals?',
      answer:
        'Yes, Dexter AI is perfect for small businesses, individuals, and enterprises, scaling to meet your needs as you grow.',
    },{
      question: 'Are there real-life success stories for Dexter AI?',
      answer:
        'Yes, many businesses have improved traffic and sales with Dexter AI. Check our website for case studies and testimonials.',
    },
    {
      question: ' Does Dexter AI provide refunds?',
      answer:
        'Yes, Dexter AI offers refunds if you cancel your subscription within 5 business days of use.',
    },
  ];

  // Return the JSX for the component
  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 lg:pt-8 pb-8 text-center">
        {/* Tagline */}
        <div className="bg-layer inline-flex px-2 py-1 rounded-lg mb-4">
          <p className="text-sm font-normal text-primary rounded-4xl py-1 px-3">
            Frequently Asked Questions
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-[2.5rem] md:text-[3rem] font-semibold text-gray-900 mb-4">
          Got Questions? <span className="text-primary">We’ve Got Answers</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-lg mb-6">
          Optimize your SEO strategy with Dexter’s advanced AI-driven SEO tools. Our automated content creation and performance tracking elevate your site's authority and boost traffic.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl xl:max-w-6xl mx-auto pb-16 px-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-gray-300 py-2 transition-all duration-300"
          >
            <div className='border rounded-lg py-4 px-4 shadow-md '>
            {/* FAQ Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-start md:items-center w-full text-left focus:outline-none"
            >
              <span className="font-normal text-[#475467] text-md md:text-lg">
                {faq.question}
              </span>
              {/* Chevron Icon */}
              <button
                className={`transition-transform text-[#667085] duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              >
                <IoChevronDownOutline size={20} />
              </button>
            </button>

            {/* FAQ Answer */}
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                activeIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the FAQ component
export default FAQ;