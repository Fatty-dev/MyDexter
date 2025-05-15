import { useCallback, useRef, type ChangeEvent } from "react";
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
import { Editor as TiptapEditor } from "@tiptap/react";
import { authApi } from "@/lib/config/axios-instance";
import { toast } from "sonner";

type MenuBarProps = {
  editor: TiptapEditor | null;
  postId: string;
  content: string;
};

const MenuBar: React.FC<MenuBarProps> = ({ editor, postId, content }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadedImages = useRef<any[]>([]);

  const addImage = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onloadend = async () => {
        const imageMetadata = {
          name: file.name,
          size: file.size,
          type: file.type,
          src: reader.result,
        };

        try {
          const formData = new FormData();
          formData.append("images", file);
          formData.append("content", content);
          formData.append(
            "imagesMetadata",
            JSON.stringify([
              { position: 1, altText: "A description of the image." },
            ])
          );

          const {
            data: { data },
          } = await authApi.patch(
            `/blog/update?blogPostId=${postId}`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );

          const images = data.images;

          if (images && images.length > 0) {
            const imageUrl = images[0].url;
            uploadedImages.current.push(imageMetadata);
            editor?.chain().focus().setImage({ src: imageUrl }).run();
          }
        } catch (error) {
          toast.error("Error uploading image.");
          console.error(error);
        }
      };

      reader.readAsDataURL(file);
    },
    [editor, postId, content]
  );

  if (!editor) return null;

  return (
    <div className="rounded-lg py-3 px-3 bg-white z-50 border border-gray-300 flex gap-4 justify-between flex-wrap">
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="editor-btn"
      >
        <AiOutlineUndo />
      </button>

      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="editor-btn"
      >
        <AiOutlineRedo />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`editor-btn font-black ${
          editor.isActive("heading", { level: 1 }) ? "active-editor-btn" : ""
        }`}
      >
        H1
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`editor-btn ${
          editor.isActive("italic") ? "active-editor-btn" : ""
        }`}
      >
        <AiOutlineItalic />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`editor-btn ${
          editor.isActive("bold") ? "active-editor-btn" : ""
        }`}
      >
        <AiOutlineBold />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`editor-btn ${
          editor.isActive("strike") ? "active-editor-btn" : ""
        }`}
      >
        <AiOutlineStrikethrough />
      </button>

      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="editor-btn"
      >
        <MdOutlineLayersClear />
      </button>

      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="editor-btn"
      >
        <AiOutlineClose />
      </button>

      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`editor-btn ${
          editor.isActive("paragraph") ? "active-editor-btn" : ""
        }`}
      >
        <BiParagraph />
      </button>

      <button onClick={addImage} className="editor-btn">
        <PiImageSquareBold />
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`editor-btn ${
          editor.isActive("bulletList") ? "active-editor-btn" : ""
        }`}
      >
        <AiOutlineUnorderedList />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`editor-btn ${
          editor.isActive("orderedList") ? "active-editor-btn" : ""
        }`}
      >
        <AiOutlineOrderedList />
      </button>

      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="editor-btn"
      >
        <TbSpacingVertical />
      </button>

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
