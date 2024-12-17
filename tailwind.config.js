/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./data.json"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      },
      colors: {
        blue: '#5847EB',
        'light-red-work': '#FF8C66',
        'soft-blue': '#56C2E6',
        'light-red-study': '#FF5C7C',
        'lime-green': '#4ACF81',
        'violet': '#7536D3',
        'soft-orange': '#F1C65B',
        'very-dark-blue': '#0F1424',
        'dark-blue': '#1C1F4A',
        'desaturated-blue': '#6F76C8',
        'pale-blue': '#BDC1FF',
        'dark-purple': '#34397B'
      },
      screens: {
        xl: '1112px'
      }
    },
  },
  plugins: [],
}

