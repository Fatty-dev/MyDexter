import { FiSend } from "react-icons/fi";
import { useState, useRef, type ChangeEvent } from "react";
import { PiMagicWand } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { authApi, publicApi } from "../../lib/config/axios-instance";
import { toast } from "sonner";
import Loader from "../Common/Loader/Loader";
import type { ChatSession, Message } from "@/lib/types/chat";
import { useAuthStore } from "@/lib/store/global.store";
import { ApiResponse } from "@/lib/types/api";

interface InputFieldProps {
  addMessage: (message: Message) => void;
  updateUsage: (usage: number, limit: number) => void;
}

const InputField: React.FC<InputFieldProps> = ({ addMessage, updateUsage }) => {
  const [input, setInput] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { chatId } = useParams<{ chatId?: string }>();

  const { accessToken } = useAuthStore();

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSubmit = async () => {
    if (input.trim()) {
      setLoading(true);
      try {
        if (chatId) {
          await chat({ message: input, chatId });
        } else {
          await publicChat({ message: input });
        }
      } finally {
        reset();
        setLoading(false);
      }
    }
  };

  const chat = async (params: { message: string; chatId: string }) => {
    try {
      const {
        data: { data },
      } = await authApi.post<ApiResponse<ChatSession>>("/chat/message", params);

      addMessage({
        id: Date.now(),
        content: params.message,
        role: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      addMessage({
        id: Date.now() + 1,
        content: data.latestMessage.content,
        role: "assistant",
        timestamp: new Date(data.latestMessage.timestamp).toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        ),
      });

      updateUsage(data.usage.dailyUsage, data.usage.dailyLimit);

      if (!chatId) {
        navigate(`/dashboard/chat/${data.chatId}`, { state: data });
      }
    } catch (error: any) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    }
  };

  const publicChat = async (params: { message: string }) => {
    const isLoggedIn = !!accessToken;

    try {
      const {
        data: { data },
      } = await (isLoggedIn ? authApi : publicApi).post<
        ApiResponse<ChatSession>
      >("/chat/message", params);

      addMessage({
        id: Date.now(),
        content: params.message,
        role: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      addMessage({
        id: Date.now() + 1,
        content: data.latestMessage.content,
        role: "assistant",
        timestamp: new Date(data.latestMessage.timestamp).toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        ),
      });

      updateUsage(data.usage.dailyUsage, data.usage.dailyLimit);

      if (!chatId) {
        navigate(`/dashboard/chat/${data.chatId}`, { state: data });
      }
    } catch (error: any) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      toast.error(errorMessage);
    }
  };

  const reset = () => {
    setInput("");
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
    }
  };

  return (
    <div className="flex justify-center px-4 mt-6 sm:px-6 md:px-8">
      <div className="flex items-center justify-between w-full md:w-[60%] lg:w-[80%] xl:w-[90%] max-w-3xl mx-auto px-4 py-3 border bg-white border-gray-300 rounded-xl">
        <div className="flex items-center flex-grow gap-2">
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
          <p className="text-xs text-secondary">{input.length}/2000</p>
          {loading ? (
            <Loader />
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
