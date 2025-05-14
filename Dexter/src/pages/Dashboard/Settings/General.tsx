import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { popupVariant } from "../../../lib/utils/index";
import { authApi } from "@/lib/config/axios-instance";

const General = () => {
  const variant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const themeOptions = ["system", "dark", "light"];
  const languageOptions = ["en-US", "de-DE", "fr-FR", "es-ES"];

  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en-US");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const updateTheme = async (selectedTheme: string) => {
    setLoading(true);
    try {
      const response = await authApi.put(`/settings/user/theme`, {
        theme: selectedTheme,
      });

      if (response.data.success) {
        toast.success("Theme updated successfully!");
      } else {
        toast.error("Failed to update the theme.");
      }
    } catch (error) {
      toast.error("Error updating the theme.");
    } finally {
      setLoading(false);
    }
  };

  const updateLanguage = async (selectedLanguage: string) => {
    setLoading(true);
    try {
      const response = await authApi.put(`/settings/user/language`, {
        language: selectedLanguage,
      });

      if (response.data.success) {
        toast.success("Language updated successfully!");
      } else {
        toast.error("Failed to update the language.");
      }
    } catch (error) {
      toast.error("Error updating the language.");
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      const response = await authApi.delete(`/settings/user/posts`);
      if (response.data.success) {
        toast.success("All posts deleted successfully!");
      } else {
        toast.error("Failed to delete posts.");
      }
    } catch (error) {
      toast.error("Error deleting posts.");
    } finally {
      setLoading(false);
      handleCloseModal(); // Close the modal after deletion
    }
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    updateTheme(selectedTheme);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    updateLanguage(selectedLanguage);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="bg-white shadow-md mt-4 mb-8 rounded-lg p-6">
      {/* Theme Selection */}
      <div className="flex items-center justify-between py-4 border-b">
        <span className="text-gray-700">Theme</span>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="px-3 py-2 border rounded-md bg-gray-200 cursor-pointer"
        >
          {themeOptions.map((option, index) => (
            <option key={index} value={option} className="bg-white">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Language Selection */}
      <div className="flex items-center justify-between py-4 border-b">
        <span className="text-gray-700">Language</span>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="px-3 py-2 border rounded-md bg-gray-200 cursor-pointer"
        >
          {languageOptions.map((option, index) => (
            <option key={index} value={option} className="bg-white">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between py-4 border-b">
        <span className="text-gray-700">Archived posts</span>
        <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
          Archive all
        </button>
      </div>

      {/* Delete All Posts */}
      <div className="flex items-center justify-between py-4">
        <span className="text-gray-700">Delete all posts</span>
        <button
          onClick={handleShowModal}
          className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
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
              Are you sure you want to delete all your posts? This action cannot
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
                {loading ? "Deleting..." : "Delete All Posts"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default General;
