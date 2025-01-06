/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'yt-black': '#0F0F0F',
        'yt-gray': '#272727',
        'yt-light-gray': '#383838',
        'yt-text': '#F1F1F1',
        'yt-text-secondary': '#AAAAAA',
        'yt-red': '#FF0000',
        'yt-blue': '#3EA6FF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

