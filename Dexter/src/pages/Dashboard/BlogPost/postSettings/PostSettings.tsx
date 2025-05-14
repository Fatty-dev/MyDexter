import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import SettingsMenu from "./SettingsMenu";
import CoreSettings from "./menus/CoreSettings";
import DetailsToInclude from "./menus/DetailsToInclude";
import MediaHub from "./menus/MediaHub";
import Seo from "./menus/Seo";
import Structure from "./menus/Structure";
import InternalLinking from "./menus/InternalLinking";
import ConnectToWeb from "./menus/ConnectToWeb";
import OutlineEditor from "./menus/OutlineEditor";
import ExternalLinking from "./menus/ExternalLinking";
import Document from "./menus/Document";
import Publication from "./menus/Publication";
import { useFormContext } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const PostSettings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleSubmit, watch } = useFormContext();
  const formData = watch(); // Watch the current form state

  // Get the active setting from the URL or default to 0
  const initialSetting = searchParams.get("tag")
    ? Number(searchParams.get("tag"))
    : 0;
  const [selectedSetting, setSelectedSetting] = useState(initialSetting);

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  // Update the URL when the selected setting changes
  const handleSelectSetting = (id: number) => {
    setSelectedSetting(id);
    // @ts-ignore
    setSearchParams({ tag: id });
  };

  const components = {
    0: <CoreSettings />,
    1: <DetailsToInclude />,
    2: <MediaHub />,
    3: <Seo />,
    4: <Structure />,
    5: <InternalLinking />,
    6: <ExternalLinking />,
    7: <ConnectToWeb />,
    8: <OutlineEditor formData={formData} />,
    9: <Document />,
    10: <Publication />,
  };

  return (
    <div className="w-[90%] mx-auto relative mt-[1.5rem]">
      <div className="flex items-center gap-2 mb-6">
        <RiHome6Line className="text-gray-500" />
        <h1 className="text-sm text-gray-500">Assistant</h1>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-sm text-gray-500">Post settings</p>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <FaArrowLeft
          className="text-sm cursor-pointer text-gray-500"
          onClick={() => window.history.back()}
        />
        <span className="text-[#6c7685] font-semibold">Back</span>
      </div>
      <div className="flex items-center justify-between pb-2">
        <h1 className="text-[#131c2e] text-3xl font-bold tracking-wide">
          Post Settings
        </h1>
        <div className="flex items-center gap-4 pb-3">
          <div>
            <button className="bg-white px-4 py-2 shadow-lg border border-gray-300 text-[#697383] font-semibold rounded-lg">
              Cancel
            </button>
          </div>
          <div>
            <button
              onClick={handleSubmit(onSubmit)}
              className="text-white font-semibold flex gap-2 items-center bg-[#6d68fb] px-4 py-2 justify-center rounded-lg border border-gray-300"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-[#3a4151] pt-3 lg:flex md:flex lg:gap-12 md:gap-8 ">
        <SettingsMenu
          selectedSetting={selectedSetting}
          setSelectedSetting={handleSelectSetting}
        />
        {/* @ts-ignore */}
        {components[selectedSetting]}
      </div>
    </div>
  );
};

export default PostSettings;
