/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'leafGreen' : '#6bad23',
        'peach' : '#f4a383',
        'light-peach' : '#f5d7cb',
        'lightest-peach' : '#e8cabe',
        'dark-peach' : '#160200',
        'pink' : '#F14051',
        'light-pink' : '#F75161',
        'lightest-pink' : '#FF6D7B',
        'ucan-yellow' : '#f6a800',
        'ucan-red' : '#650707',
        'ucan-grey' : '#979797',
        'ucan-dark-grey' : '#353534',
      }
    },
  },
  plugins: [],
}