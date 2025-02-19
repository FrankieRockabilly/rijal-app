/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hijau : "#34bf8c",
        biru : "#007c9d",
        littleBlue :"#a3eff7",
        warm : '#FFFAFA',
      },
      fontFamily :{
        'poppins' : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}