import React from "react";
import poop1 from "../../Assets/icons/1poop.gif";
import poop2 from "../../Assets/icons/2poop.gif";
import poop3 from "../../Assets/icons/3poop.gif";
import poop4 from "../../Assets/icons/4poop.gif";
import sickIcon from "../../Assets/icons/sick.gif";
import death from "../../Assets/egg/death.gif"
import evolve from "../../Assets/icons/evolve.gif"
import egg from "../../Assets/egg/egg.gif"
import eggHatch from "../../Assets/egg/hatch.gif"
import botoWalk from "../../Assets/monsters/1bot/botowalk.gif"
import botoSick from "../../Assets/monsters/1bot/botosick.gif"
import koroWalk from "../../Assets/monsters/2koro/korowalk.gif"
import koroSick from "../../Assets/monsters/2koro/korosick.gif"
import aguWalk from "../../Assets/monsters/3agu/aguwalk.gif"
import aguSick from "../../Assets/monsters/3agu/agusick.gif"
import greyWalk from "../../Assets/monsters/4grey/greywalk.gif"
import greySick from "../../Assets/monsters/4grey/greysick.gif"
import metGreyWalk from "../../Assets/monsters/5metgrey/metgreywalk.gif"
import metGreySick from "../../Assets/monsters/5metgrey/metgreysick.gif"

const Sprite = (props) => {

  const evolveUpdate = () => {
    const monsterName = {
      Botomon: "boto",
      Koromon: "koro",
      Agumon: "agu",
      Greymon: "grey",
      MetalGreymon: "metGrey",
    }
    props.monster.image = `${monsterName[props.monster.name]}Walk`
    props.updateSprite(props.monster)
  }

  const hatchUpdate = () => {
    props.monster.image = "botoWalk"
    props.updateSprite(props.monster)
  }


  const monsterEvolve = (evolveSprite) => {
    if (evolveSprite === "evolve"){
      setTimeout(evolveUpdate, 1500)
      return evolve
    } else if (evolveSprite === "eggHatch") {
      setTimeout(hatchUpdate, 1500)
      return eggHatch
    }
  }

  const getMonsterSprite = (requestedSprite) => { 

    const monsterChoice = {
      death: death,
      egg: egg,
      botoWalk: botoWalk,
      botoSick: botoSick,
      koroWalk: koroWalk,
      koroSick: koroSick,
      aguWalk: aguWalk,
      aguSick: aguSick,
      greyWalk: greyWalk,
      greySick: greySick,
      metGreyWalk: metGreyWalk,
      metGreySick: metGreySick,
    }
    return monsterChoice[requestedSprite]
  }

  const getSickSprite = (requestedSprite) => {
    const isSick = {
      true: sickIcon,
    }
    return isSick[requestedSprite]
  }
  
  const getPoopSprite = (requestedSprite) => { 
    const poopChoice = {
      0: "",
      1: poop1,
      2: poop2,
      3: poop3,
      4: poop4,
    }
    return poopChoice[requestedSprite]
  }

  return (
    <>
      {<img src={monsterEvolve(props.monster.image)} alt="" />}
      {<img src={getMonsterSprite(props.monster.image)} alt="" />}
      {<img src={getSickSprite(props.monster.sick)} alt="" />}
      {<img src={getPoopSprite(props.monster.poop)} alt="" />}
    </>
  );
};

export default Sprite;
