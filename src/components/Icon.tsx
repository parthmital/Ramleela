// Stroke icons adapted from Lucide (ISC licence).
const paths = {
	crown: (
		<>
			<path d="M11.56 3.27a.5.5 0 0 1 .88 0l2.95 5.6a1 1 0 0 0 1.52.3l4.27-3.67a.5.5 0 0 1 .8.52l-2.83 10.25a1 1 0 0 1-.96.73H5.81a1 1 0 0 1-.96-.73L2.02 6.02a.5.5 0 0 1 .8-.52l4.27 3.67a1 1 0 0 0 1.52-.3z" />
			<path d="M5 21h14" />
		</>
	),
	calendar: (
		<>
			<path d="M8 2v4M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
		</>
	),
	pin: (
		<>
			<path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0" />
			<circle cx="12" cy="10" r="3" />
		</>
	),
	clock: (
		<>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 6v6l4 2" />
		</>
	),
	ticket: (
		<>
			<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
			<path d="M13 5v2M13 17v2M13 11v2" />
		</>
	),
	menu: <path d="M4 6h16M4 12h16M4 18h16" />,
	close: <path d="M18 6 6 18M6 6l12 12" />,
	arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
	arrowUpRight: <path d="M7 7h10v10M7 17 17 7" />,
};

export type IconName = keyof typeof paths;

export function Icon({
	name,
	size = 20,
	className,
}: {
	name: IconName;
	size?: number;
	className?: string;
}) {
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.75}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			{paths[name]}
		</svg>
	);
}
