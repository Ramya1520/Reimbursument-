import React from "react";
import "./Header.css";
import profile from "./assets/Profile.png";
import spritle from "./assets/Spritle-logo.png";

const Header = () => {
  return (
    <header className="header border-bottom">
      <div className="d-flex">
        <img src={spritle} alt="spritle" className="spritle" />
        <span className="header__title fw-600">Spritle Hub</span>
      </div>
      <div className="d-flex cg-11">
        <span className="pt-8">Ramya G</span>
        <img src={profile} alt="profile" className="profile" />
      </div>
    </header>
  );
};

export default Header;
