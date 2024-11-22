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
        tetiary:"#344054",
        hover:"#F9FAFB"
       
      },
    },
  },
  plugins: [],
};
