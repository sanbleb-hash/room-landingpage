module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				spartan: ['spartn', 'sans-serif'],
			},
			letterSpacing: {
				widest: '.35em',
			},
			color: {
				backG: 'rgba(122, 116, 116, 0.2)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
