import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FilteredMemberCards.css";
import membersData from "../data/membersData";

const FilteredMemberCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/members/${id}`);
  };

  // Filtrácia členov s id >= 1000
  const filteredMembers = membersData.filter(member => member.id >= 1000);

  return (
    <div className="filteredMembers-container">
  <div className="filteredMembers-label">In Memoriam</div>
  <h2 className="filteredMembers-title">Členovia in memoriam</h2>
  <div className="filteredMembers-grid">
    {filteredMembers.map((member) => (
      <div
        key={member.id}
        className="filteredMember-card"
        onClick={() => handleCardClick(member.id)}
        style={{ cursor: "pointer" }}
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
</div>

  );
};

export default FilteredMemberCards;
