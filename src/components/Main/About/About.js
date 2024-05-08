import React from "react";
import SectionTitle from "../../UI/SectionTitle";

import content from "../../../content/ContentAbout";

const About = (props) => {
  return (
    <section className="bg-secondary-normal bg-opacity-20" id="About">
      <div className="container">
        <SectionTitle>About</SectionTitle>
        {content.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </section>
  );
};

export default About;
