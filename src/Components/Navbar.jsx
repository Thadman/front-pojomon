import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  choice = () => {
    console.log(this.props);
    if (this.props.loggedIn) {
      return (
        <span
          onClick={(event) => {
            this.props.logoutCallback();
            localStorage.removeItem("token");
            this.props.history.push("/login");
          }}
        >
          Logout
        </span>
      );
    } else {
      return <Link to="/login">Login</Link>;
    }
  };
  render() {
    return (
      <nav>
        <Link to="/game">Monster</Link>
        <Link to="/help">Help</Link>
        <Link to="/login" data-testid="login">
          Login
        </Link>
        <span
          onClick={(event) => {
            this.props.logoutCallback();
            localStorage.removeItem("token");
            this.props.history.push("/login");
          }}
        >
          Logout
        </span>
      </nav>
    );
  }
}



export default NavBar;
