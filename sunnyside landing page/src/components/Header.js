import React from 'react'
import NavbarComp from './NavbarComp'
import './Header.css';


function Header() {
  return (
    <>
    <div className='wrapper'>
    <NavbarComp />
        <img className='img-fluid d-md-none' src="../../images/mobile/image-header.jpg" style={{width:"100%"}} alt="header" />
        <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-header.jpg" style={{width:"100%"}} alt="header" />

          <div id='text' >
            <div id="headertxt" className="text-center text-white justify-content-center align-items-center" style={{height:"min-content"}}>
                   <h1 style={{fontFamily:"Fraunces", fontWeight:"900", fontSize:"48px", letterSpacing:"5px"}}>WE ARE CREATIVES</h1>
            </div>

            <div className="mt-5 text-center justify-content-center align-items-center" style={{height:"min-content"}}>
                  <img className='img-fluid' src="../../images/icon-arrow-down.svg" alt="down arrow"/>
            </div>
          </div>
       
    
    </div>
    </>
  )
}

export default Header