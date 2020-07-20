import React from "react"

class Monster extends React.Component {
  async componentDidMount() {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/monsters/1`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTUzMDUzODksInN1YiI6MX0.3MCouzqv75834tCK4RN-ng3JuoiGVqzY8APWgZjEMKw",
        },
      }
    );

    const monster = await response.json();
    console.log(monster);
    this.setState({ monster: monster });
  }
  render() {
    const monster = this.state?.monster
    return (
      <>
        {monster && <h1>{monster.id}</h1>}
      </>
    )
  }

}



  export default Monster