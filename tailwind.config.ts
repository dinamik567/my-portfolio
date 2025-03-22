/** @type {import('tailwindcss').Config} */

import { COLORS } from "./src/default.settings";

const { DARK_PRIME } = COLORS;

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
        dark_prime: DARK_PRIME,
      },
    },
  },
  plugins: [],
};
