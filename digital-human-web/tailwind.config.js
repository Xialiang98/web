/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',  // Blue color for buttons
        secondary: '#F3F4F6' // Light gray for secondary button
      }
    }
  },
  plugins: [],
}

