import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShowInfoDetail from "../components/ShowInfoDetail";
import ShowsData from "../data/showsData";
import Songs from "../data/showSongs"
import YouTubeMusicCard from "../components/YouTubeMusicCard";

const ShowDetail = () => {
  return (
    <div className="shows-page"> 
      <Header />
      <main>
        <ShowInfoDetail shows={ShowsData} />
      </main>
      <YouTubeMusicCard songs={Songs} />
      <Footer />
    </div>
  );
};

export default ShowDetail;