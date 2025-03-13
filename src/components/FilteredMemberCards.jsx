import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FilteredMemberCards.css";
import membersData from "../data/membersData";

const FilteredMemberCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/members/${id}`);
  };

  const filteredMembers = membersData.filter(member => member.id >= 1000);

  return (
    <div className="filteredMembers-container">
      <div className="filteredMembers-content">
        {/* Grid pre kartičky */}
        <div className="filteredMembers-grid">
          {filteredMembers.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className="filteredMember-card"
              onClick={() => handleCardClick(member.id)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="filteredMember-image"
              />
              <div className="filteredMember-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Textová časť */}
        <div className="filteredMembers-text">
          <h2>In Memoriam</h2>
          <p>
            Táto sekcia je venovaná členom, ktorí už nie sú medzi nami. Ich prínos
            a odkaz ostávajú v našich srdciach a na javisku. Spomíname na nich s
            láskou a úctou.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilteredMemberCards;
