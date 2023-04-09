/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'theme_bg': '#24232C',
      'button_green': '#A4FFAF',
      'slider_bg': '#18171F',
    }
  },
  plugins: [],
}