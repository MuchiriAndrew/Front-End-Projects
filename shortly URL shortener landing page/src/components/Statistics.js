import React from 'react'
import './Statistics.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Statistics() {
  return (
    <Container fluid id='wrapper3' className='p-0'>

        <div id='surround'>

            <div className='txtwrap '>
                <h1 id='stath1'>Advanced Statistics</h1>
                <p id='statp'>Track how your links are perfoming across the web with our advanced statistics dashboard</p>
            </div>


            <Row className='cardrow'>

                <hr className='backhr p-0'/>
                <Col id='col_1' md={4} className='bg-white rounded-2 p-0'>
                    <div className='box'>
                        <h2 className='cardh2'>Brand Recognition</h2>
                        <p className='cardp'>Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instill confidence in your content.</p>

                    </div>
                </Col>

                <Col id='col_2' md={4} className='bg-white rounded-2 p-0'>
                    <div className='box'>
                            <h2 className='cardh2'>Detailed Records</h2>
                            <p className='cardp'>Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                </Col>

                <Col md={4} id='col_3' className='bg-white rounded-2 p-0'>
                    <div className='box'>
                        <h2 className='cardh2'>Fully Customizable</h2>
                        <p className='cardp'>Improve brand awareness and content discoverability through customizable links, superchanging audience engagement</p>

                    </div>
                </Col>
            </Row>



        </div>
       
    </Container>
  )
}

export default Statistics