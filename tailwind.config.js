/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'maincolor': '#301D29',
        
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        barlow: ["Barlow Condensed", "sans-serif"]
      },
      borderRadius:{
        'navButton': '8px'
      }
    }
    
  },
  plugins: [],
}



