import React from 'react';
import "../styles/Hero.css"


const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Z Hradu Do Rozprávky</h1>
        <p>
          Vitajte na našej stránke, kde sa rozprávky ožívajú a každý deň prinášajú kúzlo.
        </p>
        <button className="cta-button" onClick={scrollToAbout}>
          Zisti viac
        </button>
      </div>
    </section>
  );
};

export default Hero;

