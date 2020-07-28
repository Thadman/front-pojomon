import React from "react"
import death from "../Assets/egg/death.gif"

class Death extends React.Component {
  render() {
    return (
      <>
        <p>Your monster..</p>
        <p>How could you let this happen?</p>
        <img src={death} alt=""/>
        <p>You're the real monster..</p>
      </>
    )
  }
}

export default Death