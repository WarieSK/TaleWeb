import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/MemberInfoDetail.css";
import membersData from "../data/membersData";
import showsData from "../data/showsData";

const MemberShows = ({ shows }) => {
  const navigate = useNavigate();

  if (!shows || shows.length === 0) return null;

  return (
    <div className="member-info-shows">
      <h2>Účinkovanie v predstaveniach</h2>
      <ul>
        {shows.map((show) => (
          <li
            key={show.id}
            onClick={() => navigate(`/shows/${show.id}`)}
            className="clickable-name"
          >
            {show.title} ({show.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

const MemberInfoDetail = ({ memberId }) => {
  const params = useParams();
  const id = Number(memberId) || Number(params.id);
  const [member, setMember] = useState(null);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    if (!isNaN(id)) {
      const foundMember = membersData.find((m) => m.id === id);
      setMember(foundMember);

      if (foundMember) {
        const relatedShows = showsData.filter(
          (show) =>
            show.cast?.some((c) => c.id === id) ||
            show.crew?.some((c) => c.id === id)
        );
        setShows(relatedShows);
      }
    }
  }, [id]);

  if (!member) {
    return <h2 className="not-found">Člen nebol nájdený</h2>;
  }

  return (
    <div className="member-info-container">
      <div className="member-info-detail">
        <div className="member-info-image-wrapper">
          <img
            src={member.image}
            alt={member.name}
            className="member-info-image"
          />
        </div>
        <div className="member-info-content">
          <h1 className="member-info-title">{member.name}</h1>
          <p className="member-info-role"><strong>Rola:</strong> {member.role}</p>
          <p className="member-info-bio">{member.bio}</p>
          <MemberShows shows={shows} />
        </div>
      </div>
    </div>
  );
};

export default MemberInfoDetail;
