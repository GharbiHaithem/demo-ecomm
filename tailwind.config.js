/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tighter: '-.075em',
        tight: '-.05em',
        normal: '0',
        wide: '.05em',
        wider: '.1em',
        widest: '.25em',
      }
    },
  },
  plugins: [],
}