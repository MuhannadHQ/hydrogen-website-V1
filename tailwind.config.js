/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth:{
        "36":"150px"
      },
      minWidth:{
        "40":"15  0px"
      },
      minHeight:{
        "mid":"500px",
        "contact":"calc(100vh - 300px)"
      },
      maxHeight:{
        "500":"500px"
      },
      screens:{
        "2xl":"1440px",
        "xl":"1280px",
        "lg":"1080px",
        "md":"968px",
        "sm":"640px",
        "xs":"480px"
      },
      height:{
        "559":"559px",
      },
      width:{
        "menu":"calc(100% - 2px)",
        "196":"196px",
        "390":"390px",
        "350":"350px"
      },
      colors:{
        "primary": "var(--primary-color)",
        "secondary":"var(--secondary-color)",
        "linear-bg":"var(--linear-bg)",
        "primary-hover":"var(--primary-hover)",
      },
      background :{
        "linear-bg":"var(--linear-bg)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex:{
        "100":"100",
        "60":"60", 
      }
    },
  },
  plugins: [],
}
