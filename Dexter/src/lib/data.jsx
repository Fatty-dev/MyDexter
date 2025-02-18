import postImage from "../assets/postImage.svg";
import { FaArrowDownLong } from "react-icons/fa6";
import { AiFillWarning } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { MdInfo, MdOutlineError } from "react-icons/md";
import happyIcon from "@/assets/happy.svg";
import neutralIcon from "@/assets/neutral.svg";
import optimize from "@/assets/optimize.svg";
import tap from "@/assets/tap.svg";
import like from "@/assets/like.svg";
import dislike from "@/assets/dislike.svg";
import hand from "@/assets/hand.svg";
import { CiCircleQuestion } from "react-icons/ci";
import { AiTwotoneLike } from "react-icons/ai";

export const metrics = [
  {
    label: "Organic Traffic",
    value: 250,
    max: 285,
    icon: (
      <img
        src={like}
        alt="like"
        className="size-5"
      />
    ),
    badgeColor: "stroke-green-500",
  },
  {
    label: "Pages Per Session",
    value: 50,
    max: 100,
    icon: (
      <img
        src={hand}
        alt="hand"
       
        className="size-8"
      />
    ),
    badgeColor: "stroke-yellow-500",
  },
  {
    label: "Bounce Rate",
    value: 11.3,
    max: 0,
    icon: (
      <img
        src={dislike}
        alt="dislike"
     
         className="size-5"
      />
    ),
    badgeColor: "stroke-red-500",
  },
  {
    label: "Avg. Page Position",
    value: 58,
    max: 100,
    icon: (
      <img
        src={hand}
        alt="hand"
        className="size-8"/>
    ),
    badgeColor: "stroke-yellow-500",
  },
  {
    label: "Crawl Errors",
    value: 50,
    max: 100,
    icon: (
      <img
        src={hand}
        alt="hand"
  className="size-8"
      />
    ),
    badgeColor: "stroke-yellow-500",
  },
];

export const tableHeaderTitleList = [
  { icon: <FaArrowDownLong />, title: "Post Title" },
  { title: "Keywords" },
  { icon: "", title: "" },

  { title: "Published Date" },

  { title: "Rating" },
  { icon: "", title: "" },
  { icon: "", title: "" },
]
 

export const postsData = [
  {
    id: 1,
    title: "The Ultimate Guide to Laundry: Tips, Tricks and Hacks",
    keywords: ["Cleaning products", "Supplies"],
    publishedDate: "2024-12-09",
    rating: 60,
    traffic: 5,
    image: postImage,
    content:
      "Our Eco-Friendly Water Bottle is made from 100% recyclable materials, ensuring that you can stay hydrated while helping the planet. It features a sleek, minimalist design and comes in a variety of colors to suit your personal style. Whether you're at the gym, in the office, or on the go, this bottle is the perfect companion to keep you refreshed. It holds up to 750ml and has a spill-proof cap to prevent leaks.",
    checked: true,
  },
  {
    id: 2,
    title: " The Future of Web Development in 2025",
    keywords: [
      "Cleaning products",
      "Supplies",
      "Laundry",
      "Detergent",
      "Fabric softener",
    ],
    content:
      " Web development is rapidly evolving, with new technologies and trends emerging at a breakneck pace. As we head into 2025, the focus is shifting towards user experience and seamless integrations. Frameworks like React, Vue, and Angular are expected to dominate, but there's also growing interest in static site generators and serverless architectures. Developers will need to adapt to these changes by continuously learning and staying updated with the latest trends to stay competitive in the field.",
    publishedDate: "2025-01-01",
    rating: 72,
    traffic: 4,
    image: postImage,
    checked: false,
  },
  {
    id: 3,
    title: "The Ultimate Guide to Laundry: Tips, Tricks and Hacks",
    keywords: ["Cleaning products", "Supplies", "Fabric softener"],
    publishedDate: "2024-05-12",
    image: postImage,
    rating: 78,
    traffic: 6,
    checked: true,
    content:
      "Our Eco-Friendly Water Bottle is made from 100% recyclable materials, ensuring that you can stay hydrated while helping the planet. It features a sleek, minimalist design and comes in a variety of colors to suit your personal style. Whether you're at the gym, in the office, or on the go, this bottle is the perfect companion to keep you refreshed. It holds up to 750ml and has a spill-proof cap to prevent leaks.",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Laundry: Tips, Tricks and Hacks",
    keywords: [
      "Cleaning products",
      "Supplies",
      "Laundry",
      "Detergent",
      "Fabric softener",
    ],
    publishedDate: "2024-08-12",
    image: postImage,
    content:
      "Our Eco-Friendly Water Bottle is made from 100% recyclable materials, ensuring that you can stay hydrated while helping the planet. It features a sleek, minimalist design and comes in a variety of colors to suit your personal style. Whether you're at the gym, in the office, or on the go, this bottle is the perfect companion to keep you refreshed. It holds up to 750ml and has a spill-proof cap to prevent leaks.",

    rating: 38,
    traffic: 6,
    checked: false,
  },
];

