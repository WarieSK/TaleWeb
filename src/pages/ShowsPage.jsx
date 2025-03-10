import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShowCards from "../components/ShowCards";
import ShowsData from "../data/showsData";

const ShowsPage = () => {
  return (
    <div className="shows-page"> 
      <Header />
      <main>
        <ShowCards shows={ShowsData} />
      </main>
      <Footer />
    </div>
  );
};

export default ShowsPage;