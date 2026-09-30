import { describe, expect, it } from "vitest";
import type { Night } from "../content/programme";
import {
	formatDate,
	formatDateRange,
	formatTimeRange,
	formatWeekday,
	getNightState,
	getSeasonStatus,
	localDate,
	nightEnd,
	splitDuration,
} from "./season";

const night = (date: string, start: string, end: string): Night => ({
	date,
	start,
	end,
	title: "",
	episode: "",
	tag: "",
});

const nights = [
	night("2025-09-22", "18:00", "22:00"),
	night("2025-09-23", "18:00", "00:00"),
	night("2025-09-24", "16:00", "22:00"),
];

const ist = (iso: string) => new Date(`${iso}+05:30`);

describe("getSeasonStatus", () => {
	it("is upcoming before the first curtain, counting to 6 PM IST", () => {
		const status = getSeasonStatus(nights, ist("2025-09-01T10:00:00"));
		expect(status).toEqual({
			phase: "upcoming",
			startsAt: ist("2025-09-22T18:00:00"),
		});
	});

	it("is live during a performance", () => {
		expect(getSeasonStatus(nights, ist("2025-09-22T19:30:00"))).toEqual({
			phase: "live",
			night: 0,
		});
	});

	it("keeps a past-midnight night live until it ends", () => {
		expect(getSeasonStatus(nights, ist("2025-09-23T23:59:00"))).toEqual({
			phase: "live",
			night: 1,
		});
		expect(getSeasonStatus(nights, ist("2025-09-24T00:00:00"))).toEqual({
			phase: "between",
			next: 2,
		});
	});

	it("points at the next night between performances", () => {
		expect(getSeasonStatus(nights, ist("2025-09-23T09:00:00"))).toEqual({
			phase: "between",
			next: 1,
		});
	});

	it("concludes after the final night", () => {
		expect(getSeasonStatus(nights, ist("2025-09-24T22:00:00"))).toEqual({
			phase: "concluded",
		});
	});
});

describe("getNightState", () => {
	it("marks earlier nights done and the current one live", () => {
		const status = { phase: "live", night: 1 } as const;
		expect([0, 1, 2].map((i) => getNightState(i, status))).toEqual([
			"done",
			"live",
			"scheduled",
		]);
	});

	it("leaves the whole programme neutral once the season concludes", () => {
		const status = { phase: "concluded" } as const;
		expect(getNightState(0, status)).toBe("scheduled");
	});
});

describe("formatting", () => {
	it("formats dates, weekdays and ranges", () => {
		expect(formatDate("2025-09-22")).toBe("22 Sept");
		expect(formatWeekday("2025-09-22")).toBe("Mon");
		expect(formatDateRange(nights)).toBe("22 Sept – 24 Sept");
	});

	it("formats time ranges within and across meridiems", () => {
		expect(formatTimeRange("18:00", "22:00")).toBe("6:00 – 10:00 PM");
		expect(formatTimeRange("18:00", "00:00")).toBe("6:00 PM – 12:00 AM");
		expect(formatTimeRange("09:30", "12:00")).toBe("9:30 AM – 12:00 PM");
	});

	it("resolves the calendar date in the event's time zone", () => {
		expect(localDate(new Date("2025-09-22T19:00:00Z"))).toBe("2025-09-23");
		expect(localDate(new Date("2025-09-22T18:00:00Z"))).toBe("2025-09-22");
	});

	it("rolls a midnight end into the next day", () => {
		expect(nightEnd(nights[1])).toEqual(ist("2025-09-24T00:00:00"));
	});

	it("splits a duration and clamps negatives", () => {
		expect(splitDuration(90_061_000)).toEqual({
			days: 1,
			hours: 1,
			minutes: 1,
			seconds: 1,
		});
		expect(splitDuration(-5)).toEqual({
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		});
	});
});
