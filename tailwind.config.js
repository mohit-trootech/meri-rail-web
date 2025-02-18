/** @type {import('tailwindcss').Config} */
import { themes } from "./src/utils/contants";
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        tofro: {
          "0%": { transform: "translateX(-0.5rem)" },
          "50%": { transform: "translateX(0.5rem)" },
          "100%": { transform: "translateX(-0.5rem)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: themes,
  },
};
