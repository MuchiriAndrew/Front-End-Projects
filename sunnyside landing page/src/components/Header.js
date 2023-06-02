import React from 'react'
import NavbarComp from './NavbarComp'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <>
    <div className='wrapper'>
    <NavbarComp />
        <img className='img-fluid d-md-none' src="../../images/mobile/image-header.jpg" style={{width:"100%"}} alt="header" />
        <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-header.jpg" style={{width:"100%"}} alt="header" />

          <div id='text' >
            <div className="mb-5 text-center text-white justify-content-center align-items-center">
                   <h1 style={{fontFamily:"Frances", fontWeight:"900"}}>WE ARE CREATIVES</h1>
            </div>

            <div className="mt-5 text-center justify-content-center align-items-center">
                  <img  src="../../images/icon-arrow-down.svg" alt="down arrow"/>
            </div>
          </div>
       
    
    </div>
    </>
  )
}

export default Header