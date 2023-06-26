import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import './everything.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Everything() {

  const [warning, setWarning] = useState(false);
  const [text,setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!text){
        setWarning(true);
    }else {
        setWarning(false);
    }
}


  return (
    <Container fluid className='wrapper p-0'>

        <div id='input-div'>

          <div className='inner-div ' >
              <h1 className='text-light'>IP Address Tracker</h1>
              <form className='form'  onSubmit={handleSubmit}>
                <input
                className='txtbox' 
                type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                placeholder={warning ? "Please input IP address" : 'Search for any IP address or domain'}
                style={{border:warning ? "2px solid red" : "none"}}
                />

                <button className='mybtn'>
                  <img src="../../images/icon-arrow.svg" alt="arrow" />
                </button>
              </form> 

          </div>    

        </div>

        <div id='map-div' className='bg-success'>
          <Container className='results-div  rounded-4'>
              <Row className='myrow'>
                
                <Col id='col' className=''>

                  <div className=''>
                  <h6 className=''>IP ADDRESS</h6>
                  <h3>192.212.174.101</h3>
                  </div>
              
                </Col>

                <Col id='col' className=''>
                <div>
                  <h6 className=''>LOCATION</h6>
                  <h3>Brooklyn, NY 10001</h3>
                  </div>
                </Col>

                <Col  id='col' className=''>
                <div>
                  <h6 className=''>TIMEZONE</h6>
                  <h3>UTC -05:00</h3>
                  </div>
                </Col>

                <Col id='col' className='' style={{borderRight:"none"}}>
                <div>
                  <h6 className=''>ISP</h6>
                  <h3>SpaceX Starlink</h3>
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