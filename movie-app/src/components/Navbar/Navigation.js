import React, { useState } from "react";
import "./Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

export const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="logo-mobile">
            <Link to="/">MovieStats</Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="navbar-logo">
              <li className="nav-text">
                <Link to="/">MovieStats</Link>
              </li>
            </ul>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((el, index) => {
                return (
                  <li key={index} className={el.className}>
                    <Link to={el.path}>
                      {el.icon}
                      <span>{el.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sign-up-item" onClick={showSidebar}>
              <li className="nav-text">
                <Link to="/signup" className="aa">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};
