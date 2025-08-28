const infoCards = [
  {
    title: "Since 1994",
    content: [
      <>
        The Chembur Ramleela stands as Mumbai's most prestigious and
        continuously-held Ramleela, proudly organized by the&nbsp;
        <span className="text-black text-18 font-bold">
          Shree Maryada Purushottam Ramleela Samiti
        </span>
        &nbsp;for over three decades.
      </>,
      <>
        What began as a humble community initiative has evolved into a grand
        cultural spectacle that attracts thousands of devotees and culture
        enthusiasts from across Mumbai and beyond.
      </>,
    ],
  },
  {
    title: "Cultural Impact",
    content: [
      <>
        Our commitment to authenticity, combined with spectacular production
        values, has made this event the cornerstone of Chembur's cultural
        calendar and a beacon of traditional Indian values in modern Mumbai.
      </>,
    ],
  },
];

const stats = [
  {
    value: "30",
    label: "Years of Excellence",
  },
  {
    value: "5000+",
    label: "Nightly Attendees",
  },
  {
    value: "10",
    label: "Days of Celebration",
  },
];

const About = () => (
  <div
    id="About"
    className="flex px-72-128 flex-col gap-72 bg-white"
    style={{ scrollMarginTop: "var(--scroll-margin-header)" }}
  >
    <div className="flex flex-col items-center gap-24">
      <p className="text-red-dark text-center text-72 font-bold">
        A Legacy of Tradition
      </p>
      <p className="text-4B5563 text-center text-20">
        Three decades of preserving and celebrating the timeless epic of
        Ramayana
      </p>
    </div>
    <div className="flex gap-64 align-stretch RowToCol">
      <div className="flex flex-col gap-32 w-min-content">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="flex px-40 flex-col gap-24 rounded-8 border-4-red-dark Hover"
          >
            <div className="flex items-center gap-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx={8} cy={8} r={8} fill="var(--color-red-dark)" />
              </svg>
              <p className="text-red-dark text-24 font-bold">{card.title}</p>
            </div>
            {card.content.map((text, i) => (
              <p className="text-black text-18" key={i}>
                {text}
              </p>
            ))}
          </div>
        ))}
        <div className="flex gap-24 whitespace-nowrap RowToCol">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex px-24 flex-col items-center gap-8 rounded-8 bg-red-dark justify-center ColToRow Hover"
            >
              <p className="text-gold text-30 font-bold">{stat.value}</p>
              <p className="text-white text-14">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex px-40 flex-col justify-end gap-24 flex-1 align-stretch rounded-8 border-4-red-dark min-h-500 Hover"
        style={{
          backgroundImage: "url(Images/1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  </div>
);

export default About;
