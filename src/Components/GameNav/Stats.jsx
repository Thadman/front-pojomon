import React from "react";
import heart0 from "../../Assets/icons/heart0.gif";
import heart1 from "../../Assets/icons/heart1.gif";
import heart2 from "../../Assets/icons/heart2.gif";
import heart3 from "../../Assets/icons/heart3.gif";
import heart4 from "../../Assets/icons/heart4.gif";
import heart5 from "../../Assets/icons/heart5.gif";

const Stats = (props) => {
  const heartArray = [heart0, heart1, heart2, heart3, heart4, heart5];

  const generateHearts = (stat) => {
    return heartArray[stat];
  };

  return (
    <>
      {<p>Name: {props.monster.name}</p>}
      {<p>Level: {props.monster.level}</p>}
      {<p>Age: {props.monster.age}</p>}
      {
        <p>
          Hunger: {<img src={generateHearts(props.monster.hunger)} alt="" />}
        </p>
      }
      {
        <p>
          Strength:{" "}
          {<img src={generateHearts(props.monster.strength)} alt="" />}
        </p>
      }
      {<p>Death: {props.monster.death}</p>}
    </>
  );
};

export default Stats;
