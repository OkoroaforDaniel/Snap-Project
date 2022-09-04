import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Learnmore from "./pages/Learnmore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

var userIsRegistered = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/Login"
          element={<Login isRegistered={userIsRegistered} />}
        />
        <Route path="/Register" element={<Register />} />
        <Route path="/Learnmore" element={<Learnmore />} />
      </Routes>
    </Router>
  </div>
);
