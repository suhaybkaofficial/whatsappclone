/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryColor: "#212e35",
        whiteColor:"#e1fafa",
        greyColor:"#111b21",
        secondaryColor:"#005c4b",
        thirdColor:"#00a884",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
