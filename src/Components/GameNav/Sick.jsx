import React from "react";

const Sick = (props) => {

  const cureSick = () => {

    const walkAgain = (walkName) => {
      const monsterName = {
        Botomon: "boto",
        Koromon: "koro",
        Agumon: "agu",
        Greymon: "grey",
        MetalGreymon: "metGrey",
      }
      return monsterName[walkName]
    }

    props.monster.sick = false
    props.monster.image = `${walkAgain(props.monster.name)}Walk`
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
