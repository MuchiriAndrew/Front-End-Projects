import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <Container fluid className='wrapper5 p-0'>

        <Row className="foot-row mt-md-5">

            <Col md={4} className='brand-col'>
                <img id='brandimg' className='img-fluid' src="../../images/logo-white.svg" alt="logo" />
            </Col>

            <Col  md={4} className='dets-col'>

                <Row>
                    <Col md={4} >
                    <h5 className='myh5s' >Features</h5>

                    <ul className='myuls'>
                    <li id='list-items'>Link Shortening</li>
                    <li id='list-items'>Branded Links</li>
                    <li id='list-items'>Analytics</li>
                    </ul>
                    
                    
                    </Col>

                    <Col md={4}>
                    <h5 className='myh5s'>Resources</h5>
                    <ul className='myuls'>
                    <li id='list-items'>Blog</li>
                    <li id='list-items'>Developers</li>
                    <li id='list-items'>Support</li>
                    </ul>
                    
                    
                    </Col>

                    <Col md={4}>
                    <h5 className='myh5s'>Company</h5>

                    <ul className='myuls'>
                    <li id='list-items'>About</li>
                    <li id='list-items'>Our Team</li>
                    <li id='list-items'>Careers</li>
                    <li id='list-items'>Contact</li>
                    </ul>
                    </Col>
                </Row>

            </Col>

            <Col  md={4} className='socials-col'>
                <div className='socials-cont'>

                    <img id='scimg'  className='ms-md-5 me-4' src="../../images/icon-facebook.svg" alt="" />
                    <img id='scimg'  className='me-4' src="../../images/icon-twitter.svg" alt="" />
                    <img id='scimg' className='me-4' src="../../images/icon-pinterest.svg" alt="" />
                    <img id='scimg'  src="../../images/icon-instagram.svg" alt="" />

                </div>
            </Col>

        </Row>

    </Container>
  )
}

export default Footer