/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(0, 0%, 89.8%)', // ⬅️ add your custom color here
        background: 'hsl(0, 0%, 3.9%)',
        foreground: 'hsl(0, 0%, 100%)'
      }
    }
  },
  plugins: [],
}

