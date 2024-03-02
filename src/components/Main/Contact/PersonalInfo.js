import React from "react";

import content from "../../../content/ContentPersonalInfo";
import { contactDetails } from "../../../content/ContentPersonalInfo";
import ContactItem from "./ContactItem";

const PersonalInfo = (props) => {
  return (
    <div className="620px:col-span-3">
      <h2 className="text-3xl lg:text-6xl font-bold inline-block mb-0 md:mb-2 tracking-wider drop-shadow-md">
        {`${content.name} ${content.surname}`}
      </h2>
      <h3 className="text-lg text-trietary-dark block mb-3 md:mb-10 italic">
        {content.role}
      </h3>
      {contactDetails.map((contactItem) => {
        return (
          <ContactItem
            key={contactItem.id}
            svg={contactItem.svg}
            target="_blank"
            link={contactItem.link}
            label={contactItem.name}
          />
        );
      })}
    </div>
  );
};

export default PersonalInfo;
