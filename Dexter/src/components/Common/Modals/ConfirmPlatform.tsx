import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface ConfirmPlatformProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ConfirmPlatform = ({ isOpen, onClose }: ConfirmPlatformProps) => {
  const navigate = useNavigate();

  const connect = () => {
    navigate(`/dashboard/settings?tag=6`);
  };

  // if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[5000]">
      <div className="bg-white rounded-2xl shadow-lg w-[25rem] p-4 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <AiOutlineClose size={20} />
        </button>
        <h2 className="text-xl font-semibold">Integration Needed</h2>
        <p className="text-gray-600 mt-2">
          This feature requires a connection to your Shopify, WordPress, or Wix
          site.
        </p>
        <div className="flex justify-end space-x-3 mt-6">
          <button
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary"
            onClick={connect}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPlatform;
