import { styled } from "@styles";

export const Container = styled("div", {
	$flex: {
		align: "center",
	},
	gap: 12,
	padding: 16,
	background: "$main500",
	width: "fit-content",
	borderRadius: 12,
});

export const Image = styled("img", {
	height: 172,
	width: 256,
	objectFit: "cover",
	borderRadius: 12,
});

export const Name = styled("span", {
	color: "$white",
	fontSize: 18,
	fontWeight: "600",
});
