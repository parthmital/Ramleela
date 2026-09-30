import { useEffect } from "react";
import { About } from "./sections/About";
import { Footer } from "./sections/Footer";
import { Gallery } from "./sections/Gallery";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Highlights } from "./sections/Highlights";
import { Programme } from "./sections/Programme";

export default function App() {
	// The browser resolves the URL fragment before React renders; retry it
	// once web fonts have settled the layout.
	useEffect(() => {
		const id = decodeURIComponent(location.hash.slice(1));
		if (!id) return;
		document.fonts.ready.then(() =>
			document.getElementById(id)?.scrollIntoView({ behavior: "instant" }),
		);
	}, []);

	return (
		<>
			<a className="skip-link" href="#main">
				Skip to main content
			</a>
			<Header />
			<main id="main" tabIndex={-1}>
				<Hero />
				<About />
				<Highlights />
				<Programme />
				<Gallery />
			</main>
			<Footer />
		</>
	);
}
