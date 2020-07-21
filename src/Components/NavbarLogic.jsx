import React from 'react'
import { useHistory, Link } from "react-router-dom";

const history = useHistory();

const choice = () => {
  if (localStorage.getItem("token") === true) {
    return <span onClick={(event) => {
      localStorage.removeItem("token");
      history.push("/login");
    }}>Logout</span>
  } else {
    return <Link to="/Login">Login</Link>
  }
}


class NavbarLogic extends React.Component {  
  render() {

    return(
      choice() 
    )
  }
}



export default NavbarLogic

