/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#121212",
        "custom-neutral": "#161619",
      },
    },
  },
  plugins: [],
};
