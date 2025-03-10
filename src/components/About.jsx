import React from 'react';
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>O nás</h2>
        <p>
          Vitajte v našom divadle! Sme skupina nadšených umelcov, ktorí prinášajú
          príbehy k životu prostredníctvom jedinečných predstavení.
        </p>
        <p>
          Našim cieľom je očariť divákov, preniesť ich do sveta fantázie a
          sprostredkovať nezabudnuteľné zážitky.
        </p>
        <Link to="/members" className="about-button">Spoznaj nás</Link>
      </div>
    </section>
  );
};

export default About;
