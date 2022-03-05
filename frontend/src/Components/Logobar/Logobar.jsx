import React from 'react'
import Logo from '../../Images/netflix.png'
import '../../App.css'
import './Logobar.css'
import { Link } from 'react-router-dom'

function Logobar() {
  return (
    <div>
        <nav className="flex text-gray-100 justify-between items-center py-3 px-4  w-full z-50 navSection">
        <div className="w-6/12">
          <Link to={'/'}>
            <img src={Logo} alt="logo" className="w-5/12 md:w-2/12 LogoBarLogo" />
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Logobar