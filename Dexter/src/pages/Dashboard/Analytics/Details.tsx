import { IoIosInformationCircleOutline, IoMdClose } from "react-icons/io";
import { PiMagicWand } from "react-icons/pi";
import { scores } from "../../../lib/data";
import { useUserPlatformSiteStore } from "../../../lib/store/global.store";
import { useEffect, useState } from "react";
import { authApi } from "../../../lib/config/axios-instance";
import toast from "react-hot-toast";
import Metrics from "../../../components/Common/Metrics";

const metaData = {
  metaTitleData: {
    current:
      "5 Reasons Why Does Your Frenchie Pee on His Bed? - Best Dog Resources",
    recommendations: [
      "Shorten the title to within 50-60 characters for optimal display in SERPs.",
      "Consider placing the primary keyword 'Frenchie' early in the title for better visibility.",
      "Ensure clarity by removing unnecessary wording; focus on the main topic.",
    ],
  },
  metaDescriptionData: {
    current:
      "Does your French bulldog often pee on the bed even after taking them to the toilet and giving them treats as a reward? If you, like me, believe that dogs don't mess with where they sleep or eat, you are sadly mistaken. Like any other breed, Frenchies may exhibit certain behaviors that can be concerning.",
    recommendations: [
      "Reduce the length to 150-160 characters to avoid truncation in search results.",
      "Include the keyword 'French bulldog' earlier in the description for better SEO impact.",
      "Make the description more engaging by posing a question or offering a solution.",
    ],
  },
};

interface Props {
  showDetails: string;
  setShowDetails: (showDetails: string | null) => void;
}

export const Details = ({ showDetails, setShowDetails }: Props) => {
  const detailsToShow = scores.find(
    (item) => item.label.replace(/\s*Score$/, "") === showDetails
  );
  const { sites } = useUserPlatformSiteStore();

  const [isLoading, setIsLoading] = useState(false);
  const [analytics, setAnalytics] = useState(metaData); // Use the dataset here

  useEffect(() => {
    console.log("Sites object:", sites);

    const fetchAnalytics = async () => {
      setIsLoading(true);

      // @ts-ignore
      const siteId = sites["wordpress"]?.site?.siteId;

      if (!siteId) {
        console.error("siteId is not available");
        setIsLoading(false);
        return;
      }

      try {
        const response = await authApi.get(
          `./analytics?platform=wordpress&siteId=${siteId}`
        );
        setAnalytics(response.data.data.analytics);
      } catch (error) {
        console.error("Failed to fetch analytics", error);
        // Assuming you have a toast function for error notifications
        toast.error("Failed to fetch analytics");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [sites]);

  return (
    <div className="fixed inset-0 z-[2000] bg-black bg-opacity-60">
      <div className="lg:w-[23%] transition-all duration-300 absolute top-0 bottom-0 right-0 max-md:w-full max-md:top-12 md:w-[50%] bg-white p-4 overflow-y-scroll">
        <div className="flex items-center justify-between text-xl pb-4 border-b border-b-gray-300 text-[#2e3646] font-bold">
          <p>Details</p>
          <IoMdClose
            className="cursor-pointer"
            onClick={() => setShowDetails(null)}
          />
        </div>

        {detailsToShow && (
          <div className="bg-[#475467] p-4 rounded-lg mt-4">
            <Metrics
              metric={detailsToShow}
              className="relative left-8 bottom-16 text-white text-[20px]"
              spanColor="text-[#8c94a0] font-semibold text-[11px]"
            />
            <div className="flex items-center gap-2 text-white opacity-80">
              <IoIosInformationCircleOutline size={20} />
              <p className="text-sm">Good, but room for improvement</p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-[#f0f0ff] rounded-lg p-4">
            <h3 className="font-bold">Meta Title</h3>
            <p className="font-semibold">
              Current:{" "}
              <span className="text-[#6d68fb]">
                {analytics?.metaTitleData?.current}
              </span>
            </p>
            <h4 className="font-bold mt-2">Recommendations:</h4>
            <ul className="bg-[#e0e0ff] p-2 rounded-lg">
              {analytics?.metaTitleData?.recommendations.map((rec, index) => (
                <li key={index} className="text-sm">
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#f0f0ff] rounded-lg p-4">
            <h3 className="font-bold">Meta Description</h3>
            <p className="font-semibold">
              Current:{" "}
              <span className="text-[#6d68fb]">
                {analytics?.metaDescriptionData?.current}
              </span>
            </p>
            <h4 className="font-bold mt-2">Recommendations:</h4>
            <ul className="bg-[#e0e0ff] p-2 rounded-lg">
              {analytics?.metaDescriptionData?.recommendations.map(
                (rec, index) => (
                  <li key={index} className="text-sm">
                    {rec}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="fixed bottom-0 right-0 p-8 z-[1000] lg:w-[23%] md:w-[50%] max-md:w-full bg-white">
          <button className="text-white flex gap-2 whitespace-nowrap items-center w-full bg-[#6d68fb] max-md:justify-center md:justify-center text-sm p-3 rounded-md">
            <span className="">Generate SEO Optimization Strategy</span>
            <PiMagicWand className="text-white text-[15px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
