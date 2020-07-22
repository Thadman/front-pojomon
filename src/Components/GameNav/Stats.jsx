import React from "react";

const Stats = (props) => {
  return (
    <>
      {<p>{props.monster.current_user.username}</p>}
      {<p>Id: {props.monster.monster.id}</p>}
      {<p>Name: {props.monster.monster.name}</p>}
      {<p>Age: {props.monster.monster.age}</p>}
      {<p>Weight: {props.monster.monster.weight}</p>}
      {<p>Hunger: {props.monster.monster.hunger}</p>}
      {<p>Strength: {props.monster.monster.strength}</p>}
      {<p>Poop: {props.monster.monster.poop}</p>}
      {<p>Sick: {props.monster.monster.sick}</p>}
      {<p>Death: {props.monster.monster.death}</p>}
      {<p>Level: {props.monster.monster.level}</p>}
      {<p>Created_at: {props.monster.monster.created_at}</p>}
    </>
  );
};

export default Stats;
