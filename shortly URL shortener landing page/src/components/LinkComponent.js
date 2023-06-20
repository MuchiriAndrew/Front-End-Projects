import React from 'react'
import './LinkComponent.css'
import Container from 'react-bootstrap/Container';

function LinkComponent() {
  return (
    <Container fluid id='wrapper2' className='p-0'>

      <div id="content-row">

        <div id='div1' className='rounded-3 mb-4'>
            <form className='form'>

                <input className='txtbox rounded-3' type="text" />
                <button className='mybtn rounded-3'>
                    Shorten It!
                </button>

            </form>
        
        </div>

        <div id='div2' className=''>
        
            <div className='copy mb-3 bg-light rounded-3'>

                <div id='example'>
                <p id='setLink' className='mb-0 ms-md-3'>https://www.sitebydrew.io</p>
                </div>
                

                <hr id='hr2' className='d-md-none' />

                <div className='inner-div'>
                    <p className='mb-0'>https://www.sitebydrew.io</p>
                    <div className='copybtn rounded-3'>Copy</div>
                </div>

            </div>

            <div className='copy mb-3 bg-light rounded-3'>
                <div id='example'>
                <p id='setLink' className='mb-0  ms-md-3'>https://www.sitebydrew.io</p>
                </div>

                <hr id='hr2' className='d-md-none' />

                <div className='inner-div'>
                    <p className='mb-0'>https://www.sitebydrew.io</p>
                    <div className='copybtn rounded-3'>Copy</div>
                </div>
            </div>

            <div className='copy mb-5 bg-light rounded-3'>
                <div id='example'>
                <p id='setLink' className='mb-0 ms-md-3 '>https://www.sitebydrew.io</p>
                </div>

                <hr id='hr2' className='d-md-none' />

                <div className='inner-div'>
                    <p className='mb-0'>https://www.sitebydrew.io</p>
                    <div className='copybtn rounded-3'>Copy</div>
                </div>
                
            </div>
        </div>

      </div>

    </Container>
  )
}

export default LinkComponent