
import { HiOutlineChevronRight } from "react-icons/hi";

const DataControl = () => {
  return (
    <div className=" bg-white max-md:mt-24 mb-8 shadow-md mt-4 rounded-lg p-6">
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

        <button className="bg-[#d92d20] hover:bg-opacity-50 transition-all duration-300 text-white p-2 w-[80px] rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DataControl;
