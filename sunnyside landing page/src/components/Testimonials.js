import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './Testimonials.css';

function Testimonials() {
    return (
        <Container className='text-center' fluid style={{height:"100vh"}}>
           
          <Row className='text-center' style={{height:"100%"}}>

          <h2 className='mb-5 mt-5'>CLIENT TESTIMONIALS</h2>
         
            <Col md={4} className='mb-5' >
                <div className='text-center justify-content-center align-items-center' style={{display:'flex', flexDirection:"column"}}>
                    <img src="../../images/image-emily.jpg" className='mb-5 img-fluid rounded-circle' alt="emily" style={{width:"15%"}} />
                    <p> <small>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit</small> </p>
                    <h5 className='mt-4'>Emily R.</h5>
                    <span className="mt-2">Marketing Director</span>
                </div>
            </Col>
           
            <Col md={4} className='mb-5'>
            <div className='text-center justify-content-center align-items-center' style={{display:'flex', flexDirection:"column"}}>
                    <img src="../../images/image-thomas.jpg" className='mb-5 img-fluid rounded-circle' alt="thomas" style={{width:"15%"}} />
                    <p> <small>Sunnysides's enthusiasm coupled with their keen interest in our brands's success made it a satisfying and enjoyable experience</small> </p>
                    <h5 className='mt-4'>Thomas S.</h5>
                    <span className="mt-2">Chief Operating Officer</span>
                </div>
            </Col>



            <Col md={4} className='mb-5'>
            <div className='text-center justify-content-center align-items-center' style={{display:'flex', flexDirection:"column"}}>
                    <img src="../../images/image-jennie.jpg" className='mb-5 img-fluid rounded-circle' alt="thomas" style={{width:"15%"}} />
                    <p> <small>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</small> </p>
                    <h5 className='mt-4'>Jennie F.</h5>
                    <span className="mt-2">Business Owner</span>
                </div>
            </Col>

          </Row>
        </Container>
      );
}

export default Testimonials