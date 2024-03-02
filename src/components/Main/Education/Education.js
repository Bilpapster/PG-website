import React from "react";
import SectionTitle from "../../UI/SectionTitle";

import content from "../../../content/ContentEducation";
import EducationItem from "./EducationItem";

const Education = (props) => {
  return (
    <section id="Education" className="container">
      <SectionTitle>Education</SectionTitle>
      {content.map((educationExperience) => {
        return (
          <EducationItem
            key={educationExperience.id}
            title={educationExperience.title}
            about={educationExperience.about}
            start={educationExperience.start.getFullYear().toString()}
            end={
              educationExperience.end ?
              educationExperience.end.getFullYear().toString():
              'present'
            }
            gpa={educationExperience.gpa}
          />
        );
      })}
    </section>
  );
};

export default Education;
