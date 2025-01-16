import { Controller, useFormState } from "react-hook-form";

const ExternalLinking = () => {
  const { control } = useFormState;
  return (
    <div className="lg:mt-2 md:mt-2 max-md:mt-16 relative bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form className="flex items-start gap-6">
        <div className=" w-[25%]">
          <div className="flex flex-col gap-3">
            <label htmlFor="linkType" className="text-#545a67]  text-[11px]">
              Link type
            </label>
            <Controller
              name="linkType"
              control={control}
              defaultValue="None"
              render={({ field }) => (
                <select
                  {...field}
                  id="linkType"
                  className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500 "
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="None">None</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                </select>
              )}
            />
          </div>
     
        </div>
        <div className="flex flex-col gap-3 w-[68%]">
          <p className=" text-[11px]">Note</p>
          <p className=" text-[10px] text-gray-400  ">
            External linking automatically integrates authoritative and relevant
            external into your content, while also allowing you to manually
            specify desired links.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ExternalLinking;
