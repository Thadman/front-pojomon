import React from "react";
import { Link } from "react-router-dom";
import monsterIcon from "../Assets/icons/monster.gif";

class NavBar extends React.Component {
  // let cantAccess = false

  // if (localStorage.getItem = true) {
  //   cantAccess = true
  // }

  render() {
    console.log(localStorage.getItem);
    return (
      <div className="navBar">
        <div className="icon-link">
          <Link to="/game">
            <img src={monsterIcon} alt="" />
          </Link>
        </div>

        <div className="icon-link">
          <Link to="/help">?</Link>
        </div>

        <Link to="/login" data-testid="login">
          Login
        </Link>

        <Link
          to="/login"
          onClick={(event) => {
            this.props.logoutCallback();
            localStorage.removeItem("token");
          }}
        >
          Logout
        </Link>
      </div>
    );
  }
}

export default NavBar;
