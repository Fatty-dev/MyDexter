import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PublicWrapper from "../../lib/providers/public-wrapper";
import Cursor from "../Common/Cursor";
import Navbar from "./Navbar";

const LandingpageLayout = () => {
  return (
    <PublicWrapper>
      <Cursor />
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow mt-[2rem]">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </PublicWrapper>
  );
};

export default LandingpageLayout;
