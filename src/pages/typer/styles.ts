import { styled } from "@styles";

export const Container = styled("div", {
	$flex: {
		align: "center",
	},
});

export const GameContainer = styled("div", {
	$flex: {
		align: "center",
	},
	width: "50%",
	marginTop: 32,
	gap: 16,
});

export const TextPreview = styled("p", {
	fontFamily: "Courier Prime",
	color: "#FCFAFF52",
	fontSize: 18,
});

export const TextInput = styled("input", {
	position: "absolute",
	opacity: 0,
});

export const Timer = styled("span", {
	color: "$white",
	alignSelf: "flex-end",
});

export const TextWrapper = styled("div", {
	position: "relative",
});

export const ActualText = styled("div", {
	position: "absolute",
	$flex: {
		wrap: "wrap",
		dir: "row",
	},

	"& > div": {
		height: 20,
		display: "flex",
	},
});

export const Char = styled("span", {
	fontFamily: "Courier Prime",
	fontSize: 18,
	width: 10.8,

	variants: {
		status: {
			right: { color: "green" },
			wrong: { color: "red" },
		},
	},
});
