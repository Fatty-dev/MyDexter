import { FiSend } from "react-icons/fi";
import { useState, useRef, type ChangeEvent } from "react";
import { PiMagicWand } from "react-icons/pi";

interface ContinueChatProps {
  addMessage: (message: string) => void;
}

const ContinueChat: React.FC<ContinueChatProps> = ({ addMessage }) => {
  const [input, setInput] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSubmit = () => {
    if (input.trim()) {
      addMessage(input);
      setInput("");
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
      }
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
