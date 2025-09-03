const Highlights = () => {
	const highlightsData = [
		{
			title: "Free Public Celebration",
			description:
				"Open to all with free entry, covered seating, daily prasad, and kiosks for refreshments.",
			badge: "Community",
		},
		{
			title: "Grand Stage & Audience Arrangements",
			description:
				"Dedicated VIP stage, seating for thousands, and special appreciation for sahyogis & dignitaries.",
			badge: "Hospitality",
		},
		{
			title: "Cultural & Spiritual Heritage",
			description:
				"Temple notice boards, annual calendar distribution, and authentic traditions preserved.",
			badge: "Tradition",
		},
		{
			title: "Spectacular Ravan Dahan",
			description:
				"The climax with the burning of the massive effigy, Mumbai’s biggest Ramleela moment.",
			badge: "Main Event",
		},
		{
			title: "Unique Performances",
			description:
				"First-time ever: Ramayan Kaleen Mahavidya Deviyan presented by artists - a historic cultural act.",
			badge: "First in India",
		},
		{
			title: "Visual Splendor",
			description:
				"Flying Hanuman at the gates and beautifully illuminated trees add to the grandeur.",
			badge: "Spectacle",
		},
		{
			title: "Modern Touch with Tradition",
			description:
				"QR codes for donations and seamless organization with emergency medical services.",
			badge: "Digital + Care",
		},
		{
			title: "Live Stage Drama",
			description:
				"Professional actors in authentic costumes with traditional music.",
			badge: "11 Nights",
		},
		{
			title: "31-Year Legacy",
			description:
				"Mumbai’s most prestigious and continuous Ramleela tradition since 1994.",
			badge: "Since 1994",
		},
	];

	return (
		<div
			id="Highlights"
			className="flex px-72-128 flex-col items-center gap-72 bg-red-dark"
			style={{ scrollMarginTop: "var(--scroll-margin-header)" }}
		>
			<div className="flex flex-col items-center gap-24">
				<p className="text-yellow text-center text-72 font-bold">
					What Awaits You
				</p>
				<p className="text-white text-center text-20">
					Experience the grandeur and magnificence of Mumbai's most celebrated
					cultural event
				</p>
			</div>
			<div className="flex flex-col gap-24">
				{Array.from({ length: Math.ceil(highlightsData.length / 3) }).map(
					(_, row) => (
						<div className="flex gap-24 RowToCol" key={row}>
							{highlightsData.slice(row * 3, row * 3 + 3).map((item) => (
								<div
									className="flex px-32 flex-col gap-24 flex-1 rounded-8 border-4-gold bg-white Hover"
									key={item.title}
								>
									<p className="text-red-dark text-center text-24 font-bold">
										{item.title}
									</p>
									<p className="text-black text-center text-16 flex-1">
										{item.description}
									</p>
									<p className="flex px-8-16 align-stretch justify-center rounded-full bg-red-dark text-white text-18 font-bold">
										{item.badge}
									</p>
								</div>
							))}
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default Highlights;
