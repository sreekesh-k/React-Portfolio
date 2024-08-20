/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0a0e1f",
        main: "#45b3e0",
      },
      fontFamily: {
        popins: "popins",
      },
    },
  },
  plugins: [],
};
