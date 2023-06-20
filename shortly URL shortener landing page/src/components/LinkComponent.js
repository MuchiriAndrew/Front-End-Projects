import React from 'react'
import './LinkComponent.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LinkComponent() {
  return (
    <Container fluid id='wrapper2' className='bg-info'>

      <div id="content-row">

        <div id='div1' className='rounded-3'>
            <form className='form'>

                <input className='txtbox rounded-3' type="text" />
                <button className='mybtn rounded-3'>
                    Shorten It!
                </button>

            </form>
        
        </div>

        <div id='div2' className='bg-danger'>
        fajsidjid
        </div>

      </div>

    </Container>
  )
}

export default LinkComponent