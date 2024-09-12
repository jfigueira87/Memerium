//Agregue las rutas a todos los archivos de plantilla en su tailwind.config.js archivo.

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
        colorButton: '#D9D9D9',
        secondary: '#003340',
      },
      fontFamily:{
        mainFont:['Delius', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'), // Agrega Flowbite al array de plugins
  ],
}