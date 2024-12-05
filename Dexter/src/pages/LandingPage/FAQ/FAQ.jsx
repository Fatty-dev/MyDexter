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
      question: 'How does Dexter optimize my website for SEO?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula elit ut est viverra, in ultricies odio tincidunt.',
    },
    {
      question: 'Can I use Dexter to schedule blog posts automatically?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque tellus ac risus tincidunt, sed tincidunt magna gravida.',
    },
    {
      question: 'What kind of insights does Dexter provide for my business?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nulla sed arcu fermentum, ac egestas urna rhoncus.',
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
      <div className="max-w-6xl mx-auto pb-16 px-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-gray-300 py-2 transition-all duration-300"
          >
            <div className='border rounded-lg  py-4 px-4 shadow-md '>
            {/* FAQ Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <span className="font-normal text-[#475467] text-lg">
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