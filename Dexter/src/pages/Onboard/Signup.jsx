import React from "react";
import logo from "../../assets/Main_Logo.svg";
import ReactDOM from "react-dom";

const Signup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Modal Content
  const modalContent = (
    <div className="fixed z-[1000] inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <h2 className="text-xl font-medium mb-1">Sign up to</h2>
          <img src={logo} alt="MyDexter Logo" className="mx-auto mb-4 " />
          <p className="text-gray-500 text-sm mb-6">Your personal AI-powered SEO specialist</p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary placeholder:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Create a password"
              className="w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary font-semibold text-white rounded-full shadow hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Get started
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-primary font-medium hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );

  // Use React Portal to render outside sidebar
  return ReactDOM.createPortal(modalContent, document.body);
};

export default Signup;
