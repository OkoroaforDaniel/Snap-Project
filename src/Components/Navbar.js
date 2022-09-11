import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon5 from "../Icons/logo.svg";
// import Radium, { StyleRoot } from "radium";
import CloseIcon from "../Icons/icon-close-menu.svg";
import "./styles/Navbar.css";
import InsertInvitationTwoToneIcon from "../Icons/icon-calendar.svg";
import AddAlertIcon from "../Icons/icon-reminders.svg";
import ScheduleIcon from "../Icons/icon-todo.svg";
import ListAltIcon from "../Icons/icon-planning.svg";
import arrowDown from "../Icons/icon-arrow-down.svg";
import arrowUp from "../Icons/icon-arrow-up.svg";
import Menu from "../Icons/icon-menu.svg";

// check if evreything is up to date

function Navbar() {
  const [click, setClick] = useState(false);
  const [fclick, setFclick] = useState(false);
  const [Cclick, setCclick] = useState(false);

  function handleClick() {
    setClick(true);
  }
  function handlexClick() {
    setClick(false);
  }
  function handlefeaturesClick() {
    setFclick(true);
  }
  function handlefeaturesxClick() {
    setFclick(false);
  }
  function handleCompanyClick() {
    setCclick(true);
  }
  function handleCompanyxClick() {
    setCclick(false);
  }

  return (
    <div className="NavBar">
      <div className="Nav">
        <Link className="NavLink" to="/">
          <img src={Icon5} className="snapIcon" alt="icon5" />
        </Link>
        {click === true ? (
          <div className="mobileMenuCollapsed">
            <img
              src={CloseIcon}
              alt="closeIcon"
              onClick={handlexClick}
              style={{
                marginLeft: 450,
                marginTop: 30,
                width: 50,
                height: 50,
              }}
            />
            <div className="collapsedDiv">
              {fclick === true ? (
                <>
                  <div onClick={handlefeaturesxClick}>
                    <a>Features </a>
                    <img id="arrowUp" src={arrowUp} alt="arrowdown" />
                  </div>

                  <div className="dropdown-content">
                    <div id="Hlist">
                      <img
                        src={ListAltIcon}
                        alt="listAltIcon"
                        style={{
                          width: 30,
                          height: 50,
                          marginRight: 20,
                          color: "purple",
                          paddingTop: 20,
                        }}
                      />
                      <a href="#">Todo List</a>
                    </div>
                    <div id="Hlist">
                      <img
                        src={InsertInvitationTwoToneIcon}
                        alt="InsertInvitationTwoToneIcon"
                        style={{
                          width: 30,
                          height: 50,
                          marginRight: 20,
                          color: "skyblue",
                          paddingTop: 20,
                        }}
                      />
                      <a href="#">Calendar</a>
                    </div>
                    <div id="Hlist">
                      <img
                        src={AddAlertIcon}
                        alt="AddAlertIcon"
                        style={{
                          width: 30,
                          height: 50,
                          marginRight: 20,
                          color: "yellow",
                          paddingTop: 20,
                        }}
                      />
                      <a href="#">Reminders</a>
                    </div>
                    <div id="Hlist">
                      <img
                        src={ScheduleIcon}
                        alt="ScheduleIcon"
                        style={{
                          width: 30,
                          height: 50,
                          marginRight: 20,
                          color: "pink",
                          paddingTop: 20,
                        }}
                      />
                      <a href="#">Planning</a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div onClick={handlefeaturesClick}>
                    <a>Features </a>
                    <img id="arrowDown" src={arrowDown} alt="arrowdown" />
                  </div>
                </>
              )}
              {Cclick === true ? (
                <>
                  <div onClick={handleCompanyxClick} id="companyList">
                    <a>Company</a>
                    <img id="arrowUp" src={arrowUp} alt="arrowdown" />
                  </div>
                  <div className="dropdown-content">
                    <div id="Hlist">
                      <a href="#">History</a>
                    </div>
                    <div id="Hlist">
                      <a href="#">Our Team</a>
                    </div>
                    <div id="Hlist">
                      <a href="#">Blog</a>
                    </div>
                  </div>
                </>
              ) : (
                <div onClick={handleCompanyClick} id="companyList">
                  <a>Company</a>
                  <img id="arrowDown" src={arrowDown} alt="arrowdown" />
                </div>
              )}

              <div id="Clist">
                <Link to="/Careers">Careers</Link>
              </div>
              <div id="Clist">
                <Link to="/About">About</Link>
              </div>
            </div>
            <div className="buttonCollapsed">
              <Link
                className="collapsedButton"
                to="/Login"
                style={{ border: 0, marginBottom: 0 }}
              >
                Login
              </Link>
              <Link className="collapsedButton" to="Register">
                Register
              </Link>
            </div>
          </div>
        ) : (
          <>
            <img src={Menu} alt="menu" className="Bars" onClick={handleClick} />
            <div className="NavMenu">
              {fclick === true ? (
                <div
                  className="laptopFeaturesDropdown"
                  onClick={handlefeaturesxClick}
                >
                  <div className="featuresArrow">
                    <div className="NavLinkFeatures">
                      Features
                    </div>
                    {/* <img
                    className="arrowUp-feature-desktop"
                    src={arrowUp}
                    alt="arrowUp"
                  /> */}
                  </div>

                  <div className="dropdown-content-feature-desktop">
                    <div id="Hlist">
                      <img
                        src={ListAltIcon}
                        alt="ListAltIcon"
                        style={{
                          width: 15,
                          height: 35,
                          marginLeft: 20,
                          color: "purple",
                          paddingTop: 20,
                        }}
                      />
                      <a
                        className="feature-desktop"
                        href="#"
                        style={{ marginLeft: 10 }}
                      >
                        Todo List
                      </a>
                    </div>
                    <div id="Hlist-feature-desktop">
                      <img
                        src={InsertInvitationTwoToneIcon}
                        alt="InsertInvitationTwoToneIcon"
                        style={{
                          width: 15,
                          height: 35,
                          marginLeft: 20,
                          color: "skyblue",
                          paddingTop: 20,
                        }}
                      />
                      <a
                        className="feature-desktop"
                        href="#"
                        style={{ marginLeft: 10 }}
                      >
                        Calendar
                      </a>
                    </div>
                    <div id="Hlist-feature-desktop">
                      <img
                        src={AddAlertIcon}
                        alt="AddAlertIcon"
                        style={{
                          width: 15,
                          height: 35,
                          marginLeft: 20,
                          color: "yellow",
                          paddingTop: 20,
                        }}
                      />
                      <a
                        className="feature-desktop"
                        href="#"
                        style={{ marginLeft: 10 }}
                      >
                        Reminders
                      </a>
                    </div>
                    <div id="Hlist-feature-desktop">
                      <img
                        src={ScheduleIcon}
                        alt="ScheduleIcon"
                        style={{
                          width: 15,
                          height: 35,
                          marginLeft: 20,
                          color: "pink",
                          paddingTop: 20,
                        }}
                      />
                      <a
                        className="feature-desktop"
                        href="#"
                        style={{ marginLeft: 10 }}
                      >
                        Planning
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="laptopFeatureDropup"
                  onClick={handlefeaturesClick}
                >
                  <div className="NavLinkFeatures" >
                    Features
                  </div>
                  {/* <img
                    className="arrowDown-feature-desktop"
                    src={arrowDown}
                    alt="arrowdown"
                  /> */}
                </div>
              )}
              <div className="company-full-desktop">
                {Cclick === true ? (
                  <div className="company-desktop">
                    <div
                      className="NavLinkCompany"
                      onClick={handleCompanyxClick}
                    >
                      Company
                    </div>
                    {/* <img className="arrowUp-company-desktop" src={arrowUp} alt="arrowUp" /> */}

                    <div className="dropdown-content-company-desktop">
                      <div id="Hlist-company-desktop">
                        <a className="company-desktop" href="#">
                          History
                        </a>
                      </div>
                      <div id="Hlist-company-desktop">
                        <a className="company-desktop" href="#">
                          Our Team
                        </a>
                      </div>
                      <div id="Hlist-company-desktop">
                        <a className="company-desktop" href="#">
                          Blog
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="company-arrowdown-desktop">
                    <div
                      className="NavLinkCompany"
                      onClick={handleCompanyClick}
                    >
                      Company
                    </div>
                    {/* <div id="arrowDown-company-desktop">
                  <img className="arrowDown-company-desktop" src={arrowDown} alt="arrowdown" />
                  </div> */}
                  </div>
                )}
              </div>

              <div className="careerAbout">
                <Link className="NavLinkCareers" to="/Careers">
                  Careers
                </Link>
                <Link className="NavLinkAbout" to="/About">
                  About
                </Link>
              </div>
            </div>
            <div className="NavBtn">
              <Link
                className="NavBtnLink"
                to="/Login"
                style={{ border: 0, backgroundColor: "whitesmoke" }}
              >
                Login
              </Link>
              <Link
                className="NavBtnLink"
                to="Register"
                style={{ backgroundColor: "whitesmoke" }}
              >
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
