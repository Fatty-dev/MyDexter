import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSidebar } from "../../lib/store/global.store";

const DashboardLayout = () => {
  const { expanded } = useSidebar();

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1">
        <Sidebar />

        <div
          className={`flex-grow duration-300 bg-[#F8F8F8]  ${
            expanded ? "md:ml-[15rem]" : "md:ml-16"
          } min-h-screen`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
