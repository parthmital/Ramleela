const Contact = () => (
    <div className="flex flex-col items-center gap-72 px-72-128 bg-red-dark">
        <div className="flex flex-col items-center gap-24 align-stretch">
            <p className="align-stretch text-yellow text-center font-bold text-72">
                Connect With Us
            </p>
            <p className="align-stretch text-white text-center text-20">
                Join our cultural celebration or explore sponsorship opportunities
            </p>
        </div>
        <div className="flex gap-64 align-stretch RowToCol">
            <div className="flex flex-col flex-1 align-stretch rounded-8 border-4-gold">
                <div className="flex px-16 justify-center items-center align-stretch bg-red-bright">
                    <p className="text-white text-center font-bold text-24">
                        Send us a Message
                    </p>
                </div>
                <div className="flex flex-col gap-32 align-stretch px-40">
                    <p className="flex-1 text-black text-16 flex px-8 align-stretch rounded-8 border-4-red-bright bg-white">
                        Your Name
                    </p>
                    <p className="flex-1 text-black text-16 flex px-8 align-stretch rounded-8 border-4-red-bright bg-white">
                        Email Address
                    </p>
                    <p className="flex-1 text-black text-16 flex px-8 align-stretch rounded-8 border-4-red-bright bg-white">
                        Phone Number
                    </p>
                    <p className="flex-1 text-black text-16 flex px-8 align-stretch rounded-8 border-4-red-bright bg-white">
                        Your Message / Sponsorship Inquiry
                    </p>
                    <div className="flex px-16 justify-center items-center gap-16 align-stretch rounded-8 bg-red-bright Hover">
                        <svg
                            fill="none"
                            height={24}
                            viewBox="0 0 24 24"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                                stroke="var(--color-white)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                            <path
                                d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7"
                                stroke="var(--color-white)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                        </svg>
                        <p className="text-white text-center font-bold text-20">
                            Send Message
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-32 flex-1">
                <div className="flex flex-col items-center align-stretch rounded-8 border-4-gold">
                    <div className="flex px-16 justify-center items-center align-stretch bg-red-bright">
                        <p className="flex-1 text-white text-center font-bold text-24">
                            Contact Information
                        </p>
                    </div>
                    <div className="flex flex-col gap-32 align-stretch px-40">
                        <div className="flex items-center gap-24 align-stretch">
                            <div className="flex w-48 h-48 flex-col justify-center items-center rounded-full bg-yellow">
                                <svg
                                    fill="none"
                                    height={24}
                                    viewBox="0 0 24 24"
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-yellow font-bold text-20">Event Organizer</p>
                                <p className="text-white text-16">Kunal Agrawal</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-24 align-stretch">
                            <div className="flex w-48 h-48 flex-col justify-center items-center rounded-full bg-yellow">
                                <svg
                                    fill="none"
                                    height={24}
                                    viewBox="0 0 24 24"
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-yellow font-bold text-20">Event Organizer</p>
                                <p className="text-white text-16">Kunal Agrawal</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-24 align-stretch">
                            <div className="flex w-48 h-48 flex-col justify-center items-center rounded-full bg-yellow">
                                <svg
                                    fill="none"
                                    height={24}
                                    viewBox="0 0 24 24"
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-yellow font-bold text-20">Event Organizer</p>
                                <p className="text-white text-16">Kunal Agrawal</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-24 align-stretch">
                            <div className="flex w-48 h-48 flex-col justify-center items-center rounded-full bg-yellow">
                                <svg
                                    fill="none"
                                    height={24}
                                    viewBox="0 0 24 24"
                                    width={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                    <path
                                        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                                        stroke="#991B1B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-yellow font-bold text-20">Event Organizer</p>
                                <p className="text-white text-16">Kunal Agrawal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex px-16-48 justify-center items-center gap-16 align-stretch rounded-8 border-4-gold bg-green Hover">
                    <svg
                        fill="none"
                        height={24}
                        viewBox="0 0 25 24"
                        width={25}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.5 4H4.5C3.39543 4 2.5 4.89543 2.5 6V18C2.5 19.1046 3.39543 20 4.5 20H20.5C21.6046 20 22.5 19.1046 22.5 18V6C22.5 4.89543 21.6046 4 20.5 4Z"
                            stroke="var(--color-white)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                        <path
                            d="M22.5 7L13.53 12.7C13.2213 12.8934 12.8643 12.996 12.5 12.996C12.1357 12.996 11.7787 12.8934 11.47 12.7L2.5 7"
                            stroke="var(--color-white)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                    </svg>
                    <p className="text-white text-center font-bold text-20">
                        Chat on WhatsApp
                    </p>
                </div>
                <div className="flex w-300 h-48 justify-center items-center gap-24">
                    <svg className="Hover"
                        fill="none"
                        height={48}
                        viewBox="0 0 48 48"
                        width={48}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_6_440)">
                            <path
                                d="M48 24C48 10.7452 37.2547 0 24 0C10.7452 0 0 10.7452 0 24C0 35.979 8.7765 45.9081 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3153 9.375C31.941 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.6798 15.75 27.75 17.6001 27.75 19.4981V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2235 45.9081 48 35.9792 48 24Z"
                                fill="#1877F2"
                            />
                            <path
                                d="M33.3422 30.9375L34.4062 24H27.75V19.4981C27.75 17.5999 28.6798 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.941 9.375 29.3151 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C21.4905 47.9028 22.7443 48.0003 24 48C25.2557 48.0003 26.5095 47.9028 27.75 47.7084V30.9375H33.3422Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_6_440">
                                <rect fill="white" height={48} width={48} />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg className="Hover"
                        fill="none"
                        height={48}
                        viewBox="0 0 48 48"
                        width={48}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_6_443)">
                            <path
                                d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z"
                                fill="url(#paint0_radial_6_443)"
                            />
                            <path
                                d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z"
                                fill="url(#paint1_radial_6_443)"
                            />
                            <path
                                d="M24.0017 5.25C18.9096 5.25 18.2704 5.27231 16.2705 5.36325C14.2744 5.45475 12.9118 5.77069 11.7197 6.23438C10.4863 6.71325 9.44025 7.35394 8.39813 8.39644C7.35506 9.43875 6.71438 10.4848 6.234 11.7176C5.769 12.9101 5.45269 14.2732 5.36287 16.2684C5.27344 18.2685 5.25 18.9079 5.25 24.0002C5.25 29.0925 5.2725 29.7296 5.36325 31.7295C5.45513 33.7256 5.77106 35.0882 6.23438 36.2803C6.71362 37.5137 7.35431 38.5597 8.39681 39.6019C9.43875 40.6449 10.4848 41.2871 11.7172 41.766C12.9103 42.2297 14.2731 42.5456 16.2688 42.6371C18.2689 42.7281 18.9075 42.7504 23.9994 42.7504C29.0921 42.7504 29.7292 42.7281 31.7291 42.6371C33.7253 42.5456 35.0893 42.2297 36.2824 41.766C37.5152 41.2871 38.5597 40.6449 39.6015 39.6019C40.6446 38.5597 41.2851 37.5137 41.7656 36.2809C42.2265 35.0882 42.543 33.7253 42.6367 31.7299C42.7266 29.73 42.75 29.0925 42.75 24.0002C42.75 18.9079 42.7266 18.2689 42.6367 16.2688C42.543 14.2727 42.2265 12.9103 41.7656 11.7182C41.2851 10.4848 40.6446 9.43875 39.6015 8.39644C38.5586 7.35356 37.5156 6.71287 36.2812 6.23456C35.0859 5.77069 33.7226 5.45456 31.7265 5.36325C29.7264 5.27231 29.0897 5.25 23.9959 5.25H24.0017ZM22.3196 8.62894C22.8189 8.62819 23.376 8.62894 24.0017 8.62894C29.0081 8.62894 29.6014 8.64694 31.5784 8.73675C33.4065 8.82038 34.3988 9.12581 35.0597 9.3825C35.9347 9.72225 36.5586 10.1286 37.2144 10.785C37.8707 11.4412 38.2768 12.0662 38.6175 12.9412C38.8742 13.6012 39.18 14.5935 39.2633 16.4216C39.3531 18.3983 39.3726 18.9919 39.3726 23.9959C39.3726 28.9999 39.3531 29.5937 39.2633 31.5701C39.1796 33.3982 38.8742 34.3905 38.6175 35.0507C38.2778 35.9257 37.8707 36.5488 37.2144 37.2047C36.5582 37.8609 35.9351 38.2671 35.0597 38.607C34.3995 38.8648 33.4065 39.1695 31.5784 39.2531C29.6017 39.3429 29.0081 39.3624 24.0017 39.3624C18.9951 39.3624 18.4016 39.3429 16.4252 39.2531C14.5971 39.1688 13.6048 38.8633 12.9433 38.6066C12.0684 38.2667 11.4433 37.8606 10.7871 37.2043C10.1308 36.5481 9.72469 35.9246 9.384 35.0492C9.12731 34.389 8.8215 33.3967 8.73825 31.5686C8.64844 29.592 8.63044 28.9984 8.63044 23.9912C8.63044 18.984 8.64844 18.3936 8.73825 16.4169C8.82188 14.5888 9.12731 13.5966 9.384 12.9356C9.72394 12.0606 10.1308 11.4356 10.7873 10.7794C11.4437 10.1231 12.0684 9.71681 12.9435 9.37631C13.6044 9.1185 14.5971 8.81381 16.4252 8.72981C18.1549 8.65162 18.8252 8.62819 22.3196 8.62425V8.62894ZM34.0104 11.7422C32.7683 11.7422 31.7604 12.7491 31.7604 13.9914C31.7604 15.2336 32.7683 16.2414 34.0104 16.2414C35.2526 16.2414 36.2604 15.2336 36.2604 13.9914C36.2604 12.7493 35.2526 11.7414 34.0104 11.7414V11.7422ZM24.0017 14.3711C18.6842 14.3711 14.3728 18.6825 14.3728 24.0002C14.3728 29.3179 18.6842 33.6272 24.0017 33.6272C29.3194 33.6272 33.6292 29.3179 33.6292 24.0002C33.6292 18.6827 29.319 14.3711 24.0013 14.3711H24.0017ZM24.0017 17.7501C27.4534 17.7501 30.2518 20.5481 30.2518 24.0002C30.2518 27.4519 27.4534 30.2503 24.0017 30.2503C20.55 30.2503 17.7518 27.4519 17.7518 24.0002C17.7518 20.5481 20.5498 17.7501 24.0017 17.7501Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <radialGradient
                                cx={0}
                                cy={0}
                                gradientTransform="translate(12.75 51.6969) rotate(-90) scale(47.5716 44.2453)"
                                gradientUnits="userSpaceOnUse"
                                id="paint0_radial_6_443"
                                r={1}
                            >
                                <stop stopColor="#FFDD55" />
                                <stop stopColor="#FFDD55" offset="0.1" />
                                <stop stopColor="#FF543E" offset="0.5" />
                                <stop stopColor="#C837AB" offset={1} />
                            </radialGradient>
                            <radialGradient
                                cx={0}
                                cy={0}
                                gradientTransform="translate(-8.04019 3.45769) rotate(78.681) scale(21.2648 87.654)"
                                gradientUnits="userSpaceOnUse"
                                id="paint1_radial_6_443"
                                r={1}
                            >
                                <stop stopColor="#3771C8" />
                                <stop stopColor="#3771C8" offset="0.128" />
                                <stop stopColor="#6600FF" offset={1} stopOpacity={0} />
                            </radialGradient>
                            <clipPath id="clip0_6_443">
                                <rect fill="white" height={48} width={48} />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg className="Hover"
                        fill="none"
                        height={48}
                        viewBox="0 0 68 48"
                        width={68}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_6_448)">
                            <path
                                d="M66.4982 7.48667C66.1082 6.03961 65.3473 4.72038 64.2915 3.66034C63.2356 2.6003 61.9216 1.83643 60.4802 1.4448C55.2033 0 33.9655 0 33.9655 0C33.9655 0 12.7267 0.0437332 7.44977 1.48853C6.00836 1.88019 4.69429 2.6441 3.63843 3.70419C2.58257 4.76428 1.82177 6.08357 1.43177 7.53067C-0.164371 16.9435 -0.783543 31.2864 1.4756 40.3227C1.86563 41.7697 2.62646 43.0889 3.68232 44.149C4.73817 45.209 6.05222 45.9729 7.4936 46.3645C12.7705 47.8093 34.0088 47.8093 34.0088 47.8093C34.0088 47.8093 55.2469 47.8093 60.5235 46.3645C61.9649 45.9729 63.279 45.2091 64.3349 44.149C65.3908 43.089 66.1517 41.7697 66.5418 40.3227C68.2253 30.8965 68.7441 16.5624 66.4982 7.48667Z"
                                fill="#FF0000"
                            />
                            <path
                                d="M27.2056 34.1493L44.8239 23.9045L27.2056 13.6597V34.1493Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_6_448">
                                <rect fill="white" height={48} width={68} />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>
);

export default Contact