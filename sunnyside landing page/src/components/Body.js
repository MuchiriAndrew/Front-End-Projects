//a 6 picture grid system
import {Link} from 'react-router-dom'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Body.css';

function Body() {
  return (
 <>

<Container fluid>

      <Row>
        <Col md={6} id="text-columns" className='order-2 order-md-1 '>

          <div id="text-divs" >

          <h1 className='mb-4' style={{color:"black", fontSize:'40px'}}>Transform your brand</h1>
        <p className='mb-5' style={{color:"hsl(213, 9%, 39%)",lineHeight:"25px"}}>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketting for you.</p>
        <Link to='./about' id='link1' >LEARN MORE</Link>

          </div>
        
        </Col>
        
{/* make use of bootstrap order classes in order to reorder the text and images once the screen sze gets to medium */}

        <Col className='gx-0 order-1 order-md-2' md={6}>
            <img className='img-fluid d-md-none ' src="../../images/mobile/image-transform.jpg" style={{width:"100%"}} alt="egg" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-transform.jpg" style={{width:"100%"}} alt="egg" />
        </Col>
      </Row>

      <Row>

      <Col className='gx-0' md={6}>
            <img className='img-fluid d-md-none' src="../../images/mobile/image-stand-out.jpg" style={{width:"100%"}} alt="egg" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-stand-out.jpg" style={{width:"100%"}} alt="egg" />
        </Col>

        <Col md={6} id="text-columns">
        <div id="text-divs" >

          <h1 className='mb-4' style={{color:"black", fontSize:'40px'}}>Stand out to the right audience</h1>
          <p className='mb-5' style={{color:"hsl(213, 9%, 39%)",lineHeight:"25px"}}>Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places.</p>
          <Link to='./about' id='link2'>LEARN MORE</Link>

          </div>
       
          </Col>
      </Row>

      <Row>
        <Col id='col1' className='gx-0' md={6}>
            <img className='img-fluid d-md-none' src="../../images/mobile/image-graphic-design.jpg" style={{width:"100%"}} alt="egg" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-graphic-design.jpg" style={{width:"100%"}} alt="egg" />

            <div className='overlayText'>

            <h3 className='mb-4' style={{color:"hsl(167, 40%, 24%)", fontSize:'24px'}}>Graphic Design</h3>
          <p className='mb-5' style={{color:"hsl(167, 40%, 24%)",lineHeight:"25px"}}>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>

            </div>
        </Col>
        
        <Col id='col2'className='gx-0' md={6}>
            <img className='img-fluid d-md-none' src="../../images/mobile/image-photography.jpg" style={{width:"100%"}} alt="egg" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-photography.jpg" style={{width:"100%"}} alt="egg" />
            
            <div className='overlayText'>
            <h3 className='mb-4' style={{color:"hsl(198, 62%, 26%)", fontSize:'24px'}}>Photography</h3>
            <p className='mb-5' style={{color:"hsl(198, 62%, 26%)",lineHeight:"25px"}}>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>

        </Col>
       
      </Row>

</Container>
 
 </>
  )
}

export default Body