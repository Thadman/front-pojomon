import React from "react";

const Stats = (props) => {
  // console.log(props)
  return (
    <>
      {<p>{props.user.username}</p>}
      {<p>Id: {props.monster.id}</p>}
      {<p>Name: {props.monster.name}</p>}
      {<p>Age: {props.monster.age}</p>}
      {<p>Weight: {props.monster.weight}</p>}
      {<p>Hunger: {props.monster.hunger}</p>}
      {<p>Strength: {props.monster.strength}</p>}
      {<p>Poop: {props.monster.poop}</p>}
      {<p>Sick: {props.monster.sick}</p>}
      {<p>Death: {props.monster.death}</p>}
      {<p>Level: {props.monster.level}</p>}
      {<p>Created_at: {props.monster.created_at}</p>}
    </>
  );
};

export default Stats;
