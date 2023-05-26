/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      xsm: '500px',
      xxsm: '380px',
    },
  },
  plugins: [],
};
