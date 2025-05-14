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
    imgSrc: null,
    desc: "Connect your Google account to access additional features",
    platformKey: "google",
    endpoint: "auth/google",
    method: "GET",
  },
];

const ConnectedApps = () => {
  const { sites } = useUserPlatformSiteStore();
  const [loading, setLoading] = useState(false);
  const [activeApp, setActiveApp] = useState("");
  const [shopifyStore, setShopifyStore] = useState("");

  const initiateAuth = async (app: any) => {
    const { endpoint, method, platformKey } = app;
    setLoading(true);
    setActiveApp(app.name);

    try {
      let response;
      let payload = {};

      if (platformKey === "shopify") {
        const storeLink = prompt(
          "Please enter your Shopify store link (e.g., your-store.myshopify.com):"
        );
        if (!storeLink) {
          throw new Error("Store link is required.");
        }
        payload = { store: storeLink };
      }

      if (method === "POST") {
        response = await authApi.post(endpoint, payload);
      } else {
        response = await authApi.get(endpoint);
      }

      console.log(response);
      // Assuming you have a function to handle site connection
      // setSite(platformKey);
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
        {apps.map((app, index) => {
          const connected = !!sites[app.platformKey];

          return (
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
                  loading && activeApp === app.name
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                } ${connected ? "bg-[#908dfc] text-white" : ""}`}
                disabled={loading && activeApp === app.name}
              >
                {connected
                  ? "Connected"
                  : loading && activeApp === app.name
                  ? "Loading..."
                  : "Connect"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectedApps;
