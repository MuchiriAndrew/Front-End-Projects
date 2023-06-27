import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComp.css'

function NavbarComp() {
  return (
    <Navbar id='nav' className='bg-info'>
      <Container>
        <h4 className='text-dark'>Where in the world?</h4>

        <div>
        <i className="bi bi-moon me-2"></i>
        {/* <i className="bi bi-moon-fill"></i> */}
          Dark Mode
        </div>

      </Container>
    </Navbar>
  )
}

export default NavbarComp