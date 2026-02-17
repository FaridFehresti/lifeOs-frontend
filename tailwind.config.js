/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fce4ec',
          100: '#f8bbd9',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          900: '#880e4f',
        },
        accent: {
          500: '#7c4dff',
          600: '#651fff',
          700: '#6200ea',
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Prevent conflicts with Angular Material
  },
}