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
				pink: '#E9DFDE',
				main: '#18233E',
				primary: '#445B64',
				secondary: '#74798E',
				tertiary: '#7F7171',
				gray: '#b1bcdb',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
