import React from 'react'
import  Navbar  from './Navbar'
import { motion } from 'framer-motion'
import './Header.css';

function Header() {
  return (

    <>    

    <div className='header-container'>
    <Navbar />
    
    <motion.div className='header-text-wrapper' 
      animate={{
        y: [0, -5, 0, 5, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      >
      IMMERSIVE EXPERIENCES THAT DELIVER
    </motion.div>


    </div>
    
    </>
    
  )
}

export default Header