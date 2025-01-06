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
import {PiImageSquareBold} from "react-icons/pi"

const MenuBar = ({ editor }) => {
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);
  if (!editor) {
    return null;
  }

  return (
    <div className=" rounded-lg p-5  bg-[#efefef] border border-gray-300 z-10 flex gap-5  flex-wrap">
        <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={`editor-btn`}
      >
        <AiOutlineUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={`editor-btn`}
      >
        <AiOutlineRedo />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`editor-btn font-black ${
          editor.isActive("heading", { level: 1 }) && "active-editor-btn"
        }`}
      >
        H1
      </button>
     
     
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`editor-btn ${
          editor.isActive("italic") && "active-editor-btn"
        }`}
      >
        <AiOutlineItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`editor-btn ${
          editor.isActive("strike") && "active-editor-btn"
        }`}
      >
        <AiOutlineStrikethrough />
      </button>
    
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={`editor-btn`}
      >
        <MdOutlineLayersClear />
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className={`editor-btn`}
      >
        <AiOutlineClose />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`editor-btn ${
          editor.isActive("paragraph") && "active-editor-btn"
        }`}
      >
        <BiParagraph />
      </button>

      <button onClick={addImage} className="editor-btn">
        <PiImageSquareBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`editor-btn ${
          editor.isActive("bulletList") && "active-editor-btn"
        }`}
      >
        <AiOutlineUnorderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`editor-btn ${
          editor.isActive("orderedList") && "active-editor-btn"
        }`}
      >
        <AiOutlineOrderedList />
      </button>
     
 
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={`editor-btn`}
      >
        <TbSpacingVertical />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={`editor-btn`}
      >
        <AiOutlineEnter />
      </button>
    
    </div>
  );
};

export default MenuBar;
