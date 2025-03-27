/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lobster: ["Lobster", "sans-serif"],
    },
    extend: {
      animation: {
        runline: "runline 2s infinite",
      },

      keyframes: {
        runline: {
          "100%": {
            left: "100%",
          },
        },
      },
      colors: {
        dark_prime: "#151515",
        dark_text: "white",
        light_prime: "#e6e8ec",
        light_text: "#3c3341",
      },
      screens: {
        xs: "440px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
