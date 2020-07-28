import React from "react";
import { Link } from "react-router-dom";
import monsterIcon from "../Assets/icons/monster.gif";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        {}
        <Link to="/game">
          <img src={monsterIcon} />
        </Link>
        <Link to="/help">Help</Link>
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

{
  /* <span
          onClick={(event) => {
            this.props.logoutCallback();
            localStorage.removeItem("token");
            this.props.history.push("/login");
          }}
        >
          Logout
        </span> */
}
