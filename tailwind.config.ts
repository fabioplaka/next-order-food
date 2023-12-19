import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-slide-in-from-left":
          "fade-slide-in-from-left 1s ease-out forwards",
        "fade-slide-in-from-right":
          "fade-slide-in-from-right 1s ease-out forwards",
        "fade-slide-in-from-bottom":
          "fade-slide-in-from-bottom 1s ease-out forwards",
        flash: "flash 1s ease-in-out infinite alternate",
      },
    },
    keyframes: {
      "fade-slide-in-from-left": {
        "0%": {
          opacity: "0",
          transform: "translateX(-1rem)",
        },
        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      "fade-slide-in-from-right": {
        "0%": {
          opacity: "0",
          transform: " translateX(1rem)",
        },
        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      "fade-slide-in-from-bottom": {
        "0%": {
          opacity: "0",
          transform: "translateY(20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      flash: {
        "0%": {
          opacity: "0",
        },
        "50%": {
          opacity: "1",
        },
        "100%": {
          opacity: "0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
