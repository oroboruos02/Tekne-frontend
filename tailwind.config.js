/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlur: 'rgba(254,254,255,0.24)'
      }
    },
  },
  plugins: [],
}

