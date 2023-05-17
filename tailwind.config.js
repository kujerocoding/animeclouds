/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#01140d',
        'secondary': '#f0fef9',
        'primary-btn': '#80e9fa',
        'secondary-btn': '#cedffd',
        'accent': '#1e6df6',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(250px, 1fr))',
        'characters': 'repeat(auto-fill, minmax(150px, 1fr))',
      }
    },
  },
  plugins: [],
}

