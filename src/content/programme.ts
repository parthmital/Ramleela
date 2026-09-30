export interface Night {
	/** Local (IST) calendar date, YYYY-MM-DD. */
	date: string;
	/** Local 24-hour start and end, HH:MM. An end at or before the start runs past midnight. */
	start: string;
	end: string;
	title: string;
	episode: string;
	tag: string;
}

export const programme: readonly Night[] = [
	{
		date: "2025-09-22",
		start: "18:00",
		end: "22:00",
		title: "Ram Janma",
		episode: "Birth of Rama",
		tag: "Opening Night",
	},
	{
		date: "2025-09-23",
		start: "18:00",
		end: "22:00",
		title: "Janmotsav",
		episode: "Celebrations and Vishwamitra",
		tag: "Procession",
	},
	{
		date: "2025-09-24",
		start: "18:00",
		end: "22:00",
		title: "Swayamvar",
		episode: "Bow Trial and Swayamvar",
		tag: "Mithila",
	},
	{
		date: "2025-09-25",
		start: "18:00",
		end: "22:00",
		title: "Vivah & Exile",
		episode: "Wedding and Exile",
		tag: "Vanvas",
	},
	{
		date: "2025-09-26",
		start: "18:00",
		end: "22:00",
		title: "Kevat & Khara",
		episode: "Kevat and Khara–Dushan",
		tag: "Aranya",
	},
	{
		date: "2025-09-27",
		start: "18:00",
		end: "22:00",
		title: "Sita Haran",
		episode: "Abduction and Alliance",
		tag: "Alliance",
	},
	{
		date: "2025-09-28",
		start: "18:00",
		end: "22:00",
		title: "Bali & Dahan",
		episode: "Bali Slain, Lanka Burned",
		tag: "Hanuman",
	},
	{
		date: "2025-09-29",
		start: "18:00",
		end: "22:00",
		title: "Vibhishan & Setu",
		episode: "Refuge and Bridge",
		tag: "March",
	},
	{
		date: "2025-09-30",
		start: "18:00",
		end: "00:00",
		title: "Sanjivani",
		episode: "Lakshman Revived",
		tag: "Night Special",
	},
	{
		date: "2025-10-01",
		start: "18:00",
		end: "00:00",
		title: "Kumbh & Meghnad",
		episode: "Major Battles",
		tag: "War",
	},
	{
		date: "2025-10-02",
		start: "16:00",
		end: "22:00",
		title: "War & Coronation",
		episode: "Ravana Falls, Rajyabhishek",
		tag: "Grand Finale",
	},
];
