/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    ],
    mode: 'jit',
    purge: [
      './src/**/*.{js,ts,jsx,tsx}'
    ],   
  theme: {
    extend: {},
  },
  plugins: [],
}
