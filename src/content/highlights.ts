import { event, yearsRunning } from "./event";
import { programme } from "./programme";

export interface Highlight {
	title: string;
	description: string;
	label: string;
}

export const highlights: readonly Highlight[] = [
	{
		title: "Spectacular Ravan Dahan",
		description:
			"The climax with the burning of the massive effigy, Mumbai’s biggest Ramleela moment.",
		label: "Main Event",
	},
	{
		title: "Live Stage Drama",
		description:
			"Professional actors in authentic costumes with traditional music.",
		label: `${programme.length} Nights`,
	},
	{
		title: "Unique Performances",
		description:
			"First-time ever: Ramayan Kaleen Mahavidya Deviyan presented by artists, a historic cultural act.",
		label: "First in India",
	},
	{
		title: "Free Public Celebration",
		description:
			"Open to all with free entry, covered seating, daily prasad, and kiosks for refreshments.",
		label: "Community",
	},
	{
		title: "Visual Splendour",
		description:
			"Flying Hanuman at the gates and beautifully illuminated trees add to the grandeur.",
		label: "Spectacle",
	},
	{
		title: "Grand Stage & Audience Arrangements",
		description:
			"Dedicated VIP stage, seating for thousands, and special appreciation for sahyogis and dignitaries.",
		label: "Hospitality",
	},
	{
		title: "Cultural & Spiritual Heritage",
		description:
			"Temple notice boards, annual calendar distribution, and authentic traditions preserved.",
		label: "Tradition",
	},
	{
		title: "Modern Touch with Tradition",
		description:
			"QR codes for donations and seamless organisation with emergency medical services.",
		label: "Digital + Care",
	},
	{
		title: `${yearsRunning}-Year Legacy`,
		description: `Mumbai’s most prestigious and continuous Ramleela tradition since ${event.foundedYear}.`,
		label: `Since ${event.foundedYear}`,
	},
];
