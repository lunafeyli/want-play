import React from "react";
import { Container } from "./styles";

export interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children?: React.ReactNode;
}

export const Button = ({ children, onClick }: ButtonProps) => {
	return <Container onClick={onClick}>{children}</Container>;
};