export const optimizationInsights = [
  {
    detail:
      "Several images are missing alt text. Add descriptive alt text to improve accessibility and boost your Optimization Score.",
    icon: <AiFillWarning />,
    type: "Warning",
  },
  {
    detail:
      "Some internal links are not using descriptive anchor text. Update anchor text to make content easier for search engines to understand.",
    icon: <FaCheckCircle />,
    type: "Success",
  },
  {
    detail:
      "Several images are missing alt text. Add descriptive alt text to improve accessibility and boost your Optimization Score.",
    icon: <MdOutlineError />,
    type: "Error",
  },
];

export const engagementInsights = [
  {
    detail: "Everything is in order",
    icon: <MdInfo />,
    type: "Info",
  },
];

export const optimizationMetrics = [
  // {
  //   label: "Total Keywords",
  //   imageSrc: like,
  //   value: 11300,
  //   max: 22500,
  //   radius: 8,
  //   strokeWidth: 2,
  //   textColor: "text-[#4a5566] font-[500]",
  //   ringSize: "size-12",
  //   toView: "Keywords",
  //   strokeColor: "#e4e7eb",
  //   ringFill: "white",
  //   desc: (
  //     <p className="text-[#6d7584]">
  //       our site ranks for <b>350 keywords</b>. This is a solid start, but
  //       expanding your keyword reach can attract more organic traffic.
  //     </p>
  //   ),
  //   action: (
  //     <span className="text-[11px] text-[#787f91] ">
  //       Target 10-15 new high-value keywords that align with your content to
  //       boost search visibility.
  //     </span>
  //   ),
  // },
  // {
  //   label: "Meta Tag Status",
  //   imageSrc: hand,
  //   value: 50,
  //   max: 100,
  //   radius: 8,
  //   strokeWidth: 2,
  //   textColor: "text-[#4a5566] font-[500]",
  //   ringSize: "size-12",
  //   toView: "Meta Tags",
  //   strokeColor: "#e4e7eb",
  //   ringFill: "white",
  //   desc: (
  //     <p className="text-[#6d7584]">
  //       Improving your Meta Tag Status can lead to higher click-through rates
  //       and better visibility in search results.
  //     </p>
  //   ),
  //   action: (
  //     <span className="text-[11px] text-[#787f91] ">
  //       {" "}
  //       Review and update your meta tags. Ensure each page has unique,
  //       keyword-rich titles and descriptions to improve search engine visibility
  //       and click-through rates. Learn more
  //     </span>
  //   ),
  // },

  {
    label: "Top Pages",
    imageSrc: dislike,
    value: 11300,
    max: 22500,
    radius: 8,
    strokeWidth: 2,
    textColor: "text-[#4a5566] font-[500]",
    ringSize: "size-12",
    toView: "Top Pages",
    strokeColor: "#e4e7eb",
    ringFill: "white",
    desc: (
      <p className="text-[#6d7584]">
        Optimizing your top pages ensures you’re getting the most value from
        your high-traffic content.
      </p>
    ),
    action: (
      <span className="text-[11px] text-[#787f91] ">
        Focus on enhancing your top-performing pages by adding engaging visuals,
        updating content for relevance, and linking to underperforming pages to
        distribute traffic and improve overall engagement.
      </span>
    ),
  },
];

