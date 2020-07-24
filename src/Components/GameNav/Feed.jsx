import React from "react";

const Feed = (props) => {
  const lessThanFiveHunger = () => {
    if (props.monster.hunger < 5) {
      props.updateHunger("hunger");
    }
  };

  const lessThanFiveStrength = () => {
    if (props.monster.strength < 5) {
      props.updateStrength("strength");
    }
  };

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
