import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Monster from "./Components/Monster"
import NoMatch from "./Components/NoMatch"

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/" component={Monster} />
              <Route path component={NoMatch} />
           </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
