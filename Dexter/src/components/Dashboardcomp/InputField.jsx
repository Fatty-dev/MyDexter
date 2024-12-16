import { FiSend } from "react-icons/fi";
import { useState, useRef } from "react";
import { PiMagicWand } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { authApi, publicApi } from "../../lib/config/axios-instance";
import toast from "react-hot-toast";
import Loader from "../Common/Loader/Loader";

const InputField = ({ addMessage, updateUsage }) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { chatId } = useParams();

  // Handle input change and auto-resize the textarea
  const handleInputChange = (e) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  // Submit handler to call the chat function
  const handleSubmit = async () => {
    if (input.trim()) {
      setLoading(true); 
      try {
        // Determine if it's a new chat or continuing a chat
        if (chatId) {
          await chat({ message: input, chatId }); // Pass message and chatId for continuing chat
        } else {
          await publicChat({ message: input }); // Use public API for new chat
        }
      } finally {
        reset();
        setLoading(false); // Set loading to false after sending the message
      }
    }
  };

  // Chat function to interact with the authenticated backend
  const chat = async (params) => {
    try {
      const { data } = await authApi.post("/chat/message", params);

      // Handle response: Update parent component with message and usage
      addMessage({
        id: new Date().getTime(), // Generate a unique ID
        text: params.message, // Outgoing message text
        sender: "outgoing",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });

      // Add the AI response
      addMessage({
        id: new Date().getTime() + 1, // Unique ID for the AI response
        text: data.data.latestMessage.content, // AI-generated response
        sender: "incoming",
        timestamp: new Date(data.data.latestMessage.timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      // Update daily usage and limit
      updateUsage(data.data.usage.dailyUsage, data.data.usage.dailyLimit);

      // For new chats, redirect to the chat page
      if (!chatId) {
        navigate(`/dashboard/chat/${data.data.chatId}`, { state: data.data });
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    }
  };

  // Chat function to interact with the public backend
  const publicChat = async (params) => {
    try {
      const { data } = await publicApi.post("/chat/message", params);

      // Handle response: Update parent component with message and usage
      addMessage({
        id: new Date().getTime(), // Generate a unique ID
        text: params.message, // Outgoing message text
        sender: "outgoing",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });

      // Add the AI response
      addMessage({
        id: new Date().getTime() + 1, // Unique ID for the AI response
        text: data.data.latestMessage.content, // AI-generated response
        sender: "incoming",
        timestamp: new Date(data.data.latestMessage.timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      // Update daily usage and limit
      updateUsage(data.data.usage.dailyUsage, data.data.usage.dailyLimit);

      // For new chats, redirect to the chat page
      if (!chatId) {
        navigate(`/dashboard/chat/${data.data.chatId}`, { state: data.data });
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    }
  };

  // Reset function to clear the input field
  const reset = () => {
    setInput("");
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
  };

  return (
    <div className="mt-6 flex justify-center px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between w-full md:w-[90%] lg:w-full max-w-3xl mx-auto px-4 py-3 border bg-white border-gray-300 rounded-xl">
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
          {loading ? (
            <Loader/> // Show loader when sending
          ) : (
            <button
              className={input.trim() ? "text-primary" : "text-secondary"}
              onClick={handleSubmit}
            >
              <FiSend size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;