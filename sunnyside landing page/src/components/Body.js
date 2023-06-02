//a 6 picture grid system
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Body.css';

function Body() {
  return (
 <>

<Container fluid>

      <Row className='bg-danger'>
        <Col md={6}>TRANSFORM YOUR BRAND</Col>
        <Col className='d-md-none'><img src="../../images/mobile/image-transform.jpg" style={{width:"100%"}} alt="egg" /></Col>
        <Col className='d-none d-md-block text-start g-0' md={6}><img src="../../images/desktop/image-transform.jpg" style={{width:"100%"}} alt="egg" /></Col>
      </Row>

      <Row className='bg-primary'>
      <Col className='d-md-none'><img src="../../images/mobile/image-transform.jpg" style={{width:"100%"}} alt="egg" /></Col>
        <Col className='d-none d-md-block g-0' md={6}><img  src="../../images/desktop/image-transform.jpg" style={{width:"100%"}} alt="egg" /></Col>
        <Col md={6}>STAND OUT TO THE RIGHT AUDIENCE</Col>
      </Row>

      <Row>
        <Col md={6}><img className='img-fluid' src="" alt="" /></Col>
        <Col md={6}><img className='img-fluid' src="" alt="" /></Col>
      </Row>

</Container>
 
 </>
  )
}

export default Body