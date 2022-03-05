import React from "react";
import "./Navbar.css";
import "../../App.css";
import Logo from "../../Images/netflix.png";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="flex text-gray-100 justify-between items-center py-3 px-4  w-full z-50 navSection">
        <div className="w-6/12">
          <Link to={'/'}>
            <img src={Logo} alt="logo" className="w-5/12 md:w-2/12 navLogo" />
          </Link>
        </div>

        {/* <div>
          <form action="" method="post">
            <button className="bg-primary_red py-1 px-3 text-white md:text-lg rounded-md">
              Logout
            </button>
          </form>
        </div> */}

        <div>
          <Link to={'/account/login'}>
            <button className="bg-primary_red py-1 px-3 text-white md:text-lg rounded-md navSignInBtn">
              Sign In
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
