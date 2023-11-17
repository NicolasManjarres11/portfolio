/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blackgray': '#E91313',
        'maincolor': '#301D29'
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]
      },
      borderRadius:{
        'navButton': '8px'
      }
    }
    
  },
  plugins: [],
}



