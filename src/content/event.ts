// Single source of truth for event facts. Page copy, the HTML head and
// structured data are all derived from this file; update it each season.

export const event = {
	name: "Chembur Ramleela",
	season: 2025,
	foundedYear: 1994,
	organiser: "Shree Maryada Purushottam Ramleela Samiti",
	siteUrl: "https://chemburramleela.com/",
	timeZoneOffset: "+05:30",
	venue: {
		name: "Gandhi Maidan, Chembur",
		locality: "Mumbai",
		region: "Maharashtra",
		country: "IN",
		mapUrl:
			"https://www.google.com/maps/search/?api=1&query=Gandhi+Maidan+Chembur+Mumbai",
	},
	contact: {
		youtube: {
			handle: "@ramlilasamitichembur",
			url: "https://www.youtube.com/@ramlilasamitichembur",
		},
		email: "chemburramlila@gmail.com",
		whatsapp: { display: "+91 90290 58600", number: "919029058600" },
		upi: { id: "maryadapurshottam@indianbk", payee: "ChemburRamleela" },
	},
} as const;

export const eventTitle = `${event.name} ${event.season}`;
export const yearsRunning = event.season - event.foundedYear;
