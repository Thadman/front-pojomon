import React from "react"

class GameMonster extends React.Component {
  async componentDidMount() {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/monsters/current`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
      
    console.log(response)
    const monster = await response.json();
    console.log(monster);
    this.setState({ monster: monster });
  }
  render() {
    const monster = this.state?.monster
    console.log(monster)
    return (
      <>
        {monster && <h1>{monster.username}</h1>}
        {monster && <h1>{monster.id}</h1>}
        {monster && <h1>{monster.name}</h1>}
        {monster && <h1>{monster.age}</h1>}
        {monster && <h1>{monster.weight}</h1>}
        {monster && <h1>{monster.hunger}</h1>}
        {monster && <h1>{monster.strength}</h1>}
        {monster && <h1>{monster.poop}</h1>}
        {monster && <h1>{monster.sick}</h1>}
        {monster && <h1>{monster.death}</h1>}
        {monster && <h1>{monster.level}</h1>}
      </>
    )
  }

}



  export default GameMonster