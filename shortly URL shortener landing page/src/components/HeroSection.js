import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeroSection.css';


function HeroSection() {
  return (
    <Container fluid id='wrapper' className=''>

      <Row className='row1'>
        <Col  md={6} id='col1' className='order-2 order-md-1 p-0'>

          <div id='text-wrapper'>

          <h1 id='h1'>More than just shorter links</h1>
          <p id='p'>Build your brand's recognition and get detailed insights on how your links are perfoming</p>
          <div className='started-link rounded-5'>
            Get Started
          </div>

          </div>
          
        
        </Col>

        <Col  md={6} id='col2' className='order-1 order-md-2 p-0'>

          <img className='img-fluid' src="../../images/illustration-working.svg" alt="working" />
        
        </Col>
      </Row>
    </Container>
  )
}

export default HeroSection