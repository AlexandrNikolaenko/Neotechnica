/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#55B0E4',
        'dark': '#292929',
        'dark-blue': '#082E4A',
        'light-blue': '#B6E9FF'
      },
      fontSize: {
        nametitle: '58px',
        title: '54px',
        subtitle: '24px',
        minititle: '20px',
        base: '18px'
      }
    },
  },
  plugins: [],
};
