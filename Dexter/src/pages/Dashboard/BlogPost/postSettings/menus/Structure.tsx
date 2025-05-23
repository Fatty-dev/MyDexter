import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Structure = () => {
  const { control } = useForm();

  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="lg:mt-2 md:mt-2 mb-8 max-md:mt-16 relative bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 lg:relative top-10">
            <p className="text-#545a67] text-sm">Introductory hook brief</p>
            <IoMdInformationCircleOutline size={16} />
          </div>

          <div>
            <Controller
              name={activeTab}
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
                    <div className="flex justify-end gap-6 mb-2 text-sm">
                      <div className="flex gap-2 mb-1 ">
                        <span
                          className={`text-[#9592fc] text-[11px] max-md:text-[7px] w-fit p-1 text-center font-[500] border border-[#9592fc] cursor-pointer  rounded-md ${
                            activeTab === "Question"
                              ? "bg-[#e7e6fe]"
                              : "bg-none"
                          }`}
                          onClick={() => setActiveTab("Question")}
                        >
                          Question
                        </span>
                        <span
                          className={`text-[#9592fc] text-[11px] max-md:text-[7px] w-fit p-1 text-center font-[500] border border-[#9592fc] cursor-pointer  rounded-md ${
                            activeTab === "Statistical or fact"
                              ? "bg-[#e7e6fe]"
                              : "bg-none"
                          }`}
                          onClick={() => {
                            setActiveTab("Statistical or fact");
                          }}
                        >
                          Statistical or fact
                        </span>
                        <span
                          className={`text-[#9592fc] text-[11px] max-md:text-[7px] w-fit p-1 text-center font-[500] border border-[#9592fc] cursor-pointer  rounded-md ${
                            activeTab === "Quotation"
                              ? "bg-[#e7e6fe]"
                              : "bg-none"
                          }`}
                          onClick={() => setActiveTab("Quotation")}
                        >
                          Quotation
                        </span>
                        <span
                          className={`text-[#9592fc] text-[11px] max-md:text-[7px] w-fit p-1 text-center font-[500] border border-[#9592fc] cursor-pointer  rounded-md ${
                            activeTab === "Anecdotal or story"
                              ? "bg-[#e7e6fe]"
                              : "bg-none"
                          }`}
                          onClick={() => setActiveTab("Anecdotal or story")}
                        >
                          Anecdotal or story
                        </span>
                      </div>
                      <div
                        className={`text-sm ${
                          textLength > 500 ? "text-red-500" : "text-gray-500 "
                        } mt-1`}
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
                      placeholder="Enter the type of hook for the article's opening sentence"
                      // name={activeTab}
                      id={activeTab}
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

          {/* Dropdowns */}
          <div className="grid w-full gap-6 lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2">
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="conclusion"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Coclusion
              </label>
              <Controller
                name="conclusion"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="conclusion"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
              <label
                htmlFor="tables"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Tables
              </label>
              <Controller
                name="tables"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="tables"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="h3"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                H3
              </label>
              <Controller
                name="h3"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="h3"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
              <label
                htmlFor="lists"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Lists
              </label>
              <Controller
                name="youtube"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="lists"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
              <label
                htmlFor="italics"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Italics
              </label>
              <Controller
                name="italics"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="italics"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
              <label
                htmlFor="quotes"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Quotes
              </label>
              <Controller
                name="quotes"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="quotes"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
              <label
                htmlFor="keyTakeaway"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Key takeaway
              </label>
              <Controller
                name="keyTakeaway"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="keyTakeaway"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="faq"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                FAQ
              </label>
              <Controller
                name="faq"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="faq"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
              <label
                htmlFor="bold"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Bold
              </label>
              <Controller
                name="bold"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="bold"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
              <label
                htmlFor="bulletPoint"
                className="text-#545a67] flex items-center text-sm gap-2"
              >
                Bullet point
              </label>
              <Controller
                name="bulletPoint"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <select
                    {...field}
                    id="bulletPoint"
                    className="w-full p-2 text-sm text-gray-400 border border-gray-300 rounded-lg outline-none focus:border-2 focus:border-gray-500"
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
      </form>
    </div>
  );
};

export default Structure;
