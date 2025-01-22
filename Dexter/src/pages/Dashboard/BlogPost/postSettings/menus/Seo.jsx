import { Controller, useFormState } from "react-hook-form";
import { TfiEraser } from "react-icons/tfi";

const Seo = () => {
  const { control } = useFormState();

  return (
    <div className="lg:mt-2 md:mt-2 max-md:mt- relative bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <p className="text-#545a67] text-[13px] font-[500]">
              Keywords to include in the text
            </p>
          </div>

          <div className="flex justify-between lg:flex-row max-md:flex-col max-md:items-start max-md:gap-4 md:gap-4 md:flex-col md:items-start text-[12px] text-gray-400 items-center">
            <p className="lg:w-1/2 md:w-full max-md:w-full">
              If you do not provide the keywords, we will automatically generate
              relevant keywords from the main keyword for each section and use
              them to generate the article.
            </p>

            <div className="flex  items-start gap-4 text-[#4b586b]  ">
              <TfiEraser size = {18} className="mt-2 -rotate-1"/>
              <div className="border border-gray-300 rounded-lg p-2 max-md:w-fit md:w-fit lg:w-[150px] text-center cursor-pointer text-sm font-[500]">
                <p>NLP keywords generation</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <Controller
                  name="keywords"
                  control={control}
                  defaultValue=""
                  rules={{
                    maxLength: {
                      value: 500,
                      message: "Keywords should not exceed 500 characters.",
                    },
                  }}
                  render={({ field, fieldState }) => {
                    const textLength = field.value.length;

                    return (
                      <div>
                        <div className="flex justify-between ">
                          <div className={`text-[12px] absolute top-4 right-4 ${textLength > 500 ? "text-red-500": "text-gray-500 "}`}>
                            <span>{textLength}</span>/<span>500</span>
                          </div>
                        </div>
                        <textarea
                          rows={8}
                          className={`w-full py-2 px-4 resize-none placeholder:text-sm rounded-lg appearance-none border outline-none focus:border-2 focus:border-gray-400 ${
                            fieldState.error
                              ? "border-red-500"
                              : " border-gray-300 "
                          }`}
                          placeholder="Write some keyword or phrase relevant to your blog, then press Enter or + to add"
                          name="keywords"
                          id="keywords"
                          {...field}
                        />
                        {fieldState.error && (
                          <p className="text-sm text-red-600">
                           {fieldState.error.message}
                          </p>
                        )}
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Seo;
