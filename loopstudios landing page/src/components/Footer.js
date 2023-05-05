import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className='footer-container'>
        <div className="navigation_links">

            <div className='loopstudios'>

            <Link to = "/" className = "navbar_logo" >

            <img id='img' src="../../images/logo.svg" alt="loopstudios" />
            </Link>

            </div>

            <div className="nav_list">

                <li className='nav_item'>
                <Link to='/about' className='nav_links'>
                About
                </Link>
                </li>

                <li className='nav_item'>
                <Link to='/careers' className='nav_links' >
                Careers
                </Link>
                </li>

                <li className='nav_item'>
                <Link to='/events' className='nav_links' >
                Events
                </Link>
                </li>

                <li className='nav_item'>
                <Link to='/products' className='nav_links' >
                Products
                </Link>
                </li>

                <li className='nav_item'>
                <Link to='/support' className='nav_links' >
                Support
                </Link>
                </li>
            </div>

        </div>

        <div className="socials">

            <div className="social-media-logos">

            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </Link>

            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
              <i class='fab fa-twitter' />
            </Link>

            <Link class='social-icon-link pinterest' to='/' target='_blank' aria-label='Pinterest'>
              <i class='fab fa-pinterest' />
            </Link>

            <Link class='social-icon-link instagram'to='/'target='_blank' aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </Link>

            </div>

            <div className="copywrite">
              &copy; 2021 Loopstudios. All rights reserved
            </div>
        </div>
    </div>
    </>
   
  )
}

export default Footer