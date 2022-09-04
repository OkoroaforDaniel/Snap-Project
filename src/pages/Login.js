import React from 'react'
import "./styles/login.css"
import hello from "./styles/hello.jpeg"
function Login(props) {

  return (
    <form id="form">
    <img src={hello} alt="hello" style={{width: 180, height: 80,}}/>
      <input type="text" placeholder="Username" /><br/>
      <input type="password" placeholder="Password" /><br/>
      {props.isRegistered === false && <input type="password" placeholder="Confirm Password" />}
      <button className='LoginButton' type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}


export default Login