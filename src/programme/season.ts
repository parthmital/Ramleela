import { event } from "../content/event.ts";
import type { Night } from "../content/programme.ts";

const DAY_MS = 86_400_000;
const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"June",
	"July",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const at = (date: string, time: string) =>
	new Date(`${date}T${time}:00${event.timeZoneOffset}`);

export const nightStart = (night: Night) => at(night.date, night.start);

export const nightEnd = (night: Night) => {
	const end = at(night.date, night.end);
	return night.end <= night.start ? new Date(end.getTime() + DAY_MS) : end;
};

export type SeasonStatus =
	| { phase: "upcoming"; startsAt: Date }
	| { phase: "live"; night: number }
	| { phase: "between"; next: number }
	| { phase: "concluded" };

export function getSeasonStatus(
	nights: readonly Night[],
	now: Date,
): SeasonStatus {
	const t = now.getTime();
	if (nights.length === 0) return { phase: "concluded" };
	const first = nightStart(nights[0]);
	if (t < first.getTime()) return { phase: "upcoming", startsAt: first };
	for (let i = 0; i < nights.length; i++) {
		if (t < nightStart(nights[i]).getTime())
			return { phase: "between", next: i };
		if (t < nightEnd(nights[i]).getTime()) return { phase: "live", night: i };
	}
	return { phase: "concluded" };
}

export type NightState = "done" | "live" | "next" | "scheduled";

export function getNightState(index: number, status: SeasonStatus): NightState {
	switch (status.phase) {
		case "upcoming":
			return index === 0 ? "next" : "scheduled";
		case "live":
			if (index < status.night) return "done";
			return index === status.night ? "live" : "scheduled";
		case "between":
			if (index < status.next) return "done";
			return index === status.next ? "next" : "scheduled";
		case "concluded":
			return "scheduled";
	}
}

/** The event's local calendar date (YYYY-MM-DD) at `now`. */
export function localDate(now: Date) {
	const [, sign, h, m] = /([+-])(\d\d):(\d\d)/.exec(event.timeZoneOffset)!;
	const offsetMs =
		(sign === "-" ? -1 : 1) * (Number(h) * 60 + Number(m)) * 60_000;
	return new Date(now.getTime() + offsetMs).toISOString().slice(0, 10);
}

const parseDate = (date: string) => date.split("-").map(Number);

export function formatDate(date: string) {
	const [, month, day] = parseDate(date);
	return `${day} ${MONTHS[month - 1]}`;
}

export function formatWeekday(date: string) {
	const [year, month, day] = parseDate(date);
	return WEEKDAYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
}

export const formatDateRange = (nights: readonly Night[]) =>
	`${formatDate(nights[0].date)} – ${formatDate(nights[nights.length - 1].date)}`;

function clock(time: string) {
	const [h, m] = time.split(":").map(Number);
	return {
		text: `${h % 12 || 12}:${String(m).padStart(2, "0")}`,
		meridiem: h < 12 ? "AM" : "PM",
	};
}

export function formatTime(time: string) {
	const { text, meridiem } = clock(time);
	return `${text} ${meridiem}`;
}

export function formatTimeRange(start: string, end: string) {
	const a = clock(start);
	const b = clock(end);
	return a.meridiem === b.meridiem
		? `${a.text} – ${b.text} ${b.meridiem}`
		: `${a.text} ${a.meridiem} – ${b.text} ${b.meridiem}`;
}

export function splitDuration(ms: number) {
	const s = Math.max(0, Math.floor(ms / 1000));
	return {
		days: Math.floor(s / 86_400),
		hours: Math.floor((s % 86_400) / 3600),
		minutes: Math.floor((s % 3600) / 60),
		seconds: s % 60,
	};
}
