import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import NavbarLogic from "./NavbarLogic"

const NavBar = () => {
  // const history = useHistory();

  return (
    <nav>
      <Link to="/game">X</Link>
      <Link to="/help">Help</Link>

      <NavbarLogic />
    </nav>
  );
};

export default NavBar;