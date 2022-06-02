import Link from "next/link";
import { Container, Image, Name } from "./styles";

export interface GameProps {
	name: string;
	link: string;
	image?: string;
}

export const Game = ({ name, link, image }: GameProps) => {
	return (
		<Link href={link || "/"}>
			<a style={{ textDecoration: "none" }}>
				<Container>
					<Image
						src={
							image ||
							`https://via.placeholder.com/256x172.png?text=${name.replaceAll(
								" ",
								"+"
							)}`
						}
					/>
					<Name>{name}</Name>
				</Container>
			</a>
		</Link>
	);
};
