import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
	theme: {
		colors: {
			white: "#FCFAFF",
			main300: "#625676",
			main400: "#574D66",
			main500: "#463E51",
			main600: "#2C2735",
		},
	},
});

export const globalStyles = globalCss({
	"*, input, a": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},

	body: {
		background: "$main600",
	},
});
