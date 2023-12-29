/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-banner":
          "linear-gradient(to right, rgb(0 0 0/0.5),rgb(0 0 0/0.2)),url('https://media.istockphoto.com/id/1446988377/photo/empty-cafe-interior-with-street-view.jpg?s=612x612&w=0&k=20&c=m6sopkPGhEAbBWGUHiorpun3bUPRm9ZeyP1y4sf_L7s=')",
        "middle-image":
          "linear-gradient(to right, rgb(0 0 0/0.5),rgb(0 0 0/0.2)),url('https://sprudge.com/wp-content/uploads/2015/01/Kuala-Lumpur-3littlebirds3-740x493.jpg')",
        "heromd-banner":
          "linear-gradient(to right, rgb(0 0 0/0.5),rgb(0 0 0/0.2)),url('https://i1.wp.com/kameatwithme.com/wp-content/uploads/2020/02/IMG_20200210_175838-scaled.jpg?fit=1024%2C768&ssl=1')",
      },
      fontFamily: {
        cursive: ["Dancing Script"],
      },
    },
  },
  plugins: [],
};
