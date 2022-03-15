import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useLocation } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [home, setHome] = useState(false);
  const [tvShows, setTVShows] = useState(false);
  const [movies, setMovies] = useState(false);
  const [latest, setLatest] = useState(false);
  const [myList, setMyList] = useState(false);

  const pathname = window.location.pathname;

  useEffect(() => {
    if (pathname === "/home") {
      setHome(true);
      setTVShows(false);
      setMovies(false);
      setLatest(false);
      setMyList(false);
    } else if (pathname === "/tvshows") {
      setHome(false);
      setTVShows(true);
      setMovies(false);
      setLatest(false);
      setMyList(false);
    } else if (pathname === "/movies") {
      setHome(false);
      setTVShows(false);
      setMovies(true);
      setLatest(false);
      setMyList(false);
    } else if (pathname === "/latest") {
      setHome(false);
      setTVShows(false);
      setMovies(false);
      setLatest(true);
      setMyList(false);
    } else if (pathname === "/mylist") {
      setHome(false);
      setTVShows(false);
      setMovies(false);
      setLatest(false);
      setMyList(true);
    }
  }, [location, pathname]);

  return (
    <nav className={navbar ? "headerNavbar active" : "headerNavbar"}>
      <Link to={"/"}>
        <img
          className="headerLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </Link>

      <div className="headerCategoryTextContainer">
        <div className="headerCategoryTextDiv">
          <Link to={"/home"}>
            <p
              className={
                home ? "headerCategoryText active" : "headerCategoryText"
              }
            >
              Home
            </p>
          </Link>
        </div>
        <div className="headerCategoryTextDiv">
          <Link to={"/tvshows"}>
            <p
              className={
                tvShows ? "headerCategoryText active" : "headerCategoryText"
              }
            >
              TV Shows
            </p>
          </Link>
        </div>
        <div className="headerCategoryTextDiv">
          <Link to={"/movies"}>
            <p
              className={
                movies ? "headerCategoryText active" : "headerCategoryText"
              }
            >
              Movies
            </p>
          </Link>
        </div>
        <div className="headerCategoryTextDiv">
          <Link to={"/latest"}>
            <p
              className={
                latest ? "headerCategoryText active" : "headerCategoryText"
              }
            >
              Latest
            </p>
          </Link>
        </div>
        <div className="headerCategoryTextDiv">
          <Link to={"/mylist"}>
            <p
              className={
                myList ? "headerCategoryText active" : "headerCategoryText"
              }
            >
              My List
            </p>
          </Link>
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
      
      <div className="headerAvatarDiv">
      <img
        className="headerAvatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
      <i class="fa-solid fa-caret-down headerIconDropdown" />

      <ul className="header-dropdown-content">
      <div className="headerDropdownContentContainer">
        <div className="headerDropdownContentDiv">
          <div className="headerDropdownContentTopDiv">
          <div className="headerDropdownContentManageProfilesDiv">
            <img src="https://imgur.com/YkyLA3e.png" alt="" className="headerDropdownContentKidsImg" />
              <p className="headerDropdownContentKids">
                Kids
              </p>
            </div>
            <div className="headerDropdownContentManageProfilesDiv">
              <Link to={'/manageprofiles'}><p className="headerDropdownContentManageProfiles">
                Manage Profiles
              </p></Link>
            </div>
          </div>
        </div>
        <div className="headerDropdownContentBottomContainer">
        <div className="headerDropdownContentBottomDiv">
            <div className="headerDropdownContentYourAccountDiv">
              <Link to={'/profile/account'}><p className="headerDropdownContentYourAccount headerDropdownContentBottomText">
                Account
              </p></Link>
            </div>
            <div className="headerDropdownContentSignOutDiv">
              <p className="headerDropdownContentSignOut headerDropdownContentBottomText">
                Sign out of Netflix
              </p>
            </div>
          </div>
        </div>
      </div>
      </ul>
      </div>
    </nav>
  );
}

export default Header;
