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
    if (this.props.monster.level !== "Egg" && this.props.monster.poop < 4) {
      this.props.computerMakePoop();
      this.computerMakeSick();
    }
  };

  computerMakeSick = () => {
    if (this.props.monster.poop === 4) {
      this.props.computerMakeSick();
    }
  };

  makeMonsterOlder = () => {
    if (this.props.monster.level === "Egg") {
      this.props.makeMonsterEvolve("Baby");
    } else {
      this.props.makeMonsterOlder("age");
      this.makeMonsterEvolve();
    }
  };

  makeMonsterEvolve = () => {
    switch (this.props.monster.level) {
      case "Baby":
        this.props.monster.age >= 4 && this.props.makeMonsterEvolve("Training");
        break;
      case "Training":
        this.props.monster.age >= 8 && this.props.makeMonsterEvolve("Rookie");
        break;
      case "Rookie":
        this.props.monster.age >= 16 && this.props.makeMonsterEvolve("Champion");
        break;
      case "Champion":
        this.props.monster.age >= 32 && this.props.makeMonsterEvolve("Ultimate");
        break;
      default:
    }
  };

  makeMonsterDie = () => {
    const previousValue = this.props.monster.death
    let counter = 0
    if(this.props.monster.hunger === 0) {counter += 2}
    if(this.props.monster.strength === 0) {counter += 2}
    if(this.props.monster.sick === true) {counter += 2}
    this.props.makeMonsterDie(previousValue, counter)
  }

  componentDidMount() {
    setInterval(this.getHungry, 6000);
    setInterval(this.loseStrength, 8000);
    setInterval(this.computerMakePoop, 3000);
    setInterval(this.makeMonsterOlder, 10000);
    setInterval(this.makeMonsterDie, 3000)
  }

  render() {
  
    return(
      <>
      </>
    )
  }
}

export default Logic;
