import React from 'react'
import NavbarComp from './NavbarComp'
import './Header.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <>
    <div className='bg-image'>
    <NavbarComp />
    
    {/* <div id='wrapper' className='container' >
    <h1>WE ARE CREATIVES</h1>
    <img src="../../images/icon-arrow-down.svg" alt="down arrow" />
    </div> */}

    <Container>
      <Row id='row1' className="text-center text-white justify-content-center align-items-center">
        <Col  xs={6}>
        <h1 style={{fontFamily:"Frances", fontWeight:"900",}}>WE ARE CREATIVES</h1>
        </Col>
      </Row>

      <Row id='row2' className="text-center justify-content-center align-items-center">
      <Col  xs={6}> <img  src="../../images/icon-arrow-down.svg" alt="down arrow" /></Col>
      </Row>
    </Container>
   

    </div>

    </>
  )
}

export default Header