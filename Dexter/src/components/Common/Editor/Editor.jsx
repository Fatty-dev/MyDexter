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
import { useState, useRef, useEffect } from "react";
import { useSelectionStore } from "@/lib/store/global.store";

const Editor = ({ onDataChange, content, editable }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 });
  const editorRef = useRef(null);
  const selectionRef = useRef(null);

  // Parse content using `marked` (ensure input sanitization if content is external)
  const parsedContent = content ? marked(content) : "";

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
        levels: [1], // Only allow H2 headings
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
      attributes: {
        class: "mt-7 p-5 bg-white space-y-5 rounded-lg focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onDataChange(html);
    },
  });

  const { updateValue } = useSelectionStore();

  // Function to handle the copy action
  const copySelectedText = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    // Copy the selected text
    const selectedText = selection.toString();
    updateValue(selectedText);
  };

  // Function to show the copy icon when text is selected
  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setShowIcon(false); // Hide the icon if no text is selected
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const containerRect = editorRef.current.getBoundingClientRect();

    setIconPosition({
      top: rect.top - containerRect.top - 30, // Adjust position above the selection
      left: rect.left - containerRect.left + rect.width / 2 - 20, // Center above selected text
    });

    setShowIcon(true); // Show the copy icon
  };

  // Add event listener to track text selection
  useEffect(() => {
    document.addEventListener("selectionchange", handleTextSelection);

    return () => {
      document.removeEventListener("selectionchange", handleTextSelection);
    };
  }, []);

  return (
    <div className="relative bg-white" ref={editorRef}>
      {editable && (
        <div className="w-full sticky top-0 z-50 bg-white shadow">
          <MenuBar editor={editor} />
        </div>
      )}
      <div className="">
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
