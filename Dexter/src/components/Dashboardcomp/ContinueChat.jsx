import { FiSend } from "react-icons/fi";
import { useState, useRef } from "react";
import { PiMagicWand } from "react-icons/pi";

const ContinueChat = ({ addMessage }) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  // Handle input change and auto-resize the textarea
  const handleInputChange = (e) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  // Submit handler to call the chat function
  const handleSubmit = () => {
    if (input.trim()) {
      addMessage(input); // Add the message to the parent
      setInput(""); // Reset the input after sending
    }
  };

  return (
    <div className="mt-6 flex justify-center px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between w-full md:w-[70%] lg:w-full max-w-3xl mx-auto px-4 py-3 border bg-white border-gray-300 rounded-xl">
        <div className="flex items-center gap-2 flex-grow">
          <PiMagicWand size={22} className="text-secondary" />
          <textarea
            ref={textareaRef}
            aria-label="Ask Dexter a question"
            placeholder="Ask Dexter a question..."
            value={input}
            onChange={handleInputChange}
            className="flex-grow outline-none placeholder:text-sm text-secondary resize-none overflow-hidden h-[20px]"
            rows={1}
            maxLength={2000}
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-secondary text-xs">{input.length}/2000</p>
          <button
            className={input.trim() ? "text-primary" : "text-secondary"}
            onClick={handleSubmit}
          >
            <FiSend size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContinueChat;
