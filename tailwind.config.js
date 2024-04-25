/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#293264",
        "primary-bg": "#F5F7FB",
        "secondary-bg": "#4D5B9E",
      },
    },
  },
  plugins: [],
};
