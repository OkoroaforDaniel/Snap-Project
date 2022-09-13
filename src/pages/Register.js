import React from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  return (
    <form id="form" style={{ marginTop: 100 }}>
      <div className="backgroundForm">
        <h2 style={{ marginBottom: 40 }}>Register</h2>
        <input 
        className="userName"
          type="text"
          placeholder="First Name"
        />
        <br />
        <input 
        className="userName"
          type="text"
          placeholder="Last Name"
        />
        <br />
        <input
          className="userName"
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          className="userName"
          type="password"
          placeholder="Password"
        />
        <br />
        {props.isRegistered === false && (
          <input
           className="userName"
            type="password"
            placeholder="Confirm Password"
          />
        )}
        <button className="LoginButton" type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
        <div className="AlreadyHaveAccount">
          <a style={{ color: "grey" }}>
            Already have an account?{" "}
            <Link
              to="/Login"
              style={{ border: 0, marginBottom: 0 }}
            >
              Login
            </Link>{" "}
          </a>
        </div>
      </div>
    </form>
  );
};

export default Register;
