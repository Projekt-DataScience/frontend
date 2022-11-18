/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': "#2697FF",
        'cl-bg-gray': "#F8F8F8",
        'custom-gray-200': "#E7E9EB",
        'cl': "#242B39",
        'cl-active' : '#E7E9EB'
      },
      spacing: {
        '18': '66px',
      }
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
