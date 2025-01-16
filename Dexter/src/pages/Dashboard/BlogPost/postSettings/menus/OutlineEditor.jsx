import { Controller, useFormState } from "react-hook-form";
import backpack from "@/assets/backpack.svg";

const OutlineEditor = ({ formData }) => {
  const lists = [
    {
      name: "Magic bag button",
      desc: "Generates a real-time OUTLINE based on the top-ranking articles on search engines for your topic, if “Connect to web” is enabled.",
    },
    {
      name: "Add a headline",
      desc: " Allows you to manually create a list of headlines for your article.",
    },
    {
      name: "Drag-and-drop",
      desc: "Conveniently reorganize headlines by dragging and dropping them within the outline.",
    },
    {
      name: "Top-tier AI system",
      desc: "The OUTLINE generation is powered by the GPT-4 128K Turbo model!",
    },
  ];
  const { control } = useFormState();
  return (
    <div className="lg:mt-2 md:mt-2 max-md:mt-10 md:mb-8 max-md:mb-8 flex flex-col gap-4 bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <div>
        <p className="text-#545a67] text-[12px]">
          Enable the OUTLINE editor for your article to gain the ability to add
          a personalized OUTLINE to your upcoming article, enhancing their
          structure and relevance
        </p>
      </div>
      <div className="bg-[#f0f2f5] p-4 rounded-lg">
        <ul className="flex flex-col gap-2">
          {lists.map((item, index) => (
            <li
              key={index}
              className="md:text-[11px] lg:text-[12px]  flex gap-1 lg:flex-row max-md:flex-col max-md:items-start md:flex-col md:items-start"
            >
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-black mr-1"></div>
                <h1 className="text-[#293142] font-semibold w-full">
                  {item.name}
                  <span>:</span>
                </h1>
              </div>
              <p className="text-[#8d8d95] ">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex justify-between">
          <form>
            <div className="flex items-start gap-2 text-[#8681fc] text-sm">
              <Controller
                name="enable-editor"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    checked={field.value}
                    name="enableEditor"
                    id="enableEditor"
                    {...field}
                  />
                )}
              />
              <label htmlFor="enableEditor" className="text-[12px] ">
                Enable the outline editor
              </label>
            </div>
          </form>
          <div className="text-[12px] text-gray-500 ">
            <span>0</span>/<span>500</span>
          </div>
        </div>
        <div className="flex lg:items-center max-md:gap-4 md:gap-4 lg:justify-between md:flex-col lg:flex-row max-md:flex-col">
          <div className="flex gap-8 mt-4 text-sm md:justify-between max-md:justify-between">
            <div className="text-[#8d8d95] flex flex-col gap-1">
              <p>
                Main keyword: None
               
              </p>
              {/* {formData.keywords?.length === 0
                  ? "None"
                  : formData.keywords
                      .map((item, index) => <p key={index}>(item)</p>)
                      .join(" ")} */}
              <p>Title: None</p>
            </div>
            <div className="text-[#8d8d95] flex flex-col gap-1">
              <p>Language: {formData.language}</p>
              <p>Target country: {formData.country}</p>
            </div>
            <div className="text-[#8d8d95] flex flex-col gap-1">
              <p>Tone of voice: {formData.tone}</p>
              <p>Include H3: {formData.h3}</p>
            </div>
          </div>
          <button
            disabled
            className="text-white flex gap-2 items-center max-md:self-end md:self-end bg-[#6d68fb] text-[10px] p-[0.4rem] mt-2 disabled:bg-opacity-50   w-[120px]  justify-center rounded-full"
          >
            <img src={backpack} alt="backpack" width={20} />
            Magic bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutlineEditor;
