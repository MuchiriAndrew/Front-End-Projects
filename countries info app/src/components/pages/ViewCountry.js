import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './ViewCountry.css'

function ViewCountry() {

    const [mode, setMode] = useState(true);
    const [moon, setMoon] = useState("bi bi-moon me-2");

    const handleMode = ()=> {
    setMode(!mode);

    if(moon === "bi bi-moon me-2" ){
      setMoon("bi bi-moon-fill text-light me-2")
    } else {
      setMoon("bi bi-moon me-2")
    }

    // if(search === "bi bi-search"){
    //   setSearch("bi bi-search text-light")
    // } else {
    //   setSearch("bi bi-search")
    // }
  } 

  return (
    <>
    <Container className='p-0' fluid id='wrapper-4' style={{backgroundColor: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"}}>

    <Navbar id='nav' style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)", height:"10vh"}}>
      <Container>
        <h4 style={{color: mode ? "black" : "white"}}>Where in the world?</h4>

        <div style={{color: mode ? "black" : "white"}}  id='mode-selector' onClick={handleMode}>
        <i className={moon}></i>
          Dark Mode
        </div>

      </Container>
    </Navbar>

   <Container id='wrapper-5' fluid style={{backgroundColor: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"}}>
    <Link style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)",color: mode ? "black" : "white"}} id='backbtn'>
    <i className="bi bi-arrow-left me-3"></i>
       Back
    </Link>
   </Container>

   <Container style={{color: mode ? "black" : "white"}} fluid id='wrapper-6' className=' p-0'>

    <Row id='row' className=''>
      <Col id='flag-col' className='= p-0'>
        <img id='country_img' className='img-fluid' src="../../images/ke.png" alt="" />
      </Col>

      <Col className='p-0' id='txt-col'>

      <div id='txt_wrapper' className=''>

        <Row className=' m-0' id='text_row'>
          <Col id='my_col1' className=''>
          <h3>Belgium</h3>

          <h5>Native Name: <span></span>   </h5>
          <h5>Population:<span></span></h5>
          <h5>Region:<span></span></h5>
          <h5>Sub Region:<span></span></h5>
          <h5>Capital:<span></span></h5>
          </Col>

          <Col  id='my_col2' className=''>

          <h5>Top Level Domain: <span></span>   </h5>
          <h5>Currencies:<span></span></h5>
          <h5>Languages:<span></span></h5>
          
          </Col>
        </Row>

        <div id='border-countries' className=''>

          <h5 className='me-md-3 '>Border Countries: </h5>

          <div id='list'>
          <div id='borders'>France</div>
          <div id='borders'>France</div>
          <div id='borders'>France</div>
          </div>
          

        </div>


      </div>

      
      
      </Col>
    </Row>


   </Container>


    </Container>
    


    </>
  )
}

export default ViewCountry 