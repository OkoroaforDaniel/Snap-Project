import React from "react";
import { Link } from "react-router-dom";
import "./styles/login.css";
import GoogleIcon from "../Icons/google-icon.png";
import LinkedinIcon from "../Icons/linkedin-icon.png";
import microsoftIcon from "../Icons/microsoft-icon.png";
import AppleIcon from "../Icons/Apple-icon.png";

function Login(props) {
  return (
    <form id="form">
      <div className="backgroundForm">
        <h2 className="loginHeader">Log in</h2>
        <input
          style={{ width: 400, height: 60 }}
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          style={{ width: 400, height: 60 }}
          type="password"
          placeholder="Password"
        />
        <br />
        {props.isRegistered === false && (
          <input type="password" placeholder="Confirm Password" />
        )}
        <button className="LoginButton" type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
        <div className="forgotPassword">
          <a>
            {" "}
            <Link
              style={{ color: "grey", textDecoration: "none" }}
              className="collapsedButton"
              to="/Register"
            >
              Forgot Password?
            </Link>{" "}
          </a>
        </div>
        <p style={{ marginTop: 50, fontSize: 15 }}>
          <hr style={{ width: 100, marginLeft: 100, marginBottom: -12 }}></hr>Or
          log in with{" "}
          <hr style={{ width: 100, marginLeft: 340, marginTop: -10 }}></hr>
        </p>
        <div className="GoogleIcon">
          <img
            src={GoogleIcon}
            alt="GoogleIcon"
            style={{ width: 20, height: 20, marginTop: 21 }}
          />
        </div>
        <div className="LinkedinIcon">
          <img
            src={LinkedinIcon}
            alt="GoogleIcon"
            style={{ width: 20, height: 20, marginTop: 21 }}
          />
        </div>
        <div className="microsoftIcon">
          <img
            src={microsoftIcon}
            alt="GoogleIcon"
            style={{ width: 20, height: 20, marginTop: 21 }}
          />
        </div>
        <div className="AppleIcon">
          <img
            src={AppleIcon}
            alt="GoogleIcon"
            style={{ width: 20, height: 20, marginTop: 21 }}
          />
        </div>
      </div>
    </form>
  );
}

export default Login;
