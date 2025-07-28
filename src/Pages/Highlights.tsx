const Highlights = () => {
    const highlightsData = [
        {
            title: "30-ft Ravana Effigy",
            description: "Spectacular burning of the massive handcrafted effigy on the final night",
            badge: "30 feet tall",
        },
        {
            title: "Live Stage Drama",
            description: "Professional actors in authentic costumes with traditional music",
            badge: "10 nights",
        },
        {
            title: "Massive Audience",
            description: "Thousands gather nightly to witness this cultural spectacle",
            badge: "5000+ nightly",
        },
        {
            title: "31-Year Legacy",
            description: "Mumbai's most prestigious and continuous Ramleela tradition",
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
        <div id="Highlights" className="flex px-72-128 flex-col items-center gap-72 bg-red-dark" style={{ scrollMarginTop: 'var(--scroll-margin-header)' }}>
            <div className="flex flex-col items-center gap-24">
                <div className="flex items-center gap-16">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <path
                            d="M16.5617 25.8334C16.4129 25.2566 16.1122 24.7303 15.691 24.3091C15.2698 23.8879 14.7435 23.5872 14.1667 23.4384L3.94167 20.8018C3.76722 20.7522 3.61368 20.6472 3.50436 20.5025C3.39503 20.3578 3.33588 20.1814 3.33588 20.0001C3.33588 19.8188 3.39503 19.6424 3.50436 19.4977C3.61368 19.353 3.76722 19.2479 3.94167 19.1984L14.1667 16.5601C14.7432 16.4114 15.2695 16.111 15.6907 15.6902C16.1119 15.2693 16.4126 14.7432 16.5617 14.1668L19.1983 3.94176C19.2473 3.76662 19.3523 3.61233 19.4972 3.50241C19.6421 3.3925 19.819 3.33301 20.0008 3.33301C20.1827 3.33301 20.3596 3.3925 20.5045 3.50241C20.6494 3.61233 20.7543 3.76662 20.8033 3.94176L23.4383 14.1668C23.5871 14.7435 23.8878 15.2699 24.309 15.6911C24.7302 16.1123 25.2565 16.413 25.8333 16.5618L36.0583 19.1968C36.2342 19.2453 36.3892 19.3501 36.4997 19.4952C36.6102 19.6403 36.6701 19.8177 36.6701 20.0001C36.6701 20.1825 36.6102 20.3598 36.4997 20.505C36.3892 20.6501 36.2342 20.7549 36.0583 20.8034L25.8333 23.4384C25.2565 23.5872 24.7302 23.8879 24.309 24.3091C23.8878 24.7303 23.5871 25.2566 23.4383 25.8334L20.8017 36.0584C20.7527 36.2336 20.6477 36.3879 20.5028 36.4978C20.3579 36.6077 20.181 36.6672 19.9992 36.6672C19.8173 36.6672 19.6404 36.6077 19.4955 36.4978C19.3506 36.3879 19.2457 36.2336 19.1967 36.0584L16.5617 25.8334Z"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M33.3333 5V11.6667"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M36.6667 8.3335H30"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.66667 28.3335V31.6668"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.33333 30H5"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="w-64 h-4 bg-gradient-gold-ltr" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            d="M24 4L30.18 16.52L44 18.54L34 28.28L36.36 42.04L24 35.54L11.64 42.04L14 28.28L4 18.54L17.82 16.52L24 4Z"
                            stroke="var(--color-gold)"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <div className="w-64 h-4 bg-gradient-gold-rtl" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <path
                            d="M16.5617 25.8334C16.4129 25.2566 16.1122 24.7303 15.691 24.3091C15.2698 23.8879 14.7435 23.5872 14.1667 23.4384L3.94167 20.8018C3.76722 20.7522 3.61368 20.6472 3.50436 20.5025C3.39503 20.3578 3.33588 20.1814 3.33588 20.0001C3.33588 19.8188 3.39503 19.6424 3.50436 19.4977C3.61368 19.353 3.76722 19.2479 3.94167 19.1984L14.1667 16.5601C14.7432 16.4114 15.2695 16.111 15.6907 15.6902C16.1119 15.2693 16.4126 14.7432 16.5617 14.1668L19.1983 3.94176C19.2473 3.76662 19.3523 3.61233 19.4972 3.50241C19.6421 3.3925 19.819 3.33301 20.0008 3.33301C20.1827 3.33301 20.3596 3.3925 20.5045 3.50241C20.6494 3.61233 20.7543 3.76662 20.8033 3.94176L23.4383 14.1668C23.5871 14.7435 23.8878 15.2699 24.309 15.6911C24.7302 16.1123 25.2565 16.413 25.8333 16.5618L36.0583 19.1968C36.2342 19.2453 36.3892 19.3501 36.4997 19.4952C36.6102 19.6403 36.6701 19.8177 36.6701 20.0001C36.6701 20.1825 36.6102 20.3598 36.4997 20.505C36.3892 20.6501 36.2342 20.7549 36.0583 20.8034L25.8333 23.4384C25.2565 23.5872 24.7302 23.8879 24.309 24.3091C23.8878 24.7303 23.5871 25.2566 23.4383 25.8334L20.8017 36.0584C20.7527 36.2336 20.6477 36.3879 20.5028 36.4978C20.3579 36.6077 20.181 36.6672 19.9992 36.6672C19.8173 36.6672 19.6404 36.6077 19.4955 36.4978C19.3506 36.3879 19.2457 36.2336 19.1967 36.0584L16.5617 25.8334Z"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M33.3333 5V11.6667"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M36.6667 8.3335H30"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.66669 28.3335V31.6668"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.33333 30H5"
                            stroke="var(--color-gold)"
                            strokeWidth="3.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <p className="text-yellow text-center text-72 font-bold">What Awaits You</p>
                <p className="text-white text-center text-20">
                    Experience the grandeur and magnificence of Mumbai's most celebrated
                    cultural event
                </p>
            </div>
            <div className="flex flex-col gap-24">
                {[0, 1].map(row => (
                    <div className="flex gap-24 RowToCol" key={row}>
                        {highlightsData.slice(row * 3, row * 3 + 3).map((item) => (
                            <div
                                className="flex px-32 flex-col gap-24 flex-1 rounded-8 border-4-gold bg-white Hover"
                                key={item.title}
                            >
                                <p className="text-red-dark text-center text-24 font-bold">
                                    {item.title}
                                </p>
                                <p className="text-black text-center text-16">
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