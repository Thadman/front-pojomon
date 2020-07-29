import React from "react";
import poopButton from "../../Assets/icons/poopbutton.gif";

const Poop = (props) => {
  const removePoop = () => {
    props.monster.poop = 0;
    props.updateState(props.monster);
  };

  return (
    <>
      <div>
        <img src={poopButton} alt="" onClick={removePoop}></img>
      </div>
    </>
  );
};

export default Poop;
