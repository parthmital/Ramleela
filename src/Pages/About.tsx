const infoCards = [
    {
        title: "Since 1994",
        content: [
            <>The Chembur Ramleela stands as Mumbai's most prestigious and continuously-held Ramleela, proudly organized by the&nbsp;<span className="text-black text-18 font-bold">Shree Maryada Purushottam Ramleela Samiti</span>&nbsp;for over three decades.</>,
            <>What began as a humble community initiative has evolved into a grand cultural spectacle that attracts thousands of devotees and culture enthusiasts from across Mumbai and beyond.</>,
        ],
    },
    {
        title: "Cultural Impact",
        content: [
            <>Our commitment to authenticity, combined with spectacular production values, has made this event the cornerstone of Chembur's cultural calendar and a beacon of traditional Indian values in modern Mumbai.</>,
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
    <div id="About" className="flex px-72-128 flex-col gap-72 bg-white" style={{ scrollMarginTop: 'var(--scroll-margin-header)' }}>
        <div className="flex flex-col items-center gap-24">
            <div className="flex items-center gap-16">
                <div className="w-64 h-4 bg-gradient-red-dark-ltr" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                >
                    <path
                        d="M23.124 6.53185C23.2103 6.37506 23.3371 6.24432 23.4912 6.15326C23.6453 6.0622 23.821 6.01416 24 6.01416C24.179 6.01416 24.3547 6.0622 24.5088 6.15326C24.6628 6.24432 24.7897 6.37506 24.876 6.53185L30.78 17.7398C30.9208 17.9994 31.1173 18.2245 31.3554 18.3991C31.5935 18.5737 31.8673 18.6934 32.1572 18.7496C32.447 18.8058 32.7458 18.7971 33.0319 18.7242C33.318 18.6513 33.5844 18.5159 33.812 18.3278L42.366 10.9998C42.5302 10.8663 42.7325 10.7883 42.9439 10.7771C43.1553 10.7658 43.3648 10.8219 43.5422 10.9373C43.7196 11.0527 43.8559 11.2215 43.9313 11.4192C44.0067 11.617 44.0175 11.8336 43.962 12.0378L38.294 32.5298C38.1783 32.9492 37.929 33.3194 37.584 33.5843C37.239 33.8492 36.817 33.9944 36.382 33.9979H11.62C11.1847 33.9948 10.7622 33.8498 10.4168 33.5849C10.0713 33.3199 9.82178 32.9495 9.70599 32.5298L4.03999 12.0398C3.98449 11.8356 3.99524 11.619 4.07068 11.4212C4.14611 11.2235 4.28236 11.0547 4.4598 10.9393C4.63723 10.8239 4.84671 10.7678 5.05807 10.7791C5.26944 10.7903 5.47179 10.8683 5.63599 11.0018L14.188 18.3298C14.4156 18.5179 14.682 18.6533 14.9681 18.7262C15.2542 18.7991 15.5529 18.8078 15.8428 18.7516C16.1326 18.6954 16.4065 18.5757 16.6446 18.4011C16.8827 18.2265 17.0792 18.0014 17.22 17.7418L23.124 6.53185Z"
                        stroke="var(--color-red-dark)"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M10 42H38"
                        stroke="var(--color-red-dark)"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <div className="w-64 h-4 bg-gradient-red-dark-rtl" />
            </div>
            <p className="text-red-dark text-center text-72 font-bold">
                A Legacy of Tradition
            </p>
            <p className="text-4B5563 text-center text-20">
                Three decades of preserving and celebrating the timeless epic of Ramayana
            </p>
        </div>
        <div className="flex gap-64 align-stretch RowToCol">
            <div className="flex flex-col gap-32 w-min-content">
                {infoCards.map((card, idx) => (
                    <div key={card.title} className="flex px-40 flex-col gap-24 rounded-8 border-4-red-dark Hover">
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
                            <p className="text-black text-18" key={i}>{text}</p>
                        ))}
                    </div>
                ))}
                <div className="flex gap-24 whitespace-nowrap RowToCol">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex px-24 flex-col items-center gap-8 rounded-8 bg-red-dark justify-center ColToRow Hover">
                            <p className="text-gold text-30 font-bold">{stat.value}</p>
                            <p className="text-white text-14">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex px-40 flex-col justify-end gap-24 flex-1 align-stretch rounded-8 border-4-red-dark min-h-500 Hover">
                <p className="text-red-dark text-24 font-bold">
                    Three Decades of Excellence
                </p>
                <p className="text-black text-18">
                    Preserving traditions for future generations
                </p>
            </div>
        </div>
    </div>
);

export default About;