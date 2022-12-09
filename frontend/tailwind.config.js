/** @type {import('tailwindcss').Config} */
module.exports = {
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
				primary: '#FC9444',
				secondary: '#3C3C3C',
				Tertiary: '#EC340C',
				Quaternary: '#EC6C0C',
				dark: ' #808080',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
