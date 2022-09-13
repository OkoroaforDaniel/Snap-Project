import React from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  return (
    <form id="form" style={{ marginTop: 100 }}>
      <div className="backgroundForm">
        <h2 style={{ marginBottom: 40 }}>Register</h2>
        <input
          style={{ width: 400, height: 60 }}
          type="text"
          placeholder="First Name"
        />
        <br />
        <input
          style={{ width: 400, height: 60 }}
          type="text"
          placeholder="Last Name"
        />
        <br />
        <input
          style={{ width: 400, height: 60 }}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          style={{ width: 400, height: 60 }}
          type="password"
          placeholder="Password"
        />
        <br />
        {props.isRegistered === false && (
          <input
            style={{ width: 400, height: 60 }}
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
              className="collapsedButton"
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
