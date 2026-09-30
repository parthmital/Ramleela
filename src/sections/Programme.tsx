import { Icon } from "../components/Icon";
import { SectionHeading } from "../components/SectionHeading";
import { event } from "../content/event";
import { programme } from "../content/programme";
import { sectionIds } from "../content/sections";
import { useNow } from "../hooks/useNow";
import {
	formatDate,
	formatTimeRange,
	formatWeekday,
	getNightState,
	getSeasonStatus,
	localDate,
	type NightState,
} from "../programme/season";
import "./Programme.css";

const stateLabel = (state: NightState, isToday: boolean) => {
	if (state === "live") return "On stage now";
	if (state === "next") return isToday ? "Tonight" : "Up next";
	return null;
};

export function Programme() {
	const now = useNow(30_000);
	const status = getSeasonStatus(programme, now);
	const today = localDate(now);

	return (
		<section
			id={sectionIds.programme}
			className="section programme-section"
			aria-labelledby="programme-title"
		>
			<div className="container">
				<SectionHeading
					id="programme-title"
					eyebrow={`Programme ${event.season}`}
					title={`${programme.length} nights of epic drama`}
					lede="Each evening brings a new chapter of the timeless Ramayana to life."
				/>
				<ol className="programme">
					{programme.map((night, i) => {
						const state = getNightState(i, status);
						const label = stateLabel(state, night.date === today);
						return (
							<li key={night.date} className="night" data-state={state}>
								<p className="night__number">
									<span className="visually-hidden">Night </span>
									{String(i + 1).padStart(2, "0")}
								</p>
								<p className="night__date">
									<span>{formatWeekday(night.date)}</span>{" "}
									{formatDate(night.date)}
								</p>
								<div className="night__story">
									{label && <p className="overline night__status">{label}</p>}
									<h3 className="night__title">{night.title}</h3>
									<p className="night__episode">{night.episode}</p>
								</div>
								<p className="night__time">
									<Icon name="clock" size={16} />
									{formatTimeRange(night.start, night.end)}
								</p>
								<p className="night__tag">{night.tag}</p>
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
}
