import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./Components/Navbar";
import Body from "./Body";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Learnmore from "./pages/Learnmore";

function App() {
  var userIsRegistered = true;
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/Login"
          element={<Login isRegistered={userIsRegistered} />}
        />
        <Route path="/Register" element={<Register />} />
        <Route path="/Learnmore" element={<Learnmore />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
