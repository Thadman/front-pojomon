import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import GameMonster from "./Components/GameMonster"
import Help from "./Components/Help"
import NoMatch from "./Components/NoMatch"

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <NavBar />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/game" component={GameMonster} />
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
