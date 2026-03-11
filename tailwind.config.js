/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          400: '#818cf8',
          500: '#667eea',
          600: '#5a67d8',
          900: '#1a202c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'blob': 'blob 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-ring': 'pulseRing 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
