/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003049',
        'secondary': '#006d77',
        'accent': '#4caf50',
      },
    },
  },
  plugins: [],
}

