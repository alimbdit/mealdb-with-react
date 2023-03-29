/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f76c4a",
        
"secondary": "#59f2b7",
        
"accent": "#96dfe0",
        
"neutral": "#1A1A23",
        
"base-100": "#E8EAED",
        
"info": "#8EB9E6",
        
"success": "#55D890",
        
"warning": "#ED9735",
        
"error": "#E23C4F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

