/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        fhd: "1920px",
        "2k": "2240px",
        "4k": "3840px",
      },
      animation: {
        "loading-spin": "spin 0.5s ease-in infinite",
      },
    },
  },
  plugins: [],
};
