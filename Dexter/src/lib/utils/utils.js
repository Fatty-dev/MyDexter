import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function convertContentWithImages(content, images) {
  let imageIndex = 0;

  return content.replace(/\[IMAGE:([^\]]+)\]/g, (_, altText) => {
    const image = images[imageIndex++];
    if (!image) return ""; // just in case

    return `<img src="${image.url}" alt="${altText.trim()}" />`;
  });
}
