/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#6C63FF",
        'secondary': "#FF6C63",
        'tertiary': "#63FF6C",

      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Roboto-Slab': ['Roboto Slab', 'serif'],
      },
      maxWidth: {
        '500px': '500px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}