import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PublicWrapper from "../../lib/providers/public-wrapper";
import Cursor from "../Common/Cursor";

const LandingpageLayout = () => {
  return (
    <PublicWrapper>
      <Cursor/>
    <div className="container mx-auto flex flex-col min-h-screen">
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
