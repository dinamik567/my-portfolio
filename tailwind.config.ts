/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      },
    },
  },
  plugins: [],
};
