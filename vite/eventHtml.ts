import type { HtmlTagDescriptor, Plugin } from "vite";
import { event, eventTitle } from "../src/content/event";
import { programme } from "../src/content/programme";
import { formatDateRange } from "../src/programme/season";

// Static hosting cannot set response headers, so the policy ships as a meta
// tag. `frame-ancestors` is ignored in meta and must be set by the host.
// Build only: the dev server relies on inline scripts for hot reload.
export const contentSecurityPolicy = [
	"default-src 'self'",
	"script-src 'self'",
	"style-src 'self'",
	"img-src 'self' data:",
	"font-src 'self' data:",
	"connect-src 'self'",
	"object-src 'none'",
	"base-uri 'self'",
	"form-action 'none'",
	"upgrade-insecure-requests",
].join("; ");

const tokens: Record<string, string> = {
	EVENT_TITLE: eventTitle,
	EVENT_NAME: event.name,
	EVENT_DATES: formatDateRange(programme),
	EVENT_NIGHTS: String(programme.length),
	EVENT_VENUE: event.venue.name,
	EVENT_SINCE: String(event.foundedYear),
	SITE_URL: event.siteUrl,
};

export const structuredData = () => ({
	"@context": "https://schema.org",
	"@type": "Event",
	name: eventTitle,
	startDate: programme[0].date,
	endDate: programme[programme.length - 1].date,
	eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
	eventStatus: "https://schema.org/EventScheduled",
	isAccessibleForFree: true,
	location: {
		"@type": "Place",
		name: event.venue.name,
		address: {
			"@type": "PostalAddress",
			addressLocality: event.venue.locality,
			addressRegion: event.venue.region,
			addressCountry: event.venue.country,
		},
	},
	organizer: {
		"@type": "Organization",
		name: event.organiser,
		url: event.siteUrl,
	},
	image: [`${event.siteUrl}og.png`],
	description: `${eventTitle}: Mumbai’s grandest and continuously held Ramleela since ${event.foundedYear}.`,
});

/** Serialises JSON for an inline script without allowing `</script>` breakout. */
export const toInlineJson = (value: unknown) =>
	JSON.stringify(value)
		.replace(/</g, "\\u003c")
		.replace(/>/g, "\\u003e")
		.replace(/&/g, "\\u0026");

export function renderEventHtml(html: string, isBuild: boolean) {
	const rendered = html.replace(/%([A-Z_]+)%/g, (match, key: string) =>
		key in tokens ? tokens[key] : match,
	);
	const tags: HtmlTagDescriptor[] = [
		{
			tag: "script",
			attrs: { type: "application/ld+json" },
			children: toInlineJson(structuredData()),
			injectTo: "head",
		},
	];
	if (isBuild) {
		tags.unshift({
			tag: "meta",
			attrs: {
				"http-equiv": "Content-Security-Policy",
				content: contentSecurityPolicy,
			},
			injectTo: "head-prepend",
		});
	}
	return { html: rendered, tags };
}

export const eventHtml = (): Plugin => ({
	name: "event-html",
	transformIndexHtml: {
		order: "pre",
		handler: (html, ctx) => renderEventHtml(html, !ctx.server),
	},
});
