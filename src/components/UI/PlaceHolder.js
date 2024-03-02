import React from "react";

const PlaceHolder = (props) => {
  return (
    <div className={`block text-transparent select-none peer-hover/${props.group1}:hidden peer-hover/${props.group2}:hidden ${props.classes || ''}`}>
      1st in general ranking
    </div>
  );
};

export default PlaceHolder;
