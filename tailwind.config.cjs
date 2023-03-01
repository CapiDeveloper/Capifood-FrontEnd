/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
     extend: {
      colors: {
        primario: '#345EA8',
        primarioOscuro:'#27467C',
        secundario:'#F5F5F5',
        principal:'#484848',
        azul:'#0086F8',
        azulOscuro:'#005EAC'
      },
      backgroundImage:{
        'hero':"url('https://img.freepik.com/vector-premium/conjunto-comida-doodle_160308-239.jpg?w=2000')"
      }
     },
   },
   plugins: [],
 };