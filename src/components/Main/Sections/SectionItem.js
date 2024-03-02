import React from "react";
import { Link } from "react-router-dom";

const SectionItem = (props) => {
  return (
    <span className="section-item group">
      <Link className="w-full" to={props.link}>
        <div className="section-item-icon">
          {props.svg}
        </div>
        <span className="section-item-text">{props.text}</span>
      </Link>
    </span>
  );
};

export default SectionItem;
