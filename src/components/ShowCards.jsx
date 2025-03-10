import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ShowCards.css";

const ShowCards = ({ shows }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/shows/${id}`);
  };

  return (
    <div className="showsCards-container">
      <h2 className="showsCards-title">Naše predstavenia</h2>
      <div className="showsCards-grid">
        {shows.map((show) => (
          <div key={show.id} className="showCards-card" onClick={() => handleCardClick(show.id)} style={{ cursor: "pointer" }}>
            <img src={show.image} alt={show.title} className="showCards-image" />
            <div className="showCards-info">
              <h3>{show.title}</h3>
              <p className="showCards-date">{show.date}</p>
              <p className="showCards-description">{show.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCards;