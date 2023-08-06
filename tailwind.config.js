/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '12px',
      base: '15px',
      l: '18px',
      xl: '24px',
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
