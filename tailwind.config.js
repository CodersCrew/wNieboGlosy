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
			primary: '#0A1A2E',
			arrow: '#A4B7EF',
			'bgPrimary': '#E5E5E5',
			'bgSecondary': '#ECF2FF',
			border: '#1A355F',
			'gradientTop': '#f7faff',
			'gradientBottom': '#e6ebfe',
		},
	},
};
