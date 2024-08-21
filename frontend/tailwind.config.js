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
        glow: [
          "-10px 10px 5px #b5a1ff",
          "10px -10px 5px #5a4da3",
        ],
      },
    },
  },
  plugins: [],
};
