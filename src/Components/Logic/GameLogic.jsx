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

  makeMonsterDie = () => {
    let deathCounter = 0
    if(this.props.monster.hunger === 0) {deathCounter += 2}
    if(this.props.monster.strength === 0) {deathCounter += 2}
    if(this.props.monster.sick === true) {deathCounter += 5}

    if(deathCounter > this.props.monster.death) {
      this.props.monster.death = 0
      this.props.monster.image = "death"
      const dieRedirect = true
      this.props.updateState(this.props.monster, dieRedirect);
    } 
    else if (this.props.monster.level !== "Egg") {
      this.props.monster.death -= deathCounter
      this.props.updateState(this.props.monster);
    }
  }

  makeOlder = () => {
    if (this.props.monster.level !== "Egg") {
      this.props.monster.age += 1
      this.evolve();
      this.makeMonsterDie()
    } else {
      this.props.monster.level = "Baby";
      this.props.monster.name = "Botomon"
      this.props.monster.hunger = 1
      this.props.monster.strength = 1
      this.props.monster.image = "eggHatch"
      this.props.updateState(this.props.monster);
    }
  };

  evolve = () => {
    switch (this.props.monster.age) {
      case 4:
        this.props.monster.level = "Training"
        this.props.monster.name = "Koromon"
        this.props.monster.image = "evolve"
        this.props.updateState(this.props.monster);
        break;
      case 8:
        this.props.monster.level = "Rookie"
        this.props.monster.name = "Agumon"
        this.props.monster.image = "evolve"
        this.props.updateState(this.props.monster);
        break;
      case 16:
        this.props.monster.level = "Champion"
        this.props.monster.name = "Greymon"
        this.props.monster.image = "evolve"
        this.props.updateState(this.props.monster);
        break;
      case 32:
        this.props.monster.level = "Ultimate";
        this.props.monster.name = "MetalGreymon"
        this.props.monster.image = "evolve"
        this.props.updateState(this.props.monster);
        break;
      default:
    }
  };
  
  componentDidMount() {
    setInterval(this.getHungry, 13000)
    setInterval(this.loseStrength, 16000);
    setInterval(this.makeOlder, 10000);
  }

  render() {
  
    return(
      <>
      </>
    )
  }
}

export default Logic;
