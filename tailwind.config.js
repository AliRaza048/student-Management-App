/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "rgb(20, 21, 34)",
      blue: "#546FFF",
      gray: "#F5F5F7",
      white: "#FFFFFF",
      bluescrollbarcolor: "#C2C6E8",
      textColor: "rgb(84, 87, 122)",
    },
    fontFamily: {
      sidebarfontFamily: "Plus Jakarta Sans , sans-serif",
    },

    extend: {
      margin: {
        left: "258px",
      },
    },
  },
  plugins: [],
};
