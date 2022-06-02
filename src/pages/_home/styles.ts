import { styled } from "@styles";

export const Container = styled("div", {
	$flex: {
		align: "center",
	},
});

export const GamesList = styled("div", {
	display: "grid",
	gridTemplateColumns: "288px 288px 288px",
	justifyContent: "center",
	gap: 16,
});
