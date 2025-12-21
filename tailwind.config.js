/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Google Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Enable all colors dynamically used in the component
  safelist: [
    {
      pattern: /(bg|text|border|from|to|ring)-(rose|amber|teal|purple|emerald|violet|cyan|slate|pink)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
}
