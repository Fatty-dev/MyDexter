import { useState } from "react";
import ProLogo from "../../../assets/proLogo.svg";
import { RiCloseLine } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion";
import CheckoutModal from "./CheckoutModal";
import Modal from ".";
import { useModal } from "@/lib/contexts/modal-context";
import { opacityVariant } from "@/lib/utils/variants";
import useUserInfo from "@/lib/hooks/useUserInfo";
import { useNavigate } from "react-router-dom";
import { LoginModal } from "@/pages/Onboard/Login";

const freePlanFeatures = [
  "Up to 10 searches per day",
  "All SEO information",
  "All MyDexter chatbot features",
  "1-click automated blog post demo",
];

const proPlanFeatures = [
  "Up to 100 searches per day",
  "All SEO information",
  "All MyDexter chatbot features",
  "SEO Metric Analytics Overview",
  "1-click blog posting",
  "Bulk blog posting",
];

const ProModal = ({ onClose }: { onClose?: () => void }) => {
  const [openCheckout, setOpenCheckout] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  const OpenCheckoutHandler = () => {
    setOpenCheckout(true);
  };

  const navigate = useNavigate();

  const { hideModal, showModal } = useModal();

  const { user } = useUserInfo();

  return (
    <Modal {...opacityVariant} onClose={hideModal}>
      <motion.div
        // {...popupVariant}
        className={`bg-white rounded-lg shadow-lg w-[90%] max-w-3xl ${
          openCheckout ? "hidden" : ""
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end py-3 text-[#98A2B3] px-4">
          <button onClick={hideModal}>
            <RiCloseLine size={22} />
          </button>
        </div>

        {/* Header Section */}
        <div className="flex items-center justify-center px-6">
          <div className="flex items-center w-[12rem] space-x-2">
            <img src={ProLogo} alt="Pro Logo" />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 py-4 text-center">
          <h3 className="mb-2 text-2xl font-semibold">
            Sign Up to Pro for Smarter SEO and Faster Results
          </h3>
          <p className="mb-6 text-gray-600">
            Upgrade to MyDexter Pro for advanced SEO tools that automate tasks,
            deliver insights, and optimize your site. Save time, boost
            visibility, and grow your business with ease.
          </p>

          {/* Plans Section */}
          <div className="flex flex-col justify-between gap-6 px-6 py-4 md:flex-row">
            {/* Free Plan */}
            <div className="flex flex-col flex-1 p-4 border rounded-lg">
              <div className="flex items-center justify-between px-4 py-3 border rounded-lg bg-layer">
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold text-primary">Free</h3>
                  <p className="text-sm font-normal text-gray-600">Forever</p>
                </div>
              </div>
              <p className="text-[#7A8EAC] text-start text-sm my-4">
                What is included?
              </p>
              <ul className="flex-grow mb-6 space-y-2 text-left">
                {freePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <PiStarFourFill className="text-[#475467]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {!user ? (
                <button
                  className="mt-auto w-full py-2 border text-[#475467] rounded-lg font-semibold hover:bg-[#475467] hover:text-white"
                  onClick={() => (
                    navigate("/dashboard"), showModal(<LoginModal />)
                  )}
                >
                  Continue with Email
                </button>
              ) : (
                <button
                  className="mt-auto w-full py-2 border text-[#475467] rounded-lg font-semibold hover:bg-[#475467] hover:text-white"
                  onClick={() => (navigate("/dashboard"), hideModal())}
                >
                  New Chat
                </button>
              )}
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col flex-1 p-4 border rounded-lg">
              <div className="flex items-center justify-between px-4 py-3 border rounded-lg bg-layer">
                <div className="flex flex-col items-start">
                  <h3 className="text-2xl font-semibold text-primary">
                    Professional
                  </h3>
                  <p className="text-sm font-normal text-gray-600">
                    Start Free – No Card Needed
                  </p>
                </div>

                {/* Pricing Section */}
                <div className="flex flex-col items-end">
                  <p className="text-2xl font-semibold text-gray-900">$29</p>
                  <p className="text-sm text-gray-600">/month</p>
                </div>
              </div>
              <p className="text-[#7A8EAC] text-start text-sm my-4">
                What is included?
              </p>
              <ul className="flex-grow mb-6 space-y-2 text-left">
                {proPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <PiStarFourFill className="text-[#475467]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-2 mt-auto font-semibold text-white rounded-lg bg-primary hover:bg-primary"
                onClick={OpenCheckoutHandler}
              >
                Try Pro Free for 7 Days
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Conditionally render CheckoutModal */}
      {openCheckout && (
        <CheckoutModal onClose={() => (setOpenCheckout(false), onClose?.())} />
      )}
    </Modal>
  );
};

export default ProModal;
