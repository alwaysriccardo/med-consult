/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          '50': '#f0f4fa',
          '100': '#dce4f2',
          '800': '#0F2550',
          '900': '#0B1B3D',
        },
      },
    },
  },
  plugins: [],
}
