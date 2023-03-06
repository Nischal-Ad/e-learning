/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			fontFamily: {
				nunito: "'Nunito'",
				poppins: "'Poppins'",
				quicksand: "'Quicksand'",
			},
			colors: {
				secondary: '#5B5B5B',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
