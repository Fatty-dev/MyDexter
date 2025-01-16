import { useState } from "react";
import { Controller, useFormState } from "react-hook-form";

const DetailsToInclude = () => {
  const { control } = useFormState();

  const [activeSample, setActiveSample] = useState("sample1");

  return (
    <div className="lg:mt-2 md:mt-2 max-md:mt-16 relative bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Controller
              name="intense"
              control={control}
              defaultValue="false"
              render={({ field }) => (
                <input type="checkbox" name="intense" id="intense" {...field} />
              )}
            />
            <label htmlFor="sample" className="text-#545a67] text-sm">
              {" "}
              Intense mode: to each section, beyond just the entire article
            </label>
          </div>

          <div>
            <div>
              <div>
                <Controller
                  name={activeSample}
                  control={control}
                  defaultValue=""
                  rules={{
                    maxLength: {
                      value: 500,
                      message: "Sample should not exceed 500 characters.",
                    },
                  }}
                  render={({ field, fieldState }) => {
                    const textLength = field.value.length;

                    return (
                      <div>
                        <div className="flex justify-between ">
                          <div className="flex gap-4 mb-1">
                            <span
                              className={`text-[#9592fc] text-[11px] font-[500] cursor-pointer p-2 rounded-md ${
                                activeSample === "sample1"
                                  ? "bg-[#e7e6fe]"
                                  : "bg-none"
                              }`}
                              onClick={() => setActiveSample("sample1")}
                            >
                              Sample 1
                            </span>
                            <span
                              className={`text-[#9592fc] text-[11px] font-[500] cursor-pointer p-2 rounded-md ${
                                activeSample === "sample2"
                                  ? "bg-[#e7e6fe]"
                                  : "bg-none"
                              }`}
                              onClick={() => {
                                setActiveSample("sample2");
                              }}
                            >
                              Sample 2
                            </span>
                            <span
                              className={`text-[#9592fc] text-[11px] font-[500] cursor-pointer p-2 rounded-md ${
                                activeSample === "sample3"
                                  ? "bg-[#e7e6fe]"
                                  : "bg-none"
                              }`}
                              onClick={() => setActiveSample("sample3")}
                            >
                              Sample 3
                            </span>
                          </div>
                          <div
                            className={`text-sm ${
                              textLength > 500
                                ? "text-red-500"
                                : "text-gray-500 "
                            }`}
                          >
                            <span>{textLength}</span>/<span>500</span>
                          </div>
                        </div>
                        <textarea
                          className={`w-full py-2 px-4 resize-none placeholder:text-sm rounded-lg appearance-none border outline-none focus:border-2 focus:border-gray-400 ${
                            fieldState.error
                              ? "border-red-500"
                              : " border-gray-300 "
                          }`}
                          rows={8}
                          placeholder="e.g phone number as 222-333-444"
                          name={activeSample}
                          id={activeSample}
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

export default DetailsToInclude;
