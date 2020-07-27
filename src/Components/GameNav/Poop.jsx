import React from "react";

const Poop = (props) => {

  const removePoop = () => {
    if (props.monster.poop < 4) {
      props.monster.poop = 0
      props.updateState(props.monster);
    }
  };

  return (
    <>
      <div>
        <button onClick={removePoop}>POOP</button>
      </div>
    </>
  );
};

export default Poop;
