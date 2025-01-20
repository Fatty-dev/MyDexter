import React from "react";
import shopify from "@/assets/shopify.svg";
import wordpress from "@/assets/wordpress.svg";
import wix from "@/assets/wix.svg";
const ConnectedApps = () => {
  const apps = [
   { name: "Shopify",
    imgSrc: shopify,
    desc: "Upload blog posts directly to your Shopify account"},
   { name: "Wordpress",
    imgSrc: wordpress,
    desc: "Upload blog posts directly to your Wordpress account"},
   { name: "Wix",
    imgSrc: wix,
    desc: "Upload blog posts directly to your Wix account"},

  ]
  return (
    <div className=" bg-white max-md:mt-24 mb-8 shadow-md mt-4 rounded-lg p-6">
      <div>
        {
          apps.map((app, index) => (
            
              <div  key = {index}  className="flex justify-between [&:not(:last-child)]:border-b  p-6 text-[#85858d]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img src={app.imgSrc} alt={app.name} width={20}/>
                  <span className=" text-black">{app.name}</span>
                </div>
                <p>{app.desc}</p>
              </div>
              <button className="border border-[#908dfc] w-[80px] rounded-lg p-2 h-[20%] text-[#908dfc]  hover:bg-[#908dfc] hover:text-gray-900 transition-all duration-300 ">
                Connect
              </button>
                      
                        </div>
                      
            
          ))
        }
      </div>
    

    </div>
  );
};

export default ConnectedApps;
