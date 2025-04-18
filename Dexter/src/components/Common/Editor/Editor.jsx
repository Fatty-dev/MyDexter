import { EditorContent, useEditor } from "@tiptap/react";
import MenuBar from "./MenuBar";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Image from "@tiptap/extension-image";
import { marked } from "marked";
import { useState, useRef, useEffect, useMemo } from "react";
import { useSelectionStore } from "@/lib/store/global.store";

const Editor = ({ onDataChange, content, editable, postId, image }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });
  const editorRef = useRef(null);
  const { updateValue } = useSelectionStore();

  // Parse content using marked
  const parsedContent = useMemo(() => {
    let htmlContent = marked(content);

    if (image) {
      const imgHTML = `<img src="${image.url}" alt="${image.altText}" />`;
      htmlContent = imgHTML + htmlContent;
    }

    return htmlContent;
  }, [content, image]);

  const editor = useEditor({
    editable,
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: "text-base my-3",
          },
        },
        blockquote: {
          HTMLAttributes: {
            class: "border-l-4 pl-4 italic text-gray-600",
          },
        },
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
        },
        levels: [1],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
      TableHeader,
      Image.configure({
        inline: true,
        HTMLAttributes: {
          class: "rounded",
        },
      }),
    ],
    content: parsedContent,
    editorProps: {
      handleDOMEvents: {
        focus: () => true, // Prevent scrolling to editor on focus
      },
      attributes: {
        class:
          "mt-7 p-5 bg-white space-y-5 rounded-lg focus:outline-none scroll-mt-20",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onDataChange(html);
    },
  });

  // Copy selected text handler
  const copySelectedText = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const selectedText = selection.toString();
    updateValue(selectedText);
  };

  // Handle text selection and show icon
  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setShowIcon(false);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const containerRect = editorRef.current.getBoundingClientRect();

    setIconPosition({
      top: rect.top - containerRect.top - 30,
      left: rect.left - containerRect.left + rect.width / 2 - 20,
    });

    setShowIcon(true);
  };

  useEffect(() => {
    document.addEventListener("selectionchange", handleTextSelection);
    return () => {
      document.removeEventListener("selectionchange", handleTextSelection);
    };
  }, []);

  // Prevent scroll jump when content is updated
  useEffect(() => {
    if (editor && editor.isEmpty) {
      editor.commands.setContent(parsedContent);
    }
  }, [editor]); 

  return (
    <div className="relative bg-white" ref={editorRef} style={{ scrollBehavior: "smooth" }}>
      {editable && (
        <div className="w-full sticky top-0 z-50 bg-white shadow">
          <MenuBar
            editor={editor}
            postId={postId}
            content={content}
            image={image}
          />
        </div>
      )}
      <div>
        <EditorContent editor={editor} />
      </div>

      {showIcon && (
        <button
          className="absolute bg-red-500 text-white p-2 rounded cursor-pointer"
          style={{
            top: `${iconPosition.top}px`,
            left: `${iconPosition.left}px`,
          }}
          onClick={copySelectedText}
        >
          📋
        </button>
      )}
    </div>
  );
};

export default Editor;
