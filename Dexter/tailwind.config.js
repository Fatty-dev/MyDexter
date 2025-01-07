/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JSX and TSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: " #6D68FB",
        secondary: "#7A8EAC",
        tetiary: "#344054",
        layer: "#F1F1FF",
        hover: "#F9FAFB",
      },

     
      container: {
        padding: "1rem",
        center: true,
      },
      container_none: {
        padding: "0",
      },
    },
  },
  plugins: [],
};
