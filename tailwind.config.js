/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'jbmono_normal': ['JetBrains Mono', 'sans-serif'],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'semidarkgrey': '#24232C',
      'darkgrey' : '#18171F',
      'green': '#A4FFAF',
      'grey': '#817D92',
      'lightgrey' : '#E6E5EA',
      'red': '#F64A4A',
      'orange': '#FB7C58',
      'yellow': '#F8CD65',
    }
  },
  plugins: [],
}