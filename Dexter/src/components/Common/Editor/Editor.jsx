import { EditorContent, useEditor } from "@tiptap/react";
import MenuBar from "./MenuBar";
import StarterKit from "@tiptap/starter-kit" 
import Heading from "@tiptap/extension-heading"
import { extensions } from "../../../constants/TipTapExtensions";


const Editor = ({ onDataChange, content, editable }) => {
  const editor = useEditor({
    editable,
    extensions: extensions,
    // [StarterKit.configure({

    // }), Heading.configure({
    //   HTMLAttributes: {
    //     class: "text-xl font-bold",
    //     levels: [2]
    //   }
    // })]

    content: content,
    editorProps: {
      attributes: {
        class:
          "  mt-7 outline-gray-400 p-5 ",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onDataChange(html);
    },
   
  });

  return (
    <div className="">
      {editable && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;