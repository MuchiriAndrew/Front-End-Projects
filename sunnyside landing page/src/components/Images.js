import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Images() {
    return (
        <Container fluid style={{height:"100%"}}>
          <Row>
            <Col className='gx-0' xs={6} md={3}>
            <img className='img-fluid d-md-none ' src="../../images/mobile/image-gallery-milkbottles.jpg" style={{width:"100%"}} alt="milkbottles" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-gallery-milkbottles.jpg" style={{width:"100%"}} alt="milkbottles" />
            </Col>

            <Col className='gx-0' xs={6} md={3}><img className='img-fluid d-md-none ' src="../../images/mobile/image-gallery-orange.jpg" style={{width:"100%"}} alt="orange" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-gallery-orange.jpg" style={{width:"100%"}} alt="orange" />
            </Col>

            <Col className='gx-0' xs={6} md={3}><img className='img-fluid d-md-none ' src="../../images/mobile/image-gallery-cone.jpg" style={{width:"100%"}} alt="cone" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-gallery-cone.jpg" style={{width:"100%"}} alt="cone" />
            </Col>

            <Col className='gx-0' xs={6} md={3}>
            <img className='img-fluid d-md-none ' src="../../images/mobile/image-gallery-sugar-cubes.jpg" style={{width:"100%"}} alt="sugarcubes" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-gallery-sugarcubes.jpg" style={{width:"100%"}} alt="sugarcubes" />
            </Col>
          </Row>
        </Container>
      );
}

export default Images