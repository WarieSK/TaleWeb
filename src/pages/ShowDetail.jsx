import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShowInfoDetail from "../components/ShowInfoDetail";
import ShowsData from "../data/showsData";

const ShowDetail = () => {
  return (
    <div className="shows-page"> 
      <Header />
      <main>
        <ShowInfoDetail shows={ShowsData} />
      </main>
      <Footer />
    </div>
  );
};

export default ShowDetail;