import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import { authApi } from "@/lib/config/axios-instance";
import toast from "react-hot-toast";

const Business = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    services: [],
  });
  const [newService, setNewService] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddService = () => {
    if (newService) {
      setFormData((prev) => ({
        ...prev,
        services: [...prev.services, newService],
      }));
      setNewService(""); // Clear the input after adding
    }
  };

  const addInfo = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    try {
      const response = await authApi.put(`/settings/user/business`, {
        name: formData.name,
        description: formData.description,
        services: formData.services,
      });

      if (response.data.success) {
        toast.success("Business information updated successfully!");
        setFormData({ name: "", description: "", services: [] }); // Reset form data
      } else {
        toast.error("Failed to update the business information.");
      }
    } catch (error) {
      toast.error("Error updating the business information.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md max-md:mt-24 mt-4 rounded-lg p-6 mb-8">
      <div className="text-[#8d8d95] flex flex-col gap-4 border-b-[3px] pb-6">
        <p className="font-semibold text-[#525c6d] text-md">Profile</p>
        <div className="flex justify-between items-start">
          <p className="w-[80% text-sm]">
            Dexter uses the name and description of your business to write
            relevant content. The description should be accurate <br />
            and concise.
          </p>
          <div className="border rounded-md p-1 relative text-gray-700">
            <IoMdInformationCircleOutline size={16} />
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={addInfo}>
          <div className="relative flex flex-col gap-3">
            <label
              htmlFor="name"
              className="text-#545a67] md:gap-1 max-md:gap-1 lg:gap-3 flex items-center text-sm gap-2"
            >
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              className="w-full p-3 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="relative flex flex-col gap-3">
            <label
              htmlFor="description"
              className="text-#545a67] md:gap-1 max-md:gap-1 lg:gap-3 flex items-center text-sm gap-2"
            >
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              id="description"
              className="w-full p-3 mb-4 resize-none text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
              placeholder="Enter description"
              rows={4}
            />
          </div>
          {/* <div className="border rounded-lg p-2 text-gray-900 flex items-center gap-3 w-[80px] justify-center">
            <GiCheckMark />
            Saved
          </div> */}
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg">
            Save Changes
          </button>
        </form>
      </div>

      <div className="text-[#8d8d95] flex flex-col gap-4 mt-6">
        <div className="flex justify-between items-start max-md:flex-col max-md:gap-2">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-[#525c6d] text-lg">Services</p>
            <p>
              Dexter uses the services your business provides to find optimal
              keywords and write relevant content.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <button
              type="button"
              onClick={handleAddService}
              className="text-md cursor-pointer flex gap-2 justify-center bg-primary px-2 py-1 rounded-lg text-white"
            >
              Add <IoMdAdd size={16} className="mt-[0.2rem]" />
            </button>
            <div className="border rounded-md p-1 relative text-gray-700">
              <IoMdInformationCircleOutline size={16} />
            </div>
          </div>
        </div>

        {/* Services Input */}
        <div className="space-y-4">
          <input
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            className="w-full p-3 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
            type="text"
            placeholder="Enter service"
          />
          <div className="flex flex-col gap-2">
            {formData.services.map((service, index) => (
              <div key={index} className="border rounded-lg p-2 text-gray-900">
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;