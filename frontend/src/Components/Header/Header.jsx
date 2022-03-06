import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "headerNavbar active" : "headerNavbar"}>
      <Link to={'/'}>
        <img
          className="headerLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </Link>

      <div className="headerCategoryTextContainer">
        <div className="headerCategoryTextDiv">
          <p className="headerCategoryText active">Home</p>
        </div>
        <div className="headerCategoryTextDiv">
          <p className="headerCategoryText">TV Shows</p>
        </div>
        <div className="headerCategoryTextDiv">
          <p className="headerCategoryText">Movies</p>
        </div>
        <div className="headerCategoryTextDiv">
          <p className="headerCategoryText">Latest</p>
        </div>
        <div className="headerCategoryTextDiv">
          <p className="headerCategoryText">My List</p>
        </div>
      </div>

      <div className="headerOptionsContainer">
        <div className="headerOptionsDiv">
          <i class="fa-solid fa-magnifying-glass headerOptionsSearchIcon"></i>
        </div>
        <div className="headerOptionsDiv">
          <p className="headerOptionsText">KIDS</p>
        </div>
      </div>

      <img
        className="headerAvatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      /><i class="fa-solid fa-caret-down headerIconDropdown"/>
    </nav>
  );
}

export default Header;
