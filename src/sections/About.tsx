import { SectionHeading } from "../components/SectionHeading";
import { event, yearsRunning } from "../content/event";
import { stagePhoto } from "../content/gallery";
import { programme } from "../content/programme";
import { sectionIds } from "../content/sections";
import "./About.css";

const stats = [
	{ value: String(yearsRunning), label: "Years on stage" },
	{ value: "5,000+", label: "Attendees each night" },
	{ value: String(programme.length), label: "Nights of Ramayana" },
];

export function About() {
	return (
		<section
			id={sectionIds.about}
			className="section"
			aria-labelledby="about-title"
		>
			<div className="container about">
				<div className="about__copy">
					<SectionHeading
						id="about-title"
						eyebrow="Our story"
						title={`A legacy of tradition since ${event.foundedYear}`}
					/>
					<div className="about__body">
						<p>
							The Chembur Ramleela stands as Mumbai’s most prestigious and
							continuously held Ramleela, organised by the{" "}
							<strong>{event.organiser}</strong> for over three decades.
						</p>
						<p>
							What began as a humble community initiative has grown into a grand
							cultural spectacle that draws thousands of devotees and culture
							enthusiasts from across Mumbai and beyond.
						</p>
						<p>
							Our commitment to authenticity, combined with spectacular
							production values, has made this event the cornerstone of
							Chembur’s cultural calendar and a beacon of traditional Indian
							values in modern Mumbai.
						</p>
					</div>
					<dl className="about__stats">
						{stats.map((stat) => (
							<div key={stat.label}>
								<dt>{stat.label}</dt>
								<dd>{stat.value}</dd>
							</div>
						))}
					</dl>
				</div>

				<figure className="about__figure">
					<img
						src={stagePhoto.src}
						alt={stagePhoto.alt}
						width={stagePhoto.width}
						height={stagePhoto.height}
						loading="lazy"
						decoding="async"
					/>
					<figcaption>On stage at a past season</figcaption>
				</figure>
			</div>
		</section>
	);
}
