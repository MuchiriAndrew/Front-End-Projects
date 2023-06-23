import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./cardComponent.css"
import axios from 'axios';

function CardComponent() {

    const [advice, setAdvice] = useState("");

    const getAdvice = async() => {
        const response = await axios.get("https://api.adviceslip.com/advice")
        
        const advice = await response.data.slip;
        setAdvice(advice);
    }

   useEffect(()=> {
        getAdvice();
   },[])


  return (
    <Container fluid id='wrapper'>
    <Row id='row'>

      <Col xs={11} sm={10} md={9} lg={8} xl={6} className='content rounded-3'>

        
        <p className='mt-4' style={{color:" hsl(150, 100%, 66%)", letterSpacing:"4px", fontSize:"14px"}}>ADVICE #{advice.id}</p>
        <h6 className='mb-4' style={{color:"hsl(193, 38%, 86%)", fontSize:"28px", fontFamily:"Manrope", width:"80%"}}>"{advice.advice}"</h6>
        <img className='img-fluid mb-5 d-none d-lg-block' src="../../images/pattern-divider-desktop.svg" alt="pattern-divider" />
        <img className='img-fluid mb-5 d-block d-lg-none' src="../../images/pattern-divider-mobile.svg" alt="pattern-divider" />

        <div onClick={getAdvice} id='circle' className='rounded-circle'>
            <img className='img-fluid' src="../../images/icon-dice.svg" alt="dice" />
        </div>
       
      </Col>
        
    </Row>
  </Container>
  )
}

export default CardComponent;