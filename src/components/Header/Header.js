import React from "react";

import content from "../../content/ContentHeader";
import Logo from "./Logo/Logo";
import MenuOptions from "./Menu/MenuOptions";

const Header = (props) => {
  return (
    <header className="sticky top-0 z-10">
      <nav className="navbar relative w-full">
        <div className="container flex justify-center md:justify-between items-center">
          <Logo />
          <MenuOptions />
        </div>
      </nav>
    </header>
  );
};

export default Header;
