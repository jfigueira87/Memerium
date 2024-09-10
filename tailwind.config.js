/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E4F64',
        primarylight: '#3D697B',
        secondary: '#DDA23D',
      }
    },
  },
  plugins: [],
}