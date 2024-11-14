/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        md: '769px',
        xl2: '1395px'
      }
    }
  },
  plugins: []
}
