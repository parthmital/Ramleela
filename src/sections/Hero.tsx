import { Icon } from "../components/Icon";
import { event } from "../content/event";
import { programme } from "../content/programme";
import { sectionIds } from "../content/sections";
import { useNow } from "../hooks/useNow";
import {
	formatDate,
	formatDateRange,
	formatTime,
	formatTimeRange,
	formatWeekday,
	getSeasonStatus,
	localDate,
	splitDuration,
	type SeasonStatus,
} from "../programme/season";
import "./Hero.css";

const base = import.meta.env.BASE_URL;

export function Hero() {
	const now = useNow(1000);
	const status = getSeasonStatus(programme, now);

	return (
		<section id={sectionIds.home} className="hero" aria-labelledby="hero-title">
			<div className="container hero__grid">
				<div className="hero__copy">
					<p className="overline hero__presenter">{event.organiser} presents</p>
					<p className="hero__deva" lang="hi" aria-hidden="true">
						रामलीला
					</p>
					<h1 id="hero-title" className="hero__title">
						{event.name} <span className="hero__season">{event.season}</span>
					</h1>
					<p className="hero__tagline">
						Mumbai’s grandest Ramleela since {event.foundedYear}
					</p>

					<dl className="hero__facts">
						<div>
							<dt>
								<Icon name="calendar" size={16} />
								Dates
							</dt>
							<dd>{formatDateRange(programme)}</dd>
						</div>
						<div>
							<dt>
								<Icon name="pin" size={16} />
								Venue
							</dt>
							<dd>
								<a
									className="text-link"
									href={event.venue.mapUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									{event.venue.name}
									<span className="visually-hidden"> (opens map)</span>
								</a>
							</dd>
						</div>
						<div>
							<dt>
								<Icon name="ticket" size={16} />
								Entry
							</dt>
							<dd>Free, with daily prasad</dd>
						</div>
					</dl>

					<SeasonNotice status={status} now={now} />

					<a className="button hero__cta" href={`#${sectionIds.programme}`}>
						View the programme
						<Icon name="arrowRight" size={18} />
					</a>
				</div>

				<div className="hero__art">
					<div className="arch">
						<img
							src={`${base}Images/ram-darbar-640.webp`}
							srcSet={`${base}Images/ram-darbar-640.webp 640w, ${base}Images/ram-darbar.webp 1200w`}
							sizes="(min-width: 960px) 440px, 72vw"
							width={1200}
							height={1582}
							fetchPriority="high"
							alt="Ram Darbar painting: Rama and Sita enthroned, with Lakshmana, Bharata, Shatrughna and Hanuman"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function SeasonNotice({ status, now }: { status: SeasonStatus; now: Date }) {
	switch (status.phase) {
		case "upcoming": {
			const opening = programme[0];
			const parts = splitDuration(status.startsAt.getTime() - now.getTime());
			return (
				<div className="notice">
					<p className="overline notice__label">First curtain in</p>
					<div className="countdown" role="timer">
						{(
							[
								["days", parts.days],
								["hrs", parts.hours],
								["min", parts.minutes],
								["sec", parts.seconds],
							] as const
						).map(([unit, value]) => (
							<span key={unit} className="countdown__unit">
								<span className="countdown__value">
									{String(value).padStart(2, "0")}
								</span>
								<span className="countdown__name">{unit}</span>
							</span>
						))}
					</div>
					<p className="notice__detail">
						Opening night: {formatWeekday(opening.date)},{" "}
						{formatDate(opening.date)} at {formatTime(opening.start)}
					</p>
				</div>
			);
		}
		case "live": {
			const night = programme[status.night];
			return (
				<div className="notice">
					<p className="overline notice__label notice__label--live">
						On stage now
					</p>
					<p className="notice__headline">
						Night {status.night + 1}: {night.title}
					</p>
					<p className="notice__detail">
						{night.episode} · {formatTimeRange(night.start, night.end)}
					</p>
				</div>
			);
		}
		case "between": {
			const night = programme[status.next];
			const tonight = night.date === localDate(now);
			return (
				<div className="notice">
					<p className="overline notice__label">
						{tonight ? "Tonight" : "Up next"}
					</p>
					<p className="notice__headline">
						Night {status.next + 1}: {night.title}
					</p>
					<p className="notice__detail">
						{tonight
							? `Curtain at ${formatTime(night.start)}`
							: `${formatWeekday(night.date)}, ${formatDate(night.date)} at ${formatTime(night.start)}`}
					</p>
				</div>
			);
		}
		case "concluded":
			return (
				<div className="notice">
					<p className="overline notice__label">Season concluded</p>
					<p className="notice__detail">
						Thank you to everyone who joined us across {programme.length}{" "}
						nights.{" "}
						<a
							className="text-link"
							href={event.contact.youtube.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							Watch the performances on YouTube
							<Icon name="arrowUpRight" size={14} />
						</a>
					</p>
				</div>
			);
	}
}
