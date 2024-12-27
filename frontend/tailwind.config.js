/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // HTML principal
    "./src/**/*.{jsx,js}", // Componentes e scripts React
  ],
  theme: {
    extend: {}, // Personalizações opcionais
  },
  plugins: [], // Adicione plugins como Tailwind Forms aqui, se necessário
};
