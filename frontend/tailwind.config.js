/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0a0e1f",
        main: "#45b3e0",
        dark: "#b5a1ff",
        light: "#5a4da3",
      },
      fontFamily: {
        popins: "popins",
        roboto: "roboto",
      },
      dropShadow: {
        glow: ["-10px 10px 5px #b5a1ff", "10px -10px 5px #5a4da3"],
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(-3%)",
            "animation-timing-function": "ease-in-out",
          },
          "50%": {
            transform: "translateY(0%)",
            "animation-timing-function": "ease-in-out",
          },
        },
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        glow: {
          "0%, 20%, 40%, 55%, 90%, 100%": {
            filter: "brightness(100%)",
            opacity: "1",
          },
          "10%, 45%, 92%": {
            opacity: "0",
          },
        },
        spinAndBlink: {
          "0%": {
            transform: "rotateY(0deg)",
            opacity: "1",
          },
          "10%": {
            transform: "rotateY(360deg)",
            opacity: "1",
          },
          "95%": {
            opacity: "1",
          },
          "97%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        wave: {
          "0%": {
            transform: "translateY(0) translateX(0) rotate(0deg)",
          },
          "20%": {
            transform: "translateY(-5%) translateX(2%) rotate(-5deg)",
          },
          "40%": {
            transform: "translateY(0) translateX(6%) rotate(0deg)",
          },
          "60%": {
            transform: "translateY(5%) translateX(4%) rotate(5deg)",
          },
          "80%": {
            transform: "translateY(2%) translateX(-1%) rotate(2deg)",
          },
          "100%": {
            transform: "translateY(0) translateX(0) rotate(0deg)",
          },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        spin: "spin 6s linear infinite",
        glow: "glow 3s linear infinite",
        spinAndBlink: "spinAndBlink 10s ease-in-out infinite",
        wave: "wave 4s linear infinite",
      },
    },
  },
  plugins: [],
};
