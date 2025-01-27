import { FiSend } from "react-icons/fi";
import { useState, useRef } from "react";
import { PiMagicWand } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import Loader from "../Common/Loader/Loader";
import { authApi } from "@/lib/config/axios-instance";
import { useSelectionStore } from "@/lib/store/global.store";

const BlogPostChat = ({ postId }) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { value, updateValue } = useSelectionStore();

  // Handle input change and auto-resize the textarea
  const handleInputChange = (e) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const editBlog = async (postId) => {
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

      updateValue("");
      toast.success("Blog post updated successfully!");
      reset();
    } catch (error) {
      toast.error("Error updating the blog post.");
    } finally {
      setLoading(false);
    }
  };

  // Reset function to clear the input field
  const reset = () => {
    setInput("");
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
  };

  return (
    <div className="flex justify-center px-4 mt-6 sm:px-6 md:px-8">
      <div className="flex items-center justify-between w-full md:w-[60%] lg:w-[80%] xl:w-[90%]  max-w-3xl mx-auto px-4 py-3 border bg-white border-gray-300 rounded-xl">
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
            <Loader /> // Show loader when sending
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
