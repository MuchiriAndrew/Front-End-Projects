import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <Container fluid className='wrapper5 p-0'>

        <Row className="foot-row bg-primary">

            <Col md={4} className='brand-col bg-warning'>
                <img id='brandimg' className='img-fluid' src="../../images/logo.svg" alt="logo" />
            </Col>

            <Col  md={4} className='dets-col bg-danger'>
            </Col>

            <Col  md={4} className='socials-col bg-success'>
            </Col>

        </Row>

    </Container>
  )
}

export default Footer