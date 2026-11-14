/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Mermaid & Markdown previewer_v0.9.html",
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
