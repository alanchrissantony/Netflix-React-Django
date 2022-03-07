import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);


  const [home, setHome] = useState(false)
  const [tvShows, setTVShows] = useState(false)
  const [movies, setMovies] = useState(false)
  const [latest, setLatest] = useState(false)
  const [myList, setMyList] = useState(false)

  
  

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
          <Link to={'/home'}><p className={home ? "headerCategoryText active" : "headerCategoryText"}>Home</p></Link>
        </div>
        <div className="headerCategoryTextDiv">
          <Link to={'/tvshows'}><p className={tvShows ? "headerCategoryText active" : "headerCategoryText"}>TV Shows</p></Link>
        </div>
        <div className="headerCategoryTextDiv">
          <Link to={'/movies'}><p className={movies ? "headerCategoryText active" : "headerCategoryText"}>Movies</p></Link>
        </div>
        <div className="headerCategoryTextDiv">
          <Link to={'/latest'}><p className={latest ? "headerCategoryText active" : "headerCategoryText"}>Latest</p></Link>
        </div>
        <div className="headerCategoryTextDiv">
          <Link to={'/mylist'}><p className={myList ? "headerCategoryText active" : "headerCategoryText"}>My List</p></Link>
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
