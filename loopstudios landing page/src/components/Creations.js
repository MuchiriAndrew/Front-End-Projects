import React from 'react'
import './Creations.css';
import {Link} from 'react-router-dom'


function Creations() {
  return (
    <>
    <div className='creations-container'>
        <div className="creations-wrapper">

            <div className="heading">
            <h1>OUR CREATIONS</h1>
            </div>


            <div className="creations-grid">
                
                    <div id='div-hover' className='deep-earth'>
                        <p className='div-text'>DEEP<br/>EARTH</p>
                    </div>
                  
                    <div id='div-hover' className='night-arcade'>
                       <p className='div-text'> NIGHT<br/>ARCADE</p>
                    </div>

                    <div id='div-hover' className='soccer-team'>
                    <p className='div-text'>SOCCER<br/>TEAM VR</p>
                    </div>

                    <div id='div-hover' className='grid'>
                    <p className='div-text'>THE<br/>GRID</p>
                    </div>

                    <div id='div-hover' className='from-up-above'>
                    <p className='div-text'>FROM UP<br/>ABOVE VR</p>
                    </div>

                    <div id='div-hover' className='pocket-borealis'>
                    <p className='div-text'>POCKET<br/>BOREALIS</p>
                    </div>

                    <div id='div-hover' className='curiosity'>
                    <p className='div-text'>THE<br/>CURIOSITY</p>
                    </div>

                    <div id='div-hover' className='fisheye'>
                    <p className='div-text'>MAKE IT<br/>FISHEYE</p>
                    </div>

            </div>

            <Link to='/' className= 'buttonlink'>
            <button className='btn'>SEE ALL</button>
            </Link>
        </div>
    </div>
    
    </>
    
  )
}

export default Creations