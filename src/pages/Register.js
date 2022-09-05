import React from 'react'


const Register = (props) => {
  return (
    <form id="form"style={{marginTop: 100,}}>
    <h2 style={{marginButtom: 100,}}>WELCOME</h2>
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