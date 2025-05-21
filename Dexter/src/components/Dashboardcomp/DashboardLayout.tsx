import { Outlet, useSearchParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSidebar } from "../../lib/store/global.store";
import useUserInfo from "@/lib/hooks/useUserInfo";
import { useEffect } from "react";
import { useModal } from "@/lib/contexts/modal-context";
import ProModal from "../Common/Modals/ProModal";

const DashboardLayout = () => {
  const { expanded } = useSidebar();
  useUserInfo();

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const { showModal } = useModal();

  useEffect(() => {
    if (type === "pro") {
      showModal(<ProModal />);
    }
  }, [type, showModal]);

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
