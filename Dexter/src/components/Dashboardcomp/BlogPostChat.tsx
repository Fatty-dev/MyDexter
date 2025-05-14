import { FiSend } from "react-icons/fi";
import { useState, useRef, type ChangeEvent } from "react";
import { PiMagicWand } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Loader from "../Common/Loader/Loader";
import { authApi } from "@/lib/config/axios-instance";
import { useSelectionStore } from "@/lib/store/global.store";
import { toast } from "sonner";

interface BlogPostChatProps {
  postId: string;
  updateBody: (newContent: string) => void;
}

const BlogPostChat: React.FC<BlogPostChatProps> = ({ postId, updateBody }) => {
  const [input, setInput] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const { value, updateValue } = useSelectionStore();

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const editBlog = async (postId: string) => {
    if (!input.trim()) {
      toast.error("Please provide both the selected text and AI prompt.");
      return;
    }

    setLoading(true);

    try {
      const response = await authApi.patch(
        `/blog/update-section?blogPostId=${postId}`,
        {
          selectedText: value,
          AIPrompt: input,
        }
      );

      if (response.data.success) {
        updateBody(response.data.data.newContent);
        updateValue("");
        toast.success("Blog post updated successfully!");
        reset();
      } else {
        toast.error("Failed to update the blog post.");
      }
    } catch (error) {
      toast.error("Error updating the blog post.");
    } finally {
      setLoading(false);
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
              onClick={() => editBlog(postId)}
            >
              <FiSend size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostChat;
