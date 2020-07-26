import React from "react";

class Logic extends React.Component {

  getHungry = () => {
    if (this.props.monster.hunger > 0) {
      this.props.monster.hunger -= 1
      this.props.updateState(this.props.monster);
    }
  };

  loseStrength = () => {
    if (this.props.monster.strength > 0) {
      this.props.monster.strength -= 1
      this.props.updateState(this.props.monster);
    }
  };

  computerMakePoop = () => {
    if (this.props.monster.level !== "Egg" && this.props.monster.poop < 4) {
      this.props.monster.poop += 1
      this.props.updateState(this.props.monster);
    }
  };

  computerMakeSick = () => {
    if (this.props.monster.poop === 4) {
      this.props.monster.sick = true
      this.props.updateState(this.props.monster);
    }
  };

  makeMonsterOlder = () => {
    if (this.props.monster.level === "Egg") {
      this.props.monster.level = "Baby";
      this.props.updateState(this.props.monster);
    } else {
      this.props.monster.age += 1
      this.props.updateState(this.props.monster);
    }
  };

  makeMonsterDie = () => {
    let counter = 0
    if(this.props.monster.hunger === 0) {counter += 2}
    if(this.props.monster.strength === 0) {counter += 2}
    if(this.props.monster.sick === true) {counter += 2}

    if(counter > this.props.monster.death) {
      this.props.monster.death = 0
      const dieRedirect = true
      this.props.updateState(this.props.monster, dieRedirect);
    } else {
      this.props.monster.death -= counter
      this.props.updateState(this.props.monster);
    }
  }

  makeMonsterEvolve = () => {
    switch (this.props.monster.level) {
      case "Baby":
        if(this.props.monster.age >= 4) {
          this.props.monster.level = "Training"
          this.props.updateState(this.props.monster);
        };
        break;
      case "Training":
        if(this.props.monster.age >= 8) {
          this.props.makeMonsterEvolve("Rookie")
          this.props.updateState(this.props.monster);
        };
        break;
      case "Rookie":
        if(this.props.monster.age >= 16) {
          this.props.makeMonsterEvolve("Champion")
          this.props.updateState(this.props.monster);
        };
        break;
      case "Champion":
        if(this.props.monster.age >= 32) {
          this.props.makeMonsterEvolve("Ultimate");
          this.props.updateState(this.props.monster);
        } 
        break;
      default:
    }
  };
  
  componentDidMount() {
    setInterval(this.getHungry, 6000);
    setInterval(this.loseStrength, 9000);
    setInterval(this.computerMakePoop, 7000);
    setInterval(this.makeMonsterOlder, 10000);
    setInterval(this.makeMonsterDie, 2000)
  }



  render() {
  
    return(
      <>
      </>
    )
  }
}

export default Logic;
