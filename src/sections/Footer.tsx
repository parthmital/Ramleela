import { Icon } from "../components/Icon";
import { event } from "../content/event";
import { programme } from "../content/programme";
import { sectionIds } from "../content/sections";
import { formatDateRange } from "../programme/season";
import "./Footer.css";

const base = import.meta.env.BASE_URL;
const { youtube, email, whatsapp, upi } = event.contact;

const channels = [
	{
		icon: "YouTube.svg",
		label: "YouTube",
		value: youtube.handle,
		href: youtube.url,
		external: true,
	},
	{
		icon: "Gmail.svg",
		label: "Email",
		value: email,
		href: `mailto:${email}`,
		external: false,
	},
	{
		icon: "WhatsApp.svg",
		label: "WhatsApp",
		value: whatsapp.display,
		href: `https://wa.me/${whatsapp.number}`,
		external: true,
	},
	{
		icon: "GPay.svg",
		label: "Donate via UPI",
		value: upi.id,
		href: `upi://pay?pa=${upi.id}&pn=${upi.payee}`,
		external: false,
	},
];

export function Footer() {
	return (
		<footer
			id={sectionIds.contact}
			className="site-footer"
			aria-labelledby="contact-title"
		>
			<div className="container site-footer__grid">
				<div className="site-footer__brand">
					<p className="site-footer__name">
						<Icon name="crown" size={24} />
						{event.name}
					</p>
					<p className="site-footer__organiser">
						Organised by the {event.organiser} since {event.foundedYear}.
					</p>
				</div>

				<div>
					<h2 className="overline site-footer__heading">Visit</h2>
					<ul className="site-footer__list">
						<li>
							<Icon name="pin" size={18} />
							<a
								className="text-link"
								href={event.venue.mapUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{event.venue.name}
								<span className="visually-hidden"> (opens map)</span>
							</a>
						</li>
						<li>
							<Icon name="calendar" size={18} />
							<span>
								{formatDateRange(programme)} {event.season}
							</span>
						</li>
						<li>
							<Icon name="ticket" size={18} />
							<span>Free entry for all</span>
						</li>
					</ul>
				</div>

				<div>
					<h2 id="contact-title" className="overline site-footer__heading">
						Contact & support
					</h2>
					<ul className="site-footer__list">
						{channels.map((c) => (
							<li key={c.label}>
								<img
									src={`${base}Social/${c.icon}`}
									alt=""
									width={20}
									height={20}
								/>
								<a
									className="channel"
									href={c.href}
									{...(c.external && {
										target: "_blank",
										rel: "noopener noreferrer",
									})}
								>
									<span className="channel__label">{c.label}</span>
									<span className="channel__value">{c.value}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="container site-footer__legal">
				<p>
					© {event.season} {event.name}. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
