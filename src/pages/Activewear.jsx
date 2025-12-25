 import img1 from "../assets/sportswear.jpg.jpg";
import img2 from "../assets/casial.jpg";
import img3 from "../assets/cat.jpg";
import img4 from "../assets/drindll.jpg";
import img5 from "../assets/fight.jpg";
import img6 from "../assets/fitness.jpg";

import HTMLFlipBook from "react-pageflip";
import { useState, useRef } from "react";
import jsPDF from "jspdf";
import pageFlipSound from "../assets/page-flip.mp3";

const Activewear = () => {
  // ✅ FIX: isMobile sab se pehle
  const isMobile = window.innerWidth < 640;

  const BOOK_WIDTH = isMobile ? 280 : 360;
  const IMAGE_RATIO = 4 / 5;
  const BOOK_HEIGHT = BOOK_WIDTH / IMAGE_RATIO;

  const [zoomedIndex, setZoomedIndex] = useState(null);
  const flipAudioRef = useRef(null);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img2,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img3,
    img4,
    img5,
    img6,
    img1,
  ];

  const prices = ["$29", "$35", "$40", "$25", "$45", "$50"];

  const description =
    "Explore our latest collection of activewear designed for comfort and performance. Premium quality materials ensure durability and style for every workout.";

  const exportPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");

    images.forEach((img, index) => {
      if (index !== 0) pdf.addPage();
      pdf.addImage(img, "JPEG", 10, 10, 190, 270);
    });

    pdf.save("activewear-catalog.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-300 to-slate-900 overflow-hidden">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center pt-16 pb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
          Active Wear Catalog
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-red-400 rounded-full mb-6" />
      </div>

      {/* Description */}
      <div className="flex justify-center px-4 mb-12">
        <p className="max-w-2xl text-center text-gray-200 text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Audio */}
      <audio ref={flipAudioRef} src={pageFlipSound} preload="auto" />

      {/* Flipbook */}
      <div className="flex justify-center mb-12">
        <HTMLFlipBook
          width={BOOK_WIDTH}
          height={BOOK_HEIGHT}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover
          mobileScrollSupport={false}
          className="shadow-2xl bg-white"
          onFlip={() => {
            flipAudioRef.current.currentTime = 0;
            flipAudioRef.current.play();
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-full bg-white flex items-center justify-center"
            >
              <img
                src={img}
                alt={`page-${index}`}
                onDoubleClick={() =>
                  setZoomedIndex(zoomedIndex === index ? null : index)
                }
                className={`w-full h-full object-contain transition-transform duration-300 ${
                  zoomedIndex === index
                    ? "scale-150 cursor-zoom-out"
                    : "cursor-zoom-in"
                }`}
              />

              {/* Price */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
                {prices[index % prices.length]}
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* CTA */}
      <div className="flex justify-center px-4 pb-16">
        <div className="max-w-2xl text-center">
          <p className="text-gray-300 text-lg mb-6">{description}</p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-gradient-to-r from-red-200 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Shop Now
            </button>

            <button
              onClick={exportPDF}
              className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activewear;

