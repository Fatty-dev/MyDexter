import { authApi } from "@/lib/config/axios-instance";
import React, { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Security = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logOutAll = async () => {
    setLoading(true);
    try {
      // Call the endpoint for logging out of all devices
      const { data } = await authApi.post(
        "/settings/user/security/logout-all",
        {
          // Assuming you need to send an authorization token or similar
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust as necessary
        }
      );

      // Check if the response is successful
      if (data.success) {
        toast.success("Successfully logged out of all devices.");
        navigate("/login"); // Navigate to login page after successful deletion
      } else {
        toast.error(data.message || "Failed to log out of all devices.");
      }
    } catch (error) {
      toast.error("An error occurred while logging out of all devices.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md mt-4 max-md:mt-24 mb-8 rounded-lg p-6">
      {/* First Section */}
      <div className="flex justify-between md:flex-col md:gap-4 lg:flex-row max-md:gap-4 p-6 text-[#85858d]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="text-black">Multi-factor authentication</span>
          </div>
          <p className="lg:w-[80%] md:w-full max-md:w-full">
            Require an extra security challenge when logging in. If you are
            unable to pass this challenge, you will have the option to recover
            your account via email.
          </p>
        </div>
        {/* Button Fix */}
        <button className="self-start border border-[#908dfc] rounded-lg p-2 text-[#908dfc] hover:bg-[#908dfc] hover:text-gray-900 transition-all duration-300">
          Enable
        </button>
      </div>

      <hr />

      {/* Second Section */}
      <div className="flex justify-between max-md:flex-col md:flex-col md:gap-4 lg:flex-row max-md:gap-4 p-6 text-[#85858d]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="text-black">Log-out of all devices</span>
          </div>
          <p className="lg:w-[80%] md:w-full max-md:w-full">
            Log out of all active sessions across all devices, including your
            current session. It may take up to 30 minutes for other devices to
            be logged out.
          </p>
        </div>
        {/* Button Fix */}
        <button
          onClick={logOutAll}
          disabled={loading}
          className={`self-start border whitespace-nowrap border-[#908dfc] rounded-lg p-2 text-[#908dfc] hover:bg-[#908dfc] hover:text-gray-900 transition-all duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging out..." : "Log out all"}
        </button>
      </div>
    </div>
  );
};

export default Security;
