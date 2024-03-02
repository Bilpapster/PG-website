import React from "react";

const Container = (props) => {
  return (
    <div className={`container ${props.classes ? props.classes : ""}`}>
      {props.children}
    </div>
  );
};

export default Container;
