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

      <Row>
        <Col md={6} className='order-2 order-md-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat odio harum iste quia, placeat consequuntur? Numquam ipsa aperiam, repellat reprehenderit debitis totam reiciendis eveniet facilis nisi consectetur. Placeat, in officia.</Col>
        
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

        <Col md={6}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat distinctio sunt ut tenetur deleniti temporibus suscipit vero ad, esse dolore aperiam incidunt quis, sapiente nostrum dolorum possimus, eligendi adipisci quas?</Col>
      </Row>

      <Row>
        <Col id='col1' className='gx-0' md={6}>
            <img className='img-fluid d-md-none' src="../../images/mobile/image-graphic-design.jpg" style={{width:"100%"}} alt="egg" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-graphic-design.jpg" style={{width:"100%"}} alt="egg" />
            <div className='overlayText1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae voluptas sint quibusdam, omnis accusantium totam mollitia sequi optio laborum fugiat distinctio temporibus? Reprehenderit accusantium numquam porro corrupti expedita tenetur!</div>
        </Col>
        
        <Col id='col2'className='gx-0' md={6}>
            <img className='img-fluid d-md-none' src="../../images/mobile/image-photography.jpg" style={{width:"100%"}} alt="egg" />
            <img className='img-fluid d-none d-md-block' src="../../images/desktop/image-photography.jpg" style={{width:"100%"}} alt="egg" />
            <div className='overlayText1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem quis nam rem, eveniet dicta fuga officia repudiandae sed porro voluptatibus, dolorem cupiditate iusto magni hic dolorum non, maiores quae.</div>
        </Col>
       
      </Row>

</Container>
 
 </>
  )
}

export default Body