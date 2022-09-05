import React from 'react'
import "./styles/login.css"
function Login(props) {

  return (
    <form id="form">
    <h2>HELLO</h2>
      <input type="text" placeholder="Username" /><br/>
      <input type="password" placeholder="Password" /><br/>
      {props.isRegistered === false && <input type="password" placeholder="Confirm Password" />}
      <button className='LoginButton' type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}


export default Login