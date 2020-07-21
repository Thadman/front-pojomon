import React from "react"

class GameMonster extends React.Component {
  async componentDidMount() {
    // const token = localStorage.getItem('token')
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/monsters/current`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem('token')}`,
        },
      }
    );
      
    const monster = await response.json();
    this.setState({ monster: monster });
  }
  
  render() {
    const monster = this.state?.monster
    console.log(monster)
    return (
      <>
        {monster && <h1>{monster.current_user.username}</h1>}
        {monster && <h1>{monster.monster.id}</h1>}
        {monster && <h1>{monster.monster.name}</h1>}
        {monster && <h1>{monster.monster.age}</h1>}
        {monster && <h1>{monster.monster.weight}</h1>}
        {monster && <h1>{monster.monster.hunger}</h1>}
        {monster && <h1>{monster.monster.strength}</h1>}
        {monster && <h1>{monster.monster.poop}</h1>}
        {monster && <h1>{monster.monster.sick}</h1>}
        {monster && <h1>{monster.monster.death}</h1>}
        {monster && <h1>{monster.monster.level}</h1>}
      </>
    )
  }

}



  export default GameMonster