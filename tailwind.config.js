/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				limeGreen: 'hsl(163, 72%, 41%)',
				brightRed: 'hsl(356, 69%, 56%)',
				facebook: 'hsl(208, 92%, 53%)',
				twitter: 'hsl(203, 89%, 53%)',
				toggle: 'hsl(230, 22%, 74%)',
				darkBlueBG: 'hsl(230, 17%, 14%)',
				darkBlueTopBG: 'hsl(232, 19%, 15%)',
				darkCardBG: 'hsl(228, 28%, 20%)',
				darkText: 'hsl(228, 34%, 66%)',
				lightBlueTopBG: 'hsl(227, 91%, 98%)',
				lightCardBG: 'hsl(227, 47%, 96%)',
				lightText: 'hsl(230, 12%, 44%)',
				lightTextDark: 'hsl(230, 17%, 14%)',
				hoverLightCard: 'hsl(228, 33%, 91%)',
				hoverDarkCard: 'hsl(228, 25%, 27%)'
			},
			backgroundImage: {
				toggleDarkGradient:
					'linear-gradient(225deg, #40DB82 0%, #388FE7 98.02%)',
				instagramGradient:
					'linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%)',
			},
		},
	},
	plugins: [],
}
