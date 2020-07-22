import React from "react";
import Stats from "./GameNav/Stats";
import Feed from "./GameNav/Feed";

class GameMonster extends React.Component {
  async componentDidMount() {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/monsters/current`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    // try {
    //   const token = localStorage.getItem("token");
    //   const response = await fetch(
    //     `${process.env.REACT_APP_BACKEND_URL}/monsters/current`,
    //     {
    //       headers: {
    //         "Content-type": "application/json",
    //         Authorization: `${localStorage.getItem("token")}`,
    //       },
    //     }
    //   );
    console.log(response);
    const monster = await response.json();
    this.setState({ monster: monster });
    // } catch (err) {
    //   this.setState({
    //     errMessage: err.message,
    //   });
    // }
  }

  render() {
    const monster = this.state?.monster;
    console.log(monster);
    return (
      <>
        {monster && <Stats monster={monster} />}
        {monster && <Feed monster={monster} />}
      </>
    );
  }
}

export default GameMonster;
