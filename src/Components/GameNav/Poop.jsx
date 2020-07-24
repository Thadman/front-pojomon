import React from "react";

const Poop = (props) => {
  return (
    <>
      <div>
        <button onClick={props.removePoop}>POOP</button>
      </div>
    </>
  );
};

export default Poop;
