/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor : "#65a675",
        headingColor: "#FFFFFF",
        smallTextColor: "#67b588",
        bgDarkColor: "#1b1e29",
        darkColor: "#283d3e"
      },
    },
  },
  plugins: [],
}

