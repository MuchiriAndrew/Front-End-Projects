import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./cardComponent.css"

function CardComponent() {
  return (
    <Container fluid id='wrapper'>
    <Row id='row'>

      <Col xs={11} sm={10} md={9} lg={8} xl={6} className='content rounded-3'>

        
        <p className='mt-4' style={{color:" hsl(150, 100%, 66%)"}}>ADVICE #1</p>
        <h6 className='mb-4' style={{color:"hsl(193, 38%, 86%)", fontSize:"28px", fontFamily:"Manrope", width:"80%"}}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore sit, doloremque iste saepe vero nam. Quasi veritatis aperiam earum cum culpa omnis animi qui at soluta? Architecto, error possimus."</h6>
        <img className='img-fluid mb-5 d-none d-lg-block' src="../../images/pattern-divider-desktop.svg" alt="pattern-divider" />
        <img className='img-fluid mb-5 d-block d-lg-none' src="../../images/pattern-divider-mobile.svg" alt="pattern-divider" />

        <div id='circle' className='rounded-circle'>
            <img className='img-fluid' src="../../images/icon-dice.svg" alt="dice" />
        </div>
       
      </Col>
        
    </Row>
  </Container>
  )
}

export default CardComponent;