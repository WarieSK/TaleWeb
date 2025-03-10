import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MemberCards.css";
import membersData from "../data/membersData";

const MemberCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/members/${id}`);
  };

  return (
    <div className="membersCards-container">
      <h2 className="membersCards-title">Naši členovia</h2>
      <div className="membersCards-grid">
        {membersData.map((member) => (
          <div key={member.id} className="memberCards-card" onClick={() => handleCardClick(member.id)} style={{ cursor: "pointer" }}>
            <img src={member.image} alt={member.name} className="memberCards-image" />
            <div className="memberCards-info">
              <h3>{member.name}</h3>
              <p className="memberCards-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberCards;