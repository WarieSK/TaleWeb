import React from "react";
import "../styles/Members.css";

const membersData = [
  {
    id: 1,
    name: "Ján Novák",
    role: "Herec",
    image: "JA.jpg",
  },
  {
    id: 2,
    name: "Mária Kováčová",
    role: "Režisérka",
    image: "JA.jpg",
  },
  {
    id: 3,
    name: "Peter Horváth",
    role: "Scénograf",
    image: "JA.jpg",
  },
  {
    id: 2,
    name: "Mária Kováčová",
    role: "Režisérka",
    image: "JA.jpg",
  },
  {
    id: 2,
    name: "Mária Kováčová",
    role: "Režisérka",
    image: "JA.jpg",
  },
  {
    id: 2,
    name: "Mária Kováčová",
    role: "Režisérka",
    image: "JA.jpg",
  },
  {
    id: 2,
    name: "Mária Kováčová",
    role: "Režisérka",
    image: "JA.jpg",
  },
];

const Members = () => {
  return (
    <section className="members">
      <h1>Členovia divadelného zoskupenia</h1>
      <div className="members-grid">
        {membersData.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
