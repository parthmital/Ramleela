const svgIcons = [
    <svg
        key="star-1"
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
    >
        <path
            d="M16 2.6665L20.12 11.0132L29.3333 12.3598L22.6667 18.8532L24.24 28.0265L16 23.6932L7.75999 28.0265L9.33332 18.8532L2.66666 12.3598L11.88 11.0132L16 2.6665Z"
            stroke="var(--color-gold)"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>,
    <svg
        key="crown"
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
    >
        <path
            d="M23.124 6.53185C23.2103 6.37506 23.3371 6.24432 23.4912 6.15326C23.6453 6.0622 23.821 6.01416 24 6.01416C24.179 6.01416 24.3547 6.0622 24.5088 6.15326C24.6628 6.24432 24.7897 6.37506 24.876 6.53185L30.78 17.7398C30.9208 17.9994 31.1173 18.2245 31.3554 18.3991C31.5935 18.5737 31.8673 18.6934 32.1572 18.7496C32.447 18.8058 32.7458 18.7971 33.0319 18.7242C33.318 18.6513 33.5844 18.5159 33.812 18.3278L42.366 10.9998C42.5302 10.8663 42.7325 10.7883 42.9439 10.7771C43.1553 10.7658 43.3648 10.8219 43.5422 10.9373C43.7196 11.0527 43.8559 11.2215 43.9313 11.4192C44.0067 11.617 44.0175 11.8336 43.962 12.0378L38.294 32.5298C38.1783 32.9492 37.929 33.3194 37.584 33.5843C37.239 33.8492 36.817 33.9944 36.382 33.9979H11.62C11.1847 33.9948 10.7622 33.8498 10.4168 33.5849C10.0713 33.3199 9.82178 32.9495 9.70599 32.5298L4.03999 12.0398C3.98449 11.8356 3.99524 11.619 4.07068 11.4212C4.14611 11.2235 4.28236 11.0547 4.4598 10.9393C4.63723 10.8239 4.84671 10.7678 5.05807 10.7791C5.26944 10.7903 5.47179 10.8683 5.63599 11.0018L14.188 18.3298C14.4156 18.5179 14.682 18.6533 14.9681 18.7262C15.2542 18.7991 15.5529 18.8078 15.8428 18.7516C16.1326 18.6954 16.4065 18.5757 16.6446 18.4011C16.8827 18.2265 17.0792 18.0014 17.22 17.7418L23.124 6.53185Z"
            stroke="var(--color-gold)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10 42H38"
            stroke="var(--color-gold)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>,
    <svg
        key="star-2"
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
    >
        <path
            d="M16 2.6665L20.12 11.0132L29.3333 12.3598L22.6667 18.8532L24.24 28.0265L16 23.6932L7.75999 28.0265L9.33332 18.8532L2.66666 12.3598L11.88 11.0132L16 2.6665Z"
            stroke="var(--color-gold)"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </svg>,
];

const countdown = [
    { label: "Days", value: 61 },
    { label: "Hours", value: 20 },
    { label: "Minutes", value: 57 },
    { label: "Seconds", value: 39 },
];

const buttons = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
            >
                <path
                    d="M8.5 2V6"
                    stroke="var(--color-gold)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M16.5 2V6"
                    stroke="var(--color-gold)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.5 4H5.5C4.39543 4 3.5 4.89543 3.5 6V20C3.5 21.1046 4.39543 22 5.5 22H19.5C20.6046 22 21.5 21.1046 21.5 20V6C21.5 4.89543 20.6046 4 19.5 4Z"
                    stroke="var(--color-gold)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M3.5 10H21.5"
                    stroke="var(--color-gold)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        text: "Event Schedule",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
            >
                <path
                    d="M15.977 12.8901L17.492 21.4161C17.509 21.5165 17.4949 21.6197 17.4516 21.7119C17.4084 21.8041 17.338 21.8808 17.2499 21.9319C17.1619 21.983 17.0603 22.006 16.9588 21.9978C16.8573 21.9897 16.7607 21.9507 16.682 21.8861L13.102 19.1991C12.9292 19.07 12.7192 19.0003 12.5035 19.0003C12.2878 19.0003 12.0778 19.07 11.905 19.1991L8.319 21.8851C8.24032 21.9496 8.14386 21.9885 8.04249 21.9967C7.94112 22.0049 7.83967 21.982 7.75166 21.931C7.66365 21.88 7.59327 21.8035 7.54991 21.7115C7.50656 21.6195 7.49228 21.5165 7.509 21.4161L9.023 12.8901"
                    stroke="var(--color-gold)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M12.5 14C15.8137 14 18.5 11.3137 18.5 8C18.5 4.68629 15.8137 2 12.5 2C9.18629 2 6.5 4.68629 6.5 8C6.5 11.3137 9.18629 14 12.5 14Z"
                    stroke="var(--color-gold)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        ),
        text: "Sponsor This Event",
    },
];

const Hero = () => (
    <div id="Home" className="flex px-72-128 flex-col items-center gap-24 bg-red-dark HeroSection" style={{ scrollMarginTop: 'var(--scroll-margin-header)' }}>
        <div className="flex items-center gap-16">
            <div className="w-64 h-4 bg-gradient-gold-ltr" />
            {svgIcons.map((icon, idx) => icon)}
            <div className="w-64 h-4 bg-gradient-gold-rtl" />
        </div>
        <p className="text-yellow text-center text-96 font-bold">
            Chembur Ramleela 2025
        </p>
        <p className="text-gold text-center text-30 font-semibold">
            Mumbai's Grandest Ramleela Since 1994
        </p>
        <div className="flex items-center gap-24 DateVenue">
            <div className="flex items-center gap-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M8 2V6"
                        stroke="var(--color-yellow)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M16 2V6"
                        stroke="var(--color-yellow)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                        stroke="var(--color-yellow)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M3 10H21"
                        stroke="var(--color-yellow)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                <p className="text-yellow text-24">22 Sept – 2 Oct</p>
            </div>
            <div className="w-4 h-24 bg-yellow Hide" />
            <div className="flex items-center gap-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                        stroke="var(--color-yellow)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="var(--color-yellow)"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                <p className="text-yellow text-24">Gandhi Maidan, Chembur</p>
            </div>
        </div>
        <div className="flex px-24 flex-col items-center gap-16 align-stretch rounded-16 border-1-gold bg-black-25">
            <p className="align-stretch text-yellow text-center text-18">
                Event Begins in:
            </p>
            <div className="flex gap-64 CountDown">
                {countdown.map((item) => (
                    <div className="flex flex-col items-center" key={item.label}>
                        <p className="text-gold text-36 font-bold">{item.value}</p>
                        <p className="text-yellow text-14">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex items-center gap-24 Buttons">
            {buttons.map((btn, idx) => (
                <div
                    className="flex px-20-40 items-center gap-16 rounded-full border-4-gold Button"
                    key={btn.text}
                >
                    {btn.icon}
                    <p className="text-gold text-20 font-bold">{btn.text}</p>
                </div>
            ))}
        </div>
    </div>
);

export default Hero;