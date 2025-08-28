const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      date: "22 Sept",
      title: "Ram Janma",
      description: "Birth of Rama",
      time: "6:00 – 10:00 PM",
      tag: "Opening Night",
    },
    {
      day: "Day 2",
      date: "23 Sept",
      title: "Janmotsav",
      description: "Celebrations and Vishwamitra",
      time: "6:00 – 10:00 PM",
      tag: "Procession",
    },
    {
      day: "Day 3",
      date: "24 Sept",
      title: "Swayamvar",
      description: "Bow Trial and Swayamvar",
      time: "6:00 – 10:00 PM",
      tag: "Mithila",
    },
    {
      day: "Day 4",
      date: "25 Sept",
      title: "Vivah & Exile",
      description: "Wedding and Exile",
      time: "6:00 – 10:00 PM",
      tag: "Vanvas",
    },
    {
      day: "Day 5",
      date: "26 Sept",
      title: "Kevat & Khara",
      description: "Kevat and Khara–Dushan",
      time: "6:00 – 10:00 PM",
      tag: "Aranya",
    },
    {
      day: "Day 6",
      date: "27 Sept",
      title: "Sita Haran",
      description: "Abduction and Alliance",
      time: "6:00 – 10:00 PM",
      tag: "Alliance",
    },
    {
      day: "Day 7",
      date: "28 Sept",
      title: "Bali & Dahan",
      description: "Bali Slain, Lanka Burned",
      time: "6:00 – 10:00 PM",
      tag: "Hanuman",
    },
    {
      day: "Day 8",
      date: "29 Sept",
      title: "Vibhishan & Setu",
      description: "Refuge and Bridge",
      time: "6:00 – 10:00 PM",
      tag: "March",
    },
    {
      day: "Day 9",
      date: "30 Sept",
      title: "Sanjivani",
      description: "Lakshman Revived",
      time: "6:00 PM – 12:00 AM",
      tag: "Night Special",
    },
    {
      day: "Day 10",
      date: "01 Oct",
      title: "Kumbh & Meghnad",
      description: "Major Battles",
      time: "6:00 PM – 12:00 AM",
      tag: "War",
    },
    {
      day: "Day 11",
      date: "02 Oct",
      title: "War & Coronation",
      description: "Ravana Falls, Rajyabhishek",
      time: "4:00 – 10:00 PM",
      tag: "Grand Finale",
    },
  ];
  return (
    <div
      id="Schedule"
      className="flex px-72-128 flex-col gap-72 bg-white"
      style={{ scrollMarginTop: "var(--scroll-margin-header)" }}
    >
      <div className="flex flex-col items-center gap-24">
        <p className="text-red-dark text-72 font-bold text-center">
          10 Days of Epic Drama
        </p>
        <p className="text-black text-20 text-center">
          Each evening brings a new chapter of the timeless Ramayana to life
        </p>
      </div>
      <div className="flex flex-col gap-24 align-stretch">
        {scheduleData.map((item, idx) => (
          <div
            key={idx}
            className="flex px-32 items-center justify-between align-stretch rounded-8 border-4-red-dark RowToCol gap-16 Schedule Hover"
          >
            <div className="flex flex-col gap-4 no-shrink Date">
              <p className="text-red-dark text-24 font-bold">{item.day}</p>
              <p className="text-black text-18">{item.date}</p>
            </div>
            <div className="flex flex-col gap-8 Info">
              <p className="text-black text-24 font-bold">{item.title}</p>
              <p className="text-black text-16">{item.description}</p>
            </div>
            <div className="flex items-center gap-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                style={{ stroke: "var(--color-red-dark)" }}
                fill="none"
              >
                <g clipPath="url(#clip0_5_403)">
                  <path
                    d="M9.99999 18.3332C14.6024 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6024 1.6665 9.99999 1.6665C5.39762 1.6665 1.66666 5.39746 1.66666 9.99984C1.66666 14.6022 5.39762 18.3332 9.99999 18.3332Z"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5V10L13.3333 11.6667"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_403">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-red-dark text-18 font-bold">{item.time}</p>
            </div>
            <p className="flex px-12-24 rounded-full bg-gold text-red-dark text-18 font-bold justify-center no-shrink ScheduleButton">
              {item.tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
