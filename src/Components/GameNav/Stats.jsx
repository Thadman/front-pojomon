import React from "react";

const Stats = (props) => {
  return (
    <>
      {<p> {props.monster.current_user.username}</p>}
      {<p>{props.monster.monster.id}</p>}
      {<p>{props.monster.monster.name}</p>}
      {<p>{props.monster.monster.age}</p>}
      {<p>{props.monster.monster.weight}</p>}
      {<p>{props.monster.monster.hunger}</p>}
      {<p>{props.monster.monster.strength}</p>}
      {<p>{props.monster.monster.poop}</p>}
      {<p>{props.monster.monster.sick}</p>}
      {<p>{props.monster.monster.death}</p>}
      {<p>{props.monster.monster.level}</p>}
      {<p>{props.monster.monster.created_at}</p>}
    </>
  );
};

export default Stats;
