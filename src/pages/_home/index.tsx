import type { NextPage } from "next";
import { GamesList, Container } from "./styles";
import { Game, Header } from "~/components";

export const Home: NextPage = () => {
	return (
		<Container>
			<Header />
			<GamesList>
				<Game name="Typer" link="/typer" />
			</GamesList>
		</Container>
	);
};
