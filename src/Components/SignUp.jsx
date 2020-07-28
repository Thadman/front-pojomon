import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  state = { username: "", email: "", password: "", errMessage: "" };

  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
    console.log(this.state);
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/sign-up`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: { username, email, password } }),
        }
      );
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ auth: { email, password } }),
          }
        );
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        this.props.history.push("/game");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const { username, email, password, errMessage } = this.state;
    return (
      <div className="form-container">
        <h1>SignUp</h1>
        {errMessage && <span>{errMessage}</span>}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="username"
            name="username"
            id="username"
            value={username}
            data-testid="username"
            placeholder="Username"
            onChange={this.onInputChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            data-testid="email"
            placeholder="Email"
            onChange={this.onInputChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            data-testid="password"
            placeholder="Password"
            onChange={this.onInputChange}
          />
          <div className="button">
            <input type="submit" value="SignUp" />
          </div>
        </form>
        <p className="clickHere">
          Click <Link to="/login">HERE</Link> to Login
        </p>
      </div>
    );
  }
}

export default SignUp;
