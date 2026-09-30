import "./SectionHeading.css";

export function SectionHeading({
	id,
	eyebrow,
	title,
	lede,
}: {
	id: string;
	eyebrow: string;
	title: string;
	lede?: string;
}) {
	return (
		<header className="section-heading">
			<p className="overline section-heading__eyebrow">{eyebrow}</p>
			<h2 id={id} className="section-heading__title">
				{title}
			</h2>
			{lede && <p className="section-heading__lede">{lede}</p>}
		</header>
	);
}
