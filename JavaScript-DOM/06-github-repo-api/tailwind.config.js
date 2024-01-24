/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "Pacifico",
        satisfy: "Satisfy",
      },
    },
  },
  plugins: [],
};
