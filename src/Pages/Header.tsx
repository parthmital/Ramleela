const navItems = [
    "About",
    "Schedule",
    "Gallery",
    "Sponsors",
    "Contact"
];

const Header = () => (
    <div className="flex px-16-72 justify-between borderb-4-gold bg-red-dark">
        <div className="flex items-center gap-12">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    d="M19.27 5.44313C19.3419 5.31247 19.4476 5.20352 19.576 5.12763C19.7044 5.05175 19.8509 5.01172 20 5.01172C20.1492 5.01172 20.2956 5.05175 20.424 5.12763C20.5524 5.20352 20.6581 5.31247 20.73 5.44313L25.65 14.7831C25.7673 14.9994 25.9311 15.187 26.1295 15.3325C26.3279 15.478 26.5561 15.5777 26.7977 15.6246C27.0392 15.6714 27.2881 15.6642 27.5266 15.6034C27.765 15.5427 27.987 15.4299 28.1767 15.2731L35.305 9.16646C35.4418 9.05516 35.6105 8.99015 35.7866 8.98079C35.9627 8.97143 36.1373 9.0182 36.2852 9.11437C36.433 9.21054 36.5466 9.35114 36.6094 9.51594C36.6723 9.68075 36.6813 9.86125 36.635 10.0315L31.9117 27.1081C31.8153 27.4576 31.6075 27.7661 31.32 27.9868C31.0325 28.2076 30.6808 28.3286 30.3183 28.3315H9.68333C9.32056 28.3289 8.96852 28.2081 8.68065 27.9873C8.39279 27.7665 8.18483 27.4578 8.08833 27.1081L3.36667 10.0331C3.32042 9.86291 3.32937 9.68241 3.39223 9.51761C3.4551 9.35281 3.56864 9.2122 3.7165 9.11604C3.86437 9.01987 4.03893 8.9731 4.21507 8.98246C4.3912 8.99182 4.55983 9.05683 4.69667 9.16813L11.8233 15.2748C12.013 15.4315 12.235 15.5443 12.4734 15.6051C12.7119 15.6659 12.9608 15.6731 13.2023 15.6262C13.4439 15.5794 13.6721 15.4796 13.8705 15.3342C14.0689 15.1887 14.2327 15.0011 14.35 14.7848L19.27 5.44313Z"
                    stroke="var(--color-gold)"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M8.33333 35H31.6667"
                    stroke="var(--color-gold)"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <div className="flex flex-col gap-4">
                <p className="text-yellow text-24 font-bold">Chembur Ramleela</p>
                <p className="text-gold text-14">Since 1994</p>
            </div>
        </div>
        <div className="flex items-center gap-32 Hide">
            {navItems.map((item: string) => (
                <p key={item} className="text-yellow text-18 font-medium HeaderButton">{item}</p>
            ))}
        </div>
    </div>
);

export default Header