/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			accentOrange: '#D16C31',
			accentOrangeLight: '#F9A574',
			accentBlue: '#79AACD',
			accentBlueLight: '#BCDAF0',
			black: '#0C0B09',
			white: '#E6EAE1',
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			serif: ['Noto Serif', 'serif'],
		},
		extend: {
		},
	},
	plugins: [],
}
