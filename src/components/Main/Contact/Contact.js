import React from "react";

import CoverImage from "./CoverImage";
import PersonalInfo from "./PersonalInfo";

const Contact = (props) => {
  return (
    <div id="Contact" className="container 620px:grid 620px:grid-cols-4 620px:gap-6 620px:items-center 620px:justify-items-start">
      <CoverImage />
      <PersonalInfo />
    </div>
  );
};

export default Contact;
