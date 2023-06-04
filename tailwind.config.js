/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '480px',
			md: '673px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			body: ['"Fira Sans"'],
		},
		extend: {
			colors: {
				light: {},
				dark: {},
			},
			boxShadow: {
				sm: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
			},
		},
	},
	plugins: [],
};
