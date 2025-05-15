import { Extension } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";

export const extensions = [
  Color.configure({
    types: [TextStyle.name, ListItem.name],
  }),

  TextStyle,

  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // marks not preserved with attrs: true
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),

  Dropcursor,
  Image,
];
