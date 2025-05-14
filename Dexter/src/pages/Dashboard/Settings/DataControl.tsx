import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { popupVariant } from "../../../lib/utils/index";
import { authApi } from "@/lib/config/axios-instance";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useState } from "react";
import { toast } from "sonner";

const DataControl = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const variant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      const response = await authApi.delete(`/settings/user/account`);
      if (response.data.success) {
        toast.success("Account deleted successfully!");
        navigate("/login"); // Navigate to login page after successful deletion
      } else {
        toast.error("Failed to delete account.");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Error deleting account.");
    } finally {
      setLoading(false);
      handleCloseModal(); // Close the modal after deletion
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="bg-white max-md:mt-24 mb-8 shadow-md mt-4 rounded-lg p-6">
      <div className="flex justify-between px-4 pt-6 pb-8">
        <span>Improve the model for everyone</span>
        <div className="flex items-center gap-3">
          <span>On</span>
          <HiOutlineChevronRight className="mb-1" />
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-4 py-8">
        <span>Shared links</span>
        <button className="border border-[#908dfc] rounded-lg p-2 text-[#908dfc] w-[90px] hover:bg-[#908dfc] hover:text-gray-900 transition-all duration-300 ">
          Manage
        </button>
      </div>
      <hr />
      <div className="flex justify-between px-4 py-8">
        <span>Export data</span>
        <button className="border border-[#908dfc] rounded-lg p-2 text-[#908dfc] w-[90px] hover:bg-[#908dfc] hover:text-gray-900 transition-all duration-300 ">
          Export
        </button>
      </div>
      <hr />
      <div className="flex justify-between px-4 py-8">
        <span>Delete account</span>
        <button
          onClick={handleShowModal}
          className="bg-[#d92d20] hover:bg-opacity-50 transition-all duration-300 text-white p-2 w-[80px] rounded-lg"
        >
          Delete
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <motion.div
          {...variant}
          className="flex justify-center items-center fixed inset-0 z-[2000] bg-black bg-opacity-50"
        >
          <motion.div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold">Confirm Deletion</h2>
            <p>
              Are you sure you want to delete this account? This action cannot
              be undone.
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete Account"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default DataControl;
