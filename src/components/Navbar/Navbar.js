import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import Logo from "../Header/Logo/Logo";
import "./Navbar.css";

import content from "../../content/ContentHeader";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar text-center">
        <div className="navbar-container container">
          <Logo onClick={closeMobileMenu} />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {content.options.map((menuOption) => {
              return (
                <li className="nav-item" key={menuOption.id}>
                  <Link
                    to={`${menuOption.path}`}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {menuOption.id}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
