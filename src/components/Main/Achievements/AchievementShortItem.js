import React from "react";
import { Link } from "react-router-dom";

const AchievementShortItem = (props) => {
  return (
    <span className="achievement-short group">
        <div className="achievement-number">
          {props.number}
        </div>
        <span className="achievement-description">{props.description}</span>
    </span>
  );
};

export default AchievementShortItem;
