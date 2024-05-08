import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DesignHighlights from "../components/Main/Design/DrawingHighlights";
import SectionTitle from "../components/UI/SectionTitle";
import FreelancingPortraits from "../components/Main/Design/FreelancingPortraits";

const DesignsPage = (props) => {
  return (
    <div>
      <Navbar id="header" />
      <div className="container">
        <SectionTitle>Design Highlights</SectionTitle>
        <DesignHighlights />
        <SectionTitle>Freelancing Portraits</SectionTitle>
        <FreelancingPortraits />
      </div>
      <Footer />
    </div>
  );
};

export default DesignsPage;
