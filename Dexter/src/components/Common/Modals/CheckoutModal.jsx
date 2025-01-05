import React from "react";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../../assets/Main_Logo.svg";

const CheckoutModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Checkout</h2>
          <div className="flex justify-end py-3 text-[#98A2B3] px-4">
            <button onClick={onClose}>
              <RiCloseLine size={22} />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 p-6">
          {/* Left Section */}

          <div className="flex-1">
            <div>
              <div className="mb-6">
                <img src={logo} alt="MyDexter Logo" className="w-32" />
              </div>
            </div>
            <p className="text-gray-600 text-sm">Subscribe to Mydexter Pro</p>
            <div className="flex items-center gap-6">
              <h3 className="text-2xl font-semibold mb-1">$20.00</h3>
              <div className="flex flex-col items-start">
                <span className="text-sm font-normal">Per </span>
                <span className="text-sm font-normal"> month</span>
              </div>
            </div>
            {/* Plan Details */}
            <div className="bg-gray-50 border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Mydexter</span>
                <h3 className="text-md font-semibold ">$20.00</h3>
              </div>
              <p className="text-gray-500 text-sm">
                Mydexter pro offers more blog generation per week, bulk blog
                generation, and dedicated support. Billed monthly.
              </p>
              <div className="flex justify-between items-center mt-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="text-sm">Subscribe today</span>
                </label>
                <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-md">
                  Save 20%
                </span>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="mt-4">
              <div className="flex justify-between items-center text-sm">
                <span>Subtotal</span>
                <span>$20.00</span>
              </div>
              <button className="mt-4 text-primary rounded-full text-sm border px-4 py-2 border-primary">
                Add promotion code
              </button>
              <div className="flex justify-between items-center text-sm mt-2">
                <span>Tax</span>
                <span className="text-gray-400">
                  Enter address to calculate
                </span>
              </div>
              <hr className="my-3"></hr>
              <div className="flex justify-between items-center text-sm mt-2 font-medium">
                <span>Total due today</span>
                <span>$20.00</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-gray-50 border rounded-lg p-4">
            {/* Contact Information */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Contact information
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                className="mt-1 block w-full border rounded-md p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Payment Method */}
            <div className="mb-4">
              <label
                htmlFor="payment-method"
                className="block text-sm font-medium text-gray-700"
              >
                Payment method
              </label>
              <div className="flex space-x-2 mt-2">
                <button className="flex-1 bg-white border rounded-md py-2 px-4 text-sm text-center focus:ring-indigo-500 focus:border-indigo-500">
                  Card
                </button>
                <button className="flex-1 bg-white border rounded-md py-2 px-4 text-sm text-center focus:ring-indigo-500 focus:border-indigo-500">
                  AWS
                </button>
                <button className="flex-1 bg-white border rounded-md py-2 px-4 text-sm text-center focus:ring-indigo-500 focus:border-indigo-500">
                  Amazon
                </button>
                <button className="flex-1 bg-white border rounded-md py-2 px-4 text-sm text-center focus:ring-indigo-500 focus:border-indigo-500">
                  US Bank
                </button>
              </div>
            </div>

            {/* Card Information */}
            <div className="mb-4">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700"
              >
                Card information
              </label>
              <input
                type="text"
                id="card-number"
                placeholder="1234 5678 9012 3456"
                className="mt-1 block w-full border rounded-md p-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
