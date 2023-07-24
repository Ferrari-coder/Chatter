/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '15px',
      base: '18px',
      xl: '100px',
    },
    extend: {
      colors: {
        'regal-blue': '#543EE0',
        'white': '#FFFFFF',
      },
      backgroundImage: {
        'heroImage': "url('/images/heroimg.png')",
      }
    },
  },
  plugins: [],
}
