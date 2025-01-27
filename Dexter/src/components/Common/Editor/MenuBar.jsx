import { useCallback } from "react";
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

const MenuBar = ({ editor }) => {
  const addImage = useCallback(() => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

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
