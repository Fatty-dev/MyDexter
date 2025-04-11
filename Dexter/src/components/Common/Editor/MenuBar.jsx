import { useCallback, useRef } from "react";
import {
  AiOutlineBold,
  AiOutlineClose,
  AiOutlineEnter,
  AiOutlineItalic,
  AiOutlineOrderedList,
  AiOutlineRedo,
  AiOutlineStrikethrough,
  AiOutlineUndo,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiParagraph } from "react-icons/bi";
import { MdOutlineLayersClear } from "react-icons/md";
import { TbSpacingVertical } from "react-icons/tb";
import { PiImageSquareBold } from "react-icons/pi";
import { authApi } from "@/lib/config/axios-instance";
import toast from "react-hot-toast";

const MenuBar = ({ editor, postId, content }) => {
  const fileInputRef = useRef(null);
  const uploadedImages = useRef([]); // Store uploaded images metadata

  const addImage = useCallback(() => {
    // Trigger the file input click
    fileInputRef.current.click();
  }, []);

  const handleFileChange = useCallback(
    async (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          // Prepare image metadata
          const imageMetadata = {
            name: file.name,
            size: file.size,
            type: file.type,
            src: reader.result, // Base64 URL
          };
  
          console.log({ file });
  
          // Upload the image to the server
          try {
            const formData = new FormData();
            formData.append("images", file);
            formData.append("content", content);
            formData.append("imagesMetadata", JSON.stringify([{ position: 1, altText: "A description of the image." }]));
  
            // Use backticks for template literals
            const response = await authApi.patch(
              `/blog/update?blogPostId=${postId}`,
              formData,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            );
  
            if (response.data.success) {
              const images = response.data.images; // Adjust based on actual response structure
              if (images && images.length > 0) {
                const imageUrl = images[0].url; // Assuming the first image is what you need
                uploadedImages.current.push(imageMetadata);
                editor.chain().focus().setImage({ src: imageUrl }).run();
              }
            } else {
              toast.error("Image upload failed.");
            }
          } catch (error) {
            toast.error("Error uploading image.");
            console.error(error); // Log the error for debugging
          }
        };
        reader.readAsDataURL(file);
      }
    },
    [editor, postId, content] // Ensure 'content' is included in dependencies
  );

  // const handleSave = async () => {
  //   // const content = editor.getHTML(); // Get the current content of the editor
  //   const images = uploadedImages.current; // Get the uploaded images metadata

  //   console.log({ images });

  //   try {
  //     const response = await authApi.patch(
  //       `/blog/update?blogPostId=${postId}`,
  //       {
  //         content,
  //         imageMetadata: images,
  //         images: images.map((image) => image.src), // Assuming you want to send the Base64 URLs as well
  //       }
  //     );

  //     if (response.data.success) {
  //       toast.success("Blog post updated successfully!");
  //     } else {
  //       toast.error("Failed to update the blog post.");
  //     }
  //   } catch (error) {
  //     toast.error("Error updating the blog post.");
  //   }
  // };

  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-lg py-3 px-3 bg-white z-50 border border-gray-300 flex gap-4 justify-between flex-wrap">
      {/* Undo */}
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="editor-btn"
      >
        <AiOutlineUndo />
      </button>

      {/* Redo */}
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="editor-btn"
      >
        <AiOutlineRedo />
      </button>

      {/* Heading (H1) */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`editor-btn font-black ${
          editor.isActive("heading", { level: 1 }) && "active-editor-btn"
        }`}
      >
        H1
      </button>

      {/* Italic */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`editor-btn ${
          editor.isActive("italic") && "active-editor-btn"
        }`}
      >
        <AiOutlineItalic />
      </button>

      {/* Bold */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`editor-btn ${
          editor.isActive("bold") && "active-editor-btn"
        }`}
      >
        <AiOutlineBold />
      </button>

      {/* Strikethrough */}
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`editor-btn ${
          editor.isActive("strike") && "active-editor-btn"
        }`}
      >
        <AiOutlineStrikethrough />
      </button>

      {/* Clear Formatting */}
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="editor-btn"
      >
        <MdOutlineLayersClear />
      </button>

      {/* Clear Nodes */}
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="editor-btn"
      >
        <AiOutlineClose />
      </button>

      {/* Paragraph */}
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`editor-btn ${
          editor.isActive("paragraph") && "active-editor-btn"
        }`}
      >
        <BiParagraph />
      </button>

      {/* Add Image */}
      <button onClick={addImage} className="editor-btn">
        <PiImageSquareBold />
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange} // Pass postId here
        style={{ display: "none" }} // Hide the file input
      />

      {/* Bullet List */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`editor-btn ${
          editor.isActive("bulletList") && "active-editor-btn"
        }`}
      >
        <AiOutlineUnorderedList />
      </button>

      {/* Ordered List */}
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`editor-btn ${
          editor.isActive("orderedList") && "active-editor-btn"
        }`}
      >
        <AiOutlineOrderedList />
      </button>

      {/* Horizontal Rule */}
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="editor-btn"
      >
        <TbSpacingVertical />
      </button>

      {/* Line Break */}
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="editor-btn"
      >
        <AiOutlineEnter />
      </button>
    </div>
  );
};

export default MenuBar;
