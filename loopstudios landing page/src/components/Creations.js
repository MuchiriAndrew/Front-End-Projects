import React from 'react'
import './Creations.css';
import {Link} from 'react-router-dom'


function Creations() {
  return (
    <>
    <div className='creations-container'>
        <div className="wrapper">

            <div className="heading">

            <h1>OUR CREATIONS</h1>

            <Link to='/' className= 'buttonlink'>
            <button className='btn'>SEE HERE</button>
            </Link>

            </div>

            <div className="creations-grid">
                
                    <div className='deep-earth'>
                        <img src="/images/desktop/image-deep-earth" alt="" />
                    </div>
                  
                    <div className='night-arcade'>
                        <img src="/images/desktop/image-night-arcade" alt="" />
                    </div>

                    <div className='soccer-team'>
                        <img src="/images/desktop/image-soccer-team" alt="" />
                    </div>

                    <div className='grid'>
                        <img src="/images/desktop/image-grid" alt="" />
                    </div>

                    <div className='from-up-above'>
                        <img src="/images/desktop/image-from-up-above" alt="" />
                    </div>

                    <div className='pocket-borealis'>
                        <img src="/images/desktop/image-pocket-borealis" alt="" />
                    </div>

                    <div className='curiosity'>
                        <img src="/images/desktop/image-curiosity" alt="" />
                    </div>

                    <div className='fisheye'>
                        <img src="/images/desktop/image-fisheye" alt="" />
                    </div>

            </div>
        </div>
    </div>
    
    </>
    
  )
}

export default Creations