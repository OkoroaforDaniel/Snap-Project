import React from "react";
import icon1 from "./Icons/client-databiz.svg";
import icon2 from "./Icons/client-audiophile.svg";
import icon3 from "./Icons/client-meet.svg";
import icon4 from "./Icons/client-maker.svg";

function Footer() {
  return (
    <div className="myFooter">
      <img className="icon1" src={icon1} alt="icon1" />
      <img className="icon2" src={icon2} alt="icon2" />
      <img className="icon3" src={icon3} alt="icon3" />
      <img className="icon4" src={icon4} alt="icon4" />
    </div>
  );
}

export default Footer;
