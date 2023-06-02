import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css';

  function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);   
  
  return (

    <>

    <nav className='navbar' style={{ backgroundColor: click ? "black" : "transparent" }}>


        <div className='navbar-container'>

           <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu} >
           <img src="../../images/logo.svg" alt="loopstudios" />
           </Link>
           {/* <link> replaces the <a> tag */}


          {/* for the menu icon */}
           <div className='menu-icon' onClick={handleClick}>
            <motion.i
            whileTap={{rotate: [0, 200, 200, 0]}}
            
            className = {click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>

          {/* for toggling the menu on and off on mobile mode */}
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>


            {/* starts listing the navigation items */}

            <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick= {closeMobileMenu}>
              About
            </Link>
            </li>

            <li className='nav-item'>
            <Link to='/careers' className='nav-links' onClick= {closeMobileMenu}>
              Careers
            </Link>
            </li>

            <li className='nav-item'>
            <Link to='/events' className='nav-links' onClick= {closeMobileMenu}>
              Events
            </Link>
            </li>

            <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick= {closeMobileMenu}>
              Products
            </Link>
            </li>

            <li className='nav-item'>
            <Link to='/support' className='nav-links' onClick= {closeMobileMenu}>
              Support
            </Link>
            </li>

           </ul>

        </div>
    </nav>

    </>
  )
}


export default Navbar