export const engagementMetrics = [
  {
    label: "Page Visits",
    imageSrc: happyIcon,
  
    value: 5300,
    max: 22500,
    radius: 8,
    strokeWidth: 2,
    textColor: "text-[#4a5566] font-[500]",
    ringSize: "size-12",
    toView: "Traffic Details",
    strokeColor: "#e4e7eb",
    ringFill: "white",
    desc: (
      <p className="text-[#6d7584]">
        Optimizing your top pages ensures you’re getting the most value from
        your high-traffic content.
      </p>
    ),
    action: (
      <span className="text-[11px] text-[#787f91] ">
        Focus on enhancing your top-performing pages by adding engaging visuals,
        updating content for relevance, and linking to underperforming pages to
        distribute traffic and improve overall engagement.
      </span>
    ),
  },
  {
    label: "Avg. Visit Duration",
    imageSrc: neutralIcon,
    value: 1.2,
    max: "s",
    radius: 8,
    strokeWidth: 2,
    textColor: "text-[#4a5566] font-[500]",
    ringSize: "size-12",
    toView: "Engagement Stats",
    strokeColor: "#e4e7eb",
    ringFill: "white",
    desc: (
      <p className="text-[#6d7584]">
        Optimizing your top pages ensures you’re getting the most value from
        your high-traffic content.
      </p>
    ),
    action: (
      <span span className="text-[11px] text-[#787f91] ">
        Focus on enhancing your top-performing pages by adding engaging visuals,
        updating content for relevance, and linking to underperforming pages to
        distribute traffic and improve overall engagement.
      </span>
    ),
  },

  {
    label: "Bounce Rate",
    imageSrc: neutralIcon,
    value: 41,
    max: 100,
    radius: 8,
    strokeWidth: 2,
    textColor: "text-[#4a5566] font-[500]",
    ringSize: "size-12",
    toView: "Bounce Rate Insights",
    strokeColor: "#e4e7eb",
    ringFill: "white",
    desc: (
      <p className="text-[#6d7584]">
        Optimizing your top pages ensures you’re getting the most value from
        your high-traffic content.
      </p>
    ),
    action: (
      <span span className="text-[11px] text-[#787f91] ">
        Focus on enhancing your top-performing pages by adding engaging visuals,
        updating content for relevance, and linking to underperforming pages to
        distribute traffic and improve overall engagement.
      </span>
    ),
  },
];

export const scores = [
  {
    label: "Domain Optimization Score",
    imageSrc:optimize,
    value: 87,
    max: 100,
    radius: 8,
    strokeWidth: 2,
    textColor: "text-white",
    ringSize: "size-20",
  },
  {
    label: "Website Engagement Score",
    imageSrc: tap,
    value: 41,
    max: 100,
    radius: 8,
    strokeWidth: 2,
    textColor: "text-white",
    ringSize: "size-20",
  },
];

// Post Settings

export const menuList = [
  { name: "Core settings", id: 0 },
  {
    name: "Detail to include",
    id: 1,
    icon: <CiCircleQuestion className="cursor-pointer text-[15px]" />,
  },
  { name: "Media hub", id: 2 },
  { name: "SEO", id: 3 },
  { name: "Structure", id: 4 },
  { name: "Internal linking", id: 5 },
  { name: "External linking", id: 6 },
  { name: "Connect to web", id: 7 },
  { name: "Outline editor", id: 8 },
  { name: "Document", id: 9 },
  { name: "Publication", id: 10 },
];
