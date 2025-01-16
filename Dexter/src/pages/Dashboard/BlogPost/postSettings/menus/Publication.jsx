import { Controller, useFormState } from "react-hook-form";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Publication = () => {
  const { control } = useFormState();
  return (
    <div className="lg:mt-2 md:mt-2 md:pt-4 mb-5 max-md:mt-10 bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form className="flex gap-6 items-start">
        <div className="flex flex-col gap-4 w-[28%]">
          <div className="flex flex-col gap-3">
            <label htmlFor="shopify" className="text-#545a67]  text-[11px]">
              Shopify
            </label>
            <Controller
              name="shopify"
              control={control}
              defaultValue="No"
              render={({ field }) => (
                <select
                  {...field}
                  id="shopify"
                  className="w-full max-md:text-[9px] text-gray-400 outline-none focus:border-2 focus:border-gray-500 border border-gray-300 rounded-lg p-2 text-[11px]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              )}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="wix" className="text-#545a67]  text-[11px]">
              Wix
            </label>
            <Controller
              name="wix"
              control={control}
              defaultValue="No"
              render={({ field }) => (
                <select
                  {...field}
                  id="wix"
                  className="w-full max-md:text-[9px] text-gray-400 outline-none focus:border-2 focus:border-gray-500 border border-gray-300 rounded-lg p-2 text-[11px]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              )}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="wordpress" className="text-#545a67]  text-[11px]">
              Wordpress
            </label>
            <Controller
              name="wordpress"
              control={control}
              defaultValue="No"
              render={({ field }) => (
                <select
                  {...field}
                  id="wordpress"
                  className="w-full max-md:text-[9px] text-gray-400 outline-none focus:border-2 focus:border-gray-500 border border-gray-300 rounded-lg p-2 text-[11px]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[75%]">
          <div  className=" text-[11px] flex gap-2">
            <p>Important</p>
             <IoMdInformationCircleOutline size = {16}/>
          </div>
          <p className=" text-[10px] text-gray-400  ">
            If you enable this option, all generated blog posts will be
            published on the selected sites. Be careful with the settings and
            publication date.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Publication;
