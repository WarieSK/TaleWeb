import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ShowInfoDetail.css";
import showsData from "../data/showsData";
import Gallery from "./Gallery";

const ShowParticipants = ({ cast, crew }) => {
  const navigate = useNavigate();

  if ((!cast || cast.length === 0) && (!crew || crew.length === 0)) return null;

  const crewCount = crew.length;
  const column1 = cast.slice(0, crewCount);
  const column2 = cast.slice(crewCount);

  const groupedCrew = {};
  crew.forEach((member) => {
    if (!groupedCrew[member.role]) {
      groupedCrew[member.role] = [];
    }
    groupedCrew[member.role].push(member);
  });

  const handleMemberClick = (id) => {
    if (id) {
      navigate(`/Members/${id}`);
    }
  };

  return (
    <div className="show-info-participants">
      <div className="participants-grid">
        <div className="crew-column">
          <h2>Technický tím</h2>
          {Object.entries(groupedCrew).map(([role, members], index) => (
            <div key={index} className="crew-row">
              <div className="crew-role"><strong>{role}</strong></div>
              <div className="crew-names">
                {members.map((member, idx) => (
                  <div 
                    key={idx} 
                    className="crew-name clickable-name"
                    onClick={() => handleMemberClick(member.id)}
                  >
                    {member.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="cast-column">
          <h2>Účinkujúci</h2>
          {column1.map((actor, index) => (
            <div key={index} className="cast-row">
              <div className="cast-name">
                <span
                  className="clickable-name"
                  onClick={() => handleMemberClick(actor.id)}
                >
                  {actor.name}
                </span>
              </div>
              <div className="cast-role">{actor.role}</div>
            </div>
          ))}
        </div>
        <div className="cast-column">
          <div style={{ height: '1.5rem', marginBottom: '20px' }}></div>
          {column2.map((actor, index) => (
            <div key={index} className="cast-row">
              <div className="cast-name">
                <span
                  className="clickable-name"
                  onClick={() => handleMemberClick(actor.id)}
                >
                  {actor.name}
                </span>
              </div>
              <div className="cast-role">{actor.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ShowInfoDetail = ({ showId }) => {
  const params = useParams();
  const id = showId || params.id;
  const show = showsData.find((s) => s.id === Number(id));

  if (!show) {
    return <h2 className="not-found">Predstavenie nebolo nájdené</h2>;
  }

  return (
    <div className="show-info-container">
      <div className="show-info-detail">
        <div className="show-info-image-wrapper">
          <img src={show.image} alt={show.title} className="show-info-image" />
        </div>
        <div className="show-info-content">
          <h1 className="show-info-title">{show.title}</h1>
          <p className="show-info-date"><strong>Rok:</strong> {show.date}</p>
          <p className="show-info-description">{show.description}</p>
        </div>
      </div>
      <ShowParticipants cast={show.cast} crew={show.crew} />
    </div>
  );
};

export default ShowInfoDetail;
