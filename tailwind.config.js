/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorLogo: "#333",
        colorSNav: "#3a4664",
        linkHover: "#7b03fc",
        primary: "#333",

      },
    },
  },
  plugins: [],
};
