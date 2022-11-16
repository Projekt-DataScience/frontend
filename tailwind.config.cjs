/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': "#2697FF",
        'custom-gray-100': "#F8F8F8",
        'custom-gray-200': "#E7E9EB"
      },
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("prettier-plugin-tailwindcss")
  ],
};
