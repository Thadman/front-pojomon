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

  makePoop = () => {
    if (this.props.monster.level !== "Egg" && this.props.monster.poop < 4) {
      this.makeSick()
      this.props.monster.poop += 1
      this.props.updateState(this.props.monster);
    }
  };

  makeSick = () => {
    if (this.props.monster.poop === 4) {
      this.props.monster.sick = true
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
    } 
    else if (this.props.monster.level !== "Egg") {
      this.props.monster.death -= counter
      this.props.updateState(this.props.monster);
    }
  }

  makeOlder = () => {
    if (this.props.monster.level !== "Egg") {
      this.props.monster.age += 1
      this.evolve();
    } else {
      this.props.monster.level = "Baby";
      this.props.monster.name = "Botomon"
      this.props.monster.image = "botoWalk"
      this.props.updateState(this.props.monster);
    }
  };

  evolve = () => {
    switch (this.props.monster.age) {
      case 4:
          this.props.monster.level = "Training"
          this.props.monster.name = "Koromon"
          this.props.monster.image = "koroWalk"
          this.props.updateState(this.props.monster);
        break;
      case 8:
          this.props.monster.level = "Rookie"
          this.props.monster.name = "Agumon"
          this.props.monster.image = "aguWalk"
          this.props.updateState(this.props.monster);
        break;
      case 16:
        this.props.monster.level = "Champion"
        this.props.monster.name = "Greymon"
        this.props.monster.image = "greyWalk"
          this.props.updateState(this.props.monster);
        break;
      case 32:
          this.props.monster.level = "Ultimate";
          this.props.monster.name = "Metal Greymon"
          this.props.monster.image = "metGreyWalk"
          this.props.updateState(this.props.monster);
        break;
      default:
    }
  };
  
  componentDidMount() {
    setInterval(this.getHungry, 6000);
    setInterval(this.loseStrength, 9000);
    setInterval(this.makePoop, 7000);
    setInterval(this.makeOlder, 10000);
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
