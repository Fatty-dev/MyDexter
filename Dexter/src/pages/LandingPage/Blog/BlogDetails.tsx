import React from "react";
import Img1 from "../../../assets/Img1.svg";
import Chair from "../../../assets/chair.svg";
import girl from "../../../assets/girl.svg";
import Img2 from "../../../assets/Img2.svg";
import Img3 from "../../../assets/Img3.svg";
import Img4 from "../../../assets/Img4.svg";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: Img1,
    link: "#",
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug letter spacing. Here's how to get started.",
    image: Img2,
    link: "#",
  },
  {
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image: Img3,
    link: "#",
  },
  {
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: Img4,
    link: "#",
  },
];

const BlogDetails = () => {
  const navigate = useNavigate();

  const handlePrivacy = () => {
    navigate("/privacy");
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-12">
          <p className="text-sm text-primary mb-4">
            Published January 20th, 2024
          </p>
          <h1 className="text-3xl sm:text-2xl md:text-5xl font-medium text-gray-900 mb-4">
            SEO review presentations
          </h1>
          <p className="mb-6 font-normal text-md w-[80%] mx-auto text-[#475467]">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="flex justify-center gap-6 items-center">
            <p className="text-sm font-semibold text-[#6941C6] bg-[#F9F5FF] rounded-full py-2 px-4">
              SEO
            </p>
            <p className="text-sm font-semibold text-[#3538CD] bg-[#EEF4FF] rounded-full py-2 px-4">
              Keywords
            </p>
            <p className="text-sm font-semibold text-[#C11574] bg-[#FDF2FA] rounded-full py-2 px-4">
              Backlinks
            </p>
          </div>
        </header>
      </div>

      {/* Main Image */}
      <div className="w-full  mb-12">
        <img
          src={Img1}
          alt="Office desks and chairs"
          className="w-full rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-md text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
          massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
          Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </p>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-md text-gray-600 mb-6">
            Modern work environments demand presentations that are both
            professional and creative. Well-designed presentations can
            communicate your ideas effectively and leave a lasting impression.
          </p>
          <img
            src={Chair}
            alt="Empty office workspace"
            className="w-full rounded-md mb-6"
          />
          <blockquote className="text-lg font-medium italic text-gray-700 border-l-4 border-gray-300 pl-4 mb-6">
            “A good presentation is not just about what you say but how you say
            it. Structure and visuals play a crucial role.”
          </blockquote>
          <p className="text-md text-gray-600">
            In this article, we'll explore tools and techniques to make your
            presentations stand out, ensuring clarity and professionalism.
          </p>
        </section>

        {/* Other Resources Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Software and Tools
          </h2>
          <p className="text-md text-gray-600 mb-6">
            Several software tools can help streamline the presentation creation
            process. From design templates to analytics, here are some
            recommendations:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              Microsoft PowerPoint: A classic choice with extensive features.
            </li>
            <li>Google Slides: Great for collaborative editing.</li>
            <li>Canva: Easy-to-use design templates for modern slides.</li>
          </ul>
        </section>

        <p className="text-md text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
          massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
          Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </p>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-md text-gray-600 mb-6">
            Modern work environments demand presentations that are both
            professional and creative. Well-designed presentations can
            communicate your ideas effectively and leave a lasting impression.
          </p>
          <img
            src={girl}
            alt="Empty office workspace"
            className="w-full rounded-md mb-6"
          />
          <p className="text-md text-gray-600">
            Lectus leo massa amet posuere. Malesuada mattis non convallis
            quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum
            in non. Pretium ultricies tempor non est diam. Enim ut enim amet
            amet integer cursus. Sit ac commodo pretium sed etiam turpis
            suspendisse at.
          </p>
          <p className="text-md mt-4 text-gray-600">
            Tristique odio senectus nam posuere ornare leo metus, ultricies.
            Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
            Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
            suscipit accumsan. Cursus viverra aenean magna risus elementum
            faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum
          </p>
        </section>

        {/* Conclusion Section */}
        <section className="bg-[#F9FAFB] p-4 rounded-lg mb-[5rem]">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Conclusion
          </h2>
          <p className="text-md text-gray-600">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
          <p className="text-md mt-6 text-gray-600">
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
            condimentum mi massa. In tincidunt pharetra consectetur sed duis
            facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
            dictum eget nibh tortor commodo cursus.
          </p>
          <p className="text-md mt-6 text-gray-600">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
            aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
            morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
            dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
            tortor.
          </p>
        </section>
      </div>

      <section className=" py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">From the blog</h2>
            <p className="text-gray-600">
              The latest industry news, interviews, technologies, and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-80 object-cover"
                />
                <div className="py-4 md:p-6">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <a
                    href={blog.link}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Read post
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-end justify-end mt-8">
            <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary">
              View all posts
            </button>
          </div>
        </div>
      </section>

      <div className="bg-[#f9fafb] py-16 mt-[4rem] mb-[6rem] px-4 rounded-xl">
        <div className="flex flex-col sm:flex-row w-full sm:w-[90%] mx-auto items-start md:items-center justify-between">
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
              Join 2,000+ subscribers
            </h2>
            <p className="text-gray-600 text-lg">
              Stay in the loop with everything you need to know.
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-80 text-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <button className="bg-[#344054] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#344054] transition w-full sm:w-auto">
                Sign Up
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center sm:text-left">
              We care about your data in our{" "}
              <button className="underline" onClick={handlePrivacy}>
                privacy policy
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
