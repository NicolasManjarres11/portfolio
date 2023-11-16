/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blackgray': '#E91313',
        'pruebafinal': '#D71B95'
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]
      }
    }
    
  },
  plugins: [],
}



