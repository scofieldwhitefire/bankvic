/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bankvic-blue': '#1a3b8e',
        'bankvic-orange': '#ff7a59',
      },
    },
  },
  plugins: [],
}