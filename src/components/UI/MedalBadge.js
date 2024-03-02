import React from "react";

import { medalSVG } from "../../content/ContentIcons";

const MedalBadge = (props) => {
  return (
    <div
      id={props.divId}
      className={`inline-flex group bg-none ${
        props.rank === 1
          ? "text-gold"
          : props.rank === 2
          ? "text-silver"
          : props.rank === 3
          ? "text-bronze"
          : ""
      } ${props.classes || ''}`}
    >
      {medalSVG}
    </div>
  );
};

export default MedalBadge;
