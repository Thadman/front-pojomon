import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Monster from "./Components/Monster"
import Login from "./Components/Login"
import NoMatch from "./Components/NoMatch"

class App extends React.Component {
  render() {
    // const monster = this.state?.monster;
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/monster" component={Monster} />
              <Route path component={NoMatch} />
           </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
