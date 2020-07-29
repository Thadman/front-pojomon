import React from "react";
import foodButton from "../../Assets/icons/foodbutton.gif";
import vitaminButton from "../../Assets/icons/vitaminbutton.gif";

const Feed = (props) => {
  const lessThanFiveHunger = () => {
    props.monster.counter += 1;
    makePoop();
    if (props.monster.hunger < 5 && props.monster.level !== "Egg") {
      props.monster.hunger += 1;
      props.updateState(props.monster);
    }
  };

  const lessThanFiveStrength = () => {
    props.monster.counter += 1;
    makePoop();
    if (props.monster.strength < 5 && props.monster.level !== "Egg") {
      props.monster.strength += 1;
      props.updateState(props.monster);
    }
  };

  const makePoop = () => {
    if (props.monster.counter % 3 === 0) {
      if (props.monster.level !== "Egg" && props.monster.poop < 4) {
        props.monster.poop += 1;
        props.updateState(props.monster);
      }
    }
  };

  return (
    <>
      <div className="food">
        <img src={foodButton} alt="" onClick={lessThanFiveHunger}></img>
        <img src={vitaminButton} alt="" onClick={lessThanFiveStrength}></img>
      </div>
    </>
  );
};

export default Feed;
