import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComp.css';
import { useState} from 'react';
import {Link} from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarComp() {

  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(true);

  const handleShow = () => {
    setShow(true);
    setDisplay(false);
  }

  const handleClose = () => {
    setShow(false);
    setDisplay(true);
  }

  return (
    <>

    {['md'].map((expand) => (

        <Navbar className='mt-2' bg="" expand={expand}>
            <Container id='mainCont'>  

            <Navbar.Brand as={Link} to="/" className='ms-4'>
            <img src="../../images/logo.svg" alt="logo"  className="brand img-fluid"/>
            </Navbar.Brand>

            <img className="img-fluid d-md-none"  onClick={handleShow} src="../../images/icon-hamburger.svg" alt="hamburger toggle" />


                    <Navbar.Offcanvas style={{width:"70vw",height: "max-content"}} show={show} onHide={handleClose} className='offcanvas rounded-4 mx-auto mt-5 mt-md-0' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="top" >

                        {/* <Offcanvas.Header className='justify-content-end mt-3 me-2'>
                        <img className='img-fluid' style={{ visibility: display ? "hidden" : "visible" }} onClick={handleClose} src="../../images/shared/icon-close.svg" alt="" />
                        </Offcanvas.Header> */}

                        <Offcanvas.Body className="inside-nav">
                        <Nav>
                        <Nav.Link id='navlink' className='ms-0 ms-md-3' as={Link} to="/">Features</Nav.Link>
                        <Nav.Link id='navlink'  className='ms-0 ms-md-3' as={Link} to="/">Pricing</Nav.Link>
                        <Nav.Link id='navlink'  className='ms-0 ms-md-3' as={Link} to="/">Resources</Nav.Link>
                        </Nav>

                        <hr id='hr1' className='d-block d-md-none'/>    

                        <Nav id='nav2'>
                        <Nav.Link id='navlink' className='me-0 me-md-5' as={Link} to="/">Login</Nav.Link>
                        <Nav.Link id='navlink' className='signup rounded-5' style={{color:"white"}} as={Link} to="/">Sign Up</Nav.Link>
                        </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
            </Container>
        </Navbar>
        ))}
        </> 
  )
}

export default NavbarComp