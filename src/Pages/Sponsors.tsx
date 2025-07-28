const sponsors = [
    {
        name: "Sahara Builders",
        type: "Sponsor",
    },
    {
        name: "Progressive Builders",
        type: "Sponsor",
    },
];

const stats = [
    { value: "5000+", label: "Daily Audience" },
    { value: "10", label: "Days Exposure" },
    { value: "30", label: "Years Legacy" },
];

const Sponsors = () => (
    <div id="Sponsors" className="flex px-72-128 flex-col gap-72 bg-white" style={{ scrollMarginTop: 'var(--scroll-margin-header)' }}>
        <div className="flex flex-col items-center gap-24 align-stretch">
            <div className="flex justify-center items-center content-center gap-16 align-stretch flex-wrap">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                >
                    <path
                        d="M25.795 21.4834L28.32 35.6934C28.3483 35.8607 28.3248 36.0327 28.2527 36.1863C28.1806 36.3399 28.0633 36.4679 27.9166 36.5531C27.7698 36.6382 27.6005 36.6766 27.4314 36.6629C27.2622 36.6493 27.1012 36.5843 26.97 36.4767L21.0033 31.9984C20.7153 31.7832 20.3654 31.6669 20.0058 31.6669C19.6463 31.6669 19.2964 31.7832 19.0083 31.9984L13.0317 36.4751C12.9005 36.5825 12.7398 36.6473 12.5708 36.661C12.4019 36.6746 12.2328 36.6364 12.0861 36.5515C11.9394 36.4666 11.8221 36.3389 11.7499 36.1856C11.6776 36.0323 11.6538 35.8606 11.6817 35.6934L14.205 21.4834"
                        stroke="var(--color-red-dark)"
                        strokeWidth="3.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M20 23.3333C25.5228 23.3333 30 18.8561 30 13.3333C30 7.8104 25.5228 3.33325 20 3.33325C14.4772 3.33325 10 7.8104 10 13.3333C10 18.8561 14.4772 23.3333 20 23.3333Z"
                        stroke="var(--color-red-dark)"
                        strokeWidth="3.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                <div className="w-64 h-4 bg-gradient-red-dark-ltr" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                >
                    <path
                        d="M23.124 6.53209C23.2103 6.37531 23.3371 6.24456 23.4912 6.1535C23.6453 6.06244 23.821 6.0144 24 6.0144C24.179 6.0144 24.3547 6.06244 24.5088 6.1535C24.6628 6.24456 24.7897 6.37531 24.876 6.53209L30.78 17.7401C30.9208 17.9996 31.1173 18.2248 31.3554 18.3993C31.5935 18.5739 31.8673 18.6936 32.1572 18.7498C32.447 18.806 32.7458 18.7974 33.0319 18.7244C33.318 18.6515 33.5844 18.5162 33.812 18.3281L42.366 11.0001C42.5302 10.8665 42.7325 10.7885 42.9439 10.7773C43.1553 10.7661 43.3648 10.8222 43.5422 10.9376C43.7196 11.053 43.8559 11.2217 43.9313 11.4195C44.0067 11.6172 44.0175 11.8338 43.962 12.0381L38.294 32.5301C38.1783 32.9494 37.929 33.3196 37.584 33.5845C37.239 33.8494 36.817 33.9946 36.382 33.9981H11.62C11.1847 33.9951 10.7622 33.8501 10.4168 33.5851C10.0713 33.3202 9.82178 32.9498 9.70599 32.5301L4.03999 12.0401C3.98449 11.8358 3.99524 11.6192 4.07068 11.4215C4.14611 11.2237 4.28236 11.055 4.4598 10.9396C4.63723 10.8242 4.84671 10.7681 5.05807 10.7793C5.26944 10.7905 5.47179 10.8685 5.63599 11.0021L14.188 18.3301C14.4156 18.5182 14.682 18.6535 14.9681 18.7264C15.2542 18.7994 15.5529 18.808 15.8428 18.7518C16.1326 18.6956 16.4065 18.5759 16.6446 18.4013C16.8827 18.2268 17.0792 18.0016 17.22 17.7421L23.124 6.53209Z"
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                >
                    <path
                        d="M25.795 21.4834L28.32 35.6934C28.3483 35.8607 28.3248 36.0327 28.2527 36.1863C28.1806 36.3399 28.0633 36.4679 27.9166 36.5531C27.7698 36.6382 27.6005 36.6766 27.4314 36.6629C27.2622 36.6493 27.1012 36.5843 26.97 36.4767L21.0033 31.9984C20.7153 31.7832 20.3654 31.6669 20.0058 31.6669C19.6463 31.6669 19.2964 31.7832 19.0083 31.9984L13.0317 36.4751C12.9005 36.5825 12.7398 36.6473 12.5708 36.661C12.4019 36.6746 12.2328 36.6364 12.0861 36.5515C11.9394 36.4666 11.8221 36.3389 11.7499 36.1856C11.6776 36.0323 11.6538 35.8606 11.6817 35.6934L14.205 21.4834"
                        stroke="var(--color-red-dark)"
                        strokeWidth="3.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M20 23.3333C25.5228 23.3333 30 18.8561 30 13.3333C30 7.8104 25.5228 3.33325 20 3.33325C14.4772 3.33325 10 7.8104 10 13.3333C10 18.8561 14.4772 23.3333 20 23.3333Z"
                        stroke="var(--color-red-dark)"
                        strokeWidth="3.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
            <p className="text-red-dark text-center text-72 font-bold">
                Our Esteemed Partners
            </p>
            <p className="text-4B5563 text-center text-20">
                Proud supporters who help us preserve and promote our cultural heritage
            </p>
        </div>
        <div className="flex justify-center gap-24 align-stretch RowToCol">
            {sponsors.map((sponsor, idx) => (
                <div
                    key={sponsor.name + idx}
                    className="flex px-32 flex-col items-center gap-24 flex-1 rounded-8 border-4-red-dark bg-white Hover"
                >
                    <div className="flex flex-col justify-center items-center rounded-full bg-red-dark w-80 h-80">
                        {/* SVGs for sponsor icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                        >
                            <path
                                d="M11.6667 22.4089C17.1895 22.4089 21.6667 17.9318 21.6667 12.4089C21.6667 6.88609 17.1895 2.40894 11.6667 2.40894C6.14382 2.40894 1.66667 6.88609 1.66667 12.4089C1.66667 17.9318 6.14382 22.4089 11.6667 22.4089Z"
                                stroke="var(--color-gold)"
                                strokeWidth="3.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                        >
                            <path
                                d="M16.4607 2.40894L18.9857 16.6189C19.014 16.7863 18.9905 16.9582 18.9184 17.1119C18.8463 17.2655 18.729 17.3934 18.5822 17.4786C18.4354 17.5638 18.2662 17.6021 18.097 17.5885C17.9279 17.5748 17.7669 17.5099 17.6357 17.4023L11.669 12.9239C11.381 12.7087 11.0311 12.5925 10.6715 12.5925C10.312 12.5925 9.96205 12.7087 9.67401 12.9239L3.69734 17.4006C3.56621 17.508 3.40545 17.5728 3.2365 17.5865C3.06756 17.6002 2.89846 17.562 2.75178 17.477C2.6051 17.3921 2.4878 17.2645 2.41554 17.1112C2.34328 16.9578 2.31949 16.7861 2.34734 16.6189L4.87068 2.40894"
                                stroke="var(--color-gold)"
                                strokeWidth="3.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                    <p className="text-red-dark text-24 font-bold">{sponsor.name}</p>
                    <p className="flex px-8-16 justify-center align-stretch rounded-full bg-red-dark text-white text-18 font-bold">
                        {sponsor.type}
                    </p>
                </div>
            ))}
        </div>
        <div className="flex px-24 flex-col justify-center items-center gap-32 align-stretch rounded-16 border-4-gold bg-red-dark">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
            >
                <path
                    d="M30.832 8.70929C30.9471 8.50024 31.1162 8.32592 31.3217 8.2045C31.5271 8.08309 31.7614 8.01904 32 8.01904C32.2387 8.01904 32.4729 8.08309 32.6784 8.2045C32.8838 8.32592 33.0529 8.50024 33.168 8.70929L41.04 23.6533C41.2277 23.9993 41.4897 24.2995 41.8072 24.5323C42.1247 24.765 42.4898 24.9246 42.8763 24.9996C43.2628 25.0745 43.661 25.063 44.0425 24.9658C44.424 24.8685 44.7792 24.6881 45.0827 24.4373L56.488 14.6666C56.707 14.4886 56.9767 14.3845 57.2586 14.3696C57.5404 14.3546 57.8197 14.4294 58.0563 14.5833C58.2929 14.7372 58.4745 14.9621 58.5751 15.2258C58.6757 15.4895 58.69 15.7783 58.616 16.0506L51.0587 43.3733C50.9044 43.9324 50.5721 44.426 50.112 44.7792C49.652 45.1324 49.0893 45.326 48.5093 45.3306H15.4933C14.9129 45.3266 14.3496 45.1332 13.8891 44.78C13.4285 44.4267 13.0957 43.9328 12.9413 43.3733L5.38668 16.0533C5.31268 15.781 5.327 15.4922 5.42759 15.2285C5.52817 14.9648 5.70983 14.7398 5.94641 14.586C6.183 14.4321 6.4623 14.3573 6.74412 14.3722C7.02594 14.3872 7.29574 14.4912 7.51468 14.6693L18.9173 24.44C19.2208 24.6907 19.576 24.8712 19.9575 24.9684C20.339 25.0657 20.7373 25.0772 21.1237 25.0023C21.5102 24.9273 21.8753 24.7677 22.1928 24.5349C22.5103 24.3022 22.7723 24.002 22.96 23.656L30.832 8.70929Z"
                    stroke="var(--color-gold)"
                    strokeWidth="5.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M13.3333 56H50.6667"
                    stroke="var(--color-gold)"
                    strokeWidth="5.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <div className="flex flex-col justify-center items-center gap-16 align-stretch">
                <p className="text-white text-center text-30 font-bold">
                    Join Our Legacy
                </p>
                <p className="text-white text-center text-20">
                    Partner with Mumbai's most prestigious cultural event and gain
                    visibility among thousands of families
                </p>
            </div>
            <div className="flex justify-center items-center gap-128 RowToCol RemoveGap">
                {stats.map((stat, idx) => (
                    <div className="flex flex-col" key={stat.label + idx}>
                        <p className="text-gold text-center text-30 font-bold">{stat.value}</p>
                        <p className="text-white text-center text-16">{stat.label}</p>
                    </div>
                ))}
            </div>
            <div className="flex px-16-48 justify-center items-center gap-16 rounded-full border-4-gold Gallery Button"
                onClick={() => {
                    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                >
                    <path
                        d="M15.977 12.89L17.492 21.416C17.509 21.5164 17.4949 21.6196 17.4516 21.7118C17.4084 21.8039 17.338 21.8807 17.2499 21.9318C17.1619 21.9829 17.0603 22.0059 16.9588 21.9977C16.8573 21.9895 16.7607 21.9506 16.682 21.886L13.102 19.199C12.9292 19.07 12.7192 19.0003 12.5035 19.0003C12.2878 19.0003 12.0778 19.07 11.905 19.199L8.319 21.885C8.24032 21.9496 8.14386 21.9885 8.04249 21.9967C7.94112 22.0049 7.83967 21.9819 7.75166 21.931C7.66365 21.88 7.59327 21.8035 7.54991 21.7115C7.50656 21.6195 7.49228 21.5165 7.509 21.416L9.023 12.89"
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
                <p className="text-gold text-20 font-bold">Become a Sponsor</p>
            </div>
        </div>
    </div>
);

export default Sponsors;