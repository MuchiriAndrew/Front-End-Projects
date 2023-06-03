import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavbarComp.css';

function NavbarComp() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} style={{position: "absolute",width: "100%"}}>
          <Container fluid className='sasa'>
            <Navbar.Brand className='ms-3' href="#"><img src="../../images/logo.svg" alt="sunnyside" /></Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='offcanvas' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src="../../images/logo-offcanvas.svg" alt="sunnyside logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav id='link-container' className="justify-content-end flex-grow-1 pe-3">

                  <Nav.Link  id='nav-link' className='me-4' href="#action1">About</Nav.Link>
                  <Nav.Link id='nav-link' className='me-4' href="#action2">Services</Nav.Link>
                  <Nav.Link  id='nav-link'className='me-4' href="#action2">Projects</Nav.Link>
                  <Nav.Link  id='contact-link' className='me-4 ' href="#action2">CONTACT</Nav.Link>
                  
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