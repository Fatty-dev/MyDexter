import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";


const ConfirmPlatform = ({isOpen, onClose}) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        <AiOutlineClose size={20} />
      </button>
      <h2 className="text-xl font-semibold">Integration Needed</h2>
      <p className="text-gray-600 mt-2">
        This feature requires a connection to your Shopify, WordPress, or Wix site.
      </p>
      <div className="flex justify-end space-x-3 mt-6">
        <button
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          Cancel
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Connect
        </button>
      </div>
    </div>
  </div>
  )
}

export default ConfirmPlatform