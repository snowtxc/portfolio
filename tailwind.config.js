/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
       colors: {
        'primary': '#495a80',
        'secondary': "#525151",
        'white': '#ffffff',
        'gray': '#e7e7e7',
        'black': '#0000',
        'grayDark': '#33333',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        
      },
     },
     variants: {
       extend: {},
     },
     
     plugins: [],
   
}

