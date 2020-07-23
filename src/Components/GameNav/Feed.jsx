import React from "react";

const Feed = (props) => {

  // const updateServer = () => {
  //   try {
  //     props.monster.monster.hunger += 1
  //     const response = await fetch(
  //       `${process.env.REACT_APP_BACKEND_URL}/monsters/${props.monster.monster.id}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: `${localStorage.getItem("token")}`,
  //         },
  //         body: JSON.stringify({ hunger: monster.monster.hunger }),
  //       }
  //     );
  //     const monster = await response.json();
  //     this.setState({ monster: monster });
  //   } catch (err) {
  //     this.setState({
  //       errMessage: err.message,
  //     });
  //   }
  // }

  const lessThanFiveHunger = () => {
    if(props.monster.monster.hunger < 5) {
      props.updateHunger()
    }
  }

  const lessThanFiveStrength = () => {
    if(props.monster.monster.strength < 5) {
      props.updateStrength()
    }
  }

  // {...updateServer()}

  return (
    <>
      <div>
        <button onClick={lessThanFiveHunger} >FOOD</button>
        <button onClick={lessThanFiveStrength}>VITAMIN</button>
      </div>
    </>
  );
};

export default Feed;
