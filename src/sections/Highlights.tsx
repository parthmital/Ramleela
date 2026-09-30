import { SectionHeading } from "../components/SectionHeading";
import { highlights } from "../content/highlights";
import { sectionIds } from "../content/sections";
import "./Highlights.css";

export function Highlights() {
	return (
		<section
			id={sectionIds.highlights}
			className="section section--kumkum"
			aria-labelledby="highlights-title"
		>
			<div className="container">
				<SectionHeading
					id="highlights-title"
					eyebrow="Highlights"
					title="What awaits you"
					lede="Everything that makes Chembur’s Ramleela a night out for the whole family."
				/>
				<ul className="highlights">
					{highlights.map((item) => (
						<li key={item.title} className="highlight">
							<p className="overline highlight__label">{item.label}</p>
							<h3 className="highlight__title">{item.title}</h3>
							<p className="highlight__text">{item.description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
