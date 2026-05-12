/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1677FF', // 对应设计稿蓝色
        warning: '#FA8C16', // 对应待确认状态色
      },
    },
  },
  plugins: [],
}
