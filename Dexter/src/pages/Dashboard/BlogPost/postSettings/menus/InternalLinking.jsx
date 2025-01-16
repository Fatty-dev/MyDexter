import { useFormState } from "react-hook-form";
import { Controller } from "react-hook-form";

const InternalLinking = () => {
  const { control } = useFormState();
  return (
    <div className="lg:mt-2 md:mt-2 max-md:mt-16 relative bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form>
        <div className="lg:w-[65%] max-md:w-full md:w-[80%]">
          <p className="text-#545a67] text-[10px]">
            Authomatically index your site and add links relevant to your
            content. Select a WordPress Site and our semantic search will find
            the best pages to link to within your article.
          </p>
        </div>
        <div className="relative pt-4">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="wordpress-site"
              className="text-#545a67]  text-sm"
            >
              Select a Wordpress site
            </label>
            <Controller
              name="wordpress-site"
              control={control}
              defaultValue="None"
              render={({ field }) => (
                <select
                  {...field}
                  id="wordpress-site"
                  className="w-full text-sm max-md:text-[9px] text-gray-400 outline-none focus:border-2 focus:border-gray-500 border border-gray-300 rounded-lg p-2 text-[11px]"
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
          <div className="absolute top-4 right-0 text-[#9c99fc]">
            <p className="text-sm">
              Unlimited internal URLs crawlable
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InternalLinking;
