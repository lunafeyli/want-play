import { createStitches } from "@stitches/react";
import { Property } from "@stitches/react/types/css";

type Flex = {
	dir?: Property.FlexDirection;
	align?: Property.AlignItems;
	justify?: Property.JustifyContent;
	wrap?: Property.FlexWrap;
	fullCenter?: boolean;
};

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
	utils: {
		$flex: ({
			dir = "column",
			align = "flex-start",
			justify = "flex-start",
			wrap = "nowrap",
			fullCenter,
		}: Flex) => ({
			display: "flex",
			alignItems: fullCenter ? "center" : align,
			justifyContent: fullCenter ? "center" : justify,
			flexWrap: wrap,
			flexDirection: dir,
		}),
	},
});

export const globalStyles = globalCss({
	"@import":
		"url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Gloria+Hallelujah&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap')",
	"*, input, a": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		fontFamily: "Poppins",
	},

	body: {
		background: "$main600",
	},

	__next: {
		$flex: {
			align: "center",
		},
	},
});
