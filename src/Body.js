import React from "react";
import { Link } from "react-router-dom";
import image1 from "./assets/images/image-hero-desktop.png";
import image2 from "./assets/images/image-hero-mobile.png"

function Body() {
  return (
    <div className="mainBody">
      <div className="imageDivMobile">
        <img className="desktopMain" src={image2} alt="desktop_image" ></img>
      </div>
      <div className="textDivDesktop">
        <h1>
          Make <br />
          remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, and <br />
          watch productivity soar.
        </p>
        <Link to='/Learnmore'>
        <button className="buttonBody">Learn more</button>
        </Link>
      </div>
      <div className="imageDivDesktop">
        <img className="desktopMain" src={image1} alt="desktop_image"></img>
      </div>
      <div className="textDivMobile">
        <h1>
          Make remote work
        </h1>
        <p>
          Get your team in sync, no matter your <br /> 
          location. Streamline processes, create <br /> 
          team rituals, and watch productivity soar.
        </p>
        <Link to='/Learnmore'>
        <button className="buttonBody">Learn more</button>
        </Link>
      </div>
    </div>
  );
}

export default Body;