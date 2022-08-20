import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="px-8 lg:px-24 xl:px-48 py-16">
			<nav className="text-2xl mb-16">
				<h1><b>Github</b>Jobs</h1>
			</nav>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
