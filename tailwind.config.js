const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: {
		content: ["./index.html", "./src/**/*.tsx", "./src/**/*.ts"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		cursor: {
			"n-resize": "n-resize",
			"e-resize": "e-resize",
			"s-resize": "s-resize",
			"w-resize": "w-resize",
		},
		extend: {
			margin: {
				"112": "30rem",
				"124": "40rem",
			},
			fontFamily: {
				jaapokkisub: ["JaapokkiSubtract", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
