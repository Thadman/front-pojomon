import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import GameMonster from "./Components/GameMonster";
import Death from "./Components/Death";
import Help from "./Components/Help";
import NoMatch from "./Components/NoMatch";

class App extends React.Component {
  state = { auth: false };

  logOutHandler = () => {
    this.setState({ auth: false });
  };

  logInHandler = () => {
    this.setState({ auth: true });
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/status`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status >= 400) {
        throw new Error("not authorized");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        this.setState({
          auth: true,
          loading: false,
        });
      }
    } catch (err) {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const loggedIn = localStorage.getItem("token");

    return (
      <div className="container">
        <h1>POJOmon</h1>
        <BrowserRouter>
          <div>
            <Route
              render={(props) => {
                return (
                  <NavBar
                    {...props}
                    loggedIn={this.state.auth}
                    logoutCallback={this.logOutHandler}
                    logInHandler={this.logInHandler}
                  />
                );
              }}
            />

            <Switch>
              <Route exact path="/">
                {loggedIn ? <Redirect to="/game" /> : <Redirect to="/login" />}
              </Route>

              <Route
                exact
                path="/login"
                render={(props) => (
                  <Login {...props} logInHandler={this.logInHandler} />
                )}
              />

              <Route
                exact
                path="/sign-up"
                render={(props) => (
                  <SignUp {...props} logInHandler={this.logInHandler} />
                )}
              />

              <Route exact path="/game" component={GameMonster} />

              <Route exact path="/death" component={Death} />

              <Route exact path="/help" component={Help} />

              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
