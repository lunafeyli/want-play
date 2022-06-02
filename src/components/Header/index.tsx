import Link from "next/link";
import {
	GithubLogo as GitHubIcon,
	Question as AboutIcon,
} from "phosphor-react";
import { Header as HeaderRoot, Title } from "./styles";
import { Logo } from "~/assets/logo";

export interface HeaderProps {
	gameName?: string;
}

export const Header = ({ gameName }: HeaderProps) => {
	return (
		<HeaderRoot>
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
			<Title css={{ "&::before": { opacity: gameName ? 1 : 0 } }}>
				<Logo />
				{gameName ? gameName : null}
			</Title>
			<AboutIcon style={{ height: 24, width: 24 }} weight="fill" />
		</HeaderRoot>
	);
};
