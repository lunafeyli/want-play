import type { NextPage } from "next";
import { Logo } from "~/assets/logo";
import {
	GithubLogo as GitHubIcon,
	Question as AboutIcon,
} from "phosphor-react";
import { styled } from "@styles";
import Link from "next/link";

const Home: NextPage = () => {
	const Header = styled("header", {
		width: "100vw",
		padding: "32px 48px",
		$flex: {
			dir: "row",
			justify: "space-between",
			align: "center",
		},

		svg: {
			color: "$white",
			height: 32,

			"&.logo": {
				height: 64,
			},
		},
	});

	return (
		<>
			<Header>
				<Link
					href={"https://github.com/pedrohsfontoura/want-play"}
					type="_blank"
				>
					<a>
						<GitHubIcon
							style={{ height: 24, width: 24 }}
							weight="fill"
						/>
					</a>
				</Link>
				<h1>
					<Logo />
				</h1>
				<AboutIcon style={{ height: 24, width: 24 }} weight="fill" />
			</Header>
		</>
	);
};

export default Home;
