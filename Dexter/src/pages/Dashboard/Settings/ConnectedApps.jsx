import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa"; 
import shopify from "@/assets/shopify.svg";
import wordpress from "@/assets/wordpress.svg";
import wix from "@/assets/wix.svg";
import { authApi } from "@/lib/config/axios-instance";
import toast from "react-hot-toast";
import { useUserPlatformSiteStore } from "@/lib/store/global.store";

const apps = [
  {
    name: "Shopify",
    imgSrc: shopify,
    desc: "Upload blog posts directly to your Shopify account",
    platformKey: "shopify",
    endpoint: "auth/shopify",
    method: "POST",
  },
  {
    name: "Wordpress",
    imgSrc: wordpress,
    desc: "Upload blog posts directly to your Wordpress account",
    platformKey: "wordpress",
    endpoint: "auth/wordpress",
    method: "GET",
  },
  {
    name: "Wix",
    imgSrc: wix,
    desc: "Upload blog posts directly to your Wix account",
    platformKey: "wix",
    endpoint: "auth/wix",
    method: "GET",
  },
  {
    name: "Google",
    imgSrc: null, // No image source needed for react-icons
    desc: "Connect your Google account to access additional features",
    platformKey: "google",
    endpoint: "auth/google",
    method: "GET",
  },
];

const ConnectedApps = () => {
  const [loading, setLoading] = useState(false);
  const [activeApp, setActiveApp] = useState("");

  const { sites, setSite } = useUserPlatformSiteStore();

  
  console.log("Connected sites:", sites);


  const initiateAuth = async (app) => {
    const { endpoint, method, platformKey } = app;
    setLoading(true);
    setActiveApp(app.name);

    try {
      let response;
      if (method === "POST") {
        response = await authApi.post(endpoint, {
          store: "xktizw-ap.myshopify.com", 
        });
      } else {
        response = await authApi.get(endpoint);
      }

      console.log(response);
      setSite(platformKey); // Add connected platform to store
      window.location.href = response.data.data.redirectUrl;
    } catch (error) {
      console.error(`Error connecting to ${app.name}:`, error);
      toast(`Failed to connect to ${app.name}. Please try again.`);
    } finally {
      setLoading(false);
      setActiveApp("");
    }
  };

  return (
    <div className="bg-white max-md:mt-24 mb-8 shadow-md mt-4 rounded-lg p-6">
      <div>
        {apps.map((app, index) => (
          <div
            key={index}
            className="flex justify-between [&:not(:last-child)]:border-b p-6 text-[#85858d]"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {app.imgSrc ? (
                  <img src={app.imgSrc} alt={app.name} width={20} />
                ) : (
                  <FaGoogle size={20} color="#DB4437" /> 
                )}
                <span className="text-black">{app.name}</span>
              </div>
              <p>{app.desc}</p>
            </div>
            <button
              onClick={() => initiateAuth(app)}
              className={`border border-[#908dfc] w-[100px] rounded-lg p-2 h-[20%] text-[#908dfc] hover:bg-[#908dfc] hover:text-white transition-all duration-300 ${
                loading && activeApp === app.name ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={
                loading && activeApp === app.name || (Array.isArray(sites) && sites.includes(app.platformKey))
              }
            >
              {!!sites[app.platformKey]
                ? "Connected"
                : loading && activeApp === app.name
                ? "Loading..."
                : "Connect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectedApps;
