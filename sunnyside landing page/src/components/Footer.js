import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='text-center' style={{backgroundColor:"hsl(168, 100%, 84%)"}}>

      <div id='links'>

      <div id='logo'>
        <Link to='/'>
          <img className='img-fluid' src="../../images/logo-footer.svg" alt="logo" style={{marginTop:"50px"}} />
        </Link>
      </div>


       <div id='text-links' style={{marginTop:"50px"}}>
        <Link id="txt" to='./about' style={{textDecoration:"none", color:"hsl(168, 34%, 41%)", marginRight:"50px",}}>About</Link>
        <Link id="txt" to='./services' style={{textDecoration:"none", color:"hsl(168, 34%, 41%)", marginRight:"50px"}}>Services</Link>
        <Link id="txt" to='./projects' style={{textDecoration:"none", color:"hsl(168, 34%, 41%)"}}>Projects</Link>
       </div>

       <div id='social-media' style={{marginTop:"50px"}}>

        <Link to='/'>
        <img className='img-fluid' src="../../images/icon-facebook.svg" alt="facebook" style={{marginRight:"30px", fill:"red"}}/>
        </Link>

        <Link to='/'>
        <img className='img-fluid' src="../../images/icon-instagram.svg" alt="instagram" style={{marginRight:"30px"}}/>
        </Link>

        <Link to='/'>
        <img className='img-fluid' src="../../images/icon-twitter.svg" alt="twitter" style={{marginRight:"30px"}}/>
        </Link>
        
        <Link to='/'>
        <img className='img-fluid' src="../../images/icon-pinterest.svg" alt="pinterest" />
        </Link>
       </div>

      </div>

      
    </div>
  )
}

export default Footer