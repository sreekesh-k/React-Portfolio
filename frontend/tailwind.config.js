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
    },
  },
  plugins: [],
};
