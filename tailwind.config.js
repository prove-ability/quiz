/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "w-[200px]",
    {
      pattern: /w-[(100|200|300|400|500|600)px]/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
