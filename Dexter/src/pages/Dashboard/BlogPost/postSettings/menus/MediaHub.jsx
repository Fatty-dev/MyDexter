
import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";
import { IoMdInformationCircleOutline } from "react-icons/io";


const MediaHub = () => {
  const { control, watch} = useFormContext();

  const includeKeyword = watch('includeKeyword', true);
  const strictPlacement = watch('strictPlacement', true);

  return (
    <div className="lg:mt-2 md:mt-2 max-md:mt-10 md:mb-8 max-md:mb-8 bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form className="flex flex-col gap-4">
        <div className="flex gap-8 max-md:flex-col md:flex-col lg:flex-row">
          {/* First part */}
          <div className="space-y-6 lg:w-1/2">
            <div className="flex gap-6">
              <div className="flex flex-col w-1/2 gap-3">
                <label
                  htmlFor="aiImages"
                  className="text-#545a67] flex items-center text-[12px] gap-2 md:text-[12px]"
                >
                  AI images
                </label>
                <Controller
                  name="aiImages"
                  control={control}
                  defaultValue="Yes"
                  render={({ field }) => (
                    <select
                      {...field}
                      id="aiImages"
                      className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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

              <div className="flex flex-col w-1/2 gap-3">
                <label
                  htmlFor="numberOfImages"
                  className="text-#545a67] flex items-center text-[12px] gap-2"
                >
                  {" "}
                  Number of images
                </label>
                <Controller
                  name="numberOfImages"
                  control={control}
                  defaultValue="Yes"// Initial value
                  render={({ field }) => (
                    <select
                      {...field}
                      id="numberOfImages"
                      className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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

          </div>

          {/* Second part */}
          <div className="space-y-6 lg:w-1/2 md:w-full">
            <div className="flex gap-6">
              <div className="relative flex flex-col w-1/2 gap-3">
                <label
                  htmlFor="imageStyle"
                  className="text-#545a67] flex items-center text-[12px] gap-2"
                >
                  Image style
                </label>
                <Controller
                  name="imageStyle"
                  control={control}
                  defaultValue="None"
                  render={({ field, fieldState }) => (
                    <div>
                      <select
                        {...field}
                        id="imageStyleimage-style"
                        className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="None">None</option>
                        <option value="option 2">Option 2</option>
                      </select>
                      <div   className={`text-[12px] ${
                              field.value.length > 150
                                ? "text-red-500"
                                : "text-gray-500 "
                            } absolute top-0 right-4`}>
                        <span>0</span>/<span>50</span>
                      </div>
                      {fieldState.error && (
                          <p className="text-sm text-red-600">
                            {fieldState.error.message}
                          </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="flex flex-col w-1/2 gap-3">
                <label
                  htmlFor="imageSizes"
                  className="text-#545a67] flex items-center text-[12px] gap-2"
                >
                  {" "}
                  Image sizes
                </label>
                <Controller
                  name="imageSizes"
                  control={control}
                  defaultValue="1344x768(16:9)"
                  render={({ field }) => (
                    <select
                      {...field}
                      id="imageSizes"
                      className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="1344x768(16:9)">1344x768(16:9)</option>
                      <option value="option 2">Option 2</option>
                    </select>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
              <div className="relative flex flex-col w-1/2 gap-3">
                <label
                  htmlFor="additionalInfo"
                  className="text-#545a67] md:gap-1 lg:gap-3 max-md:gap-12 flex items-center text-[12px]  gap-2"
                >
                  <p className="max-md:w-[40px]"> Additional information</p>
                 
                  <IoMdInformationCircleOutline size={16} />
                </label>
                <Controller
                  name="additionalInfo"
                  control={control}
                  defaultValue=""
                  rules={{
                    maxLength: {
                      value: 150,
                      message: "Keywords should not exceed 150 characters.",
                    },
                  }}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        id="additionalInfo"
                        className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                        type="text"
                        placeholder="Enter details or creative directions"
                      />
                      <div className="absolute max-md:top-0 max-md:right-4 lg:top-0 lg:right-4 max-md:text-[12px] lg:text-[12px] md:right-0 md:top-[0.8px] md:text-sm">
                        <span>{field.value.length}</span>/<span>150</span>
                      </div>
                    </div>
                  )}
                />
              </div>
              <div className="relative flex flex-col w-1/2 gap-3">
                <label
                  htmlFor="brandName"
                  className="text-#545a67] md:gap-1 max-md:gap-1 lg:gap-3  flex items-center text-[12px] gap-2"
                >
                  {" "}
                    Brand name
                  <IoMdInformationCircleOutline size={16} />
                </label>
                <Controller
                  name="brandName"
                  control={control}
                  defaultValue=""
                  rules={{
                    maxLength: {
                      value: 150,
                      message: "Keywords should not exceed 150 characters.",
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <input
                        {...field}
                        id="brandName"
                        className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                        type="text"
                        placeholder="Enter your brand name"
                      />
                              <div
                            className={`text-[12px] ${
                              field.value.length > 150
                                ? "text-red-500"
                                : "text-gray-500 "
                            } absolute top-0 right-4`}
                          >
                        <span>{field.value.length}</span>/<span>150</span>
                      </div>
                      {fieldState.error && (
                          <p className="text-sm text-red-600">
                            {fieldState.error.message}
                          </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
        <div className="flex items-start gap-2 w-[90%] text-sm">
          <Controller
            name="includeKeyword"
            control={control}
            defaultValue={true}

            render={({ field }) => (
              <input type="checkbox" checked = {field.value} name="includeKeyword" id="includeKeyword" {...field} />
            )}
          />
          <label htmlFor="includeKeyword" className="text-#545a67] lg:w-[75%] text-[12px] max-md:w-full">
            
            Include the main keyword in the first image as Alt-text. Relevant
            keywords will be picked up and added to the rest of the images.
          </label>
        </div>

        <div className="flex gap-6 lg:flex-row max-md:flex-col md:flex-col">
            <div className="flex gap-6 lg:w-1/2 max-md:w-full md:w-full">
              <div className="flex flex-col gap-3 lg:w-1/2 max-md:w-full md:w-full">
                <label
                  htmlFor="youtube"
                  className="text-#545a67] flex items-center text-[12px] gap-2"
                >
                  Youtube videos
                </label>
                <Controller
                  name="youtube"
                  control={control}
                  defaultValue="Yes"
                  render={({ field }) => (
                    <select
                      {...field}
                      id="youtube"
                      className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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

              <div className="flex flex-col gap-3 lg:w-1/2 max-md:w-full md:w-full">
                <label
                  htmlFor="numberOfVideos"
                  className="text-#545a67] flex items-center text-[12px] gap-2"
                >
                 
                  Number of videos
                </label>
                <Controller
                  name="numberOfVideos"
                  control={control}
                  defaultValue="Yes" // Initial value
                  render={({ field }) => (
                    <select
                      {...field}
                      id="numberOfVideos"
                      className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="2">3</option>
                    </select>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:w-1/2 md:w-full max-md:w-full">
                <label
                  htmlFor="layout"
                  className="text-#545a67] flex items-center text-[12px] gap-2"
                >
                  {" "}
                  Layout options
                </label>
                <Controller
                  name="layout"
                  control={control}
                  defaultValue="Alternate image and video" // Initial value
                  render={({ field }) => (
                    <select
                      {...field}
                      id="layout"
                      className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="Alternate image and video">Alternate image and video</option>
                      <option value="option2">Option 2</option>
                      <option value="option2">Option 3</option>
                    </select>
                  )}
                />
              </div>
            </div>
            
            <div className="flex items-start gap-2 w-[90%] text-sm">
          <Controller
            name="strictPlacement"
            control={control}
            defaultValue={true}
            render={({ field }) => (
              <input type="checkbox" checked = {field.value} name="strictPlacement" id="strictPlacement" {...field} />
            )}
          />
          <label htmlFor="strictPlacement" className="text-#545a67] lg:w-[75%] text-[12px] max-md:w-full">
            
            All media element will be placed strictly under the headings. I disabled , the AI will decide and find the best placement.
          </label>
        </div>
      </form>
    </div>
  );
};

export default MediaHub;
