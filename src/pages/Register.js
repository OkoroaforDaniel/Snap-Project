import React from 'react'
import Welcome from "./styles/welcome-sign-hand-lettering-text-for-posters-and-greeting-cards-design-modern-calligraphy-for-your-unique-design-welcome-word-isolated-on-white-background-vector.jpeg"

const Register = (props) => {
  return (
    <form id="form"style={{marginTop: 100,}}>
    <img src={Welcome} alt="hello" style={{width: 200, height: 120,}}/>
      <input type="text" placeholder="First Name" /><br/>
      <input type="text" placeholder="Last Name" /><br/>
      <input type="email" placeholder="Email" /><br/>
      <input type="password" placeholder="Password" /><br/>
      {props.isRegistered === false && <input type="password" placeholder="Confirm Password" />}
      <button className='LoginButton' type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Register