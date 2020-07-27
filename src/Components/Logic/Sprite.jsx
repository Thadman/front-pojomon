import React from "react";
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
      case "egg":
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

  return (
    <>

      {<img src={chooseMonsterSprite()} alt="Monster Image" />}

    </>
  );
};

export default Sprite;
