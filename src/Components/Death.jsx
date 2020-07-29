import React from "react"
import death from "../Assets/egg/death.gif"

class Death extends React.Component {
  render() {
    return (
      <div className="form-container">
        <div className="death">
          <p>Your monster..</p>

          <div className="sprite">
            <img src={death} alt=""/>
          </div>

          <p>How could you let this happen?</p>
          <p>You're the real monster..</p>
        </div>
      </div>
    )
  }
}

export default Death