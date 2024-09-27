/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    animation: {
      'spin-slow': 'spin 4s linear infinite',
    },
    extend: {},
  },
  plugins: [],

}

