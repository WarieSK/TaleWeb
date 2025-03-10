import React, { useState } from "react";
import "../styles/ShowsTimeline.css";

// Import obrázkov z assets (ak používaš `src/assets/images/`)
// Použi `public/images/` ak nechceš importovať
import TVK from "../assets/TVK-265.jpg";
import Z from "../assets/Z-171.jpg";
import CDKV from "../assets/CDKV-1.jpg";
import MM from "../assets/MM-1.jpg";
import KVC from "../assets/KVC-1.jpg"

// Zoznam obrázkov a textov
const slides = [
  {
    id: 1,
    image: TVK,
    text: "Prvý obrázok - Popis obrázka 1"
  },
  {
    id: 2,
    image: Z,
    text: "Druhý obrázok - Popis obrázka 2"
  },
  {
    id: 3,
    image: CDKV,
    text: "Tretí obrázok - Popis obrázka 3"
  }
];

const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Posunutie na ďalší obrázok
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Posunutie na predchádzajúci obrázok
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>‹</button>
      <div className="slider-content">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <p className="slider-text">{slides[currentIndex].text}</p>
      </div>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default SimpleSlider;
