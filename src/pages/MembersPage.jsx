import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MemberCards from "../components/MemberCards";
import Footer from "../components/Footer";
import membersData from "../data/membersData";
import FilteredMemberCards from "../components/FilteredMemberCards";

const MembersPage = () => {
  return (
    <div className="members-page">
      <Header />
      <main>
        <FilteredMemberCards members={membersData} />
        <MemberCards members={membersData} />
      </main>
      <Footer />
    </div>
  );
};

export default MembersPage;
