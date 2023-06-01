import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar bg="primary" variant="dark">

    <Container >
      <Navbar.Brand className="justify-content-start" href="#home"><img src="../../images/logo.svg" alt="sunnyside" /></Navbar.Brand>

      <Nav className="justify-content-end">
        <Nav.Link href="#home" className='me-4'>About</Nav.Link>
        <Nav.Link href="#features" className='me-4'>Services</Nav.Link>
        <Nav.Link href="#pricing" className='me-4'>Projects</Nav.Link>
        <Nav.Link href="#pricing" className='border border-white bg-light rounded-5 text-dark' >CONTACT</Nav.Link>
      </Nav>
    </Container>
    
  </Navbar>
  )
}

export default MyNavbar