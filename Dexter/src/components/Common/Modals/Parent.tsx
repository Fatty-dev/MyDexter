import { useState } from "react";
import SuccessModal from "./SuccessModal";

const Parent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-indigo-600 text-white py-2 px-4 rounded-md"
      >
        Complete Subscription
      </button>
      <SuccessModal isOpen={modalOpen} handleClose={handleClose} />
    </div>
  );
};

export default Parent;
