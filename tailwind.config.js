/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html"
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
