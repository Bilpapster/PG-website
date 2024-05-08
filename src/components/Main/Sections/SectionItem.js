import React from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button";

const SectionItem = (props) => {
  return (
    <span className="section-item group">
      <Link className="w-full" to={props.link}>
        {/* <div className="section-item-icon">{props.svg}</div> */}

        <div className="flex justify-center items-center overflow-hidden">
          <img
            class="mb-2 rounded-xl rounded-b-none"
            src={props.image}
            alt=""
          />
        </div>
        <div className="section-item-text">{props.text}</div>
        <div className="section-item-description">{props.description}</div>
        <div className="text-end py-4">
          <Button
            aClass="not-italic"
            link="https://www.github.com/bilpapster"
            target="_blank"
            buttonText={`See ${props.text}`}
            svg={props.svg}
          />
        </div>
      </Link>
    </span>
  );
};

export default SectionItem;
