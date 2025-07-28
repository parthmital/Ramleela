const Gallery = () => (
    <div className="flex px-72-128 flex-col items-center gap-72 bg-red-dark">
        <div className="flex flex-col gap-24">
            <p className="text-yellow text-center text-72 font-bold">Moments of Glory</p>
            <p className="text-white text-center text-20">Relive the magic and grandeur of our previous celebrations</p>
        </div>
        <div className="flex justify-center gap-24 flex-wrap">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="flex w-300 h-300 px-24 flex-col justify-end gap-8 rounded-8 border-4-gold Gallery Hover">
                    <p className="text-white text-18 font-bold">Three Decades of Excellence</p>
                    <p className="text-gold text-14">Main Event</p>
                </div>
            ))}
        </div>
    </div>
);

export default Gallery