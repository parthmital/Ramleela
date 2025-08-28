const Gallery = () => (
  <div
    id="Gallery"
    className="flex px-72-128 flex-col items-center gap-72 bg-red-dark"
    style={{ scrollMarginTop: "var(--scroll-margin-header)" }}
  >
    <div className="flex flex-col gap-24">
      <p className="text-yellow text-center text-72 font-bold">
        Moments of Glory
      </p>
      <p className="text-white text-center text-20">
        Relive the magic and grandeur of our previous celebrations
      </p>
    </div>
    <div className="flex justify-center gap-24 flex-wrap Gallery">
      {["2.png", "3.png", "4.png", "5.png", "6.png", "7.png"].map((img, i) => (
        <div
          key={i}
          className="flex h-300 flex-col gap-8 rounded-8 border-4-gold Gallery Hover"
          style={{
            width: "400px",
            backgroundImage: `url(Images/${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}
    </div>
  </div>
);

export default Gallery;
