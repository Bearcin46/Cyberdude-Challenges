/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          'linear-gradient(105deg, rgba(0, 0, 0, 0.85), rgba(118, 0, 255, 0.75)), url("./assets/images/school.jpg");',
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
