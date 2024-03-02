import React from "react";
import { Link } from "react-router-dom";

import content from "../../../content/ContentHeader";

const MenuOptions = (props) => {
  return (
    <ul className="justify-center md:justify-end">
      {content.options.map((menuOption) => {
        return (
          <li className="navbar-item" key={menuOption.id}>
            <Link to={`${menuOption.path}`}>
              <span>{menuOption.id}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOptions;
