import Laptop from "../../../assets/Macbook.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="">
      {/* Hero Container */}
      <div className="max-w-6xl mx-auto px-4 lg:pt-8 pb-8 text-center">
        <div className="bg-layer inline-flex px-2 py-1 rounded-lg mb-4">
          <p className="text-sm font-normal text-primary rounded-4xl py-1 px-3">
            Getting Started
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
          <span className="text-primary">Easy-to-Use,</span> AI-Powered SEO
          Tools
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg sm:text-xl md:text-2xl w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-6">
          Optimize your SEO strategy with Dexter’s advanced AI-driven SEO tools.
          Our automated content creation and performance tracking elevate your
          site's authority and boost traffic.
        </p>

        {/* Button */}
        <button
          className="bg-primary text-white font-semibold text-lg px-6 py-3 rounded-full hover:bg-primary transition mt-4"
          onClick={getStarted}
        >
          Get Started
        </button>
      </div>

      {/* Placeholder for Video Section */}
      <div className="flex justify-center items-center mt-2 pt-10">
        <img src={Laptop} alt="" />
      </div>
    </div>
  );
};

export default Hero;
