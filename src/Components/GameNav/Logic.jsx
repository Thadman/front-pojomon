import React from "react";

class Logic extends React.Component {
  getHungry = () => {
    if (this.props.monster.hunger > 0) {
      this.props.computerUpdateStat("hunger");
    }
  };

  loseStrength = () => {
    if (this.props.monster.strength > 0) {
      this.props.computerUpdateStat("strength");
    }
  };

  computerMakePoop = () => {
    if (this.props.monster.poop < 4) {
      this.props.computerMakePoop("poop");
    }
  };

  componentDidMount() {
    setInterval(this.getHungry, 3000);
    setInterval(this.loseStrength, 3000);
    setInterval(this.computerMakePoop, 3000);
  }

  render() {
    return <></>;
  }
}

export default Logic;
