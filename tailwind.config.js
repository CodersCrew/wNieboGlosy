/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			cinzel: ['var(--font-cinzel)'],
			raleway: ['var(--font-raleway)'],
		},
		colors: {
			white: '#FFFFFF',
			'nav-white': '#F9FCFF',
			'dark-blue': '#0A1A2E',
			'medium-gray': '#2B394B',
			'light-blue': '#A4B7EF',
			'bg-primary': '#E5E5E5',
			'bg-secondary': '#ECF2FF',
			border: '#1A355F',
			'gradient-top': '#f7faff',
			'gradient-bottom': '#e6ebfe',
		},
	},
};
