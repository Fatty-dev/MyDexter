import React from "react";
import Background from "../../../assets/Section.png";
import { IoArrowDownOutline } from "react-icons/io5";
import Img1 from "../../../assets/Img1.svg";
import Img2 from "../../../assets/Img2.svg";
import Img3 from "../../../assets/Img3.svg";
import Img4 from "../../../assets/Img4.svg";
import Img5 from "../../../assets/Img5.svg";
import Img6 from "../../../assets/Img6.svg";
import Img7 from "../../../assets/Img7.svg";
import Img8 from "../../../assets/Img8.svg";
import Img9 from "../../../assets/Img9.svg";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const handlePrivacy = () => {
    navigate('/privacy')
  }

  const handleDetails = () =>{
    navigate('/blog-details')
  }

  const blogs = [
    {
      category: "Backlinks",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: Img1,
    },
    {
      category: "Keywords",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug letter spacing. Here's how to get started.",
      image: Img2,
    },
    {
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      image: Img3,
    },
    {
      category: "Management",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: Img4,
    },
    {
      category: "Product",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: Img5,
    },
    {
      category: "Design",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: Img6,
    },
    {
      category: "Design",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: Img7,
    },
    {
      category: "Product",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: Img8,
    },
    {
      category: "Customer Success",
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
      image: Img9,
    },
  ];

  return (
    <div className="container mx-auto">
      <div
        className="">
        <div className="hidden md:absolute top-0 w-full -z-[1] left-0">
          <img src={Background} alt=""/>
        </div>
        <div className="max-w-6xl mx-auto px-4 lg:pt-8 pb-8 text-center">
          <div className="bg-layer inline-flex px-2 py-1 rounded-lg mb-4">
            <p className="text-sm font-normal text-primary rounded-4xl py-1 px-3">
              Our Blog
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
            Dexter’s <span className="text-primary">Insights</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg sm:text-xl md:text-2xl w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-6">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border bg-white  rounded-lg cursor-pointer shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300" onClick={handleDetails}
          >
            <div className="w-[20rem] mx-auto py-4">
            <img
              src={blog.image}
              alt={blog.title}
              className=""
            />
            </div>
            <div className="p-4">
              <p className="text-xs text-primary font-medium mb-1">
                {blog.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>
              <p className="text-md text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))}

      </div>
      <div className="flex items-center justify-center">
<div className="bg-layer flex items-center font-semibold justify-center px-2 py-1 rounded-lg mb-4">
<IoArrowDownOutline className="text-primary"/>
            <button className="text-sm font-normal text-primary rounded-4xl py-1 px-3">
              Load more
            </button>
          </div>
          </div>

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
        We care about your data in our <button href="#" className="underline" onClick={handlePrivacy}>privacy policy</button>.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Blog;
