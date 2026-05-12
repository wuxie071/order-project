/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1677FF',
        warning: '#FA8C16',
        success: '#52C41A',
      },
    },
  },
  plugins: [],
}
