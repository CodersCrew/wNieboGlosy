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
        bg: {
          top: '#f7faff',
          bottom: '#e6ebfe'
        },
        header: {
          top: '#2A3665',
          middle: '#2A2D65',
          bottom: '#303D74'
        }
      },
      primary: '#0A1A2E',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent'
    },
    extend: {
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        97.5: '24.375rem'
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '4.5xl': '2.5rem',
        '6.5xl': '4rem'
      },
      opacity: {
        2: '0.02'
      }
    }
  }
};
