import React from "react";

const Sick = (props) => {

  const cureSick = () => {
    props.monster.sick = false
    props.updateState(props.monster);
  }

  return (
    <>
      <div>
        <button onClick={cureSick}>HEAL</button>
      </div>
    </>
  );
};

export default Sick;
