import React from "react";
// import { Link } from "react-router-dom";

class FeedFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.monster;
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.userID !== prevProps.userID) {
  //     this.fetchData(this.props.userID);
  //   }
  // } 
  
  handleClick = (event) => {
    event.preventDefault()
    hunger += 1
    // console.log('this FUCKIN');
  }
  
  render() {
    console.log(this.state);
    const hunger = this.state.monster.monster.hunger
    console.log(hunger)
    return (
      <>
        <h1>{this.state.monster.monster.hunger}</h1>
        <div className="feed-container">
          <form onSubmit={this.onFormSubmit}>

          <button onClick={this.handleClick}>
            FEED
          </button>

            {/* <span
              // type="hunger"
              name="hunger"
              id="hunger"
              value={hunger}
              onChange={this.onInputChange}
            />

            <input type="submit" value="FEED" /> */}
          </form>
        </div>
      </>
    );
  }
}
  // state = { hunger: "" };

  // onFormSubmit = async (event) => {
  //   event.preventDefault();
  //   // DECONSTRUCT MONSTER IF REQUIRED
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_BACKEND_URL}/monsters/current`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ monster: { hunger } }),
  //       }
  //     );
  //     if (response.status >= 400) {
  //       throw new Error("incorrect credentials");
  //     } else {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_BACKEND_URL}/login`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ auth: { email, password } }),
  //         }
  //       );
  //       const { jwt } = await response.json();
  //       localStorage.setItem("token", jwt);
  //       this.props.history.push("/game");
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // const { monster , errMessage } = this.state;

export default FeedFood;
