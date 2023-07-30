/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '340': '340px'
      },
      height: {
        '199': '199px'
      },
      colors: {
        'background-first': '#78AF8B',
        'background-second': '#4E8385',
        'background-third': '#B0D6BD',
      },
      letterSpacing: {
        'extra': '1px'
      }
    },
  },
  plugins: [],
}

