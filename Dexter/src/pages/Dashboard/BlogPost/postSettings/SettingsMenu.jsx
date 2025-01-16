import { menuList } from "@/lib/data";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const SettingsMenu = ({ selectedSetting, setSelectedSetting }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSelectSetting = (id) => {
    setSelectedSetting(id)
  }
  return (
    <div className="relative ">
      <div className="max-md:hidden flex   flex-col  w-[16%]  md:w-[16%] ">
        {menuList.map((menu) => (
          <div
            key={menu.id}
            className={`${menu.icon ? "flex gap-3 items-center" : "block"} ${
              menu.id === selectedSetting
                ? "text-[#7a75fb] font-semibold bg-[#e7e6fe]"
                : ""
            } hover:bg-[#e7e6fe] hover:text-[#7a75fb] hover:font-semibold   p-2 w-[150px] mt-2 rounded-lg cursor-pointer `}
            onClick={() => setSelectedSetting(menu.id)}
          >
            <p>{menu.name}</p>
            {menu.icon && menu.icon}
          </div>
        ))}
      </div>

      {/* {openSidebar && (
        <div className="p-4  w-full lg:hidden md:hidden flex flex-col items-center text-center right-0  bg-white max-md:z-[1000000] h-screen">
          {menuList.map((menu) => (
            <div
              key={menu.id}
              className={`${menu.icon ? "flex gap-3 items-center" : "block"} ${
                menu.id === selectedSetting
                  ? "text-[#7a75fb] font-semibold bg-[#e7e6fe]"
                  : ""
              } hover:bg-[#e7e6fe] hover:text-[#7a75fb] hover:font-semibold  p-2 w-[150px] mt-2 rounded-lg cursor-pointer `}
              onClick={() => {
                setSelectedSetting(menu.id);
                setOpenSidebar(false);
              }}
            >
              <p>{menu.name}</p>
              {menu.icon && menu.icon}
            </div>
          ))}
     
        </div>
      )}
          {!openSidebar ? (
        <RiMenu3Line
          onClick={() => setOpenSidebar(!openSidebar)}
          className="absolute cursor-pointer right-2 top-1 lg:hidden md:hidden"
          size={22}
        />
      ) : (
        <RiCloseLine
          className="absolute right-2 top-1 z-[1000000] text-[20px] cursor-pointer lg:hidden md:hidden"
          size={22}
          onClick={() => setOpenSidebar(!openSidebar)}
        />
      )} */}

      <div className="w-[50%] p-2 absolute right-0   bg-white border rounded-lg lg:hidden md:hidden">
        <select name="menu" id=""
        className="w-full font-semibold text-purple-500 bg-transparent outline-none cursor-pointer"
            onChange={(e) => handleSelectSetting(e.target.value)} >
          {menuList.map((item) => (
            <option value={item.id} key={item.id} >{item.name}</option>
          ))}
        </select>
      </div>
 
    </div>
  );
};

export default SettingsMenu;
