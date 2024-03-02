import React from "react";

const Grid = (props) => {
  return (
    <div className={`grid grid-cols-${props.cols} gap-${props.gap} ${props.classes ? props.classes : ''}`}>
      {props.children}
    </div>
  );
};

export default Grid;
