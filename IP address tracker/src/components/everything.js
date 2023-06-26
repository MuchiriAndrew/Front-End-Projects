import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import './everything.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Everything() {

  const [warning, setWarning] = useState(false);


  return (
    <Container fluid className='wrapper p-0'>

        <div id='input-div' className=''>

          <div className='inner-div ' >
              <h1 className='text-light'>IP Address Tracker</h1>
              <form className='form'>
                <input
                className='txtbox' 
                type="text"
                placeholder='Search for any IP address or domain'
                // style={{border:warning ? "2px solid red" : "none"}}
                />

                <button className='mybtn'>
                  <img src="../../images/icon-arrow.svg" alt="arrow" />
                </button>
              </form> 

          </div>    

        </div>


        

        <div id='map-div' className='bg-success'>
          <Container className='results-div  rounded-4'>
              <Row className='myrow  text-dark'>
                
                <Col id='col' className=''>

                  <div className=''>
                  <h6 className='text-muted'>IP ADDRESS</h6>
                  <h3>192.212.174.101</h3>
                  </div>
              
                </Col>

                <Col id='col' className=''>
                <div>
                  <h6 className='text-muted'>IP ADDRESS</h6>
                  <h3>192.212.174.101</h3>
                  </div>
                </Col>

                <Col  id='col' className=''>
                <div>
                  <h6 className='text-muted'>IP ADDRESS</h6>
                  <h3>192.212.174.101</h3>
                  </div>
                </Col>

                <Col id='col' className='' style={{borderRight:"none"}}>
                <div>
                  <h6 className='text-muted'>IP ADDRESS</h6>
                  <h3>192.212.174.101</h3>
                  </div>
                </Col>

              </Row>
          </Container>

          MY MAP
        </div>

    </Container>
  )
}

export default Everything;