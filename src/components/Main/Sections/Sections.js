import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import sectionDetails from "../../../content/ContentSections";
import SectionItem from "./SectionItem";

const Sections = (props) => {
  return (
    <section id="more" className="container text-center">
      <SectionTitle>More</SectionTitle>
      {sectionDetails.map((sectionItem) => {
        return (
          <SectionItem
            key={sectionItem.id}
            text={sectionItem.name}
            link={sectionItem.link}
            svg={sectionItem.svg}
          />
        );
      })}
    </section>
  );
};

export default Sections;
