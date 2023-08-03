/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      cinzel: ['var(--font-cinzel)'],
      raleway: ['var(--font-raleway)']
    },
    colors: {
      arrow: '#A4B7EF',
      bg: {
        primary: '#E5E5E5',
        secondary: '#ECF2FF'
      },
      border: '#1A355F',
      gradient: {
        top: '#f7faff',
        bottom: '#e6ebfe'
      },
      primary: '#0A1A2E',
      white: '#FFFFFF',
      transparent: 'transparent'
    }
  }
};
