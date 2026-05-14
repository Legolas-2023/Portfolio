/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ 
    "./*.html",
    "./js/**/*.js"],
  theme: {
    extend: {
      colors:{   
        color1: "#09142D",
        color2: "#3B5EED",
        color3: "#192951",
        color4: "#AAB1C1",
        color5: "#ffffff",
        color6: "#000000",
        color7: "#ff0000",
        color8: "#8BA1D9",
        rgbaBlack: "rgba(0, 0, 0, 0.9)",
        rgbaWhite: "rgba(255, 255, 255, 0.5)",
      },
      fontFamily:{
        robotoMono: ["Roboto Mono", "monospace"], 
        robotoSlab:["Roboto Slab", "serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      animation:{
        fadeIn: "fadeIn .5s ease-in-out",
        imagemLogo: "imagemLogo 20s linear infinite alternate",
        icone: "icone 5s 1s infinite alternate", 
        iconeD :"icone alternate",      
      },
      keyframes:{
        fadeIn:{
          "from": {opacity:"0"},
          "to" : {opacity: "1", visibility: "visible"},
        },
        imagemLogo:{
          "0%": {filter:"drop-shadow(0px 0px 0px var(--color5))",transform: "rotate(0deg)"},
          "25%": {filter:"drop-shadow(5px 5px 25px var(--color5))"},
          "100%": {filter: "drop-shadow(10px 10px 50px var(--color5))",transform: "rotate(360deg)"},
        },
        icone:{
          "0%": {opacity:"0"},
          "100%": {opacity:"1"},
        }
      },
      dropShadow:{
        "sm": "1px 1px 10px var(--color6)",
        "xs": "1px 1px 5px var(--color5)",
      },
      boxShadow:{
        "white":"1px 1px 20px var(--color5)",
        "dark":"1px 1px 20px var(--color1)",
      }
    },
  },
  plugins: [],
}

