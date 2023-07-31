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
			primary: 'hsl(var(--color-primary))',
			secondary: 'hsl(var(--color-secondary))',
			tertiary: 'hsl(var(--color-tertiary))',
			error: 'hsl(var(--error))',
			neutral: 'hsl(var(--neutral))',
			neutralVariant: 'hsl(var(--neutral-variant))',
			success: 'hsl(var(--success))',
		},
	},
};
