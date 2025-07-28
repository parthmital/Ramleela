const Schedule = () => {
    return (
        <div className="flex px-72-128 flex-col gap-72 bg-white">
            <div className="flex flex-col items-center gap-24">
                <div className="flex items-center gap-16">
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" style={{ stroke: 'var(--color-red-dark)' }} fill="none">
                        <path d="M20 36.6668C29.2047 36.6668 36.6667 29.2049 36.6667 20.0002C36.6667 10.7954 29.2047 3.3335 20 3.3335C10.7952 3.3335 3.33333 10.7954 3.33333 20.0002C3.33333 29.2049 10.7952 36.6668 20 36.6668Z" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 10V20L26.6667 23.3333" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="w-64 h-4 bg-gradient-red-dark-ltr" />
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" style={{ stroke: 'var(--color-red-dark)' }} fill="none">
                        <path d="M23.124 6.53185C23.2103 6.37506 23.3371 6.24432 23.4912 6.15326C23.6453 6.0622 23.821 6.01416 24 6.01416C24.179 6.01416 24.3547 6.0622 24.5088 6.15326C24.6628 6.24432 24.7897 6.37506 24.876 6.53185L30.78 17.7398C30.9208 17.9994 31.1173 18.2245 31.3554 18.3991C31.5935 18.5737 31.8673 18.6934 32.1572 18.7496C32.447 18.8058 32.7458 18.7971 33.0319 18.7242C33.318 18.6513 33.5844 18.5159 33.812 18.3278L42.366 10.9998C42.5302 10.8663 42.7325 10.7883 42.9439 10.7771C43.1553 10.7658 43.3648 10.8219 43.5422 10.9373C43.7196 11.0527 43.8559 11.2215 43.9313 11.4192C44.0067 11.617 44.0175 11.8336 43.962 12.0378L38.294 32.5298C38.1783 32.9492 37.929 33.3194 37.584 33.5843C37.239 33.8492 36.817 33.9944 36.382 33.9979H11.62C11.1847 33.9948 10.7622 33.8498 10.4168 33.5849C10.0713 33.3199 9.82178 32.9495 9.70599 32.5298L4.03999 12.0398C3.98449 11.8356 3.99524 11.619 4.07068 11.4212C4.14611 11.2235 4.28236 11.0547 4.4598 10.9393C4.63723 10.8239 4.84671 10.7678 5.05807 10.7791C5.26944 10.7903 5.47179 10.8683 5.63599 11.0018L14.188 18.3298C14.4156 18.5179 14.682 18.6533 14.9681 18.7262C15.2542 18.7991 15.5529 18.8078 15.8428 18.7516C16.1326 18.6954 16.4065 18.5757 16.6446 18.4011C16.8827 18.2265 17.0792 18.0014 17.22 17.7418L23.124 6.53185Z" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 42H38" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="w-64 h-4 bg-gradient-red-dark-rtl" />
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" style={{ stroke: 'var(--color-red-dark)' }} fill="none">
                        <path d="M20 36.6668C29.2047 36.6668 36.6666 29.2049 36.6666 20.0002C36.6666 10.7954 29.2047 3.3335 20 3.3335C10.7952 3.3335 3.33331 10.7954 3.33331 20.0002C3.33331 29.2049 10.7952 36.6668 20 36.6668Z" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 10V20L26.6667 23.3333" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <p className="text-red-dark text-72 font-bold text-center">10 Days of Epic Drama</p>
                <p className="text-black text-20 text-center">Each evening brings a new chapter of the timeless Ramayana to life</p>
            </div>
            <div className="flex flex-col gap-24 align-stretch">
                <div className="flex px-32 items-center justify-between align-stretch rounded-8 border-4-red-dark RowToCol gap-16 Schedule Hover">
                    <div className="flex flex-col gap-4">
                        <p className="text-red-dark text-24 font-bold">Day 1</p>
                        <p className="text-black text-18">22 Sep</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-black text-24 font-bold">Ram Janma</p>
                        <p className="text-black text-16">Birth of Lord Rama with traditional aarti</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" style={{ stroke: 'var(--color-red-dark)' }} fill="none">
                            <g clipPath="url(#clip0_5_403)">
                                <path d="M9.99999 18.3332C14.6024 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6024 1.6665 9.99999 1.6665C5.39762 1.6665 1.66666 5.39746 1.66666 9.99984C1.66666 14.6022 5.39762 18.3332 9.99999 18.3332Z" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 5V10L13.3333 11.6667" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_5_403">
                                    <rect width={20} height={20} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-red-dark text-18 font-bold">7:00 PM</p>
                    </div>
                    <p className="flex px-12-24 rounded-full bg-gold text-red-dark text-18 font-bold justify-center">Grand Opening Ceremony</p>
                </div>
                <div className="flex px-32 items-center justify-between align-stretch rounded-8 border-4-red-dark RowToCol gap-16 Schedule Hover">
                    <div className="flex flex-col gap-4">
                        <p className="text-red-dark text-24 font-bold">Day 1</p>
                        <p className="text-black text-18">22 Sep</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className="text-black text-24 font-bold">Ram Janma</p>
                        <p className="text-black text-16">Birth of Lord Rama with traditional aarti</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" style={{ stroke: 'var(--color-red-dark)' }} fill="none">
                            <g clipPath="url(#clip0_5_403)">
                                <path d="M9.99999 18.3332C14.6024 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6024 1.6665 9.99999 1.6665C5.39762 1.6665 1.66666 5.39746 1.66666 9.99984C1.66666 14.6022 5.39762 18.3332 9.99999 18.3332Z" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 5V10L13.3333 11.6667" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_5_403">
                                    <rect width={20} height={20} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-red-dark text-18 font-bold">7:00 PM</p>
                    </div>
                    <p className="flex px-12-24 rounded-full bg-gold text-red-dark text-18 font-bold justify-center">Grand Opening Ceremony</p>
                </div>
            </div>
        </div>
    );
}

export default Schedule;