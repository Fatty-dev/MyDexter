import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaCreditCard, FaAmazon, FaUniversity } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import logo from "../../../assets/Main_Logo.svg";
import visaImage from "../../../assets/Visa.svg"; 
import mastercardImage from "../../../assets/Mastercard.svg";
import { authApi } from "@/lib/config/axios-instance";

const CheckoutModal = ({ onClose }) => {
  const [isSubscribing, setIsSubscribing] = useState(false);

  const subscribe = async () => {
    setIsSubscribing(true);
    try {
      const response = await authApi.post(`subscription/subscribe`);
      
      if (response.data.success) {
        // Redirect to the URL from the response
        window.location.href = response.data.data.url;
      } else {
        toast.error("Subscription failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };


  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-[2000]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-3">
          <h2 className="text-lg font-semibold">Checkout</h2>
          <button onClick={onClose} className="text-gray-500">
            <RiCloseLine size={22} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 px-6 py-4">
          {/* Left Section */}
          <div className="flex-1">
            <div className="mb-4">
              <img src={logo} alt="MyDexter Logo" className="w-32" />
            </div>
            <p className="text-gray-600 text-sm mb-2">Subscribe to Mydexter Pro</p>
            <div className="flex items-start gap-2">
              <h3 className="text-3xl font-semibold">$20.00</h3>
              <span className="text-sm text-gray-400 self-end">Per month</span>
            </div>

            {/* Plan Details */}
            <div className="bg-gray-50 border rounded-lg p-4 mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-700">Mydexter Pro</span>
                <span className="font-semibold">$20.00</span>
              </div>
              <p className="text-gray-500 text-sm">
                Mydexter Pro offers more blog generation per week, bulk blog
                generation, and dedicated support. Billed monthly.
              </p>
              <div className="flex justify-between items-center mt-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox  text-indigo-600"
                    checked
                  />
                  <span className="text-sm">Subscribe today</span>
                </label>
                <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-md">
                  Save 20%
                </span>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="mt-6 text-sm">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$20.00</span>
              </div>
              <button className="text-indigo-600 bg-indigo-50 rounded-full border border-indigo-600 px-4 py-1 text-sm">
                Add promotion code
              </button>
              <div className="flex justify-between items-center mt-4">
                <span>Tax</span>
                <span className="text-gray-400">Enter address to calculate</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-medium">
                <span>Total due today</span>
                <span>$20.00</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-[#EBF9F8]  rounded-lg px-6 py-4">
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
                className="mt-2 block w-full border bg-[#EBF9F8] rounded-md p-2 text-sm "
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
                <button className="flex flex-col  bg-[#EBF9F8] border rounded-md py-2 px-4 text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <FaCreditCard className="text-indigo-600" />
                  Card
                </button>
                <button className="flex flex-col  bg-[#EBF9F8] border rounded-md py-2 px-4 text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <FaAmazon className="text-yellow-600" />
                  Amazon
                </button>
                <button className="flex flex-col  bg-[#EBF9F8] border rounded-md py-2 px-4 text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <SiCashapp className="text-green-600" />
                  Cash App
                </button>
                <button className="flex flex-col  bg-[#EBF9F8] border rounded-md py-2 px-4 text-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <FaUniversity className="text-gray-600" />
                  US Bank
                </button>
              </div>
            </div>

            {/* Card Information */}
            <div>
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700"
              >
                Card information
              </label>
              <div className="flex mt-2 space-x-2">
                <input
                  type="text"
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="flex-1 block border rounded-md p-2 text-sm bg-[#EBF9F8]"
                />
                <img src={visaImage} alt="Visa" className="w-10" />
                <img src={mastercardImage} alt="MasterCard" className="w-10" />
              </div>
              <div className="flex space-x-2 mt-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="flex-1 border rounded-md p-2 text-sm bg-[#EBF9F8]"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="flex-1 border rounded-md p-2 text-sm bg-[#EBF9F8]"
                />
              </div>
            </div>

            {/* Card Holder and Billing Address */}
            <div className="mt-4">
              <label
                htmlFor="cardholder-name"
                className="block text-sm font-medium text-gray-700"
              >
                Card holder name
              </label>
              <input
                type="text"
                id="cardholder-name"
                placeholder="Full name on card"
                className="mt-2 block w-full border rounded-md p-2 text-sm bg-[#EBF9F8]"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="billing-address"
                className="block text-sm font-medium text-gray-700"
              >
                Billing address
              </label>
              <select
                id="billing-address"
                className="mt-2 block w-full border rounded-md p-2 text-sm bg-[#EBF9F8]"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
              <input
                type="text"
                placeholder="Address"
                className="mt-2 block w-full border rounded-md p-2 text-sm bg-[#EBF9F8]"
              />
            </div>

            {/* Save Info and Subscribe */}
            <div className="mt-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-indigo-600"
                  checked
                />
                <span className="text-sm">
                  Save my info for 1-click checkout with link
                </span>
              </label>
            </div>
            <button 
  className={`w-full ${isSubscribing ? 'bg-gray-400' : 'bg-indigo-600'} text-white py-2 mt-6 rounded-md hover:bg-indigo-700`} 
  onClick={subscribe} 
  disabled={isSubscribing}
>
  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;