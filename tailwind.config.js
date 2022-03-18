// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        RobotoLight: ['Roboto-light', 'Arial', 'sans-serif'],
        RobotoRegular: ['Roboto-regular', 'Arial', 'sans-serif'],
        RobotoMedium: ['Roboto-medium', 'Arial', 'sans-serif'],

      },
      colors: {
        // status color
        'status-green': '#73c87b',
        'status-orange': '#f2c754',
        'status-red': '#e07e71',
        'status-black': '#49564a',
        // dark theme
        'dark-heavy': '#1d1d1f',
        'dark-medium': '#313133',
        'dark-light': '#4D4C4F',
        /// /dark theme text color
        Platinum: '#E3E3E4',
        // light background
        cultured: '#F5F6F6',
        Onyx: '#444444',
      },
      transformOrigin: { handWaving: '70% 70%' },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: { wiggle: 'wiggle 2.5s ease-in-out infinite' },
    },
  },
  plugins: [],
}
