// Fragment IDs are public URLs (e.g. /#Schedule); keep them stable.
export const sectionIds = {
	home: "Home",
	about: "About",
	highlights: "Highlights",
	programme: "Schedule",
	gallery: "Gallery",
	contact: "Contact",
} as const;

export const navigation = [
	{ id: sectionIds.about, label: "About" },
	{ id: sectionIds.highlights, label: "Highlights" },
	{ id: sectionIds.programme, label: "Programme" },
	{ id: sectionIds.gallery, label: "Gallery" },
	{ id: sectionIds.contact, label: "Contact" },
] as const;
