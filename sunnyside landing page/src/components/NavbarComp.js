import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavbarComp.css';
import {Link} from 'react-router-dom'


function NavbarComp() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} style={{position: "absolute",width: "100%"}}>
          <Container fluid className='sasa'>
            <Navbar.Brand as={Link} to="/" className='ms-3'><img src="../../images/logo.svg" alt="sunnyside" /></Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='offcanvas' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src="../../images/logo-offcanvas.svg" alt="sunnyside logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav id='link-container' className="justify-content-end flex-grow-1">

                  <Nav.Link as={Link} to="/about" id='nav-link' className='me-md-0 me-lg-4' >About</Nav.Link>
                  <Nav.Link as={Link} to="/services" id='nav-link' className='me-md-0 me-lg-4'>Services</Nav.Link>
                  <Nav.Link as={Link} to="/projects" id='nav-link'className='me-md-0 me-lg-4' >Projects</Nav.Link>
                  <Nav.Link as={Link} to="/contact" id='contact-link' className='me-md-0 me-lg-4' >CONTACT</Nav.Link>
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComp;