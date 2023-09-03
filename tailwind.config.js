/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
 
    extend: {
      colors: {
       'Primary-Orange-100' :"#FF642F",     
       'Primary-Orange-200' :"#ee6e12",     
       'Primary-Orange-300' :"#",     
       'Secondary-Blue-100' :"#B7DCEF",     
       'Secondary-Blue-200' :"#",     
       'Secondary-Blue-300' :"#",     
       'Primary-Black-100' :"#0000",     
       'Primary-Black-200' :"#2D3748",     
       'Primary-Yellow-100' :"#FFB400",     
       'Primary-Yellow-200' :"#",     
       
      },
      fontFamily: {
        "poppins": "Poppins, sans-serif ",
        "pacifico": "Pacifico, sans-serif ",
      }
    },
  },
  plugins: [],
}