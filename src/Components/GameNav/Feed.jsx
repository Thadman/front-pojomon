import React from "react";

const Feed = (props) => {

  const lessThanFiveHunger = () => {
    console.log(props)
    props.counter += 1
    makePoop()
    if (props.monster.hunger < 5 && props.monster.level !== "Egg" ) {
      props.monster.hunger += 1
      props.updateState(props.monster);
    }
  };

  const lessThanFiveStrength = () => {
    props.counter += 1
    makePoop()
    if (props.monster.strength < 5 && props.monster.level !== "Egg" ) {
      props.monster.strength += 1
      props.updateState(props.monster);
    }
  };

  const makePoop = () => {
    if(props.counter % 3 === 0) {
      if (props.monster.level !== "Egg" && props.monster.poop < 4) {
        props.monster.poop += 1
        props.updateState(props.monster);
      } else if (props.monster.poop === 4) {
        props.monster.sick = true
        props.updateState(props.monster);
      }
    }
  };

  // const makeSick = () => {
  //   if (props.monster.poop === 4) {
  //     props.monster.sick = true
  //     props.updateState(props.monster);
  //   }
  // };

  // if(counter % 3 === 0) {
  //   makePoop()
  //   console.log('true')
  // }

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
