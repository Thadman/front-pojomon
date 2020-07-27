import React from "react";

const Feed = (props) => {
  
  const lessThanFiveHunger = () => {
    if (props.monster.hunger < 5) {
      props.monster.hunger += 1
      props.updateState(props.monster);
    }
  };

  const lessThanFiveStrength = () => {
    if (props.monster.strength < 5) {
      props.monster.strength += 1
      props.updateState(props.monster);
    }
  };

  const eatSprite = () => {
    switch (this.monster.name) {
      case "Botomon": 

      break;
      case "Koromon":

      break;
      case "Agumon":

      break;
      case "Greymon":

      break;
      case "Metal Greymon":

      break;
      default:
    }

  }

  return (
    <>
      <div>
        <button onClick={lessThanFiveHunger}>FOOD</button>
        <button onClick={lessThanFiveStrength}>VITAMIN</button>
      </div>
    </>
  );
};

export default Feed;
