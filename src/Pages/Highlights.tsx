const Highlights = () => {
  const highlightsData = [
    {
      title: "30-ft Ravana Effigy",
      description:
        "Spectacular burning of the massive handcrafted effigy on the final night",
      badge: "30 feet tall",
    },
    {
      title: "Live Stage Drama",
      description:
        "Professional actors in authentic costumes with traditional music",
      badge: "10 nights",
    },
    {
      title: "Massive Audience",
      description:
        "Thousands gather nightly to witness this cultural spectacle",
      badge: "5000+ nightly",
    },
    {
      title: "31-Year Legacy",
      description:
        "Mumbai's most prestigious and continuous Ramleela tradition",
      badge: "Since 1994",
    },
    {
      title: "Free Public Access",
      description: "Open to all families - a true community celebration",
      badge: "No tickets",
    },
    {
      title: "Cultural Heritage",
      description: "Preserving and promoting traditional Indian values",
      badge: "Authentic",
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
        {[0, 1].map((row) => (
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
        ))}
      </div>
    </div>
  );
};

export default Highlights;
