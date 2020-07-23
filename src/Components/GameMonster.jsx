import React from "react";
import Stats from "./GameNav/Stats";
import Feed from "./GameNav/Feed";
import Poop from "./GameNav/Poop";
import Sick from "./GameNav/Sick";

class GameMonster extends React.Component {
  async componentDidMount() {

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/monsters/current`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      const monster = await response.json(); // RENAME
      this.setState({ monster: monster });
      // this.setState({ user: monster });
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  }

  // oneMin = () => {
  //   // #invoke fetch every 1 min
  // }

  async componentDidUpdate() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/monsters/${monster.monster.id}`,
        {
          method: 'POST',
          headers: {
            "Content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ monster: monster.monster }),
        }
      );
      const monster = await response.json(); // RENAME RESPONSE DATA
      this.setState({ monster: monster });
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  }
  

  render() {
    const monster = this.state?.monster;
    return (
      <>
        {monster && <Stats monster={monster} />}
        {monster && <Feed 
          monster={monster}
          updateHunger={()=>{
            this.setState({ hunger: monster.monster.hunger += 1 })
          }}
          updateStrength={()=>{
            this.setState({ strength: monster.monster.strength += 1 })
          }}
        />}
        {monster && <Poop 
          monster={monster}
          removePoop={()=>{
            this.setState({ poop: monster.monster.poop = 0 })
          }}
        />}
        {monster && <Sick 
          monster={monster}
          healSick={()=>{
            this.setState({ sick: monster.monster.sick = true })
          }}
        />}
      </>
    );
  }
}

export default GameMonster;
