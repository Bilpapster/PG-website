import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Education from "../components/Main/Education/Education";

const VolunteeringPage = (props) => {
  return (
    <div>
      <Navbar id="header" />
      <div className="container">
        <div className="py-16">
          <p>
            This page is still under construction! When ready, it will contain
            all Maria's volunteering activities, including beach cleaning in
            Sicily, Italy, environment preservation initiatives and many more.
          </p>
          <p>
            Both Maria and the developer of this website are full time students
            + part-time proffessionals (each one in its own principle). As a
            result, we devote love and affection to the development of this
            website in our free time, which, unfortunately, is not much.
            However, we feel confident that the website will be up and running
            till the end of February 2024. Till then, we just wish the day had
            more than 24 hours, so we could devote them to development. Thank
            you for aligning your wishes with ours! :){" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolunteeringPage;
