import { SectionHeading } from "../components/SectionHeading";
import { gallery } from "../content/gallery";
import { sectionIds } from "../content/sections";
import "./Gallery.css";

export function Gallery() {
	return (
		<section
			id={sectionIds.gallery}
			className="section section--dark"
			aria-labelledby="gallery-title"
		>
			<div className="container">
				<SectionHeading
					id="gallery-title"
					eyebrow="Gallery"
					title="Moments from past seasons"
					lede="Guests, dignitaries and the Samiti on the Chembur Ramleela stage."
				/>
				<ul className="gallery">
					{gallery.map((photo) => (
						<li key={photo.src} className="gallery__item">
							<img
								src={photo.src}
								alt={photo.alt}
								width={photo.width}
								height={photo.height}
								loading="lazy"
								decoding="async"
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
