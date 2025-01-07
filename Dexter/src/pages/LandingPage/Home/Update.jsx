import React, { useState } from 'react';
import Background from '../../../assets/Background.png';
import { publicApi } from '../../../lib/config/axios-instance';
import toast from 'react-hot-toast';

const Update = () => {
  const [email, setEmail] = useState(''); // State to store email input
  const [loading, setLoading] = useState(false); // State to manage loading state

  const onSubmit = async () => {
    if (!email) {
      toast.error("Email is required.");
      return;
    }

    setLoading(true);
    try {
      const response = await publicApi.post("/contact/add", {
        email: email,
      });
      toast.success("Sign-up successful!");
      setEmail(''); // Reset email input
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mx-auto'>
      <div
        className="relative bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          minHeight: '700px',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32 md:pt-40 text-center">
          {/* Badge */}
          <div className="bg-layer inline-flex px-2 py-1 rounded-lg mb-4">
            <p className="text-sm font-normal text-primary rounded-lg py-1 px-3">
              Sign Up for Updates
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-semibold text-gray-900 mb-4">
            <span className="text-primary">Best SEO AI Tool for</span> SEO Optimization
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 w-full sm:w-4/5 md:w-[65%] mx-auto font-normal text-lg mb-6">
            Sign up to let Dexter handle your SEO and keep you updated with actionable insights,
            alerts, and results—all while you focus on your business.
          </p>

          {/* Email Input and Button */}
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-4/5 mx-auto mb-4'>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={loading} // Disable input during loading
            />
            <button
              onClick={onSubmit}
              className={`mt-4 sm:mt-0 bg-tetiary text-white font-semibold px-6 py-3 rounded-lg transition ${
                loading ? 'cursor-not-allowed bg-gray-400' : 'hover:bg-primary-dark'
              }`}
              disabled={loading} // Disable button during loading
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>

          {/* Privacy Policy */}
          <p className="text-md w-full sm:w-4/5 mx-auto font-normal text-gray-500">
            We care about your data in our{' '}
            <a href="#" className="underline">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Update;
