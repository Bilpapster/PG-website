import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_BORDER_COLOR = "trietary-light";

const AchievementShortItem = (props) => {
  const borderColor = props.borderColor
    ? props.borderColor
    : DEFAULT_BORDER_COLOR;
  return (
    <span className={`achievement-short border border-${borderColor} group`}>
      <div className="achievement-number">{props.number}</div>
      <span className="achievement-description">{props.description}</span>
    </span>
  );
};

export default AchievementShortItem;
