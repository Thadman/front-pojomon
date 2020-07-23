import React from "react";

const Feed = (props) => {

  const lessThanFiveHunger = () => {
    if(props.monster.hunger < 5) {
      props.updateHunger()
    }
  }

  const lessThanFiveStrength = () => {
    if(props.monster.strength < 5) {
      props.updateStrength()
    }
  }

  return (
    <>
      <div>
        <button onClick={lessThanFiveHunger} >FOOD</button>
        <button onClick={lessThanFiveStrength}>VITAMIN</button>
      </div>
    </>
  );
};

export default Feed;
