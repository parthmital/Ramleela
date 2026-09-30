export interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

const photo = (file: string, width: number, height: number, alt: string) => ({
	src: `${import.meta.env.BASE_URL}Images/gallery/${file}`,
	alt,
	width,
	height,
});

/** Stage performance shown beside the About copy. */
export const stagePhoto: Photo = photo(
	"06.webp",
	1000,
	640,
	"Visitors beside costumed actors performing a yagna scene on the Ramleela stage",
);

export const gallery: readonly Photo[] = [
	photo(
		"01.webp",
		950,
		681,
		"A guest is garlanded in front of a hand-painted Ramayana backdrop",
	),
	photo(
		"05.webp",
		1000,
		609,
		"Samiti members and guests gathered on stage as a speaker addresses the audience",
	),
	photo(
		"02.webp",
		944,
		616,
		"A guest is welcomed with a stole under the Ramleela banner",
	),
	photo(
		"04.webp",
		902,
		653,
		"Dignitaries seated at the Shree Maryada Purushottam Ramleela Samiti dais",
	),
	photo(
		"07.webp",
		957,
		662,
		"A speaker in a printed Ram-naam stole addresses the gathering",
	),
	photo(
		"03.webp",
		991,
		644,
		"Committee members and guests on stage before the painted set",
	),
	photo("08.webp", 850, 605, "Guests exchange greetings on the Ramleela stage"),
];
