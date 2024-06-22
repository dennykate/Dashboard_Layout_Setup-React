/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fd7e14",
          100: "#ffe5d0",
          200: "#fecba1",
          300: "#feb272",
          400: "#fd9843",
          500: "#fd7e14",
          600: "#ca6510",
          700: "#984c0c",
          800: "#653208",
          900: "#331904",
        },
      },
    },
  },
  plugins: [],
};
