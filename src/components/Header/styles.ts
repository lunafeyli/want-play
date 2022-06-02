import { styled } from "@styles";

export const Header = styled("header", {
	width: "100vw",
	padding: "32px 48px",
	$flex: {
		dir: "row",
		justify: "space-between",
		align: "center",
	},
	color: "$white",

	svg: {
		color: "$white",
		height: 32,

		"&.logo": {
			height: 64,
		},
	},
});

export const Title = styled("h1", {
	$flex: {
		dir: "row",
		align: "center",
	},
	gap: 48,
	fontFamily: "Gloria Hallelujah",
	fontSize: 28,

	"&::before": {
		content: "",
		position: "absolute",
		display: "block",
		height: 8,
		width: 8,
		borderRadius: "50%",
		background: "var(--colors-white)",
		left: "50%",
	},
});
