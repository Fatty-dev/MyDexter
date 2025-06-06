import vid from "@/assets/vid.png";
import { GoArrowRight } from "react-icons/go";

const topics = [
  {
    title: "Understand Basic Website Analytics",
    desc: "A simple guide to track key website metrics, giving insights to improve performance and visibility.",
  },
  {
    title: "Write a Blog Post",
    desc: "A useful, advice-filled article to help you write an engaging, SEO-friendly blog post.",
  },
  {
    title: "Master Keyword Research for Better SEO",
    desc: "A practical guide to finding the right keywords for your content, boosting both visibility and search rankings.",
  },
];

const Explore = () => {
  return (
    <div className="lg:pt-4 md:pt-4 lg:w-[40%] max-md:w-full md:w-full flex flex-col gap-4">
      <p className="text-[#575d68] text-sm">
        <span className="font-bold">Ready to explore?</span> Take the tour and
        see how it all works.
      </p>
      <img
        src={vid}
        alt="mockup"
        className="md:h-[250px] lg:h-[250px] object-cover"
      />

      <div className="lg:mt-4 md:mt-4">
        <p className="text-[#4f596b] font-bold mt-4">Related Topics</p>

        <div className="flex flex-col gap-4 mt-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="py-4 border-t border-t-gray-300 last-of-type:border-b border-b-gray-300"
            >
              <div className="">
                <div className="flex flex-col gap-2 ">
                  <p className="text-[#4f596b] font-bold">{topic.title}</p>
                  <div className="flex items-start justify-between">
                    <p className="text-[#8e9fb8] text-[10px] lg:w-[85%]  md:w-[85%]">
                      {topic.desc}
                    </p>
                    <GoArrowRight className="text-[16px]  text-[#8e9fb8] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
