import React from "react";
import { Redirect } from "react-router-dom";
import Stats from "./GameNav/Stats";
import Feed from "./GameNav/Feed";
import Poop from "./GameNav/Poop";
import Sick from "./GameNav/Sick";
import Logic from "./Logic/GameLogic";
import Sprite from "./Logic/Sprite";

class GameMonster extends React.Component {
  state = {
    monster: {},
    current_user: {},
    shouldUpdate: false,
    dieRedirect: false,
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/monsters/current`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      this.setState({
        monster: data.monster,
        current_user: data.current_user,
      });
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  }

  async componentDidUpdate() {
    if (this.state.shouldUpdate) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/monsters/${this.state.monster.id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
              Authorization: `${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ monster: this.state.monster }),
          }
        );
        const updatedData = await response.json();
        this.setState({
          monster: updatedData.monster,
          current_user: updatedData.current_user,
          shouldUpdate: false,
        });
      } catch (err) {
        this.setState({
          errMessage: err.message,
          shouldUpdate: false,
        });
      }
    }
  }

  updateSprite = (newMonsterSpriteState) => {
    this.setState({ 
      monster: newMonsterSpriteState,
      shouldUpdate: true,
      ...this.state,
    })
  }

  updateState = (newMonsterState, boolean) => {
    
    const getMonster = (sickMonsterName) => {
      const monsterName = {
        Botomon: "boto",
        Koromon: "koro",
        Agumon: "agu",
        Greymon: "grey",
        MetalGreymon: "metGrey",
      }
      return monsterName[sickMonsterName]
    }
    if (newMonsterState.poop === 4) {
      newMonsterState.sick = true 
      newMonsterState.image = `${getMonster(newMonsterState.name)}Sick`
    }
    
    this.setState({
      monster: newMonsterState,
      shouldUpdate: true,
      dieRedirect: boolean,
    });
  };

  render() {
    const dieRedirect = this.state?.dieRedirect;
    const user = this.state?.current_user;
    const monster = this.state?.monster;

    return (
      <>
        {dieRedirect && <Redirect to="/death" />}

        <div className="form-container">

        <div className="username">
          {user && user.username}
          </div>

          <div className="sprite">
            {monster && (
              <Sprite 
                monster={monster} 
                updateSprite={this.updateSprite} 
              />
            )}       
          </div>

          <div className="stats">
            {monster && <Stats monster={monster} />}
          </div>

          <div className="buttons">
            <div className="feed">
              {monster && <Feed monster={monster} updateState={this.updateState} />}
            </div>
            
            <div className="poop">
              {monster && <Poop monster={monster} updateState={this.updateState} />}
            </div>

            <div className="sick">
              {monster && <Sick monster={monster} updateState={this.updateState} />}
            </div>
          </div>

        </div>

          {monster && <Logic monster={monster} updateState={this.updateState} />}
      </>
    );
  }
}

export default GameMonster;
