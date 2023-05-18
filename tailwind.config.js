/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f9f2e2',
        'secondary': '#000',
        'secondary-300': '#333',
        'primary-btn': '#1d6df7',
        'secondary-btn': '#0d0a03',
        'accent': '#1d6df7',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(250px, 1fr))',
        'characters': 'repeat(auto-fill, minmax(120px, 1fr))',
      }
    },
  },
  plugins: [],
}

