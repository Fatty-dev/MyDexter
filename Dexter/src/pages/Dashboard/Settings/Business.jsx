import { Controller, useFormState } from "react-hook-form";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";

const Business = () => {
  const { control } = useFormState();
  return (
    <div className=" bg-white shadow-md max-md:mt-24 mt-4 rounded-lg p-6 mb-8">
      <div className="text-[#8d8d95] flex flex-col gap-4 border-b-[3px] pb-6">
        <p className="font-semibold text-[#525c6d] text-lg">Profile</p>
        <div className="flex justify-between items-start">
          <p className="w-[80%]">
            Dexter uses the name and description of your business to write
            relevant content. The description should be accurate <br />
            and concise.
          </p>
          <div className="border rounded-md p-1 w-8 h-8 relative text-gray-700">
            <IoMdInformationCircleOutline size={16} />
          </div>
        </div>

       
          {/* Form */}
          <form className="space-y-6 ">
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="Name"
                className="text-#545a67] md:gap-1 max-md:gap-1 lg:gap-3  flex items-center text-sm gap-2"
              >
                {" "}
                Name
              </label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    id="name"
                    className="w-full p-3 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                    type="text"
                    placeholder="Enter your name"
                  />
                )}
              />
            </div>
            <div className="relative flex flex-col gap-3 ">
              <label
                htmlFor="description"
                className="text-#545a67] md:gap-1 max-md:gap-1 lg:gap-3  flex items-center text-sm gap-2"
              >
                {" "}
                Description
              </label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="description"
                    className="w-full p-3 mb-4 resize-none text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                    type="text"
                    placeholder="Enter description"
                    rows={4}
                  />
                )}
              />
            </div>
            <div className=" border rounded-lg p-2 text-gray-900 flex items-center gap-3 w-[80px] justify-center">
              <GiCheckMark />
              Saved
            </div>
          </form>
      
      </div>
   
      <div className="text-[#8d8d95] flex flex-col gap-4 mt-6">
           <div className="flex justify-between items-start max-md:flex-col max-md:gap-2">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-[#525c6d] text-lg">Services</p>
            <p className="">
              Dexter uses the services your business provides to find optimal
              keywords and write relevant content.
            </p>
        </div>
          <div className="flex gap-3 items-center">
            <div className="text-xl w-[80px] cursor-pointer flex gap-2 justify-center bg-primary p-3 rounded-lg text-white">Add  <IoMdAdd size={16} className="mt-[0.2rem]"/></div>
          
            <div className="border rounded-md p-1 w-8 h-8 relative text-gray-700">
            <IoMdInformationCircleOutline size={16}/>

          </div>
          </div>
        </div>

     
          {/* Form */}
          <form className="space-y-6 ">
            <Controller
              name="keyword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  id="keyword"
                  className="w-full p-3 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                  type="text"
                  placeholder="Enter keyword"
                />
              )}
            />

            <div className=" border rounded-lg p-2 text-gray-900 flex items-center gap-3 w-[80px] justify-center">
              <GiCheckMark />
              Saved
            </div>
          </form>
         
      </div>
    </div>
  );
};

export default Business;
