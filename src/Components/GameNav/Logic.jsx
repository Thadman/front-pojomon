import React from "react";

class Logic extends React.Component {
  getHungry = () => {
    if (this.props.monster.hunger > 0) {
      this.props.updateState("hunger", "minus");
    }
  };
  componentDidMount() {
    setInterval(this.getHungry, 3000);
  }

  render() {
    return <></>;
  }
}

export default Logic;
