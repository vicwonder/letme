import React, { useState } from "react";
import logo from "./Letme-Images/logo.png";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const setLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="header">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className={`links ${showLinks ? " links-open" : ""}`}>
        <a href="." style={{ color: "#FC6F5C" }}>
          Home
        </a>
        <a id="skill" href=".">
          About
        </a>
        <a href=".">Skill</a>
        <a href=".">Services</a>
        <a href=".">Portfolio</a>
        <a href=".">Testimonial</a>
        <a href=".">Blog</a>
        <a href=".">Contact</a>
      </div>
      <div className="head-icon">
        <FaBars onClick={setLinks} />
      </div>
    </nav>
  );
};

export default Header;
