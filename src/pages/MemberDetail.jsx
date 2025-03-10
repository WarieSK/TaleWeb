import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MemberInfoDetail from "../components/MemberInfoDetail";
import membersData from "../data/membersData";

const MemberDetail = () => {
  return (
    <div className="member-page">
      <Header />
      <main>
        <MemberInfoDetail members={membersData} />
      </main>
      <Footer />
    </div>
  );
};

export default MemberDetail;
