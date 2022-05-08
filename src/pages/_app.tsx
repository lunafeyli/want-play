import { globalStyles } from "@styles";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();

	return (
		<>
			<Head>
				<title>Want Play?</title>
				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
