import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Image {
  url: string;
}

export function convertContentWithImages(
  content: string,
  images: Image[]
): string {
  let imageIndex = 0;

  return content.replace(/\[IMAGE:([^\]]+)\]/g, (_, altText: string) => {
    const image = images[imageIndex++];
    if (!image) return "";

    return `<img src="${image.url}" alt="${altText.trim()}" />`;
  });
}
