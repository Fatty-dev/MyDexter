import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/Dashboardcomp/DashboardLayout";
import LandingpageLayout from "./components/Landingpagecomp/LandingpageLayout";
import Prompt from "./pages/Prompt";
import ChatBubble from "./pages/ChatBubble";
import Signup from "./pages/Onboard/Signup";
import Login from "./pages/Onboard/Login";
import Gettingstarted from "./pages/LandingPage/Gettingstarted/Gettingstarted";
import Home from "./pages/LandingPage/Home/Home";
import FAQ from "./pages/LandingPage/FAQ/FAQ";
import Pricing from "./pages/LandingPage/Pricing/Pricing";
import Blog from "./pages/LandingPage/Blog/Blog";
import Privacy from "./pages/LandingPage/Privacy";
import BlogDetails from "./pages/LandingPage/Blog/BlogDetails";
import Settings from "./pages/Dashboard/Settings/Settings";
import Contact from "./pages/LandingPage/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingpageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="getting-started" element={<Gettingstarted />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Nested Routes under Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<Prompt />} />
          <Route path="chat/:chatId" element={<ChatBubble />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
