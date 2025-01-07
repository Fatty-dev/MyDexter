import postImage from "../../assets/postImage.svg";
import { FaHandHolding} from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

export const metrics = [
  {
    label: "Organic Traffic",
    value: 250,
    max: 285,
    icon: <AiTwotoneLike />,
    badgeColor: "stroke-green-500",
  },
  {
    label: "Pages Per Session",
    value: 50,
    max: 100,
    icon: <FaHandHolding />,
    badgeColor: "stroke-yellow-500",
  },
  {
    label: "Bounce Rate",
    value: 11.3,
    max: 0,
    icon: <AiTwotoneDislike />,
    badgeColor: "stroke-red-500",
  },
  {
    label: "Average Page Position",
    value: 58,
    max: 100,
    icon: <FaHandHolding />,
    badgeColor: "stroke-yellow-500",
  },
  {
    label: "Crawl Errors",
    value: 50,
    max: 100,
    icon: <FaHandHolding />,
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
  { icon: "", title: "" },
];



export const postsData = [
  {
    id: 1,
    title: "The Ultimate Guide to Laundry: Tips, Tricks and Hacks",
    keywords: ["Cleaning products", "Supplies"],
    publishedDate: "2024-12-09",
    rating: 60,
    traffic: 5,
    image: postImage,
    content: "Our Eco-Friendly Water Bottle is made from 100% recyclable materials, ensuring that you can stay hydrated while helping the planet. It features a sleek, minimalist design and comes in a variety of colors to suit your personal style. Whether you're at the gym, in the office, or on the go, this bottle is the perfect companion to keep you refreshed. It holds up to 750ml and has a spill-proof cap to prevent leaks.",
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
    content: " Web development is rapidly evolving, with new technologies and trends emerging at a breakneck pace. As we head into 2025, the focus is shifting towards user experience and seamless integrations. Frameworks like React, Vue, and Angular are expected to dominate, but there's also growing interest in static site generators and serverless architectures. Developers will need to adapt to these changes by continuously learning and staying updated with the latest trends to stay competitive in the field.",
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
    content: "Our Eco-Friendly Water Bottle is made from 100% recyclable materials, ensuring that you can stay hydrated while helping the planet. It features a sleek, minimalist design and comes in a variety of colors to suit your personal style. Whether you're at the gym, in the office, or on the go, this bottle is the perfect companion to keep you refreshed. It holds up to 750ml and has a spill-proof cap to prevent leaks.",

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
    content: "Our Eco-Friendly Water Bottle is made from 100% recyclable materials, ensuring that you can stay hydrated while helping the planet. It features a sleek, minimalist design and comes in a variety of colors to suit your personal style. Whether you're at the gym, in the office, or on the go, this bottle is the perfect companion to keep you refreshed. It holds up to 750ml and has a spill-proof cap to prevent leaks.",

    rating: 38,
    traffic: 6,
    checked: false,
  },
];
