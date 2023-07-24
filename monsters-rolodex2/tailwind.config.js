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
 
"primary": "#edadce",

 
"secondary": "#abfcf7",

"accent": "#5e3baa",
          

"neutral": "#1f2428",
 
"base-100": "#353c41",
  
"info": "#43a1e5",

"success": "#28af7f",

"warning": "#9e7f10",

"error": "#e73241",
          },
        },
      ],
    },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  
}
