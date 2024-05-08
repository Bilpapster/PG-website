import React from "react";
import AchievementsDisplay from "../components/Main/Achievements/AchievementsDisplay";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const AthleticsPage = (props) => {
  return (
    <div>
      <Navbar id="header" />
      <AchievementsDisplay />
      <Footer />
    </div>
  );
};

export default AthleticsPage;
