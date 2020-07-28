import React from "react";
import poop1 from "../../Assets/icons/1poop.gif";
import poop2 from "../../Assets/icons/2poop.gif";
import poop3 from "../../Assets/icons/3poop.gif";
import poop4 from "../../Assets/icons/4poop.gif";
import sickIcon from "../../Assets/icons/sick.gif";
import egg from "../../Assets/egg/egg.gif"
import eggHatch from "../../Assets/egg/hatch.gif"
import botoWalk from "../../Assets/monsters/1bot/botowalk.gif"
import koroWalk from "../../Assets/monsters/2koro/korowalk.gif"
import aguWalk from "../../Assets/monsters/3agu/aguwalk.gif"
import greyWalk from "../../Assets/monsters/4grey/greywalk.gif"
import metGreyWalk from "../../Assets/monsters/5metgrey/metgreywalk.gif"

const Sprite = (props) => {

  const chooseMonsterSprite = () => {
    let sprite = ""
    switch(props.monster.image) {
      case "Egg":
        sprite = egg
        return sprite
      case "eggHatch":
        sprite = eggHatch
        return sprite
      case "botoWalk":
        sprite = botoWalk
        return sprite
      case "koroWalk":
        sprite = koroWalk
        return sprite 
      case "aguWalk":
        sprite = aguWalk
        return sprite 
      case "greyWalk":
        sprite = greyWalk
        return sprite 
      case "metGreyWalk":
        sprite = metGreyWalk
        return sprite 
      default:
    }
  }

  const choosePoopSprite = () => {
    let poopSprite = ""
    switch(props.monster.poop) {

      case 1:
        poopSprite = poop1
        return poopSprite
      case 2:
        poopSprite = poop2
        return poopSprite
      case 3:
        poopSprite = poop3
        return poopSprite 
      case 4:
        poopSprite = poop4
        return poopSprite 
      default:
    }
  }

  const sickSprite = () => {
    let sickness = ""
    if (props.monster.sick === true) {
      sickness = sickIcon
      return sickness
    }
  }

  return (
    <>
      {<img src={chooseMonsterSprite()} />}
      {<img src={sickSprite()} />}
      {<img src={choosePoopSprite()} />}
    </>
  );
};

export default Sprite;
