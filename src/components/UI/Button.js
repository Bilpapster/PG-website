import React from "react";

const Button = (props) => {
  return (
    <a
      className={`custom-button group ${props.aClass ? props.aClass : ''}`}
      href={props.link}
      target={props.target ? props.target : "_blank"}
    >
      {props.svg}
      <span className="pl-2">{props.buttonText}</span>
    </a>
  );
};

export default Button;
