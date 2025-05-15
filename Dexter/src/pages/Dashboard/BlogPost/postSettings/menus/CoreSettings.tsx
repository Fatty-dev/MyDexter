import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import USFlag from "@/assets/US.svg";
import { toast } from "sonner";
import { authApi } from "@/lib/config/axios-instance";

interface Props {
  id?: string;
}

const CoreSettings = ({ id }: Props) => {
  const { control, handleSubmit } = useFormContext();
  const [loading, setLoading] = useState(false);

  const updateLanguage = async (data: any) => {
    setLoading(true);
    try {
      const response = await authApi.patch(
        `/settings/blog/core?blogPostId=${id}`,
        {
          language: data.language,
          toneOfVoice: data.tone,
          pointOfView: data.pointOfView,
          targetCountry: data.country,
          articleSize: data.articleSize,
          aiModel: data.aiModel,
          api: data.api,
          humanize: data.humanize,
        }
      );

      if (response.data.success) {
        toast.success("Settings updated successfully!");
      } else {
        toast.error("Failed to update the settings.");
      }
    } catch (error) {
      console.error("Error updating the settings:", error);
      toast.error("Error updating the settings.");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data: any) => {
    updateLanguage(data);
  };

  return (
    <div className="lg:mt-2 md:mt-2 mb-8 max-md:mt-16 relative bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-8 max-md:flex-col md:flex-col lg:flex-row">
          {/* First part */}
          <div className="lg:w-[40%] space-y-6">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="language"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Language
              </label>

              <Controller
                name="language"
                control={control}
                defaultValue="English US"
                render={({ field }) => (
                  <div className="flex items-center justify-between w-full gap-2 py-2 pl-4 text-gray-400 border border-gray-300 rounded-lg ">
                    <img src={USFlag} alt="US flag" width={20} />

                    <select
                      {...field}
                      id="language"
                      className="w-full text-sm border-none outline-none bg-transaparent "
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="English US">English US</option>
                      <option value="option 2">Option 2</option>
                      <option value="option 3">Option 3</option>
                    </select>
                  </div>
                )}
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="tone"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Tone of voice
              </label>
              <Controller
                name="tone"
                control={control}
                defaultValue="Friendly"
                render={({ field }) => (
                  <select
                    {...field}
                    id="tone"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Friendly">Friendly</option>
                    <option value="option 2">Option 2</option>
                    <option value="option 3">Option 3</option>
                  </select>
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="pointOfView"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Point of view <IoMdInformationCircleOutline size={16} />
              </label>
              <Controller
                name="pointOfView"
                control={control}
                defaultValue="None"
                render={({ field }) => (
                  <select
                    {...field}
                    id="pointOfView"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="None">None</option>
                    <option value="option 2">Option 2</option>
                    <option value="option 3">Option 3</option>
                  </select>
                )}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="country"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Target country <IoMdInformationCircleOutline size={16} />
              </label>
              <Controller
                name="country"
                control={control}
                defaultValue="None"
                render={({ field }) => (
                  <select
                    {...field}
                    id="country"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="None">None</option>
                    <option value="option 2">Option 2</option>
                    <option value="option 3">Option 3</option>
                  </select>
                )}
              />
            </div>
          </div>
          {/* Second part */}
          <div className="lg:w-[60%] md:w-full space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-3 lg:w-[60%] md:w-1/2 max-md:w-1/2">
                <label
                  htmlFor="articleSize"
                  className="text-#545a67] flex items-center text-sm gap-2"
                >
                  Article size
                </label>
                <Controller
                  name="articleSize"
                  control={control}
                  defaultValue="Medium"
                  render={({ field }) => (
                    <select
                      {...field}
                      id="articleSize"
                      className="p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                      <option value="Small">Small</option>
                      <option value="Normal">Normal</option>
                    </select>
                  )}
                />
              </div>
              <div className="bg-[#e7e6fe] md:px-0 md:py-2 max-md:p-2 lg:p-2 w-fit rounded-lg text-[8px] max-md:w-1/2 text-center mt-8 text-[#51576a]  lg:w-[40%] md:w-1/2 ">
                <p className="">2400-3600 words, 9-12 H2 headings</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="aiModel"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Ai model <IoMdInformationCircleOutline size={16} />
              </label>
              <Controller
                name="aiModel"
                control={control}
                defaultValue="Anthropic Claude 3 Haiku"
                render={({ field }) => (
                  <div className="">
                    <select
                      {...field}
                      id="aiModel"
                      className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none bg-transaparent "
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="Anthropic Claude 3 Haiku">
                        Anthropic Claude 3 Haiku
                      </option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                  </div>
                )}
              />
            </div>

            <div className="flex">
              <div className="flex flex-col gap-5 lg:w-1/2 md:w-full max-md:w-full">
                <div className="flex items-center gap-2 ">
                  <p className="text-#545a67] text-sm">Via your API keys</p>
                  <IoMdInformationCircleOutline size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Controller
                      name="api"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <input type="checkbox" {...field} />
                      )}
                    />
                    <label htmlFor="api" className="text-#545a67] text-sm">
                      Enable with API keys
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:w-1/2 md:w-full max-md:w-full">
                <div className="flex items-center gap-2">
                  <p>Total cost</p>
                  <IoMdInformationCircleOutline size={16} />
                </div>
                <p className="text-sm">1 generation and 1x word count</p>
              </div>
            </div>

            <div className="relative pt-[5px]">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="humanize"
                  className="text-#545a67] flex items-center text-sm gap-2"
                >
                  Humanize text <IoMdInformationCircleOutline size={16} />
                </label>
                <Controller
                  name="humanize"
                  control={control}
                  defaultValue="8th & 9th grade easily understood"
                  render={({ field }) => (
                    <div className="">
                      <select
                        {...field}
                        id="humanize"
                        className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg outline-none bg-transaparent"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="8th & 9th grade easily understood">
                          8th & 9th grade easily understood
                        </option>
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3</option>
                        <option value="option 4">option 4</option>
                      </select>
                    </div>
                  )}
                />
              </div>
              <div className="absolute top-0 right-0 text-[#9c99fc] flex items-center">
                <p className="text-[11px]">No AI word removal</p>
                <MdOutlineKeyboardArrowDown
                  size={18}
                  className="text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-primary text-white py-2 px-4 rounded"
        >
          Update Settings
        </button>
      </form>
    </div>
  );
};

export default CoreSettings;
