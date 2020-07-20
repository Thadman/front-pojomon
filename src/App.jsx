import React from "react";
import Monster from "./Components/Monster"
import Login from "./Components/Login"

class App extends React.Component {
  render() {
    // const monster = this.state?.monster;
    return (
      <>
        <Monster />
        <Login />
        <h1>Hello Robert</h1>
      </>
    );
  }
}

export default App;
