import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import './AccountHeader.css'


function AccountHeader() {
  const [navbar, setNavbar] = useState(false);


  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  

  return (
    <nav className={navbar ? "headerNavbar active" : "headerNavbar"}>
      <Link to={"/"}>
        <img
          className="headerLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </Link>

      

      
      
      <div className="headerAvatarDiv">
      <img
        className="headerAvatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
      <i class="fa-solid fa-caret-down headerIconDropdown" />

      <ul className="header-dropdown-content accountheader-dropdown-content">
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
            <Link to={'/account'}><p className="headerDropdownContentYourAccount headerDropdownContentBottomText">
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

export default AccountHeader;
